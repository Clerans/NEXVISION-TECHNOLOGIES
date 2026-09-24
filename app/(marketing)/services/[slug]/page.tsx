import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
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
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Clock, 
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
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://nexvisiontech.com/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    Globe: <Globe className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />,
    Smartphone: <Smartphone className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    Layers: <Layers className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    Layout: <Layout className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
    Cloud: <Cloud className="w-8 h-8 text-sky-500 dark:text-sky-400" />,
    Compass: <Compass className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://nexvisiontech.com/services/${service.slug}#service`,
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
          "@type": "Organization",
          "name": "NEXVISION TECHNOLOGIES",
          "url": "https://nexvisiontech.com"
        },
        "url": `https://nexvisiontech.com/services/${service.slug}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://nexvisiontech.com/services/${service.slug}#faq`,
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://nexvisiontech.com/services/${service.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nexvisiontech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://nexvisiontech.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://nexvisiontech.com/services/${service.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-theme-muted hover:text-theme-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-theme-elevated border border-border-subtle mb-6">
            {iconMap[service.icon] || <Code2 className="w-8 h-8 text-accent-blue" />}
          </div>
          <div className="mb-3">
            <Badge variant="primary">{service.tagline}</Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            {service.heroHeadline}
          </h1>
          <p className="text-base sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="glow" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start a Project
            </Button>
            <Button href="#capabilities" variant="outline" size="lg">
              Explore Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Architectural Solution */}
      <SectionContainer id="capabilities">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-indigo font-semibold">
              The Engineering Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
              Operational Friction & Scalability Hurdles
            </h2>
            <p className="text-theme-secondary text-base leading-relaxed">
              {service.problemStatement}
            </p>

            <div className="p-6 rounded-2xl bg-theme-surface border border-border-subtle space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-theme-primary font-semibold">
                Our Architectural Strategy:
              </h3>
              <p className="text-sm text-theme-secondary leading-relaxed">
                {service.solutionOverview}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-indigo font-semibold">
              Technical Capabilities
            </span>
            <div className="space-y-4">
              {service.capabilities.map((cap) => (
                <Card key={cap.title} className="p-6 bg-theme-surface border border-border-subtle rounded-2xl">
                  <h3 className="text-base font-bold text-theme-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-theme-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Deliverables & Technologies Strip */}
      <SectionContainer className="border-t border-border-subtle bg-theme-base/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deliverables */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-theme-primary">
              Contractual Sprint Deliverables
            </h3>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-theme-secondary">
                  <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-theme-primary">
              Primary Technology Ecosystem
            </h3>
            <Card className="p-6 bg-theme-surface border border-border-subtle space-y-4 rounded-2xl">
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <Badge key={t} variant="primary" className="text-xs py-1 px-3">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="pt-4 border-t border-border-subtle text-xs font-mono text-theme-muted flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-blue" />
                <span>Zero deprecated dependencies. 100% strict typing.</span>
              </div>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* Execution Lifecycle */}
      <SectionContainer className="border-t border-border-subtle bg-theme-void">
        <SectionHeader
          eyebrow="Sprint Lifecycle"
          title="How We Execute This Service"
          description="From initial architectural mapping to production deployment and telemetry monitoring."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <Card key={step.step} className="p-6 bg-theme-surface border border-border-subtle space-y-3 rounded-2xl">
              <span className="text-xs font-mono text-accent-indigo font-bold">
                PHASE {step.step}
              </span>
              <h3 className="text-base font-bold text-theme-primary">
                {step.title}
              </h3>
              <p className="text-xs text-theme-secondary leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Frequently Asked Questions */}
      <SectionContainer className="border-t border-border-subtle bg-theme-base/40">
        <SectionHeader
          eyebrow="Practical Clarifications"
          title="Frequently Asked Questions"
          description="Key details regarding IP ownership, sprint cadence, and engineering handover."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq) => (
            <Card key={faq.question} className="p-6 bg-theme-surface border border-border-subtle space-y-2 rounded-2xl">
              <h4 className="text-base font-bold text-theme-primary flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent-indigo shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-sm text-theme-secondary leading-relaxed pl-6">
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
