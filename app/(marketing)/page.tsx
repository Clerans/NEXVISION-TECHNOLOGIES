import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { EngineeringPositioningSection } from "@/components/sections/philosophy/EngineeringPositioningSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { SolutionsSection } from "@/components/sections/solutions/SolutionsSection";
import { FeaturedWorkSection } from "@/components/sections/work/FeaturedWorkSection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { TechRadarSection } from "@/components/sections/tech-stack/TechRadarSection";
import { InquiryCTASection } from "@/components/sections/cta/InquiryCTASection";

export const metadata: Metadata = {
  title: "Engineering What Comes Next",
  description:
    "We partner with ambitious startups and enterprises to design, build, and scale resilient software, high-performance web platforms, and intelligent digital systems.",
  alternates: {
    canonical: "https://nexvisiontech.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nexvisiontech.com/#organization",
        "name": "NEXVISION TECHNOLOGIES",
        "url": "https://nexvisiontech.com",
        "logo": "https://nexvisiontech.com/favicon.svg",
        "description": "Engineering Intelligent Digital Realities: custom software, enterprise platforms, cloud solutions, and digital commerce systems.",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical inquiries",
          "email": "inquiries@nexvisiontech.com",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://nexvisiontech.com/#website",
        "url": "https://nexvisiontech.com",
        "name": "NEXVISION TECHNOLOGIES",
        "publisher": {
          "@id": "https://nexvisiontech.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <EngineeringPositioningSection />
      <ServicesSection />
      <SolutionsSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <TechRadarSection />
      <InquiryCTASection />
    </>
  );
}
