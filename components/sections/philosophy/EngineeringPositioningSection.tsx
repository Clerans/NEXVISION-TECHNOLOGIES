"use client";

import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Cpu, Layout, GitBranch, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EngineeringPositioningSection() {
  const pillars = [
    {
      num: "01",
      title: "Architectural Precision",
      icon: <Cpu className="w-5 h-5 text-accent-blue" />,
      tagline: "Zero technical debt by design",
      description:
        "We build on solid foundations. Clean domain boundaries, strict static type safety, and modular services eliminate compounding maintenance friction before it starts.",
    },
    {
      num: "02",
      title: "Product-Focused Design",
      icon: <Layout className="w-5 h-5 text-accent-indigo" />,
      tagline: "Ergonomics meets executive aesthetic",
      description:
        "High-performance software must feel responsive, intuitive, and visually exceptional. We balance architectural rigor with fluid 60fps micro-interactions.",
    },
    {
      num: "03",
      title: "Full-Cycle Engineering",
      icon: <GitBranch className="w-5 h-5 text-accent-cyan" />,
      tagline: "From concept to global edge deployment",
      description:
        "We manage the complete software lifecycle: domain modeling, test-driven sprints, automated CI/CD pipelines, staging environments, and telemetry monitoring.",
    },
    {
      num: "04",
      title: "Long-Term Reliability",
      icon: <ShieldCheck className="w-5 h-5 text-accent-emerald" />,
      tagline: "100% client code & IP ownership",
      description:
        "Every line of source code, database migration, and infrastructure script belongs to your organization from day one, built on open, non-proprietary standards.",
    },
  ];

  return (
    <section className="border-y border-border-subtle bg-theme-base/60 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-border-subtle">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-indigo mb-2 block">
              Engineering Positioning
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-theme-primary leading-tight">
              A Disciplined Alternative to Superficial Software Development
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-blue hover:underline flex items-center gap-1.5 shrink-0"
          >
            Our Engineering Manifesto <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="flex flex-col justify-between p-6 rounded-2xl border border-border-subtle bg-theme-surface hover:border-border-medium hover:bg-theme-elevated/70 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-accent-indigo">
                    PILLAR {pillar.num}
                  </span>
                  <div className="p-2 rounded-lg bg-theme-elevated border border-border-subtle group-hover:border-accent-indigo/30 transition-colors">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-theme-primary mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-accent-blue mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
