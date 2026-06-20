# Ninety5 Studio Webpage

The official Next.js-based web platform for Ninety5 Studio — a high-fidelity digital design and engineering studio.

## Accessibility & SEO Improvements

We have executed a comprehensive enhancement of the platform's visual hierarchy, accessibility (A11y), search engine optimization (SEO), and page speed performance. Below is a detailed summary of the improvements:

### 1. Accessibility & Semantic HTML
* **Cohesive Headings**: Collapsed the multi-segmented `<h1>` spans in the Hero section into a single, unified text node. Screen readers now announce the heading as a coherent sentence rather than fractured phrases, while keeping the bold brutalist text styles intact using nested styling blocks.
* **Keyboard Navigation Outline**: Added global `:focus-visible` ring parameters in `globals.css` using `3px solid var(--color-brand-orange)` with `outline-offset: 3px`. Every interactive element (buttons, links, inputs) displays a clear focus cue.
* **Skip Navigation Link**: Injected a visually hidden "Skip to main content" link as the first focusable element of the page structure, jumping focus past the header to `<main id="main">` for keyboard-only users.
* **Accessible Metrics**: Added descriptive `aria-label` tags to case study cards. Incorporated non-color symbols like `↑` and `★` so meaning is clear to color-deficient users without relying purely on color differences.
* **Semantic Input Forms**: Validated that all inputs, textareas, and selects have associated labels via explicit `htmlFor`/`id` bindings.

### 2. Design & Visual Hierarchy
* **Primary Conversion CTA**: Swapped classes in the Hero section to prioritize the "Start a Project" button (made it primary and positioned it first) over "Explore Work".
* **Authentic Trust Signals**: Replaced the placeholder avatar letters with a row of five responsive, semi-transparent SVG client logos representing Atlas Analytics, Bloom Health, Forge Dev Tools, Orbit Labs, and Vertex SaaS.
* **Mobile Density & Spacing**: Stacked the stats bar vertically (`flex-direction: column`) on narrow viewports (`< 480px`) and increased bottom padding to avoid cramming.
* **Hover Transitions**: Set smooth transitions and slight offsets on hover states for CTA buttons to enrich interactivity.

### 3. SEO, Content & Performance
* **Service Page Deep-Dive**: Expanded all 6 service sub-pages with detailed copy (300-500 words each), detailed engagement process walkthroughs, timelines, deliverables checklists, case study references, and custom FAQPage JSON-LD schemas.
* **Interactive FAQs**: Implemented accordion elements on each service page to make FAQs easy to browse.
* **The Ninety5 Blog**: Launched a `/blog` section with 3 highly optimized articles targeting relevant search terms like "UI/UX design cost in India", "brand identity designer Chennai", and "product design process". Each post features Article JSON-LD, keywords in headers, internal links, and a newsletter CTA.
* **Chennai NAP & Maps**: Added plain-text Local NAP (`Ninety5 Studio • Chennai, India • hello@ninety5.in • +91 95000 95000`) in the footer and contact page. Generated and embedded a brutalist map graphic linked to Google Maps.
* **Sitemap & Robots**: Dynamically registered all static pages, case studies, and blog posts inside `sitemap.ts` and confirmed `robots.ts` allows indexation.
* **Asynchronous Deferral**: Deferred loading of the complex terminal code simulation in the Hero using `next/dynamic` with `ssr: false` to reduce initial JS payload and maximize Lighthouse performance.

### 4. Pending / Next Steps
* **A/B Testing Metrics**: Monitor the click-through rates of the swapped Hero CTA button layout using analytics tracking to confirm conversion lifts.
* **Search Console Submission**: Verify sitemap crawl status under Google Search Console once live DNS routing is set up.
