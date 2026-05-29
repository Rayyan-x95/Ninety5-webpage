"use client";

import styles from "./page.module.css";
import { useState } from "react";

const INFO_CARDS = [
  {
    label: "Email Us",
    value: "hello@ninety5.in",
    sub: "For project inquiries and general questions.",
    isLink: true,
    href: "mailto:ninety5.designs.95@gmail.com",
  },
  {
    label: "Locations",
    value: "Chennai, India",
    sub: "Global client base across all timezones.",
    isLink: false,
  },
  {
    label: "Response Time",
    value: "< 24 Hours",
    sub: "We respond to all inquiries within one business day with actionable feedback.",
    isLink: false,
  },
];

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

const SERVICE_OPTIONS = [
  "Product Design",
  "Brand Identity",
  "Web Development",
  "Mobile App",
  "Design System",
  "Other",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
              <span className={styles.sectionLabelText}>NINETY5.IN · CONTACT</span>
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
                Contact
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
              Ready to build something extraordinary? Our inbox is always open.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Whether you are a funded startup looking to disrupt an industry or an enterprise modernising a legacy system, we are ready to execute. Reach out with your brief and we will get back to you immediately.
              </p>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="container">
          <div className={styles.mainGrid}>

            {/* Left: Info */}
            <div className={styles.infoCol}>
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>GET IN TOUCH</span>
              </div>
              <h2 className={styles.infoTitle}>Let's build together.</h2>

              <div className={styles.infoCards}>
                {INFO_CARDS.map((c) => (
                  <div key={c.label} className={styles.infoCard}>
                    <span className={styles.infoCardLabel}>{c.label}</span>
                    {c.isLink ? (
                      <a href={c.href} className={styles.infoCardValueLink}>{c.value}</a>
                    ) : (
                      <span className={styles.infoCardValue}>{c.value}</span>
                    )}
                    <span className={styles.infoCardSub}>{c.sub}</span>
                  </div>
                ))}
              </div>

              <div className={styles.availabilityBadge}>
                <span className={styles.availDot} />
                <span className={styles.availText}>Currently Accepting Projects</span>
                <span className={styles.availSub}>Q3 2025</span>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className={styles.formHeaderTitle}>NEW_PROJECT_INQUIRY</span>
                <div className={styles.formHeaderDots}>
                  <span /><span /><span />
                </div>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: "4rem 2.5rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: "var(--color-brand-blue)",
                      border: "4px solid var(--color-dark)",
                      boxShadow: "6px 6px 0 var(--color-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)" }}>
                    Message Received.
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                    We'll get back to you within 24 hours with clear next steps.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-name">Full Name *</label>
                      <input className={styles.formInput} id="contact-name" type="text" required placeholder="Jane Smith" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-email">Email *</label>
                      <input className={styles.formInput} id="contact-email" type="email" required placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-service">Service *</label>
                      <select className={styles.formSelect} id="contact-service" required defaultValue="">
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-budget">Budget Range</label>
                      <select className={styles.formSelect} id="contact-budget" defaultValue="">
                        <option value="" disabled>Select budget</option>
                        {BUDGET_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="contact-company">Company / Project</label>
                    <input className={styles.formInput} id="contact-company" type="text" placeholder="Acme Inc." />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="contact-message">Tell Us About Your Project *</label>
                    <textarea
                      className={styles.formTextarea}
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="What are you building? What's the timeline? What does success look like?"
                    />
                  </div>

                  <button type="submit" className={styles.formSubmit} id="contact-submit-btn">
                    Send Brief ↗
                  </button>
                  <p className={styles.formNote}>
                    // We respond within 24 hours · No spam ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Or email us directly.</h2>
              <a
                href="mailto:ninety5.designs.95@gmail.com"
                className="btn btn-secondary"
                id="contact-email-cta-btn"
                style={{
                  padding: "1.25rem 2.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  boxShadow: "8px 8px 0 var(--color-brand-orange)",
                }}
              >
                hello@ninety5.in ↗
              </a>
            </div>
          </div>
        </section>

      </main>
  );
}
