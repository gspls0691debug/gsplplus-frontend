// 2026-05-22 신규 생성: 포트폴리오 페이지 - 프로젝트 갤러리
// 2026-09-11 수정: 연혁에 없는 항목 삭제, 필터 제거, 연혁 기반 실제 프로젝트로 재구성
import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "대전 가스펠플러스(GSPLPLUS)의 수행 프로젝트: 다목적실용위성 6호 보드, 해군·잠수함 시뮬레이터 패널, 경찰 VR 시뮬레이터, 의료기기, 드론 보드, PCB 검사 지그 등.",
};

type Project = {
  year: string;
  title: string;
  category: string;
  client?: string;
  description: string;
  tags: string[];
  color: string;
};

// 회사 소개 연혁에 공개된 항목만 수록 (설명은 연혁 문구 기준, 세부 내용은 추후 보강)
const projects: Project[] = [
  {
    year: "2025",
    title: "안마기 신제품 PCB 및 검사 지그 개발",
    category: "점검장비",
    client: "A사",
    description: "안마기 제품군의 신규 PCB 설계 및 양산 검사를 위한 자동화 지그 개발",
    tags: ["PCB 설계", "검사 지그", "자동화"],
    color: "#3b82f6",
  },
  {
    year: "2024",
    title: "드론용 파워/통신/센싱 보드 개발",
    category: "하드웨어",
    client: "B사",
    description: "드론 비행을 위한 전원 관리, 통신 모듈, 센서 통합 보드 설계 및 개발",
    tags: ["드론", "전원 관리", "센서 통합"],
    color: "#10b981",
  },
  {
    year: "2023",
    title: "낙하산 시뮬레이터 전장 제작 및 설치",
    category: "시뮬레이터",
    client: "C기관",
    description: "낙하산 훈련용 시뮬레이터의 전장 시스템 설계·제작 및 현장 설치",
    tags: ["시뮬레이터", "전장 설계", "훈련 장비"],
    color: "#8b5cf6",
  },
  {
    year: "2023",
    title: "경찰 VR 시뮬레이터 하드웨어",
    category: "시뮬레이터",
    description: "경찰 VR 시뮬레이터 하드웨어 개발",
    tags: ["VR", "시뮬레이터"],
    color: "#06b6d4",
  },
  {
    year: "2022",
    title: "오토바이 무선충전 거치대 개발 및 양산",
    category: "IoT",
    client: "D사",
    description: "오토바이용 스마트폰 무선충전 거치대 설계부터 양산까지 진행",
    tags: ["무선충전", "양산", "IoT"],
    color: "#f59e0b",
  },
  {
    year: "2021",
    title: "마그네틱 활용 복강경 마킹 장비 개발",
    category: "의료기기",
    description: "마그네틱을 활용한 복강경 마킹 장비 개발",
    tags: ["의료기기", "장비 개발"],
    color: "#ec4899",
  },
  {
    year: "2019",
    title: "AI 32채널 측정 및 디스플레이 보드",
    category: "하드웨어",
    description: "32채널 아날로그 입력(AI) 측정 및 디스플레이 보드 개발",
    tags: ["아날로그 입력", "계측", "보드 개발"],
    color: "#10b981",
  },
  {
    year: "2019",
    title: "LYNX 해군 패널류 성능 개선",
    category: "방산",
    description: "해군 LYNX 패널류 성능 개선",
    tags: ["방산", "패널", "성능 개선"],
    color: "#0ea5e9",
  },
  {
    year: "2019",
    title: "반도체 공정 웨이퍼 온도 측정",
    category: "산업 계측",
    description: "반도체 공정에서 웨이퍼 온도를 측정하는 하드웨어 개발",
    tags: ["반도체", "온도 측정"],
    color: "#14b8a6",
  },
  {
    year: "2018",
    title: "잠수함 시뮬레이터 패널류 7종 개발",
    category: "방산 시뮬레이터",
    description: "잠수함 시뮬레이터용 패널류 7종 개발",
    tags: ["시뮬레이터", "패널", "방산"],
    color: "#64748b",
  },
  {
    year: "2018",
    title: "자동차 휠 속도센서(WSS) 개발",
    category: "자동차 전장",
    description: "자동차 휠 속도 센서(WSS) 개발",
    tags: ["WSS", "센서", "자동차"],
    color: "#ef4444",
  },
  {
    year: "2016",
    title: "다목적실용위성 6호 Baseband TIU 보드",
    category: "항공우주",
    description: "다목적실용위성 6호용 Baseband TIU 보드 개발",
    tags: ["위성", "보드 개발"],
    color: "#8b5cf6",
  },
];

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
              위성·방산 시뮬레이터부터 의료기기·드론·검사 장비까지,
              <br />
              연혁에 기록된 실제 수행 프로젝트입니다.
            </p>
          </div>
        </section>

        {/* 프로젝트 그리드 */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
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
                  <span className={styles.projectYear}>{project.year}</span>
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
                <div className={styles.projectFooter}>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
              </article>
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
