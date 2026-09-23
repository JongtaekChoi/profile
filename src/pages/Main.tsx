import { Link } from "react-router-dom";

type CatalogItem = {
  index: string;
  name: string;
  status: string;
  type: string;
  description: string;
  tags: string[];
  to: string;
  tone: "coral" | "blue" | "green";
};

const catalog: CatalogItem[] = [
  {
    index: "01",
    name: "Scroll Stitch",
    status: "출시됨",
    type: "iOS",
    description: "스크롤하며 녹화한 화면에서 겹치는 부분을 찾아, 한 장의 긴 스크린샷으로 이어 붙입니다.",
    tags: ["SwiftUI", "Vision", "AVFoundation"],
    to: "/projects/scroll-stitch",
    tone: "coral",
  },
  {
    index: "02",
    name: "Cube Brain Trainer",
    status: "출시됨",
    type: "iOS",
    description: "화면 속 큐브로 풀이 방법을 배우고 연습합니다. 어려운 단계를 반복하고 풀이 기록을 돌아볼 수 있습니다.",
    tags: ["React Native", "Expo", "TypeScript"],
    to: "/projects/cube-brain-trainer",
    tone: "blue",
  },
  {
    index: "03",
    name: "축구 전술 보드",
    status: "출시됨",
    type: "iOS",
    description: "포메이션을 배치하고 선수를 움직여 전술을 설명합니다. 이동 경로를 그리고 전술판을 저장할 수 있습니다.",
    tags: ["React Native", "Reanimated", "SVG"],
    to: "/tactics-board",
    tone: "green",
  },
];

export default function Main() {
  const scrollToCatalog = () =>
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="portfolio-shell">
      <header className="site-header" aria-label="주요 탐색">
        <Link className="wordmark" to="/" aria-label="최종택 홈">
          JT<span>.</span>
        </Link>
        <nav>
          <button type="button" onClick={scrollToCatalog}>앱 둘러보기</button>
          <Link to="/blog">개발 기록</Link>
          <a href="mailto:jtchoi.apps@gmail.com">문의</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> MAKER&apos;S CATALOG · EST. 2013</p>
        <h1 id="hero-title">
          일상에 필요한 도구를
          <br />
          <em>앱으로 만듭니다.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            안녕하세요, 최종택입니다. 직접 필요해서 만든 앱을 소개합니다.
            출시한 뒤에도 사용자의 의견을 듣고 꾸준히 개선합니다.
          </p>
          <button
            className="round-link"
            type="button"
            onClick={scrollToCatalog}
            aria-label="앱 목록 보기"
          >
            ↓
          </button>
        </div>
      </section>

      <section className="work-section" id="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <p className="eyebrow"><span /> AVAILABLE NOW</p>
          <h2 id="catalog-title">지금 만나볼 수 있는 앱</h2>
        </div>

        <div className="project-list">
          {catalog.map((item) => (
            <Link className="project-row" to={item.to} key={item.name}>
              <span className="project-index">{item.index}</span>
              <div className={`project-mark ${item.tone}`} aria-hidden="true">
                {item.name === "Scroll Stitch" && <><i /><i /><i /></>}
                {item.name === "Cube Brain Trainer" && <b>◆</b>}
                {item.name === "축구 전술 보드" && <b>↗</b>}
              </div>
              <div className="project-copy">
                <p className="project-type">{item.status} · {item.type}</p>
                <h3>{item.name}</h3>
                <p className="project-description">{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}

          <div className="project-row maker-row" aria-label="제작자 현재 일정">
            <span className="project-index">04</span>
            <div className="project-mark coral" aria-hidden="true"><b>JT</b></div>
            <div className="project-copy">
              <p className="project-type">협업 가능 시기 · 2027년 3월부터</p>
              <h3>앱을 만드는 사람, 최종택</h3>
              <p className="project-description">
                현재 글로벌 커머스 프로젝트를 진행하고 있습니다.
                새로운 협업은 2027년 3월부터 가능하며, 구체적인 일정은 이메일로 문의해 주세요.
              </p>
              <div className="tag-list">
                <span>Frontend</span><span>React Native</span><span>Product Delivery</span>
              </div>
            </div>
            <a className="project-arrow" href="mailto:jtchoi.apps@gmail.com?subject=2027%EB%85%84%203%EC%9B%94%20%EC%9D%B4%ED%9B%84%20%ED%98%91%EC%97%85%20%EB%AC%B8%EC%9D%98" aria-label="2027년 3월 이후 협업 문의">↗</a>
          </div>
        </div>
      </section>

      <section className="about-strip">
        <p>DESIGN · BUILD · SHIP</p>
        <h2>직접 만들고, 써보고, 개선합니다.</h2>
        <div>
          <p>
            작은 불편에서 시작해 필요한 기능을 만들고, 실제 기기에서 써보며 다듬습니다.
            앱을 만드는 과정에서 배운 점은 개발 기록에 남깁니다.
          </p>
          <a href="https://github.com/JongtaekChoi" target="_blank" rel="noreferrer">
            GitHub에서 코드 보기 ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>새로운 앱도 만들고 있습니다.</strong><br />앱에 대한 의견이나 협업 제안을 보내 주세요.</div>
        <a href="mailto:jtchoi.apps@gmail.com">jtchoi.apps@gmail.com ↗</a>
        <p>© {new Date().getFullYear()} Jongtaek Choi</p>
      </footer>
    </main>
  );
}
