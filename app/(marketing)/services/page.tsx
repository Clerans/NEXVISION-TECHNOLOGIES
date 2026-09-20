import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Layers, 
  ShoppingBag, 
  Layout, 
  Cloud, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
  description: "Explore the comprehensive technology services offered by NEXVISION TECHNOLOGIES, including custom software development, Next.js web applications, mobile platforms, ERP systems, and cloud infrastructure.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-7 h-7 text-blue-400" />,
    Globe: <Globe className="w-7 h-7 text-cyan-400" />,
    Smartphone: <Smartphone className="w-7 h-7 text-indigo-400" />,
    Layers: <Layers className="w-7 h-7 text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-7 h-7 text-pink-400" />,
    Layout: <Layout className="w-7 h-7 text-amber-400" />,
    Cloud: <Cloud className="w-7 h-7 text-sky-400" />,
    Compass: <Compass className="w-7 h-7 text-emerald-400" />,
  };

  return (
    <div className="relative">
      {/* Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            FULL-LIFECYCLE ENGINEERING
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Specialized Capabilities Built for <br />
            <span className="text-gradient-accent">Enterprise Impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            From low-latency cloud infrastructure to responsive cross-platform mobile apps and custom ERP engines, we build technology assets that drive real business outcomes.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <SectionContainer>
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-28"
            >
              <Card
                glow
                className="p-8 sm:p-10 bg-[#09090e]/95 border border-white/10 flex flex-col lg:flex-row gap-10 items-start justify-between"
              >
                <div className="lg:w-3/5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {iconMap[service.icon] || <Code2 className="w-7 h-7 text-blue-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                        SERVICE 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.problemStatement}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Technical Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="p-3 rounded-lg bg-surface-300/80 border border-white/5 space-y-1"
                        >
                          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            {cap.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Summary Column */}
                <div className="lg:w-2/5 w-full bg-surface-300/80 p-6 rounded-xl border border-white/5 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Standard Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-indigo-400 font-mono">▸</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Primary Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                    >
                      Full Service Breakdown <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Button href="/contact" variant="primary" size="sm">
                      Inquire
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
