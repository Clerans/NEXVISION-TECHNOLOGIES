"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-lg border border-border-subtle bg-theme-elevated/60 flex items-center justify-center opacity-60 ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4 rounded-full bg-theme-muted/40 animate-pulse" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const titleText = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 rounded-lg border border-border-subtle bg-theme-elevated/80 hover:bg-theme-highlight text-theme-secondary hover:text-theme-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo focus-visible:border-accent-indigo active:scale-95 group ${className}`}
      aria-label={titleText}
      title={titleText}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-all duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-accent-indigo rotate-0 scale-100 transition-all duration-200" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium font-mono uppercase tracking-wider">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
