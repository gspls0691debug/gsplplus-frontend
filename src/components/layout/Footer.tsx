// 2026-05-22 신규 생성: Footer 컴포넌트 - 연락처, 빠른링크, 저작권 정보 포함
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerInner}>
          {/* 브랜드 영역 */}
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLogo}>
              <Image
                src="/gsplplus_logo_dark.png"
                alt="GSPLPLUS"
                width={160}
                height={77}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.brandDesc}>
              임베디드 하드웨어·소프트웨어 전문
              <br />
              엔지니어링 기업
            </p>
            <div className={styles.brandStats}>
              <span>10년+ 경력</span>
              <span>100+ 프로젝트</span>
            </div>
          </div>

          {/* 빠른 링크 */}
          <nav className={styles.links}>
            <h3 className={styles.linksTitle}>바로가기</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/about">회사 소개</Link>
              </li>
              <li>
                <Link href="/work">서비스</Link>
              </li>
              <li>
                <Link href="/portfolio">포트폴리오</Link>
              </li>
              <li>
                <Link href="/contact">문의하기</Link>
              </li>
              <li>
                <Link href="/location">오시는 길</Link>
              </li>
            </ul>
          </nav>

          {/* 서비스 영역 */}
          <nav className={styles.links}>
            <h3 className={styles.linksTitle}>서비스</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/work#hardware">하드웨어 설계</Link>
              </li>
              <li>
                <Link href="/work#software">임베디드 소프트웨어</Link>
              </li>
              <li>
                <Link href="/work#integration">시스템 통합</Link>
              </li>
              <li>
                <Link href="/work#automotive">자동차 전장</Link>
              </li>
            </ul>
          </nav>

          {/* 연락처 */}
          <div className={styles.contact}>
            <h3 className={styles.linksTitle}>연락처</h3>
            <address className={styles.address}>
              <p className={styles.addressLine}>
                <span className={styles.icon}>📍</span>
                대전광역시 유성구 배울1로 277, 4동
              </p>
              <p className={styles.addressLine}>
                <span className={styles.icon}>📧</span>
                polaris65b@gspls.kr
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
