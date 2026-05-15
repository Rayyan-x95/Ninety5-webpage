import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "UX Research",
  description: "Data-driven user research that eliminates guesswork and de-risks every product decision.",
};

const CAPABILITIES = [
  { icon: "◎", title: "User Interviews", body: "Structured 1:1 sessions with real users to uncover unmet needs, mental models, and pain points your analytics will never reveal." },
  { icon: "⬡", title: "Usability Testing", body: "Task-based sessions that expose friction in your current experience and validate new designs before a single line is committed.", alt: true },
  { icon: "◫", title: "Analytics Audit", body: "Deep-dive into your Mixpanel, Amplitude, or GA4 data to identify conversion killers and behavioural patterns." },
  { icon: "∞", title: "Journey Mapping", body: "End-to-end visualisations of how users interact with your product, surfacing moments of delight and moments of abandonment.", alt: true },
];

const DELIVERABLES = [
  { title: "Research Report", sub: "Insights + recommendations" },
  { title: "Persona Documents", sub: "3–5 user archetypes" },
  { title: "Journey Maps", sub: "Full visualisations" },
  { title: "Usability Report", sub: "Issue severity ratings" },
  { title: "Priority Matrix", sub: "Actionable next steps" },
];

const PROCESS = [
  { num: "01", title: "Planning", desc: "Research questions, methodology selection, and recruitment." },
  { num: "02", title: "Fieldwork", desc: "Interviews, surveys, and usability sessions." },
  { num: "03", title: "Analysis", desc: "Affinity mapping, thematic analysis, and synthesis." },
  { num: "04", title: "Readout", desc: "Strategic recommendations and priority roadmap." },
];

export default function UXResearchPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.STUDIO · SERVICES</span>
            </div>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>UX Research</h1>
            </div>
            <p className={styles.lead}>
              Data-driven user research that eliminates guesswork and de-risks every product decision.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Building on assumptions is the fastest path to a product nobody uses. Our research practice combines qualitative depth with quantitative rigour to give you an unfair advantage — before your competitors know what hit them.
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
                <div className={styles.ctaStripTitle}>Know your users. Build with certainty.</div>
                <p className={styles.ctaStripSub}>Research-backed decisions that eliminate expensive mistakes.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="ux-cta-btn"
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
