"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Layers, 
  ShoppingBag, 
  Layout, 
  Cloud, 
  Compass, 
  ArrowUpRight,
  ArrowRight
} from "lucide-react";

export function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    Globe: <Globe className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
    Layout: <Layout className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
    Compass: <Compass className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
  };

  return (
    <SectionContainer id="services" className="border-t border-border-subtle bg-theme-base/40">
      <SectionHeader
        eyebrow="Core Specializations"
        title="End-to-End Technology Capabilities"
        description="We bridge strategic architecture, modern aesthetics, and software rigor to build digital solutions tailored to enterprise scale."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo rounded-2xl"
          >
            <Card
              glow
              className="flex-1 flex flex-col justify-between p-6 bg-theme-surface hover:bg-theme-elevated transition-all duration-300 group-hover:-translate-y-1 rounded-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-theme-elevated border border-border-subtle group-hover:bg-accent-indigo/10 group-hover:border-accent-indigo/30 transition-colors">
                    {iconMap[service.icon] || <Code2 className="w-5 h-5 text-blue-500" />}
                  </div>
                  <div className="text-theme-muted group-hover:text-accent-blue transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-theme-muted font-mono mt-1 line-clamp-1">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>

                <p className="text-xs text-theme-secondary leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
                {service.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px] py-0.5 px-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-accent-blue hover:underline"
        >
          Explore All Capabilities & Deliverables <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </SectionContainer>
  );
}
