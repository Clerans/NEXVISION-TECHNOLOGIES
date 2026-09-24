import React from "react";
import { Metadata } from "next";
import { METHODOLOGY_STEPS } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Delivery Methodology — 7-Step Model",
  description: "Learn how NEXVISION TECHNOLOGIES executes agile software delivery through our systematic 7-step engineering framework, from domain discovery to telemetry-driven scaling.",
  alternates: {
    canonical: "https://nexvisiontech.com/process",
  },
};

export default function ProcessPage() {
  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            AGILE ENGINEERING RIGOR
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            How We Build: <br />
            <span className="text-gradient-accent">The 7-Step Delivery Model.</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto">
            A repeatable, transparent software development lifecycle engineered to maximize velocity while guaranteeing 100% architectural integrity.
          </p>
        </div>
      </section>

      {/* 7-Step Detailed Breakdown */}
      <SectionContainer>
        <div className="space-y-12">
          {METHODOLOGY_STEPS.map((step) => (
            <Card
              key={step.number}
              glow
              className="p-8 sm:p-10 bg-theme-surface border border-border-subtle rounded-3xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="lg:w-2/3 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/25 text-xs font-mono font-bold text-accent-indigo">
                      PHASE {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase text-theme-muted font-semibold">
                      {step.phase}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
                    {step.title}
                  </h2>

                  <p className="text-base text-theme-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Outputs list */}
                <div className="lg:w-1/3 w-full bg-theme-elevated/70 p-6 rounded-2xl border border-border-subtle space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                    Phase Deliverables:
                  </h3>
                  <ul className="space-y-2">
                    {step.outputs.map((out) => (
                      <li key={out} className="flex items-start gap-2 text-xs text-theme-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
