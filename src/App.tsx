import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import CubeBrainTrainer from "./pages/projects/CubeBrainTrainer";
import Sansu from "./pages/projects/Sansu";
import ScrollStitchLegalPage from "./pages/ScrollStitchLegalPage";
import { PRIVACY, SUPPORT } from "./pages/scrollStitchLegal";
import TacticsBoard from "./pages/TacticsBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tactics-board" element={<TacticsBoard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/cube-brain-trainer" element={<CubeBrainTrainer />} />
      <Route path="/projects/sansu" element={<Sansu />} />

      {/* Both are App Store submission requirements and go in the listing, so
          the paths must stay put once entered there. */}
      <Route
        path="/scroll-stitch/privacy"
        element={<ScrollStitchLegalPage pages={PRIVACY} />}
      />
      <Route
        path="/scroll-stitch/support"
        element={<ScrollStitchLegalPage pages={SUPPORT} />}
      />

      {/* Backward compatibility for old links */}
      <Route path="/profile" element={<Navigate to="/" replace />} />
      <Route path="/profile/" element={<Navigate to="/" replace />} />
      <Route
        path="/profile/tactics-board"
        element={<Navigate to="/tactics-board" replace />}
      />
      <Route
        path="/profile/privacy-policy"
        element={<Navigate to="/privacy-policy" replace />}
      />
    </Routes>
  );
}

export default App;
