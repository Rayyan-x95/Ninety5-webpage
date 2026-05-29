import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Process",
  description: "A systematic, battle-tested methodology for delivering exceptional digital products at incredible speed.",
};

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep alignment on business goals, technical constraints, and user needs. We audit everything before writing a single line of code.",
    tags: ["Stakeholder Interviews", "Technical Audit", "Goal Mapping"],
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Defining the architecture, technology stack, and visual direction. We present a clear roadmap with zero hidden surprises.",
    tags: ["Architecture", "Tech Stack", "Visual Direction"],
  },
  {
    num: "03",
    title: "Execution",
    desc: "Sprints of high-fidelity design and rigorous engineering. We work in the open, pushing updates daily so you see the momentum.",
    tags: ["Design Sprints", "Daily Updates", "QA Testing"],
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Flawless launch, post-launch monitoring, and iterative scaling. We treat your launch day as the beginning, not the end.",
    tags: ["Launch Strategy", "Monitoring", "Post-launch SLA"],
  },
  {
    num: "05",
    title: "Growth",
    desc: "Ongoing retainer support, analytics review, and performance optimisation to ensure your product evolves with your users.",
    tags: ["Retainer", "Analytics", "Performance"],
  },
];

const DELIVERABLES = [
  { title: "Discovery Brief", sub: "Full written report" },
  { title: "Tech Architecture", sub: "Stack decisions" },
  { title: "Sprint Schedule", sub: "Week-by-week" },
  { title: "Weekly Demos", sub: "Async video updates" },
  { title: "Post-launch SLA", sub: "90 days support" },
];

export default function ProcessPage() {
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
              <span className={styles.sectionLabelText}>NINETY5.IN · PROCESS</span>
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
                Our Process
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
              A systematic, battle-tested methodology for delivering exceptional products at incredible speed.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Chaos does not scale. Our methodology is a rigidly structured framework designed to eliminate ambiguity, align stakeholders, and ensure that from day one, progress is measurable and tangible. This is how we guarantee delivery.
              </p>
            </div>
          </div>
        </div>

        {/* ── STEP ROWS ── */}
        <section className={styles.stepsSection}>
          <div className="container">
            <div className={styles.stepsHeader}>
              <h2 className={styles.stepsTitle}>The Method</h2>
              <p className={styles.stepsSub}>
                Five phases, zero ambiguity. Every project moves through this framework — no exceptions.
              </p>
            </div>
            <div className={styles.steps}>
              {STEPS.map((s) => (
                <div key={s.num} className={styles.step}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                    <div className={styles.stepTags}>
                      {s.tags.map((tag) => (
                        <span key={tag} className={styles.stepTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className={styles.deliverablesSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>WHAT YOU GET</span>
            </div>
            <h2 className={styles.deliverablesTitle}>Tangible Deliverables</h2>
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
            <div className={styles.ctaStrip}>
              <div>
                <div className={styles.ctaStripTitle}>Ready to start?</div>
                <p className={styles.ctaStripSub}>Let's build something exceptional together.</p>
              </div>
              <a
                href="/contact"
                className="btn btn-secondary"
                id="process-cta-btn"
                style={{ padding: "1.125rem 2.25rem", fontSize: "0.9375rem", fontWeight: 800, boxShadow: "6px 6px 0 var(--color-dark)" }}
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
