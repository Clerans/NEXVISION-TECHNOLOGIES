"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

export function FeaturedWorkSection() {
  return (
    <SectionContainer id="work" className="border-t border-border-subtle bg-theme-base/40">
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
            className="p-8 bg-theme-surface border border-border-subtle flex flex-col justify-between rounded-2xl"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-xs text-theme-muted font-mono">
                    {project.clientType}
                  </span>
                </div>
                <Badge variant="success" dot>
                  {project.status}
                </Badge>
              </div>

              {/* Title & Summary */}
              <CardTitle className="text-2xl text-theme-primary mb-2">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm text-theme-secondary mb-6 leading-relaxed">
                {project.description}
              </CardDescription>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center sm:text-left">
                      <p className="text-[10px] font-mono text-theme-muted uppercase font-semibold">
                        {metric.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-theme-primary mt-0.5">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Architectural Highlights */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                  Engineering Highlights:
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-theme-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1 shrink-0"
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
