import React from "react";
import { Metadata } from "next";
import { SOLUTIONS_DATA } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { Building2, Store, ShoppingCart, Zap, CheckCircle2, ArrowRight, Cpu, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Solution Archetypes & Enterprise Architectures",
  description: "Explore tailored software solutions designed for complex business operations, retail point-of-sale environments, B2B marketplaces, and automated workflow engines.",
  alternates: {
    canonical: "https://nexvisiontech.com/solutions",
  },
};

export default function SolutionsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    Store: <Store className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
    ShoppingCart: <ShoppingCart className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    Zap: <Zap className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
  };

  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            PROVEN ARCHITECTURAL BLUEPRINTS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            Engineered Solutions for <br />
            <span className="text-gradient-accent">Operational Leverage.</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto">
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
                className="p-8 sm:p-12 bg-theme-surface border border-border-subtle flex flex-col lg:flex-row gap-10 items-start justify-between rounded-3xl"
              >
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-theme-elevated border border-border-subtle">
                      {iconMap[solution.icon] || <Building2 className="w-8 h-8 text-accent-indigo" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-accent-indigo uppercase font-semibold">
                        ARCHETYPE 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
                        {solution.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-theme-secondary leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle">
                    <p className="text-xs font-mono text-theme-muted uppercase mb-1 font-semibold">
                      Ideal Target Profile:
                    </p>
                    <p className="text-sm font-medium text-theme-primary">
                      {solution.targetAudience}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                      Operational Capabilities:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solution.keyFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-theme-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Architecture Column */}
                <div className="lg:w-2/5 w-full bg-theme-elevated/70 p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="w-4 h-4 text-accent-blue" />
                      <h3 className="text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold">
                        Architecture Highlights:
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {solution.architectureHighlights.map((arch) => (
                        <li key={arch} className="flex items-start gap-2 text-xs text-theme-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-1.5 shrink-0" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-mono text-theme-muted">
                      Full Customization
                    </span>
                    <Button
                      href="/contact"
                      variant="glow"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Inquire on Archetype
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
