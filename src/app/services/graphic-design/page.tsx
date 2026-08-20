import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design & Pitch Deck Agency | Ninety5 Studio",
  description:
    "Bold, aggressive, statement-making graphic design studio. High-converting investor pitch decks, marketing collateral kits, packaging design, and 3D brand visuals for ambitious tech startups.",
  keywords: [
    "Graphic design studio India",
    "Investor pitch deck design agency",
    "Fundraising slide deck designer",
    "Brand collateral design services",
    "B2B SaaS marketing graphic design",
    "Packaging and print design India",
    "Infographic and data visualization design",
    "Series A pitch deck design agency",
    "Chennai graphic design collective",
  ],
  alternates: {
    canonical: "https://ninety5.in/services/graphic-design",
  },
  openGraph: {
    title: "Graphic Design & Investor Pitch Deck Studio | Ninety5",
    description:
      "We design aggressive, statement-making brand collateral, investor pitch decks, packaging, and high-converting marketing assets for tech startups.",
    url: "https://ninety5.in/services/graphic-design",
    type: "website",
  },
};

const DATA: ServicePageData = {
  slug: "graphic-design",
  title: "Graphic Design",
  lead: "Bold, aggressive, statement-making graphic design that cuts through digital noise, accelerates fundraising, and commands market attention.",
  bodyText: "In an ecosystem saturated with generic Canva templates, real brand authority demands bespoke visual craftsmanship. Ninety5 Studio creates high-stakes investor pitch decks, omni-channel marketing collateral, print & packaging systems, and vector infographics engineered with neo-brutalist precision, fearless typographic contrast, and relentless execution velocity.",
  capabilities: [
    { icon: "▲", title: "Investor Pitch Decks", body: "Visually commanding, data-dense fundraising presentations that help startup founders close angel to Series B rounds.", alt: true },
    { icon: "✦", title: "Marketing Collateral Kits", body: "High-impact social media assets, multi-ratio campaign key visuals, whitepapers, and display ads that double CTR." },
    { icon: "📦", title: "Packaging & Print Systems", body: "Physical merchandise, editorial lookbooks, product boxes, and tactile print collateral with custom finishes." },
    { icon: "❖", title: "3D & Vector Infographics", body: "Custom iconography sets, technical architecture diagrams, and 3D visual assets that elevate perceived market value.", alt: true },
  ],
  deliverables: [
    { title: "Investor Pitch Deck", sub: "Figma + PDF + PowerPoint" },
    { title: "Key Visuals Campaign Kit", sub: "1:1, 4:5, 16:9, 9:16 exports" },
    { title: "Brand Collateral Suite", sub: "Vector SVG, AI, EPS, PDF" },
    { title: "Print & Packaging Files", sub: "CMYK with custom bleeds" },
    { title: "Editable Social Templates", sub: "Component-based Figma kits" },
  ],
  process: [
    { num: "01", title: "Creative Brief & Strategy", desc: "Auditing audience psychographics, positioning tone, and fundraising/marketing goals." },
    { num: "02", title: "Visual Direction Exploration", desc: "Moodboarding 2 distinct art directions with typographic hierarchy and color contrasts." },
    { num: "03", title: "High-Velocity Asset Production", desc: "Rapid design sprints across all requested dimensions, pitch slides, and collateral." },
    { num: "04", title: "Handoff & Asset Ecosystem", desc: "Organized export bundles, vector source files, and usage rules for internal teams." },
  ],
  expandedIntro: "Graphic design at Ninety5 Studio is treated as an offensive brand weapon. We combine bold typographic hierarchy, high-contrast layouts, and bespoke visual assets to ensure your company never blends into the background.",
  processDetails: "We start by analyzing your brand positioning, target demographics, and fundraising stage. We explore moodboards and typographic treatments, then move rapidly into producing key visuals, pitch decks, and marketing assets. Weekly review rounds ensure rapid iteration with zero communication lag.",
  deliverablesDetails: "You receive organized, production-ready vector assets (SVG, AI, EPS), print-ready files (CMYK with bleed marks and spot colors), and editable templates in Figma and Canva for your internal growth team.",
  timelineDetails: "Typical graphic design and pitch deck engagements range from 1 to 3 weeks, with express turnaround options available for active fundraising rounds.",
  outcomesDetails: "Clients achieve up to 3.2× higher ad engagement rates, significant investor response increases on pitch decks, and an unmistakable visual market presence.",
  caseStudyIds: ["ujrat", "titan", "forge"],
  relatedPosts: [
    {
      title: "The ROI of High-Impact Graphic Design and Pitch Decks for Tech Startups",
      slug: "roi-graphic-design-pitch-decks-startups",
      readTime: "6 min read"
    },
    {
      title: "Brand Identity Designer Chennai: What to Look For in 2026",
      slug: "brand-identity-designer-chennai-what-to-look-for",
      readTime: "5 min read"
    }
  ],
  faqs: [
    {
      q: "What design file formats does Ninety5 deliver?",
      a: "We deliver full vector source files (Figma, Adobe Illustrator, EPS), high-resolution web assets (SVG, WebP, PNG @2x/3x), and print-ready PDFs with crop marks, bleeds, and CMYK color profiles.",
    },
    {
      q: "How fast can you design an investor pitch deck?",
      a: "Our standard pitch deck design sprint takes 7 to 10 business days, with rush delivery available in under 5 business days for active fundraising rounds.",
    },
    {
      q: "Do you provide editable templates for internal marketing teams?",
      a: "Yes. We build modular, locked-down templates in Figma and Canva with predefined brand guidelines, ensuring your team can generate new on-brand assets effortlessly.",
    },
    {
      q: "Can you handle physical print collateral and packaging?",
      a: "Yes. We prepare full pre-press print packaging, custom die-lines, editorial books, conference booth banners, and swag apparel specifications ready for commercial manufacturing.",
    },
  ],
};

export default function GraphicDesignPage() {
  return <ServicePageTemplate data={DATA} />;
}

