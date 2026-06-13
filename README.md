# 연못

`연못`은 사용자가 연애 상황별 카톡 답장을 직접 작성하면, 답변 내용과 작성 시간, 수정 횟수 등을 바탕으로 연애 커뮤니케이션 성향을 진단하는 테스트 사이트입니다.

## 구성

- `index.html`: 단일 페이지 앱
- `styles.css`: 모바일 우선 UI 스타일
- `app.js`: 테스트 플로우, 규칙 기반 분석, 공유 링크 생성
- `api/analyze.js`: 선택적 OpenAI 분석 API

## 로컬 실행

정적 파일이라 `index.html`을 직접 열어도 동작합니다.

API 함수까지 확인하려면 Vercel CLI로 실행합니다.

```bash
npm run start
```

## OpenAI 분석

서버 환경변수에 `OPENAI_API_KEY`를 설정하면 `/api/analyze`가 결과 문구를 보강합니다. 키가 없거나 API 호출이 실패해도 클라이언트의 규칙 기반 분석으로 결과가 생성됩니다.

```bash
OPENAI_API_KEY=...
```

절대로 API 키를 커밋하지 마세요.
