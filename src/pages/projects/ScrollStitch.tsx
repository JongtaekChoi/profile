import { Link } from "react-router-dom";

export default function ScrollStitch() {
  return (
    <main className="detail-shell">
      <header className="site-header detail-header"><Link className="wordmark" to="/">JT<span>.</span></Link><nav><Link to="/">Home</Link><Link to="/scroll-stitch/support">Support</Link></nav></header>
      <article className="project-detail">
        <Link className="back-link" to="/">← Selected work</Link><p className="eyebrow"><span /> NATIVE iOS · RELEASED</p>
        <h1>Scroll Stitch</h1><p className="detail-lead">스크롤 화면 녹화를<br />긴 스크린샷 한 장으로.</p>
        <div className="detail-visual scroll-visual" aria-label="긴 스크린샷이 만들어지는 과정을 표현한 그래픽"><div className="phone-card card-one"><span>REC</span><i /><i /><i /></div><div className="stitch-line">＋</div><div className="phone-card card-two"><i /><i /><i /><i /></div><div className="stitch-line">→</div><div className="long-card"><i /><i /><i /><i /><i /><i /></div></div>
        <div className="detail-grid">
          <section><h2>문제</h2><p>긴 화면을 남기기 위해 여러 장을 찍고 직접 이어 붙이는 과정은 번거롭고 결과도 일정하지 않습니다.</p></section>
          <section><h2>해결</h2><p>영상 속 멈춘 순간을 찾고, 선명한 프레임과 겹치는 영역을 분석해 하나의 이미지로 합칩니다.</p></section>
          <section><h2>역할</h2><p>제품 기획, 인터랙션 설계, SwiftUI 구현, 이미지 처리 파이프라인, 출시와 운영까지 맡았습니다.</p></section>
          <section><h2>기술</h2><p>SwiftUI · AVFoundation · Vision · Core Image · Accelerate</p></section>
        </div>
        <div className="detail-actions"><Link to="/scroll-stitch/support">지원 페이지</Link><Link to="/scroll-stitch/privacy">개인정보처리방침</Link></div>
      </article>
    </main>
  );
}
