import "./App.css";

import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import TacticsBoard from "./pages/TacticsBoard";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/profile/" element={<Main />} />
      <Route path="/profile/tactics-board" element={<TacticsBoard />} />
      <Route path="/profile/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
