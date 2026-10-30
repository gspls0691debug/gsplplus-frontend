// 2026-05-22 신규 생성: Contact 페이지 (서버 컴포넌트) - 이메일·주소 안내
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CopyEmail from "./CopyEmail";
import styles from "./page.module.css";

const title = "개발 외주·제작 문의";
const description =
  "회로·PCB 설계, 펌웨어, PC 측정 프로그램, 검사 지그·전장 제작을 가스펠플러스에 문의하세요. 필요한 기능과 장비 문제, 도면·측정 자료를 바탕으로 개발 범위를 협의합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName: "가스펠플러스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
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
              만들고 싶은 기능이나 현재 장비에서 겪는 문제를 이메일로 알려주세요.
              <br />
              장비 사진, 요구사항, 보유 도면이나 측정 자료가 있다면 함께 보내주세요.
              검토 후 필요한 개발 범위를 협의하겠습니다.
            </p>
          </div>
        </section>

        {/* 연락처 정보 */}
        <div className={styles.content}>
          {/* 이메일 카드 */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Icon name="mail" size={32} />
            </div>
            <h3>이메일 문의</h3>
            <CopyEmail />
            <p className={styles.infoDesc}>24시간 접수 가능</p>
          </div>

          {/* 주소 카드 */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Icon name="pin" size={32} />
            </div>
            <h3>오시는 길</h3>
            <p className={styles.infoAddress}>
              대전광역시 유성구
              <br />
              배울1로 277, 3동
            </p>
            <Link href="/location" className={styles.infoMore}>
              지도 보기 →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
