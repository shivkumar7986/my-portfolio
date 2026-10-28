# Portfolio Documentation
## Inspired by lukebaffait.fr — Creative Developer Portfolio

---

## 1. Project Overview

**Goal:** Build a dark-themed, motion-rich, single-page creative developer portfolio with multiple routes (Home, Works, Info, Contact) that showcases your projects, skills, and personality.

**Reference site:** https://lukebaffait.fr  
**Character:** Minimal dark aesthetic, large typography, scroll-driven animations, subtle interactions, project gallery with hover previews.

---

## 2. Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | File-based routing, SSG, SEO-ready |
| Language | **TypeScript** | Type safety |
| Styling | **Tailwind CSS** | Utility-first, rapid iteration |
| Animations | **GSAP + ScrollTrigger** | Scroll reveals, text splits, timeline animations |
| Smooth Scroll | **Lenis** | Silky smooth inertia scrolling |
| Page Transitions | **Framer Motion** | Route-level fade/slide transitions |
| 3D (optional) | **Three.js / React Three Fiber** | Subtle 3D background or hero effect |
| Fonts | **Google Fonts / Fontsource** | Custom font pairing (see section 5) |
| Icons | **Lucide React** | Clean minimal icon set |
| Deployment | **Vercel** | Zero-config deployment |

---

## 3. File & Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── me.jpg                  # Your photo (used in about section)
│   │   ├── projects/
│   │   │   ├── covers/
│   │   │   │   ├── project-1.jpg
│   │   │   │   ├── project-2.jpg
│   │   │   │   └── ...
│   │   └── art/
│   │       ├── bg-art-1.png            # Decorative/abstract art images
│   │       └── bg-art-2.png
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (fonts, Lenis, metadata)
│   │   ├── page.tsx                    # Home page
│   │   ├── works/
│   │   │   └── page.tsx                # Works / Projects listing
│   │   ├── info/
│   │   │   └── page.tsx                # About / Info page
│   │   └── contact/
│   │       └── page.tsx                # Contact page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Nav links + logo
│   │   │   └── Footer.tsx              # Footer with links
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx         # Animated name reveal
│   │   │   ├── AboutSection.tsx        # Bio + photo
│   │   │   ├── ProjectsPreview.tsx     # Horizontal scrolling project list
│   │   │   ├── SkillsSection.tsx       # Skills grouped by category
│   │   │   └── ContactCTA.tsx          # CTA to contact page
│   │   │
│   │   ├── works/
│   │   │   ├── ProjectGrid.tsx         # Grid of project cards
│   │   │   └── ProjectCard.tsx         # Individual card with hover preview
│   │   │
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx        # Custom cursor dot
│   │   │   ├── PageTransition.tsx      # Framer Motion wrapper
│   │   │   ├── SplitText.tsx           # GSAP text split animation
│   │   │   ├── MagneticButton.tsx      # Magnetic hover button effect
│   │   │   └── ScrollProgress.tsx     # Thin top progress bar
│   │   │
│   │   └── providers/
│   │       └── SmoothScrollProvider.tsx  # Lenis setup
│   │
│   ├── data/
│   │   ├── projects.ts                 # All project data
│   │   └── skills.ts                   # Skills by category
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts          # GSAP scroll trigger hook
│   │   └── useMagneticEffect.ts        # Magnetic button hook
│   │
│   ├── styles/
│   │   └── globals.css                 # CSS variables, base resets
│   │
│   └── lib/
│       └── utils.ts                    # cn() classname helper, etc.
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 4. Pages & Their Content

### 4.1 Home Page (`/`)

The home page is the complete single-scroll experience, divided into these sections:

#### Section A — Hero
- **Left:** Large character-by-character animated heading: `"Vis."` (your name)
- **Tagline below:** Role text fades in after name — e.g. *"Full-Stack Developer & UI Engineer"*
- **Sub-tagline:** Two lines, soft grey — e.g. *"I build precise, thoughtful interfaces — between logic and feeling."*
- **Nav links** (top right): Works · Info · Contact
- **Social icons** (Behance / LinkedIn / GitHub) in a horizontal row below tagline

