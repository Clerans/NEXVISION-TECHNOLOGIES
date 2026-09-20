import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Terminal, 
  Layers, 
  Target, 
  Compass,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Engineering Culture & Vision",
  description: "Learn about NEXVISION TECHNOLOGIES, our founding philosophy, engineering values, and our commitment to building reliable, high-performance software systems.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Architectural Integrity",
      tagline: "We build systems that last",
      description: "We refuse to take shortcuts that create technical debt. Every database schema, API route, and state model is designed for strict type safety and maintainability.",
    },
    {
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
      title: "Radical Transparency",
      tagline: "Direct communication, zero black boxes",
      description: "Our clients collaborate directly with senior software architects. Weekly demos, staging environments, and shared repositories ensure complete alignment.",
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Velocity with Quality",
      tagline: "Fast iterations without compromising reliability",
      description: "By leveraging modern toolchains (Next.js, TypeScript, Docker, CI/CD), we compress development cycles while maintaining comprehensive automated test suites.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      title: "Human-Centric Design",
      tagline: "Sophisticated aesthetics meet effortless UX",
      description: "Software should feel responsive, intuitive, and delightful to operate. We treat user interface design and typography with executive-grade craftsmanship.",
    },
  ];

  const milestones = [
    {
      period: "Founding Phase",
      title: "Architecture Labs Inception",
      description: "Established NEXVISION TECHNOLOGIES with a dedicated mission to combine world-class design systems with enterprise software reliability.",
    },
    {
      period: "Product Milestone",
      title: "Launch of SmartLanka Trade & NEXUSPOS",
      description: "Engineered high-concurrency B2B wholesale commerce platforms and offline-first POS retail engines.",
    },
    {
      period: "Enterprise Expansion",
      title: "TEZLAA Management System Deployment",
      description: "Delivered full-scale operational dispatching, fleet management, and automated invoicing engines for commercial service providers.",
    },
    {
      period: "Present & Future",
      title: "Scalable Cloud Core & Next.js Platforms",
      description: "Expanding specialized engagements for mid-market enterprises and high-growth technology ventures globally.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            OUR PURPOSE & CULTURE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            We Bridge Bold Vision and <br />
            <span className="text-gradient-accent">Flawless Software Execution.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            NEXVISION TECHNOLOGIES was founded on a simple conviction: modern businesses deserve software that looks world-class, responds instantly, and never breaks under scale.
          </p>
        </div>
      </section>

      {/* Brand Story & Mission */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              The NEXVISION Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Technology Designed to Move Real Business Forward
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              In an industry crowded with superficial templates and fragile codebases, NEXVISION represents a disciplined alternative. We approach every digital project with the precision of senior systems architects and the refined visual aesthetics of an elite design house.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We do not invent artificial vanity metrics or claim capabilities we cannot substantiate. When you engage NEXVISION, you receive dedicated engineering rigor, 100% intellectual property ownership, and direct access to craftsmen who care deeply about the longevity of your software.
            </p>
          </div>

          <Card glow className="p-8 bg-[#0b0b10] border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Compass className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Our Core Commitments</h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">100% IP & Code Ownership</strong>
                  All repositories, architectural blueprints, and design tokens belong to you from day one.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Zero Vendor Lock-In</strong>
                  We build on open industry standards (TypeScript, Next.js, PostgreSQL, Docker) so you maintain full control.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Enterprise SLA & Reliability</strong>
                  Proactive telemetry, automated backups, and 24-hour response SLAs on active maintenance.
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </SectionContainer>

      {/* Core Values */}
      <SectionContainer className="border-t border-white/5 bg-[#07070a]">
        <SectionHeader
          eyebrow="Our Engineering DNA"
          title="The Principles That Guide Every Sprint"
          description="These four cornerstones dictate how we design data structures, write code, conduct pull requests, and communicate with partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((val) => (
            <Card key={val.title} glow className="p-8 bg-[#0a0a0f] border border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-5">
                {val.icon}
              </div>
              <CardTitle className="text-xl text-white mb-1">
                {val.title}
              </CardTitle>
              <p className="text-xs font-mono text-indigo-400 mb-4">
                {val.tagline}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {val.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Timeline Roadmap */}
      <SectionContainer className="border-t border-white/5 bg-[#050507]">
        <SectionHeader
          eyebrow="Company Trajectory"
          title="Our Evolution & Verified Milestones"
          description="A timeline of our architectural foundations, proprietary platforms, and enterprise deliveries."
        />

        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-white/10">
          {milestones.map((m, idx) => (
            <div
              key={m.title}
              className={`relative flex flex-col md:flex-row items-start gap-6 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#050507] shadow-lg shadow-indigo-500/50 mt-1" />

              <Card className="ml-10 md:ml-0 w-full md:w-[45%] p-6 bg-[#0a0a0f] border border-white/10">
                <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                  {m.period}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
