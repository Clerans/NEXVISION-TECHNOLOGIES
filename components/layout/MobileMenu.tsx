"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, services, links }: MobileMenuProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[68px] z-40 md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto animate-in fade-in duration-200">
      <div className="p-6 flex flex-col space-y-6">
        {/* Services Accordion */}
        <div className="border-b border-white/10 pb-4">
          <button
            onClick={() => setIsServicesExpanded(!isServicesExpanded)}
            className="flex items-center justify-between w-full text-left py-2 text-base font-semibold text-white"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Services & Capabilities</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                isServicesExpanded ? "rotate-180 text-blue-400" : ""
              }`}
            />
          </button>

          {isServicesExpanded && (
            <div className="mt-3 pl-4 space-y-2.5 border-l border-white/10">
              <Link
                href="/services"
                onClick={onClose}
                className="block text-xs font-semibold text-blue-400 hover:text-blue-300 py-1"
              >
                ● View All 8 Services →
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="block text-sm text-slate-300 hover:text-white py-1 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Regular Nav Links */}
        <div className="flex flex-col space-y-4 border-b border-white/10 pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-base font-medium text-slate-200 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal Quick Links in Mobile Drawer */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-2">
          <Link href="/privacy-policy" onClick={onClose} className="hover:text-slate-200">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" onClick={onClose} className="hover:text-slate-200">
            Terms of Service
          </Link>
          <Link href="/cookie-preferences" onClick={onClose} className="hover:text-slate-200">
            Cookie Preferences
          </Link>
          <Link href="/accessibility" onClick={onClose} className="hover:text-slate-200">
            Accessibility
          </Link>
        </div>

        {/* Action CTAs */}
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
