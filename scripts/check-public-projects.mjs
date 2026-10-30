import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

// npm run build 후 실행: 화면에서 숨긴 실적도 브라우저 파일에 남으면 공개된다.
const source = readFileSync("src/data/projects.ts", "utf8");
const context = {
  exports: {},
  require(name) {
    assert.equal(name, "server-only");
    return {};
  },
};
runInNewContext(
  ts.transpileModule(`${source}\nexports.hidden = allProjects.filter(p => p.hidden);`, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  context,
);

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    return entry.isDirectory() ? files(path) : [path];
  });
}

const browserFiles = files(".next/static").filter((path) => /\.(js|map)$/.test(path));
const pageFiles = files(".next/server/app").filter((path) => /\.(html|rsc)$/.test(path));
assert(browserFiles.length > 0 && pageFiles.length > 0, "Run npm run build first");
for (const path of [...browserFiles, ...pageFiles]) {
  const content = readFileSync(path, "utf8");
  for (const project of context.exports.hidden) {
    assert(!content.includes(project.title), `${path}: hidden project title`);
    assert(!content.includes(project.description), `${path}: hidden project description`);
  }
}
const portfolio = readFileSync(".next/server/app/portfolio.html", "utf8");
assert.equal([...portfolio.matchAll(/<details\b/g)].length, context.exports.projects.length);

const featured = context.exports.featuredProjects;
assert.equal(featured.length, 6);
assert.equal(new Set(featured.map((project) => project.title)).size, 6);
assert.equal(featured[0].attribution, "대표 참여 경력 · 이전 직장");
assert(!context.exports.projects.some((project) => project.title === featured[0].title));
assert(featured.slice(1).every((project) =>
  project.attribution === "가스펠플러스 수행" &&
  context.exports.projects.some((item) => item.title === project.title),
));

for (const [file, heading] of [["index", "projects-title"], ["portfolio", "featured-title"]]) {
  const html = readFileSync(`.next/server/app/${file}.html`, "utf8");
  const start = html.indexOf(`aria-labelledby="${heading}"`);
  assert(start >= 0);
  const section = html.slice(start, html.indexOf("</section>", start));
  assert.equal([...section.matchAll(/<article\b/g)].length, 6);
  let previous = -1;
  for (const project of featured) {
    const position = section.indexOf(project.title);
    assert(position > previous, `${file}: featured order`);
    assert(section.includes(project.description), `${file}: missing scope`);
    previous = position;
  }
  const credits = [...section.matchAll(/<p class="[^"]*projectCredit[^"]*">([^<]+)<\/p>/g)]
    .map((match) => match[1]);
  assert.deepEqual(credits, Array.from(featured, (project) => project.attribution));
}
console.log("PASS: hidden data excluded; public toggles preserved; six featured cases ordered and attributed on both pages.");