#### Section B — About (Basically, I build things.)
- **Large display text:** `"Basically, I build things."`
- **Body paragraph:** 2–3 sentences about you as a developer — who you are, what you value, where you're from
- **Your photo:** Positioned asymmetrically (right side), with subtle border or clip-path

#### Section C — Projects Preview (horizontal list)
- Project names listed in a vertical or horizontal stack
- On hover: project cover image animates in as a floating preview (GSAP / CSS)
- Each name links to the `/works/` page

#### Section D — Skills
- Grouped into categories: Frontend · Animation & 3D · Backend · Databases · DevOps · Design
- Each skill is a simple tag/pill
- Section title with a faint horizontal line

#### Section E — Contact CTA
- Large text: *"Let's work together."*
- CTA button: `"Get in touch ↗"`
- Two decorative art images beside it (abstract or generative art style)
- Social links row

---

### 4.2 Works Page (`/works`)

- **Page title:** `"Works."` — large, stacked
- **Project count badge:** e.g. `(08)` displayed beside the title
- **Grid layout:** 2-column grid on desktop, 1-column on mobile
- **Each card shows:** Project cover image · Project name · Category tag · Year
- **Hover effect:** Image scales up, overlay with "See Project →" appears
- **Filtering (optional):** Tags like `Web`, `App`, `Design` to filter projects

---

### 4.3 Info Page (`/info`)

- **Page title:** `"Info."` or `"About."`
- **Bio section:** 2–3 paragraphs. Background, education, what drives you
- **"What I do"** section: 3 columns — Frontend, Fullstack, Design — with 2–3 sentence descriptions
- **Skills list** (full version, same as homepage but expanded)
- **Experience/Education timeline** (optional): Cards with year, role/institution, description
- **Photo** appears somewhere on this page

---

### 4.4 Contact Page (`/contact`)

- **Page title:** `"Contact."` or `"Let's talk."`
- **Email prominently shown:** Large, clickable `mailto:` link
- **Short availability message:** e.g. *"Open to freelance work and full-time roles."*
- **Social links:** GitHub, LinkedIn, Twitter/X
- **Simple contact form** (optional): Name · Email · Message · Send button
- **Decorative element:** Abstract art image in background or corner

---

## 5. Design System

### 5.1 Color Palette

```css
:root {
  /* Backgrounds */
  --color-bg:         #0a0a0a;   /* Near-black main background */
  --color-bg-soft:    #111111;   /* Slightly lighter for cards */
  --color-bg-card:    #161616;   /* Card / panel background */

  /* Text */
  --color-text:       #f0f0f0;   /* Primary white text */
  --color-text-muted: #888888;   /* Muted grey for subtitles */
  --color-text-dim:   #444444;   /* Very dim — dividers, labels */

  /* Accent */
  --color-accent:     #ffffff;   /* Pure white accent */
  --color-accent-2:   #c8ff00;   /* Optional: neon yellow-green for tags */

  /* Borders */
  --color-border:     #1e1e1e;   /* Subtle card borders */
}
```

> Tip: Use only 2–3 colours. The reference site is near-monochrome with high contrast. Avoid colourful gradients.

---

### 5.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | **Instrument Serif** or **Playfair Display** | 400 | 10–14vw |
| Headings | **Syne** or **Space Grotesk** | 600–700 | 2.5–5rem |
| Body | **DM Sans** | 400 | 1rem / 1.125rem |
| Labels / Tags | **DM Mono** or **JetBrains Mono** | 400 | 0.75rem |

```tsx
// next/font usage in layout.tsx
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-mono' })
```

---

### 5.3 Spacing & Layout

- **Max content width:** `1280px`, centered with `px-6 md:px-12 lg:px-24`
- **Section vertical padding:** `py-24 md:py-36`
- **Grid system:** Tailwind grid-cols-2 / grid-cols-12 for complex layouts
- **Use generous whitespace** — the reference site breathes with negative space

