import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Testimonials",
  description: "What industry leaders say about partnering with Ninety5 Studio.",
};

const STATS = [
  { num: "100", suffix: "+", label: "Satisfied Clients" },
  { num: "400", suffix: "+", label: "Projects Delivered" },
  { num: "4.9", suffix: "/5", label: "Average Rating" },
  { num: "98", suffix: "%", label: "Repeat Engagement" },
];

const TESTIMONIALS = [
  {
    quote: "Ninety5 didn't just build an app — they defined our entire product strategy. Unmatched velocity and an aesthetic that absolutely dominates our niche. They are the gold standard for product execution.",
    author: "Arjun Mehta",
    role: "CEO, FinStack — Fintech SaaS",
    featured: true,
  },
  {
    quote: "The cleanest React architecture we have ever audited. They operate at the highest technical level. A true engineering powerhouse that makes our internal team look twice as good.",
    author: "Sarah Chen",
    role: "VP of Engineering, NovaDash",
    alt: true,
  },
  {
    quote: "Their brutalist aesthetic cuts through the noise perfectly. Bold, decisive, and flawlessly executed from Figma to deployment in record time.",
    author: "Marcus Johnson",
    role: "Creative Director, Orbit Labs",
  },
  {
    quote: "Working with Ninety5 is a genuine competitive advantage. They deliver on every promise and continually push us to be bolder, faster, and more ambitious.",
    author: "Priya Nair",
    role: "Founder, Luminary AI",
    alt: true,
  },
  {
    quote: "Our conversion rate went up 300% after the redesign. That's not marketing fluff — that's the measurable impact of working with a studio that truly understands product.",
    author: "James Okafor",
    role: "CMO, PulseCommerce",
  },
];

const CLIENT_LOGOS = [
  { name: "FinStack", sub: "Fintech" },
  { name: "NovaDash", sub: "SaaS" },
  { name: "Orbit Labs", sub: "AI / ML" },
  { name: "Luminary", sub: "Startup" },
  { name: "PulseCommerce", sub: "E-Commerce" },
];

export default function TestimonialsPage() {
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
              <span className={styles.sectionLabelText}>NINETY5.IN · TESTIMONIALS</span>
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
                Testimonials
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
              What industry leaders say about the Ninety5 standard of execution.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                We measure our success entirely by the success of our clients. We do not chase vanity metrics — we chase business outcomes. Here is what founders, executives, and directors have to say about partnering with us.
              </p>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <div className={styles.statNum}>
                    {s.num}<span>{s.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS GRID ── */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>CLIENT VOICES</span>
            </div>
            <h2 className={styles.sectionTitle}>From Our Clients</h2>
            <div className={styles.grid}>
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.author}
                  className={`${styles.card} ${t.alt ? styles.cardAlt : ""}`}
                >
                  <div className={styles.ratingRow}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quote}>{t.quote}</p>
                  <div className={styles.author}>
                    <div className={styles.authorName}>{t.author}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT LOGOS ── */}
        <section className={styles.logosSection}>
          <div className="container">
            <div className={styles.logosTitle}>Trusted by ambitious teams globally</div>
            <div className={styles.logosGrid}>
              {CLIENT_LOGOS.map((l) => (
                <div key={l.name} className={styles.logoItem}>
                  <div className={styles.logoItemText}>{l.name}</div>
                  <div className={styles.logoItemSub}>{l.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Be our next success story.</h2>
              <a
                href="/contact"
                className="btn btn-primary"
                id="testimonials-cta-btn"
                style={{ padding: "1.25rem 2.5rem", fontSize: "1rem", fontWeight: 800, boxShadow: "8px 8px 0 var(--color-brand-orange)" }}
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
