# 작업 인수인계 (2026-09-11 기준)

GSPLPLUS 회사 소개 사이트 정리 작업. 다른 세션에서 이어서 진행하기 위한 메모.

- 배포: Vercel, `https://gspls.kr` (현재 `www.gspls.kr`로 307 리다이렉트됨)
- 작업 브랜치: `test` (Vercel은 `main` 기준 배포로 추정)
- 연락처는 전부 **이메일 `polaris65b@gspls.kr`** 하나로 통일. 전화번호 없음.

---

## 1. 완료 (`test` 브랜치에 커밋·푸시됨 — `f8542f8`, 아직 `main` 미반영)

`npm run build` 통과 확인함. 운영 사이트(gspls.kr)에 반영하려면 `test` → `main` 머지 필요.

### 연락처
- 가짜 전화번호 `042-000-0000` 전부 제거, 이메일을 `polaris65b@gspls.kr`로 변경
  - `Header.tsx`, `Footer.tsx`, `contact/page.tsx`, `layout.tsx`(JSON-LD)
  - `CTASection.tsx`: 보조 버튼("전화상담" → "이메일 상담") 자체를 삭제, `secondaryText` prop 제거. 이제 "문의하기" 버튼 하나만
  - 데스크톱 헤더의 이메일 링크 삭제 (모바일 메뉴·푸터에는 이메일 유지)

### 문의 폼 제거 (백엔드/SMTP 미설정이라 문의가 조용히 유실되던 상태였음)
- 삭제: `src/components/forms/ContactForm.tsx`, `ContactForm.module.css`, `src/app/api/contact/route.ts`, `.env.example`
- `nodemailer`, `@types/nodemailer` 제거 (`package.json`, `package-lock.json`)
- `contact/page.tsx`: 폼 대신 이메일 / 오시는 길 카드 2개 + 지도 (응답 약속 카드·hero의 "1영업일 내" 삭제)
  - 이메일은 사이트 전체에서 `mailto:` 링크가 아닌 일반 텍스트로 표시 (문의 페이지 카드, 푸터, 모바일 메뉴 — 사용자 요청: 메일 앱 열리지 않게)
- `contact/page.module.css`: 폼 스타일 삭제, 3열 그리드 (900px 이하 1열)
- 결과: 사이트 전체가 정적 페이지, 서버 코드 없음

### 푸터
- 사업자등록번호(`000-00-00000`), 개인정보처리방침·이용약관 링크 삭제
- 하단 저작권 영역(`© 2015-2026 GSPLPLUS…`, `.footerBottom`)도 삭제 (사용자 요청)
  - 근거: 판매·결제 없는 소개 사이트라 사업자 정보 표시 의무 없음. 개인정보 수집 안 하므로 처리방침도 불필요.
- (이전 세션 작업) 배경 `#10243C` 단색, 상담시간 블록 삭제, 로고 160×77

### SEO
- `layout.tsx`: `alternates.canonical` 제거 (모든 하위 페이지가 홈을 canonical로 가리키던 버그)
- `sitemap.ts`: `/portfolio`, `/contact` 추가

### 홈 파트너사 섹션 삭제
- "Partner A~F" 자리표시자(주석 "(임시)") — `page.tsx`의 `partners` 데이터·섹션, `page.module.css`의 `.partners*`/`.partnerLogo` 삭제

### 문서
- `README.md` 현행화 (페이지 구성, 빌드, SEO 파일 위치)
- `report.txt` 상단에 "과거 기획 문서, 현재와 다름" 안내 추가

---

## 2. 사용자가 직접 할 일 (코드로 불가)

- [ ] **Vercel → Settings → Domains**: `gspls.kr`을 primary로, `www` → apex 리다이렉트
  - 현재 apex→www 리다이렉트인데 sitemap/robots/canonical은 apex를 가리켜서 검색엔진이 색인 포기하는 상태. **검색 미노출의 주원인.**
- [ ] 배포 후 Google Search Console 등록 + `https://gspls.kr/sitemap.xml` 제출 (구글 인증 아직 없음)
- [ ] 네이버 서치어드바이저 사이트맵 제출 (소유확인은 완료, `public/naver…html`)

---

## 3. 남은 작업 — 사용자 결정 필요

- [x] **로고**: 완료. `gsplplus_logo.png` = 원래 투명 배경 로고(커밋본과 동일, 헤더·JSON-LD용), `gsplplus_logo_dark.png` = 네이비 배경 로고(푸터 전용). 헤더 Image 크기를 실제 비율(1024×491)에 맞춰 67×32로 수정
- [ ] **포트폴리오 가짜 프로젝트 4개** (`portfolio/page.tsx`의 `projects` id 5~8)
  - 연혁에 없음: 공장 자동화 PLC(F제조), 의료기기 펌웨어 "인증 획득"(G의료), BMS(H에너지)
  - 불일치: 전기자동차 WSS 2024(E자동차) ↔ 연혁은 2018.03 "자동차 휠 속도센서 WSS개발"
  - 고객사명이 전부 "A사~H에너지" 자리표시자
  - 삭제 시 "소프트웨어"·"자동차 전장" 필터 탭이 비므로 **필터 탭도 삭제** 추천 → 그러면 `"use client"` 불필요해져 `metadata` 추가 가능(현재 포트폴리오 페이지 title/description 없음)
  - 대안: `about/page.tsx`의 `history`(실제 이력 약 25건)를 포트폴리오로 활용
