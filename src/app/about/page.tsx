import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "대전 유성구의 가스펠플러스(GSPLPLUS)는 2015년 창립 이래 PCB 설계, 전장 설계·제작, 임베디드 개발을 수행해 온 전문 기업입니다. 기획과 협력, 개발과 구현, 성장 동반의 가치로 고객과 함께 성장합니다.",
};

const principles = ["사람을 이롭게", "자연을 아름답게", "사회를 따뜻하게"];

const pillars = [
  {
    index: "01",
    title: "기획과 협력",
    description:
      "고객의 요구사항과 문제점을 분석해 최적의 솔루션을 제안합니다. 전장설계, 회로설계, 보드개발 범위를 함께 검토하며 방향을 고민하고 기술을 공유하는 협력 파트너를 지향합니다.",
    color: "#3b82f6",
  },
  {
    index: "02",
    title: "개발과 구현",
    description:
      "축적된 노하우를 바탕으로 임베디드 기반의 다양한 솔루션을 구현합니다. 펌웨어, PC, Android, iOS 등 여러 환경을 아우르는 통합 관리와 제어 경험을 실제 장비 개발까지 연결합니다.",
    color: "#8b5cf6",
  },
  {
    index: "03",
    title: "성장 동반",
    description:
      "위탁 연구개발, 자사 제품, 센서 모듈 개발과 생산 및 납품까지 이어지는 원스톱 서비스를 제공합니다. 점검장비와 시뮬레이터 등 현장 적용 결과물로 고객의 성장 과정에 기여하는 것이 목표입니다.",
    color: "#10b981",
  },
];

const history = [
  {
    year: "2025",
    items: [{ month: "04", text: "안마기 업체 신제품 PCB 및 제품 검사 지그" }],
  },
  {
    year: "2024",
    items: [
      { month: "09", text: "안마기 업체 PCB 및 제품 검사 지그" },
      { month: "02", text: "드론용 파워/통신/센싱 보드 개발" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "12", text: "낙하산 시뮬레이터 전장 제작 및 설치" },
      { month: "04", text: "경찰 VR 시뮬레이터 하드웨어" },
    ],
  },
  {
    year: "2022",
    items: [{ month: "11", text: "오토바이 무선충전 거치대 개발 및 양산" }],
  },
  {
    year: "2021",
    items: [{ month: "12", text: "마그네틱 활용 복강경 마킹 장비 개발" }],
  },
  {
    year: "2020",
    items: [{ month: "12", text: "드론 파워보드, 파워분배보드" }],
  },
  {
    year: "2019",
    items: [
      { month: "12", text: "AI 32채널 측정 및 디스플레이 보드" },
      { month: "11", text: "LYNX 해군 패널류 성능 개선" },
      { month: "07", text: "반도체 공정 웨이퍼 온도 측정" },
    ],
  },
  {
    year: "2018",
    items: [
      { month: "10", text: "태양광 무선 수로 개폐 장치" },
      { month: "07", text: "잠수함 시뮬레이터 패널류 7종 개발" },
      { month: "03", text: "자동차 휠 속도센서 WSS개발" },
      { month: "03", text: "가로등 150W LED 드라이브 및 가시광 통신" },
    ],
  },
  {
    year: "2017",
    items: [
      { month: "12", text: "LYNX CFT 성능 개선 사업 참여" },
      { month: "03", text: "미래테크원 Zigbee node 보드" },
      { month: "03", text: "미래테크원 8W LED 등 개발" },
      { month: "01", text: "신발 건조기 개발" },
    ],
  },
  {
    year: "2016",
    items: [
      { month: "12", text: "다목적실용위성 6호 Baseband TIU 보드" },
      { month: "06", text: "보카보카 커피 로스터 기계 전장 개발" },
      { month: "01", text: "GRA 시뮬레이터" },
    ],
  },
  {
    year: "2015",
    items: [
      { month: "12", text: "가스펠플러스 설립" },
      { month: "12", text: "GRA 시뮬레이터" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About Us</p>
            <h1 className={styles.heroTitle}>회사 소개</h1>
            <p className={styles.heroLead}>
              가스펠플러스(GSPLPLUS)는 대전 유성구에서 임베디드 하드웨어와
              소프트웨어를 함께 다루는 엔지니어링 기업입니다.
              <br />
              2015년 창업 이후 축적한 경험과 기술을 바탕으로 다양한 산업의
              요구사항과 기술 문제를 해결합니다.
            </p>
            <div className={styles.principles} aria-label="기업 이념">
              {principles.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 핵심 가치 섹션 */}
        <section className={styles.pillarsSection} aria-labelledby="pillars-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Core Values</p>
            <h2 id="pillars-title">우리의 핵심 가치</h2>
            <p className={styles.sectionLead}>
              기획과 협력, 개발과 구현, 성장 동반의 흐름으로
              고객과 함께 가치를 만들어 갑니다.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <article
                key={pillar.index}
                className={styles.pillarCard}
                style={
                  {
                    "--accent-color": pillar.color,
                    "--delay": `${index * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <span className={styles.pillarIndex}>{pillar.index}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 연혁 섹션 */}
        <section id="history" className={styles.historySection} aria-labelledby="history-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>History</p>
            <h2 id="history-title">기업 연혁</h2>
            <p className={styles.sectionLead}>
              2015년 설립 이후 진행해 온 주요 개발 이력입니다.
            </p>
          </div>

          <div className={styles.timeline}>
            {history.map((group, index) => (
              <article
                className={styles.timelineGroup}
                key={group.year}
                style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
              >
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span className={styles.timelineDot} />
                </div>
                <div className={styles.timelineCard}>
                  <p className={styles.timelineYear}>{group.year}</p>
                  <ul className={styles.timelineList}>
                    {group.items.map((item) => (
                      <li key={`${group.year}-${item.month}-${item.text}`}>
                        <span className={styles.timelineDate}>
                          {group.year}. {item.month}.
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA 섹션 */}
        <CTASection
          title="함께 성장할 파트너를 찾고 계신가요?"
          subtitle="10년 이상의 경험을 바탕으로 최적의 솔루션을 제안해 드립니다."
          variant="gradient"
        />
      </main>
    </div>
  );
}
