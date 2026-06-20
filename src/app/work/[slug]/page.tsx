import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/projects";
import styles from "../CaseStudy.module.css";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Ninety5 Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const slug = params.slug;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.page} id="main">
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>CASE STUDY — {project.year}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Service</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            </div>

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
              <h2 className={styles.blockTitle}>The Results</h2>
              <ul className={styles.blockList} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {project.results.map((r, i) => (
                  <li key={i} className={styles.blockListItem} style={{ background: "var(--color-bg)", padding: "2rem", border: "2px solid var(--color-dark)", boxShadow: "8px 8px 0 var(--color-dark)" }}>
                    {r}
                  </li>
                ))}
              </ul>
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
