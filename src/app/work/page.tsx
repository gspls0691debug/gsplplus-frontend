import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "PCB 설계·전장 설계 서비스",
  description:
    "대전 유성구 가스펠플러스(GSPLPLUS)의 PCB 설계·아트웍, 전장 설계·제작·설치, 임베디드 소프트웨어, 시스템 통합 서비스. 시제품부터 양산과 검사 지그까지 대응합니다.",
};

const coreBusiness = [
  {
    key: "hardware",
    badge: "플랫폼",
    title: "임베디드 플랫폼 / BT 5.0",
    summary:
      "프로세서와 MCU 기반 하드웨어 설계부터 정밀 센서와 통신 모듈 개발까지 수행합니다.",
    items: [
      "NXP, TI, STM, AVR 기반 설계 및 최적화",
      "정밀 센서 모듈 설계 및 개발",
      "Bluetooth / Wi-Fi 통신용 하드웨어·소프트웨어 개발",
      "시뮬레이터 입출력 시스템 및 패널 개발",
    ],
    color: "#3b82f6",
  },
  {
    key: "software",
    badge: "소프트웨어",
    title: "임베디드 소프트웨어·모바일",
    summary:
      "OS 포팅, 펌웨어, 모바일과 PC 애플리케이션까지 연결해 제어 경험을 완성합니다.",
    items: [
      "Non-OS, WinCE, Embedded Linux 포팅",
      "펌웨어 개발",
      "PC·모바일 기반 앱 개발",
      "제어 및 관제 소프트웨어 구현",
    ],
    color: "#8b5cf6",
  },
  {
    key: "integration",
    badge: "통합",
    title: "시스템 통합(SI)",
    summary:
      "장비와 소프트웨어를 함께 묶어 실제 현장에서 사용할 수 있는 통합 시스템을 만듭니다.",
    items: [
      "점검장비용 PC 애플리케이션 개발",
      "시스템 SI 개발 및 통합 솔루션 구현",
      "웹 기반 프로그램 솔루션 제공",
    ],
    color: "#10b981",
  },
  {
    key: "automotive",
    badge: "자동차",
    title: "자동차 전장 / 자율주행 센서",
    summary:
      "자동차 센서 분야에서 신호 측정과 모듈 설계 역량을 바탕으로 제품을 개발합니다.",
    items: [
      "HR WSS 기반 센서 시스템 개발",
      "지능형 베어링 파형 센서 모듈 개발",
    ],
    color: "#ef4444",
  },
];

const businessFields = [
  "입출력 시스템 보드 개발",
  "원격의료 하드웨어 개발",
  "Bluetooth 4.0 / 5.0 / Wi-Fi 응용 제품 개발",
  "의료기기, 복강경, 스마트 체온계 개발",
  "HR WSS / 휠 파형 센서류 개발",
  "PCB 및 조립 단품 검사 장비 설계 제작",
  "훈련장비 전장 설계 제작 및 설치",
  "UH60FFS / LYNX FMS 정비",
];

const products = [
  "DI, AI, 디스플레이 입출력 보드",
  "아날로그 제어 계기패널 제어보드",
  "온도 / 압력 / 진동 / IR / 수질 / 가스 / 홀 센서보드",
  "산업용 PCB 검사 시스템",
  "산업용 단품 검사 시스템",
];

