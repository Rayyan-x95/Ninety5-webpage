"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

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
    sub: "Global client base across US, EU, and Asia.",
    isLink: false,
  },
  {
    label: "Response Time",
    value: "< 24 Hours",
    sub: "We respond to all inquiries within 24 hours with actionable feedback.",
    isLink: false,
  },
];

const BUDGET_OPTIONS = [
  "< ₹2.5L / $3k",
  "₹2.5L – ₹5L / $3k–$6k",
  "₹5L – ₹12L / $6k–$15k",
  "₹12L+ / $15k+",
  "Monthly Retainer",
  "Free Audit Request",
];

const SERVICE_OPTIONS = [
  "Product Design (UX/UI)",
  "Brand Identity",
  "Graphic Design & Collateral",
  "Video Editing & Motion Graphics",
  "Branded Content Creation Suite",
  "Design Systems",
  "Web Development (Next.js)",
  "Mobile Apps (iOS/Android)",
  "UX Research & Audits",
  "Free 48h UX & Speed Audit",
  "Other / Multiple",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const isAudit = searchParams.get("audit") === "true";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className={styles.mainGrid}>

        {/* Left: Info */}
        <div className={styles.infoCol}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>GET IN TOUCH</span>
          </div>
          <h2 className={styles.infoTitle}>Let&apos;s build together.</h2>

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
            <span className={styles.availSub}>Q3 2026</span>
          </div>

          {/* Map & NAP */}
          <div style={{ marginTop: "3rem", border: "4px solid var(--color-dark)", padding: "1.5rem", background: "var(--color-white)", boxShadow: "6px 6px 0 var(--color-dark)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>Office Address</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-dark)", fontWeight: 700, lineHeight: 1.5, marginBottom: "1.5rem" }}>
              Ninety5 Studio • Chennai, India • hello@ninety5.in • +91 63696 12671
            </p>
            <a href="https://maps.google.com/?q=Chennai" target="_blank" rel="noopener noreferrer" style={{ display: "block", border: "2px solid var(--color-dark)", overflow: "hidden", position: "relative", cursor: "pointer" }}>
              <Image src="/chennai_map.png" alt="Map showing Ninety5 Studio location in Chennai" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
              <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "var(--color-dark)", color: "var(--color-white)", padding: "0.25rem 0.5rem", fontFamily: "monospace", fontSize: "0.6rem", fontWeight: 900 }}>
                OPEN IN GOOGLE MAPS ↗
              </div>
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles.formCol}>
          <div className={styles.formHeader}>
            <span className={styles.formHeaderTitle}>{isAudit ? "REQUEST_FREE_AUDIT" : "NEW_PROJECT_INQUIRY"}</span>
            <div className={styles.formHeaderDots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                ✓
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)" }}>
                Message Received.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                We&apos;ll get back to you within 24 hours with clear next steps.
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
                  <select className={styles.formSelect} id="contact-service" required defaultValue={isAudit ? "Free 48h UX & Speed Audit" : (serviceParam || "")}>
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-budget">Budget Range</label>
                  <select className={styles.formSelect} id="contact-budget" defaultValue={isAudit ? "Free Audit Request" : ""}>
                    <option value="" disabled>Select budget</option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-company">Website URL / Project Name</label>
                <input className={styles.formInput} id="contact-company" type="text" placeholder="https://yourcompany.com" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-message">Tell Us About Your Goals *</label>
                <textarea
                  className={styles.formTextarea}
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="What are you building or optimizing? What are your target metrics?"
                />
              </div>

              <button type="submit" className={styles.formSubmit} id="contact-submit-btn">
                {isAudit ? "Claim Free 48h Audit ↗" : "Send Brief ↗"}
              </button>
              <p className={styles.formNote}>
                We respond within 24 hours • 100% confidential
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactClient() {
  return (
    <main className={styles.page} id="main">

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
      <Suspense fallback={<div className="container" style={{ padding: "4rem 0" }}>Loading form...</div>}>
        <ContactFormInner />
      </Suspense>

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
