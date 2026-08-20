"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    id: "faq-1",
    question: "What types of projects does Ninety5 take on?",
    answer:
      "Ninety5 designs and builds B2B SaaS dashboards, web applications, mobile apps, and design systems for early-stage startups to Series B companies. Our sweet spot is full-stack projects requiring both tokenized Figma design and Next.js engineering.",
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer:
      "Landing pages and brand systems take 2–4 weeks. Full-scale product design or MVP development runs 6–10 weeks. Retainer engagements provide continuous sprint velocity with weekly production releases.",
  },
  {
    id: "faq-3",
    question: "Do you work on a project basis or retainer?",
    answer:
      "Both. We offer fixed-scope project engagements for clearly defined milestones and monthly retainers for ongoing feature design, design system maintenance, and frontend engineering support.",
  },
  {
    id: "faq-4",
    question: "What does your design process look like?",
    answer:
      "We follow a 5-step methodology: Discover → Strategy → Figma Token Design → Next.js Development → Deploy & Scale. Clients have 24/7 visibility into Figma workspaces, staging previews, and weekly Loom demos.",
  },
  {
    id: "faq-5",
    question: "Do you handle development as well as design?",
    answer:
      "Yes. Ninety5 is a full-stack collective. We engineer production-ready web and mobile apps in Next.js, React Native, TypeScript, and Tailwind CSS, guaranteeing sub-second Core Web Vitals and zero layout shift.",
  },
  {
    id: "faq-6",
    question: "Can you work with our existing codebase or Figma files?",
    answer:
      "Yes. We frequently audit existing codebases and Figma files, refactor inconsistent components into unified token systems, and eliminate front-end technical debt without requiring a full rewrite from scratch.",
  },
  {
    id: "faq-7",
    question: "What is your pricing structure?",
    answer:
      "Project engagements range from ₹2.5L to ₹12L ($3,000 to $15,000) depending on screen count and complexity. Retainers are billed monthly with dedicated senior hours. Proposals are delivered within 48 hours.",
  },
  {
    id: "faq-8",
    question: "How do we get started?",
    answer:
      "Submit your project brief at ninety5.in/contact or request a Free 48-Hour UX Audit. We review your goals and schedule a 30-minute discovery call within 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("faq-1");
  const ref = useReveal<HTMLElement>(0.06);

  return (
    <section ref={ref} className={styles.section} id="faq">
      <div className="container">

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>FREQUENTLY ASKED</span>
            </div>
            <h2 className={styles.title}>Questions We{"\n"}Get Asked a Lot.</h2>
          </div>
          <p className={styles.sub}>
            Still have questions? Book a free call and we&apos;ll answer
            anything — no pitch, no pressure.
          </p>
        </div>

        {/* Accordion */}
        <div className={`reveal ${styles.list}`}>
          {FAQS.map((faq, i) => (
            <div key={faq.id} className={styles.item}>
              <button
                className={`${styles.question} ${open === faq.id ? styles.questionOpen : ""}`}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                aria-expanded={open === faq.id}
                id={faq.id}
              >
                <div className={styles.questionLeft}>
                  <span className={styles.questionNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.questionText}>{faq.question}</span>
                </div>
                <span
                  className={`${styles.chevron} ${open === faq.id ? styles.chevronOpen : ""}`}
                  aria-hidden="true"
                >
                  ∨
                </span>
              </button>
              <div className={`${styles.answer} ${open === faq.id ? styles.answerOpen : ""}`}>
                <p className={styles.answerText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${styles.cta}`}>
          <div>
            <div className={styles.ctaTitle}>Still have questions?</div>
            <div className={styles.ctaSub}>Book a free 30-min call — no pitch, just answers.</div>
          </div>
          <a href="#contact" className="btn btn-secondary btn-large" id="faq-cta-btn">
            Book a Free Call ↗
          </a>
        </div>

      </div>
    </section>
  );
}
