import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Cookie, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Understand how NEXVISION TECHNOLOGIES uses cookies and local storage tokens to deliver a fast, secure website experience.",
  alternates: {
    canonical: "https://nexvisiontech.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          TRANSPARENCY & COOKIES
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-primary tracking-tight mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm font-mono text-theme-muted">
          Last Updated: September 2026 • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-theme-surface border border-border-subtle space-y-8 text-theme-secondary leading-relaxed text-sm rounded-3xl">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-theme-primary flex items-center gap-2">
            <Cookie className="w-5 h-5 text-accent-indigo" />
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites function efficiently, remember user preferences (such as light or dark theme), and provide analytical telemetry.
          </p>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">2. Cookie Categories We Utilize</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-theme-elevated/70 border border-border-subtle space-y-1">
              <h3 className="text-sm font-bold text-theme-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-emerald" /> Strictly Necessary Cookies
              </h3>
              <p className="text-xs text-theme-muted leading-relaxed">
                Essential for basic website navigation, form submission security (CSRF mitigation), and persistent theme preferences. These cannot be disabled.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-theme-elevated/70 border border-border-subtle space-y-1">
              <h3 className="text-sm font-bold text-theme-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue" /> Performance & Analytical Cookies
              </h3>
              <p className="text-xs text-theme-muted leading-relaxed">
                Aggregated, anonymized telemetry metrics (such as page load speeds and route transition counts) used to monitor server load and optimize Core Web Vitals.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">3. Managing Your Cookie Preferences</h2>
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
