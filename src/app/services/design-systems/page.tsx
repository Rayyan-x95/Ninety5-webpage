import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems Architecture & Tokenized UI Engineering | Ninety5 Studio",
  description:
    "Engineering unified UI component libraries, Figma variable tokens, and Storybook React design systems that scale your SaaS product teams without design debt.",
  keywords: [
    "Design systems agency India",
    "Figma design tokens architecture",
    "Storybook component library development",
    "Design systems ROI SaaS",
    "Tokenized UI engineering",
  ],
  alternates: {
    canonical: "https://ninety5.in/services/design-systems",
  },
  openGraph: {
    title: "Design Systems Engineering Services | Ninety5 Studio",
    description:
      "Engineering unified UI component libraries and tokenized design systems that scale your design language across platforms.",
    url: "https://ninety5.in/services/design-systems",
    type: "website",
  },
};

const DATA: ServicePageData = {
  slug: "design-systems",
  title: "Design Systems",
  lead: "Engineering unified component libraries and tokenized design systems for scale.",
  bodyText: "Design debt slows down shipping and dilutes the product experience. We audit, design, and document comprehensive UI pattern libraries that act as the single source of truth for designers and developers. We build systems that make product iteration fast, consistent, and beautiful.",
  capabilities: [
    { icon: "▦", title: "Component Library", body: "Reusable Figma layouts and React components constructed with strict auto-layout and variable states." },
    { icon: "⬡", title: "Design Tokens", body: "Centralized configuration files for spacing, color, typography, and shadow properties, synced across design and code.", alt: true },
    { icon: "⟨/⟩", title: "Code Integration", body: "React/Next.js/HTML implementation matching design components, documented inside Storybook." },
    { icon: "▤", title: "Documentation", body: "Exhaustive documentation outlining pattern rules, component use cases, and handoff instructions.", alt: true },
  ],
  deliverables: [
    { title: "Figma UI Kit", sub: "Interactive master file" },
    { title: "Token Registry", sub: "JSON/CSS variables" },
    { title: "Storybook", sub: "Documented React code" },
    { title: "Usage Guide", sub: "Contextual rules" },
    { title: "Workflow Setup", sub: "Version control path" },
  ],
  process: [
    { num: "01", title: "Audit", desc: "Cataloging all current UI variants, components, and code debt." },
    { num: "02", title: "Architecture", desc: "Defining tokens, variables, and base primitives." },
    { num: "03", title: "Component Build", desc: "Crafting the UI elements in Figma and code." },
    { num: "04", title: "Integration", desc: "Setting up versioning, Storybook, and handoff paths." },
  ],
  expandedIntro: "A modern design system is more than a UI kit. It is a shared infrastructure that bridges design and engineering. By standardizing component behaviors and code tokens, we eliminate redundant design work and speed up product shipping.",
  processDetails: "We start by auditing your existing products to identify inconsistencies. Then, we build the foundation: a token system for spacing, color, and text. We construct interactive UI components (buttons, inputs, navigation, cards) in Figma and map them directly to React code, validating them against accessibility parameters.",
  deliverablesDetails: "You get a master Figma UI library, a repository of styled React/CSS components, JSON design tokens, a Storybook instance showing live documentation, and governance guidelines to guide your team in updating the system.",
  timelineDetails: "Depending on product scale, a design system takes between 8 and 12 weeks to design, engineer, and document.",
  outcomesDetails: "Product teams experience up to a 50% decrease in front-end development time, immediate visual consistency, and unified workflows across design and engineering.",
  caseStudyIds: ["atlas", "forge"],
  relatedPosts: [
    {
      title: "The ROI of Design Systems for Fast-Growing Startups: A 2026 Guide",
      slug: "roi-of-design-systems-startups-guide",
      readTime: "6 min read"
    },
    {
      title: "How Ninety5 Designs, Engineers & Ships High-Converting Digital Products",
      slug: "how-ninety5-designs-engineers-ships-digital-products",
      readTime: "8 min read"
    }
  ],
  faqs: [
    {
      q: "What are design tokens and how do they work?",
      a: "Design tokens are the visual atoms of a brand (colors, fonts, borders, margins) saved as variables (like JSON or CSS custom properties). They ensure that if a brand color is changed in the token registry, it propagates to both Figma and code automatically.",
    },
    {
      q: "Can this integrate with our existing Next.js repo?",
      a: "Yes, we configure the design system to output standard CSS variables or tailwind tokens that plug directly into your current Next.js configuration, ensuring there is zero friction during adoption.",
    },
    {
      q: "Who maintains the design system after handoff?",
      a: "We establish a governance model and train your internal designers and developers on how to propose, review, and merge updates to the design system, ensuring it continues to grow without bloating.",
    },
  ],
};

export default function DesignSystemsPage() {
  return <ServicePageTemplate data={DATA} />;
}
