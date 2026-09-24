import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
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
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & Technical Capabilities",
  description: "Explore the comprehensive technology services offered by NEXVISION TECHNOLOGIES, including bespoke software development, Next.js web applications, mobile platforms, ERP systems, and cloud infrastructure.",
  alternates: {
    canonical: "https://nexvisiontech.com/services",
  },
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    Globe: <Globe className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    Layers: <Layers className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    Layout: <Layout className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    Cloud: <Cloud className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
    Compass: <Compass className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NEXVISION TECHNOLOGIES Services",
    "itemListElement": SERVICES_DATA.map((srv, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": srv.title,
        "description": srv.shortDescription,
        "url": `https://nexvisiontech.com/services/${srv.slug}`,
        "provider": {
          "@type": "Organization",
          "name": "NEXVISION TECHNOLOGIES"
        }
      }
    }))
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            FULL-LIFECYCLE ENGINEERING
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            Specialized Capabilities Built for <br />
            <span className="text-gradient-accent">Enterprise Impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto">
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
                className="p-8 sm:p-10 bg-theme-surface border border-border-subtle flex flex-col lg:flex-row gap-10 items-start justify-between rounded-2xl"
              >
                <div className="lg:w-3/5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-theme-elevated border border-border-subtle">
                      {iconMap[service.icon] || <Code2 className="w-6 h-6 text-accent-blue" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-accent-indigo font-semibold uppercase">
                        SERVICE 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
                    {service.problemStatement}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                      Key Technical Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="p-3.5 rounded-xl bg-theme-elevated/70 border border-border-subtle space-y-1"
                        >
                          <p className="text-xs font-bold text-theme-primary flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                            {cap.title}
                          </p>
                          <p className="text-[11px] text-theme-muted leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="lg:w-2/5 w-full bg-theme-elevated/70 p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold mb-4">
                      Sprint Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-theme-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 3).map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      href={`/services/${service.slug}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Deep Dive
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
