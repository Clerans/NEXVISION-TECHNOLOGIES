"use client";

import React, { useState, useEffect } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, Save } from "lucide-react";

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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-primary tracking-tight mb-4">
          Cookie Preferences
        </h1>
        <p className="text-sm text-theme-muted max-w-lg mx-auto">
          Manage and customize which cookies and local storage tokens NEXVISION is permitted to set on your browser.
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-theme-surface border border-border-subtle space-y-8 rounded-3xl">
        {saved && (
          <div className="p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs flex items-center gap-2 animate-in fade-in duration-150">
            <Check className="w-4 h-4 shrink-0" />
            <span>Your privacy preferences have been saved and applied to this browser.</span>
          </div>
        )}

        <div className="space-y-6">
          {/* Necessary Cookies */}
          <div className="p-5 rounded-2xl bg-theme-elevated/70 border border-border-subtle flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-theme-primary">Strictly Necessary Cookies</span>
                <Badge variant="primary" className="text-[10px]">Always Active</Badge>
              </div>
              <p className="text-xs text-theme-muted leading-relaxed">
                Required for security verification, theme persistence, and form submission processing.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 rounded text-accent-indigo cursor-not-allowed opacity-80"
              />
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="p-5 rounded-2xl bg-theme-elevated/70 border border-border-subtle flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-sm font-bold text-theme-primary">Analytics & Performance Telemetry</span>
              <p className="text-xs text-theme-muted leading-relaxed">
                Collects anonymized page load and error telemetry to help our engineers optimize site speed and Core Web Vitals.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 rounded text-accent-indigo focus:ring-accent-indigo cursor-pointer"
              />
            </div>
          </div>

          {/* Functional Cookies */}
          <div className="p-5 rounded-2xl bg-theme-elevated/70 border border-border-subtle flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-sm font-bold text-theme-primary">Functional Preferences</span>
              <p className="text-xs text-theme-muted leading-relaxed">
                Remembers custom interface toggles and filter states between subsequent visits.
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-4 h-4 rounded text-accent-indigo focus:ring-accent-indigo cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
          <p className="text-xs text-theme-muted font-mono">
            Preferences stored locally on this client.
          </p>
          <Button
            onClick={handleSave}
            variant="glow"
            size="sm"
            icon={<Save className="w-3.5 h-3.5" />}
          >
            Save Preferences
          </Button>
        </div>
      </Card>
    </SectionContainer>
  );
}
