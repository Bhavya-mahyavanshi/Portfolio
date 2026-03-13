import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-crimson)", "Georgia", "serif"],
        ui: ["var(--font-dm)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: { DEFAULT: "#1A0F0A", light: "#3D2314", faint: "#6B4226" },
        cream: { DEFAULT: "#F5EDD8", warm: "#E8D5B0", muted: "#D4B896" },
        paint: {
          red: "#C44B2B",
          blue: "#4A6B8A",
          sage: "#4A6741",
          gold: "#B8953A",
        },
        canvas: "#0A0603",
      },
      animation: {
        "brush-in": "brushIn 1.8s ease-out forwards",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-med": "floatMed 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        brushIn: {
          "0%": { strokeDashoffset: "2000", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        floatMed: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
