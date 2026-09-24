import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme-void flex flex-col items-center justify-center p-6 text-center relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-indigo/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl space-y-6">
        <Badge variant="primary" dot>
          ERROR 404 — ROUTE NOT FOUND
        </Badge>

        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-theme-primary font-mono">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
            The Requested Architecture Does Not Exist
          </h2>
          <p className="text-sm text-theme-muted leading-relaxed max-w-md mx-auto">
            The endpoint or resource you requested may have been relocated, refactored, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/"
            variant="glow"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Homepage
          </Button>

          <Button
            href="/services"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Browse Capabilities
          </Button>
        </div>

        {/* Quick Route Suggestions */}
        <div className="pt-8 border-t border-border-subtle text-xs font-mono text-theme-muted flex flex-wrap items-center justify-center gap-4">
          <span>Explore:</span>
          <Link href="/services" className="hover:text-theme-primary transition-colors">/services</Link>
          <Link href="/solutions" className="hover:text-theme-primary transition-colors">/solutions</Link>
          <Link href="/work" className="hover:text-theme-primary transition-colors">/work</Link>
          <Link href="/contact" className="hover:text-theme-primary transition-colors">/contact</Link>
        </div>
      </div>
    </div>
  );
}
