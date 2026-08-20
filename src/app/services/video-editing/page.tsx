import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Editing & Motion Graphics Services | Ninety5 Studio",
  description: "High-retention video editing, motion design, product demos, and viral social cuts engineered for engagement.",
};

const DATA: ServicePageData = {
  slug: "video-editing",
  title: "Video Editing & Motion",
  lead: "High-retention video editing, kinetic typography, and product demos engineered to captivate and convert.",
  bodyText: "Video is the highest-leverage medium for modern brands. We transform raw screen recordings, live footage, and 3D assets into polished product walkthroughs, viral short-form social cuts (Reels, TikTok, Shorts), kinetic brand films, and high-converting paid ad creatives with dynamic sound design and frame-accurate pacing.",
  capabilities: [
    { icon: "▷", title: "Product Launch Videos", body: "Sleek 3D product animations and UI walkthroughs that showcase new features with cinematic polish." },
    { icon: "⚡", title: "High-Retention Shorts", body: "Fast-paced, hook-optimized vertical video edits (9:16) designed for maximum organic reach and algorithmic retention.", alt: true },
    { icon: "◆", title: "Kinetic Typography", body: "Bold motion graphics, typography animations, and subtitle styling that deliver key messages without audio." },
    { icon: "🔊", title: "Sound Design & Grading", body: "Bespoke SFX, audio mastering, and color grading that give every frame a premium, broadcast-grade finish.", alt: true },
  ],
  deliverables: [
    { title: "Master Video Renders", sub: "4K ProRes & MP4" },
    { title: "Multi-Format Cuts", sub: "16:9, 9:16, 1:1, 4:5" },
    { title: "Motion Graphics Package", sub: "Intros, outros, lower thirds" },
    { title: "Subtitled Cutdowns", sub: "Burned-in & SRT files" },
    { title: "Project Archive", sub: "Premiere / After Effects" },
  ],
  process: [
    { num: "01", title: "Script & Storyboard", desc: "Crafting the hook, pacing narrative, and visual timeline for maximum watch time." },
    { num: "02", title: "Assembly & Cut", desc: "Rough cut assembly, selecting the best takes, and establishing rhythm." },
    { num: "03", title: "Motion & SFX", desc: "Adding kinetic graphics, UI callouts, sound effects, and color grading." },
    { num: "04", title: "Multi-Platform Export", desc: "Optimizing aspect ratios, bitrates, and subtitles for YouTube, LinkedIn, and social." },
  ],
  expandedIntro: "We treat video editing as an engineering problem where every frame and millisecond of pacing is calibrated to minimize drop-off and maximize audience retention.",
  processDetails: "Whether you provide raw recordings or need full script-to-screen production, we handle narrative structuring, motion design, visual effects, and sound design with extreme turnaround speed.",
  deliverablesDetails: "We deliver full-resolution master exports (4K/1080p in 60fps), platform-optimized cutdowns (16:9 for YouTube/Web, 9:16 for TikTok/Reels/Shorts, 1:1 for LinkedIn), separate SRT subtitle files, and open project archives.",
  timelineDetails: "Single video projects turn around in 3 to 5 business days; monthly content retainer packages provide ongoing weekly delivery.",
  outcomesDetails: "Clients see up to 3× higher video completion rates, enhanced organic impressions across social channels, and increased conversion on landing page video embeds.",
  caseStudyIds: ["bloom", "orbit"],
  faqs: [
    {
      q: "What types of video do you edit?",
      a: "We edit product demo videos, SaaS feature announcements, founder explainers, high-retention short-form clips (Reels/Shorts/TikTok), YouTube long-form content, and paid video ad creatives.",
    },
    {
      q: "Do you handle sound design and motion graphics?",
      a: "Yes. Every video includes custom sound design (whooshes, risers, UI clicks, ambient tracks), professional audio mixing, color correction, and bespoke motion graphics.",
    },
    {
      q: "Can you turn a long podcast or webinar into short viral clips?",
      a: "Yes. We offer repurposing pipelines where we take 60-minute webinars or podcast episodes and extract 5 to 10 high-impact, hook-optimized short-form clips with animated captions.",
    },
  ],
};

export default function VideoEditingPage() {
  return <ServicePageTemplate data={DATA} />;
}
