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
    default: "bg-theme-elevated text-theme-secondary border-border-subtle",
    primary: "bg-accent-indigo/10 text-accent-indigo border-accent-indigo/25",
    secondary: "bg-theme-highlight text-theme-secondary border-border-subtle",
    success: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/25",
    outline: "bg-transparent text-theme-secondary border-border-subtle",
    glow: "bg-accent-indigo/10 text-accent-indigo border-accent-indigo/35 shadow-sm shadow-accent-indigo/10",
  };

  const dotColors = {
    default: "bg-theme-muted",
    primary: "bg-accent-indigo animate-pulse",
    secondary: "bg-theme-muted",
    success: "bg-accent-emerald animate-pulse",
    outline: "bg-theme-muted",
    glow: "bg-accent-indigo animate-ping",
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
