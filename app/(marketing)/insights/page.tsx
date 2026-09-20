import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/lib/data";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { formatDate } from "@/lib/utils";
import { BookOpen, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Insights & Tech Radar",
  description: "Read technical articles, architectural patterns, and engineering insights published by the NEXVISION TECHNOLOGIES team.",
};

export default function InsightsPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-radial-highlight border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            THOUGHT LEADERSHIP & RADAR
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering Insights & <br />
            <span className="text-gradient-accent">Architectural Deep Dives.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Practical analyses on distributed systems, modern frontend architectures, offline resilience, and design system governance.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHTS_DATA.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col"
            >
              <Card
                glow
                className="flex-1 flex flex-col justify-between p-8 bg-[#09090e]/95 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="primary">{article.category}</Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-slate-300 leading-relaxed mb-6">
                    {article.excerpt}
                  </CardDescription>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                      NX
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <InquiryCTASection />
    </div>
  );
}
