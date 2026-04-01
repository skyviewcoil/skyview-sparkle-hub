import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      colors: {
        sky: {
          cream: "#FAFAF8",
          graphite: "#1A1A2E",
          navy: "#1E3A5F",
          muted: "#6B7280",
          border: "#E5E5E3",
          light: "#F5F5F3",
        },
      },
      fontSize: {
        "h1-mobile": [
          "clamp(2.25rem, 9vw, 2.75rem)",
          { lineHeight: "1.05", fontWeight: "900", letterSpacing: "-0.02em" },
        ],
        "h1-desktop": [
          "clamp(3.25rem, 5.5vw, 4.25rem)",
          { lineHeight: "1.0", fontWeight: "900", letterSpacing: "-0.025em" },
        ],
        "h2-mobile": [
          "clamp(1.625rem, 6vw, 2rem)",
          { lineHeight: "1.15", fontWeight: "800", letterSpacing: "-0.02em" },
        ],
        "h2-desktop": [
          "clamp(2.25rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.02em" },
        ],
        "h3-mobile": ["1.125rem", { lineHeight: "1.35", fontWeight: "700" }],
        "h3-desktop": ["1.375rem", { lineHeight: "1.3", fontWeight: "700" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: [
          "0.6875rem",
          { lineHeight: "1", fontWeight: "600", letterSpacing: "0.12em" },
        ],
      },
      maxWidth: {
        content: "1280px",
        prose: "800px",
      },
      spacing: {
        section: "88px",
        "section-mobile": "52px",
      },
    },
  },
  plugins: [],
};

export default config;
