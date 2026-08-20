import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQClient from "./FAQClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design, UI/UX & Web Development FAQ | Ninety5 Studio",
  description:
    "Everything you need to know about Ninety5 Studio: UI/UX product design, investor pitch decks, tech stacks (Next.js/React Native), project pricing, and delivery timelines.",
  keywords: [
    "UI/UX agency FAQ",
    "Product design studio pricing India",
    "Next.js web development agency questions",
    "Pitch deck design turnaround",
    "Design systems agency FAQ",
  ],
  alternates: {
    canonical: "https://ninety5.in/faq",
  },
  openGraph: {
    title: "FAQ & Agency Capabilities | Ninety5 Studio",
    description:
      "Answers to common questions regarding our product design, graphic design, pricing models, tech stack, and 4-phase delivery process.",
    url: "https://ninety5.in/faq",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ninety5.in/faq#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you charge for projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate on value-based project pricing or dedicated monthly retainers for long-term partners. No hourly billing. No hidden costs. Every engagement starts with a scoping call and a detailed proposal."
      }
    },
    {
      "@type": "Question",
      "name": "What is your technology stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Next.js, React, TypeScript, React Native, and robust headless CMS solutions (Sanity, Contentful). For e-commerce: Shopify Hydrogen. We use what is proven, fast, and scalable."
      }
    },
    {
      "@type": "Question",
      "name": "What is a typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most projects range from 8 to 16 weeks depending on technical complexity. Discovery & Strategy: 2 weeks. Design & Engineering: 4–10 weeks. QA & Launch: 2 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can I start with just design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Many clients engage us for design alone before handing off to an internal engineering team. We provide complete Figma files, design system documentation, and handover support."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project includes a 90-day post-launch SLA covering bug fixes and performance monitoring. We also offer ongoing retainers for clients who want continued product development."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with early-stage startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many of our best projects have been 0→1 builds with pre-seed and seed-stage teams. We understand equity-conscious budgets and structure engagements accordingly."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <FAQClient />
      <Footer />
    </>
  );
}

