// 2026-09-11 신규 생성: 없는 주소로 접근했을 때 보여주는 한국어 404 페이지
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "120px 24px 80px",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: "#F57C00" }}>
        404
      </p>
      <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#0f172a" }}>
        페이지를 찾을 수 없습니다
      </h1>
      <p style={{ margin: 0, color: "#64748b" }}>주소가 바뀌었거나 없는 페이지입니다.</p>
      <Link
        href="/"
        style={{
          marginTop: 8,
          padding: "12px 24px",
          background: "#F57C00",
          color: "#ffffff",
          borderRadius: 999,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        홈으로 가기
      </Link>
    </main>
  );
}
