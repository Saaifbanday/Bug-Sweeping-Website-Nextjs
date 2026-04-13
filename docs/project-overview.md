# BugSweepingTSCM.com — Project Overview

## What This Project Is

A complete rebuild of **bugsweepingtscm.com** from WordPress to **Next.js 15** with Tailwind CSS.

**Client:** BugSweepingTSCM.com (Bug Sweeping & TSCM Services, India)  
**Original Site:** WordPress (being replaced)  
**New Stack:** Next.js 15 + TypeScript + Tailwind CSS v4

---

## Why Next.js Over WordPress

| Feature | WordPress | Next.js (SSG) |
|--------|-----------|--------------|
| Page Load | Slow (PHP + DB queries) | Instant (pre-built HTML) |
| SEO | Plugin-dependent | Native + metadata API |
| Security | Plugin vulnerabilities | No database, no PHP |
| Hosting Cost | Paid hosting needed | **Free on Vercel** |
| Performance Score | Typically 40–70 | Typically 90–100 |

The USP sold to the client: **faster site = better SEO rankings = more leads.**

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Rendering:** Static Site Generation (SSG) — all pages pre-built at deploy time
- **Styling:** Tailwind CSS v4 + custom CSS variables
- **Icons:** Lucide React
- **Font:** Geist Sans (Google Fonts via next/font)
- **Language:** TypeScript

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Homepage (assembles all sections)
│   └── globals.css         # Design tokens + global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky navbar with mobile menu
│   │   └── Footer.tsx      # Footer with links + contact
│   └── sections/
│       ├── Hero.tsx         # Hero banner
│       ├── TrustBadges.tsx  # W.A.D. & certification badges
│       ├── ContactCTA.tsx   # Reusable CTA strip (2 variants)
│       ├── Services.tsx     # 6 service cards
│       ├── Equipment.tsx    # 13 TSCM equipment cards
│       ├── TSCMPoints.tsx   # Org vulnerability points
│       ├── AboutUs.tsx      # About + who we are + why trust us
│       ├── Stats.tsx        # 4 key stats (red background)
│       └── Testimonials.tsx # 3 India-focused client reviews
├── docs/
│   ├── project-overview.md  # This file
│   ├── deployment.md        # Vercel deployment guide
│   └── dns-migration.md     # How to migrate DNS from WordPress
└── public/
    └── images/              # Add client-provided images here
```

---

## Design System

All colors are defined as CSS variables in `app/globals.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#080d1a` | Page background |
| `--bg-surface` | `#0d1526` | Section backgrounds |
| `--bg-card` | `#111c33` | Cards, header |
| `--color-accent` | `#e63946` | Red highlights, CTAs |
| `--color-text` | `#f0f4ff` | Primary text |
| `--color-muted` | `#8899bb` | Secondary text |
| `--color-border` | `#1e2d4a` | Borders |

---

## Images Needed from Client

The following image placeholders exist in the code — replace when client provides assets:

| Component | Placeholder Location | Description |
|-----------|---------------------|-------------|
| `Hero.tsx` | Right column | Expert holding TSCM scanner |
| `AboutUs.tsx` | "Who We Are" | Expert performing sweep in boardroom |
| `AboutUs.tsx` | "Your World. Protected." | Luxury high-rise or secured space |
| `TrustBadges.tsx` | W.A.D. badge area | W.A.D. certificate image |

To add an image:
1. Place it in `public/images/filename.jpg`
2. Find the `[ Image placeholder ]` comment in the component
3. Uncomment the `<Image ... />` tag and remove the placeholder div

---

## Pages To Build Next

After homepage is approved:
- `/services` — expanded individual service pages
- `/about` — detailed about page
- `/contact` — contact form
- `/blog` — SEO blog (hidden camera detection tips, etc.)

---

## Content Issues Fixed from WordPress Version

The original WordPress site had template/placeholder content that was never replaced:
- ❌ "Our hosting plans come packed with essential features like lightning-fast speeds, 99.9% uptime..." → **Removed**
- ❌ Data Centers world map section → **Removed** (irrelevant to TSCM)
- ❌ Fake testimonials (Jane Smith, Mike Johnson with hosting reviews) → **Replaced** with India-specific TSCM testimonials
- ❌ Stats showing "0+" (counters never loaded) → **Replaced** with real hardcoded numbers
- ❌ Footer with `info@domainname.com` and `+1 (234) 567 489` → **Fixed** with real contact info
- ❌ "NovaHost" / "Customer grow with NovaHost" → **Removed**
