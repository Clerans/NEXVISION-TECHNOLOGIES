import React from "react";
import { Metadata } from "next";
import { SOLUTIONS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { Building2, Store, ShoppingCart, Zap, CheckCircle2, ArrowRight, Cpu, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Solution Archetypes & Enterprise Architectures",
  description: "Explore tailored software solutions designed for complex business operations, retail point-of-sale environments, B2B marketplaces, and automated workflow engines.",
};

export default function SolutionsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-indigo-400" />,
    Store: <Store className="w-8 h-8 text-emerald-400" />,
    ShoppingCart: <ShoppingCart className="w-8 h-8 text-pink-400" />,
    Zap: <Zap className="w-8 h-8 text-amber-400" />,
  };

  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            PROVEN ARCHITECTURAL BLUEPRINTS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineered Solutions for <br />
            <span className="text-gradient-accent">Operational Leverage.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            We architect end-to-end digital solutions that consolidate fragmented operations, eliminate manual errors, and scale smoothly with business growth.
          </p>
        </div>
      </section>

      {/* Solutions Detailed Breakdown */}
      <SectionContainer>
        <div className="space-y-16">
          {SOLUTIONS_DATA.map((solution, idx) => (
            <div key={solution.id} className="scroll-mt-28">
              <Card
                glow
                className="p-8 sm:p-12 bg-[#09090e]/95 border border-white/10 flex flex-col lg:flex-row gap-10 items-start justify-between"
              >
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      {iconMap[solution.icon] || <Building2 className="w-8 h-8 text-indigo-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">
                        ARCHETYPE 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {solution.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5">
                    <p className="text-xs font-mono text-slate-400 uppercase mb-1">
                      Ideal Target Profile:
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {solution.targetAudience}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Operational Capabilities:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solution.keyFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Architecture Column */}
                <div className="lg:w-2/5 w-full bg-surface-300/90 p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                        Architecture Highlights:
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {solution.architectureHighlights.map((arch) => (
                        <li
                          key={arch}
                          className="p-3 rounded-lg bg-surface-200/80 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5"
                        >
                          <span className="text-indigo-400 font-mono">▸</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Button href="/contact" variant="glow" size="md" className="w-full">
                      Request Solution Architecture Blueprint
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
