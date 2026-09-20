"use client";

import React from "react";
import Link from "next/link";
import { ParticleGrid } from "@/components/ui/ParticleGrid";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Terminal, Cpu, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 md:py-24">
      {/* Background Interactive Particle Grid & Ambient Glows */}
      <ParticleGrid />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Live Operational Status Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-300">
            NEXVISION ARCHITECTURE LABS — OPEN FOR ENTERPRISE INQUIRIES
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          Engineering <br className="hidden sm:inline" />
          <span className="text-gradient-accent">What Comes Next.</span>
        </h1>

        {/* Supporting Brand Statement */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
          We partner with modern enterprises and ambitious ventures to design, build, and scale resilient software systems, cloud-native platforms, and intelligent digital architectures.
        </p>

        {/* Dual Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            className="w-full sm:w-auto px-8"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8"
          >
            Explore Capabilities
          </Button>
        </div>

        {/* Interactive Engineering Showcase Widget */}
        <div className="w-full max-w-4xl rounded-2xl border border-white/15 bg-surface-200/90 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl p-4 sm:p-6 text-left relative overflow-hidden">
          {/* Mac-style Window Controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                nexvision-core-runtime :: system.telemetry.ts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="primary" dot>
                LATENCY 24MS
              </Badge>
              <Badge variant="success">99.99% UPTIME</Badge>
            </div>
          </div>

          {/* Grid of 3 Live Engineering Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> Web Velocity
                </span>
                <span className="text-emerald-400 font-bold">100 / 100</span>
              </div>
              <p className="text-lg font-bold text-white tracking-tight">Next.js Edge SSR</p>
              <p className="text-xs text-slate-400 leading-normal">
                Sub-second initial page rendering with zero unnecessary client hydration bloat.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Type Safety
                </span>
                <span className="text-indigo-400 font-bold">100% Strict</span>
              </div>
              <p className="text-lg font-bold text-white tracking-tight">End-to-End Types</p>
              <p className="text-xs text-slate-400 leading-normal">
                Zero runtime type compromises from database schema to user interface components.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Architecture
                </span>
                <span className="text-cyan-400 font-bold">Fault-Tolerant</span>
              </div>
              <p className="text-lg font-bold text-white tracking-tight">Cloud-Native Core</p>
              <p className="text-xs text-slate-400 leading-normal">
                PostgreSQL clustering, Redis caching layers, and automated CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
