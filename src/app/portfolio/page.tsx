// 2026-05-22 신규 생성: 포트폴리오 페이지 - 프로젝트 갤러리
// 2026-09-11 수정: 연혁에 없는 항목 삭제, 필터 제거, 연혁 기반 실제 프로젝트로 재구성
// 2026-09-18 수정: 발주처를 업종으로 표기, 2025~2026 실적 추가, 회사소개서 사양으로 설명 보강
// 2026-09-18 수정: 대표 프로젝트(연도 없이)와 연도별 프로젝트 섹션으로 분리, 데이터는 src/data/projects.ts
import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "대전 가스펠플러스(GSPLPLUS)의 수행 프로젝트: 생체신호 측정 보드, 원전 무선 통신장치, 드론 전원보드 양산, 안마의자·치과 장비 검사설비, 다목적실용위성 6호 보드, 잠수함 시뮬레이터 패널 등.",
};

const featured = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

// 최신 연도부터 (연도 안에서는 projects 순서 유지)
const years = [...new Set(projects.map((project) => project.year))].sort().reverse();

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
              위성·방산 시뮬레이터부터 생체신호·원자력·드론·검사 장비까지,
              <br />
              실제로 수행한 프로젝트입니다.
            </p>
          </div>
        </section>

        {/* 대표 프로젝트 (분야별, 연도 없이) */}
        <section className={styles.projectsSection} aria-labelledby="featured-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Featured</p>
            <h2 id="featured-title">대표 프로젝트</h2>
          </div>
          <div className={styles.projectsGrid}>
            {featured.map((project, index) => (
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
          </div>
          <div className={styles.yearList}>
            {years.map((year) => (
              <div key={year} className={styles.yearGroup}>
                <h3 className={styles.yearLabel}>{year}</h3>
                <ul className={styles.yearItems}>
                  {projects
                    .filter((project) => project.year === year)
                    .map((project) => (
                      <li key={project.title} className={styles.yearItem}>
                        {project.title}
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
          subtitle="귀사의 요구사항에 맞는 최적의 솔루션을 제안해 드립니다. 무료 상담을 통해 프로젝트를 시작하세요."
          variant="gradient"
        />
      </main>
    </div>
  );
}
