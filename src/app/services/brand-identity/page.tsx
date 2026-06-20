import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity Design Services | Ninety5 Studio",
  description: "Forging iconic, high-contrast visual brand systems that resonance and dominate in crowded markets.",
};

const DATA: ServicePageData = {
  slug: "brand-identity",
  title: "Brand Identity",
  lead: "Forging iconic, high-contrast visual identities that demand attention and command market authority.",
  bodyText: "In a saturated market, playing it safe is the riskiest strategy. We build unapologetic, brutalist brand identities that combine custom typography, vibrant color palettes, and motion language. We help modern digital-first brands cut through the noise and establish unmistakable visual presence.",
  capabilities: [
    { icon: "✦", title: "Logo Design", body: "Scalable visual marks, wordmarks, and sub-brands engineered to work across terminals, mobile screens, and billboards." },
    { icon: "▩", title: "Typography", body: "Bespoke font curation and custom typesetting designed for maximum visual weight and brand personality.", alt: true },
    { icon: "▧", title: "Color Systems", body: "Vibrant, high-contrast color palettes built for high accessibility compliance and digital impact." },
    { icon: "◰", title: "Asset Systems", body: "Modular social media templates, presentation decks, and marketing collateral for unified communication.", alt: true },
  ],
  deliverables: [
    { title: "Primary Logo Suite", sub: "Vector formats" },
    { title: "Brand Book", sub: "Usage guidelines" },
    { title: "Color Palette", sub: "Contrast values" },
    { title: "Typography Guide", sub: "Print + web fonts" },
    { title: "Social Media Kit", sub: "Editable templates" },
  ],
  process: [
    { num: "01", title: "Discovery", desc: "Analyzing market positioning, target audience, and competitors." },
    { num: "02", title: "Concepts", desc: "Developing three distinct visual directions and styles." },
    { num: "03", title: "Refinement", desc: "Iterating on the chosen direction and polishing vector forms." },
    { num: "04", title: "Documentation", desc: "Creating brand guidelines and exportable asset templates." },
  ],
  expandedIntro: "Branding is the visual translation of your company's core values and product strategy. We construct comprehensive design systems that extend beyond static logos to form a living, interactive visual language for web, mobile, and print.",
  processDetails: "We kick off with visual positioning audits to find market opportunities. Next, we craft creative directions exploring typography, texture, and layout style. After selecting a concept, we refine the vectors, define color contrast schemes, and establish typography systems, keeping you involved via collaborative feedback.",
  deliverablesDetails: "Deliverables include a master brand package containing SVG and vector logo formats, web-optimized type files, color variables, comprehensive guidelines, and editable design templates. All assets are cataloged in an online design portal.",
  timelineDetails: "A brand identity engagement typically takes 4 to 6 weeks from initial research to final asset delivery.",
  outcomesDetails: "Brands receive an unforgettable visual system that boosts customer recognition, increases brand trust, and unifies all visual communications.",
  caseStudyIds: ["forge"],
  faqs: [
    {
      q: "What formats are the logos delivered in?",
      a: "We deliver all brand marks in clean SVG formats for digital use, along with print-ready EPS and high-resolution PNG assets. We also provide Figma component files for direct product integration.",
    },
    {
      q: "Do you register or trademark the logo design?",
      a: "We provide original, custom-made visual designs and run preliminary search checks. However, formal trademark searches and legal registrations must be handled by your intellectual property legal counsel.",
    },
    {
      q: "Can we update the system ourselves after launch?",
      a: "Absolutely. We design the identity system to be fully modular and document usage rules in an online brand guidelines file. We provide editable Canva or Figma templates so your marketing team can generate assets autonomously.",
    },
  ],
};

export default function BrandIdentityPage() {
  return <ServicePageTemplate data={DATA} />;
}
