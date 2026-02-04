import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TacticsBoard from "./pages/TacticsBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tactics-board" element={<TacticsBoard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

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
