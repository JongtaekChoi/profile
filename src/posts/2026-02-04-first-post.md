---
title: "첫 글: profile 레포에 블로그 붙이기"
date: "2026-02-04"
description: "GitHub Pages + Vite(React) 프로젝트에 Markdown 블로그를 얹는 최소 세팅 기록"
tags: ["blog", "github-pages", "vite", "react"]
---

이 글은 `profile` 레포에 **블로그(마크다운 글)** 를 같이 올리기 위한 첫 테스트 글.

## 왜 HashRouter를 썼나?
GitHub Pages는 정적 호스팅이라서 `/blog/slug` 같은 경로로 **직접 접속/새로고침** 하면 서버가 파일을 못 찾아서 404가 날 수 있어.

그래서 URL을 이런 형태로 만들면 안정적이다:

- `https://jongtaekchoi.github.io/profile/#/blog/2026-02-04-first-post`

`#` 뒤는 브라우저에서만 처리되고, React가 화면을 라우팅한다.

## 코드 블록 하이라이팅
```ts
type Post = {
  slug: string;
  title: string;
};
```

끝.
