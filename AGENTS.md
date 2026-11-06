# AGENTS.md

Next.js 16 + React 19 App Router marketing site for Ninety5 Studio (www.ninety5.in). Static/SSG, no backend, no database, deploy target Vercel (`vercel.json` → `framework: nextjs` only).

## Commands

```bash
npm run dev    # next dev --turbo (Turbopack; note: no `test` or `typecheck` script exists)
npm run lint   # eslint . (eslint-config-next/core-web-vitals)
npm run build  # next build
npm start      # next start
```

- No tests, no formatter, no pre-commit, no CI in repo. Verification is `npm run lint` + `npm run build` + manual check.
- First run: `npm install` (Next 16, React 19, GSAP 3, Lenis, lucide-react, @vercel/analytics).
- Optional env: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` read in `src/app/layout.tsx` metadata (spread-conditional, safe to omit).

## Architecture

- Entrypoint: `src/app/layout.tsx` (fonts Syne+Inter via `next/font/google` as CSS vars, global SEO JSON-LD Organization/WebSite/LocalBusiness, skip-link, wraps all pages in `SmoothScroll`, mounts Vercel `<Analytics/>`). Metadata base `https://www.ninety5.in`.
- `src/app/page.tsx` composes all sections; every other route renders its own `Header`/`Footer` (they are **not** in the root layout — don't add them there or pages double-render).
- `src/app/`: `page.tsx`, `about/`, `contact/` (+ `ContactClient.tsx`), `faq/` (+ `FAQClient.tsx`), `process/`, `products/`, `testimonials/`, `top-graphic-design-companies-chennai/`, `work/` + `work/[slug]/`, `blog/` + `blog/[slug]/`, `services/` + 9 sub-routes, `legal/{privacy-policy,terms-of-service,cookie-policy}/`, `sitemap.ts`.
- `src/components/layout/`: `Header`, `Footer`, `SmoothScroll` (Lenis wrapper + scroll-progress bar, fine-pointer/reduced-motion gated).
- `src/components/sections/`: 15 sections (Hero, CaseStudies, Services, ComparisonTable, Process, Marquee, Testimonials, Analytics, AuditBanner, FAQ, Contact, StatsBar, TerminalMockup, ScrollExperience).
- `src/data/`: `projects.ts` (`PROJECTS`, 6 entries) and `blog.ts` (`BLOG_POSTS`) are the content source of truth. `src/app/sitemap.ts` builds URLs from them (`work/[slug]` from PROJECTS, `blog/[slug]` from BLOG_POSTS).

## Gotchas

- Almost all components have `"use client"` (incl. `src/app/services/ServicePageTemplate.tsx`); `layout.tsx` and route `page.tsx` metadata stay server-side. New service pages = add data-only `page.tsx` delegating to `ServicePageTemplate` (see `src/app/services/web-development/page.tsx`); do not copy the template markup.
- Styling is **plain CSS only, no Tailwind**: design tokens live as CSS vars in `src/app/globals.css` (`--color-bg`, `--color-dark`, `--color-brand-blue`, `--color-brand-orange`, `--font-display/body`, spacing/text scales), plus colocated `*.module.css` per route and shared classes (`.container`, `.btn`, `.reveal`, `.skip-link`). Reuse tokens — never hardcode new colors. Fonts are loaded via `next/font` in `layout.tsx`; comment at top of `globals.css` says do not re-add `<link>`.
- Animation: GSAP + `useReveal` hook (IntersectionObserver on `.reveal` → `.visible`, unobserves after first reveal). Hero terminal mock is dynamically imported with `ssr: false` to keep initial JS light — preserve that pattern, don't eager-import it.
- `next.config.mjs` image `remotePatterns` allows only `**.ninety5.in` HTTPS; images come from subdomains or `public/`. Adding a new external image host fails at build/runtime — it must be added there.
- SEO is a first-class feature: every route has per-page metadata/canonical, and JSON-LD (`FAQPage`, `Service`, `BreadcrumbList`, `Article`) is generated from the same `src/data/*` records that drive rendering — edit data, never fork a copy.

## Conventions

- Path alias `@/*` → `./src/*` (tsconfig `paths`). Use it in imports (`@/components/...`, `@/data/...`).
- Brand copy: Chennai-based design studio, `hello@ninety5.in` (footer plain text, per README). Canonical/metadata host is `www.ninety5.in` — keep trailing-www consistent.
- `next-env.d.ts` and `*.tsbuildinfo` are generated — don't hand-edit.
- Docs risk: `README.md` describes marketing status/a11y/SEO work, not developer workflow, and may lag the code — trust `package.json`, `next.config.mjs`, and `tsconfig.json` over prose.
