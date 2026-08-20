import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../LegalPage.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "How Ninety5 Studio collects, uses, and protects your personal data.",
};

const TOC = [
  { label: "01. Data Collection", href: "#collection" },
  { label: "02. Data Usage", href: "#usage" },
  { label: "03. Third Parties", href: "#third-parties" },
  { label: "04. Your Rights", href: "#rights" },
  { label: "05. Data Security", href: "#security" },
  { label: "06. Cookies", href: "#cookies" },
  { label: "07. Contact Us", href: "#contact" },
];

const SECTIONS = [
  {
    num: "01",
    id: "collection",
    title: "Data Collection",
    body: "We collect minimal necessary data to provide our services and improve your experience. This includes information you voluntarily provide through contact forms (name, email, project details), and anonymised analytics data collected via Vercel Analytics and Google Analytics.",
    items: [
      "Contact form submissions (name, email, message)",
      "Anonymous usage analytics (page views, session duration)",
      "Device and browser type for technical support",
      "IP address for security and fraud prevention",
    ],
  },
  {
    num: "02",
    id: "usage",
    title: "Data Usage",
    body: "Your information is never sold, rented, or traded to third parties. We use your data exclusively for the following purposes:",
    items: [
      "Responding to project inquiries and client communication",
      "Improving the performance and usability of this website",
      "Sending project updates and relevant service information (with explicit consent)",
      "Complying with legal obligations under GDPR and CCPA",
    ],
  },
  {
    num: "03",
    id: "third-parties",
    title: "Third Parties",
    body: "We utilise a small number of industry-standard third-party services, all of which are GDPR and CCPA compliant. These include:",
    items: [
      "Vercel — Hosting and edge network (vercel.com/privacy)",
      "Google Analytics — Anonymous usage analytics",
      "Resend — Transactional email delivery",
      "Cloudflare — DDoS protection and DNS",
    ],
  },
  {
    num: "04",
    id: "rights",
    title: "Your Rights",
    body: "Under GDPR, CCPA, and equivalent global frameworks, you have the following rights regarding your personal data. To exercise any of these rights, contact us at <a href='mailto:ninety5.designs.95@gmail.com' style='color: inherit; text-decoration: underline;'>hello@ninety5.in</a>:",
    items: [
      "Right of access — Request a copy of all data we hold on you",
      "Right to rectification — Correct inaccurate or incomplete data",
      "Right to erasure — Request permanent deletion of your data",
      "Right to portability — Receive your data in a machine-readable format",
      "Right to object — Opt out of marketing communications at any time",
    ],
  },
  {
    num: "05",
    id: "security",
    title: "Data Security",
    body: "We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, disclosure, or destruction. This includes TLS encryption in transit, encrypted storage, and access controls limited to authorised personnel only.",
    items: [],
  },
  {
    num: "06",
    id: "cookies",
    title: "Cookies",
    body: "This website uses minimal, privacy-respecting cookies. We do not use third-party advertising cookies. Essential cookies are used only for session management and security. Analytics cookies are anonymised and do not track individuals.",
    items: [],
  },
  {
    num: "07",
    id: "contact",
    title: "Contact Us",
    body: "For any privacy-related enquiries, data subject requests, or to exercise your rights, please contact our data controller directly:",
    items: [
      "Email: <a href='mailto:ninety5.designs.95@gmail.com'>hello@ninety5.in</a>",
      "Response time: within 72 hours as required by GDPR",
      "Registered entity: Ninety5 Studio, Chennai, India",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              <h1 className={styles.title}>Privacy Policy</h1>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700, color: "var(--color-brand-blue)", maxWidth: "760px", lineHeight: 1.45, marginBottom: "2rem" }}>
              How we collect, use, and protect your data — with complete transparency.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                Your privacy is paramount. We comply with GDPR, CCPA, and all applicable global data protection regulations. Last updated: May 2025.
              </p>
            </div>
          </div>
        </div>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentGrid}>
              {/* TOC */}
              <nav className={styles.toc} aria-label="Table of contents">
                <div className={styles.tocTitle}>Contents</div>
                {TOC.map((t) => (
                  <a key={t.href} href={t.href} className={styles.tocLink}>{t.label}</a>
                ))}
              </nav>

              {/* Body */}
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
                <div className={styles.ctaTitle}>Questions about your data?</div>
                <p className={styles.ctaSub}>We&apos;ll respond within 72 hours.</p>
              </div>
              <a href="mailto:ninety5.designs.95@gmail.com" className="btn btn-primary" id="privacy-cta-btn"
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
