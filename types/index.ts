export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  heroHeadline: string;
  problemStatement: string;
  solutionOverview: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  architectureHighlights: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: "Enterprise System" | "Digital Commerce" | "Management Platform" | "Concept Lab";
  clientType: "Internal Product" | "Enterprise Partner" | "Proprietary Platform" | "Concept Architecture";
  summary: string;
  description: string;
  metrics?: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
  status: "Live & Active" | "In Production" | "Architecture Validated";
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Cloud & Systems" | "Web Architecture" | "Engineering Excellence" | "UX & Performance";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export interface TechStackCategory {
  category: string;
  description: string;
  items: {
    name: string;
    tier: "Primary Core" | "Cloud & Edge" | "Data & Storage" | "Tooling & DevOps";
    badge: string;
  }[];
}
