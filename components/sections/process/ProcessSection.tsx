"use client";

import React, { useState } from "react";
import Link from "next/link";
import { METHODOLOGY_STEPS } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionContainer id="process" className="border-t border-border-subtle bg-theme-void">
      <SectionHeader
        eyebrow="Delivery Methodology"
        title="The 7-Step Agile Engineering Framework"
        description="We follow a systematic, transparent software development lifecycle designed to maximize delivery speed while eliminating technical debt."
      />

      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
        {METHODOLOGY_STEPS.map((step, idx) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl text-left border transition-all duration-200 ${
              activeStep === idx
                ? "bg-accent-indigo/15 border-accent-indigo text-theme-primary shadow-md shadow-accent-indigo/10"
                : "bg-theme-surface border-border-subtle text-theme-muted hover:text-theme-primary hover:bg-theme-elevated"
            }`}
          >
            <div className="text-[10px] font-mono text-accent-indigo font-bold mb-0.5">
              PHASE {step.number}
            </div>
            <div className="text-xs sm:text-sm font-semibold truncate">
              {step.phase}
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Detailed Card */}
      <Card
        glow
        className="p-8 sm:p-10 bg-theme-surface border border-border-subtle relative overflow-hidden rounded-2xl"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="primary" className="text-xs px-3 py-1">
              Phase {METHODOLOGY_STEPS[activeStep].number} — {METHODOLOGY_STEPS[activeStep].phase}
            </Badge>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4">
            {METHODOLOGY_STEPS[activeStep].title}
          </h3>

          <p className="text-sm sm:text-base text-theme-secondary leading-relaxed mb-8">
            {METHODOLOGY_STEPS[activeStep].description}
          </p>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold mb-3">
              Standard Deliverables & Outputs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {METHODOLOGY_STEPS[activeStep].outputs.map((out) => (
                <div
                  key={out}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-theme-elevated/80 border border-border-subtle text-xs text-theme-primary"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-12 text-center">
        <Button href="/process" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
          View Deep-Dive Engineering Methodology
        </Button>
      </div>
    </SectionContainer>
  );
}
