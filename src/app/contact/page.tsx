// 2026-05-22 신규 생성: Contact 페이지 (서버 컴포넌트) - 연락처, 지도 포함
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "가스펠플러스(GSPLPLUS)에 이메일로 프로젝트 문의를 보내주세요. 임베디드 하드웨어, 소프트웨어, 시스템 통합 관련 무료 상담을 제공합니다. 1영업일 내 답변드립니다.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Contact Us</p>
            <h1 className={styles.heroTitle}>프로젝트 상담</h1>
            <p className={styles.heroLead}>
              임베디드 개발 관련 문의사항을 이메일로 보내주시면
              <br />
              담당자가 연락드립니다.
            </p>
          </div>
        </section>

        {/* 연락처 정보 */}
        <div className={styles.content}>
          {/* 이메일 카드 */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📧</div>
            <h3>이메일 문의</h3>
            <p className={styles.infoLink}>polaris65b@gspls.kr</p>
            <p className={styles.infoDesc}>24시간 접수 가능</p>
          </div>

          {/* 주소 카드 */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <h3>오시는 길</h3>
            <p className={styles.infoAddress}>
              대전광역시 유성구
              <br />
              배울1로 277, 4동
            </p>
          </div>
        </div>

        {/* 지도 섹션 */}
        <section className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h2>찾아오시는 길</h2>
            <p>대전광역시 유성구 배울1로 277, 4동</p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              className={styles.mapFrame}
              title="GSPLPLUS 사무실 위치 지도"
              src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%B0%EC%9A%B81%EB%A1%9C%20277%204%EB%8F%99&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
