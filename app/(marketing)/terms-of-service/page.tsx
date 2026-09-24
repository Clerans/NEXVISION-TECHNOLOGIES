import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing use of NEXVISION TECHNOLOGIES web platforms and software consulting engagements.",
  alternates: {
    canonical: "https://nexvisiontech.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <SectionContainer size="narrow" className="py-16 md:py-24">
      <div className="mb-10 text-center">
        <Badge variant="primary" className="mb-3">
          LEGAL & GOVERNANCE
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-primary tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm font-mono text-theme-muted">
          Last Updated: September 2026 • NEXVISION TECHNOLOGIES
        </p>
      </div>

      <Card className="p-8 sm:p-12 bg-theme-surface border border-border-subtle space-y-8 text-theme-secondary leading-relaxed text-sm rounded-3xl">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-theme-primary flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent-indigo" />
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the website and digital platforms operated by NEXVISION TECHNOLOGIES (&quot;NEXVISION&quot;), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should immediately cease use of our digital platforms.
          </p>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">2. Scope of Services & Engagements</h2>
          <p>
            Information provided on this website is for informational and technical overview purposes. Formal custom software development, cloud infrastructure provisioning, and technical consulting are governed by dedicated Master Services Agreements (MSA) and Statements of Work (SOW) executed separately between NEXVISION and the client.
          </p>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">3. Intellectual Property (IP) Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-theme-secondary">
            <li><strong>Website Content:</strong> The NEXVISION brand name, logos, website layout, graphics, text copy, and custom animations are the proprietary intellectual property of NEXVISION TECHNOLOGIES.</li>
            <li><strong>Client Deliverables:</strong> As outlined in our client contracts, all custom source code, bespoke architectures, and custom design systems developed specifically for a client under an active SOW are transferred 100% to the client upon receipt of full payment.</li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, NEXVISION TECHNOLOGIES shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your access to or inability to access this informational website.
          </p>
        </div>

        <div className="space-y-4 border-t border-border-subtle pt-6">
          <h2 className="text-xl font-bold text-theme-primary">5. Governing Law & Contact</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws without regard to conflict of law principles. For legal inquiries regarding these terms, contact <span className="text-accent-blue font-mono">legal@nexvisiontech.com</span>.
          </p>
        </div>
      </Card>
    </SectionContainer>
  );
}
