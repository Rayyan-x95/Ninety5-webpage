import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/blog";
import styles from "../blog.module.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Ninety5 Studio",
    };
  }
  return {
    title: `${post.title} | Ninety5 Studio Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

function parseInlineStyles(text: string): React.ReactNode[] | string {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

    if (linkMatch && (!boldMatch || (linkMatch.index! < boldMatch.index!))) {
      const before = remaining.substring(0, linkMatch.index);
      if (before) {
        parts.push(before);
      }
      parts.push(
        <a key={`link-${keyIdx++}`} href={linkMatch[2]} style={{ color: "var(--color-brand-blue)", textDecoration: "underline", fontWeight: 700 }}>
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.substring(linkMatch.index! + linkMatch[0].length);
    } else if (boldMatch) {
      const before = remaining.substring(0, boldMatch.index);
      if (before) {
        parts.push(before);
      }
      parts.push(<strong key={`bold-${keyIdx++}`} style={{ fontWeight: 800 }}>{boldMatch[1]}</strong>);
      remaining = remaining.substring(boldMatch.index! + boldMatch[0].length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return parts.length > 0 ? parts : text;
}

function renderMarkdown(md: string) {
  const blocks = md.split(/\n\n+/);
  
  return blocks.map((block, idx) => {
    block = block.trim();
    if (!block) return null;

    // Check if it is a mermaid block
    if (block.startsWith("```mermaid")) {
      return (
        <div key={idx} style={{ overflowX: "auto", margin: "2.5rem 0" }}>
          <svg
            viewBox="0 0 800 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              minWidth: "650px",
              width: "100%",
              height: "auto",
              border: "4px solid var(--color-dark)",
              background: "var(--color-bg)",
              padding: "1.5rem",
              boxShadow: "6px 6px 0 var(--color-dark)",
            }}
            aria-label="SVG Flowchart detailing our product design process: Discovery & Research, UX Architecture, Hi-Fi Design, and Production Handoff."
          >
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-dark)" />
              </marker>
            </defs>
            {/* Nodes */}
            <rect x="10" y="30" width="165" height="60" fill="var(--color-brand-blue)" stroke="var(--color-dark)" stroke-width="4" />
            <text x="92.5" y="65" fill="var(--color-white)" font-family="monospace" font-size="10" font-weight="900" text-anchor="middle">1. DISCOVERY & RESEARCH</text>
            
            <rect x="210" y="30" width="165" height="60" fill="var(--color-brand-orange)" stroke="var(--color-dark)" stroke-width="4" />
            <text x="292.5" y="65" fill="var(--color-white)" font-family="monospace" font-size="10" font-weight="900" text-anchor="middle">2. UX ARCHITECTURE</text>
            
            <rect x="410" y="30" width="165" height="60" fill="var(--color-dark)" stroke="var(--color-dark)" stroke-width="4" />
            <text x="492.5" y="65" fill="var(--color-white)" font-family="monospace" font-size="10" font-weight="900" text-anchor="middle">3. HI-FI DESIGN</text>
            
            <rect x="610" y="30" width="165" height="60" fill="#34D399" stroke="var(--color-dark)" stroke-width="4" />
            <text x="692.5" y="65" fill="var(--color-dark)" font-family="monospace" font-size="10" font-weight="900" text-anchor="middle">4. PRODUCTION HANDOFF</text>

            {/* Arrows */}
            <path d="M 175 60 L 205 60" stroke="var(--color-dark)" stroke-width="4" marker-end="url(#arrow)" />
            <path d="M 375 60 L 405 60" stroke="var(--color-dark)" stroke-width="4" marker-end="url(#arrow)" />
            <path d="M 575 60 L 605 60" stroke="var(--color-dark)" stroke-width="4" marker-end="url(#arrow)" />
          </svg>
        </div>
      );
    }

    // Check if it is a table
    if (block.startsWith("|")) {
      const lines = block.split("\n");
      const rows = lines.map(line => line.trim().split("|").map(cell => cell.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1));
      
      const filteredRows = rows.filter(row => !row.every(cell => cell.startsWith(":") || cell.startsWith("-")));
      
      const headRow = filteredRows[0];
      const bodyRows = filteredRows.slice(1);

      return (
        <div key={idx} style={{ overflowX: "auto", margin: "2.5rem 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
            <thead>
              <tr>
                {headRow.map((cell, cIdx) => (
                  <th key={cIdx}>{parseInlineStyles(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{parseInlineStyles(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Check if it is a blockquote
    if (block.startsWith(">")) {
      const text = block.replace(/^>\s*/, "").trim();
      return (
        <blockquote key={idx}>
          <p>{parseInlineStyles(text)}</p>
        </blockquote>
      );
    }

    // Check headers
    if (block.startsWith("####")) {
      return <h4 key={idx}>{parseInlineStyles(block.replace(/^####\s*/, ""))}</h4>;
    }
    if (block.startsWith("###")) {
      return <h3 key={idx}>{parseInlineStyles(block.replace(/^###\s*/, ""))}</h3>;
    }
    if (block.startsWith("##")) {
      return <h2 key={idx}>{parseInlineStyles(block.replace(/^##\s*/, ""))}</h2>;
    }

    // Check horizontal rule
    if (block === "---") {
      return <hr key={idx} />;
    }

    // Check if list block
    if (block.startsWith("* ") || block.startsWith("- ")) {
      const items = block.split(/\n[\*\-]\s+/).map((item, itemIdx) => {
        let cleaned = item.trim();
        if (itemIdx === 0) {
          cleaned = cleaned.replace(/^[\*\-]\s+/, "");
        }
        return <li key={itemIdx}>{parseInlineStyles(cleaned)}</li>;
      });
      return <ul key={idx}>{items}</ul>;
    }

    // Check ordered list block
    if (/^\d+\.\s+/.test(block)) {
      const items = block.split(/\n\d+\.\s+/).map((item, itemIdx) => {
        let cleaned = item.trim();
        if (itemIdx === 0) {
          cleaned = cleaned.replace(/^\d+\.\s+/, "");
        }
        return <li key={itemIdx}>{parseInlineStyles(cleaned)}</li>;
      });
      return <ol key={idx}>{items}</ol>;
    }

    // Default paragraph
    return <p key={idx}>{parseInlineStyles(block)}</p>;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ninety5 Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ninety5.in/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main id="main" className={styles.page}>
        <article className={styles.articleWrapper}>
          <header className={styles.articleHeader}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>{post.tags.join(" · ")}</span>
            </div>
            <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}>
              {post.title}
            </h1>
            <div style={{ marginTop: "2rem" }}>
              <div className={styles.articleMeta}>
                <span>Published: {post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className={styles.author}>
                <div className={styles.authorAvatar} style={{
                  backgroundImage: `url(${post.author.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <span className={styles.authorRole}>{post.author.role}</span>
                </div>
              </div>
            </div>
          </header>

          <div className={styles.content}>
            {renderMarkdown(post.contentMarkdown)}
          </div>

          <div style={{ borderTop: "8px solid var(--color-dark)", marginTop: "5rem", paddingTop: "4rem" }}>
            <section className={styles.newsletter}>
              <div>
                <h2 className={styles.newsletterTitle}>Get More Insights</h2>
                <p className={styles.newsletterSub}>
                  Subscribe to our monthly newsletter. We share tactical guides on product strategy, design systems, and frontend engineering. Zero spam.
                </p>
              </div>
              <form
                className={styles.form}
                aria-label="Newsletter Subscription Form"
              >
                <label htmlFor="newsletter-email-detail" className="sr-only" style={{ display: "none" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email-detail"
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
        </article>
      </main>
      <Footer />
    </>
  );
}
