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
`;

export default function CubeBrainTrainer() {
  return (
    <Container>
      <Wrapper>
        <TopNav>
          <NavLink to="/projects">← Projects</NavLink>
          <NavLink to="/">프로필</NavLink>
        </TopNav>

        <Title>Cube Brain Trainer (큐브 연습앱)</Title>
        <Meta>상태: Prototype / Alpha</Meta>

        <Card>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ul>
              <li>
                <strong>한 줄 소개</strong>: 루빅스 큐브 수기(손) 연습을 “상태
                시각화 + 즉시 피드백”으로 도와주는 미니 트레이너 앱
              </li>
              <li>
                <strong>목표 사용자/상황</strong>: 큐브를 막 시작했거나 기본
                알고리즘을 외우는 중인 사용자. 이동(U/R/F 등)을 입력하면서
                현재 큐브 상태를 빠르게 확인하고 감각을 잡는 용도.
              </li>
              <li>
                <strong>구현된 기능</strong>
                <ul>
                  <li>연습 화면: MovePad로 U/R/F/D/L/B 및 프라임/2 입력</li>
                  <li>큐브 상태 렌더링: 3D(3면) 뷰 + 전개도(Net) 뷰 토글</li>
                  <li>
                    시점 변경: 3D 뷰에서 상/하/좌/우 버튼으로 보는 방향 90도
                    전환(상태 재매핑)
                  </li>
                  <li>입력 이력 표시(솔브 상태 표시 포함)</li>
                  <li>Undo / Reset / Scramble</li>
                  <li>이동에 따른 스티커 하이라이트(마이크로 애니: 팝/펄스)</li>
                  <li>모바일: 하단 sticky 컨트롤 + 피드백 기본 숨김(필요 시만)</li>
                </ul>
              </li>
              <li>
                <strong>차별점</strong>
                <ul>
                  <li>
                    “진짜 3D”에 집착하지 않고 학습 효율에 필요한 최소
                    시각화(3면/전개도)로 단순화
                  </li>
                  <li>
                    보는 방향(시점)에 맞춰 입력의 의미도 함께 바뀌는
                    UI(사용자 시점 기준 조작)
                  </li>
                  <li>
                    작은 상호작용(하이라이트/팝, sticky 컨트롤)로 연습 흐름을
                    끊지 않게 설계
                  </li>
                </ul>
              </li>
              <li>
                <strong>기술스택</strong>
                <ul>
                  <li>React Native + Expo(Expo Router), TypeScript</li>
                  <li>CubeState 기반 순수 함수 변환(회전/시점 재매핑 포함)</li>
                  <li>웹 데모: Expo Hosting(EAS Deploy 기반 정적 export)</li>
                </ul>
              </li>
              <li>
                <strong>다음 TODO</strong>
                <ol>
                  <li>학습/연습 UX 정리(온보딩/툴팁)</li>
                  <li>회전/시점 전환 애니메이션 고도화</li>
                  <li>학습 콘텐츠(레슨) 확장</li>
                  <li>진행 저장(로컬) + 통계</li>
                  <li>렌더 성능/플랫폼 안정성 튜닝(iOS/웹)</li>
                </ol>
              </li>
            </ul>

            <p>
              <strong>데모</strong>: <a href="https://cube-brain-trainer-dev--cube-brain-trainer-dev.expo.app/practice" target="_blank" rel="noreferrer">Expo Web (practice)</a>
            </p>

            <p>
              <strong>200자 요약</strong>: 루빅스 큐브 연습을 돕는 미니 트레이너 앱. U/R/F 등 이동을 입력하면 3D(3면)·전개도 뷰로 상태가 즉시 시각화되고, 보는 방향(시점) 전환에 맞춰 입력 기준도 자연스럽게 따라간다.
            </p>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
}
