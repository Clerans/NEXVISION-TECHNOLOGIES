"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles } from "lucide-react";

export function InquiryCTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#040406]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-white/15 bg-gradient-to-b from-surface-100/90 to-surface-300/90 p-8 sm:p-14 text-center shadow-2xl shadow-black/80 backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT INQUIRIES & ADVISORY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Ready to Engineer <br />
          <span className="text-gradient-accent">Your Next Digital Reality?</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are modernizing core enterprise systems, building a multi-vendor digital commerce marketplace, or launching a new software product, our senior architecture team is ready.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            className="w-full sm:w-auto px-8"
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

        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>24-Hour Initial Response SLA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Mutual Non-Disclosure (NDA) Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>100% IP & Source Code Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
