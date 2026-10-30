// 2026-05-22 신규 생성: 포트폴리오 페이지 - 프로젝트 갤러리
// 2026-09-11 수정: 연혁에 없는 항목 삭제, 필터 제거, 연혁 기반 실제 프로젝트로 재구성
// 2026-09-18 수정: 발주처를 업종으로 표기, 2025~2026 실적 추가, 회사소개서 사양으로 설명 보강
// 2026-09-18 수정: 대표 프로젝트(연도 없이)와 연도별 프로젝트 섹션으로 분리, 데이터는 src/data/projects.ts
import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { projects, featuredProjects } from "@/data/projects";
import styles from "./page.module.css";

const title = "PCB·펌웨어·검사장비 개발 포트폴리오";
const description =
  "가스펠플러스의 회로·PCB 설계, 펌웨어, PC 측정 프로그램, 검사 지그, 전장 제작 사례입니다. 연구용 ERG 계측, 드론 전원보드, 장비 간섭 분석 등 프로젝트별 수행 업무를 확인하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title,
    description,
    url: "/portfolio",
    siteName: "가스펠플러스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

// 최신 연도부터 표시하고, 연도를 확정할 수 없는 사례는 마지막에 모은다.
const years = [...new Set(projects.map((project) => project.year))].sort(
  (a, b) => (b ?? "").localeCompare(a ?? ""),
);

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Portfolio</p>
            <h1 className={styles.heroTitle}>포트폴리오</h1>
            <p className={styles.heroLead}>
              회로·PCB 설계와 펌웨어, 측정 프로그램, 검사 지그와 전장 제작까지,
              <br />
              프로젝트별로 수행한 개발·제작·시험·분석 업무를 소개합니다.
            </p>
          </div>
        </section>

        {/* 대표 프로젝트 (분야별, 연도 없이) */}
        <section className={styles.projectsSection} aria-labelledby="featured-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Featured</p>
            <h2 id="featured-title">대표 프로젝트</h2>
            <p>대표의 이전 직장 참여 경험과 가스펠플러스 수행 사례를 구분해 소개합니다.</p>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={styles.projectCard}
                style={
                  {
                    "--accent-color": project.color,
                    "--delay": `${index * 0.05}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.projectHeader}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  {project.client && (
                    <span className={styles.projectClient}>{project.client}</span>
                  )}
                </div>
                <p className={styles.projectCredit}>{project.attribution}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 연도별 프로젝트 (전체 목록) */}
        <section className={styles.yearSection} aria-labelledby="by-year-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>By Year</p>
            <h2 id="by-year-title">연도별 프로젝트</h2>
            <p>연도는 개발 자료의 최초 기록 또는 회사 연혁 기준이며, 납품 완료 연도를 뜻하지 않습니다.</p>
          </div>
          <div className={styles.yearList}>
            {years.map((year) => (
              <div key={year ?? "undated"} className={styles.yearGroup}>
                <h3 className={styles.yearLabel}>{year ?? "기타 개발 사례"}</h3>
                <ul className={styles.yearItems}>
                  {projects
                    .filter((project) => project.year === year)
                    .map((project) => (
                      <li key={project.title} className={styles.yearItem}>
                        <details className={styles.projectDetails}>
                          <summary>{project.title}</summary>
                          <p>{project.description}</p>
                        </details>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA 섹션 */}
        <CTASection
          title="비슷한 프로젝트가 필요하신가요?"
          subtitle="만들고 싶은 기능이나 현재 장비에서 겪는 문제를 알려주세요. 보유 도면이나 측정 자료가 있다면 함께 살펴보고 필요한 개발 범위를 협의하겠습니다."
          variant="gradient"
        />
      </main>
    </div>
  );
}
