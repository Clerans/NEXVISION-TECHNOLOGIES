"use client";

import React from "react";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Building2, Store, ShoppingCart, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    Store: <Store className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    ShoppingCart: <ShoppingCart className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  };

  return (
    <SectionContainer id="solutions" className="border-t border-border-subtle bg-theme-void">
      <SectionHeader
        eyebrow="Targeted Solution Archetypes"
        title="Scalable Systems for Complex Business Operations"
        description="Whether you require an enterprise ERP core, an offline-first retail POS system, or a high-concurrency B2B trading engine, our architectures deliver sustained operational leverage."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS_DATA.map((solution) => (
          <Card
            key={solution.id}
            glow
            className="p-8 bg-theme-surface border border-border-subtle flex flex-col justify-between rounded-2xl"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-theme-elevated border border-border-subtle">
                  {iconMap[solution.icon] || <Building2 className="w-5 h-5 text-indigo-500" />}
                </div>
                <div>
                  <CardTitle className="text-xl text-theme-primary">
                    {solution.title}
                  </CardTitle>
                  <p className="text-xs text-accent-blue font-mono mt-0.5">
                    {solution.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-theme-secondary leading-relaxed mb-6">
                {solution.description}
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                  Key Capabilities:
                </p>
                <ul className="space-y-2">
                  {solution.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-theme-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs text-theme-muted font-mono">
                {solution.targetAudience}
              </span>
              <Link
                href="/contact"
                className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1 group"
              >
                Discuss Solution <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
