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
    status: "FREE",
    type: "NATIVE iOS · RELEASED",
    description: "스크롤 화면 녹화를 분석해, 겹치는 구간을 자연스럽게 이어 붙인 긴 스크린샷으로 만듭니다.",
    tags: ["SwiftUI", "Vision", "AVFoundation"],
    to: "/projects/scroll-stitch",
    tone: "coral",
  },
  {
    index: "02",
    name: "Cube Brain Trainer",
    status: "FREE",
    type: "iOS · RELEASED",
    description: "손의 속도보다 큐브를 생각하는 법에 집중한 훈련 앱. 상태 시각화와 단계별 학습을 연결합니다.",
    tags: ["React Native", "Expo", "TypeScript"],
    to: "/projects/cube-brain-trainer",
    tone: "blue",
  },
  {
    index: "03",
    name: "축구 전술 보드",
    status: "FREE",
    type: "iOS · RELEASED",
    description: "포메이션을 만들고 선수를 움직이며 플레이를 그리는, 현장에서 바로 쓰는 전술 설계 도구입니다.",
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
          <button type="button" onClick={scrollToCatalog}>Catalog</button>
          <Link to="/blog">Notes</Link>
          <a href="mailto:jtchoi.apps@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> MAKER&apos;S CATALOG · EST. 2013</p>
        <h1 id="hero-title">
          만든 것은 꺼내 쓰고,
          <br />
          <em>만들고 있는 사람</em>은 잠시 매진입니다.
        </h1>
        <div className="hero-bottom">
          <p>
            안녕하세요, 최종택입니다. 일상에서 발견한 불편을 직접 설계하고
            제품으로 만들며, 출시 이후의 경험까지 다듬습니다.
          </p>
          <button
            className="round-link"
            type="button"
            onClick={scrollToCatalog}
            aria-label="카탈로그 보기"
          >
            ↓
          </button>
        </div>
      </section>

      <section className="work-section" id="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <p className="eyebrow"><span /> AVAILABLE NOW</p>
          <h2 id="catalog-title">무료로 꺼내 볼 수 있는 것들</h2>
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
              <p className="project-type">SOLD OUT · AVAILABLE FROM MAR 2027</p>
              <h3>최종택 · Product Maker</h3>
              <p className="project-description">
                현재 글로벌 커머스 프로젝트에 집중하고 있습니다. 새로운 협업은
                2027년 3월 이후 일정 협의가 가능합니다.
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
        <h2>아이디어가 실제로 쓰이는 순간까지.</h2>
        <div>
          <p>
            문제를 작게 정의하고, 빠르게 만들고, 실제 기기에서 확인하는 과정을
            좋아합니다. 이곳에는 그 과정에서 출시한 제품과 기록을 모아둡니다.
          </p>
          <a href="https://github.com/JongtaekChoi" target="_blank" rel="noreferrer">
            GitHub에서 코드 보기 ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>다음 제품을 준비 중입니다.</strong><br />기록과 결과물을 계속 쌓아갑니다.</div>
        <a href="mailto:jtchoi.apps@gmail.com">jtchoi.apps@gmail.com ↗</a>
        <p>© {new Date().getFullYear()} Jongtaek Choi</p>
      </footer>
    </main>
  );
}
