"use client";

import { useEffect, useRef } from "react";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep listening — understanding your users, business goals, and competitive landscape before touching a single frame.",
    tags: ["User research", "Stakeholder interviews", "Competitor audit"],
  },
  {
    num: "02",
    title: "Define",
    desc: "We map the problem space, define success metrics, and create a clear product strategy so every decision is evidence-grounded.",
    tags: ["Jobs-to-be-done", "Info architecture", "Product strategy"],
  },
  {
    num: "03",
    title: "Design",
    desc: "Rapid ideation, wireframes, high-fidelity UI, motion specs, and a scalable design system — obsessive attention to detail.",
    tags: ["Wireframes", "Design system", "Prototyping"],
  },
  {
    num: "04",
    title: "Develop",
    desc: "We build with clean, typed code — Next.js, React Native, or Webflow — using the same quality standards as top-tier teams.",
    tags: ["Next.js", "React Native", "TypeScript"],
  },
  {
    num: "05",
    title: "Ship & Grow",
    desc: "Launch is just the beginning. We track real user data, iterate rapidly, and help your product evolve alongside its users.",
    tags: ["Analytics", "A/B testing", "Iteration"],
  },
];

export default function ProcessSection() {
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
    <section ref={ref} className={styles.section} id="process">
      <div className="container">

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>HOW WE WORK</span>
            </div>
            <h2 className={styles.title}>Our Process,{"\n"}Demystified.</h2>
          </div>
          <p className={styles.sub}>
            No black-box design. You&apos;re involved at every stage — so the
            final product is exactly what you envisioned, plus the parts you
            didn&apos;t know you needed.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${(i % 3) + 1} ${styles.step}`}
              id={`process-step-${step.num}`}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
              <div className={styles.stepTags}>
                {step.tags.map((t) => (
                  <span key={t} className={styles.stepTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${styles.ctaStrip}`}>
          <div>
            <div className={styles.ctaTitle}>Ready to start?</div>
            <div className={styles.ctaSub}>Let&apos;s talk in a free 30-min strategy call.</div>
          </div>
          <a href="#contact" className="btn btn-secondary" id="process-cta-btn"
            style={{ padding: "1.125rem 2.25rem", fontWeight: 800, boxShadow: "6px 6px 0 var(--color-dark)" }}>
            Book a Free Call ↗
          </a>
        </div>

      </div>
    </section>
  );
}
