import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "NEXVISION TECHNOLOGIES accessibility policy and WCAG 2.1 Level AA conformance standards.",
};

export default function AccessibilityPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          INCLUSION & WCAG CONFORMANCE
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Accessibility Statement
        </h1>
        <p className="text-sm font-mono text-slate-400">
          Conformance Target: WCAG 2.1 Level AA • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-[#09090e] border border-white/10 space-y-8 text-slate-300 leading-relaxed text-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-400" />
            1. Our Accessibility Standard
          </h2>
          <p>
            NEXVISION TECHNOLOGIES is dedicated to making our digital software systems and web platforms accessible to all users, including individuals with visual, motor, auditory, and cognitive disabilities.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">2. Technical Implementation Measures</h2>
          <p>We actively incorporate accessibility standards across our design systems:</p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Color Contrast:</strong> All text tokens meet or exceed the 4.5:1 WCAG AA contrast ratio against dark obsidian backgrounds.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Keyboard Navigation:</strong> Full interactive operability using Tab, Enter, and Escape keys with visible focus rings.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Reduced Motion Support:</strong> CSS queries respect <code className="text-indigo-300 font-mono">prefers-reduced-motion</code> by dampening canvas and spring animations.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Semantic HTML:</strong> Correct semantic landmarks (<code className="text-indigo-300 font-mono">&lt;nav&gt;</code>, <code className="text-indigo-300 font-mono">&lt;main&gt;</code>, <code className="text-indigo-300 font-mono">&lt;article&gt;</code>, <code className="text-indigo-300 font-mono">&lt;footer&gt;</code>) for screen readers.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">3. Feedback & Contact</h2>
          <p>
            If you encounter any barrier while interacting with our website, please notify our design systems team at: <span className="text-blue-400 font-mono">accessibility@nexvisiontech.com</span>.
          </p>
        </div>
      </Card>
    </SectionContainer>
  );
}
