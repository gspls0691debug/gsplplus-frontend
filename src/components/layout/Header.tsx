// 2026-05-22 신규 생성: Header 컴포넌트 - CTA 버튼 + 모바일 메뉴 포함
"use client";

import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import styles from "./Header.module.css";

const navItems = [
  { href: "/about", label: "회사 소개" },
  { href: "/work", label: "서비스" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/location", label: "오시는 길" },
];

export default function Header() {
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const isMenuOpen = menuPath === pathname;

  if (menuPath !== null && menuPath !== pathname) {
    setMenuPath(null);
  }

  function closeMenu() {
    setMenuPath(null);
    menuButtonRef.current?.focus();
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!isMenuOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
    } else if (event.key === "Tab") {
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
      const lastLink = links?.[links.length - 1];
      if (event.shiftKey && document.activeElement === menuButtonRef.current) {
        event.preventDefault();
        lastLink?.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        menuButtonRef.current?.focus();
      }
    }
  }

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
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // 데스크탑 전환 후 숨겨진 메뉴가 스크롤과 초점을 붙잡지 않도록 닫는다.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px)");
    const handleChange = () => {
      if (desktop.matches) {
        if (menuRef.current?.contains(document.activeElement) || document.activeElement === menuButtonRef.current) {
          brandRef.current?.focus();
        }
        setMenuPath(null);
      }
    };
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} onKeyDown={handleMenuKeyDown}>
      <div className={styles.headerInner}>
        {/* 로고 */}
        <Link ref={brandRef} href="/" className={styles.brand} aria-label="Gospel Plus 홈" onClick={() => setMenuPath(null)}>
          <Image
            src="/gsplplus_logo.png"
            alt="Gospel Plus"
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
          <Link href="/contact" className={styles.mobileCtaBtn} onClick={() => setMenuPath(null)}>
            문의
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => isMenuOpen ? closeMenu() : setMenuPath(pathname)}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="모바일 주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileNavLink} ${
                pathname === item.href ? styles.mobileNavLinkActive : ""
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileMenuDivider} />

        <Link
          href="/contact"
          className={styles.mobileMenuCta}
          onClick={closeMenu}
        >
          문의하기
        </Link>

        <div className={styles.mobileMenuContact}>
          <p className={styles.mobileContactLink}>
            <Icon name="mail" size={18} />
            polaris65b@gspls.kr
          </p>
        </div>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
