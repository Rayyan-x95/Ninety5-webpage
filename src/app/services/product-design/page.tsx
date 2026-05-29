import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "Product Design",
  description: "End-to-end product design that transforms complex problems into elegant, high-converting digital experiences.",
};

const CAPABILITIES = [
  { icon: "⬡", title: "UX Strategy", body: "User research, journey mapping, and information architecture that eliminates friction before a pixel is pushed." },
  { icon: "◫", title: "UI Design", body: "High-fidelity interfaces that are both strikingly beautiful and ruthlessly functional — built in Figma with production precision.", alt: true },
  { icon: "◎", title: "Interaction Design", body: "Micro-animations, transitions, and state management that make every interaction feel considered and premium." },
  { icon: "▦", title: "Usability Testing", body: "Remote and in-person testing sessions with real users to validate assumptions before engineering begins.", alt: true },
];

const DELIVERABLES = [
  { title: "User Research Report", sub: "Insights + personas" },
  { title: "Wireframes", sub: "Lo-fi structure" },
  { title: "Hi-Fi Designs", sub: "Production Figma" },
  { title: "Prototype", sub: "Interactive flows" },
  { title: "Dev Handoff", sub: "Annotated specs" },
];

const PROCESS = [
  { num: "01", title: "Research", desc: "User interviews, analytics audit, competitor teardown." },
  { num: "02", title: "Information Arch.", desc: "Sitemap, user flows, and IA validation." },
  { num: "03", title: "Design", desc: "Lo-fi wireframes → hi-fi screens → interactive prototype." },
  { num: "04", title: "Validate", desc: "Usability testing and iteration before engineering." },
];

export default function ProductDesignPage() {
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
              <h1 className={styles.title}>Product Design</h1>
            </div>
            <p className={styles.lead}>
              End-to-end product design that transforms complex problems into elegant, high-converting digital experiences.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Great products are not designed by accident. They are engineered — through rigorous research, relentless iteration, and an obsession with the user's mental model. We own the full design lifecycle, from first insight to final pixel, and hand off production-ready files that eliminate ambiguity in engineering.
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
                <div className={styles.ctaStripTitle}>Design that converts.</div>
                <p className={styles.ctaStripSub}>From first insight to production-ready Figma file.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="product-cta-btn"
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
