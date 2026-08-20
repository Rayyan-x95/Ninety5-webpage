import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "About",
  description: "Ninety5 is a brutalist design and engineering collective. We deliver high-performance digital products with raw execution and extreme velocity.",
};

const CAPABILITIES = [
  {
    num: "400+",
    title: "Designs Delivered",
    body: "From complex enterprise software to disruptive consumer branding — every pixel deliberate, every interaction purposeful.",
    alt: false,
  },
  {
    num: "100+",
    title: "Global Clients",
    body: "Operating out of Chennai, with a worldwide client base spanning fintech, SaaS, e-commerce, and more.",
    alt: true,
  },
  {
    num: "2023",
    title: "Founded",
    body: "Mohammed Rayyan established Ninety5 with a vision to strip away the unnecessary and build digital experiences with raw, unapologetic impact.",
    alt: false,
  },
  {
    num: "24h",
    title: "Response Time",
    body: "We typically respond to all inquiries within 24 hours with actionable feedback — no waiting, no ambiguity.",
    alt: true,
  },
];

const VALUES = [
  { num: "01", title: "Integrity", tag: "Non-negotiable" },
  { num: "02", title: "Velocity", tag: "Ship fast, iterate faster" },
  { num: "03", title: "Excellence", tag: "No compromises" },
  { num: "04", title: "Transparency", tag: "Radical honesty" },
  { num: "05", title: "Impact", tag: "Results that matter" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
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
            {/* Eyebrow */}
            <div className={styles.sectionLabel} style={{ marginBottom: "2rem" }}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>NINETY5.IN · ABOUT</span>
            </div>
            {/* Title */}
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
                About Us
              </h1>
            </div>
            {/* Lead */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "var(--color-dark)",
                maxWidth: "760px",
                lineHeight: 1.45,
                marginBottom: "2rem",
              }}
            >
              Ninety5 is a brutalist design and engineering collective founded in 2023 by Mohammed Rayyan.
            </p>
            {/* Body */}
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Founded by{" "}
                <a
                  href="https://rayyan.ninety5.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-brand-blue)", textDecoration: "underline", fontWeight: 800 }}
                >
                  Mohammed Rayyan
                </a>{" "}
                in 2023, Ninety5 has delivered 400+ designs to over 100+ clients globally. We are not a traditional agency. Traditional agencies are bloated, slow, and overly diplomatic. We are a collective of senior operators who believe in raw execution, high standards, and extreme velocity. We build products that disrupt industries.
              </p>
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES GRID ── */}
        <section className={styles.capabilitiesSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>BY THE NUMBERS</span>
            </div>
            <h2 className={styles.sectionTitle}>What We&apos;ve Built</h2>
            <div className={styles.cardGrid}>
              {CAPABILITIES.map((c) => (
                <div key={c.title} className={`${styles.card} ${c.alt ? styles.cardAlt : ""}`}>
                  <div className={styles.cardNum}>{c.num}</div>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <p className={styles.cardBody}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.valuesHeader}>
              <h2 className={styles.valuesSectionTitle}>Our Values</h2>
              <p className={styles.valuesSub}>
                We value execution over talk. We ship fast, iterate relentlessly, and demand absolute excellence.
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {VALUES.map((v) => (
                <div key={v.num} className={styles.valueItem}>
                  <span className={styles.valueItemNum}>{v.num}</span>
                  <div className={styles.valueItemTitle}>{v.title}</div>
                  <span className={styles.valueItemTag}>{v.tag}</span>
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
                id="about-cta-btn"
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
