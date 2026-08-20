import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B SaaS Product Design (UI/UX) Agency | Ninety5 Studio",
  description:
    "End-to-end UX/UI product design that transforms complex B2B workflows into intuitive, high-converting digital interfaces. Production-ready Figma specs to code.",
  keywords: [
    "B2B SaaS product design",
    "UI UX design agency Chennai",
    "Product design studio India",
    "SaaS dashboard UX design",
    "Figma UI UX designers",
  ],
  alternates: {
    canonical: "https://ninety5.in/services/product-design",
  },
  openGraph: {
    title: "Product Design (UI/UX) Services | Ninety5 Studio",
    description:
      "End-to-end UX/UI product design that transforms complex problems into elegant, high-converting digital experiences.",
    url: "https://ninety5.in/services/product-design",
    type: "website",
  },
};

const DATA: ServicePageData = {
  slug: "product-design",
  title: "Product Design",
  lead: "End-to-end product design that transforms complex problems into elegant, high-converting digital experiences.",
  bodyText: "Great products are not designed by accident. They are engineered through rigorous user research, relentless prototyping, and an obsession with mapping intuitive workflows. We own the complete design lifecycle from initial insight to visual design system, delivering production-ready Figma specifications that bridge the gap to code.",
  capabilities: [
    { icon: "⬡", title: "UX Strategy", body: "User research, journey mapping, and information architecture that eliminates friction before a pixel is pushed." },
    { icon: "◫", title: "UI Design", body: "High-fidelity interfaces that are both strikingly beautiful and ruthlessly functional — built in Figma with production precision.", alt: true },
    { icon: "◎", title: "Interaction Design", body: "Micro-animations, transitions, and state management that make every interaction feel considered and premium." },
    { icon: "▦", title: "Usability Testing", body: "Remote and in-person testing sessions with real users to validate assumptions before engineering begins.", alt: true },
  ],
  deliverables: [
    { title: "User Research Report", sub: "Insights + personas" },
    { title: "Wireframes", sub: "Lo-fi structure" },
    { title: "Hi-Fi Designs", sub: "Production Figma" },
    { title: "Prototype", sub: "Interactive flows" },
    { title: "Dev Handoff", sub: "Annotated specs" },
  ],
  process: [
    { num: "01", title: "Research", desc: "User interviews, analytics audit, competitor teardown." },
    { num: "02", title: "Information Arch.", desc: "Sitemap, user flows, and IA validation." },
    { num: "03", title: "Design", desc: "Lo-fi wireframes → hi-fi screens → interactive prototype." },
    { num: "04", title: "Validate", desc: "Usability testing and iteration before engineering." },
  ],
  expandedIntro: "We believe product design is a quantitative discipline. We don't just rely on intuition; we audit user behaviour, study drop-off rates, and design layouts with mathematical precision to maximize engagement and product utility.",
  processDetails: "Our process is collaborative and open. We begin with user discovery to understand pain points, mapping user journeys and validation patterns. We build interactive wireframes to validate layout ideas early, followed by high-fidelity design sprints in Figma. Weekly review sessions keep stakeholders in the loop.",
  deliverablesDetails: "You receive fully annotated, responsive design systems in Figma. This includes comprehensive component libraries, typography hierarchies, auto-layout definitions, and spacing tokens, alongside high-fidelity interactive flow prototypes and detailed developer handoff files.",
  timelineDetails: "A typical product design project runs for 6 to 10 weeks, depending on the volume of screens and flow complexity.",
  outcomesDetails: "Clients typically see improved conversion rates, reduced onboarding drop-offs, and significantly faster engineering velocity due to clean design specs.",
  caseStudyIds: ["atlas", "bloom"],
  relatedPosts: [
    {
      title: "UI/UX Design Cost in India: The Complete 2026 Pricing Guide",
      slug: "ui-ux-design-cost-india-2026-guide",
      readTime: "7 min read"
    },
    {
      title: "How to Design B2B SaaS Dashboards That Users Actually Love",
      slug: "designing-b2b-saas-dashboards-users-love",
      readTime: "6 min read"
    },
    {
      title: "Best UI/UX Agency in Chennai for Startups: What to Look for in 2026",
      slug: "ui-ux-agency-chennai-startups",
      readTime: "7 min read"
    }
  ],
  faqs: [
    {
      q: "What files do we receive at handoff?",
      a: "You will receive access to our primary Figma workspace containing organized page flows, visual components with complete autolayout, responsive variants, typography, and color design tokens, plus interactive prototypes and annotated handoff notes.",
    },
    {
      q: "How do you involve users in the design process?",
      a: "We perform interactive usability testing using tools like Maze or in-person sessions. We construct realistic user paths, observe test subjects as they complete tasks, gather feedback, and iterate on wireframes before coding.",
    },
    {
      q: "Do you support the engineering team during build?",
      a: "Yes, we stay closely aligned with your development team. We provide dev-handoff walkthroughs, review implementation builds, and verify that visual components, layout padding, and transitions match the Figma specifications.",
    },
  ],
};

export default function ProductDesignPage() {
  return <ServicePageTemplate data={DATA} />;
}
