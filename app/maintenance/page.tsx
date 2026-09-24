import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Wrench, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Scheduled Maintenance — NEXVISION TECHNOLOGIES",
  description: "NEXVISION TECHNOLOGIES platform infrastructure is undergoing scheduled maintenance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-theme-void flex flex-col items-center justify-center p-6 text-center relative overflow-hidden transition-colors">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-indigo/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-accent-indigo/10 border border-accent-indigo/30 text-accent-indigo flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8" />
        </div>

        <Badge variant="primary" dot>
          SCHEDULED INFRASTRUCTURE UPGRADE
        </Badge>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            System Maintenance in Progress
          </h1>
          <p className="text-sm text-theme-muted leading-relaxed">
            Our cloud engineering cluster is currently undergoing scheduled performance optimizations and security patching.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-theme-surface border border-border-subtle text-xs font-mono text-theme-secondary space-y-1 text-left max-w-sm mx-auto">
          <p className="flex items-center justify-between">
            <span className="text-theme-muted">Estimated Duration:</span>
            <span className="text-accent-emerald font-bold">&lt; 30 Minutes</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-theme-muted">Database Status:</span>
            <span className="text-accent-blue font-bold">Encrypted & Safe</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Button href="/" variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Back to Site
          </Button>
        </div>

        <p className="text-xs font-mono text-theme-muted">
          Urgent operational inquiry? Contact <span className="text-accent-blue">emergency@nexvisiontech.com</span>
        </p>
      </div>
    </div>
  );
}
