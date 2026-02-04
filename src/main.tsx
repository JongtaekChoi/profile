import "./index.css";

// Some dependencies (e.g., gray-matter) expect Node globals.
// We polyfill the minimum needed for the browser build.
import { Buffer } from "buffer";
(globalThis as any).Buffer = Buffer;

import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
