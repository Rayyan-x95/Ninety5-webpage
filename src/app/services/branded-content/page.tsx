import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branded Content Creation Suite | Ninety5 Studio",
  description: "End-to-end branded content engine. High-impact carousels, thought leadership assets, newsletter design, and omni-channel creative.",
};

const DATA: ServicePageData = {
  slug: "branded-content",
  title: "Branded Content Suite",
  lead: "An end-to-end branded content engine designed to build authority, dominate feeds, and generate organic inbound pipeline.",
  bodyText: "Consistent, high-quality content is what separates commodity brands from category leaders. Our Branded Content Creation Suite provides founders, marketing teams, and tech startups with a recurring engine of editorial graphics, LinkedIn thought leadership carousels, newsletter design, and viral social assets — all built strictly on your brand design system.",
  capabilities: [
    { icon: "◩", title: "LinkedIn Carousels & Decks", body: "High-density, beautifully formatted slide carousels that drive hundreds of thousands of organic impressions." },
    { icon: "✦", title: "Newsletter & Editorial Design", body: "Custom email template architectures (Substack, Beehiiv, ConvertKit) with distinctive header illustrations and section dividers.", alt: true },
    { icon: "❖", title: "Visual Data Storytelling", body: "Transforming dry spreadsheets and benchmark statistics into viral infographics and shareable charts." },
    { icon: "⚙", title: "Omni-Channel Content Engine", body: "Turnkey monthly retainers delivering ready-to-publish assets on a predictable weekly cadence.", alt: true },
  ],
  deliverables: [
    { title: "Monthly Content Sprint", sub: "12-24 custom assets" },
    { title: "Carousel Slide Decks", sub: "PDF + PNG bundles" },
    { title: "Newsletter Templates", sub: "Responsive HTML/Figma" },
    { title: "Infographics & Charts", sub: "High-res vector assets" },
    { title: "Content Playbook", sub: "Formatting & tone guidelines" },
  ],
  process: [
    { num: "01", title: "Topic Strategy", desc: "Aligning on monthly core themes, product narratives, and key takeaways." },
    { num: "02", title: "Copy & Visual Pairing", desc: "Distilling hooks, body points, and designing bespoke graphics per slide." },
    { num: "03", title: "Batch Production", desc: "High-velocity weekly sprints delivering complete batches of on-brand content." },
    { num: "04", title: "Performance Review", desc: "Auditing engagement metrics monthly to refine creative templates." },
  ],
  expandedIntro: "We combine agency-level art direction with rapid growth marketing execution to make your brand the most visually recognizable voice in your industry.",
  processDetails: "We work directly with your marketing team or founders in dedicated Slack/Figma channels. Every Monday we align on themes, and by Thursday your complete batch of weekly creative assets is delivered, verified, and ready to schedule.",
  deliverablesDetails: "You receive organized weekly dropboxes containing high-resolution images, multi-slide PDFs for LinkedIn, editable Figma components, and animated GIFs/MP4s.",
  timelineDetails: "Delivered as an ongoing monthly subscription or project-based content packages.",
  outcomesDetails: "Clients experience 4× increases in LinkedIn engagement, higher newsletter subscriber retention, and a steady stream of warm inbound inquiries.",
  caseStudyIds: ["atlas", "orbit"],
  faqs: [
    {
      q: "How does the monthly Branded Content retainer work?",
      a: "You get a dedicated designer and motion artist producing a fixed volume of assets each month (e.g. 4 multi-slide carousels, 8 static graphics, 4 short video clips) delivered weekly.",
    },
    {
      q: "Can you write the content copy or do we need to provide it?",
      a: "We offer both. You can provide raw bullet points or outlines, and our team will refine the copywriting and design the visual presentation simultaneously.",
    },
    {
      q: "How do you ensure the content matches our brand guidelines?",
      a: "Before initiating production, we ingest your brand guidelines, color tokens, and typography into a dedicated Figma design system workspace so every asset is 100% on-brand.",
    },
  ],
};

export default function BrandedContentPage() {
  return <ServicePageTemplate data={DATA} />;
}
