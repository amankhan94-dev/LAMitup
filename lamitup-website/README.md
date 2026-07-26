# LAMitup Website

Premium one-page website for [LAMitup](https://www.lamitup.com) — a B2B outbound revenue engine for technology companies.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- Framer Motion (animations)
- Lucide React (icons)

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Serve with `npm run preview`.

## Deploy to Vercel

1. Push this folder to a GitHub repo (or the root of one)
2. Import to [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

The `vercel.json` at the root handles SPA routing automatically.

## Customise

| What | Where |
|------|-------|
| CTA link (Calendly) | Search `CTA_URL` in `src/components/` — update in `Nav.tsx`, `Hero.tsx`, `Process.tsx`, `FinalCTA.tsx` |
| Brand colours | `src/index.css` — `@theme` block |
| Copy / content | Each section has its own component in `src/components/` |
| Fonts | `src/index.css` — Google Fonts `@import` line |
| Contact email | `src/components/Footer.tsx` |

## Sections

1. **Nav** — Sticky, blur-on-scroll, mobile hamburger
2. **Hero** — Full-screen dark hero with animated pipeline flow diagram
3. **Problem** — 7 failure-mode cards + punchy closing statement
4. **Solution** — 8 numbered outreach engine modules
5. **Process** — 6-step vertical timeline
6. **Why Us** — 7 differentiators with icon cards
7. **Results** — 4 animated scroll-triggered counters
8. **Industries** — 8 B2B tech sectors
9. **Testimonials** — 3 client quote cards
10. **FAQ** — 6-item animated accordion
11. **Final CTA** — Full-width dark section with trust signals
12. **Footer** — Minimal with social links and contact info
