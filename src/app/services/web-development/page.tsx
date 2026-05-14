import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "Web Development — Ninety5 Studio",
  description: "Production-grade web engineering built on Next.js, React, and the modern stack — fast, scalable, and maintainable.",
};

const CAPABILITIES = [
  { icon: "⬡", title: "Next.js / React", body: "Server components, streaming SSR, and edge functions that deliver sub-second page loads and perfect Lighthouse scores." },
  { icon: "◎", title: "Headless CMS", body: "Sanity, Contentful, or Payload CMS integrated for editorial flexibility without sacrificing performance.", alt: true },
  { icon: "◫", title: "E-Commerce", body: "Shopify Hydrogen and custom headless commerce builds that convert at scale without the baggage of legacy platforms." },
  { icon: "∞", title: "API Engineering", body: "RESTful and GraphQL APIs, edge middleware, webhooks, and third-party integrations built to handle production load.", alt: true },
];

const DELIVERABLES = [
  { title: "Production Codebase", sub: "Fully documented" },
  { title: "CI/CD Pipeline", sub: "GitHub Actions + Vercel" },
  { title: "Performance Report", sub: "Lighthouse audit" },
  { title: "CMS Setup", sub: "Content-ready" },
  { title: "90-Day Warranty", sub: "Bug-fix guarantee" },
];

const PROCESS = [
  { num: "01", title: "Architecture", desc: "Tech stack selection, data modelling, and API design." },
  { num: "02", title: "Setup", desc: "Project scaffolding, CI/CD, environments, and monitoring." },
  { num: "03", title: "Engineering", desc: "Feature sprints with daily commits and weekly demos." },
  { num: "04", title: "Launch", desc: "Load testing, performance audit, and production deploy." },
];

export default function WebDevelopmentPage() {
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
              <h1 className={styles.title}>Web Development</h1>
            </div>
            <p className={styles.lead}>
              Production-grade web engineering built on Next.js, React, and the modern stack — fast, scalable, and maintainable.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Beautiful design is worthless if the code underneath can't handle real traffic. We engineer web applications that are as robust as they are refined — optimised at every layer from database query to edge cache — and built to evolve with your business.
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
                <div className={styles.ctaStripTitle}>Built to perform. Built to scale.</div>
                <p className={styles.ctaStripSub}>Next.js engineering that handles production from day one.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="webdev-cta-btn"
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
