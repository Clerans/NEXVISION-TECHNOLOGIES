"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Layers, 
  ShoppingBag, 
  Layout, 
  Cloud, 
  Compass,
  Sparkles
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-blue-400" />,
    Globe: <Globe className="w-4 h-4 text-cyan-400" />,
    Smartphone: <Smartphone className="w-4 h-4 text-indigo-400" />,
    Layers: <Layers className="w-4 h-4 text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4 text-pink-400" />,
    Layout: <Layout className="w-4 h-4 text-amber-400" />,
    Cloud: <Cloud className="w-4 h-4 text-sky-400" />,
    Compass: <Compass className="w-4 h-4 text-emerald-400" />,
  };

  const navLinks = [
    { label: "Solutions", href: "/solutions" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-2xl shadow-black/60"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <span className="font-bold text-base text-white tracking-wider">NX</span>
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                NEXVISION
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/services") || isServicesOpen
                    ? "text-white bg-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[620px] animate-in fade-in zoom-in-95 duration-150">
                  <div className="glass-panel rounded-xl p-4 shadow-2xl shadow-black/80 border border-white/10 bg-[#09090d]/95 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Engineering Capabilities
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all group/item"
                        >
                          <div className="p-2 rounded-md bg-white/5 border border-white/5 group-hover/item:border-indigo-500/30 group-hover/item:bg-indigo-500/10 transition-colors">
                            {iconMap[service.icon] || <Code2 className="w-4 h-4 text-blue-400" />}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-blue-400 transition-colors flex items-center gap-1">
                              {service.title}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {service.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-white/5 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="glow"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        services={SERVICES_DATA}
        links={navLinks}
      />
    </>
  );
}
