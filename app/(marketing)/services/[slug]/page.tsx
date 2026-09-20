import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Clock, 
  ShieldAlert, 
  Sparkles,
  ChevronLeft
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — NEXVISION TECHNOLOGIES`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-8 h-8 text-blue-400" />,
    Globe: <Globe className="w-8 h-8 text-cyan-400" />,
    Smartphone: <Smartphone className="w-8 h-8 text-indigo-400" />,
    Layers: <Layers className="w-8 h-8 text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-8 h-8 text-pink-400" />,
    Layout: <Layout className="w-8 h-8 text-amber-400" />,
    Cloud: <Cloud className="w-8 h-8 text-sky-400" />,
    Compass: <Compass className="w-8 h-8 text-emerald-400" />,
  };

  return (
    <div className="relative">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
            {iconMap[service.icon] || <Code2 className="w-8 h-8 text-blue-400" />}
          </div>
          <div className="mb-3">
            <Badge variant="primary">{service.tagline}</Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {service.heroHeadline}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
            <Button href="#capabilities" variant="outline" size="lg">
              Explore Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Breakdown */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-[#0b0b10] border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-bold text-white">The Operational Challenge</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.problemStatement}
            </p>
          </Card>

          <Card glow className="p-8 bg-[#0b0b10] border border-indigo-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">The NEXVISION Engineering Solution</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.solutionOverview}
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Detailed Capabilities */}
      <SectionContainer id="capabilities" className="border-t border-white/5 bg-[#07070a]">
        <SectionHeader
          eyebrow="Specialized Modules"
          title="Technical Capabilities & Engineering Scope"
          description="Every layer of our architecture is built with strict quality controls and documented standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.capabilities.map((cap) => (
            <Card key={cap.title} glow className="p-8 bg-[#0a0a0f] border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <h3 className="text-lg font-bold text-white">{cap.title}</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                {cap.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Deliverables & Technologies Matrix */}
      <SectionContainer className="border-t border-white/5 bg-[#050507]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <SectionHeader
              eyebrow="Outputs & Artifacts"
              title="What You Receive"
              align="left"
              className="mb-6"
            />
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-200/60 border border-white/5 text-sm text-slate-200"
                >
                  <span className="text-indigo-400 font-mono font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="Tech Standards"
              title="Technology Matrix"
              align="left"
              className="mb-6"
            />
            <Card glow className="p-6 bg-[#0a0a0f] border border-white/10 space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                We select technologies based on performance, active ecosystem support, and strict type safety:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.technologies.map((t) => (
                  <Badge key={t} variant="primary" className="text-xs py-1 px-3">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Zero deprecated dependencies. 100% strict typing.</span>
              </div>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* Execution Lifecycle */}
      <SectionContainer className="border-t border-white/5 bg-[#07070a]">
        <SectionHeader
          eyebrow="Sprint Lifecycle"
          title="How We Execute This Service"
          description="From initial architectural mapping to production deployment and telemetry monitoring."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <Card key={step.step} className="p-6 bg-[#0a0a0f] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-indigo-400 font-bold">
                PHASE {step.step}
              </span>
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Frequently Asked Questions */}
      <SectionContainer className="border-t border-white/5 bg-[#050507]">
        <SectionHeader
          eyebrow="Practical Clarifications"
          title="Frequently Asked Questions"
          description="Key details regarding IP ownership, sprint cadence, and engineering handover."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq) => (
            <Card key={faq.question} className="p-6 bg-[#0a0a0f] border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
