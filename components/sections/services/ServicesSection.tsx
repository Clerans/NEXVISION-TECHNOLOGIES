"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
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
  ArrowUpRight 
} from "lucide-react";

export function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-blue-400" />,
    Globe: <Globe className="w-6 h-6 text-cyan-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-indigo-400" />,
    Layers: <Layers className="w-6 h-6 text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-pink-400" />,
    Layout: <Layout className="w-6 h-6 text-amber-400" />,
    Cloud: <Cloud className="w-6 h-6 text-sky-400" />,
    Compass: <Compass className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <SectionContainer id="services" className="border-t border-white/5 bg-[#07070a]">
      <SectionHeader
        eyebrow="Core Specializations"
        title="End-to-End Technology Capabilities"
        description="We bridge strategic thinking, modern aesthetics, and architectural rigor to build digital software solutions tailored to enterprise growth."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="group flex flex-col"
          >
            <Card
              glow
              className="flex-1 flex flex-col justify-between p-6 bg-[#0c0c11]/80 hover:bg-[#121219] transition-all duration-300 group-hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                    {iconMap[service.icon] || <Code2 className="w-6 h-6 text-blue-400" />}
                  </div>
                  <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-400 font-mono mt-1">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
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
    </SectionContainer>
  );
}
