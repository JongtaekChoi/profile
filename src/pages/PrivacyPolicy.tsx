import Container from "../ui/Container";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  color: #fff;
  z-index: 1;
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

const HeaderSubtitle = styled.p`
  color: #666;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
  font-size: 1.5rem;
`;

const SubTitle = styled.h3`
  color: #34495e;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.8;
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Highlight = styled.div`
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  margin: 1rem 0;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 12px 24px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #5a6fd8;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 2rem;
`;

export default function PrivacyPolicy() {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <HeaderTitle>개인정보 처리방침</HeaderTitle>
          <HeaderSubtitle>축구 전술 보드 (Tactics Board)</HeaderSubtitle>
        </Header>

        <Content>
          <Highlight>
            <Paragraph>
              <strong>중요:</strong> 본 앱은 개인정보를 수집하지 않는 완전히
              오프라인 앱입니다. 모든 데이터는 사용자의 기기에만 저장되며,
              외부로 전송되지 않습니다.
            </Paragraph>
          </Highlight>

          <Section>
            <SectionTitle>1. 개인정보 처리방침 개요</SectionTitle>
            <Paragraph>
              축구 전술 보드(이하 "본 앱")는 사용자의 개인정보 보호를
              최우선으로 생각합니다. 본 개인정보 처리방침은 본 앱이 개인정보를
              어떻게 처리하는지에 대한 정보를 제공합니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>2. 수집하는 개인정보</SectionTitle>
            <SubTitle>2.1 수집하지 않는 정보</SubTitle>
            <Paragraph>
              본 앱은 다음과 같은 개인정보를 <strong>수집하지 않습니다</strong>:
            </Paragraph>
            <List>
              <ListItem>이름, 이메일, 전화번호 등 개인식별정보</ListItem>
              <ListItem>위치 정보</ListItem>
              <ListItem>연락처 정보</ListItem>
              <ListItem>사진 또는 미디어 파일</ListItem>
              <ListItem>기기 고유 식별자</ListItem>
              <ListItem>사용 패턴 또는 분석 데이터</ListItem>
            </List>

            <SubTitle>2.2 로컬 저장 데이터</SubTitle>
            <Paragraph>본 앱은 다음 데이터를 사용자 기기에만 저장합니다:</Paragraph>
            <List>
              <ListItem>전술 보드 설정 (포메이션, 선수 배치)</ListItem>
              <ListItem>그린 경로 및 전술 드로잉</ListItem>
              <ListItem>선수 번호 및 이름 설정</ListItem>
              <ListItem>앱 설정 및 환경설정</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>3. 개인정보 이용 목적</SectionTitle>
            <Paragraph>
              본 앱은 개인정보를 수집하지 않으므로, 개인정보 이용 목적이
              없습니다. 모든 기능은 로컬 데이터만을 사용하여 작동합니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>4. 개인정보 제3자 제공</SectionTitle>
            <Paragraph>
              본 앱은 개인정보를 수집하지 않으며, 따라서 제3자에게 개인정보를
              제공하지 않습니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>5. 개인정보 보관 및 파기</SectionTitle>
            <Paragraph>
              본 앱에서 생성된 모든 데이터는 사용자의 기기에만 저장되며:
            </Paragraph>
            <List>
              <ListItem>
                앱 삭제 시 모든 데이터가 자동으로 삭제됩니다
              </ListItem>
              <ListItem>
                사용자가 언제든지 앱 설정에서 데이터를 삭제할 수 있습니다
              </ListItem>
              <ListItem>외부 서버에 데이터가 저장되지 않습니다</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>6. 기기 권한</SectionTitle>
            <Paragraph>본 앱이 요청하는 기기 권한:</Paragraph>
            <List>
              <ListItem>
                <strong>저장소 접근 권한:</strong> PNG 이미지 내보내기 및
                저장을 위해서만 사용
              </ListItem>
              <ListItem>
                <strong>공유 권한:</strong> 생성된 전술 이미지를 다른 앱으로
                공유하기 위해 사용
              </ListItem>
            </List>
            <Paragraph>
              이러한 권한은 해당 기능 사용 시에만 활성화되며, 개인정보 수집
              목적으로는 사용되지 않습니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>7. 광고 및 분석 서비스</SectionTitle>
            <Paragraph>본 앱은 다음을 포함하지 않습니다:</Paragraph>
            <List>
              <ListItem>광고 플랫폼</ListItem>
              <ListItem>분석 도구 (Google Analytics 등)</ListItem>
              <ListItem>크래시 리포팅 도구</ListItem>
              <ListItem>제3자 SDK</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>8. 아동의 개인정보 보호</SectionTitle>
            <Paragraph>
              본 앱은 만 13세 미만 아동을 포함하여 모든 연령대에서 안전하게
              사용할 수 있습니다. 개인정보를 수집하지 않으므로 아동의 개인정보
              보호에 대한 특별한 우려가 없습니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>9. 보안</SectionTitle>
            <Paragraph>
              본 앱은 개인정보를 수집하지 않으므로 개인정보 유출 위험이
              없습니다. 모든 데이터는 사용자의 기기에서만 처리되며, 외부 통신을
              하지 않습니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>10. 개인정보 처리방침 변경</SectionTitle>
            <Paragraph>
              본 개인정보 처리방침의 변경사항이 있을 경우, 앱 업데이트를 통해
              사용자에게 알려드립니다. 중요한 변경사항이 있을 경우 앱 스토어
              업데이트 설명에 명시됩니다.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>11. 연락처</SectionTitle>
            <Paragraph>
              개인정보 처리방침과 관련하여 문의사항이 있으시면 다음 연락처로
              문의해 주세요:
            </Paragraph>
            <List>
              <ListItem>
                <strong>이메일:</strong> lastchoice86@naver.com
              </ListItem>
            </List>
          </Section>

          <Highlight>
            <Paragraph>
              <strong>요약:</strong> 축구 전술 보드는 완전한 오프라인 앱으로,
              개인정보를 수집하지 않으며 모든 데이터는 사용자의 기기에만
              저장됩니다. 안심하고 사용하세요!
            </Paragraph>
          </Highlight>

          <LastUpdated>최종 업데이트: 2024년 9월 22일</LastUpdated>
        </Content>

        <BackLink to="/tactics-board">
          ← 메인 페이지로 돌아가기
        </BackLink>
      </ContentWrapper>
    </Container>
  );
}
