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
    Building2: <Building2 className="w-6 h-6 text-indigo-400" />,
    Store: <Store className="w-6 h-6 text-emerald-400" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6 text-pink-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  return (
    <SectionContainer id="solutions" className="border-t border-white/5 bg-[#050507]">
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
            className="p-8 bg-[#09090e]/90 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  {iconMap[solution.icon] || <Building2 className="w-6 h-6 text-indigo-400" />}
                </div>
                <div>
                  <CardTitle className="text-xl text-white">
                    {solution.title}
                  </CardTitle>
                  <p className="text-xs text-indigo-400 font-mono mt-0.5">
                    {solution.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {solution.description}
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Capabilities:
                </p>
                <ul className="space-y-2.5">
                  {solution.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {solution.targetAudience}
              </span>
              <Link
                href="/contact"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group"
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
