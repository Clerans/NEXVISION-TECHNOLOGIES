import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Wrench, Clock, ShieldCheck, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Scheduled Maintenance — NEXVISION TECHNOLOGIES",
  description: "NEXVISION TECHNOLOGIES platform infrastructure is undergoing scheduled maintenance.",
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8" />
        </div>

        <Badge variant="primary" dot>
          SCHEDULED INFRASTRUCTURE UPGRADE
        </Badge>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            System Maintenance in Progress
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our cloud engineering cluster is currently undergoing scheduled performance optimizations and security patching.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface-200/90 border border-white/10 text-xs font-mono text-slate-300 space-y-1 text-left max-w-sm mx-auto">
          <p className="flex items-center justify-between">
            <span className="text-slate-400">Estimated Duration:</span>
            <span className="text-emerald-400 font-bold">&lt; 30 Minutes</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-slate-400">Database Status:</span>
            <span className="text-blue-400 font-bold">Encrypted & Safe</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Button href="/" variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Back to Site
          </Button>
        </div>

        <p className="text-xs font-mono text-slate-400">
          Urgent operational inquiry? Contact <span className="text-blue-400">emergency@nexvisiontech.com</span>
        </p>
      </div>
    </div>
  );
}
