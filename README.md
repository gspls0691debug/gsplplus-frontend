# gsplplus-frontend

가스펠플러스(GSPLPLUS) 회사 소개 사이트. Next.js 16 App Router, 전 페이지 정적 생성(서버 코드 없음).

- 배포: Vercel → https://gspls.kr
- 연락처: 이메일 `polaris65b@gspls.kr` (전화번호 없음, 문의 폼 없음)

## 실행

```bash
npm install
npm run dev     # 개발 서버
npm run build   # 배포 전 확인 (타입 검사 포함)
```

빌드 중 `.next/dev/types` 관련 오류가 나면 `.next` 폴더를 지우고 다시 빌드.

## 페이지

| 경로 | 내용 |
|---|---|
| `/` | 홈 (배경 영상, 서비스, 대표 프로젝트, 바로가기) |
| `/about` | 회사 소개, 핵심 가치, 연혁 |
| `/work` | 사업 영역, 보유 제품 |
| `/portfolio` | 수행 프로젝트 목록 (연혁 기반) |
| `/contact` | 이메일·주소 안내 |
| `/location` | 오시는 길 (지도) |

공용 컴포넌트: `src/components/layout/` (Header, Footer), `src/components/sections/CTASection.tsx`, `src/components/ui/Icon.tsx` (선형 아이콘)
공유 미리보기 이미지: `src/app/opengraph-image.tsx` (빌드 시 생성) / 404: `src/app/not-found.tsx`

## SEO

- `src/app/layout.tsx`: 메타데이터, JSON-LD(회사 정보)
- `src/app/robots.ts`, `src/app/sitemap.ts`: 페이지 추가 시 sitemap에도 추가
- 네이버 소유확인 파일: `public/naver421334896a916c5babcf31c31f648459.html` (삭제 금지)

## 진행 중인 작업

남은 작업과 결정 대기 항목은 [HANDOFF.md](HANDOFF.md) 참고.
