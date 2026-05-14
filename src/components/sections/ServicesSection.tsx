"use client";

import { useEffect, useRef } from "react";
import styles from "./ServicesSection.module.css";

const DESIGN_SERVICES = [
  { icon: "◈", title: "Product Design", desc: "End-to-end UX/UI — discovery, wireframes, and pixel-perfect interfaces." },
  { icon: "⬡", title: "Brand Identity", desc: "Logos, visual systems, and identities that make your brand unmistakable." },
  { icon: "◎", title: "Design Systems", desc: "Scalable component libraries and token-driven systems for growing teams." },
  { icon: "▦", title: "UX Research", desc: "User interviews and data-driven insights to sharpen your product." },
];

const GRAPHIC_SERVICES = [
  { icon: "✎", title: "Graphic Design", desc: "Aggressive, statement-making digital and print assets using bold type." },
  { icon: "📦", title: "Package Design", desc: "Physical packaging that stands out with bold, minimalist geometry." },
  { icon: "✦", title: "Social Assets", desc: "High-conversion social media kits and ad creative for all platforms." },
  { icon: "◈", title: "3D Illustration", desc: "Modern 3D assets and abstract renders that add depth to your presence." },
];

const DEV_SERVICES = [
  { icon: "⟨/⟩", title: "Next.js & React", desc: "Production web apps with SSR, edge delivery, and TypeScript." },
  { icon: "◉", title: "Mobile Apps", desc: "Cross-platform React Native apps with offline support and native feel." },
  { icon: "⊞", title: "Webflow", desc: "CMS-powered marketing sites — no-compromise quality." },
  { icon: "⬟", title: "API & Backend", desc: "REST and GraphQL APIs and database architecture built to scale." },
  { icon: "▷", title: "Performance", desc: "Core Web Vitals, bundle optimisation, and CDN strategy." },
  { icon: "⟳", title: "Maintenance", desc: "Ongoing retainer support and technical growth strategy post-launch." },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} id="services">
      <div className="container">

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>WHAT WE DO</span>
            </div>
            <h2 className={styles.title}>The Full Stack,{"\n"}End to End.</h2>
          </div>
          <p className={styles.sub}>
            From the first pixel to the final deploy — we cover every layer of
            the product stack so you don&apos;t have to juggle vendors.
          </p>
        </div>

        {/* Three-column panels */}
        <div className={`reveal reveal-delay-1 ${styles.panels}`}>
          {/* Product Design */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>Product</span>
              <h3 className={styles.panelTitle}>Craft that converts</h3>
            </div>
            <div className={styles.serviceList}>
              {DESIGN_SERVICES.map((s, i) => (
                <div key={s.title} className={styles.serviceItem} id={`service-design-${i}`}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title}</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Design */}
          <div className={`${styles.panel} ${styles.panelOrange}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>Visuals</span>
              <h3 className={styles.panelTitle}>Design that hits</h3>
            </div>
            <div className={styles.serviceList}>
              {GRAPHIC_SERVICES.map((s, i) => (
                <div key={s.title} className={styles.serviceItem} id={`service-graphic-${i}`}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title}</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development */}
          <div className={`${styles.panel} ${styles.panelDark}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>Engineering</span>
              <h3 className={styles.panelTitle}>Code that scales</h3>
            </div>
            <div className={styles.serviceList}>
              {DEV_SERVICES.map((s, i) => (
                <div key={s.title} className={`${styles.serviceItem}`} id={`service-dev-${i}`}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title}</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className={`reveal ${styles.cta}`}>
          <div>
            <div className={styles.ctaText}>Need the full stack?</div>
            <div className={styles.ctaSub}>Tell us what you&apos;re building — we&apos;ll handle the rest.</div>
          </div>
          <a href="/contact" className="btn btn-secondary" id="services-cta-btn"
            style={{ padding: "1.125rem 2.25rem", fontWeight: 800, boxShadow: "6px 6px 0 var(--color-dark)" }}>
            Start a Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
