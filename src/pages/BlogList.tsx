import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";

import Container from "../ui/Container";
import { getAllPosts, type Post } from "../blog/posts";

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

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const all = await getAllPosts();
        setPosts(all);
      } catch (e) {
        console.error(e);
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const empty = useMemo(() => !loading && posts.length === 0, [loading, posts.length]);

  return (
    <Container>
      <Wrapper>
        <TopNav>
          <NavLink to="/">← 프로필</NavLink>
        </TopNav>

        <Title>Blog</Title>
        <Sub>개발하면서 배운 것들/기록들. (Markdown 기반)</Sub>

        {loading && <div>로딩중…</div>}
        {error && (
          <div>
            글 목록을 불러오다가 오류가 났어: <code>{error}</code>
          </div>
        )}
        {empty && !error && (
          <div>아직 글이 없어. `src/posts`에 마크다운 파일을 추가하면 자동으로 뜸.</div>
        )}

        <List>
          {posts.map((p) => (
            <Card key={p.slug} to={`/blog/${p.slug}`}>
              <CardTitle>{p.meta.title}</CardTitle>
              <CardMeta>{p.meta.date}</CardMeta>
              {p.meta.description ? <CardDesc>{p.meta.description}</CardDesc> : null}
            </Card>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
}
