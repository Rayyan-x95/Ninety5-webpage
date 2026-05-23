"use client";

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
                  href={`/work/${p.id}`}
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
