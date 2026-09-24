"use client";

import React from "react";
import Link from "next/link";
import { ParticleGrid } from "@/components/ui/ParticleGrid";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Sparkles,
  Server,
  Activity,
  GitBranch
} from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-16 md:py-24">
      {/* Background Interactive Particle Grid & Ambient Glows */}
      <ParticleGrid />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-accent-blue/15 via-accent-indigo/15 to-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-theme-surface/90 border border-border-medium shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-theme-secondary">
            ENGINEERING INTELLIGENT DIGITAL REALITIES
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-theme-primary max-w-5xl leading-[1.08] mb-6">
          We Engineer <br className="hidden sm:inline" />
          <span className="text-gradient-accent">What Comes Next.</span>
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-xl md:text-2xl text-theme-secondary max-w-3xl leading-relaxed mb-10 font-normal">
          NEXVISION TECHNOLOGIES transforms ambitious ideas into resilient software systems, intelligent digital products, and scalable business infrastructure.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            className="w-full sm:w-auto px-8 font-semibold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>
          <Button
            href="/work"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8"
          >
            Explore Our Work
          </Button>
        </div>

        {/* Interactive Architecture Telemetry Showcase */}
        <div className="w-full max-w-4xl rounded-2xl border border-border-subtle bg-theme-surface/95 shadow-2xl shadow-black/5 dark:shadow-indigo-950/40 backdrop-blur-xl p-4 sm:p-6 text-left relative overflow-hidden transition-colors">
          {/* Terminal / System Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-theme-muted ml-2 hidden sm:inline">
                nexvision-core-cluster :: live.telemetry.ts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="primary" dot>
                LATENCY 24MS
              </Badge>
              <Badge variant="success">99.99% UPTIME</Badge>
            </div>
          </div>

          {/* 3 Telemetry Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle space-y-2 hover:border-accent-blue/30 transition-colors">
              <div className="flex items-center justify-between text-theme-muted text-xs font-mono">
                <span className="flex items-center gap-1.5 text-accent-blue font-semibold">
                  <Zap className="w-3.5 h-3.5" /> Edge Velocity
                </span>
                <span className="text-accent-emerald font-bold">100 / 100</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-theme-primary tracking-tight">
                Next.js Edge Runtime
              </p>
              <p className="text-xs text-theme-muted leading-relaxed">
                Sub-second initial page rendering with zero hydration overhead and edge CDN caching.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle space-y-2 hover:border-accent-indigo/30 transition-colors">
              <div className="flex items-center justify-between text-theme-muted text-xs font-mono">
                <span className="flex items-center gap-1.5 text-accent-indigo font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Type Safety
                </span>
                <span className="text-accent-indigo font-bold">100% Strict</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-theme-primary tracking-tight">
                End-to-End Integrity
              </p>
              <p className="text-xs text-theme-muted leading-relaxed">
                Strict TypeScript from database migrations to UI components with automated Zod validation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle space-y-2 hover:border-accent-cyan/30 transition-colors">
              <div className="flex items-center justify-between text-theme-muted text-xs font-mono">
                <span className="flex items-center gap-1.5 text-accent-cyan font-semibold">
                  <Cpu className="w-3.5 h-3.5" /> Core Systems
                </span>
                <span className="text-accent-emerald font-bold">Resilient</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-theme-primary tracking-tight">
                Distributed Cloud Core
              </p>
              <p className="text-xs text-theme-muted leading-relaxed">
                PostgreSQL clustering, Redis transactional queues, and self-healing container topologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
