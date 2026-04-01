# SkyView — תקרות מתוחות

Production-grade Next.js website for SkyView stretch ceiling company in Israel.

## Architecture

- **Framework**: Next.js 14 + App Router (React Server Components)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Font**: Heebo via `next/font/google`
- **Direction**: RTL Hebrew
- **SEO**: Per-route metadata, dynamic sitemap.xml, robots.txt, BreadcrumbList + Organization + LocalBusiness structured data

## Routes (23 public pages)

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero, benefits, solutions, rooms, process, FAQ |
| `/stretch-ceilings` | Service hub — all ceiling types with room links |
| `/pricing` | Pricing tiers, room price table, what's included/excluded |
| `/projects` | Project gallery (placeholder) |
| `/contact` | Contact info — phone, WhatsApp, email, Instagram |
| `/about` | Company info |
| `/stretch-ceiling-living-room` | Living room page |
| `/stretch-ceiling-bathroom` | Bathroom page — water resistance focus |
| `/stretch-ceiling-kitchen` | Kitchen page — grease/moisture, cleaning |
| `/stretch-ceiling-mikveh` | Mikveh page — extreme humidity, sky print |
| `/stretch-ceiling-matte` | Matte finish |
| `/stretch-ceiling-glossy` | Glossy finish — mirror effect |
| `/lighted-stretch-ceiling` | Backlit translucent ceiling |
| `/acoustic-stretch-ceiling` | Acoustic membrane |
| `/printed-stretch-ceiling` | UV-printed ceiling |
| `/stretch-ceiling-led-strip` | LED strip integration (פסים מרחפים) |
| `/stretch-ceiling-magnetic-track` | Magnetic track lighting |
| `/stretch-ceiling-vs-drywall` | Comparison table — stretch vs drywall |
| `/stretch-ceiling-guide` | Buyer's guide — materials, process, limitations |
| `/stretch-ceiling-repair` | Repair service |
| `/barrisol` | Barrisol brand page |
| `/stretch-ceilings-for-business` | B2B — offices, restaurants, hotels |
| `/stretch-ceilings-for-architects` | Architects — specs, DWG, constraints |

Every route has unique: title, meta description, H1, canonical URL, and content.

## SEO Features

- **Structured data**: Organization, LocalBusiness, BreadcrumbList (per page)
- **Sitemap**: Dynamic `sitemap.ts` with all 23 routes
- **Robots**: Dynamic `robots.ts` pointing to sitemap
- **Canonicals**: Environment-configurable via `NEXT_PUBLIC_SITE_URL`
- **Breadcrumbs**: Visual UI + JSON-LD on 19 core pages
- **Internal linking**: Every SEO page links to 3-6 related pages

## Setup

```bash
npm install
cp .env.example .env.local  # fill in your values
npm run dev
```

## Environment Variables

See `.env.example`. Required:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase publishable key
- `NEXT_PUBLIC_SITE_URL` — Production domain (defaults to https://skyview.co.il)

## Design System

- **Colors**: Cream `#FAFAF8`, Graphite `#1A1A2E`, Navy `#1E3A5F`
- **Font**: Heebo 300-900 via next/font
- **Layout**: max-width 1280px, section spacing 88px/52px
- **Buttons**: 54px height, no border-radius, full-width on mobile