// 진행 방식 (연혁에 기록된 설계·양산·검사 지그·전장 설치·정비 이력 기준)
const processSteps = [
  {
    title: "상담·요구사항 정리",
    description: "목적, 필요한 기능, 일정과 수량을 함께 정리하고 개발 범위를 정합니다.",
    output: "개발 범위·일정 협의",
  },
  {
    title: "회로설계·PCB 아트웍",
    description: "MCU와 부품을 선정하고 회로도와 PCB 아트웍을 진행합니다.",
    output: "회로도, PCB 데이터, 부품 목록(BOM)",
  },
  {
    title: "시제품 제작·펌웨어 개발",
    description: "시제품 보드를 제작하고 펌웨어를 개발해 기능과 성능을 확인합니다.",
    output: "시제품 보드, 펌웨어",
  },
  {
    title: "양산·검사 지그",
    description: "양산에 대응하고, 필요 시 PCB·조립 단품 검사 지그를 함께 제작합니다.",
    output: "양산 보드, 검사 지그",
  },
  {
    title: "전장 제작·설치·정비",
    description: "시뮬레이터와 장비의 전장을 제작해 현장에 설치하고, 이후 정비까지 대응합니다.",
    output: "전장 설치, 정비 지원",
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Services</p>
            <h1 className={styles.heroTitle}>PCB 설계·전장 설계 제작</h1>
            <p className={styles.heroLead}>
              대전 유성구의 GSPLPLUS는 임베디드 시스템을 기반으로 하드웨어, 소프트웨어,
              <br />
              시스템을 개발하고 생산 및 납품까지 이어지는 원스톱 서비스를 제공합니다.
            </p>
          </div>
        </section>

        {/* 대표 서비스 소개 (PCB / 전장) */}
        <section className={styles.catalogSection} aria-labelledby="main-service-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Main Services</p>
            <h2 id="main-service-title">대전 PCB 설계·전장 설계 제작</h2>
            <p className={styles.sectionLead}>
              대전 유성구에서 회로설계부터 PCB 아트웍, 전장 제작과 현장 설치까지
              직접 수행합니다.
            </p>
          </div>

          <div className={styles.catalogGrid}>
            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>PCB Design</p>
              <h3>PCB 설계·아트웍</h3>
              <p className={styles.catalogText}>
                NXP, TI, STM, AVR 등 MCU·프로세서 기반의 회로설계와 PCB 아트웍을
                수행합니다. 드론용 파워·통신·센싱 보드, AI 32채널 측정·디스플레이
                보드, 온도·압력·진동·가스 등 각종 센서 보드를 개발해 왔습니다.
              </p>
              <p className={styles.catalogText}>
                시제품 제작에서 끝나지 않고 보드 양산과 PCB·조립 단품 검사 지그
                제작까지 이어서 대응합니다.
              </p>
            </article>

            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>Electrical Design</p>
              <h3>전장 설계·제작·설치</h3>
              <p className={styles.catalogText}>
                시뮬레이터와 훈련장비, 산업용 장비의 전장을 설계하고 제작부터 현장
                설치까지 수행합니다. 낙하산 시뮬레이터 전장 제작·설치, 잠수함
                시뮬레이터 패널류, 경찰 VR 시뮬레이터 하드웨어 등을 진행했습니다.
              </p>
              <p className={styles.catalogText}>
                커피 로스터 기계 전장, 무선충전 거치대 양산 등 제품 전장 개발도
                함께 수행합니다.
              </p>
            </article>
          </div>
        </section>

        {/* 핵심 사업 카드 그리드 */}
        <section className={styles.coreSection} aria-labelledby="core-business-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Core Business</p>
            <h2 id="core-business-title">핵심 사업 역량</h2>
            <p className={styles.sectionLead}>
              하드웨어부터 소프트웨어, 시스템 통합까지 4가지 핵심 분야에서
              전문 역량을 제공합니다.
            </p>
          </div>

          <div className={styles.coreGrid}>
            {coreBusiness.map((area, index) => (
              <article
                key={area.key}
                id={area.key}
                className={styles.coreCard}
                style={
                  {
                    "--accent-color": area.color,
                    "--delay": `${index * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.coreCardHeader}>
                  <span className={styles.coreBadge}>{area.badge}</span>
                </div>
                <h3 className={styles.coreTitle}>{area.title}</h3>
                <p className={styles.coreSummary}>{area.summary}</p>
                <ul className={styles.coreList}>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 진행 방식 */}
        <section className={styles.processSection} aria-labelledby="process-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Process</p>
            <h2 id="process-title">진행 방식</h2>
            <p className={styles.sectionLead}>
              설계부터 양산·설치까지 끊김 없이 이어서 진행합니다.
            </p>
          </div>

          <ol className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={step.title} className={styles.processStep}>
                <span className={styles.processIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.description}</p>
                <p className={styles.processOutput}>산출물 · {step.output}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 사업 분야 / 보유 제품 */}
        <section className={styles.catalogSection} aria-labelledby="business-fields-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Detailed Areas</p>
            <h2 id="business-fields-title">세부 사업 분야 및 보유 제품</h2>
          </div>

          <div className={styles.catalogGrid}>
            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>Business Fields</p>
              <h3>사업 분야</h3>
              <ul className={styles.catalogList}>
                {businessFields.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>Our Products</p>
              <h3>개발 보유 제품</h3>
              <ul className={styles.catalogList}>
                {products.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* CTA 섹션 */}
        <CTASection
          title="맞춤형 솔루션이 필요하신가요?"
          subtitle="프로젝트 요구사항에 맞는 최적의 기술 솔루션을 제안해 드립니다."
          variant="gradient"
        />
      </main>
    </div>
  );
}
