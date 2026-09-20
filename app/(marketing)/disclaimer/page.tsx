import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Legal disclaimer regarding technical information, architectural proposals, and third-party references on NEXVISION TECHNOLOGIES platforms.",
};

export default function DisclaimerPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          LEGAL NOTICE
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Legal Disclaimer
        </h1>
        <p className="text-sm font-mono text-slate-400">
          Last Updated: September 2026 • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-[#09090e] border border-white/10 space-y-8 text-slate-300 leading-relaxed text-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            1. Technical Overview & Information
          </h2>
          <p>
            The content, diagrams, code snippets, and architectural overviews presented on this website are provided strictly for general informational and demonstration purposes. While we strive to maintain accuracy and contemporary engineering best practices, no warranty is made regarding applicability to specific enterprise architectures without formal engineering evaluation.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">2. No Binding Warranties</h2>
          <p>
            Nothing on this website constitutes a formal architectural warranty, financial guarantee, or legal commitment. All service parameters, delivery timelines, SLA guarantees, and performance benchmarks are established through individual Statements of Work (SOW) executed between authorized parties.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">3. Third-Party Trademarks</h2>
          <p>
            All third-party trademarks, product names, framework logos (such as Next.js, React, Docker, AWS, Apple, Google, Figma), and brand references mentioned on this website belong to their respective copyright holders. References are made solely for architectural identification and interoperability context.
          </p>
        </div>
      </Card>
    </SectionContainer>
  );
}
