import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Research & Usability Auditing Services | Ninety5 Studio",
  description: "Replacing intuition with empirical data via user interviews, cognitive walkthroughs, and quantitative conversion audits.",
};

const DATA: ServicePageData = {
  slug: "ux-research",
  title: "UX Research",
  lead: "Uncovering empirical user insights to replace assumptions with validation data.",
  bodyText: "Designing without research is just guessing. We run qualitative user interviews, usability audits, heuristic analysis, and quantitative A/B testing to understand your users' mental models. We deliver clear, actionable reports that drive your product strategy and design decisions.",
  capabilities: [
    { icon: "▦", title: "User Interviews", body: "One-on-one sessions with your target audience to identify true pain points and motivations." },
    { icon: "◎", title: "Usability Audits", body: "Evaluating current systems against industry heuristics to pinpoint design friction.", alt: true },
    { icon: "⬡", title: "Data Analytics", body: "Synthesizing event logs, heatmaps, and funnel analytics to see where users drop off." },
    { icon: "◫", title: "A/B Testing", body: "Designing and executing scientific layout tests to measure and validate conversion lift.", alt: true },
  ],
  deliverables: [
    { title: "Research Summary", sub: "Executive insights" },
    { title: "User Archetypes", sub: "Detailed personas" },
    { title: "Journey Maps", sub: "Visual touchpoints" },
    { title: "Friction Audit", sub: "Problem catalog" },
    { title: "Strategy Brief", sub: "Prioritized roadmap" },
  ],
  process: [
    { num: "01", title: "Framing", desc: "Defining research goals, hypotheses, and user profiles." },
    { num: "02", title: "Recruiting", desc: "Sourcing and vetting relevant participants for interviews." },
    { num: "03", title: "Execution", desc: "Running usability testing, interviews, and audits." },
    { num: "04", title: "Analysis", desc: "Synthesizing qualitative and quantitative data." },
  ],
  expandedIntro: "Product success is determined by how well it fits into a user's habits. By analyzing user behavior under test scenarios, we remove subjective opinions from design debates, ensuring your product budget is spent on features that deliver value.",
  processDetails: "We combine qualitative testing with quantitative data. We conduct live, recorded user interviews and watch users interact with prototypes. Concurrently, we audit web analytics and heatmaps to identify high-friction points, summarizing findings in a prioritized roadmap.",
  deliverablesDetails: "You receive recorded user testing videos, written transcripts, interactive journey maps, distinct customer personas, and a comprehensive research document outlining immediately actionable UI and layout changes.",
  timelineDetails: "A research and usability audit phase typically takes 3 to 5 weeks from cohort recruiting to final report.",
  outcomesDetails: "Teams gain a clear understanding of user needs, product-market fit metrics, and a prioritized features list that prevents building unwanted layouts.",
  caseStudyIds: ["bloom", "atlas"],
  faqs: [
    {
      q: "How do you recruit test participants?",
      a: "We recruit participants based on your exact user profile using dedicated panels. We vet candidates for demographics, tech-savviness, and habits to ensure the feedback matches your target audience.",
    },
    {
      q: "Can you audit an existing live product?",
      a: "Yes. We perform comprehensive heuristic reviews and look at your current analytics data (like hotjar or mixpanel) to show exactly where your users are running into trouble and dropping off.",
    },
    {
      q: "How do you share research findings?",
      a: "We deliver findings as a structured PDF/notion report, with video clips of users facing bugs or friction points, followed by a live presentation with your design and engineering teams.",
    },
  ],
};

export default function UxResearchPage() {
  return <ServicePageTemplate data={DATA} />;
}
