import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
          <span className="text-[10px] font-mono font-bold text-indigo-400">NX</span>
        </div>
        <p className="text-xs font-mono text-slate-400 tracking-wider uppercase animate-pulse">
          Streaming Architecture Components...
        </p>
      </div>
    </div>
  );
}
