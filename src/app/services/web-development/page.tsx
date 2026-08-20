import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Web Development & Full-Stack Frontend Agency | Ninety5 Studio",
  description:
    "Engineering blazing-fast, sub-second Next.js web applications, React Server Components, and Technical SEO architectures for high-growth tech startups.",
  keywords: [
    "Next.js web development agency",
    "React frontend engineering India",
    "Technical SEO Next.js agency",
    "Sub-second web performance",
    "Headless CMS Next.js developers",
  ],
  alternates: {
    canonical: "https://ninety5.in/services/web-development",
  },
  openGraph: {
    title: "Next.js Web Development Services | Ninety5 Studio",
    description:
      "Building blazing-fast, SEO-optimized, and highly secure web applications using modern React and Next.js frontend frameworks.",
    url: "https://ninety5.in/services/web-development",
    type: "website",
  },
};

const DATA: ServicePageData = {
  slug: "web-development",
  title: "Web Development",
  lead: "Engineering blazing-fast, SEO-optimized web experiences with modern React and Next.js frameworks.",
  bodyText: "We don't build generic marketing pages. We engineer high-performance web applications that convert traffic. By combining Next.js Server Components, static generation, clean CSS modules, and custom micro-animations, we deliver websites with near-perfect Lighthouse scores and robust security.",
  capabilities: [
    { icon: "⟨/⟩", title: "Next.js & React", body: "Full-stack React architectures leveraging Server Components for fast initial loads and reduced JS payloads." },
    { icon: "🔍", title: "Technical SEO", body: "Structured schema markup, semantic HTML structure, dynamic sitemaps, and Core Web Vitals optimization.", alt: true },
    { icon: "♒", title: "Custom Animations", body: "Fluid, hardware-accelerated transitions using GSAP and CSS animations that feel premium." },
    { icon: "⊞", title: "CMS Integrations", body: "Connecting headless systems (Sanity, Contentful) to give your marketing teams self-serve editing power.", alt: true },
  ],
  deliverables: [
    { title: "Production Code", sub: "Next.js + TypeScript" },
    { title: "CMS Panel", sub: "Custom-configured schema" },
    { title: "SEO Audit", sub: "Lighthouse validations" },
    { title: "API Schema", sub: "Annotated backend" },
    { title: "Deploy Pipeline", sub: "Vercel auto-deploy" },
  ],
  process: [
    { num: "01", title: "Architecture", desc: "Setting up database schemas, API architecture, and routing." },
    { num: "02", title: "Development", desc: "Translating designs into clean, responsive Next.js components." },
    { num: "03", title: "Optimization", desc: "Compressing images, reducing JS bundles, and tuning performance." },
    { num: "04", title: "Launch", desc: "DNS routing, SSL setup, and Google Search Console submission." },
  ],
  expandedIntro: "Web engineering is the bottleneck of digital user experience. If a website takes longer than two seconds to load, half your users leave. We build custom Next.js platforms optimized for speed, accessibility, and high crawlability.",
  processDetails: "We build strictly with clean TypeScript and vanilla CSS/CSS Modules to maintain lightweight footprints. We implement static site generation (SSG) and incremental static regeneration (ISR) to deliver pages instantly. We also integrate custom search engine schemes and microcopy directly into the layout.",
  deliverablesDetails: "Deliverables include a production-ready GitHub repository with Next.js code, headless CMS access with custom block structures, schema JSON-LD scripts, sitemaps, automated CI/CD configurations, and performance audit summaries.",
  timelineDetails: "Our typical web engineering cycles run from 6 to 12 weeks depending on integration complexity and page counts.",
  outcomesDetails: "Clients experience high Lighthouse scores, faster page indexation on Google, increased organic search impressions, and lower customer bounce rates.",
  caseStudyIds: ["orbit", "atlas"],
  relatedPosts: [
    {
      title: "Why Next.js App Router is the Ultimate Stack for B2B SaaS in 2026",
      slug: "why-nextjs-app-router-for-b2b-saas",
      readTime: "8 min read"
    },
    {
      title: "Core Web Vitals & SaaS Conversion Rate: The Data Link in 2026",
      slug: "core-web-vitals-saas-conversion-rate",
      readTime: "8 min read"
    }
  ],
  faqs: [
    {
      q: "Do you use Tailwind or Vanilla CSS?",
      a: "We utilize Vanilla CSS and CSS Modules. This prevents styling conflicts, ensures complete design flexibility, keeps CSS bundle sizes to a minimum, and maintains strict separation of concerns.",
    },
    {
      q: "Will my team be able to edit page copy?",
      a: "Yes. We connect the Next.js frontend to a headless CMS (like Sanity or Contentful). We set up structured blocks so your team can edit headers, text, images, and FAQs without touching code.",
    },
    {
      q: "How do you guarantee page performance?",
      a: "We optimize assets (WebP/AVIF compression, Next.js image priority), lazy-load non-critical animations, utilize server-side caching, and host builds on edge networks like Vercel to guarantee sub-second load times.",
    },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={DATA} />;
}
