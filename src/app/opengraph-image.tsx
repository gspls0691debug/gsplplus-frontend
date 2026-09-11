// 2026-09-11 신규 생성: 링크 공유(카카오톡·슬랙 등) 미리보기 이미지. 빌드 시 정적으로 생성됨.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "가스펠플러스(GSPLPLUS) - 대전 PCB 설계·전장 설계 제작";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const file = await readFile(join(process.cwd(), "public", "gsplplus_logo.png"));
  // 이미지 렌더러(satori)는 ArrayBuffer를 받으면 형식을 직접 감지함
  const logo = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo as unknown as string} width={720} height={345} alt="" />
        <div style={{ fontSize: 36, color: "#64748b", letterSpacing: 2 }}>gspls.kr</div>
      </div>
    ),
    size
  );
}
