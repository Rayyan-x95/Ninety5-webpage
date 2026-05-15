import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/components/sections/ServicesSection.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "End-to-end design and engineering solutions for the world's most ambitious brands. Product Design, Brand Identity, and Scalable Web Development.",
};

const DESIGN_SERVICES = [
  {
    icon: "◈",
    title: "Product Design",
    desc: "End-to-end UX/UI — from discovery and wireframes to pixel-perfect interfaces that drive outcomes.",
  },
  {
    icon: "⬡",
    title: "Brand Identity",
    desc: "Logos, design systems, motion language, and visual identity that make your brand unmistakable.",
  },
  {
    icon: "◎",
    title: "Design Systems",
    desc: "Scalable component libraries and tokenised design systems built for growing product teams.",
  },
  {
    icon: "▦",
    title: "UX Research",
    desc: "User interviews, usability testing, and data-driven insights to validate and sharpen your product.",
  },
  {
    icon: "⬭",
    title: "Motion Design",
    desc: "Micro-interactions, onboarding animations, and brand motion that add life to digital products.",
  },
  {
    icon: "◻",
    title: "Landing Pages",
    desc: "High-converting marketing pages crafted around your GTM goals and brand voice.",
  },
  {
    icon: "🛒",
    title: "E-commerce Design",
    desc: "Conversion-optimized shopping experiences built for global brands and scale.",
  },
  {
    icon: "✉",
    title: "Email Design",
    desc: "High-impact email templates and automated flow designs that drive retention.",
  }
];

const GRAPHIC_SERVICES = [
  {
    icon: "✎",
    title: "Typographic Posters",
    desc: "Aggressive, statement-making print and digital posters using heavy display type.",
  },
  {
    icon: "📦",
    title: "Package Design",
    desc: "Physical product packaging that stands out on shelves with bold, minimalist geometry.",
  },
  {
    icon: "✦",
    title: "Social Assets",
    desc: "High-conversion social media kits, templates, and static ad creative for all platforms.",
  },
  {
    icon: "▧",
    title: "Brand Collateral",
    desc: "Business cards, stationary, and physical touchpoints that reinforce your visual identity.",
  },
  {
    icon: "◈",
    title: "3D Illustration",
    desc: "Modern 3D assets and abstract renders that add depth to your digital presence.",
  },
  {
    icon: "♒",
    title: "Merchandise",
    desc: "Apparel and limited edition brand merch designed for your most loyal community members.",
  }
];

const DEV_SERVICES = [
  {
    icon: "⟨/⟩",
    title: "Next.js & React",
    desc: "Production-grade web apps with server-side rendering, edge delivery, and TypeScript throughout.",
  },
  {
    icon: "◉",
    title: "Mobile Apps",
    desc: "Cross-platform React Native apps with native feel, offline support, and seamless UX.",
  },
  {
    icon: "⊞",
    title: "Webflow Development",
    desc: "CMS-powered marketing sites and landing pages in Webflow — no-compromise quality.",
  },
  {
    icon: "⬟",
    title: "API & Backend",
    desc: "REST and GraphQL APIs, database architecture, and backend integrations built to scale.",
  },
  {
    icon: "▷",
    title: "Performance Optimisation",
    desc: "Core Web Vitals, bundle optimisation, and CDN strategy — making your product lightning fast.",
  },
  {
    icon: "⟳",
    title: "Maintenance & Growth",
    desc: "Ongoing retainer support, feature development, and technical growth strategy post-launch.",
  },
  {
    icon: "⚡",
    title: "Headless Commerce",
    desc: "Shopify Hydrogen and Sanity integrations for the fastest shopping experiences on earth.",
  },
  {
    icon: "🔍",
    title: "Technical SEO",
    desc: "Deep-dive architectural audits and implementation to ensure your product ranks #1.",
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", paddingBottom: "120px", backgroundColor: "var(--color-white)", minHeight: "100vh" }}>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          {/* Background Watermark */}
          <div style={{ position: "absolute", top: "-50px", right: "-100px", fontSize: "15vw", fontWeight: 900, color: "var(--color-bg-alt)", zIndex: -1, opacity: 0.5, pointerEvents: "none", fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}>
            SERVICES
          </div>

          {/* Header Section */}
          <div style={{ borderBottom: "8px solid var(--color-dark)", paddingBottom: "3rem", marginBottom: "5rem" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", lineHeight: 0.85, letterSpacing: "-0.04em", wordBreak: "break-word" }}>
              Our Services
            </h1>
          </div>
          
          {/* Intro Section */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "6rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-brand-blue)", maxWidth: "800px", lineHeight: 1.4 }}>
              We provide end-to-end design and engineering solutions for the world's most ambitious brands.
            </p>
            <div style={{ borderLeft: "8px solid var(--color-brand-orange)", paddingLeft: "2rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", color: "var(--color-dark)", lineHeight: 1.8, maxWidth: "800px", fontWeight: 500 }}>
                Ninety5 is built on the principle that design and development are inseparable. We do not just make things look good; we make them work perfectly. Our services are divided into two core pillars: High-Fidelity Design and Scalable Engineering.
              </p>
            </div>
            {/* Modern Accent */}
            <div style={{ position: "absolute", top: "20%", left: "-10%", width: "300px", height: "4px", background: "var(--color-brand-blue)", transform: "rotate(-15deg)", zIndex: -1 }}></div>
          </div>

          {/* Three-column panels */}
          <div className={styles.panels} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
            {/* Design */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTag}>Product Design</span>
                <h3 className={styles.panelTitle}>Craft that converts</h3>
              </div>
              <div className={styles.serviceList}>
                {DESIGN_SERVICES.map((s, i) => (
                  <div key={s.title} className={styles.serviceItem}>
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
                <span className={`${styles.panelTag} ${styles.panelTagOrange}`}>Graphic Design</span>
                <h3 className={styles.panelTitle}>Visual Impact</h3>
              </div>
              <div className={styles.serviceList}>
                {GRAPHIC_SERVICES.map((s, i) => (
                  <div key={s.title} className={styles.serviceItem}>
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
                <span className={`${styles.panelTag} ${styles.panelTagDark}`}>Development</span>
                <h3 className={`${styles.panelTitle} ${styles.panelTitleDark}`}>Code that scales</h3>
              </div>
              <div className={styles.serviceList}>
                {DEV_SERVICES.map((s, i) => (
                  <div key={s.title} className={`${styles.serviceItem} ${styles.serviceItemDark}`}>
                    <span className={styles.serviceIconDark} aria-hidden="true">{s.icon}</span>
                    <div>
                      <div className={`${styles.serviceName} ${styles.serviceNameDark}`}>{s.title}</div>
                      <div className={`${styles.serviceDesc} ${styles.serviceDescDark}`}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div style={{ borderTop: "8px solid var(--color-dark)", paddingTop: "5rem", marginTop: "8rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", lineHeight: 1 }}>Ready to build?</h2>
            <a href="/contact" className="btn btn-primary" style={{ padding: "1.5rem 3rem", fontSize: "1.25rem", borderRadius: 0, textTransform: "uppercase", fontWeight: 800, textDecoration: "none", boxShadow: "8px 8px 0 var(--color-brand-orange)" }}>
              Start a Project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
