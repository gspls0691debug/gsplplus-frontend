import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

const title = "회사 소개";
const description =
  "2015년 설립된 대전 유성구 가스펠플러스(Gospel Plus). 회로·PCB 설계, MCU 펌웨어, 측정·제어 프로그램, 검사 지그와 전장 개발 경험을 바탕으로 시제품 제작·시험과 기존 장비의 개선 검토를 수행합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "가스펠플러스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const principles = ["사람을 이롭게", "자연을 아름답게", "사회를 따뜻하게"];

const pillars = [
  {
    index: "01",
    title: "기획과 협력",
    description:
      "사용 환경과 요구사항을 함께 살펴보고, 먼저 확인할 기술 과제와 개발 범위를 정합니다. 필요한 기능과 실제 제작 조건을 바탕으로 구현 방향을 협의합니다.",
    color: "#3b82f6",
  },
  {
    index: "02",
    title: "개발과 구현",
    description:
      "회로·PCB와 펌웨어, 장비 제어·측정 프로그램을 연결해 실제로 동작하는 장비를 만듭니다. 센서·계측 보드와 검사 지그, 전장 제작 경험을 개발에 적용합니다.",
    color: "#8b5cf6",
  },
  {
    index: "03",
    title: "성장 동반",
    description:
      "시제품 시험부터 제작과 운용 지원까지 프로젝트에 필요한 범위를 함께 협의합니다. 기존 장비의 문제 분석과 기능 개선도 살펴보며, 현장에서 사용할 수 있는 결과물로 이어갑니다.",
    color: "#10b981",
  },
];

const history = [
  {
    year: "2026",
    items: [
      // 사용자 확인의 최근 배선 수행과 2026년 작업 자료 기준. 장비 종류·월은 미확정.
      { month: "", text: "원자력 분야 장비 전장 배선 작업" },
      // 2025년 C027과 별개인 99번 후속과제의 계약·PCB 제작 기록.
      { month: "", text: "피로도·호흡 감시용 다중 생체신호 정밀 센싱 모듈 개발" },
      { month: "", text: "전기·광 자극 환경용 생체신호 계측 모듈 설계" },
      { month: "", text: "VR 헤드셋 기반 눈 광자극기 개발" },
      // R01~R03: 2026년 보드 시험·분석과 프로그램 운용 자료. 신규 착수·납품 완료와 구분한다.
      { month: "", text: "무선 망막전위도(ERG) 측정 모듈 개발 및 PC 측정·분석 프로그램 구성" },
      { month: "", text: "PCB·FPCB 다품종 샘플 제작" },
    ],
  },
  {
    year: "2025",
    items: [
      { month: "", text: "원전 작업자 간 무선 통신장치 개발 및 시험" },
      { month: "", text: "군집 무인기용 전원 분배·변환 보드(PDB·BEC) 제작" },
      // C027: 2025.11 실적증명. 2026년 동종 후속과제와 구분한다.
      { month: "11", text: "피로도·호흡 분석용 다중 생체신호 웨어러블 센서 보드 개발" },
      // C026: 계약기간 2025.06.26~2026.02.26. 계약 종료일을 검수 완료일로 쓰지 않는다.
      { month: "06", text: "망막전위도(ERG) 측정·광자극 보드 개발 착수" },
      { month: "04", text: "안마기 신제품 PCB·제품 검사 지그 개발" },
    ],
  },
  {
    year: "2024",
    items: [
      { month: "09", text: "안마기 PCB·제품 검사 지그 및 검사 프로그램 개발" },
      { month: "02", text: "드론용 파워/통신/센싱 보드 개발" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "12", text: "낙하산 시뮬레이터 전장 제작 및 설치" },
      { month: "04", text: "경찰 VR 시뮬레이터 기구·전장 설계 및 제작" },
    ],
  },
  {
    year: "2022",
    items: [{ month: "11", text: "오토바이 무선충전 거치대 개발 및 양산" }],
  },
  {
    year: "2020",
    items: [{ month: "12", text: "드론 파워보드·전력 분배 보드 개발" }],
  },
  {
    year: "2019",
    items: [
      { month: "12", text: "32채널 아날로그 입력(AI) 측정·디스플레이 보드" },
      { month: "11", text: "LYNX 해군 패널류 성능 개선" },
      { month: "07", text: "반도체 공정 웨이퍼 온도 측정" },
    ],
  },
  {
    year: "2018",
    items: [
      { month: "10", text: "태양광 무선 수로 개폐 장치" },
      { month: "07", text: "잠수함 시뮬레이터 패널류 7종 개발" },
      { month: "03", text: "자동차 휠 속도센서(WSS) 개발" },
      { month: "03", text: "가로등용 150W LED 드라이버 및 가시광 통신 개발" },
    ],
  },
  {
    year: "2017",
    items: [
      { month: "12", text: "LYNX CFT 성능 개선 사업 참여" },
      { month: "03", text: "Zigbee 노드 보드" },
      { month: "03", text: "8W LED 조명 개발" },
      { month: "01", text: "신발 건조기 개발" },
    ],
  },
  {
    year: "2016",
    items: [
      { month: "06", text: "커피 로스터 기계 전장 개발" },
    ],
  },
  {
    year: "2015",
    items: [
      { month: "12", text: "가스펠플러스 설립" },
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
              가스펠플러스(Gospel Plus)는 2015년 설립한 대전 유성구의 엔지니어링 기업입니다.
              회로·PCB, 펌웨어와 장비 제어·측정 프로그램을 함께 개발합니다.
              <br />
              센서·계측 보드, 생산 검사 지그, 전장 제작을 중심으로
              시제품 개발과 기존 장비의 개선을 지원합니다.
            </p>
            <Link href="/portfolio" className={styles.portfolioLink}>
              주요 수행 사례 보기 <span aria-hidden="true">→</span>
            </Link>
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
              요구사항을 함께 정리하고, 개발과 시험을 거쳐 현장 적용까지 연결합니다.
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
              2015년 설립 이후 주요 개발·제작 이력을 소개합니다.
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
                  <h3 className={styles.timelineYear}>{group.year}</h3>
                  <ul className={styles.timelineList}>
                    {group.items.map((item) => (
                      <li key={`${group.year}-${item.month}-${item.text}`}>
                        {item.month && (
                          <time dateTime={`${group.year}-${item.month}`} className={styles.timelineDate}>
                            {item.month}월
                          </time>
                        )}
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
          title="회로·펌웨어·검사장비 개발이 필요하신가요?"
          subtitle="요구사항이나 기존 장비의 문제를 알려주시면 필요한 개발 범위를 함께 검토하겠습니다."
          primaryText="프로젝트 상담"
          variant="gradient"
        />
      </main>
    </div>
  );
}
