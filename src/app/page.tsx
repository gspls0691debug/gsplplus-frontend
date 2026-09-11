// 2026-05-22 수정: 신뢰 배지, 파트너 로고, CTA 섹션 추가, 디자인 개선
// 2026-05-22 수정: 배경 영상 추가, 동적 애니메이션, 디자인 컨셉 적용
// 2026-05-22 수정: 영상 속도 조절, fade 효과, 스크롤 애니메이션, 흑백 효과
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

// 통계 데이터
const stats = [
  { value: "10", suffix: "+", label: "년 경력", desc: "2015년 창립" },
  { value: "100", suffix: "+", label: "프로젝트", desc: "성공적 납품" },
  { value: "50", suffix: "+", label: "고객사", desc: "신뢰하는 파트너" },
  { value: "99", suffix: "%", label: "재계약률", desc: "고객 만족" },
];

// 핵심 서비스
const services = [
  {
    id: "hardware",
    icon: "🔧",
    title: "하드웨어 설계",
    subtitle: "Hardware Design",
    desc: "NXP, TI, STM, AVR 기반 설계 및 최적화, 정밀 센서 모듈 개발",
    features: ["회로 설계", "PCB 아트웍", "프로토타입"],
  },
  {
    id: "software",
    icon: "💻",
    title: "임베디드 소프트웨어",
    subtitle: "Embedded Software",
    desc: "펌웨어, OS 포팅, PC·모바일 앱 연동 제어 시스템 개발",
    features: ["펌웨어 개발", "OS 포팅", "앱 연동"],
  },
  {
    id: "integration",
    icon: "🔗",
    title: "시스템 통합",
    subtitle: "System Integration",
    desc: "장비와 소프트웨어를 통합한 현장 적용 솔루션 구현",
    features: ["SI 개발", "점검장비", "관제 시스템"],
  },
  {
    id: "automotive",
    icon: "🚗",
    title: "자동차 전장",
    subtitle: "Automotive",
    desc: "자동차 센서 및 자율주행 관련 모듈 설계·개발",
    features: ["WSS 센서", "파형 분석", "모듈 개발"],
  },
];

// 대표 프로젝트
const projects = [
  {
    year: "2025",
    title: "안마기 신제품 PCB 및 검사 지그",
    category: "점검장비",
    color: "#3b82f6",
  },
  {
    year: "2024",
    title: "드론용 파워/통신/센싱 보드",
    category: "하드웨어",
    color: "#10b981",
  },
  {
    year: "2023",
    title: "낙하산 시뮬레이터 전장 설치",
    category: "시뮬레이터",
    color: "#8b5cf6",
  },
  {
    year: "2022",
    title: "오토바이 무선충전 거치대 양산",
    category: "IoT",
    color: "#f59e0b",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 영상 속도 조절 (0.8배속 = 20% 감소)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  // 스크롤 시 요소 동적 표시 (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    // 관찰할 요소들 선택
    const animatedElements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* ===== 히어로 섹션 (배경 영상 포함) ===== */}
        <section className={styles.hero}>
          {/* 배경 영상 (0.8배속, fade 효과) */}
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
          
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <span className={styles.heroBadge}>
                🏆 10년 이상의 임베디드 전문 기업
              </span>
              <h1 className={styles.heroTitle}>
                설계부터 생산까지
                <br />
                <span className={styles.heroTitleAccent}>원스톱 엔지니어링</span>
              </h1>
              <p className={styles.heroDesc}>
                가스펠플러스(GSPLPLUS)는 임베디드 하드웨어와 소프트웨어를 함께
                다루는 엔지니어링 기업입니다. 다양한 산업의 요구사항을 바탕으로
                시스템을 설계하고 구현하며, 실제 현장에 적용 가능한 결과물까지
                연결합니다.
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
                <span>하드웨어</span>
                <span>소프트웨어</span>
                <span>시스템 통합</span>
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
                    점검장비, 시뮬레이터, VR/AR 장비개발
                  </li>
                  <li>
                    <span className={styles.dot} />
                    자동차 센서, IoT, 의료기기
                  </li>
                </ul>
                <Link href="/contact" className={styles.heroCardCta}>
                  무료 상담 신청 →
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
        <section className={`${styles.stats} ${styles.animateOnScroll}`} aria-label="주요 실적">
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
        <section className={`${styles.services} ${styles.animateOnScroll}`} aria-labelledby="services-title">
          <div className={styles.servicesInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Our Services</span>
              <h2 id="services-title" className={styles.sectionTitle}>
                핵심 서비스
              </h2>
              <p className={styles.sectionDesc}>
                하드웨어부터 소프트웨어, 시스템 통합까지
                <br />
                원스톱으로 제공하는 전문 엔지니어링 서비스
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
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
        <section className={`${styles.projects} ${styles.animateOnScroll}`} aria-labelledby="projects-title">
          <div className={styles.projectsInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Recent Projects</span>
              <h2 id="projects-title" className={styles.sectionTitle}>
                대표 프로젝트
              </h2>
              <p className={styles.sectionDesc}>
                다양한 산업 분야에서 축적한 개발 경험과 노하우
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <article
                  key={index}
                  className={styles.projectCard}
                  style={{ "--accent-color": project.color } as React.CSSProperties}
                >
                  <div className={styles.projectYear}>{project.year}</div>
                  <div className={styles.projectContent}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.projectsAction}>
              <Link href="/about#history" className={styles.projectsBtn}>
                전체 연혁 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 바로가기 카드 섹션 ===== */}
        <section className={`${styles.quickLinks} ${styles.animateOnScroll}`} aria-label="바로가기">
          <div className={styles.quickLinksInner}>
            <Link className={styles.quickCard} href="/about">
              <div className={styles.quickCardIcon}>🏢</div>
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
              <div className={styles.quickCardIcon}>⚙️</div>
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
              <div className={styles.quickCardIcon}>📞</div>
              <div className={styles.quickCardContent}>
                <span className={styles.quickCardLabel}>Contact</span>
                <h3>문의하기</h3>
                <p>
                  프로젝트 상담을 원하시면 문의해주세요. 1영업일 내 답변드립니다.
                </p>
              </div>
              <span className={styles.quickCardArrow}>→</span>
            </Link>
          </div>
        </section>

        {/* ===== CTA 섹션 ===== */}
        <CTASection
          title="프로젝트를 시작할 준비가 되셨나요?"
          subtitle="임베디드 전문가와 함께 여러분의 아이디어를 현실로 만들어 보세요. 무료 상담을 통해 최적의 솔루션을 제안해 드립니다."
          primaryText="무료 상담 신청"
          primaryHref="/contact"
        />
      </main>
    </div>
  );
}
