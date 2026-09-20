import { ServiceItem, SolutionItem, ProjectItem, InsightArticle, TechStackCategory } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software Development",
    tagline: "Resilient backend engines and bespoke enterprise platforms",
    shortDescription: "End-to-end bespoke software engineering designed for high throughput, maintainable architectures, and enterprise reliability.",
    icon: "Code2",
    heroHeadline: "Bespoke Enterprise Software Engineered for Longevity",
    problemStatement: "Off-the-shelf software forces businesses into rigid workflows and restrictive licensing models. As operations scale, technical friction compounds, resulting in data silos and performance bottlenecks.",
    solutionOverview: "We architect domain-specific software systems from the ground up. Utilizing domain-driven design, modular microservices, and type-safe systems, our engineering team builds solutions that adapt to your exact operational workflows.",
    capabilities: [
      {
        title: "Enterprise Core Architecture",
        description: "Robust service layers, clean boundary segregation, and resilient background job processing pipelines.",
      },
      {
        title: "High-Throughput API Gateways",
        description: "RESTful, GraphQL, and gRPC endpoints engineered for sub-50ms latency and high concurrent traffic.",
      },
      {
        title: "Legacy Modernization & Refactoring",
        description: "Zero-downtime migration of monolithic architectures to maintainable, cloud-native services.",
      },
      {
        title: "Multi-Tenant SaaS Infrastructure",
        description: "Secure data isolation, dynamic tenant provisioning, and granular role-based access control (RBAC).",
      },
    ],
    deliverables: [
      "Production-ready codebase with full test coverage (Unit & Integration)",
      "OpenAPI 3.0 / Swagger Interactive Documentation",
      "Automated CI/CD deployment pipelines",
      "Comprehensive architectural decision records (ADRs)",
      "Database migration scripts and entity relationship models",
    ],
    processSteps: [
      { step: "01", title: "Domain Discovery", description: "Mapping core business logic, entity lifecycles, and data relationships." },
      { step: "02", title: "Architecture Blueprint", description: "Establishing service contracts, storage schema, and infrastructure topology." },
      { step: "03", title: "Test-Driven Sprint", description: "Iterative feature delivery with strict static typing and automated unit tests." },
      { step: "04", title: "Production Hardening", description: "Load testing, vulnerability analysis, and zero-downtime staging validation." },
    ],
    technologies: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GraphQL"],
    faqs: [
      {
        question: "Do you transfer 100% intellectual property (IP) rights?",
        answer: "Yes. All source code, design artifacts, database schemas, and documentation created during the engagement belong entirely to your organization upon project completion."
      },
      {
        question: "How do you guarantee software maintainability?",
        answer: "We adhere to strict modular code design, mandatory static type safety, 80%+ test coverage thresholds, and comprehensive documentation to ensure any competent engineering team can maintain the system."
      }
    ],
    featured: true,
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development",
    tagline: "Ultra-fast Next.js, React, and modern web platforms",
    shortDescription: "Luminous, high-performance web applications built on Next.js App Router, React Server Components, and edge-native pipelines.",
    icon: "Globe",
    heroHeadline: "Next-Generation Web Applications Built for Velocity & Conversion",
    problemStatement: "Slow page loads, bloated JavaScript bundles, and poor responsive behavior cause high bounce rates, lost revenue, and low search engine rankings.",
    solutionOverview: "We build modern web applications using Next.js App Router and React Server Components. By moving compute to the edge and optimizing assets, we deliver sub-second initial loads and fluid 60fps user interactions.",
    capabilities: [
      {
        title: "Full-Stack Next.js Platforms",
        description: "Server-side rendering, incremental static regeneration (ISR), and edge caching for optimal speed.",
      },
      {
        title: "Real-Time Interactive Dashboards",
        description: "WebSocket and Server-Sent Event (SSE) powered dashboards with smooth data visualization.",
      },
      {
        title: "Progressive Web Apps (PWAs)",
        description: "Offline-first caching, background synchronization, and app-like mobile web experiences.",
      },
      {
        title: "Performance & Core Web Vitals Optimization",
        description: "Aggressive bundle splitting, AVIF/WebP image pipelines, and CLS/LCP optimization.",
      },
    ],
    deliverables: [
      "Production Next.js application optimized for edge CDN deployment",
      "Tailwind CSS custom design system with dark/light mode token integration",
      "Dynamic SEO metadata and OpenGraph automation",
      "Lighthouse 95+ performance validation report",
    ],
    processSteps: [
      { step: "01", title: "UX Wireframing", description: "Interactive page flow maps and information architecture planning." },
      { step: "02", title: "Design System Build", description: "Component tokenization, responsive typography, and accessibility baseline." },
      { step: "03", title: "Full-Stack Development", description: "Server components, client interactivity, and API data wiring." },
      { step: "04", title: "Edge Deployment", description: "Global CDN distribution, automated cache invalidation, and real-user monitoring." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Zod"],
    faqs: [
      {
        question: "Why do you recommend Next.js over traditional single-page apps?",
        answer: "Next.js App Router with Server Components provides superior SEO indexation, smaller client bundles, automatic image/font optimization, and seamless edge rendering out of the box."
      }
    ],
    featured: true,
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    tagline: "Native iOS & Android experiences and cross-platform excellence",
    shortDescription: "Smooth, responsive mobile applications that deliver native performance, gesture interactions, and reliable offline capabilities.",
    icon: "Smartphone",
    heroHeadline: "Fluid, High-Performance Mobile Apps Users Love",
    problemStatement: "Poor mobile optimization, erratic offline behavior, and sluggish UI responses degrade user trust and result in app store abandonment.",
    solutionOverview: "We develop high-performance mobile apps utilizing React Native and Flutter. We integrate native device capabilities with clean state management, smooth animations, and bulletproof offline synchronization.",
    capabilities: [
      {
        title: "Cross-Platform iOS & Android",
        description: "Unified codebase delivering native 60fps performance and OS-specific design patterns.",
      },
      {
        title: "Offline-First Synchronization",
        description: "Local SQLite/WatermelonDB persistence with seamless conflict resolution upon reconnect.",
      },
      {
        title: "Hardware Integration",
        description: "Camera, Bluetooth, biometric authentication, GPS, and push notification architectures.",
      },
      {
        title: "App Store & Play Store CI/CD",
        description: "Automated test builds, Fastlane signing, and submission pipeline management.",
      },
    ],
    deliverables: [
      "iOS and Android binary packages (IPA & AAB)",
      "Source code with modular screen navigation and state stores",
      "Comprehensive offline test harness",
      "App Store submission assets and compliance checklist",
    ],
    processSteps: [
      { step: "01", title: "Mobile UX Prototyping", description: "Haptic feedback, gesture mapping, and thumb-zone optimization." },
      { step: "02", title: "State & Storage Setup", description: "Configuring offline database schemas and reactive stores." },
      { step: "03", title: "Native Feature Wiring", description: "Biometrics, background services, and push notification handlers." },
      { step: "04", title: "Store Deployment", description: "TestFlight beta distribution and production store releases." },
    ],
    technologies: ["React Native", "Flutter", "Expo", "TypeScript", "SQLite", "Firebase", "Fastlane"],
    faqs: [
      {
        question: "Do you handle App Store and Play Store review approvals?",
        answer: "Yes. We manage metadata preparation, privacy disclosures, screenshot generation, test account provisioning, and coordinate responses during the review process."
      }
    ],
    featured: true,
  },
  {
    id: "business-management-systems",
    slug: "business-management-systems",
    title: "Business Management Systems",
    tagline: "Custom ERP, POS, inventory, and operational workflow engines",
    shortDescription: "Tailored ERP, CRM, Point of Sale, and operational management systems built to streamline enterprise operations and eliminate manual friction.",
    icon: "Layers",
    heroHeadline: "Centralized Operational Intelligence & Custom ERP Engines",
    problemStatement: "Fragmented spreadsheets, disconnected third-party SaaS tools, and manual data reconciliation lead to operational blind spots, billing errors, and delayed decision making.",
    solutionOverview: "We build unified business management platforms that consolidate inventory, sales, procurement, employee management, and financial reporting into an integrated, real-time control center.",
    capabilities: [
      {
        title: "Real-Time Inventory & Stock Engines",
        description: "Multi-warehouse tracking, batch management, low-stock triggers, and automated purchase orders.",
      },
      {
        title: "Point of Sale (POS) Architectures",
        description: "High-speed cashier terminals, offline register resilience, receipt printing, and barcode integration.",
      },
      {
        title: "Automated Accounting & Billing",
        description: "Invoicing engines, tax calculations, payment gateway reconciliations, and audit trails.",
      },
      {
        title: "Role-Based Access & Audit Logging",
        description: "Granular permission sets, branch-level segregation, and immutable change logs.",
      },
    ],
    deliverables: [
      "Centralized administrative dashboard and cashier interfaces",
      "Role-based permission matrix and security audit log",
      "Data export engines (Excel, PDF, CSV, automated email digests)",
      "Database schema and data backup automation scripts",
    ],
    processSteps: [
      { step: "01", title: "Workflow Audit", description: "Interviewing operational stakeholders to map physical and financial workflows." },
      { step: "02", title: "Schema Modeling", description: "Designing normalized relational databases to ensure transactional consistency." },
      { step: "03", title: "Module Development", description: "Building inventory, sales, purchasing, and reporting modules in parallel." },
      { step: "04", title: "Staff Onboarding & Rollout", description: "Pilot testing in active branches with automated rollback support." },
    ],
    technologies: ["PostgreSQL", "Node.js", "React", "TypeScript", "Prisma", "Tailwind CSS", "Redis"],
    faqs: [
      {
        question: "Can we migrate our existing legacy data into the new system?",
        answer: "Yes. We write custom ETL (Extract, Transform, Load) validation scripts to clean, verify, and migrate historical customers, products, and transactional data."
      }
    ],
    featured: true,
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    tagline: "High-conversion storefronts, multi-vendor marketplaces & checkout pipelines",
    shortDescription: "Engineered for high concurrency, instant search, frictionless checkout, and seamless payment gateway integrations.",
    icon: "ShoppingBag",
    heroHeadline: "Scalable Digital Commerce Engineered for Conversion",
    problemStatement: "Generic commerce platforms suffer from slow catalog filtering, checkout drop-offs, and inflexible checkout customizability.",
    solutionOverview: "We engineer composable digital commerce platforms with instant search, multi-currency support, resilient checkout flows, and direct integration with fulfillment systems.",
    capabilities: [
      {
        title: "Multi-Vendor Marketplaces",
        description: "Merchant onboarding, commission splits, vendor dashboards, and automated payouts.",
      },
      {
        title: "Frictionless Checkout Funnels",
        description: "One-click checkout, guest purchasing, and intelligent abandoned cart recovery.",
      },
      {
        title: "Instant Search & Filtering",
        description: "Sub-20ms faceted search powered by Meilisearch or Algolia with typo tolerance.",
      },
      {
        title: "Global Payment Gateways",
        description: "Stripe, PayPal, regional bank gateways, and automated webhook handling.",
      },
    ],
    deliverables: [
      "Customer-facing storefront with responsive mobile optimization",
      "Merchant and administrator management back-office",
      "Payment gateway webhook testing suite",
      "Automated transactional email and SMS templates",
    ],
    processSteps: [
      { step: "01", title: "Catalog Architecture", description: "Structuring SKUs, attribute variants, and pricing tiers." },
      { step: "02", title: "Checkout UX Optimization", description: "Designing minimal-step conversion funnels with clear payment feedback." },
      { step: "03", title: "Payment Integration", description: "Implementing PCI-compliant tokenized payment handling and webhooks." },
      { step: "04", title: "Load & Stress Testing", description: "Simulating flash-sale concurrent traffic to verify database durability." },
    ],
    technologies: ["Next.js", "Shopify Headless", "MedusaJS", "Stripe", "PostgreSQL", "Redis", "Meilisearch"],
    faqs: [
      {
        question: "Is your checkout compliant with payment security standards?",
        answer: "Yes. We utilize tokenized, PCI-DSS compliant checkout integrations where sensitive payment credentials never touch your application servers."
      }
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design & Design Systems",
    tagline: "Editorial aesthetics, comprehensive token systems, and user journeys",
    shortDescription: "Crafting digital interfaces that merge sophisticated visual aesthetics with effortless usability and measurable user engagement.",
    icon: "Layout",
    heroHeadline: "Design Systems That Elevate Brand Perception & Usability",
    problemStatement: "Inconsistent visual languages, disjointed design tokens, and unintuitive navigation frustrate users and slow down engineering velocity.",
    solutionOverview: "We build scalable design systems in Figma and code. Combining editorial typography, intentional whitespace, and micro-interactions, we turn complex workflows into intuitive software experiences.",
    capabilities: [
      {
        title: "Design System Architecture",
        description: "Tokens for colors, typography, spacing, elevations, and responsive breakpoints.",
      },
      {
        title: "Interactive High-Fidelity Prototypes",
        description: "Realistic prototypes demonstrating hover states, drawer transitions, and micro-interactions.",
      },
      {
        title: "User Journey & Wireframe Mapping",
        description: "Comprehensive UX flow diagrams to identify and eliminate interaction friction.",
      },
      {
        title: "Accessibility & WCAG Audits",
        description: "Ensuring 100% compliance with AA contrast ratios and screen-reader accessibility standards.",
      },
    ],
    deliverables: [
      "Figma design system file with auto-layout components and variables",
      "Interactive clickable prototype for stakeholder and user testing",
      "Developer handoff documentation with exact CSS token specifications",
      "Custom vector iconography and illustration kit",
    ],
    processSteps: [
      { step: "01", title: "Brand Alignment", description: "Moodboard exploration, visual references, and brand attribute definition." },
      { step: "02", title: "UX Wireframing", description: "Low-fidelity structural layouts focused on hierarchy and user flow." },
      { step: "03", title: "Visual Polish", description: "High-fidelity screens with typography, color tokens, and elevation shadows." },
      { step: "04", title: "Design System Handoff", description: "Exporting tokens directly to Tailwind CSS and component libraries." },
    ],
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Storybook", "Adobe Illustrator"],
    faqs: [
      {
        question: "Do you deliver code alongside the Figma design files?",
        answer: "Yes. We bridge design and engineering by delivering production-ready Tailwind CSS classes and React component interfaces matching the design specifications."
      }
    ],
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions & Infrastructure",
    tagline: "Scalable AWS/GCP cloud environments, Docker containers, and CI/CD pipelines",
    shortDescription: "Cloud-native infrastructure, automated container deployment, database clustering, and 24/7 reliability engineering.",
    icon: "Cloud",
    heroHeadline: "Resilient Cloud Infrastructure Engineered for 99.99% Availability",
    problemStatement: "Unmanaged infrastructure leads to unpredictable downtime, inefficient server spending, and security vulnerabilities that jeopardize business operations.",
    solutionOverview: "We design Infrastructure as Code (IaC) architectures on AWS, GCP, and Vercel. We configure autoscaling clusters, managed databases, automated backups, and encrypted secrets management.",
    capabilities: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Reproducible, version-controlled cloud environments using Terraform and Docker.",
      },
      {
        title: "Automated CI/CD Pipelines",
        description: "Zero-friction GitHub Actions workflows for automated testing, linting, and blue-green deployments.",
      },
      {
        title: "Database Clustering & Failover",
        description: "Read-replicas, connection pooling with PgBouncer, and automated point-in-time recovery.",
      },
      {
        title: "Cloud Security & Compliance",
        description: "VPC isolation, SSL/TLS termination, IAM least-privilege policies, and DDoS protection.",
      },
    ],
    deliverables: [
      "Terraform / Docker configuration scripts for infrastructure provisioning",
      "GitHub Actions CI/CD workflows for staging and production environments",
      "Cloud monitoring dashboards with alerts (Sentry, Prometheus/Grafana, Datadog)",
      "Disaster recovery and automated backup runbook",
    ],
    processSteps: [
      { step: "01", title: "Infrastructure Audit", description: "Reviewing existing servers, security policies, and resource utilization." },
      { step: "02", title: "Architecture Design", description: "Designing VPC networks, container clusters, and database read-replicas." },
      { step: "03", title: "IaC Provisioning", description: "Scripting infrastructure with automated staging and production parity." },
      { step: "04", title: "Monitoring & Handover", description: "Configuring uptime alerts, rate-limiting, and error tracking." },
    ],
    technologies: ["AWS", "Google Cloud", "Vercel", "Docker", "Terraform", "GitHub Actions", "Nginx", "Redis"],
    faqs: [
      {
        question: "How do you optimize cloud hosting costs?",
        answer: "We analyze resource utilization, implement autoscaling rules, right-size database instances, utilize serverless edge compute where appropriate, and leverage CDN caching."
      }
    ],
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting & Digital Strategy",
    tagline: "Strategic technology roadmaps, architecture reviews, and modernization guidance",
    shortDescription: "Strategic technical leadership to help executives evaluate technologies, eliminate technical debt, and execute digital transformation initiatives.",
    icon: "Compass",
    heroHeadline: "Strategic Technology Leadership to Accelerate Business Growth",
    problemStatement: "Organizations frequently make costly technology investments that do not align with their long-term commercial goals or lack the technical architecture to scale.",
    solutionOverview: "We serve as your technical advisory partner. We audit current software architectures, evaluate vendor proposals, identify security vulnerabilities, and craft actionable technology roadmaps.",
    capabilities: [
      {
        title: "Architecture & Codebase Audits",
        description: "Deep-dive evaluations of code quality, security vulnerabilities, scalability limits, and technical debt.",
      },
      {
        title: "Digital Transformation Roadmaps",
        description: "Prioritized implementation timelines with clear ROI projections and milestone metrics.",
      },
      {
        title: "Technology Selection & Vendor Evaluation",
        description: "Unbiased technical analysis of frameworks, cloud providers, and enterprise software vendors.",
      },
      {
        title: "Fractional CTO Advisory",
        description: "Executive-level technical direction for engineering leadership and sprint prioritization.",
      },
    ],
    deliverables: [
      "Comprehensive Architectural Audit & Risk Assessment Report",
      "Multi-quarter Technology Roadmap with milestone estimates",
      "Vendor and technology evaluation matrix",
      "Executive summary presentation for board and leadership review",
    ],
    processSteps: [
      { step: "01", title: "Stakeholder Discovery", description: "Aligning executive business objectives with technical realities." },
      { step: "02", title: "Technical Investigation", description: "Auditing repositories, infrastructure configurations, and team velocity." },
      { step: "03", title: "Synthesis & Strategy", description: "Drafting the strategic architecture roadmap and risk mitigation plan." },
      { step: "04", title: "Execution Advisory", description: "Ongoing advisory check-ins to ensure roadmap adherence." },
    ],
    technologies: ["Architecture Modeling", "Security Auditing", "Next.js", "Node.js", "Cloud Architecture", "Agile Management"],
    faqs: [
      {
        question: "How quickly can you perform a codebase or architecture audit?",
        answer: "A standard architectural and security audit typically takes 5 to 10 business days, culminating in a detailed written report and executive presentation."
      }
    ],
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "enterprise-core",
    title: "Enterprise Management Platforms",
    subtitle: "Unified operational command centers for growing organizations",
    description: "End-to-end software platforms uniting procurement, real-time inventory, financial reporting, and employee workflows into a single synchronized interface.",
    targetAudience: "Mid-market enterprises, wholesale distributors, and multi-location businesses.",
    keyFeatures: [
      "Real-time multi-branch inventory tracking",
      "Automated purchase order workflows and approvals",
      "Granular role-based access control (RBAC)",
      "Exportable financial accounting and audit reports",
    ],
    architectureHighlights: [
      "PostgreSQL with ACID transaction isolation",
      "Redis caching layer for sub-50ms query responses",
      "Immutable audit log records for compliance",
    ],
    icon: "Building2",
  },
  {
    id: "retail-pos",
    title: "Cloud-Connected POS & Retail Systems",
    subtitle: "High-speed cashier registers with offline-first durability",
    description: "Point of Sale software designed for fast-paced retail and hospitality environments, ensuring zero downtime even during internet outages.",
    targetAudience: "Supermarkets, retail chains, dining establishments, and service hubs.",
    keyFeatures: [
      "Instant barcode scanning & touch register layout",
      "Offline register transactions with automatic sync upon reconnect",
      "Direct integration with thermal receipt printers and cash drawers",
      "Daily shift reconciliation and cashier discrepancy tracking",
    ],
    architectureHighlights: [
      "Local indexed storage for offline data persistence",
      "Two-way conflict-free delta synchronization algorithms",
      "Hardware abstraction layer for ESC/POS printer protocols",
    ],
    icon: "Store",
  },
  {
    id: "b2b-marketplaces",
    title: "Digital Commerce & B2B Wholesale Marketplaces",
    subtitle: "High-concurrency digital trade platforms with custom pricing tiers",
    description: "Scalable marketplace platforms connecting manufacturers, wholesale buyers, and distributors with negotiated pricing tiers and automated order processing.",
    targetAudience: "B2B suppliers, e-commerce brands, and digital distributors.",
    keyFeatures: [
      "Multi-vendor seller portals and product catalogs",
      "Tiered wholesale volume pricing and credit terms",
      "Automated invoice generation and payment tracking",
      "Integrated shipping carrier rate calculations",
    ],
    architectureHighlights: [
      "Next.js App Router for instant SEO indexation",
      "Elastic search cluster for multi-attribute faceted filters",
      "Asynchronous webhook queuing for external ERP sync",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "automation-engines",
    title: "Workflow Automation & Intelligent Integrations",
    subtitle: "Eliminate repetitive manual data entry and synchronize business silos",
    description: "Custom automation pipelines that bridge external APIs, internal databases, and communication channels to accelerate operational throughput.",
    targetAudience: "Companies looking to eliminate operational friction and manual errors.",
    keyFeatures: [
      "Automated document processing and data extraction",
      "Trigger-based notifications (SMS, WhatsApp, Email, Slack)",
      "Automated reconciliation between payment gateways and bank feeds",
      "Scheduled background data aggregation jobs",
    ],
    architectureHighlights: [
      "Distributed BullMQ / Redis job queue orchestration",
      "Idempotent webhook handlers with exponential backoff",
      "Secure key vault for third-party API credentials",
    ],
    icon: "Zap",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "smartlanka-trade",
    slug: "smartlanka-trade",
    title: "SmartLanka Trade",
    category: "Digital Commerce",
    clientType: "Internal Product",
    summary: "A modern multi-vendor wholesale trading and digital commerce platform connecting regional suppliers with buyers.",
    description: "SmartLanka Trade is a full-featured B2B wholesale platform engineered by NEXVISION TECHNOLOGIES. It features real-time inventory synchronization across multi-vendor storefronts, dynamic pricing tiers based on order volume, integrated payment gateways, and a responsive mobile management experience.",
    metrics: [
      { label: "Architecture", value: "Cloud-Native" },
      { label: "Target Latency", value: "< 80ms" },
      { label: "Platform Type", value: "B2B Marketplace" },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    highlights: [
      "Vendor self-onboarding portal with automated KYC document upload",
      "Dynamic wholesale volume-tier discount pricing calculations",
      "Real-time order state machine with SMS and email notifications",
      "Mobile-optimized dashboard for merchant order fulfillment",
    ],
    status: "In Production",
  },
  {
    id: "nexus-pos",
    slug: "nexus-pos",
    title: "NEXUSPOS Retail Engine",
    category: "Enterprise System",
    clientType: "Proprietary Platform",
    summary: "Cloud-connected Point of Sale system with offline-first synchronization and real-time inventory intelligence.",
    description: "NEXUSPOS was designed from the ground up to solve the critical vulnerability of internet outages in retail environments. Cashiers can continue scanning, discounting, and billing without interruption; all transactions are encrypted in local storage and automatically synchronized when connectivity is restored.",
    metrics: [
      { label: "Offline Durability", value: "100% Uptime" },
      { label: "Transaction Speed", value: "< 1.2s avg" },
      { label: "Multi-Register", value: "Synchronized" },
    ],
    technologies: ["React", "TypeScript", "Electron / Web", "SQLite", "Node.js", "Tailwind CSS"],
    highlights: [
      "Offline-first transactional local cache with background sync daemon",
      "Direct hardware integration with barcode scanners and ESC/POS receipt printers",
      "Multi-counter cash drawer reconciliation with shift handover reports",
      "Centralized cloud reporting dashboard for multi-store franchise managers",
    ],
    status: "Live & Active",
  },
  {
    id: "tezlaa-management",
    slug: "tezlaa-management",
    title: "TEZLAA Management System",
    category: "Management Platform",
    clientType: "Enterprise Partner",
    summary: "Comprehensive operations, fleet tracking, and workflow management platform for modern service enterprises.",
    description: "The TEZLAA platform consolidates resource dispatching, job scheduling, customer service records, and automated invoicing into a unified web application. It eliminates spreadsheet-based tracking and gives management complete operational visibility.",
    metrics: [
      { label: "Workflow Automation", value: "End-to-End" },
      { label: "Data Integrity", value: "Audit-Logged" },
      { label: "Security", value: "RBAC Enforced" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
    highlights: [
      "Interactive dispatch schedule calendar with real-time assignment updates",
      "Customer history timeline with attached service records and invoices",
      "Automated recurring billing generation with PDF invoice delivery",
      "Granular role-based permissions for administrators, dispatchers, and field technicians",
    ],
    status: "Live & Active",
  },
  {
    id: "cloud-nexus-engine",
    slug: "cloud-nexus-engine",
    title: "NEXVISION Cloud Core",
    category: "Concept Lab",
    clientType: "Concept Architecture",
    summary: "Modular microservices architecture blueprint for high-throughput enterprise SaaS applications.",
    description: "A reference architecture created by NEXVISION engineers exploring low-latency event-driven microservices, distributed Redis queuing, and automated multi-region database failover.",
    metrics: [
      { label: "Throughput Goal", value: "10,000 req/s" },
      { label: "Failover Target", value: "< 500ms" },
      { label: "Paradigm", value: "Event-Driven" },
    ],
    technologies: ["Go", "Node.js", "Docker", "Kubernetes", "Kafka", "PostgreSQL"],
    highlights: [
      "Event-driven architecture with idempotent message processing",
      "Automated health-check probes and self-healing container orchestrations",
      "Declarative Infrastructure as Code (IaC) configuration scripts",
    ],
    status: "Architecture Validated",
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    phase: "Discover",
    title: "Strategic Discovery & Analysis",
    description: "We analyze your business objectives, operational workflows, user personas, and technical constraints to establish a bulletproof project foundation.",
    outputs: ["Product Requirements Document (PRD)", "Technical Feasibility Assessment", "Architecture Blueprint"],
  },
  {
    number: "02",
    phase: "Strategize",
    title: "Architecture & System Strategy",
    description: "We determine the optimal technical stack, data models, API boundaries, security models, and deployment topologies before writing code.",
    outputs: ["Technical Requirements Document (TRD)", "Database Schema Design", "Security & Compliance Plan"],
  },
  {
    number: "03",
    phase: "Design",
    title: "UI/UX & Design Systems",
    description: "We craft intuitive, dark-mode-first user journeys and tokenized design systems in Figma, ensuring accessible and responsive layouts.",
    outputs: ["Interactive Figma Prototypes", "Component Design System", "Responsive Breakpoint Specifications"],
  },
  {
    number: "04",
    phase: "Develop",
    title: "Precision Agile Engineering",
    description: "Our engineering team writes clean, modular, and strictly type-safe code in two-week agile sprints with continuous staging deployments.",
    outputs: ["Modular Codebase", "API Integration Suite", "CI/CD Staging Pipeline"],
  },
  {
    number: "05",
    phase: "Test",
    title: "Automated QA & Security Hardening",
    description: "Every module undergoes unit testing, end-to-end user journey validation, load testing, and security vulnerability reviews.",
    outputs: ["Automated Test Suite", "Lighthouse Performance Report", "Security Audit Validation"],
  },
  {
    number: "06",
    phase: "Deploy",
    title: "Zero-Downtime Cloud Deployment",
    description: "We orchestrate production deployment on global CDN edge networks or dedicated cloud clusters with automated monitoring.",
    outputs: ["Production Deployment", "SSL / DNS Configuration", "Automated Database Backups"],
  },
  {
    number: "07",
    phase: "Improve",
    title: "Telemetry & Iterative Evolution",
    description: "We monitor live error logs, Core Web Vitals, and user telemetry to recommend optimizations, feature expansions, and scaling enhancements.",
    outputs: ["Telemetry & Error Logging", "SLA Support Agreement", "Iterative Growth Roadmap"],
  },
];

export const TECH_RADAR_DATA: TechStackCategory[] = [
  {
    category: "Frontend & Web Architecture",
    description: "Modern, high-performance UI frameworks engineered for speed, responsiveness, and fluid interaction.",
    items: [
      { name: "Next.js (App Router)", tier: "Primary Core", badge: "Production Standard" },
      { name: "React 18 / 19", tier: "Primary Core", badge: "UI Framework" },
      { name: "TypeScript", tier: "Primary Core", badge: "Static Typing" },
      { name: "Tailwind CSS", tier: "Primary Core", badge: "Design System" },
      { name: "Framer Motion", tier: "Primary Core", badge: "Animation Physics" },
    ],
  },
  {
    category: "Backend & Systems Engineering",
    description: "Scalable backend runtimes and databases capable of supporting high throughput and strict data integrity.",
    items: [
      { name: "Node.js & Express", tier: "Primary Core", badge: "Runtime" },
      { name: "PostgreSQL", tier: "Data & Storage", badge: "Relational DB" },
      { name: "Prisma & Drizzle", tier: "Data & Storage", badge: "Type-Safe ORM" },
      { name: "Redis", tier: "Data & Storage", badge: "In-Memory Cache" },
      { name: "Go (Golang)", tier: "Primary Core", badge: "High-Throughput Services" },
    ],
  },
  {
    category: "Cloud, Edge & DevOps",
    description: "Resilient hosting and automated deployment pipelines ensuring 99.99% uptime.",
    items: [
      { name: "Vercel Edge Network", tier: "Cloud & Edge", badge: "Global CDN" },
      { name: "Amazon Web Services (AWS)", tier: "Cloud & Edge", badge: "Cloud Infrastructure" },
      { name: "Docker Containers", tier: "Tooling & DevOps", badge: "Containerization" },
      { name: "GitHub Actions", tier: "Tooling & DevOps", badge: "Automated CI/CD" },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    description: "Native and cross-platform runtimes for iOS and Android deployment.",
    items: [
      { name: "React Native & Expo", tier: "Primary Core", badge: "Cross-Platform" },
      { name: "Flutter", tier: "Primary Core", badge: "Mobile Framework" },
      { name: "SQLite / WatermelonDB", tier: "Data & Storage", badge: "Offline Mobile DB" },
    ],
  },
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    slug: "future-of-scalable-cloud-architecture",
    title: "Engineering Scalable Cloud Systems: Architectural Lessons in Resilience",
    excerpt: "A deep dive into building fault-tolerant microservices, distributed caching strategies, and failover mechanisms for modern enterprise applications.",
    content: `
### The Challenge of Distributed Reliability
In modern software engineering, high availability is not an afterthought—it must be baked into the foundational architecture. As concurrent users scale, naive monolithic backends encounter database connection bottlenecks, locking contention, and single-point-of-failure vulnerabilities.

### 1. Decoupling State and Compute
By separating stateless compute layers (such as Next.js edge functions or Dockerized microservices) from transactional state stores (PostgreSQL with read-replicas), systems gain elastic elasticity. Stateless nodes can be dynamically scaled horizontally within seconds in response to traffic surges.

### 2. Strategic In-Memory Caching with Redis
Database round-trips represent the most expensive step in request fulfillment. Implementing a read-through Redis cache for frequently accessed product catalogs, session tokens, and permission manifests drops P99 response times from 350ms down to sub-20ms.

### 3. Asynchronous Job Orchestration
Long-running tasks—such as PDF invoice generation, email dispatching, and data reconciliation—should never block user-facing HTTP request cycles. Utilizing distributed queues with automatic retry backoffs ensures zero customer disruption even during transient third-party API outages.

### Conclusion
Building resilient cloud architecture requires discipline, clear service boundaries, and comprehensive telemetry. At NEXVISION TECHNOLOGIES, every platform we architect follows these zero-compromise engineering principles.
    `,
    category: "Cloud & Systems",
    author: {
      name: "NEXVISION Engineering Group",
      role: "Systems Architecture Team",
    },
    publishedAt: "2026-08-15",
    readingTime: "5 min read",
    tags: ["Architecture", "Cloud", "Microservices", "PostgreSQL", "Redis"],
  },
  {
    slug: "nextjs-enterprise-performance-guide",
    title: "Why Modern Enterprises Are Migrating to Next.js App Router and Server Components",
    excerpt: "How React Server Components and edge rendering combine to deliver sub-second page loads, superior SEO, and streamlined maintenance.",
    content: `
### The Evolution of Frontend Architecture
For years, client-rendered Single Page Applications (SPAs) dominated web development. However, large bundle sizes and heavy client hydration overhead led to sluggish initial loads and SEO indexing penalties.

### The React Server Components Paradigm
Next.js App Router introduces a fundamental shift: React Server Components (RSC) execute exclusively on the server, streaming lightweight HTML directly to the browser without shipping unnecessary JavaScript libraries to the client.

### Key Architectural Benefits
1. **Zero Client Bundle for Server Dependencies:** Heavy markdown parsers, date formatters, and database clients stay on the server.
2. **Streaming Server Rendering:** Users see interactive UI skeletons immediately while slower database queries resolve asynchronously.
3. **Automated Asset Optimization:** Native \`next/image\` and \`next/font\` pipelines eliminate layout shifts (CLS) and deliver optimal modern formats (AVIF/WebP) automatically.

### Summary
For enterprises where performance directly drives conversion and brand credibility, Next.js App Router is the undisputed gold standard for web development.
    `,
    category: "Web Architecture",
    author: {
      name: "NEXVISION Engineering Group",
      role: "Frontend Architecture Team",
    },
    publishedAt: "2026-08-28",
    readingTime: "4 min read",
    tags: ["Next.js", "React", "TypeScript", "Performance", "SEO"],
  },
  {
    slug: "designing-resilient-point-of-sale-systems",
    title: "Designing Resilient Point-of-Sale Systems: The Offline-First Paradigm",
    excerpt: "Architecting retail and enterprise software that continues to function seamlessly during internet outages without data loss or transaction conflicts.",
    content: `
### The Cost of Retail Downtime
In a retail or hospitality environment, an internet outage cannot halt business. If cashiers cannot scan items or issue receipts, lines form immediately, resulting in lost revenue and customer frustration.

### The Offline-First Blueprint
Traditional web apps assume constant connectivity. An offline-first POS architecture reverses this assumption:
* **Local Storage First:** All transactional data, product catalogs, and barcode indexes are stored locally in an embedded database (such as SQLite or IndexedDB).
* **Deterministic UUIDs:** Transactions generate client-side UUIDs to prevent primary key collision upon server synchronization.
* **Bi-Directional Delta Sync:** When connectivity restores, a background worker batches offline transactions and handles conflict resolution gracefully.

### Hardware Abstraction
Integrating directly with hardware peripherals—thermal receipt printers (ESC/POS), barcode scanners, and cash drawers—requires a robust abstraction layer capable of communicating over USB, Serial, and local network protocols.

### Conclusion
By treating network connectivity as an enhancement rather than a requirement, NEXVISION's retail solutions deliver 100% operational continuity.
    `,
    category: "Engineering Excellence",
    author: {
      name: "NEXVISION Engineering Group",
      role: "Retail & Embedded Systems Team",
    },
    publishedAt: "2026-09-05",
    readingTime: "6 min read",
    tags: ["Retail", "POS", "Offline-First", "Architecture", "SQLite"],
  },
  {
    slug: "building-design-systems-that-scale",
    title: "Building Design Systems That Bridge the Gap Between Figma and Production Code",
    excerpt: "How a unified token system, accessible components, and strict TypeScript types accelerate engineering velocity by 3x.",
    content: `
### The Designer-Developer Friction
When visual design systems and production codebases live in isolation, discrepancies emerge. Button paddings drift, color hex codes multiply, and accessibility is compromised.

### The Solution: Semantic Token Systems
By defining semantic design tokens in a central repository that maps directly to Tailwind CSS configuration and Figma variables, changes propagate automatically. 

### Principles for Scalable UI Components
* **Strict Prop Interfaces:** Utilizing TypeScript to enforce accessible labels and consistent variant options.
* **Compound Component Patterns:** Enabling flexible component composition without prop drilling.
* **Accessibility as a First-Class Citizen:** Visible focus indicators, semantic HTML elements, and keyboard navigability built into every primitive.
    `,
    category: "UX & Performance",
    author: {
      name: "NEXVISION Engineering Group",
      role: "Design Systems Team",
    },
    publishedAt: "2026-09-12",
    readingTime: "4 min read",
    tags: ["Design Systems", "UI/UX", "Tailwind CSS", "Accessibility", "Figma"],
  },
];
