"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_DATA, SOLUTIONS_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
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
  Sparkles,
  Building2,
  Store,
  ShoppingCart,
  Zap
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
    setIsSolutionsOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
    setIsServicesOpen(false);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  const serviceIconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-400" />,
    Globe: <Globe className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />,
    Smartphone: <Smartphone className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
    Layers: <Layers className="w-4 h-4 text-purple-500 dark:text-purple-400" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
    Layout: <Layout className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
    Cloud: <Cloud className="w-4 h-4 text-sky-500 dark:text-sky-400" />,
    Compass: <Compass className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
  };

  const solutionIconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
    Store: <Store className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    ShoppingCart: <ShoppingCart className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
    Zap: <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
  };

  const navLinks = [
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
            ? "glass-nav py-3 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <span className="font-bold text-base text-white tracking-wider">NX</span>
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-theme-primary group-hover:text-accent-blue transition-colors">
                NEXVISION
              </span>
              <span className="text-[9px] font-mono tracking-widest text-theme-muted uppercase -mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/services") || isServicesOpen
                    ? "text-accent-blue bg-accent-blue/10 font-semibold"
                    : "text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-accent-blue" : "text-theme-muted"
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px] animate-in fade-in zoom-in-95 duration-150">
                  <div className="rounded-2xl p-4 shadow-2xl border border-border-subtle bg-theme-surface/98 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-subtle px-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-accent-indigo" />
                        <span className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                          Engineering Capabilities
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
                      >
                        All 8 Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-theme-elevated transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-theme-elevated border border-border-subtle group-hover/item:border-accent-indigo/40 group-hover/item:bg-accent-indigo/10 transition-colors shrink-0">
                            {serviceIconMap[service.icon] || <Code2 className="w-4 h-4 text-blue-500" />}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-theme-primary group-hover/item:text-accent-blue transition-colors flex items-center gap-1 truncate">
                              {service.title}
                            </div>
                            <p className="text-[11px] text-theme-muted line-clamp-1 mt-0.5">
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

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/solutions") || isSolutionsOpen
                    ? "text-accent-blue bg-accent-blue/10 font-semibold"
                    : "text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated"
                }`}
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180 text-accent-blue" : "text-theme-muted"
                  }`}
                />
              </button>

              {/* Solutions Panel */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] animate-in fade-in zoom-in-95 duration-150">
                  <div className="rounded-2xl p-4 shadow-2xl border border-border-subtle bg-theme-surface/98 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-subtle px-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                        Solution Archetypes
                      </span>
                      <Link
                        href="/solutions"
                        className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
                      >
                        Explore Archetypes <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {SOLUTIONS_DATA.map((solution) => (
                        <Link
                          key={solution.id}
                          href="/solutions"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-theme-elevated transition-all group/sol"
                        >
                          <div className="p-2 rounded-lg bg-theme-elevated border border-border-subtle group-hover/sol:border-accent-indigo/40 group-hover/sol:bg-accent-indigo/10 transition-colors shrink-0">
                            {solutionIconMap[solution.icon] || <Building2 className="w-4 h-4 text-indigo-500" />}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-theme-primary group-hover/sol:text-accent-blue transition-colors">
                              {solution.title}
                            </div>
                            <p className="text-[11px] text-theme-muted line-clamp-1 mt-0.5">
                              {solution.subtitle}
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-accent-blue bg-accent-blue/10 font-semibold"
                      : "text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="glow"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-theme-elevated border border-border-subtle text-theme-primary hover:bg-theme-highlight transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
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
        solutions={SOLUTIONS_DATA}
        links={navLinks}
      />
    </>
  );
}
