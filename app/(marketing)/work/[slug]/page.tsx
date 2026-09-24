import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { 
  ChevronLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal,
  Activity
} from "lucide-react";

interface WorkPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: {
      canonical: `https://nexvisiontech.com/work/${project.slug}`,
    },
  };
}

export default function WorkDetailPage({ params }: WorkPageProps) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.summary,
        "applicationCategory": project.category,
        "author": {
          "@type": "Organization",
          "name": "NEXVISION TECHNOLOGIES",
          "url": "https://nexvisiontech.com"
        }
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "Work",
            "item": "https://nexvisiontech.com/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://nexvisiontech.com/work/${project.slug}`
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-theme-muted hover:text-theme-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to All Work
        </Link>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-border-subtle relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Badge variant="primary">{project.category}</Badge>
            <span className="text-xs font-mono text-theme-muted font-semibold">
              {project.clientType}
            </span>
            <Badge variant="success" dot>
              {project.status}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-theme-secondary leading-relaxed max-w-3xl mx-auto mb-8">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="glow" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Discuss Similar Architecture
            </Button>
            <Button href="/work" variant="outline" size="lg">
              Explore All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      {project.metrics && (
        <section className="border-b border-border-subtle bg-theme-base/60 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-theme-surface border border-border-subtle">
                <p className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                  {m.label}
                </p>
                <p className="text-2xl font-extrabold text-theme-primary mt-1">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Architectural Narrative */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-indigo font-semibold">
              System Overview & Problem Space
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
              Engineering Architecture Under the Hood
            </h2>
            <p className="text-theme-secondary text-base leading-relaxed">
              {project.description}
            </p>

            <div className="p-6 rounded-2xl bg-theme-surface border border-border-subtle space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-theme-primary font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                Reliability & Engineering Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-theme-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech & Governance */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-theme-surface border border-border-subtle space-y-4 rounded-2xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                Technology Stack:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="primary" className="text-xs py-1 px-3">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-theme-surface border border-border-subtle space-y-3 rounded-2xl">
              <div className="flex items-center gap-2 text-accent-indigo">
                <Activity className="w-4 h-4" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold">
                  Deployment Profile
                </h3>
              </div>
              <p className="text-xs text-theme-secondary leading-relaxed">
                Deployed with automated CI/CD staging verification, database replication, and zero-downtime rolling upgrades.
              </p>
            </Card>
          </div>
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
