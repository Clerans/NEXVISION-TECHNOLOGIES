import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "NEXVISION TECHNOLOGIES accessibility policy and WCAG 2.1 Level AA conformance standards.",
  alternates: {
    canonical: "https://nexvisiontech.com/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          INCLUSION & WCAG CONFORMANCE
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-primary tracking-tight mb-4">
          Accessibility Statement
        </h1>
        <p className="text-sm font-mono text-theme-muted">
          Conformance Target: WCAG 2.1 Level AA • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-theme-surface border border-border-subtle space-y-8 text-theme-secondary leading-relaxed text-sm rounded-3xl">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-theme-primary flex items-center gap-2">
            <Eye className="w-5 h-5 text-accent-indigo" />
            1. Our Accessibility Standard
          </h2>
          <p>
            NEXVISION TECHNOLOGIES is dedicated to making our digital software systems and web platforms accessible to all users, including individuals with visual, motor, auditory, and cognitive disabilities.
          </p>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">2. Technical Implementation Measures</h2>
          <p>We actively incorporate accessibility standards across our design systems:</p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
              <span><strong>Color Contrast:</strong> All text tokens meet or exceed the 4.5:1 WCAG AA contrast ratio across both Light Mode and Dark Mode themes.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
              <span><strong>Keyboard Navigation:</strong> Full interactive operability using Tab, Enter, and Escape keys with visible focus indicators.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
              <span><strong>Reduced Motion Support:</strong> CSS queries respect <code className="text-accent-indigo font-mono">prefers-reduced-motion</code> by dampening canvas and motion animations.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
              <span><strong>Semantic HTML:</strong> Correct semantic landmarks (<code className="text-accent-indigo font-mono">&lt;nav&gt;</code>, <code className="text-accent-indigo font-mono">&lt;main&gt;</code>, <code className="text-accent-indigo font-mono">&lt;article&gt;</code>, <code className="text-accent-indigo font-mono">&lt;footer&gt;</code>) for assistive technology and screen readers.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">3. Feedback & Contact</h2>
          <p>
            If you encounter any barrier while interacting with our website, please notify our design systems team at: <span className="text-accent-blue font-mono">accessibility@nexvisiontech.com</span>.
          </p>
        </div>
      </Card>
    </SectionContainer>
  );
}
