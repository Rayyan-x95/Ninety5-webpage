import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "../LegalPage.module.css";

export const metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your engagement with Ninety5 Studio.",
};

const TOC = [
  { label: "01. Acceptance", href: "#acceptance" },
  { label: "02. Services", href: "#services" },
  { label: "03. Payment", href: "#payment" },
  { label: "04. Intellectual Property", href: "#ip" },
  { label: "05. Confidentiality", href: "#confidentiality" },
  { label: "06. Liability", href: "#liability" },
  { label: "07. Termination", href: "#termination" },
];

const SECTIONS = [
  {
    num: "01",
    id: "acceptance",
    title: "Acceptance of Terms",
    body: "By engaging Ninety5 Studio (registered in Chennai, India) for any service — whether through a signed proposal, email confirmation, or payment — you agree to be bound by these Terms of Service. If you do not agree, you must not engage our services.",
    items: [],
  },
  {
    num: "02",
    id: "services",
    title: "Services",
    body: "Ninety5 Studio provides design and engineering services including but not limited to Product Design, Brand Identity, Design Systems, Web Development, Mobile App Development, and UX Research. The exact scope of services for each engagement is defined in a written proposal or Statement of Work (SOW) agreed by both parties prior to commencement.",
    items: [
      "All work is performed to the specifications agreed in the SOW",
      "Changes to scope must be documented in a written Change Request",
      "Timelines are contingent on timely client feedback and approvals",
      "We reserve the right to showcase completed work in our portfolio unless NDA prohibits",
    ],
  },
  {
    num: "03",
    id: "payment",
    title: "Payment Terms",
    body: "Ninety5 Studio operates on milestone-based billing unless otherwise agreed in the SOW. Standard payment terms are as follows:",
    items: [
      "50% deposit required to begin work on any new project",
      "Remaining balance due upon project completion or as defined in SOW milestones",
      "Invoices are payable within 14 days of issue",
      "Late payments accrue interest at 2% per month after 30 days",
      "All prices are exclusive of applicable taxes (GST/VAT)",
    ],
  },
  {
    num: "04",
    id: "ip",
    title: "Intellectual Property",
    body: "Upon receipt of full payment, the client receives full ownership of all final deliverables created specifically for their project. Ninety5 Studio retains ownership of all underlying frameworks, tools, and code libraries developed independently. Third-party assets (fonts, stock images) are subject to their respective licences.",
    items: [
      "Final deliverables transfer to client upon full payment",
      "Ninety5 retains the right to display work in portfolio and case studies",
      "Pre-existing IP and tools remain property of Ninety5 Studio",
      "Client warrants they own or have rights to all assets provided to us",
    ],
  },
  {
    num: "05",
    id: "confidentiality",
    title: "Confidentiality",
    body: "Both parties agree to keep confidential all proprietary information disclosed during the engagement. This obligation survives the termination of the engagement for a period of two (2) years. A mutual NDA can be executed at the client's request prior to commencement.",
    items: [],
  },
  {
    num: "06",
    id: "liability",
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Ninety5 Studio's total liability for any claim arising from an engagement shall not exceed the total fees paid by the client for the specific project giving rise to the claim. We are not liable for indirect, consequential, or incidental damages.",
    items: [],
  },
  {
    num: "07",
    id: "termination",
    title: "Termination",
    body: "Either party may terminate an engagement with 14 days' written notice. Upon termination, the client is liable for payment of all work completed to the date of termination. Deposits are non-refundable. Ninety5 will deliver all completed work upon receipt of outstanding payment.",
    items: [],
  },
];

export default function TermsOfServicePage() {
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
              <h1 className={styles.title}>Terms of Service</h1>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700, color: "var(--color-brand-blue)", maxWidth: "760px", lineHeight: 1.45, marginBottom: "2rem" }}>
              The terms and conditions governing every Ninety5 Studio engagement.
            </p>
            <div style={{ borderLeft: "4px solid var(--color-brand-orange)", paddingLeft: "1.75rem", maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                We believe in radical transparency — about our process, our pricing, and our legal framework. These terms protect both parties and ensure every engagement is successful. Last updated: May 2025.
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
                <div className={styles.ctaTitle}>Questions about our terms?</div>
                <p className={styles.ctaSub}>We're happy to clarify anything before you engage.</p>
              </div>
              <a href="mailto:ninety5.designs.95@gmail.com" className="btn btn-primary" id="terms-cta-btn"
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
