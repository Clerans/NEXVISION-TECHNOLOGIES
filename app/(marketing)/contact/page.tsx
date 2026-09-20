import React from "react";
import { Metadata } from "next";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { ContactInquiryForm } from "@/components/forms/ContactInquiryForm";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, Clock, ShieldCheck, Cpu, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — Start an Engagement",
  description: "Connect directly with NEXVISION TECHNOLOGIES software architects to discuss your custom software, web application, or enterprise digital platform.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            START AN ENGAGEMENT
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Let’s Build Something <br />
            <span className="text-gradient-accent">Exceptional Together.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Share your project parameters below. You will be connected directly with a senior systems architect within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Information & Trust signals */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                No Sales Runarounds. <br />Direct Architect Access.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We value your time. We do not pass your inquiry through layers of non-technical sales representatives. Your submission is reviewed directly by software engineers who can assess feasibility, architecture, and timeline immediately.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-[#0a0a0f] border border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-indigo-400">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Guaranteed Response SLA
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every inquiry receives an initial technical assessment within 24 business hours.
                </p>
              </Card>

              <Card className="p-6 bg-[#0a0a0f] border border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Strict Confidentiality
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We are glad to execute a mutual Non-Disclosure Agreement (NDA) prior to reviewing proprietary technical documentation.
                </p>
              </Card>

              <Card className="p-6 bg-[#0a0a0f] border border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-blue-400">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Inquiries & Partnerships
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  inquiries@nexvisiontech.com
                </p>
              </Card>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactInquiryForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
