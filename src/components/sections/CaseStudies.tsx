"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import styles from "./CaseStudies.module.css";

import { PROJECTS } from "@/data/projects";

export default function CaseStudies() {
  const ref = useReveal<HTMLElement>(0.06);

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
          <Link href="/work" className="btn btn-secondary" id="all-work-btn">
            See All Work ↗
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className={`reveal reveal-delay-${(i % 2) + 1} ${styles.card} ${
                p.orange ? styles.cardOrange : ""
              }`}
              id={`project-card-${p.id}`}
            >
              {/* Visual */}
              <div className={styles.cardVisual} style={{ background: p.color }}>
                {p.inHouse && (
                  <span className={`${styles.badgePill} ${p.accent === "#1B4FFF" ? styles.badgePillBlue : ""}`}>
                    {p.badge || "In-House Product"}
                  </span>
                )}
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
                <div 
                  className={styles.metricBadge}
                  aria-label={`${p.metricLabel}: ${p.metric}`}
                >
                  <div className={styles.metricValue}>
                    {p.id === "atlas" || p.id === "forge" ? "↑ " : ""}
                    {p.id === "orbit" ? "⚡ " : ""}
                    {p.metric}
                  </div>
                  <div className={styles.metricLabel}>{p.metricLabel}</div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <span className={styles.cardCat}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginTop: "auto", flexWrap: "wrap" }}>
                  <a
                    href={`/work/${p.id}`}
                    className={styles.cardLink}
                    id={`view-project-${p.id}`}
                  >
                    View case study →
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      style={{ color: "var(--color-brand-orange)", borderColor: "var(--color-brand-orange)" }}
                      id={`launch-app-${p.id}`}
                    >
                      Launch Live App ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
