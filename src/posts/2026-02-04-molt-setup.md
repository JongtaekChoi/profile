---
title: "Molt(몰트봇) 설정: 텔레그램에서 개발 작업을 굴리는 개인 에이전트"
date: "2026-02-04"
description: "Mac mini에서 Clawdbot(몰트봇)를 띄우고, 텔레그램 대화로 작업/코딩/배포까지 이어지는 흐름을 정리"
tags: ["molt", "clawdbot", "telegram", "automation", "devlog"]
---

> 목표: “내가 자주 들어가는 텔레그램”을 **작업 콘솔**처럼 쓰고,
> 글쓰기/코딩/배포/기록까지 한 흐름으로 이어지게 만들기.

## Molt가 뭐냐
내 셋업에서 **Molt(몰트봇)** 는 Clawdbot 위에서 돌아가는 개인 에이전트다.

- 대화로 요청 → 로컬에서 코드 수정/실행 → GitHub 배포까지 연결
- 단순 Q&A가 아니라, **작업을 실제로 해주는 쪽**에 가까움

## 큰 구성도(아키텍처)
- **클라이언트**: 텔레그램(내가 제일 자주 들어가는 곳)
- **호스트**: Mac mini (상시 켜두는 작업 머신)
- **작업공간(workspace)**: `/Users/jtchoi/clawd`
  - 에이전트의 기억/설정/로그가 쌓이는 폴더
- **프로젝트 코드**: 필요하면 로컬 레포를 직접 열어서 수정
  - 예: `~/projects/JongtaekProfile` (GitHub Pages 배포하는 profile 사이트)

## 왜 텔레그램을 입구로 잡았나
- “툴이 좋아도 안 들어가면 무용지물”
- Medium은 예전에 썼지만, 내가 잘 안 들어가게 되어서 방치됨
- 텔레그램은 어차피 매일 들어가니까 **마찰이 0**에 가까움

## Molt를 어떻게 쓰는가 (실전 플로우)
### 1) 아이디어/요청은 텔레그램에서
예:
- “개발글 어디에 쓰는 게 좋을까?”
- “profile 레포에 블로그 붙여줘”

### 2) Molt가 로컬에서 실제 작업
이번 케이스에서 Molt가 한 일:
- `~/projects` 아래에 로컬 프로젝트들 확인
- `~/projects/JongtaekProfile`이 `JongtaekChoi/profile` 레포인지 확인
- GitHub Pages 배포 워크플로우(`.github/workflows/static.yml`) 확인

### 3) 블로그 기능 추가(핵심 구현)
GitHub Pages는 정적 호스팅이라 SPA 라우팅에서 404 이슈가 생기기 쉬운데,
이번에는 **HashRouter**로 시작해서 안정성을 우선했다.

- URL: `.../profile/#/blog/...`
- 마크다운 글: `src/posts/*.md`
- 글 목록/상세:
  - `/#/blog`
  - `/#/blog/:slug`

마크다운 렌더링/하이라이팅은 아래 조합:
- `react-markdown`
- `remark-gfm`
- `rehype-highlight` + `highlight.js`

### 4) 커밋/배포
- 로컬에서 `yarn build`로 빌드 확인
- `git push` → GitHub Actions로 Pages 배포
- 원격에 선행 커밋이 있어서 **rebase 후 push**

## 운영 팁: “기억”을 파일로 남겨라
에이전트는 세션이 끊기면 기억이 날아갈 수 있어서,
중요한 맥락은 파일에 남기는 구조가 필요하다.

예:
- 장기 기억: `MEMORY.md`
- 일일 로그: `memory/YYYY-MM-DD.md`

이렇게 해두면 나중에
- “전에 뭘 했지?”
- “결정은 왜 그렇게 했지?”
를 다시 복구하기 쉽다.

## 다음 개선 아이디어
- 블로그 글 템플릿(Problem → Solution → Learnings) 고정
- 글이 많아지면 `profile`에서 분리해서 `blog` 레포로 이전
- 태그/검색/최근 글 위젯

---

### 부록) 지금 블로그 주소
- 메인: `https://jongtaekchoi.github.io/profile/`
- 블로그: `https://jongtaekchoi.github.io/profile/#/blog`
