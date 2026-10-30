// 2026-05-22 수정: 신뢰 배지, 파트너 로고, CTA 섹션 추가, 디자인 개선
// 2026-05-22 수정: 배경 영상 추가, 동적 애니메이션, 디자인 컨셉 적용
// 2026-05-22 수정: 영상 속도 조절, fade 효과, 스크롤 애니메이션, 흑백 효과
import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";
import { projects as allProjects, featuredProjects } from "@/data/projects";
import HeroVideo from "./HeroVideo";
import styles from "./page.module.css";

// 통계 데이터
const stats = [
  { value: "2015", suffix: "", label: "설립 연도", desc: "대전 유성구" },
  { value: "10", suffix: "+", label: "년 개발 경력", desc: "임베디드 하드웨어·소프트웨어" },
  { value: String(allProjects.length), suffix: "", label: "공개 프로젝트", desc: "설계·개발·제작·분석 수행 사례" },
];

// 핵심 서비스
const services: {
  id: string;
  icon: IconName;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
}[] = [
  {
    id: "hardware",
    icon: "chip",
    title: "하드웨어 설계",
    subtitle: "Hardware Design",
    desc: "NXP, TI, STM, AVR 기반 설계 및 최적화, 정밀 센서 모듈 개발",
    features: ["회로 설계", "PCB 아트웍", "프로토타입"],
  },
  {
    id: "software",
    icon: "code",
    title: "임베디드 소프트웨어",
    subtitle: "Embedded Software",
    desc: "펌웨어와 장비 연동 PC 프로그램, 측정 데이터 표시·저장·분석 기능 개발",
    features: ["펌웨어 개발", "측정 프로그램", "장비 제어"],
  },
  {
    id: "integration",
    icon: "nodes",
    title: "시스템 통합",
    subtitle: "System Integration",
    desc: "장비와 소프트웨어를 통합한 현장 적용 솔루션 구현",
    features: ["SI 개발", "점검장비", "관제 시스템"],
  },
  {
    id: "automotive",
    icon: "car",
    title: "자동차 전장",
    subtitle: "Automotive",
    desc: "휠 속도센서(WSS)의 보드 설계와 펌웨어 개발",
    features: ["WSS 센서", "파형 분석", "모듈 개발"],
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* ===== 히어로 섹션 (배경 영상 포함) ===== */}
        <section className={styles.hero}>
          {/* 배경 영상 (0.8배속, fade 효과) */}
          <HeroVideo />
          <div className={styles.heroOverlay} />
          
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <span className={styles.heroBadge}>
                대전 유성구 · 2015년 설립 임베디드 전문 기업
              </span>
              <h1 className={styles.heroTitle}>
                PCB 설계부터
                <br />
                전장 제작까지
                <br />
                <span className={styles.heroTitleAccent}>원스톱 엔지니어링</span>
              </h1>
              <p className={styles.heroDesc}>
                대전 유성구의 가스펠플러스는 회로설계·PCB 아트웍과 펌웨어 개발을 수행합니다.
                시제품 제작부터 보드 양산, 전장 설치까지 함께합니다.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.heroPrimaryBtn}>
                  프로젝트 상담
                  <span className={styles.btnArrow}>→</span>
                </Link>
                <Link href="/work" className={styles.heroSecondaryBtn}>
                  서비스 살펴보기
                </Link>
              </div>
              <div className={styles.heroTags}>
                <span>PCB 설계</span>
                <span>전장 제작</span>
                <span>펌웨어</span>
                <span>생산·양산</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroCard}>
                <p className={styles.heroCardLabel}>주요 수행 분야</p>
                <ul className={styles.heroCardList}>
                  <li>
                    <span className={styles.dot} />
                    전장설계제작, 회로설계, 아트웍
                  </li>
                  <li>
                    <span className={styles.dot} />
                    시스템개발, 통합 제어, 보드개발양산
                  </li>
                  <li>
                    <span className={styles.dot} />
                    점검장비, 시뮬레이터, VR 훈련장비 개발
                  </li>
                  <li>
                    <span className={styles.dot} />
                    자동차 센서, IoT, 의료기기
                  </li>
                  <li>
                    <span className={styles.dot} />
                    생체신호 계측, 원자력 설비 통신장치
                  </li>
                </ul>
                <Link href="/contact" className={styles.heroCardCta}>
                  프로젝트 상담 →
                </Link>
              </div>
            </div>
          </div>

          {/* 배경 장식 */}
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.heroBgCircle1} />
            <div className={styles.heroBgCircle2} />
            <div className={styles.heroBgGrid} />
          </div>
        </section>

        {/* ===== 신뢰 배지 섹션 ===== */}
        <section className={styles.stats} aria-label="주요 실적">
          <div className={styles.statsInner}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statValue}>
                  {stat.value}
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDesc}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 서비스 섹션 ===== */}
        <section className={styles.services} aria-labelledby="services-title">
          <div className={styles.servicesInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Our Services</span>
              <h2 id="services-title" className={styles.sectionTitle}>
                핵심 서비스
              </h2>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <Icon name={service.icon} size={26} />
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceSubtitle}>
                      {service.subtitle}
                    </span>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                    <div className={styles.serviceFeatures}>
                      {service.features.map((feature) => (
                        <span key={feature} className={styles.serviceFeature}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/work#${service.id}`}
                    className={styles.serviceLink}
                    aria-label={`${service.title} 자세히 보기`}
                  >
                    →
                  </Link>
                </article>
              ))}
            </div>

            <div className={styles.servicesAction}>
              <Link href="/work" className={styles.servicesBtn}>
                전체 서비스 보기
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 프로젝트 섹션 ===== */}
        <section className={styles.projects} aria-labelledby="projects-title">
          <div className={styles.projectsInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Selected Projects</span>
              <h2 id="projects-title" className={styles.sectionTitle}>
                대표 프로젝트
              </h2>
              <p className={styles.sectionDesc}>
                대표의 군용 훈련·시험장비 개발 참여 경험과 가스펠플러스의 전장·계측·검사장비·PCB 개발 사례를 소개합니다.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className={styles.projectCard}
                  style={{ "--accent-color": project.color } as React.CSSProperties}
                >
                  <div className={styles.projectContent}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <p className={styles.projectCredit}>{project.attribution}</p>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.projectsAction}>
              <Link href="/portfolio" className={styles.projectsBtn}>
                전체 프로젝트 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 바로가기 카드 섹션 ===== */}
        <section className={styles.quickLinks} aria-label="바로가기">
          <div className={styles.quickLinksInner}>
            <Link className={styles.quickCard} href="/about">
              <div className={styles.quickCardIcon}>
                <Icon name="building" size={26} />
              </div>
              <div className={styles.quickCardContent}>
                <span className={styles.quickCardLabel}>About Us</span>
                <h3>회사 소개</h3>
                <p>
                  회사의 방향성과 철학, 10년간의 연혁과 핵심 가치를 확인하세요.
                </p>
              </div>
              <span className={styles.quickCardArrow}>→</span>
            </Link>

            <Link className={styles.quickCard} href="/work">
              <div className={styles.quickCardIcon}>
                <Icon name="layers" size={26} />
              </div>
              <div className={styles.quickCardContent}>
                <span className={styles.quickCardLabel}>Services</span>
                <h3>서비스</h3>
                <p>
                  설계, 개발, 점검장비, 시뮬레이터 등 업무 영역을 살펴보세요.
                </p>
              </div>
              <span className={styles.quickCardArrow}>→</span>
            </Link>

            <Link className={styles.quickCard} href="/contact">
              <div className={styles.quickCardIcon}>
                <Icon name="mail" size={26} />
              </div>
              <div className={styles.quickCardContent}>
                <span className={styles.quickCardLabel}>Contact</span>
                <h3>문의하기</h3>
                <p>
                  필요한 기능이나 장비의 문제를 알려주시면 개발 범위를 함께 검토하겠습니다.
                </p>
              </div>
              <span className={styles.quickCardArrow}>→</span>
            </Link>
          </div>
        </section>

        {/* ===== CTA 섹션 ===== */}
        <CTASection
          title="프로젝트를 시작할 준비가 되셨나요?"
          subtitle="회로·PCB 설계, 펌웨어, 측정 프로그램과 검사 지그 개발이 필요하시면 보유 자료와 요구사항을 보내주세요."
          primaryText="프로젝트 상담"
          primaryHref="/contact"
        />
      </main>
    </div>
  );
}
