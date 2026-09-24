"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem, SolutionItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ChevronDown, ArrowRight, Sparkles, Building2 } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  solutions?: SolutionItem[];
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, services, solutions = [], links }: MobileMenuProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-[65px] z-40 md:hidden bg-theme-void/98 backdrop-blur-2xl border-t border-border-subtle overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="p-6 flex flex-col space-y-6 max-w-md mx-auto">
        {/* Services Accordion */}
        <div className="border-b border-border-subtle pb-4">
          <button
            onClick={() => setIsServicesExpanded(!isServicesExpanded)}
            className="flex items-center justify-between w-full text-left py-2 text-base font-semibold text-theme-primary"
            aria-expanded={isServicesExpanded}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-indigo" />
              <span>Services & Capabilities</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-theme-muted transition-transform duration-200 ${
                isServicesExpanded ? "rotate-180 text-accent-blue" : ""
              }`}
            />
          </button>

          {isServicesExpanded && (
            <div className="mt-3 pl-4 space-y-2 border-l border-border-subtle">
              <Link
                href="/services"
                onClick={onClose}
                className="block text-xs font-semibold text-accent-blue hover:underline py-1"
              >
                ● View All 8 Services →
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="block text-sm text-theme-secondary hover:text-theme-primary py-1 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Solutions Accordion */}
        {solutions.length > 0 && (
          <div className="border-b border-border-subtle pb-4">
            <button
              onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
              className="flex items-center justify-between w-full text-left py-2 text-base font-semibold text-theme-primary"
              aria-expanded={isSolutionsExpanded}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent-blue" />
                <span>Enterprise Solutions</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-theme-muted transition-transform duration-200 ${
                  isSolutionsExpanded ? "rotate-180 text-accent-blue" : ""
                }`}
              />
            </button>

            {isSolutionsExpanded && (
              <div className="mt-3 pl-4 space-y-2 border-l border-border-subtle">
                <Link
                  href="/solutions"
                  onClick={onClose}
                  className="block text-xs font-semibold text-accent-blue hover:underline py-1"
                >
                  ● View All Solutions →
                </Link>
                {solutions.map((sol) => (
                  <Link
                    key={sol.id}
                    href="/solutions"
                    onClick={onClose}
                    className="block text-sm text-theme-secondary hover:text-theme-primary py-1 transition-colors"
                  >
                    {sol.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Regular Nav Links */}
        <div className="flex flex-col space-y-3.5 border-b border-border-subtle pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-base font-medium text-theme-secondary hover:text-theme-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Preference Setting in Mobile Drawer */}
        <div className="flex items-center justify-between py-2 border-b border-border-subtle">
          <span className="text-xs font-mono uppercase tracking-wider text-theme-muted">
            Appearance
          </span>
          <ThemeToggle showLabel />
        </div>

        {/* Legal Quick Links in Mobile Drawer */}
        <div className="grid grid-cols-2 gap-2 text-xs text-theme-muted pt-1">
          <Link href="/privacy-policy" onClick={onClose} className="hover:text-theme-primary">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" onClick={onClose} className="hover:text-theme-primary">
            Terms of Service
          </Link>
          <Link href="/cookie-preferences" onClick={onClose} className="hover:text-theme-primary">
            Cookie Preferences
          </Link>
          <Link href="/accessibility" onClick={onClose} className="hover:text-theme-primary">
            Accessibility
          </Link>
        </div>

        {/* Action CTA */}
        <div className="pt-2">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            className="w-full"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}
