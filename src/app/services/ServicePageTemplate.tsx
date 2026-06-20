"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/projects";
import styles from "./ServicePage.module.css";

export interface ServicePageData {
  slug: string;
  title: string;
  lead: string;
  bodyText: string;
  capabilities: { icon: string; title: string; body: string; alt?: boolean }[];
  deliverables: { title: string; sub: string }[];
  process: { num: string; title: string; desc: string }[];
  
  // Expanded sections (300-500 words total across these sections)
  expandedIntro: string;
  processDetails: string;
  deliverablesDetails: string;
  timelineDetails: string;
  outcomesDetails: string;
  
  // Case Studies
  caseStudyIds: string[];
  
  // FAQs
  faqs: { q: string; a: string }[];
}

interface Props {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get matching case studies from PROJECTS
  const caseStudies = PROJECTS.filter((p) => data.caseStudyIds.includes(p.id));

  // Build FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className={styles.page} id="main">
        {/* HERO */}
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.IN · SERVICES</span>
            </div>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>{data.title}</h1>
            </div>
            <p className={styles.lead}>{data.lead}</p>
            <div className={styles.body}>
              <p className={styles.bodyText}>{data.bodyText}</p>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <section className={styles.capabilitiesSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>WHAT WE DELIVER</span>
            </div>
            <h2 className={styles.sectionTitle}>Capabilities</h2>
            <div className={styles.capGrid}>
              {data.capabilities.map((c) => (
                <div key={c.title} className={`${styles.capCard} ${c.alt ? styles.capCardAlt : ""}`}>
                  <div className={styles.capIcon}>{c.icon}</div>
                  <div className={styles.capTitle}>{c.title}</div>
                  <p className={styles.capBody}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPANDED CONTENT (300-500 words description) */}
        <section style={{ padding: "5rem 0", borderBottom: "4px solid var(--color-dark)", backgroundColor: "var(--color-white)" }}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>DEEP DIVE</span>
            </div>
            <h2 className={styles.sectionTitle}>How We Execute</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", marginTop: "3rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-brand-blue)", lineHeight: 1.5, marginBottom: "2rem" }}>
                  {data.expandedIntro}
                </p>
                <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Typical Timeline</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{data.timelineDetails}</p>
                </div>
                <div style={{ borderLeft: "4px solid var(--color-brand-blue)", paddingLeft: "1.5rem" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Expected Outcomes</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{data.outcomesDetails}</p>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem", color: "var(--color-dark)" }}>The Engagement Process</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>{data.processDetails}</p>
                </div>
                <div style={{ borderTop: "2px solid var(--color-border)", paddingTop: "2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem", color: "var(--color-dark)" }}>Deliverables & Standards</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>{data.deliverablesDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES LIST */}
        <section className={styles.deliverablesSection}>
          <div className="container">
            <h2 className={styles.deliverablesTitle}>Deliverables Checklist</h2>
            <div className={styles.deliverablesList}>
              {data.deliverables.map((d) => (
                <div key={d.title} className={styles.deliverableItem}>
                  <div className={styles.deliverableItemTitle}>{d.title}</div>
                  <div className={styles.deliverableItemSub}>{d.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH / STEPS */}
        <section className={styles.processSection}>
          <div className="container">
            <h2 className={styles.processTitle}>Our Approach</h2>
            <div className={styles.processSteps}>
              {data.process.map((s) => (
                <div key={s.num} className={styles.processStep}>
                  <span className={styles.processStepNum}>{s.num}</span>
                  <div className={styles.processStepTitle}>{s.title}</div>
                  <p className={styles.processStepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBEDDED CASE STUDIES */}
        {caseStudies.length > 0 && (
          <section className={styles.caseStudiesSection}>
            <div className="container">
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>PROOF OF WORK</span>
              </div>
              <h2 className={styles.sectionTitle}>Featured Case Studies</h2>
              <div className={styles.caseGrid}>
                {caseStudies.map((p) => (
                  <article key={p.id} className={styles.caseCard}>
                    <div className={styles.caseCardVisual} style={{ background: p.color }}>
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          padding: "1.5rem",
                          gap: "0.5rem",
                        }}
                      >
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            style={{
                              height: j === 0 ? "10px" : "6px",
                              width: `${55 + (j % 3) * 25}%`,
                              background: p.accent,
                              opacity: 0.15 + j * 0.1,
                            }}
                          />
                        ))}
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", marginTop: "0.5rem", background: p.accent }} />
                      </div>
                      <div className={styles.caseMetricBadge} aria-label={`${p.metricLabel}: ${p.metric}`}>
                        <div className={styles.caseMetricValue}>
                          {p.id === "atlas" || p.id === "forge" ? "↑ " : ""}
                          {p.id === "orbit" ? "⚡ " : ""}
                          {p.metric}
                        </div>
                        <div className={styles.caseMetricLabel}>{p.metricLabel}</div>
                      </div>
                    </div>
                    <div className={styles.caseCardBody}>
                      <span className={styles.caseCardCat}>{p.category}</span>
                      <h3 className={styles.caseCardTitle}>{p.title}</h3>
                      <p className={styles.caseCardDesc}>{p.description}</p>
                      <a href={`/work/${p.id}`} className={styles.caseCardLink}>
                        View Case Study →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>FAQ</span>
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {data.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={styles.faqItem}>
                    <button
                      className={`${styles.faqButton} ${isOpen ? styles.faqButtonOpen : ""}`}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span className={styles.faqNum}>0{i + 1}</span>
                        <span className={styles.faqQuestion}>{faq.q}</span>
                      </div>
                      <div className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>
                    <div className={styles.faqAnswer} style={{ maxHeight: isOpen ? "300px" : "0px", paddingBottom: isOpen ? "2rem" : "0px", paddingLeft: isOpen ? "1rem" : "0px" }}>
                      <p className={styles.faqAnswerText} style={{ paddingLeft: "2.5rem" }}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaStrip}>
              <div>
                <div className={styles.ctaStripTitle}>Optimise Your Digital Product</div>
                <p className={styles.ctaStripSub}>Get in touch for a comprehensive audit of your existing system.</p>
              </div>
              <a
                href={`/contact?service=${data.slug}&audit=true`}
                className="btn btn-secondary"
                style={{
                  padding: "1.125rem 2.25rem",
                  fontWeight: 800,
                  boxShadow: "6px 6px 0 var(--color-dark)",
                }}
              >
                Get a free audit ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
