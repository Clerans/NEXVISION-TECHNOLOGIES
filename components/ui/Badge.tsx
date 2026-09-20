import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "outline" | "glow";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-slate-300 border-white/10",
    primary: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    secondary: "bg-surface-50 text-slate-300 border-white/10",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    outline: "bg-transparent text-slate-300 border-white/20",
    glow: "bg-indigo-950/40 text-indigo-300 border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]",
  };

  const dotColors = {
    default: "bg-slate-400",
    primary: "bg-indigo-400 animate-pulse",
    secondary: "bg-slate-400",
    success: "bg-emerald-400 animate-pulse",
    outline: "bg-slate-300",
    glow: "bg-indigo-400 animate-ping",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono tracking-wide border",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />}
      <span>{children}</span>
    </div>
  );
}
