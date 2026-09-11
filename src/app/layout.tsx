// 2026-05-22 수정: 컴포넌트 분리, SEO 메타데이터 강화, JSON-LD 추가
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 최적화 메타데이터
const siteTitle = "가스펠플러스(GSPLPLUS) | 임베디드 하드웨어·소프트웨어 개발";
const siteDescription =
  "가스펠플러스(GSPLPLUS)는 10년 이상의 경험을 보유한 임베디드 전문 기업입니다. 전장설계, 회로설계, 보드개발, 시스템 통합, 점검장비 및 시뮬레이터 개발까지 원스톱 서비스를 제공합니다. gspls.kr";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "가스펠플러스 - 임베디드 하드웨어·소프트웨어 전문 기업",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
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
  "@type": "Organization",
  name: "가스펠플러스",
  alternateName: "GSPLPLUS",
  url: "https://gspls.kr",
  logo: "https://gspls.kr/gsplplus_logo.png",
  description: siteDescription,
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "배울1로 277, 4동",
    addressLocality: "대전광역시",
    addressRegion: "유성구",
    postalCode: "34134",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "polaris65b@gspls.kr",
    contactType: "customer service",
    availableLanguage: ["Korean"],
  },
  sameAs: [],
  areaServed: "KR",
  serviceType: [
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
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 파비콘 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
