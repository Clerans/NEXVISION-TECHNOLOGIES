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
        theme: {
          void: "var(--bg-void)",
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          highlight: "var(--bg-highlight)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          blue: "var(--accent-blue)",
          indigo: "var(--accent-indigo)",
          cyan: "var(--accent-cyan)",
          emerald: "var(--accent-emerald)",
        },
        border: {
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
          glow: "var(--border-highlight)",
        },
        brand: {
          blue: "#2563eb",
          electric: "#3b82f6",
          violet: "#6366f1",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
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
          "50%": { transform: "translateY(-8px)" },
        },
        glowFade: {
          "0%": { opacity: "0.35" },
          "100%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        "radial-highlight": "radial-gradient(circle at 50% 0%, var(--gradient-highlight-start) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
