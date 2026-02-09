import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import Container from "../../ui/Container";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 1.25rem;
  color: #fff;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const TopNav = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.25rem;
`;

const Meta = styled.div`
  opacity: 0.9;
  margin-bottom: 1.25rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1.5rem;
  color: #111;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background: rgba(17, 24, 39, 0.92);
    color: #e5e7eb;
  }
`;

export default function Sansu() {
  return (
    <Container>
      <Wrapper>
        <TopNav>
          <NavLink to="/projects">← Projects</NavLink>
          <NavLink to="/">프로필</NavLink>
        </TopNav>

        <Title>산수 Sansu</Title>
        <Meta>상태: Prototype (Alpha early, ~40–55%)</Meta>

        <Card>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              <strong>한 줄 소개</strong>: 저학년용 “짧은 레슨” 반복 훈련 산수 웹앱(태블릿/모바일)
            </p>

            <p>
              <strong>문제 정의(왜 만들었는지)</strong>: 저학년 산수는 꾸준한 반복이 핵심인데,
              종이 학습지는 피드백/동기부여가 약하고 진입장벽이 있다. 아이들이 부담 없이 “짧게 자주” 풀 수 있도록
              듀오링고처럼 레슨 단위로 끊고 즉시 피드백을 주는 형태가 필요했다. 또 콘텐츠 제작 비용을 줄이기 위해
              문제를 템플릿/규칙 기반으로 자동 생성하는 구조를 목표로 했다.
            </p>

            <ul>
              <li>
                <strong>지금까지 구현된 것</strong>
                <ul>
                  <li>1레슨=6문제 구조 + 진행 표시(UI)</li>
                  <li>객관식(선택→확인) 입력 흐름</li>
                  <li>듀오링고식 오답 처리: 오답은 스킵하고 레슨 끝에 “오답만 다시 풀기”</li>
                  <li>시드(seed) 기반 문제 생성으로 재현 가능한 세트 생성</li>
                  <li>URL 파라미터로 레슨/시드/문항 인덱스 공유(재현 링크)</li>
                  <li>도형 렌더(에셋 없이): 사각형 격자/점 배열 기반 개수 세기 문제 혼합</li>
                  <li>Vitest 스모크 테스트(생성기 hang 방지/선택지 4개 보장 등)</li>
                </ul>
              </li>
              <li>
                <strong>학습/훈련 방식(핵심)</strong>
                <ul>
                  <li>짧은 레슨 반복(한 번에 적은 문제로 피로도↓)</li>
                  <li>즉시 피드백(색/사운드) + 흐름 유지(오답은 뒤로 미루고 계속 진행)</li>
                  <li>규칙 기반 랜덤 생성 + seed 재현으로 다양성/디버깅 용이</li>
                </ul>
              </li>
              <li>
                <strong>기술스택</strong>
                <ul>
                  <li>Next.js(React) + TypeScript</li>
                  <li>SCSS Modules</li>
                  <li>SVG 렌더링(도형 기반 문제)</li>
                  <li>Vitest(문제 생성기 테스트)</li>
                </ul>
              </li>
              <li>
                <strong>다음 TODO</strong>
                <ol>
                  <li>레벨/스테이지 선택 화면</li>
                  <li>진도/성취 저장 + 간단 리포트(로컬스토리지/IndexedDB)</li>
                  <li>힌트 시스템 고도화(텍스트 최소, 연출 중심)</li>
                  <li>문제 타입 확장(뺄셈/구구단/비교·순서 등)</li>
                  <li>UX 폴리싱(태블릿/폰 레이아웃, 접근성, 로딩/전환)</li>
                </ol>
              </li>
            </ul>

            <p>
              <strong>데모</strong>: <a href="https://sansu-theta.vercel.app/" target="_blank" rel="noreferrer">Vercel</a>
            </p>

            <p>
              <strong>200자 요약</strong>: 저학년 산수를 “짧은 레슨+즉시 피드백”으로 반복 훈련하는 웹앱 프로토타입.
              시드 기반 자동 문제 생성과 도형(SVG) 렌더 문제를 통해 콘텐츠 제작비를 줄이고,
              듀오링고식 오답 재도전 흐름을 구현 중.
            </p>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
}
