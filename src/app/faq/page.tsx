"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { useState } from "react";

const FAQS = [
  {
    num: "01",
    q: "How do you charge for projects?",
    a: "We operate on value-based project pricing or dedicated monthly retainers for long-term partners. No hourly billing. No hidden costs. Every engagement starts with a scoping call and a detailed proposal.",
  },
  {
    num: "02",
    q: "What is your technology stack?",
    a: "Next.js, React, TypeScript, React Native, and robust headless CMS solutions (Sanity, Contentful). For e-commerce: Shopify Hydrogen. We use what is proven, fast, and scalable — not what is trendy.",
  },
  {
    num: "03",
    q: "What is a typical project timeline?",
    a: "Most projects range from 8 to 16 weeks depending on technical complexity. Discovery & Strategy: 2 weeks. Design & Engineering: 4–10 weeks. QA & Launch: 2 weeks. We move faster than traditional agencies.",
  },
  {
    num: "04",
    q: "Do you handle marketing or growth?",
    a: "We focus strictly on product design and engineering. We build the rocket; you fly it. We can, however, recommend world-class marketing and growth partners we have vetted personally.",
  },
  {
    num: "05",
    q: "Can I start with just design?",
    a: "Absolutely. Many clients engage us for design alone before handing off to an internal engineering team. We provide complete Figma files, design system documentation, and handover support.",
  },
  {
    num: "06",
    q: "What happens after launch?",
    a: "Every project includes a 90-day post-launch SLA covering bug fixes and performance monitoring. We also offer ongoing retainers for clients who want continued product development.",
  },
  {
    num: "07",
    q: "Do you work with early-stage startups?",
    a: "Yes. Many of our best projects have been 0→1 builds with pre-seed and seed-stage teams. We understand equity-conscious budgets and can structure engagements accordingly.",
  },
  {
    num: "08",
    q: "How do we get started?",
    a: "Reach out via our contact form or email hello@ninety5.studio. We will schedule a 30-minute discovery call, then send a detailed proposal within 48 hours.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className={styles.page}>

        {/* ── PAGE HERO ── */}
        <div
          style={{
            background: "var(--color-white)",
            borderBottom: "4px solid var(--color-dark)",
            paddingTop: "120px",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          <div className="container" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
            <div className={styles.sectionLabel} style={{ marginBottom: "2rem" }}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>NINETY5.STUDIO · FAQ</span>
            </div>
            <div style={{ borderBottom: "8px solid var(--color-dark)", paddingBottom: "2.5rem", marginBottom: "3rem" }}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--color-dark)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  wordBreak: "break-word",
                }}
              >
                FAQ
              </h1>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "var(--color-brand-blue)",
                maxWidth: "760px",
                lineHeight: 1.45,
                marginBottom: "2rem",
              }}
            >
              Answers to the most common questions about our capabilities and engagement models.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Transparency is a core value. We do not hide our processes or pricing. Below are the most frequently asked questions from prospective clients on how we work, what we charge, and what we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>COMMON QUESTIONS</span>
            </div>
            <h2 className={styles.sectionTitle}>Everything You Need to Know</h2>
            <div className={styles.faqList}>
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.num} className={styles.faqItem}>
                    <button
                      className={`${styles.faqButton} ${isOpen ? styles.faqButtonOpen : ""}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      id={`faq-btn-${faq.num}`}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span className={styles.faqNum}>{faq.num}</span>
                        <span className={styles.faqQuestion}>{faq.q}</span>
                      </div>
                      <div className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>
                    <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                      <p className={styles.faqAnswerText}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Still have questions?</h2>
              <a
                href="/contact"
                className="btn btn-primary"
                id="faq-cta-btn"
                style={{
                  padding: "1.25rem 2.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  boxShadow: "8px 8px 0 var(--color-brand-orange)",
                }}
              >
                Talk to Us ↗
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
