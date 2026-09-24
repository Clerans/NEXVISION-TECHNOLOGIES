"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles } from "lucide-react";

export function InquiryCTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-theme-base/60 border-t border-border-subtle transition-colors">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-border-subtle bg-theme-surface/95 p-8 sm:p-14 text-center shadow-2xl shadow-black/5 dark:shadow-black/50 backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/25 text-xs font-mono text-accent-indigo mb-6 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT INQUIRIES & ADVISORY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-primary mb-6 leading-tight">
          Have a Complex Problem <br />
          <span className="text-gradient-accent">Worth Solving?</span>
        </h2>

        <p className="text-base sm:text-lg text-theme-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are modernizing core enterprise systems, building a high-concurrency commerce platform, or architecting a mission-critical digital product, our senior team is ready.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            className="w-full sm:w-auto px-8 font-semibold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project Inquiry
          </Button>
          <Button
            href="/process"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8"
          >
            Review Engineering Process
          </Button>
        </div>

        <div className="pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-theme-muted">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-accent-blue" />
            <span>24-Hour Initial Response SLA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-emerald" />
            <span>Mutual NDA Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-accent-indigo" />
            <span>100% IP & Code Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
