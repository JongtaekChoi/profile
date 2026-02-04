import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Container from "../ui/Container";
import { getPostBySlug, type Post } from "../blog/posts";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  color: #fff;
  z-index: 1;
`;

const Header = styled.header`
  margin-bottom: 1.25rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;

const Meta = styled.div`
  opacity: 0.9;
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

const Article = styled.article`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1.5rem;
  color: #222;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* markdown basic styling */
  line-height: 1.75;

  h1,
  h2,
  h3 {
    color: #1f2d3a;
    margin-top: 1.6rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin: 0.85rem 0;
  }

  a {
    color: #2563eb;
  }

  pre {
    overflow: auto;
    border-radius: 10px;
    padding: 1rem;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.95em;
  }

  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1rem;
    color: #334;
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
  }

  th {
    background: #f5f5f5;
  }
`;

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!slug) return;
      const p = await getPostBySlug(slug);
      setPost(p);
      setLoading(false);
    })();
  }, [slug]);

  return (
    <Container>
      <Wrapper>
        <TopNav>
          <NavLink to="/blog">← 목록</NavLink>
          <NavLink to="/">프로필</NavLink>
        </TopNav>

        {loading && <div>로딩중…</div>}

        {!loading && !post && (
          <div>
            글을 찾을 수 없어. <NavLink to="/blog">목록으로</NavLink>
          </div>
        )}

        {post && (
          <>
            <Header>
              <Title>{post.meta.title}</Title>
              <Meta>{post.meta.date}</Meta>
            </Header>

            <Article>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {post.content}
              </ReactMarkdown>
            </Article>
          </>
        )}
      </Wrapper>
    </Container>
  );
}
