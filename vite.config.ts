import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/profile/",
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
});
