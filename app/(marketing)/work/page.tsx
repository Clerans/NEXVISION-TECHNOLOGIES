import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Portfolio — Verified Software Implementations",
  description: "Explore selected software platforms, digital commerce marketplaces, and operational management systems engineered by NEXVISION TECHNOLOGIES.",
  alternates: {
    canonical: "https://nexvisiontech.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            PROVEN ENGINEERING TRACK RECORD
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            Systems Built for Scale, <br />
            <span className="text-gradient-accent">Speed & Durability.</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto">
            A curated showcase of software products, wholesale platforms, and enterprise tools engineered with zero compromise.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <SectionContainer>
        <div className="space-y-16">
          {PROJECTS_DATA.map((project) => (
            <Card
              key={project.id}
              glow
              className="p-8 sm:p-12 bg-theme-surface border border-border-subtle rounded-3xl"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary">{project.category}</Badge>
                    <span className="text-xs font-mono text-theme-muted">
                      {project.clientType}
                    </span>
                    <Badge variant="success" dot>
                      {project.status}
                    </Badge>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-theme-primary tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-base text-theme-secondary leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                      Engineering Highlights & Architecture:
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs text-theme-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Metrics & Tech Column */}
                <div className="lg:w-2/5 w-full bg-theme-elevated/70 p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between space-y-6">
                  {project.metrics && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold mb-3">
                        Performance Metrics:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-3 rounded-xl bg-theme-surface border border-border-subtle text-center sm:text-left">
                            <p className="text-[10px] font-mono text-theme-muted uppercase font-semibold">{m.label}</p>
                            <p className="text-sm font-bold text-theme-primary mt-0.5">{m.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold mb-3">
                      Technologies Utilized:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-xs font-mono text-theme-muted">
                      Status: {project.status}
                    </span>
                    <Button
                      href={`/work/${project.slug}`}
                      variant="glow"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View Case Study
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
