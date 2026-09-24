import React from "react";
import Link from "next/link";
import { SERVICES_DATA, SOLUTIONS_DATA } from "@/lib/data";
import { ArrowUpRight, ShieldCheck, Terminal, Cpu } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-theme-base text-theme-secondary relative z-10 transition-colors">
      {/* Top Banner / Operational Telemetry Strip */}
      <div className="border-b border-border-subtle py-3 px-4 sm:px-6 lg:px-8 bg-theme-elevated/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-theme-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-accent-emerald font-semibold">All Engineering Systems Operational</span>
            <span className="text-theme-muted hidden md:inline">| Latency: 24ms (Global Edge)</span>
          </div>

          <div className="flex items-center gap-6 text-theme-muted">
            <span className="hidden sm:inline">Next-Gen Enterprise Architecture</span>
            <Link
              href="/contact"
              className="text-accent-blue hover:underline transition-colors flex items-center gap-1 font-semibold"
            >
              Consult an Architect <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Vision */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-md shadow-indigo-500/20">
                <span className="font-bold text-base text-white tracking-wider">NX</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-theme-primary">
                  NEXVISION
                </span>
                <span className="text-[10px] font-mono tracking-widest text-theme-muted uppercase -mt-1">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-sm text-theme-muted max-w-sm leading-relaxed">
              Engineering high-performance software, modern web platforms, and intelligent business systems for forward-thinking enterprises and ambitious startups.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-theme-secondary">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-theme-elevated border border-border-subtle">
                <Terminal className="w-3.5 h-3.5 text-accent-indigo" /> Next.js App Router
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-theme-elevated border border-border-subtle">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" /> Type-Safe Core
              </span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-primary">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-accent-blue transition-colors text-theme-secondary hover:translate-x-0.5 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent-blue hover:underline font-semibold inline-flex items-center gap-1 text-xs mt-1"
                >
                  View All 8 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform & Solutions */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-primary">
              Solutions & Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-theme-primary transition-colors">
                  Solution Archetypes
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-theme-primary transition-colors">
                  Work & Systems
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-theme-primary transition-colors">
                  7-Step Delivery Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-theme-primary transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-theme-primary transition-colors">
                  About & Culture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-theme-primary transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-primary">
              Legal & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-theme-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-theme-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-theme-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-preferences" className="hover:text-theme-primary transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-theme-primary transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-theme-primary transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <p>© {currentYear} NEXVISION TECHNOLOGIES. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Dual-Theme Adaptive</span>
            <span>WCAG 2.1 AA Compliant</span>
            <span>Global Edge Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
