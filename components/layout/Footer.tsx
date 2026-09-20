import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import { ArrowUpRight, ShieldCheck, Activity, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040406] text-slate-400 relative z-10">
      {/* Top Banner / Status Strip */}
      <div className="border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">All Engineering Systems Operational</span>
            <span className="text-slate-400 hidden md:inline">| Latency: 24ms (Global Edge)</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <span>Next-Gen Enterprise Cloud & Software</span>
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
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
                <span className="font-bold text-lg tracking-tight text-white">
                  NEXVISION
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering high-performance software, modern web platforms, and intelligent business systems for forward-thinking enterprises and ambitious startups.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Next.js App Router
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Type-Safe
              </span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-blue-400 transition-colors text-slate-400 hover:translate-x-0.5 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 text-xs mt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform & Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Tech Radar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-xs text-slate-400 hover:text-slate-400">
                  Maintenance Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Legal & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-preferences" className="hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} NEXVISION TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dark-Mode First Experience</span>
            <span>WCAG 2.1 AA Compliant</span>
            <span>Global Edge CDN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
