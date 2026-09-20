"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink, Cpu, CheckCircle } from "lucide-react";

export function FeaturedWorkSection() {
  return (
    <SectionContainer id="work" className="border-t border-white/5 bg-[#07070a]">
      <SectionHeader
        eyebrow="Verified Product Engineering"
        title="Selected Systems & Architectural Implementations"
        description="A look at platforms engineered by NEXVISION TECHNOLOGIES across enterprise management, digital wholesale trade, and resilient retail point of sale."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <Card
            key={project.id}
            glow
            className="p-8 bg-[#0a0a0f]/90 border border-white/10 flex flex-col justify-between"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.clientType}
                  </span>
                </div>
                <Badge variant="success" dot>
                  {project.status}
                </Badge>
              </div>

              {/* Title & Summary */}
              <CardTitle className="text-2xl text-white mb-2">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </CardDescription>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface-300/80 border border-white/5 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center sm:text-left">
                      <p className="text-[11px] font-mono text-slate-400 uppercase">
                        {metric.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Architectural Highlights */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering Highlights:
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
              <Link
                href="/work"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
              >
                Case Overview <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/work" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
          Explore Full Portfolio & System Architectures
        </Button>
      </div>
    </SectionContainer>
  );
}
