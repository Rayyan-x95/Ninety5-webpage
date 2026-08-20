"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./ServicesSection.module.css";

const DESIGN_SERVICES = [
  { icon: "◈", title: "Product Design", desc: "End-to-end UX/UI — discovery, wireframes, and pixel-perfect interfaces.", link: "/services/product-design" },
  { icon: "⬡", title: "Brand Identity", desc: "Logos, visual systems, and identities that make your brand unmistakable.", link: "/services/brand-identity" },
  { icon: "◎", title: "Design Systems", desc: "Scalable component libraries and token-driven systems for growing teams.", link: "/services/design-systems" },
  { icon: "▦", title: "UX Research", desc: "User interviews and data-driven insights to sharpen your product.", link: "/services/ux-research" },
];

const GRAPHIC_SERVICES = [
  { icon: "✎", title: "Graphic Design", desc: "Aggressive, statement-making digital and print assets with bold typography.", link: "/services/graphic-design" },
  { icon: "▷", title: "Video Editing & Motion", desc: "High-retention product walkthroughs, viral shorts, and kinetic typography.", link: "/services/video-editing" },
  { icon: "✦", title: "Branded Content Suite", desc: "LinkedIn carousels, newsletter design, and omni-channel creative retainers.", link: "/services/branded-content" },
  { icon: "▲", title: "Investor Pitch Decks", desc: "High-stakes fundraising presentations engineered to close capital.", link: "/services/graphic-design" },
];

const DEV_SERVICES = [
  { icon: "⟨/⟩", title: "Next.js & React", desc: "Production web apps with SSR, edge delivery, and TypeScript.", link: "/services/web-development" },
  { icon: "◉", title: "Mobile Apps", desc: "Cross-platform React Native apps with offline support and native feel.", link: "/services/mobile-apps" },
  { icon: "⊞", title: "Webflow & Headless", desc: "CMS-powered marketing sites with sub-second page speeds.", link: "/services/web-development" },
  { icon: "⬟", title: "API & Backend", desc: "REST and GraphQL APIs and database architecture built to scale.", link: "/services/web-development" },
];

export default function ServicesSection() {
  const ref = useReveal<HTMLElement>(0.06);

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
        {/* Three-column panels with Graphic Design as primary column */}
        <div className={`reveal reveal-delay-1 ${styles.panels}`}>
          {/* Graphic Design & Creative Suite */}
          <div className={`${styles.panel} ${styles.panelOrange}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>01 // Creative Suite</span>
              <h3 className={styles.panelTitle}>Graphic Design &amp; Video</h3>
            </div>
            <div className={styles.serviceList}>
              {GRAPHIC_SERVICES.map((s, i) => (
                <a key={s.title} href={s.link} className={styles.serviceItem} id={`service-graphic-${i}`} style={{ textDecoration: "none" }}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title} ↗</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Product Design */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>02 // Product Design</span>
              <h3 className={styles.panelTitle}>Craft that converts</h3>
            </div>
            <div className={styles.serviceList}>
              {DESIGN_SERVICES.map((s, i) => (
                <a key={s.title} href={s.link} className={styles.serviceItem} id={`service-design-${i}`} style={{ textDecoration: "none" }}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title} ↗</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Development */}
          <div className={`${styles.panel} ${styles.panelDark}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTag}>03 // Engineering</span>
              <h3 className={styles.panelTitle}>Code that scales</h3>
            </div>
            <div className={styles.serviceList}>
              {DEV_SERVICES.map((s, i) => (
                <a key={s.title} href={s.link} className={`${styles.serviceItem}`} id={`service-dev-${i}`} style={{ textDecoration: "none" }}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <div className={styles.serviceName}>{s.title} ↗</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                </a>
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
          <a href="/contact" className="btn btn-secondary btn-large" id="services-cta-btn">
            Start a Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
