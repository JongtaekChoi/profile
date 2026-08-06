import { useState } from "react";

import Container from "../ui/Container";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  LAST_UPDATED,
  LOCALE_NAMES,
  type Locale,
  type Page,
} from "./scrollStitchLegal";

// Both Scroll Stitch legal pages render through here: they differ only in
// content, and the App Store wants them to look like they belong to the same
// app. Styling follows the existing PrivacyPolicy page so the site stays of a
// piece.

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

const LocaleBar = styled.nav`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.25rem;
`;

const LocaleButton = styled.button<{ active: boolean }>`
  border: 1px solid ${(p) => (p.active ? "#667eea" : "#d0d0d0")};
  background: ${(p) => (p.active ? "#667eea" : "transparent")};
  color: ${(p) => (p.active ? "#fff" : "#555")};
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border-color: #667eea;
  }
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  color: #333;
`;

const Lead = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const Updated = styled.p`
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
  font-size: 1.4rem;
`;

const Paragraph = styled.p`
  line-height: 1.75;
  margin-bottom: 0.9rem;
`;

const List = styled.ol`
  line-height: 1.75;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Contact = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 1.25rem;
  color: #555;
`;

const BackLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.85;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ScrollStitchLegalPage({
  pages,
}: {
  pages: Record<Locale, Page>;
}) {
  // Korean first because the app's source language is Korean; the App Store
  // listing can point each locale at this same URL.
  const [locale, setLocale] = useState<Locale>("ko");
  const page = pages[locale];

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <HeaderTitle>{page.title}</HeaderTitle>
          <HeaderSubtitle>{page.subtitle}</HeaderSubtitle>
          <LocaleBar>
            {(Object.keys(LOCALE_NAMES) as Locale[]).map((code) => (
              <LocaleButton
                key={code}
                active={code === locale}
                onClick={() => setLocale(code)}
                lang={code}
              >
                {LOCALE_NAMES[code]}
              </LocaleButton>
            ))}
          </LocaleBar>
        </Header>

        <Content lang={locale}>
          <Lead>{page.lead}</Lead>
          <Updated>{LAST_UPDATED}</Updated>

          {page.sections.map((section) => (
            <Section key={section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.paragraphs?.map((text) => (
                <Paragraph key={text}>{text}</Paragraph>
              ))}
              {section.bullets && (
                <List>
                  {section.bullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </List>
              )}
            </Section>
          ))}

          <Contact>
            {page.contactLabel}: <strong>{CONTACT_EMAIL}</strong>
          </Contact>
        </Content>

        <BackLink to="/">← Jongtaek Choi</BackLink>
      </ContentWrapper>
    </Container>
  );
}
