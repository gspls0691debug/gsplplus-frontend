// 2026-05-22 신규 생성: Header 컴포넌트 - CTA 버튼 + 모바일 메뉴 포함
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/about", label: "회사 소개" },
  { href: "/work", label: "서비스" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/location", label: "오시는 길" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 라우트 변경 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        {/* 로고 */}
        <Link href="/" className={styles.brand} aria-label="GSPLPLUS 홈">
          <Image
            src="/gsplplus_logo.png"
            alt="GSPLPLUS"
            width={67}
            height={32}
            className={styles.logo}
            priority
          />
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className={styles.desktopNav} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.navLinkActive : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 데스크탑 CTA */}
        <div className={styles.desktopActions}>
          <Link href="/contact" className={styles.ctaBtn}>
            문의하기
          </Link>
        </div>

        {/* 모바일 버튼들 */}
        <div className={styles.mobileActions}>
          <Link href="/contact" className={styles.mobileCtaBtn}>
            문의
          </Link>
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileNavLink} ${
                pathname === item.href ? styles.mobileNavLinkActive : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileMenuDivider} />

        <Link
          href="/contact"
          className={styles.mobileMenuCta}
          onClick={() => setIsMenuOpen(false)}
        >
          문의하기
        </Link>

        <div className={styles.mobileMenuContact}>
          <p className={styles.mobileContactLink}>
            <span>📧</span> polaris65b@gspls.kr
          </p>
        </div>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
