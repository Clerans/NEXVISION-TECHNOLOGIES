"use client";

import React, { useState, useEffect } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Cookie, Check, ShieldCheck, Settings, Save } from "lucide-react";

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    functional: true,
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedPref = localStorage.getItem("nexvision_cookie_preferences");
      if (savedPref) {
        setPreferences(JSON.parse(savedPref));
      }
    } catch (e) {
      // fallback to default
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem("nexvision_cookie_preferences", JSON.stringify(preferences));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          USER PRIVACY CONTROLS
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Cookie Preferences
        </h1>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Manage and customize which cookies and local storage tokens NEXVISION is permitted to set on your browser.
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-[#09090e] border border-white/10 space-y-8">
        {saved && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in duration-150">
            <Check className="w-4 h-4" />
            <span>Your privacy preferences have been saved and applied to this browser.</span>
          </div>
        )}

        <div className="space-y-6">
          {/* Necessary Cookies */}
          <div className="p-5 rounded-xl bg-surface-200/80 border border-white/5 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Strictly Necessary Cookies</span>
                <Badge variant="primary" className="text-[10px]">Always Active</Badge>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Required for security verification, session durability, and form submission processing.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 rounded text-indigo-600 bg-surface-300 border-white/20 cursor-not-allowed opacity-80"
              />
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="p-5 rounded-xl bg-surface-200/80 border border-white/5 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-sm font-bold text-white">Analytics & Performance Telemetry</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Collects anonymized page load and error telemetry to help our engineers optimize site speed and Core Web Vitals.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-600 bg-surface-300 border-white/20 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Functional Cookies */}
          <div className="p-5 rounded-xl bg-surface-200/80 border border-white/5 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-sm font-bold text-white">Functional Preferences</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Remembers draft form entries and specific navigation states across browser tabs.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-600 bg-surface-300 border-white/20 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <Button
            onClick={() => setPreferences({ necessary: true, analytics: true, functional: true })}
            variant="outline"
            size="sm"
          >
            Accept All
          </Button>

          <Button
            onClick={handleSave}
            variant="glow"
            size="md"
            icon={<Save className="w-4 h-4" />}
          >
            Save Preferences
          </Button>
        </div>
      </Card>
    </SectionContainer>
  );
}
