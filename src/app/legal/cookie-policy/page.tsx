import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../LegalPage.module.css";

export const metadata = {
  title: "Cookie Policy",
  description: "How Ninety5 Studio uses cookies and similar tracking technologies.",
};

const TOC = [
  { label: "01. What Are Cookies", href: "#what" },
  { label: "02. Cookies We Use", href: "#types" },
  { label: "03. Third-Party Cookies", href: "#third-party" },
  { label: "04. Managing Cookies", href: "#manage" },
  { label: "05. Updates", href: "#updates" },
  { label: "06. Contact", href: "#contact" },
];

const SECTIONS = [
  {
    num: "01",
    id: "what",
    title: "What Are Cookies",
    body: "Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide anonymised reporting information to site owners. Ninety5 Studio uses cookies responsibly and minimally.",
    items: [],
  },
  {
    num: "02",
    id: "types",
    title: "Cookies We Use",
    body: "We use only the minimum number of cookies required to operate this website effectively. Our cookies fall into the following categories:",
    items: [
      "Essential cookies — Required for the website to function (session management, security). Cannot be disabled.",
      "Analytics cookies — Anonymised data on page views and session duration via Vercel Analytics. No personal data collected.",
      "Preference cookies — Remembering your consent choices and UI preferences across visits.",
    ],
  },
  {
    num: "03",
    id: "third-party",
    title: "Third-Party Cookies",
    body: "Some third-party services embedded in this site may set their own cookies. We do not use third-party advertising or remarketing cookies. The third-party services we use include:",
    items: [
      "Vercel Analytics — Privacy-respecting, GDPR-compliant anonymous analytics",
      "Google Fonts — Font delivery (no tracking cookies set)",
    ],
  },
  {
    num: "04",
    id: "manage",
    title: "Managing Cookies",
    body: "You have full control over cookies through your browser settings. You can block, delete, or receive alerts about cookies at any time. Please note that disabling essential cookies may impact the functionality of this website. Instructions for common browsers:",
    items: [
      "Google Chrome: Settings → Privacy and Security → Cookies",
      "Mozilla Firefox: Options → Privacy & Security → Cookies",
      "Safari: Preferences → Privacy → Manage Website Data",
      "Microsoft Edge: Settings → Cookies and Site Permissions",
    ],
  },
  {
    num: "05",
    id: "updates",
    title: "Updates to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our cookie practices. The 'Last Updated' date at the top of this page will always reflect the most recent revision. Continued use of this site following any changes constitutes acceptance of the updated policy. Last updated: May 2025.",
    items: [],
  },
  {
    num: "06",
    id: "contact",
    title: "Contact",
    body: "If you have questions about our use of cookies or this Cookie Policy, please contact us. We respond to all privacy-related enquiries within 72 hours as required by GDPR.",
    items: [
      "Email: hello@ninety5.in",
      "Subject line: Cookie Policy Enquiry",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.page} id="main">
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.IN · LEGAL</span>
            </div>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Cookie Policy</h1>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700, color: "var(--color-brand-blue)", maxWidth: "760px", lineHeight: 1.45, marginBottom: "2rem" }}>
              How we use cookies — and how you stay in full control.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                We use cookies minimally and responsibly. We do not use advertising cookies or sell your data. This policy explains exactly what we use and why. Last updated: May 2025.
              </p>
            </div>
          </div>
        </div>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentGrid}>
              <nav className={styles.toc} aria-label="Table of contents">
                <div className={styles.tocTitle}>Contents</div>
                {TOC.map((t) => (
                  <a key={t.href} href={t.href} className={styles.tocLink}>{t.label}</a>
                ))}
              </nav>
              <div className={styles.content}>
                {SECTIONS.map((s) => (
                  <div key={s.num} id={s.id} className={styles.section}>
                    <span className={styles.sectionNum}>{s.num}</span>
                    <h2 className={styles.sectionTitle}>{s.title}</h2>
                    <p className={styles.sectionBody}>{s.body}</p>
                    {s.items.length > 0 && (
                      <ul className={styles.sectionList}>
                        {s.items.map((item) => (
                          <li key={item} className={styles.sectionListItem}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <div className={styles.ctaTitle}>Cookie questions?</div>
                <p className={styles.ctaSub}>We'll respond within 72 hours.</p>
              </div>
              <a href="mailto:ninety5.designs.95@gmail.com" className="btn btn-primary" id="cookie-cta-btn"
                style={{ padding: "1.125rem 2.25rem", fontWeight: 800, boxShadow: "8px 8px 0 var(--color-brand-orange)" }}>
                Contact Us ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
