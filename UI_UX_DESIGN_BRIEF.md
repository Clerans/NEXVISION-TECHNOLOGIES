# UI/UX Design Brief — Visual & Interaction System
## NEXVISION TECHNOLOGIES — Design Principles & Component Guidelines

---

### 1. Aesthetic Direction & Moodboard

* **Aesthetic Tone:** Obsidian Future-Tech, Dark-Mode First, Precision Engineered, Architectural, Editorial.
* **Inspiration Archetypes:**
  * **Vercel / Next.js:** Micro-borders (1px subtle white/alpha lines), crisp typographic scales, dark obsidian backdrops.
  * **Linear:** Snappy spring motion, glowing cursor hover cards, monochromatic hierarchy punctuated by luminous electric blues.
  * **Raycast / Stripe:** Tactile cards, subtle noise gradients, interactive widgets, purposeful whitespace.

---

### 2. Color Palette & Token System

```scss
// Backgrounds & Surfaces
$bg-void: #030304;            // Deepest void background
$bg-base: #070709;            // Primary page canvas
$surface-1: #0e0e12;          // Flat surface (cards, navbar)
$surface-2: #14141a;          // Elevated surface (modals, dropdowns)
$surface-highlight: #1c1c24;  // Hover state for interactive rows

// Text Hierarchy
$text-primary: #f8fafc;        // Main headings & important copy (98% contrast)
$text-secondary: #94a3b8;      // Body copy, subtitles (70% contrast)
$text-muted: #64748b;          // Metadata, labels, timestamps (50% contrast)

// Accent Glow & Luminous Highlights
$accent-primary: #3b82f6;      // Electric Blue (Primary Action)
$accent-violet: #6366f1;       // Futuristic Indigo (Brand signature)
$accent-cyan: #06b6d4;         // Cyber Cyan (Accents, active badges)
$accent-emerald: #10b981;      // Operational green (Status pills)

// Borders & Dividers
$border-subtle: rgba(255, 255, 255, 0.08);
$border-medium: rgba(255, 255, 255, 0.14);
$border-glow: rgba(99, 102, 241, 0.4);
```

---

### 3. Typography System

* **Primary Sans:** `Inter` / `Geist Sans`
  * Hero Headlines: `text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]`
  * Section Titles: `text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight`
  * Subheadings: `text-lg sm:text-xl font-normal text-slate-400 leading-relaxed`
  * Body Text: `text-base text-slate-300 leading-relaxed font-normal`
  * Small / Metadata: `text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-400`
* **Monospace Accent:** `Geist Mono` / `JetBrains Mono`
  * For tech badges, status metrics, code chips, and architectural tags (`font-mono text-xs text-indigo-400`).

---

### 4. Component Design Patterns

#### A. Interactive Service & Solution Cards
* Dark surface (`#0e0e12`) with a subtle 1px border.
* **Hover State:** Radial gradient flashlight effect tracking mouse position or subtle border glow transition (`transition: border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
* Icon with soft glowing background pod.

#### B. Buttons & Interactive Controls
* **Primary Button:** Luminous gradient background (`from-blue-600 to-indigo-600`), white text, subtle outer glow, active scale down (`active:scale-98`).
* **Secondary / Outline Button:** Dark glass background (`rgba(255,255,255,0.04)`), crisp 1px border (`rgba(255,255,255,0.12)`), hover background (`rgba(255,255,255,0.08)`).
* **Ghost Button:** Text with underline slide-in animation and chevron hover offset.

#### C. Forms & Inputs
* Dark filled inputs (`bg-[#111116]`) with clean 1px border (`border-white/10`).
* Focused state: Luminous indigo ring (`focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500`).
* Validation feedback: Clean inline error messages with shake animation.

---

### 5. Motion & Interaction Principles
* **Timing & Easing:** Snappy entrance with spring physics (`ease: [0.16, 1, 0.3, 1]`, duration: 0.5s - 0.7s).
* **Scroll Reveals:** Staggered fade-in-up for card grids and section headlines (`viewport: { once: true, margin: "-80px" }`).
* **Reduced Motion:** If `@media (prefers-reduced-motion: reduce)` is detected, all animations resolve instantly without transform movement.
