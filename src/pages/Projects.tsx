import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import Container from "../ui/Container";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  color: #fff;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Sub = styled.p`
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const List = styled.div`
  display: grid;
  gap: 1rem;
`;

const Card = styled(Link)`
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1.25rem 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }
`;

const CardTitle = styled.div`
  color: #2c3e50;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
`;

const CardMeta = styled.div`
  color: #667;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.div`
  color: #333;
  line-height: 1.6;
`;

const TopNav = styled.div`
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

export default function Projects() {
  return (
    <Container>
      <Wrapper>
        <TopNav>
          <NavLink to="/">← 프로필</NavLink>
        </TopNav>

        <Title>Projects</Title>
        <Sub>지금 진행중인 것들(어느 정도 만든 것만).</Sub>

        <List>
          <Card to="/projects/cube-brain-trainer">
            <CardTitle>Cube Brain Trainer (큐브 연습앱)</CardTitle>
            <CardMeta>Prototype / Alpha</CardMeta>
            <CardDesc>
              루빅스 큐브 수기(손) 연습을 “상태 시각화 + 즉시 피드백”으로 도와주는 미니 트레이너 앱.
            </CardDesc>
          </Card>

          <Card to="/projects/sansu">
            <CardTitle>산수 Sansu</CardTitle>
            <CardMeta>Prototype (Alpha early)</CardMeta>
            <CardDesc>
              저학년용 “짧은 레슨” 반복 훈련 산수 웹앱(태블릿/모바일). 시드 기반 자동 문제 생성 + 듀오링고식 오답 재도전 흐름.
            </CardDesc>
          </Card>
        </List>
      </Wrapper>
    </Container>
  );
}
