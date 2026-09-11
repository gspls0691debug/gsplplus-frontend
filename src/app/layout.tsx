// 2026-05-22 수정: 컴포넌트 분리, SEO 메타데이터 강화, JSON-LD 추가
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// 한글 웹폰트 (기기마다 다르게 보이지 않도록). 한글 글리프는 unicode-range 조각으로 자동 포함됨
const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "swap",
});

// SEO 최적화 메타데이터
const siteTitle = "대전 PCB 설계·전장 설계 제작 | 가스펠플러스(GSPLPLUS)";
const siteDescription =
  "대전 유성구의 PCB 설계·전장 설계 전문 기업 가스펠플러스(GSPLPLUS). 회로설계, PCB 아트웍, 보드 개발·양산, 전장 제작·설치, 펌웨어 개발, 점검장비·시뮬레이터 제작까지 2015년부터 원스톱으로 수행합니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gspls.kr"),
  title: {
    default: siteTitle,
    template: "%s | 가스펠플러스(GSPLPLUS)",
  },
  description: siteDescription,
  keywords: [
    "가스펠플러스",
    "GSPLPLUS",
    "gspls",
    "gspls.kr",
    "임베디드 하드웨어",
    "임베디드 소프트웨어",
    "임베디드 개발",
    "전장설계",
    "회로설계",
    "PCB설계",
    "보드개발",
    "시스템 통합",
    "SI",
    "점검장비",
    "시뮬레이터",
    "펌웨어 개발",
    "IoT 개발",
    "자동차 센서",
    "대전 임베디드",
    "대전 PCB",
    "대전 PCB 설계",
    "대전 전장",
    "대전 전장설계",
  ],
  authors: [{ name: "GSPLPLUS", url: "https://gspls.kr" }],
  creator: "GSPLPLUS",
  publisher: "GSPLPLUS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://gspls.kr/",
    siteName: "가스펠플러스(GSPLPLUS)",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console 등록 시 추가
    // google: "verification_token",
  },
};

// JSON-LD 구조화 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "가스펠플러스",
  alternateName: "GSPLPLUS",
  url: "https://gspls.kr",
  logo: "https://gspls.kr/gsplplus_logo.png",
  description: siteDescription,
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "배울1로 277, 4동",
    addressLocality: "유성구",
    addressRegion: "대전광역시",
    postalCode: "34036",
    addressCountry: "KR",
  },
  hasMap:
    "https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%B0%EC%9A%B81%EB%A1%9C%20277",
  contactPoint: {
    "@type": "ContactPoint",
    email: "polaris65b@gspls.kr",
    contactType: "customer service",
    availableLanguage: ["Korean"],
  },
  sameAs: [],
  areaServed: ["대전광역시", "세종특별자치시", "충청남도", "충청북도", "대한민국"],
  knowsAbout: [
    "PCB 설계",
    "PCB 아트웍",
    "전장 제작",
    "임베디드 하드웨어 개발",
    "임베디드 소프트웨어 개발",
    "시스템 통합",
    "전장 설계",
    "회로 설계",
    "보드 개발",
    "점검장비 개발",
    "시뮬레이터 개발",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 파비콘은 src/app/favicon.ico, 공유 이미지는 src/app/opengraph-image.tsx가 자동 처리 */}
        {/* 테마 색상 */}
        <meta name="theme-color" content="#c97707" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
