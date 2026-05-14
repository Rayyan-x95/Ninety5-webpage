"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    id: "faq-1",
    question: "What types of projects does Ninety5 take on?",
    answer:
      "We work on product design, branding, web apps, mobile apps, and design systems — typically for early-stage startups through Series B companies, as well as established brands launching new digital products. Our sweet spot is projects where design and development are both needed.",
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A landing page or brand identity can take 2–4 weeks. A full product design engagement typically runs 6–12 weeks. Development-only projects are scoped individually. We'll give you a precise timeline after our discovery call.",
  },
  {
    id: "faq-3",
    question: "Do you work on a project basis or retainer?",
    answer:
      "Both. We offer fixed-scope project engagements for defined deliverables, and monthly retainers for ongoing design/development support. Retainer clients get priority scheduling and a dedicated team.",
  },
  {
    id: "faq-4",
    question: "What does your design process look like?",
    answer:
      "We follow five phases: Discover → Define → Design → Develop → Ship & Grow. Every phase involves you — you'll have visibility into our Figma files, staging environments, and progress at all times. No surprises.",
  },
  {
    id: "faq-5",
    question: "Do you handle development as well as design?",
    answer:
      "Yes. We're a full-stack studio — our developers and designers work side by side. We build in Next.js, React Native, and Webflow, and we care just as much about clean code as clean UI.",
  },
  {
    id: "faq-6",
    question: "Can you work with our existing design system or codebase?",
    answer:
      "Absolutely. Many clients come to us with existing foundations they want to improve. We audit what's there, identify gaps, and extend or evolve it rather than starting from scratch.",
  },
  {
    id: "faq-7",
    question: "What is your pricing structure?",
    answer:
      "Projects are priced based on scope and timeline. We don't publish rates publicly because every engagement is different — book a call and we'll give you a transparent estimate within 24 hours.",
  },
  {
    id: "faq-8",
    question: "How do we get started?",
    answer:
      "Book a free 30-minute strategy call below. We'll discuss your goals, timeline, and budget — and if we're a good fit, we'll send a proposal within 48 hours. No hard sell, just a genuine conversation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("faq-1");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
                <span className={`${styles.chevron} ${open === faq.id ? styles.chevronOpen : ""}`}>
                  ∨
                </span>
              </button>
              {open === faq.id && (
                <div className={styles.answer}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${styles.cta}`}>
          <div>
            <div className={styles.ctaTitle}>Still have questions?</div>
            <div className={styles.ctaSub}>Book a free 30-min call — no pitch, just answers.</div>
          </div>
          <a href="#contact" className="btn btn-secondary" id="faq-cta-btn"
            style={{ padding: "1.125rem 2.25rem", fontWeight: 800, boxShadow: "6px 6px 0 var(--color-dark)" }}>
            Book a Free Call ↗
          </a>
        </div>

      </div>
    </section>
  );
}
