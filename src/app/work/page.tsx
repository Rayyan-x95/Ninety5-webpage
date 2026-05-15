"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { useState } from "react";

import { PROJECTS } from "@/data/projects";

const DELIVERABLES = [
  { title: "Case Studies", sub: "Full write-ups" },
  { title: "Live Links", sub: "Deployed products" },
  { title: "Metrics", sub: "Measurable outcomes" },
  { title: "References", sub: "Client contacts" },
  { title: "Archives", sub: "Design files" },
];

export default function WorkPage() {
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
              <span className={styles.sectionLabelText}>NINETY5.STUDIO · WORK</span>
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
                Selected Work
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
              A curated archive of our most impactful digital products and brand systems.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Talk is cheap. Execution is everything. Below is a curated selection of our finest work — from complex enterprise software to highly disruptive consumer branding. We let the portfolio do the heavy lifting.
              </p>
            </div>
          </div>
        </div>

        {/* ── PROJECT GRID ── */}
        <section className={styles.projectsSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>CASE STUDIES</span>
            </div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectGrid}>
              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className={`${styles.projectCard} ${i % 2 !== 0 ? styles.projectCardAlt : ""}`}
                >
                  <div className={styles.projectVisual} style={{ background: p.color }}>
                    <span className={styles.projectNum}>0{i + 1}</span>
                    <div className={styles.projectMetric}>
                      <span className={styles.projectMetricVal}>{p.metric}</span>
                      <span className={styles.projectMetricLabel}>{p.metricLabel}</span>
                    </div>
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectTags}>
                      <span className={styles.projectTag}>{p.category}</span>
                      <span className={`${styles.projectTag} ${styles.projectTagBlue}`}>Built in {p.year}</span>
                    </div>
                    <h3 className={styles.projectTitle}>{p.title}</h3>
                    <p className={styles.projectDesc}>{p.description}</p>
                    <a href={`/work/${p.id}`} className={styles.projectLink}>
                      View Case Study ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className={styles.deliverablesSection}>
          <div className="container">
            <h2 className={styles.deliverablesTitle}>What You Get</h2>
            <div className={styles.deliverablesGrid}>
              {DELIVERABLES.map((d) => (
                <div key={d.title} className={styles.deliverableItem}>
                  <div className={styles.deliverableItemTitle}>{d.title}</div>
                  <div className={styles.deliverableItemSub}>{d.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Ready to dominate?</h2>
              <a
                href="/contact"
                className="btn btn-primary"
                id="work-cta-btn"
                style={{
                  padding: "1.25rem 2.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  boxShadow: "8px 8px 0 var(--color-brand-orange)",
                }}
              >
                Start a Project ↗
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
