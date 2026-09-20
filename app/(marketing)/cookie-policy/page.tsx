import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Cookie, Settings, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Understand how NEXVISION TECHNOLOGIES uses cookies and local storage tokens to deliver a fast, secure website experience.",
};

export default function CookiePolicyPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          TRANSPARENCY & COOKIES
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm font-mono text-slate-400">
          Last Updated: September 2026 • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-[#09090e] border border-white/10 space-y-8 text-slate-300 leading-relaxed text-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-indigo-400" />
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites function efficiently, remember user preferences, and provide analytical telemetry.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">2. Cookie Categories We Utilize</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-surface-200/80 border border-white/5 space-y-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Strictly Necessary Cookies
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Essential for basic website navigation, form submission security (CSRF mitigation), and persistent dark-mode preferences. These cannot be disabled.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-200/80 border border-white/5 space-y-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Performance & Analytical Cookies
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aggregated, anonymized telemetry metrics (such as page load speeds and route transition counts) used to monitor server load and optimize Core Web Vitals.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">3. Managing Your Cookie Preferences</h2>
          <p>
            You can customize or revoke your consent for non-essential cookies at any time using our dedicated interactive cookie preference manager:
          </p>
          <div className="pt-2">
            <Button
              href="/cookie-preferences"
              variant="glow"
              size="sm"
              icon={<Settings className="w-3.5 h-3.5" />}
            >
              Open Cookie Preferences Manager
            </Button>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
