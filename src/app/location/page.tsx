import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "오시는 길",
  description:
    "가스펠플러스(GSPLPLUS) 오시는 길 안내입니다. 대전광역시 유성구 배울1로 277, 4동에 위치해 있습니다.",
};

const infoCards = [
  {
    eyebrow: "Address",
    title: "주소",
    description: "대전광역시 유성구 배울1로 277, 4동",
    color: "#3b82f6",
  },
  {
    eyebrow: "Visit",
    title: "방문 안내",
    description: "방문 전에 미리 연락 주시면 일정과 위치를 안내해 드립니다.",
    color: "#F57C00",
  },
  {
    eyebrow: "Contact",
    title: "연락처",
    description: "이메일로 사전 문의해 주세요. polaris65b@gspls.kr",
    color: "#10b981",
  },
];

export default function LocationPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Location</p>
            <h1 className={styles.heroTitle}>오시는 길</h1>
            <p className={styles.heroLead}>
              방문 전 필요한 위치 정보와 방문 안내를 한 번에 확인하세요.
              <br />
              지도와 주소를 함께 보고 이동 경로를 미리 계획할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 방문 정보 카드 */}
        <section className={styles.infoSection} aria-labelledby="visit-info-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Visit Info</p>
            <h2 id="visit-info-title">방문 정보</h2>
            <p className={styles.sectionLead}>
              아래 정보를 확인하시고 편안한 방문이 되시길 바랍니다.
            </p>
          </div>

          <div className={styles.infoGrid}>
            {infoCards.map((card, index) => (
              <article
                key={card.title}
                className={styles.infoCard}
                style={
                  {
                    "--accent-color": card.color,
                    "--delay": `${index * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <p className={styles.cardEyebrow}>{card.eyebrow}</p>
                <h3 className={styles.infoTitle}>{card.title}</h3>
                <p className={styles.infoDesc}>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 지도 섹션 */}
        <section className={styles.mapSection} aria-labelledby="map-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Map</p>
            <h2 id="map-title">위치 안내</h2>
            <p className={styles.sectionLead}>
              지도에서 정확한 사무실 위치를 확인하세요.
            </p>
          </div>

          <div className={styles.mapCard}>
            <div className={styles.mapBox}>
              <iframe
                className={styles.mapFrame}
                title="GSPLPLUS 사무실 위치 지도"
                src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%B0%EC%9A%B81%EB%A1%9C%20277%204%EB%8F%99&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <CTASection
          title="방문 상담을 원하시나요?"
          subtitle="미리 연락 주시면 더욱 원활한 상담이 가능합니다."
          variant="gradient"
        />
      </main>
    </div>
  );
}
