import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how NEXVISION TECHNOLOGIES collects, processes, and protects your personal data and project inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          LEGAL & DATA PROTECTION
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono text-slate-400">
          Last Updated: September 2026 • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-[#09090e] border border-white/10 space-y-8 text-slate-300 leading-relaxed text-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400" />
            1. Overview & Commitment
          </h2>
          <p>
            At NEXVISION TECHNOLOGIES (&quot;NEXVISION&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), protecting the privacy and confidentiality of our clients, prospective partners, and website visitors is fundamental to how we operate. This Privacy Policy details how we collect, store, utilize, and protect information submitted through our website and digital channels.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
          <p>We only collect information that you explicitly and voluntarily provide to us when submitting project inquiries, requesting technical assessments, or communicating with our engineering team:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Contact Details:</strong> Full name, professional email address, company name, and phone number.</li>
            <li><strong>Project Parameters:</strong> Technical requirements, proposed timelines, budget estimates, and architecture descriptions.</li>
            <li><strong>Technical Diagnostics:</strong> Standard anonymized server telemetry, browser user agent, IP address for security rate-limiting, and screen resolution metrics.</li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">3. How We Use Information</h2>
          <p>Information gathered is utilized strictly for legitimate business purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Evaluating technical feasibility and preparing project proposals.</li>
            <li>Direct technical communication regarding ongoing engineering engagements.</li>
            <li>Maintaining infrastructure security and defending against automated spam or DDoS vectors.</li>
          </ul>
          <p className="text-xs text-indigo-300 font-mono">
            * We never sell, lease, or rent client information to third-party advertisers or data brokers.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">4. Data Security & Retention</h2>
          <p>
            All submitted project data is stored in encrypted, access-controlled databases utilizing industry-standard TLS 1.3 encryption in transit and AES-256 encryption at rest. We retain project inquiry records only for as long as necessary to facilitate technical evaluation or satisfy statutory legal obligations.
          </p>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-xl font-bold text-white">5. Your Data Rights</h2>
          <p>
            Depending on your jurisdiction (such as GDPR in the European Union or CCPA in California), you have the right to request access to, correction of, or permanent erasure of your personal data.
          </p>
          <p>
            To exercise your privacy rights, please contact our data governance officer at: <span className="text-blue-400 font-mono">privacy@nexvisiontech.com</span>.
          </p>
        </div>
      </Card>
    </SectionContainer>
  );
}
