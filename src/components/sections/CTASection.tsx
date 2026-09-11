// 2026-05-22 신규 생성: CTA 섹션 컴포넌트 - 행동 유도 섹션
import Link from "next/link";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  variant?: "default" | "dark" | "gradient";
}

export default function CTASection({
  title = "프로젝트를 시작할 준비가 되셨나요?",
  subtitle = "임베디드 전문가와 함께 여러분의 아이디어를 현실로 만들어 보세요.",
  primaryText = "문의하기",
  primaryHref = "/contact",
  variant = "gradient",
}: CTASectionProps) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.ctaInner}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaSubtitle}>{subtitle}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href={primaryHref} className={styles.primaryBtn}>
            {primaryText}
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </div>
      {/* 배경 장식 */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>
    </section>
  );
}
