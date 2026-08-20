import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products of Ninety5 — In-House Digital Products & SaaS Tools",
  description:
    "Explore in-house digital products, SaaS tools, and open-source engines built by Ninety5 Studio — including Ujrat (freelance invoicing) and Titan (performance canvas).",
  keywords: [
    "Products of Ninety5",
    "Ninety5 in-house products",
    "Ujrat freelance calculator",
    "Titan portfolio engine",
    "Ninety5 SaaS tools",
    "Open source developer tools India",
    "Next.js web applications",
  ],
  alternates: {
    canonical: "https://ninety5.in/products",
  },
  openGraph: {
    title: "Products of Ninety5 — In-House Digital Products & SaaS Tools",
    description:
      "Explore in-house digital products, SaaS tools, and open-source engines built by Ninety5 Studio — including Ujrat and Titan.",
    url: "https://ninety5.in/products",
    type: "website",
  },
};

const PRODUCTS = [
  {
    id: "ujrat",
    name: "Ujrat (أجرة)",
    tagline: "Freelance Rate Calculator & Invoicing Engine (React 19)",
    badge: "React 19 SaaS Tool",
    badgeType: "orange",
    desc: "Ujrat is Ninety5's in-house financial engineering tool built with React 19 for independent designers, developers, and creative agencies. It computes exact minimum hourly rates factoring in taxes, billable utilization ratios, business overheads, and target profit margins, featuring an instant client-side vector PDF invoice generator.",
    liveUrl: "https://ujrat.ninety5.in/",
    githubUrl: "https://github.com/rayyan-x95/ujrat",
    caseStudyUrl: "/work/ujrat",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "jspdf", "Lucide Icons", "Vercel Edge"],
    features: [
      "Built with modern React 19 concurrent architecture for zero input lag",
      "Actuarial hourly rate algorithm factoring in taxes & non-billable hours",
      "Client-side vector PDF invoice generation with zero server round-trips",
      "Multi-currency conversion engine (USD, INR, EUR, GBP)",
      "100/100 Core Web Vitals with sub-300ms First Contentful Paint",
    ],
    metric: "₹18.4L+",
    metricLabel: "Invoices Calculated",
    terminalPreview: `$ npx ujrat --calculate
> React 19 Engine Initialized
> Analyzing billable utilization ratio: 75%
> Accounting for equipment depreciation & taxes...
> Optimal Rate: $85.00/hr (₹7,000/hr)
> Generated Vector PDF in 14ms ✓`,
  },
  {
    id: "titan",
    name: "Titan",
    tagline: "Offline-First Life OS & Productivity PWA",
    badge: "Progressive Web App",
    badgeType: "blue",
    desc: "Titan is Ninety5's flagship Life OS Progressive Web Application (PWA). Engineered for high-output daily performance, Titan unifies habit tracking, priority matrix workflows, time blocking, and personal asset management into a brutalist, distraction-free interface with full offline service workers and local storage persistence.",
    liveUrl: "https://titan.ninety5.in/",
    githubUrl: "https://github.com/Rayyan-x95/Titan",
    caseStudyUrl: "/work/titan",
    techStack: ["Next.js / PWA", "Service Workers", "TypeScript", "IndexedDB", "Tailwind CSS", "Framer Motion"],
    features: [
      "100% Offline-first PWA with background sync and service workers",
      "Comprehensive Life OS: habit tracking, priority matrix & deep work timer",
      "Sub-50ms local IndexedDB database queries with zero cloud dependency",
      "Neo-brutalist keyboard-first interface with command palette navigation",
      "Installable on iOS, Android, and Desktop with instant launch speeds",
    ],
    metric: "100%",
    metricLabel: "Offline PWA Capable",
    terminalPreview: `$ titan --status
▲ Life OS PWA (Service Worker Active)
✓ Cache Strategy: Cache-First (Offline Ready)
✓ IndexedDB Sync: 0ms Latency
✓ Routines & Goal Tracker: Synchronized
✓ Status: Live & Installable at titan.ninety5.in`,
  },
];

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ninety5.in/products#webpage",
        "url": "https://ninety5.in/products",
        "name": "Products of Ninety5 — In-House Digital Products & SaaS Tools",
        "description":
          "In-house digital products, SaaS tools, and open-source engines built by Ninety5 Studio.",
        "isPartOf": {
          "@id": "https://ninety5.in/#website",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ninety5.in",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products of Ninety5",
              "item": "https://ninety5.in/products",
            },
          ],
        },
      },
      ...PRODUCTS.map((prod) => ({
        "@type": "SoftwareApplication",
        "@id": `${prod.liveUrl}#app`,
        "name": prod.name,
        "description": prod.desc,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": prod.liveUrl,
        "codeRepository": prod.githubUrl,
        "author": {
          "@type": "Organization",
          "@id": "https://ninety5.in/#organization",
          "name": "Ninety5 Studio",
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className={styles.page} id="main">
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.eyebrow}>
              <span>LABS // IN-HOUSE ECOSYSTEM</span>
            </div>
            <h1 className={styles.title}>
              Products of <span className={styles.titleAccent}>Ninety5</span>
            </h1>
            <p className={styles.lead}>
              We don&apos;t just engineer digital products for global clients — we actively incubate, dogfood, and ship our own high-performance software tools. Explore the in-house product ecosystem engineered under the Ninety5 brand name.
            </p>
          </div>
        </section>

        {/* PRODUCTS LIST */}
        <section className={styles.productsSection}>
          <div className="container">
            <div className={styles.productGrid}>
              {PRODUCTS.map((product) => (
                <article key={product.id} className={styles.productCard} id={`product-${product.id}`}>
                  {/* Left Column: Details */}
                  <div className={styles.productInfo}>
                    <div
                      className={`${styles.productBadge} ${
                        product.badgeType === "orange"
                          ? styles.productBadgeOrange
                          : styles.productBadgeBlue
                      }`}
                    >
                      {product.badge}
                    </div>

                    <h2 className={styles.productName}>{product.name}</h2>
                    <p className={styles.productTagline}>{product.tagline}</p>
                    <p className={styles.productDesc}>{product.desc}</p>

                    {/* Features */}
                    <ul className={styles.featureList}>
                      {product.features.map((feat, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureIcon}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className={styles.techStackRow}>
                      {product.techStack.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className={styles.buttonGroup}>
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Launch {product.name.split(" ")[0]} ↗
                      </a>
                      <Link href={product.caseStudyUrl} className="btn btn-secondary">
                        Read Case Study →
                      </Link>
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        GitHub Repo ↗
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Panel & Terminal */}
                  <div className={styles.visualPanel}>
                    <div className={styles.metricCallout}>
                      <div className={styles.metricNumber}>{product.metric}</div>
                      <div className={styles.metricCaption}>{product.metricLabel}</div>
                    </div>
                    <pre className={styles.previewConsole}>
                      <code>{product.terminalPreview}</code>
                    </pre>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY WE BUILD IN-HOUSE */}
        <section className={styles.labsSection}>
          <div className="container">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, textTransform: "uppercase", color: "var(--color-dark)" }}>
              The Ninety5 Labs Philosophy
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.125rem", marginTop: "0.5rem", maxWidth: "700px" }}>
              How internal product development makes our client engineering 10× sharper.
            </p>

            <div className={styles.labsGrid}>
              <div className={styles.labCard}>
                <h3 className={styles.labTitle}>01 // Real-World Dogfooding</h3>
                <p className={styles.labDesc}>
                  Every design token, CSS architecture, and Next.js pattern we recommend to clients is first battle-tested in our own production apps under real traffic loads.
                </p>
              </div>

              <div className={styles.labCard}>
                <h3 className={styles.labTitle}>02 // Open-Source Transparency</h3>
                <p className={styles.labDesc}>
                  We believe in building in public. Our products feature open repositories on GitHub so engineers can inspect our clean component architecture and performance optimizations.
                </p>
              </div>

              <div className={styles.labCard}>
                <h3 className={styles.labTitle}>03 // Speed &amp; Conversion Obsession</h3>
                <p className={styles.labDesc}>
                  From instantaneous client-side PDF generation in Ujrat to sub-second route changes in Titan, we treat page speed and user experience as non-negotiable standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Want to build your own flagship product?</h2>
              <p className={styles.ctaDesc}>
                Whether you need end-to-end UX/UI architecture, tokenized design systems, or sub-second Next.js engineering, we build products that dominate industries.
              </p>
              <Link href="/contact" className="btn btn-accent" style={{ padding: "1rem 2.5rem", fontSize: "1.125rem" }}>
                Start a project with Ninety5 ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
