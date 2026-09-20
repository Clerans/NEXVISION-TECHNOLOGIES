"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, AlertCircle, Loader2, Send, Clock, ShieldCheck } from "lucide-react";

export function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceCategory: "Custom Software Development",
    budgetRange: "$10k - $25k",
    timeline: "1 - 3 Months",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const servicesList = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "Business Management Systems",
    "E-Commerce Solutions",
    "UI/UX Design Systems",
    "Cloud Solutions & Infrastructure",
    "IT Consulting & Digital Strategy",
  ];

  const budgetOptions = [
    "< $10,000",
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k+",
  ];

  const timelineOptions = [
    "Immediate (< 1 Month)",
    "1 - 3 Months",
    "3 - 6 Months",
    "Flexible / Exploratory",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-surface-200/90 border border-emerald-500/30 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Project Inquiry Received</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. A senior NEXVISION software architect has been assigned to review your inquiry.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5 text-xs font-mono text-slate-400 max-w-sm mx-auto space-y-1">
          <p>Target Response SLA: <span className="text-emerald-400 font-bold">&lt; 24 Hours</span></p>
          <p>Service: <span className="text-indigo-400">{formData.serviceCategory}</span></p>
        </div>
        <Button
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              company: "",
              serviceCategory: "Custom Software Development",
              budgetRange: "$10k - $25k",
              timeline: "1 - 3 Months",
              description: "",
            });
          }}
          variant="outline"
          size="sm"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-surface-200/90 border border-white/10 shadow-2xl space-y-6"
    >
      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
            Full Name <span className="text-indigo-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Elena Rostova"
            className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
            Work Email Address <span className="text-indigo-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. elena@company.com"
            className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Row 2: Company */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
          Company or Venture Name
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="e.g. Apex Global Logistics"
          className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400"
        />
      </div>

      {/* Row 3: Service Selection */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
          Service Specialization
        </label>
        <select
          value={formData.serviceCategory}
          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
        >
          {servicesList.map((srv) => (
            <option key={srv} value={srv} className="bg-[#0b0b10] text-white">
              {srv}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
            Target Investment Range
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0b0b10] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
            Desired Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          >
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0b0b10] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Project Description */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
          Project Objectives & Technical Scope <span className="text-indigo-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your operational goals, existing systems, or platform requirements..."
          className="w-full px-4 py-3 rounded-lg bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400 resize-none"
        />
      </div>

      {/* Submission CTA */}
      <Button
        type="submit"
        disabled={status === "loading"}
        variant="glow"
        size="lg"
        className="w-full"
        icon={status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      >
        {status === "loading" ? "Validating & Transmitting..." : "Submit Project Inquiry"}
      </Button>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Guaranteed
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-400" /> &lt; 24h Response SLA
        </span>
      </div>
    </form>
  );
}
