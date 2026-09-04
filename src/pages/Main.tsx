import { Link } from "react-router-dom";

const projects = [
  { index: "01", name: "Scroll Stitch", type: "Native iOS · Released", description: "스크롤 화면 녹화를 분석해, 겹치는 구간을 자연스럽게 이어 붙인 긴 스크린샷으로 만듭니다.", tags: ["SwiftUI", "Vision", "AVFoundation"], to: "/projects/scroll-stitch", tone: "coral" },
  { index: "02", name: "Cube Brain Trainer", type: "Expo · Active development", description: "손의 속도보다 큐브를 생각하는 법에 집중한 훈련 앱. 상태 시각화와 단계별 학습을 연결합니다.", tags: ["React Native", "Expo", "TypeScript"], to: "/projects/cube-brain-trainer", tone: "blue" },
  { index: "03", name: "축구 전술 보드", type: "iOS · v1.2", description: "포메이션을 만들고 선수를 움직이며 플레이를 그리는, 현장에서 바로 쓰는 전술 설계 도구입니다.", tags: ["React Native", "Reanimated", "SVG"], to: "/tactics-board", tone: "green" },
];

export default function Main() {
  const scrollToWork = () => document.getElementById("work")?.scrollIntoView();

  return (
    <main className="portfolio-shell">
      <header className="site-header" aria-label="주요 탐색">
        <Link className="wordmark" to="/" aria-label="최종택 홈">JT<span>.</span></Link>
        <nav><button type="button" onClick={scrollToWork}>Work</button><Link to="/blog">Notes</Link><a href="mailto:jtchoi.apps@gmail.com">Contact</a></nav>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> INDEPENDENT PRODUCT MAKER</p>
        <h1 id="hero-title">작지만 끝까지,<br /><em>쓸모 있는 제품</em>을 만듭니다.</h1>
        <div className="hero-bottom">
          <p>안녕하세요, 최종택입니다. 일상에서 발견한 불편을 직접 설계하고 코드로 풀어내며, 출시 이후의 경험까지 다듬습니다.</p>
          <button className="round-link" type="button" onClick={scrollToWork} aria-label="프로젝트 보기">↓</button>
        </div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow"><span /> SELECTED WORK</p><h2 id="work-title">만들고 있는 것들</h2></div>
        <div className="project-list">
          {projects.map((project) => (
            <Link className="project-row" to={project.to} key={project.name}>
              <span className="project-index">{project.index}</span>
              <div className={`project-mark ${project.tone}`} aria-hidden="true">
                {project.name === "Scroll Stitch" && <><i /><i /><i /></>}
                {project.name === "Cube Brain Trainer" && <b>◆</b>}
                {project.name === "축구 전술 보드" && <b>↗</b>}
              </div>
              <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="about-strip">
        <p>DESIGN · BUILD · SHIP</p><h2>아이디어가 실제로 쓰이는 순간까지.</h2>
        <div><p>문제를 작게 정의하고, 빠르게 만들고, 실제 기기에서 확인하는 과정을 좋아합니다.</p><a href="https://github.com/JongtaekChoi" target="_blank" rel="noreferrer">GitHub에서 코드 보기 ↗</a></div>
      </section>
      <footer className="site-footer"><div><strong>새로운 아이디어가 있다면</strong><br />이야기 나눠요.</div><a href="mailto:jtchoi.apps@gmail.com">jtchoi.apps@gmail.com ↗</a><p>© {new Date().getFullYear()} Jongtaek Choi</p></footer>
    </main>
  );
}
