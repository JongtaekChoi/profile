/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Keep things readable inside our white card
            color: "#1f2937",
            a: { color: "#2563eb" },
            code: { color: "#111827" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: { color: "#e5e7eb", backgroundColor: "#0b1220" },
            "pre code": { color: "inherit" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
