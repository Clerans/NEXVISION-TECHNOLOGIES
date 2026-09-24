import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-theme-void flex flex-col items-center justify-center p-6 text-center transition-colors">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-accent-indigo/20 border-t-accent-indigo animate-spin" />
          <span className="text-[10px] font-mono font-bold text-accent-indigo">NX</span>
        </div>
        <p className="text-xs font-mono text-theme-muted tracking-wider uppercase animate-pulse">
          Streaming Architecture Components...
        </p>
      </div>
    </div>
  );
}
