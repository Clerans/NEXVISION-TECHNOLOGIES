import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          50: "#1a1a24",
          100: "#14141c",
          200: "#0f0f16",
          300: "#0b0b10",
          400: "#08080c",
          500: "#050505",
        },
        brand: {
          blue: "#2563eb",
          electric: "#3b82f6",
          violet: "#6366f1",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.15)",
          glow: "rgba(99, 102, 241, 0.35)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow-fade": "glowFade 3s ease-in-out infinite alternate",
        "border-spin": "borderSpin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowFade: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(5, 5, 5, 0) 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