---

### 5.4 Border Radius & Shadows

```css
--radius-sm:  4px;
--radius-md:  10px;
--radius-lg:  20px;

/* Cards use a very subtle shadow */
box-shadow: 0 0 0 1px var(--color-border);
```

---

## 6. Animations & Interactions

### 6.1 Page Load — Hero Text Split

On page load, split the hero name letter by letter and animate each letter in with a stagger:

```tsx
// SplitText.tsx — GSAP approach
useEffect(() => {
  const tl = gsap.timeline()
  tl.from('.hero-char', {
    y: 120,
    opacity: 0,
    duration: 0.9,
    ease: 'power4.out',
    stagger: 0.06,
  })
}, [])
```

Split the name into `<span>` elements per character in JSX:

```tsx
{'Vis.'.split('').map((char, i) => (
  <span key={i} className="hero-char inline-block overflow-hidden">
    {char}
  </span>
))}
```

---

### 6.2 Smooth Scroll — Lenis

```tsx
// SmoothScrollProvider.tsx
'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, duration: 1.2 })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

---

### 6.3 Scroll Reveal — GSAP ScrollTrigger

```tsx
// useScrollReveal.ts
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.from(ref.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
      },
    })
  }, [])

  return ref
}
```

---

### 6.4 Project Hover Preview (Homepage List)

```tsx
// ProjectsPreview.tsx
// On mouseenter: show cover image as floating element that follows cursor
const [activeProject, setActiveProject] = useState(null)
const [pos, setPos] = useState({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  setPos({ x: e.clientX + 20, y: e.clientY - 100 })
}

// Floating preview image:
<div
  style={{ left: pos.x, top: pos.y, opacity: activeProject ? 1 : 0 }}
  className="fixed pointer-events-none z-50 w-72 h-48 transition-opacity duration-300"
>
  <img src={activeProject?.cover} className="w-full h-full object-cover rounded-lg" />
</div>
```

---

### 6.5 Custom Cursor

```tsx
// CustomCursor.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dot.current) return
      dot.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={dot}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
    />
  )
}
```

---

### 6.6 Magnetic Button Effect

```tsx
// MagneticButton.tsx
export default function MagneticButton({ children, href }) {
  const btn = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e) => {
    const rect = btn.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btn.current, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' })
  }

  const handleMouseLeave = () => {
    gsap.to(btn.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <a ref={btn} href={href} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </a>
  )
}
```

---

### 6.7 Page Transitions (Framer Motion)

```tsx
// PageTransition.tsx
'use client'
import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 7. Data Structures

### 7.1 `src/data/projects.ts`

```ts
export type Project = {
  id: string
  title: string
  category: string          // 'Web' | 'App' | 'Design' | 'Tool'
  year: number
  description: string
  coverImage: string        // path under /public/images/projects/covers/
  tags: string[]
  link?: string             // Live URL
  github?: string           // GitHub URL
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'kreed-health',
    title: 'Kreed.health',
    category: 'Web',
    year: 2025,
    description: 'A homeopathic clinic management SaaS — case histories, prescriptions, patient tracking.',
    coverImage: '/images/projects/covers/kreed-health.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://kreed.health',
    featured: true,
  },
  // Add more projects...
]
```

---

### 7.2 `src/data/skills.ts`

```ts
export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Animation & 3D',
    skills: ['GSAP', 'Framer Motion', 'Lenis', 'Three.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'REST API'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'MySQL'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'Photoshop'],
  },
]
```

---

## 8. Header & Navigation

The header is minimal, sticky, and transparent over the hero:

```
┌──────────────────────────────────────────────────────────┐
│  Vis.                              Works  Info  Contact  │
└──────────────────────────────────────────────────────────┘
```