- [x] **홈 파트너사 섹션** ("Partner A~F", 주석 "(임시)") — 섹션·데이터·CSS 삭제 완료. 실제 로고 생기면 다시 추가
- 참고: 포트폴리오 고객사명 "A사~H에너지"는 익명 처리로 볼 수 있어 유지 가능(사용자 의견). 문제는 이름이 아니라 연혁에 없는 프로젝트 자체
- [ ] **통계 숫자** — 근거 불명: "100+ 프로젝트"(연혁은 ~25건), "50+ 고객사/협력 기업", "99% 재계약률"(홈) vs "99% 고객 만족도"(서비스·포트폴리오). 회사소개 "3 핵심 가치"도 통계로 어색.
  - 위치: `page.tsx` `stats`, `about/page.tsx` statsSection, `work/page.tsx` statsSection, `portfolio/page.tsx` statsSection, `Footer.tsx` `brandStats`
  - 추천: 2015 창립 / 10년+ / 실제 프로젝트 수만 유지
- [ ] **약속 문구 유지 여부**: 문의 페이지 "빠른 응답 약속" 카드(1영업일·무료 상담·견적·NDA)는 삭제 완료. 문의 페이지 hero 문구의 "1영업일 내"도 삭제 완료. 남은 곳: "1영업일 내" — 홈 바로가기 카드, 문의 페이지 metadata description(검색 결과 설명) / "24시간 접수 가능"(이메일 카드, 무의미)
- [ ] **확인 요청**
  - 우편번호: JSON-LD `postalCode: "34134"` → 검색 결과상 배울1로 277은 `34036`
  - 연혁 중복: "GRA 시뮬레이터"가 2015.12와 2016.01 두 번

---

## 4. 남은 작업 — 판단 불필요, 바로 수정 가능

- [ ] **앵커 링크가 안 먹힘** (클릭해도 페이지 맨 위)
  - 홈 서비스 카드 `/work#hardware|software|integration|automotive`, 푸터 서비스 링크 4개
    → `work/page.tsx`에 해당 id 없음. `coreBusiness` key가 `platform/software/si/automotive`라 불일치. id를 맞추거나 링크를 변경
  - 홈 "전체 연혁 보기" `/about#history` → 실제 id는 `history-title`. section에 `id="history"` 추가
- [ ] **없는 파일 참조** (실사이트 404 확인): `/og-image.png`(OG·트위터 이미지), `/apple-touch-icon.png` — `layout.tsx`. 이미지 만들거나 참조 삭제
- [ ] **404 페이지**: 영문 기본 화면. `src/app/not-found.tsx` 한국어 + 홈 링크
- [ ] **오시는 길 `infoCards`** (`location/page.tsx`): "연락처" 카드 "전화 또는 이메일로…" → 전화 없음 + 이메일 주소 미표시. "방문 안내" 문장 어색. 문의하기 페이지와 내용 거의 중복(주소 카드 + 같은 지도)
- [ ] **전화 흔적**: 홈 바로가기 "문의하기" 카드 아이콘 📞 → 📧. "무료 상담 신청"(홈 2곳)은 폼 연상 → "이메일 상담" 등
- [x] **헤더 중복**: 데스크톱 헤더 이메일 링크 삭제 완료 ("문의하기" 버튼만 유지, 모바일 메뉴의 이메일은 유지)
- [ ] **lint** (`npx eslint src`)
  - `portfolio/page.tsx`: 미사용 `Link` import
  - `Header.tsx`: `useEffect` 안에서 `setIsMenuOpen(false)` (react-hooks/set-state-in-effect 에러). 내비 링크 onClick에서 이미 닫고 있음
- [ ] **잔해 정리**: `public/`의 기본 SVG 5개(file/globe/next/vercel/window, 참조 없음), `report.txt`(삭제된 폼 설명 포함, 추적 중)
- [ ] (참고) 홈 배경 영상 `hero-video.mp4` 3.2MB 모바일 자동재생

---

## 5. 배포 순서

1. 3·4번 처리
2. `npm run build` 통과 확인 (빌드 시 `.next/dev` 캐시 오류 나면 `.next` 삭제 후 재빌드)
3. `test` 커밋 → `main` 반영 (PR 또는 머지)
4. 2번 사용자 작업 (Vercel 도메인, 서치콘솔)
