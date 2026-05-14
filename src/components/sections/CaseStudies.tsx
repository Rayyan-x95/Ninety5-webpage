"use client";

import { useEffect, useRef } from "react";
import styles from "./CaseStudies.module.css";

const PROJECTS = [
  {
    id: "atlas",
    category: "SaaS Platform",
    title: "Atlas — B2B Analytics Dashboard",
    description: "End-to-end product design for a data analytics platform serving 200+ enterprise clients.",
    metric: "+280%",
    metricLabel: "User retention",
    color: "#0C0C0A",
    accent: "#1B4FFF",
    span: "large",
  },
  {
    id: "bloom",
    category: "Mobile App",
    title: "Bloom — Wellness App",
    description: "Holistic wellness app with personalised AI coaching. Shipped from 0 to 50k users in 3 months.",
    metric: "4.9 ★",
    metricLabel: "App Store rating",
    color: "#0A1628",
    accent: "#60A5FA",
    span: "small",
    orange: true,
  },
  {
    id: "forge",
    category: "Brand Identity",
    title: "Forge — Developer Tools",
    description: "Complete brand overhaul for an open-source developer toolchain with 80k+ GitHub stars.",
    metric: "3.2×",
    metricLabel: "Conversion uplift",
    color: "#1A0828",
    accent: "#A78BFA",
    span: "small",
  },
  {
    id: "orbit",
    category: "Web App",
    title: "Orbit — Project Management",
    description: "A modular project management suite built for async, remote-first engineering teams.",
    metric: "2.1s",
    metricLabel: "Core Web Vitals",
    color: "#0A1A10",
    accent: "#34D399",
    span: "large",
    orange: true,
  },
];

export default function CaseStudies() {
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
    <section ref={ref} className={styles.section} id="work">
      <div className="container">

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>SELECTED WORK</span>
            </div>
            <h2 className={styles.title}>Products We&apos;ve Shipped</h2>
          </div>
          <a href="/work" className="btn btn-secondary" id="all-work-btn">
            See All Work ↗
          </a>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className={`reveal reveal-delay-${(i % 3) + 1} ${styles.card} ${
                p.span === "large" ? styles.cardLarge : styles.cardSmall
              } ${p.orange ? styles.cardOrange : ""}`}
              id={`project-card-${p.id}`}
            >
              {/* Visual */}
              <div className={styles.cardVisual} style={{ background: p.color }}>
                <div className={styles.mockupContent}>
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className={styles.mockupLine}
                      style={{
                        width: `${55 + (j % 3) * 25}%`,
                        background: p.accent,
                        opacity: 0.15 + j * 0.1,
                        height: j === 0 ? "10px" : "6px",
                      }}
                    />
                  ))}
                  <div className={styles.mockupDot} style={{ background: p.accent }} />
                </div>
                <div className={styles.metricBadge}>
                  <div className={styles.metricValue}>{p.metric}</div>
                  <div className={styles.metricLabel}>{p.metricLabel}</div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <span className={styles.cardCat}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <a
                  href="/work"
                  className={styles.cardLink}
                  id={`view-project-${p.id}`}
                >
                  View case study →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
