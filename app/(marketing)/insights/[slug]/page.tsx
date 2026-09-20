import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";
import { formatDate } from "@/lib/utils";
import { Clock, ChevronLeft, ArrowRight, User, Share2 } from "lucide-react";

interface InsightPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} — NEXVISION Insights`,
    description: article.excerpt,
  };
}

export default function InsightDetailPage({ params }: InsightPageProps) {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Insights
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="primary">{article.category}</Badge>
          <span className="text-xs font-mono text-slate-400">
            {formatDate(article.publishedAt)}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Author metadata card */}
        <div className="p-4 rounded-xl bg-surface-200/80 border border-white/5 flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              NX
            </div>
            <div>
              <p className="text-sm font-bold text-white">{article.author.name}</p>
              <p className="text-xs text-slate-400">{article.author.role}</p>
            </div>
          </div>
          <Badge variant="outline" className="hidden sm:inline-flex">
            Architectural Paper
          </Badge>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6 leading-relaxed">
          {article.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-white pt-6 pb-2 border-b border-white/10">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("* ")) {
              const items = paragraph.split("\n* ");
              return (
                <ul key={idx} className="space-y-2 list-disc pl-6 text-slate-300">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("* ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              const items = paragraph.split("\n");
              return (
                <ol key={idx} className="space-y-2 list-decimal pl-6 text-slate-300">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s+/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Tags:</span>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs py-1 px-3">
              #{tag}
            </Badge>
          ))}
        </div>
      </article>

      <InquiryCTASection />
    </div>
  );
}
