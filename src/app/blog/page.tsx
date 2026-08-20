import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/blog";
import styles from "./blog.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design & Engineering Blog — Expert Guides | Ninety5 Studio",
  description: "Expert guides on UI/UX design costs in India, design system ROI, Core Web Vitals, SaaS dashboard UX, and Next.js engineering — from the Ninety5 Studio team.",
  alternates: {
    canonical: "https://ninety5.in/blog",
  },
  openGraph: {
    title: "Product Design & Engineering Blog | Ninety5 Studio",
    description: "Tactical guides on product design, design systems, and frontend engineering for SaaS founders and tech startups.",
    type: "website",
    url: "https://ninety5.in/blog",
  },
};

const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://ninety5.in/blog#collection",
  "name": "Ninety5 Studio Blog — Product Design & Engineering Guides",
  "description": "Expert long-form guides on UI/UX design, design systems, Core Web Vitals, and SaaS engineering from the Ninety5 Studio team.",
  "url": "https://ninety5.in/blog",
  "publisher": {
    "@type": "Organization",
    "@id": "https://ninety5.in/#organization",
    "name": "Ninety5 Studio"
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <Header />
      <main id="main" className={styles.page}>
        <div className="container">
          {/* Hero Header */}
          <header className={styles.hero}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.IN · INSIGHTS</span>
            </div>
            <h1 className={styles.title}>The Ninety5 Blog</h1>
            <p className={styles.subtitle}>
              Unapologetic guides and industry insights on digital product design, web engineering, and brand building.
            </p>
          </header>

          {/* Blog Grid */}
          <section className={styles.grid}>
            {BLOG_POSTS.map((post, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={post.slug}
                  className={`${styles.card} ${isEven ? "" : styles.cardAlt}`}
                >
                  <div className={styles.cardVisual}>
                    <div
                      className={styles.cardImageFallback}
                      style={{
                        backgroundColor: isEven ? "var(--color-brand-blue)" : "var(--color-brand-orange)",
                        backgroundImage: isEven
                          ? "radial-gradient(var(--color-dark) 2px, transparent 2px)"
                          : "linear-gradient(45deg, var(--color-dark) 25%, transparent 25%, transparent 75%, var(--color-dark) 75%, var(--color-dark)), linear-gradient(45deg, var(--color-dark) 25%, transparent 25%, transparent 75%, var(--color-dark) 75%, var(--color-dark))",
                        backgroundSize: isEven ? "24px 24px" : "40px 40px",
                        backgroundPosition: isEven ? "0 0" : "0 0, 20px 20px",
                        opacity: 0.85,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "3.5rem",
                          fontWeight: 900,
                          color: "var(--color-white)",
                          textShadow: "4px 4px 0 var(--color-dark)",
                          textTransform: "uppercase",
                          letterSpacing: "-0.05em",
                          userSelect: "none",
                        }}
                      >
                        {post.slug.split("-")[0]}
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag}>{post.tags[0]}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.cardTitle}>
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>
                    <p className={styles.cardDesc}>{post.description}</p>
                    <a href={`/blog/${post.slug}`} className={styles.cardLink}>
                      Read Article →
                    </a>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Newsletter Box */}
          <section className={styles.newsletter}>
            <div>
              <h2 className={styles.newsletterTitle}>Get Fresh Insights</h2>
              <p className={styles.newsletterSub}>
                Subscribe to our monthly newsletter. We share tactical guides on product strategy, design systems, and frontend engineering. Zero spam.
              </p>
            </div>
            <form
              className={styles.form}
              aria-label="Newsletter Subscription Form"
            >
              <label htmlFor="newsletter-email" className="sr-only" style={{ display: "none" }}>
                Email Address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="you@example.com"
                required
                className={styles.input}
                aria-label="Email address for newsletter"
              />
              <button type="button" className={styles.submitBtn}>
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
