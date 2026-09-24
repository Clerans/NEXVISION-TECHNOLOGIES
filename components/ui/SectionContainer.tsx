import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

export function SectionContainer({
  className,
  size = "default",
  children,
  ...props
}: SectionContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <section className={cn("relative py-16 md:py-24 px-4 sm:px-6 lg:px-8", className)} {...props}>
      <div className={cn("mx-auto", sizes[size])}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col mb-12 md:mb-16 max-w-3xl", alignments[align], className)}>
      {eyebrow && (
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent-indigo mb-3 bg-accent-indigo/10 px-3 py-1 rounded-full border border-accent-indigo/25">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-theme-primary mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-theme-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
