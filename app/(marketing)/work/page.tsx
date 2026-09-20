import React from "react";
import { Metadata } from "next";
import { PROJECTS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Portfolio — Verified Software Implementations",
  description: "Explore selected software platforms, digital commerce marketplaces, and operational management systems engineered by NEXVISION TECHNOLOGIES.",
};

export default function WorkPage() {
  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            PROVEN ENGINEERING TRACK RECORD
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Systems Built for Scale, <br />
            <span className="text-gradient-accent">Speed & Durability.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            A curated showcase of software products, wholesale platforms, and enterprise tools engineered with zero compromise.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <SectionContainer>
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, idx) => (
            <Card
              key={project.id}
              glow
              className="p-8 sm:p-12 bg-[#09090e]/95 border border-white/10"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary">{project.category}</Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {project.clientType}
                    </span>
                    <Badge variant="success" dot>
                      {project.status}
                    </Badge>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Engineering Highlights & Architecture:
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Metrics & Tech Column */}
                <div className="lg:w-2/5 w-full bg-surface-300/90 p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
                  {project.metrics && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Performance Metrics:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-3 rounded-lg bg-surface-200/80 border border-white/5">
                            <p className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</p>
                            <p className="text-sm font-bold text-white mt-0.5">{m.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Technologies Utilized:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs py-1 px-2.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button href="/contact" variant="outline" size="sm" className="w-full">
                      Inquire About Similar Architecture
                    </Button>
                  </div>
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
