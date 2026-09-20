import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { SolutionsSection } from "@/components/sections/solutions/SolutionsSection";
import { FeaturedWorkSection } from "@/components/sections/work/FeaturedWorkSection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { TechRadarSection } from "@/components/sections/tech-stack/TechRadarSection";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ShieldCheck, Cpu, GitBranch, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "NEXVISION TECHNOLOGIES — Engineering What Comes Next",
  description:
    "We partner with ambitious startups and enterprises to design, build, and scale resilient software, high-performance web platforms, and intelligent digital systems.",
};

export default function HomePage() {
  const valuePillars = [
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: "Zero Technical Debt Architecture",
      desc: "Modular codebases, clean domain boundaries, and 100% strict static typing.",
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: "Next-Gen Performance",
      desc: "Next.js App Router, edge caching, and sub-50ms database roundtrips.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Enterprise Grade Security",
      desc: "Granular RBAC, encrypted secrets, and automated security vulnerability audits.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
      title: "Agile Two-Week Sprints",
      desc: "Transparent iterative delivery with live staging previews and direct architect access.",
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Value Pillars Strip */}
      <section className="border-y border-white/5 bg-[#060608] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />
      <SolutionsSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <TechRadarSection />
      <InquiryCTASection />
    </>
  );
}
