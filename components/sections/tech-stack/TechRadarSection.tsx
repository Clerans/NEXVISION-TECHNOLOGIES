"use client";

import React, { useState } from "react";
import { TECH_RADAR_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Code, Server, Cloud, Smartphone } from "lucide-react";

export function TechRadarSection() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Code key="0" className="w-4 h-4 text-blue-500 dark:text-blue-400" />,
    <Server key="1" className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
    <Cloud key="2" className="w-4 h-4 text-sky-500 dark:text-sky-400" />,
    <Smartphone key="3" className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
  ];

  return (
    <SectionContainer id="tech-stack" className="border-t border-border-subtle bg-theme-base/40">
      <SectionHeader
        eyebrow="Architectural Standards"
        title="The NEXVISION Technology Ecosystem"
        description="We strictly adopt modern, high-throughput, and battle-tested technologies that ensure maintainability and high system resilience."
      />

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {TECH_RADAR_DATA.map((cat, idx) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
              activeTab === idx
                ? "bg-accent-indigo/15 border-accent-indigo text-theme-primary shadow-sm shadow-accent-indigo/10"
                : "bg-theme-surface border-border-subtle text-theme-muted hover:text-theme-primary hover:bg-theme-elevated"
            }`}
          >
            {icons[idx]}
            <span>{cat.category}</span>
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <Card
        glow
        className="p-8 sm:p-10 bg-theme-surface border border-border-subtle max-w-4xl mx-auto rounded-2xl"
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-theme-primary mb-2">
            {TECH_RADAR_DATA[activeTab].category}
          </h3>
          <p className="text-sm text-theme-secondary">
            {TECH_RADAR_DATA[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TECH_RADAR_DATA[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-theme-elevated/70 border border-border-subtle flex flex-col justify-between space-y-3 hover:border-accent-indigo/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-theme-muted">
                  {item.tier}
                </span>
                <Badge variant="primary" className="text-[10px] py-0.5 px-2">
                  {item.badge}
                </Badge>
              </div>
              <p className="text-base font-bold text-theme-primary">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </SectionContainer>
  );
}
