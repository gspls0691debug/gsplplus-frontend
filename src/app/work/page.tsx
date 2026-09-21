import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "대전 PCB 설계·아트웍·전장 제작",
  description:
    "대전 PCB 설계·회로설계 외주, 펌웨어 개발, 시제품 제작, PCB 검사 지그, 전장 제작 업체 가스펠플러스(GSPLPLUS). 대전 유성구에서 설계부터 양산·현장 설치까지 대응합니다.",
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
  "생체신호(EEG·ERG·PPG·EMG) 계측 모듈 개발",
  "드론 전원 분배·변환 보드(PDB·BEC) 설계 및 양산",
  "원자력 설비 전장·무선 통신장치 개발",
];

const products = [
  "DI, AI, 디스플레이 입출력 보드",
  "아날로그 제어 계기패널 제어보드",
  "온도 / 압력 / 진동 / IR / 수질 / 가스 / 홀 센서보드",
  "산업용 PCB 검사 시스템 (Mini PC·Windows 11 기반 검사 프로그램 자체 개발)",
  "산업용 단품 검사 시스템",
];

// 의뢰 가능 업무: 고객이 실제로 검색하는 표현(외주·의뢰·업체·시제품·검사 지그, 2026-09-21 구글·네이버 자동완성 기준)으로 작성
// 내용은 src/data/projects.ts의 공개 프로젝트만 근거 (hidden 건 제외)
const outsourcing = [
  {
    eyebrow: "PCB Design",
    title: "PCB 설계·회로설계 외주",
    text: "회로설계와 PCB 아트웍을 외주로 맡기실 수 있습니다. 4층 기판, FPCB, COB(Chip on Board) 기판, 드론 전원 보드(PDB·BEC), 32·48채널 아날로그 입력 보드 등을 설계했습니다.",
  },
  {
    eyebrow: "Prototype & Production",
    title: "PCB 제작·시제품 제작 의뢰",
    text: "설계한 보드의 샘플·시제품 제작부터 양산까지 이어서 진행합니다. PCB·FPCB 13종 샘플 제작, 드론 전원 보드 양산, 입출력(IO) 보드 양산 등을 수행했습니다.",
  },
  {
    eyebrow: "Firmware",
    title: "펌웨어·임베디드 개발 외주",
    text: "STM32, nRF52(BLE), ESP32, AVR 기반 펌웨어 개발과 OS 포팅, Android 앱 연동까지 함께 개발합니다.",
  },
  {
    eyebrow: "Test Jig",
    title: "PCB 검사 지그·검사장비 제작",
    text: "양산 라인에서 쓰는 PCB 기능 검사 지그, 포고핀 지그, 완제품 검사장비를 기구·전장·검사 프로그램(GUI)까지 함께 제작합니다. 안마의자, 의료기기, 치과 장비, 센서 제품용 검사 지그를 개발했습니다.",
  },
  {
    eyebrow: "Control Board",
    title: "제어보드 개발",
    text: "스텝모터 제어보드, 40채널 DI·16채널 DO 입출력 제어보드, ESP32 제어보드 등 장비에 들어가는 제어보드를 회로설계부터 펌웨어까지 개발합니다.",
  },
  {
    eyebrow: "R&D",
    title: "연구 용역·연구 과제 시제품 개발",
    text: "정부출연연구기관·공공 연구기관의 연구 용역과 연구 과제에 참여해 생체신호(EEG·ERG·PPG·EMG) 계측 보드, 무선 측정 모듈, 복강경 장비 등을 개발해 왔습니다.",
  },
];

// 설계 도구·계측 장비 (회사 자료 기준: 설계 파일 형식, 구매 문서, 2026-03 교정성적서)
const designTools = [
  "회로·PCB 설계: EasyEDA Pro, PADS",
  "회로 시뮬레이션: Proteus",
  "기구·지그 설계: AutoCAD(2D), Inventor·IronCAD(3D)",
];

const equipment = [
  "YOKOGAWA DL9040 디지털 오실로스코프",
  "HIOKI 3803 디지털 멀티미터",
  "FLUKE 101 디지털 멀티미터",
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
            <h1 className={styles.heroTitle}>대전 PCB 설계·아트웍·전장 제작</h1>
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

        {/* 의뢰 가능 업무 (고객 검색어 기준) */}
        <section className={styles.catalogSection} aria-labelledby="outsourcing-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Outsourcing</p>
            <h2 id="outsourcing-title">개발 외주·제작 의뢰</h2>
            <p className={styles.sectionLead}>
              기업과 연구기관에서 아래와 같은 업무를 의뢰받아 수행해 왔습니다.
            </p>
          </div>

          <div className={styles.catalogGrid}>
            {outsourcing.map((item) => (
              <article key={item.title} className={styles.catalogCard}>
                <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className={styles.catalogText}>{item.text}</p>
              </article>
            ))}
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

        {/* 설계 도구 / 계측 장비 */}
        <section className={styles.catalogSection} aria-labelledby="tools-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Tools &amp; Equipment</p>
            <h2 id="tools-title">설계 도구 및 계측 장비</h2>
          </div>

          <div className={styles.catalogGrid}>
            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>Design Tools</p>
              <h3>설계 도구</h3>
              <ul className={styles.catalogList}>
                {designTools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.catalogCard}>
              <p className={styles.cardEyebrow}>Equipment</p>
              <h3>계측 장비</h3>
              <ul className={styles.catalogList}>
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.catalogText}>2026년 3월 공인 교정을 마쳤습니다.</p>
            </article>
          </div>
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
