import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../ServicePage.module.css";

export const metadata = {
  title: "Brand Identity",
  description: "Forging iconic visual systems that resonate and dominate in crowded markets.",
};

const CAPABILITIES = [
  { icon: "◎", title: "Logo Design", body: "Distilling core values into memorable, scalable visual marks that look iconic everywhere — from a billboard to a 16×16 favicon." },
  { icon: "Aa", title: "Typography", body: "Selecting and customising typefaces that speak your brand's language. We utilise massive display fonts for undeniable presence.", alt: true },
  { icon: "◉", title: "Colour Systems", body: "Strategic palettes engineered for psychological impact. Electric blues, harsh oranges, and absolute darkness — precision, not accident." },
  { icon: "▦", title: "Brand Guidelines", body: "Exhaustive brand books for total consistency at scale, ensuring your internal team never dilutes the vision.", alt: true },
];

const DELIVERABLES = [
  { title: "Primary & Secondary Logos", sub: "SVG + PNG + all variants" },
  { title: "Typography System", sub: "Font pairings + hierarchy" },
  { title: "Colour Palette", sub: "HEX / RGB / CMYK" },
  { title: "Brand Guidelines", sub: "PDF + web version" },
  { title: "Social Media Kit", sub: "All platform formats" },
];

const PROCESS = [
  { num: "01", title: "Discovery", desc: "Brand audit, competitor analysis, positioning workshop." },
  { num: "02", title: "Concept", desc: "3 distinct visual directions presented for feedback." },
  { num: "03", title: "Refinement", desc: "Two rounds of refinement on chosen direction." },
  { num: "04", title: "Handoff", desc: "Full asset package + guidelines document." },
];

export default function BrandIdentityPage() {
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
              <h1 className={styles.title}>Brand Identity</h1>
            </div>
            <p className={styles.lead}>
              Forging iconic visual systems that resonate and dominate in crowded markets. We do not do subtle.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                In a landscape polluted with noise, standing out requires aggressive differentiation. We build brand identities that are impossible to ignore — rooted in striking typography, bold colour science, and unapologetic messaging that converts.
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
                <div className={styles.ctaStripTitle}>Ready to dominate your market?</div>
                <p className={styles.ctaStripSub}>Let's build an identity that's impossible to ignore.</p>
              </div>
              <a href="/contact" className="btn btn-secondary" id="brand-cta-btn"
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
