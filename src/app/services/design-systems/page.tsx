import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "Design Systems",
  description: "Building the infrastructure of design — scalable, token-driven systems that eliminate inconsistency at scale.",
};

const CAPABILITIES = [
  { icon: "⬡", title: "Component Libraries", body: "Every reusable UI element documented with variants, states, and usage guidelines in Figma and code." },
  { icon: "◫", title: "Design Tokens", body: "Centralised colour, spacing, typography, and elevation tokens that keep code and design perfectly in sync.", alt: true },
  { icon: "∞", title: "Documentation", body: "Comprehensive Storybook or Zeroheight documentation so every team member ships with confidence." },
  { icon: "✦", title: "Governance", body: "Contribution frameworks and versioning strategies that prevent your design system from going stale.", alt: true },
];

const DELIVERABLES = [
  { title: "Figma Library", sub: "Full component file" },
  { title: "Token JSON", sub: "Code-ready tokens" },
  { title: "Storybook", sub: "Live component docs" },
  { title: "Style Guide", sub: "Usage guidelines" },
  { title: "Handoff Notes", sub: "Dev annotations" },
];

const PROCESS = [
  { num: "01", title: "Audit", desc: "Existing UI inventory and pattern extraction." },
  { num: "02", title: "Architecture", desc: "Token hierarchy and naming convention design." },
  { num: "03", title: "Build", desc: "Component construction and documentation." },
  { num: "04", title: "Adoption", desc: "Team training and integration support." },
];

export default function DesignSystemsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.IN · SERVICES</span>
            </div>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Design Systems</h1>
            </div>
            <p className={styles.lead}>
              Building the infrastructure of design — scalable, token-driven systems that eliminate inconsistency at scale.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Inconsistency kills products. A well-architected design system is not a luxury — it is the foundation that lets teams ship faster, at higher quality, with zero ambiguity. We build them from the ground up, or we rescue your existing chaos.
              </p>
            </div>
          </div>
        </div>

        <section className={styles.capabilitiesSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>WHAT WE DELIVER</span>
            </div>
            <h2 className={styles.sectionTitle}>Capabilities</h2>
            <div className={styles.capGrid}>
              {CAPABILITIES.map((c) => (
                <div key={c.title} className={`${styles.capCard} ${c.alt ? styles.capCardAlt : ""}`}>
                  <div className={styles.capIcon}>{c.icon}</div>
                  <div className={styles.capTitle}>{c.title}</div>
                  <p className={styles.capBody}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.deliverablesSection}>
          <div className="container">
            <h2 className={styles.deliverablesTitle}>Deliverables</h2>
            <div className={styles.deliverablesList}>
              {DELIVERABLES.map((d) => (
                <div key={d.title} className={styles.deliverableItem}>
                  <div className={styles.deliverableItemTitle}>{d.title}</div>
                  <div className={styles.deliverableItemSub}>{d.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className="container">
            <h2 className={styles.processTitle}>Our Approach</h2>
            <div className={styles.processSteps}>
              {PROCESS.map((s) => (
                <div key={s.num} className={styles.processStep}>
                  <span className={styles.processStepNum}>{s.num}</span>
                  <div className={styles.processStepTitle}>{s.title}</div>
                  <p className={styles.processStepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaStrip}>
              <div>
                <div className={styles.ctaStripTitle}>Eliminate design debt today.</div>
                <p className={styles.ctaStripSub}>A system that scales as fast as you do.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="ds-cta-btn"
                style={{ padding: "1.125rem 2.25rem", fontWeight: 800, boxShadow: "6px 6px 0 var(--color-dark)" }}>
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
