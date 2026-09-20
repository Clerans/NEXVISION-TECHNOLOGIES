"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50";

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 active:scale-[0.98]",
      glow:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-[0.98] border border-white/20",
      secondary:
        "bg-surface-100 hover:bg-surface-50 text-slate-100 border border-white/10 active:scale-[0.98]",
      outline:
        "bg-transparent hover:bg-white/5 text-slate-200 border border-white/15 hover:border-white/30 active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(classes, "group")}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={cn(classes, "group")}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={cn(classes, "group")} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
