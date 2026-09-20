# Technical Requirements Document (TRD)
## NEXVISION TECHNOLOGIES — Web Application & Architecture

---

### 1. Technology Stack Selection & Rationale

| Layer | Technology | Version | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | 14.x / 15.x | Server Components, Streaming SSR, optimized font/image pipelines, robust SEO routing. |
| **Language** | TypeScript | 5.x | End-to-end static type safety, autocomplete, self-documenting interfaces. |
| **Styling** | Tailwind CSS + Custom CSS Variables | 3.4+ | Atomic utility classes combined with custom dark-mode token system (radix-ui color scales, custom glow tokens). |
| **Animation** | Framer Motion (Motion) | 11.x | Fluid spring physics, layout animations, scroll-driven scrollytelling, reduced-motion compliance. |
| **Icons** | Lucide React | Latest | Clean, consistent, lightweight, scalable SVG icons. |
| **Form Handling** | React Hook Form + Zod | Latest | Performant uncontrolled inputs, declarative schema validation, accessible error bindings. |
| **SEO & Metatags** | Next Metadata API + JSON-LD | Built-in | Native OpenGraph, Twitter Cards, Organization schema, BreadcrumbList schema. |
| **Deployment Target** | Vercel | Production Edge | Zero-config edge routing, global CDN caching, automatic image optimization. |

---

### 2. System Architecture & Directory Structure

```text
nexvision-website/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                           # Home Page
│   │   ├── layout.tsx                         # Marketing Shell (Nav, Footer, Banner)
│   │   ├── about/page.tsx                     # About NEXVISION
│   │   ├── services/
│   │   │   ├── page.tsx                       # Services Hub
│   │   │   ├── [slug]/page.tsx                # Dynamic deep-dive service pages
│   │   │   └── data/services-data.ts          # Structured services content
│   │   ├── solutions/page.tsx                 # Solution Archetypes
│   │   ├── work/
│   │   │   ├── page.tsx                       # Project Showcase
│   │   │   └── [slug]/page.tsx                # Case study details
│   │   ├── process/page.tsx                   # 7-Step Methodology
│   │   ├── insights/
│   │   │   ├── page.tsx                       # Insights Hub
│   │   │   └── [slug]/page.tsx                # Insight Article details
│   │   ├── contact/page.tsx                   # Project Inquiry & Planner
│   │   ├── privacy-policy/page.tsx            # Legal: Privacy Policy
│   │   ├── terms-of-service/page.tsx          # Legal: Terms of Service
│   │   ├── cookie-policy/page.tsx             # Legal: Cookie Policy
│   │   ├── cookie-preferences/page.tsx        # Legal: Interactive Cookie Settings
│   │   ├── disclaimer/page.tsx                # Legal: Disclaimer
│   │   └── accessibility/page.tsx             # Legal: Accessibility Statement
│   ├── maintenance/page.tsx                   # UX State: Maintenance Mode
│   ├── api/
│   │   └── contact/route.ts                   # Inquiries API endpoint with Zod validation
│   ├── not-found.tsx                          # UX State: 404 Not Found
│   ├── error.tsx                              # UX State: Segment Error
│   ├── global-error.tsx                       # UX State: Global 500 Error
│   ├── loading.tsx                            # UX State: Global Suspense Fallback
│   ├── layout.tsx                             # Root HTML Layout & Font Injection
│   ├── globals.css                            # CSS Design System & Utility tokens
│   ├── sitemap.ts                             # Dynamic XML Sitemap Generator
│   └── robots.ts                              # Search Crawler Directives
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                         # Glassmorphic Sticky Header
│   │   ├── MobileMenu.tsx                     # Fullscreen Animated Nav Drawer
│   │   ├── Footer.tsx                         # Multi-column Enterprise Footer
│   │   └── SectionContainer.tsx               # Standardized Width & Padding Shell
│   ├── sections/
│   │   ├── hero/                              # Interactive Hero & Canvas
│   │   ├── services/                          # Service Grid & Interactive Cards
│   │   ├── tech-stack/                        # Interactive Technology Radar
│   │   ├── work/                              # Project Carousel & Filter
│   │   ├── process/                           # Interactive Roadmap Stepper
│   │   ├── testimonials/                      # Partnership Philosophy Quotes
│   │   └── cta/                               # Magnetic Project Call-to-Action
│   ├── ui/
│   │   ├── Button.tsx                         # Variant Button (Primary, Ghost, Glow)
│   │   ├── Badge.tsx                          # Status & Category Pill
│   │   ├── Card.tsx                           # Border-glow Elevated Surface
│   │   ├── Input.tsx / Textarea.tsx           # Dark-themed Accessible Inputs
│   │   ├── Modal.tsx                          # Accessible Dialog
│   │   ├── Toast.tsx                          # Notification Toast System
│   │   └── ParticleGrid.tsx                   # Ambient Background Canvas
│   └── forms/
│       └── ContactInquiryForm.tsx             # Multi-step Interactive Inquiry
├── lib/
│   ├── utils.ts                               # clsx / tailwind-merge helper
│   ├── constants.ts                           # Global brand metadata & navigation
│   └── validation.ts                          # Zod schemas for contact/inquiry
├── public/
│   ├── brand/                                 # Vector Logos & Mark
│   └── images/                                # High-fidelity WebP project imagery
├── types/
│   └── index.ts                               # TypeScript interfaces & types
├── tailwind.config.ts                         # Custom color tokens & animations
├── tsconfig.json                              # Strict TypeScript configuration
└── package.json                               # Dependencies & build scripts
```

---

### 3. Key Design Tokens & CSS Variables

```css
:root {
  --bg-dark: #050505;
  --surface-base: #0a0a0c;
  --surface-elevated: #111115;
  --surface-card: #15151b;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(99, 102, 241, 0.5);
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent-electric: #3b82f6;
  --accent-violet: #6366f1;
  --accent-cyan: #06b6d4;
  --glow-primary: radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%);
}
```

---

### 4. Technical Constraints & Performance Budget
* **Bundle Size:** Initial JavaScript bundle per route < 85 KB (gzip).
* **Font Loading:** Self-hosted or `next/font/google` (`Inter` + `Geist Sans` / `Geist Mono`) with `display: swap` to prevent FOIT/CLS.
* **Images:** Next.js `<Image />` with AVIF/WebP formats, explicit dimensions, and blur placeholders.
* **Accessibility:** Semantic HTML tags (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`), ARIA labels, keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-indigo-500`).
* **Browser Compatibility:** Modern evergreen browsers (Chrome 110+, Firefox 110+, Safari 16+, Edge 110+).
