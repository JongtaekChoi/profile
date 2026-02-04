import Container from "../ui/Container";
import { H1 } from "../ui/styled";
import { Link } from "react-router-dom";
import screenshot1 from "src/assets/screenshot1.png";
import screenshot2 from "src/assets/screenshot2.png";
import screenshot3 from "src/assets/screenshot3.png";
import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  color: #fff;
  z-index: 1;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  opacity: 0.95;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  display: inline-block;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const PrimaryButton = styled(Button)`
  background: #2c3e50;
  color: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 2rem;
`;

const TechBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 2rem auto 0;
`;

const Screenshot = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function TacticsBoard() {
  return (
    <Container>
      <ContentWrapper>
        <H1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          ⚽ 축구 전술 보드
        </H1>
        <Description style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
          Soccer Tactics Board
        </Description>
        <Description>
          전문적인 축구 전술 분석과 포메이션 설계를 위한 모바일 앱
        </Description>

        <ButtonGroup>
          <PrimaryButton
            href="https://apps.apple.com/kr/app/%EC%B6%95%EA%B5%AC%EC%A0%84%EC%88%A0%ED%8C%90/id6752662754"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store에서 다운로드
          </PrimaryButton>
          <Button
            href="https://play.google.com/apps/test/com.tacticsboard.app/7"
            target="_blank"
            rel="noopener noreferrer"
          >
            안드로이드 설치하기
          </Button>
        </ButtonGroup>

        <Section>
          <SectionTitle>주요 기능</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>6가지 포메이션</FeatureTitle>
              <FeatureDescription>
                4-3-3, 4-4-2, 3-5-2 등 실제 축구 전술 기반의 선수 배치 시스템
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>✋</FeatureIcon>
              <FeatureTitle>터치 기반 조작</FeatureTitle>
              <FeatureDescription>
                부드러운 애니메이션과 직관적인 드래그로 선수와 볼을 자유롭게
                이동
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🎨</FeatureIcon>
              <FeatureTitle>전술 드로잉</FeatureTitle>
              <FeatureDescription>
                패스 경로, 런닝 라인, 전술적 움직임을 손가락으로 직접 그리기
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>↩️</FeatureIcon>
              <FeatureTitle>실행 취소/복구</FeatureTitle>
              <FeatureDescription>
                모든 작업에 대한 Undo/Redo 기능으로 안전한 전술 편집
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>⚙️</FeatureIcon>
              <FeatureTitle>선수 커스터마이징</FeatureTitle>
              <FeatureDescription>
                더블탭으로 선수 번호와 이름을 편집하여 실제 팀 구성 반영
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🏟️</FeatureIcon>
              <FeatureTitle>실제 축구장 구현</FeatureTitle>
              <FeatureDescription>
                골포스트, 페널티박스, 센터서클 등 현실감 있는 축구장 비율
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <Section>
          <SectionTitle>기술 스택</SectionTitle>
          <TechStack>
            <TechBadge>React Native</TechBadge>
            <TechBadge>Expo SDK</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>React Native Reanimated</TechBadge>
            <TechBadge>Gesture Handler</TechBadge>
            <TechBadge>SVG</TechBadge>
            <TechBadge>AsyncStorage</TechBadge>
          </TechStack>
        </Section>

        <Section>
          <SectionTitle>스크린샷</SectionTitle>
          <ScreenshotGrid>
            <Screenshot src={screenshot1} alt="메인 전술 보드 화면" />
            <Screenshot src={screenshot2} alt="포메이션 선택 화면" />
            <Screenshot src={screenshot3} alt="전술 드로잉 화면" />
          </ScreenshotGrid>
        </Section>

        <Section>
          <SectionTitle>프로젝트 특징</SectionTitle>
          <Description
            style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}
          >
            • <strong>Progressive UI</strong>: 3단계 팀 설정 플로우로 직관적인
            사용자 경험
            <br />• <strong>60fps 애니메이션</strong>: Reanimated SharedValue
            기반 부드러운 인터랙션
            <br />• <strong>통합 Undo/Redo</strong>: 드로잉, 선수 이동, 텍스트
            편집 모두 지원
            <br />• <strong>SVG 벡터 드로잉</strong>: 확대해도 깨지지 않는
            고품질 전술 선<br />• <strong>로컬 저장</strong>: AsyncStorage를
            활용한 전술판 저장 및 관리
            <br />• <strong>다크테마</strong>: 코치용 전문적인 UI 디자인
          </Description>
        </Section>

        <Section style={{ textAlign: "center" }}>
          <Description>
            📧 문의:{" "}
            <a
              href="mailto:lastchoice86@naver.com"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              lastchoice86@naver.com
            </a>
          </Description>
          <Description style={{ fontSize: "0.9rem", opacity: 0.7 }}>
            © 2024 축구 전술 보드. 개인 포트폴리오 프로젝트입니다.
            <br />
            <Link
              to="/privacy-policy"
              style={{ color: "#ccc", textDecoration: "underline" }}
            >
              개인정보 처리방침
            </Link>
          </Description>
        </Section>
      </ContentWrapper>
    </Container>
  );
}
