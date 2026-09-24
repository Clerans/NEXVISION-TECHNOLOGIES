import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border-subtle bg-theme-surface/90 text-theme-primary p-6 backdrop-blur-md overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-border-medium hover:bg-theme-elevated/80 hover:shadow-xl hover:shadow-accent-indigo/5",
        glow && "card-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight text-theme-primary", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-theme-muted leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-theme-secondary", className)} {...props}>
      {children}
    </div>
  );
}
