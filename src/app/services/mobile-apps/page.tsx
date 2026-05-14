import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "Mobile Apps — Ninety5 Studio",
  description: "Cross-platform mobile applications engineered for performance, retention, and scale.",
};

const CAPABILITIES = [
  { icon: "◻", title: "React Native", body: "Single codebase, two platforms. Maximum performance via native modules and Hermes engine optimisation." },
  { icon: "◈", title: "iOS & Android", body: "Platform-specific adaptations that respect HIG and Material Design conventions while maintaining your unique identity.", alt: true },
  { icon: "⬡", title: "Offline First", body: "SQLite and sync architectures that mean your app works flawlessly — network or not." },
  { icon: "✦", title: "App Store Launch", body: "Full ASO strategy, metadata, screenshots, and launch playbook for maximum day-one visibility.", alt: true },
];

const DELIVERABLES = [
  { title: "Native App Build", sub: "iOS + Android" },
  { title: "Design System", sub: "Mobile component kit" },
  { title: "App Store Listing", sub: "Optimised metadata" },
  { title: "Source Code", sub: "Clean, documented" },
  { title: "90-Day SLA", sub: "Post-launch support" },
];

const PROCESS = [
  { num: "01", title: "UX Research", desc: "User flows, personas, and competitive feature mapping." },
  { num: "02", title: "Prototyping", desc: "High-fidelity interactive Figma prototype." },
  { num: "03", title: "Engineering", desc: "Sprint-based build with weekly TestFlight releases." },
  { num: "04", title: "Launch", desc: "Store submission, ASO, and launch monitoring." },
];

export default function MobileAppsPage() {
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
              <h1 className={styles.title}>Mobile Apps</h1>
            </div>
            <p className={styles.lead}>
              Cross-platform mobile applications engineered for performance, retention, and scale.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Mobile is no longer a secondary platform — it is often the primary one. We build React Native applications that feel genuinely native, perform at the highest level, and convert users into advocates. No compromises on either platform.
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
                <div className={styles.ctaStripTitle}>Ship the app. Own the market.</div>
                <p className={styles.ctaStripSub}>React Native, built to perfection on iOS and Android.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="mobile-cta-btn"
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