- **Logo / name** on the left: `"Vis."` in the display font
- **Nav links** on the right: plain text, no underline, subtle opacity hover
- On scroll past hero, the header background becomes `rgba(10,10,10,0.85)` with a blur backdrop
- Mobile: hamburger menu → full-screen overlay nav with large text links

```tsx
// Active link detection
import { usePathname } from 'next/navigation'
const pathname = usePathname()
// Apply 'opacity-100' vs 'opacity-40' based on pathname match
```

---

## 9. Footer

Minimal footer at the bottom of every page:

```
┌──────────────────────────────────────────────────────────┐
│  Vis.       Works   Info   Contact      GitHub  LinkedIn │
│                                                          │
│  © 2025  All rights reserved.              v1.0          │
└──────────────────────────────────────────────────────────┘
```

---

## 10. SEO & Metadata

In `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Vis — Full-Stack Developer & UI Engineer',
  description: 'Creative developer building precise, thoughtful web interfaces. Specialising in React, Next.js, and UI design systems.',
  openGraph: {
    title: 'Vis — Full-Stack Developer',
    description: '...',
    url: 'https://yoursite.com',
    images: [{ url: '/images/og-cover.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vis — Full-Stack Developer',
    images: ['/images/og-cover.jpg'],
  },
  themeColor: '#0a0a0a',
}
```

---

## 11. Performance Checklist

| Concern | Solution |
|---|---|
| Image formats | Use `.webp` or `.avif` for all project covers |
| Next/Image | Always use `<Image>` from `next/image` with `sizes` prop |
| Font loading | Use `next/font/google` with `display: swap` |
| GSAP loading | Import only used plugins; register once globally |
| Lenis | Destroy on component unmount |
| Lazy sections | Use `dynamic()` for heavy sections (3D, gallery) |

---

## 12. Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile | < 640px | Single column, hero font ~12vw, no custom cursor |
| Tablet | 640–1024px | 2-col projects, adjusted spacing |
| Desktop | > 1024px | Full layout, hover previews enabled, cursor active |

```css
/* Hero font scale example */
.hero-name {
  font-size: clamp(3.5rem, 12vw, 10rem);
}
```

---

## 13. Setup & Installation

```bash
# 1. Create Next.js app
npx create-next-app@latest portfolio --typescript --tailwind --app

cd portfolio

# 2. Install animation libraries
npm install gsap @studio-freight/lenis framer-motion

# 3. Install fonts via Fontsource (alternative to next/font)
npm install @fontsource/syne @fontsource/dm-sans @fontsource/dm-mono

# 4. Install utilities
npm install clsx tailwind-merge lucide-react

# 5. Run dev server
npm run dev
```

---

## 14. Deployment

```bash
# Deploy to Vercel
npx vercel

# Or push to GitHub and connect repo to vercel.com
# Vercel auto-detects Next.js — zero config needed
```

**Custom domain:** Buy `vis.dev` or `visworks.in` and point DNS to Vercel.

---

## 15. Content Checklist

Before launch, make sure you have:

- [ ] Your **profile photo** (square or portrait, high quality)
- [ ] **Cover images** for each project (1200×800px recommended)
- [ ] **Project descriptions** written (2–3 sentences each)
- [ ] **Bio** written (who you are, what you build, what you care about)
- [ ] **Social links** updated (GitHub, LinkedIn)
- [ ] **Email** set up (use a professional one)
- [ ] **OG image** created for social sharing (1200×630px)
- [ ] **Favicon** created

---

## 16. Key Differences — You vs Luke Baffait

Luke's site is in French and targets a French audience. For your portfolio:

| Element | Luke's site | Your version |
|---|---|---|
| Language | French | English |
| Primary role | Creative Developer (web/animation) | Full-Stack Developer + UI Engineer |
| Specialty callout | *Étudiant en BUT Informatique* | Kreed.health, healthcare SaaS |
| Accent colour | Monochrome white | Consider an **indigo** accent to echo your Kreed.health brand |
| Projects | 8 projects | Start with 4–5 best projects |

---

*End of Documentation — Version 1.0*