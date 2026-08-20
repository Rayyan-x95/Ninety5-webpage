import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/projects";
import styles from "../CaseStudy.module.css";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Ninety5 Studio",
    };
  }

  return {
    title: `${project.title} — Case Study | Ninety5 Studio`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Ninety5 Case Study`,
      description: project.description,
      type: "article",
      url: `https://ninety5.in/work/${project.id}`,
    },
    alternates: {
      canonical: `https://ninety5.in/work/${project.id}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": project.inHouse ? "SoftwareApplication" : "CreativeWork",
        "@id": `https://ninety5.in/work/${project.id}#work`,
        "name": project.title,
        "headline": project.title,
        "description": project.longDescription,
        "applicationCategory": project.category,
        "operatingSystem": "Web",
        ...(project.liveUrl ? { "url": project.liveUrl } : {}),
        "author": {
          "@type": "Organization",
          "@id": "https://ninety5.in/#organization",
          "name": "Ninety5 Studio",
          "url": "https://ninety5.in"
        },
        "publisher": {
          "@id": "https://ninety5.in/#organization"
        },
        "dateCreated": project.year,
        "about": project.category,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ninety5.in/work/${project.id}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ninety5.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://ninety5.in/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://ninety5.in/work/${project.id}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className={styles.page} id="main">
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>
                {project.inHouse ? "NINETY5 IN-HOUSE PRODUCT" : "CASE STUDY"} — {project.year}
              </span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client / Entity</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role &amp; Stack</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            </div>

            {/* Action buttons if live URL or GitHub exists */}
            {(project.liveUrl || project.githubUrl) && (
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
                  >
                    Open Live Application ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
                  >
                    View GitHub Repo ↗
                  </a>
                )}
              </div>
            )}

            {/* Tech stack badges if present */}
            {project.techStack && project.techStack.length > 0 && (
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)", marginRight: "0.5rem" }}>
                  Engineered with:
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "var(--color-bg)",
                      border: "2px solid var(--color-dark)",
                      padding: "0.25rem 0.6rem",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      boxShadow: "2px 2px 0 var(--color-dark)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className={styles.metricSection}>
              <div className={styles.metricValue}>{project.metric}</div>
              <div className={styles.metricLabel}>{project.metricLabel}</div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.section}>
          <div className="container">
            <p className={styles.intro}>{project.longDescription}</p>
            
            <div className={styles.contentGrid}>
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>The Challenge</h2>
                <ul className={styles.blockList}>
                  {project.challenges.map((c, i) => (
                    <li key={i} className={styles.blockListItem}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>The Solution</h2>
                <ul className={styles.blockList}>
                  {project.solutions.map((s, i) => (
                    <li key={i} className={styles.blockListItem}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.contentBlock} style={{ marginTop: "6rem" }}>
              <h2 className={styles.blockTitle}>The Measurable Results</h2>
              <ul className={styles.blockList} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {project.results.map((r, i) => (
                  <li key={i} className={styles.blockListItem} style={{ background: "var(--color-bg)", padding: "2rem", border: "2px solid var(--color-dark)", boxShadow: "8px 8px 0 var(--color-dark)" }}>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* RELATED SERVICES CROSS-LINKING */}
            <div style={{ marginTop: "5rem", padding: "2.5rem", background: "var(--color-white)", border: "3px solid var(--color-dark)", boxShadow: "6px 6px 0 var(--color-dark)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "1.25rem", marginBottom: "1rem" }}>
                Services Deployed in this Project
              </h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Explore how we use tokenized design systems and Next.js engineering to drive outsized ROI:
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/services/product-design" className="btn btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.875rem" }}>
                  Product Design (UI/UX) →
                </a>
                <a href="/services/web-development" className="btn btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.875rem" }}>
                  Next.js Web Development →
                </a>
                <a href="/services/design-systems" className="btn btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.875rem" }}>
                  Design Systems →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.cta}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Want results like these?</h2>
            <a href="/contact" className="btn btn-primary" style={{ padding: "1.5rem 3rem", fontSize: "1.25rem", fontWeight: 800 }}>
              Start your project ↗
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

