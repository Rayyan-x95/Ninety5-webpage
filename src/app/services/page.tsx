import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/components/sections/ServicesSection.module.css";
import ComparisonTable from "@/components/sections/ComparisonTable";
import AuditBanner from "@/components/sections/AuditBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Design, Pitch Decks & Web Engineering Services | Ninety5 Studio",
  description:
    "Explore Ninety5 Studio's comprehensive capabilities: Graphic Design & Investor Pitch Decks, UI/UX Product Design, Video Editing, Design Systems, and Next.js Web Development.",
  keywords: [
    "Graphic design services India",
    "Investor pitch deck design agency",
    "UI/UX product design studio",
    "Next.js web development agency",
    "Video editing and motion graphics studio",
    "Branded content creation retainers",
    "Design systems architecture",
    "Full stack digital agency Chennai",
  ],
  alternates: {
    canonical: "https://ninety5.in/services",
  },
  openGraph: {
    title: "Services & Capabilities | Ninety5 Studio",
    description:
      "Graphic Design, Investor Pitch Decks, UI/UX Systems, Video Editing, and High-Performance Next.js Engineering.",
    url: "https://ninety5.in/services",
    type: "website",
  },
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
    icon: "◇",
    title: "UX Research",
    desc: "User interviews, usability testing, heuristic analysis, and actionable insights to derisk decisions.",
  },
  {
    icon: "◻",
    title: "Interaction Design",
    desc: "Micro-interactions, state transitions, and animation that make products feel responsive and alive.",
  },
  {
    icon: "○",
    title: "Design Audits",
    desc: "Comprehensive review of existing products — identifying UX friction, accessibility, and visual debt.",
  },
];

const GRAPHIC_SERVICES = [
  {
    icon: "✎",
    title: "Graphic Design & Collateral",
    desc: "Aggressive, statement-making pitch decks, whitepapers, print collateral, and marketing visuals.",
  },
  {
    icon: "▷",
    title: "Video Editing & Motion",
    desc: "High-retention product walkthroughs, viral short-form clips, kinetic typography, and motion design.",
  },
  {
    icon: "✦",
    title: "Branded Content Suite",
    desc: "LinkedIn slide carousels, newsletter design, and omni-channel recurring content creation retainers.",
  },
  {
    icon: "▲",
    title: "Investor Pitch Decks",
    desc: "Visually commanding, data-dense presentations engineered to help founders close funding rounds.",
  },
  {
    icon: "❖",
    title: "3D & Spatial Visuals",
    desc: "Product renders, abstract 3D visual assets, and immersive brand graphics that elevate perception.",
  },
  {
    icon: "◩",
    title: "Packaging & Print",
    desc: "Physical packaging, merchandise, editorial lookbooks, and high-end print collateral.",
  },
];

const DEV_SERVICES = [
  {
    icon: "⟨/⟩",
    title: "Full-Stack Web Apps",
    desc: "React, Next.js, Node, and TypeScript applications built for speed, reliability, and scale.",
  },
  {
    icon: "⚡",
    title: "Static & Marketing Sites",
    desc: "Fast, SEO-optimised websites with sub-second page loads and seamless headless CMS integration.",
  },
  {
    icon: "⬢",
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android apps using React Native and Flutter with native performance.",
  },
  {
    icon: "☵",
    title: "Headless CMS & APIs",
    desc: "Sanity, Strapi, REST, and GraphQL architectures built for content flexibility and performance.",
  },
  {
    icon: "◫",
    title: "E-Commerce",
    desc: "Shopify Hydrogen, custom checkouts, and high-conversion storefronts designed to sell.",
  },
  {
    icon: "⚙",
    title: "Technical SEO",
    desc: "Deep-dive architectural audits and implementation to ensure your product ranks #1.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" style={{ paddingTop: "100px", backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
        
        {/* Main Services Grid */}
        <section className={styles.section}>
          <div className="container">
            {/* Header */}
            <div className={styles.header}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  <span className={styles.eyebrowText}>NINETY5 CAPABILITIES</span>
                </div>
                <h1 className={styles.title}>Our Services</h1>
              </div>
              <p className={styles.sub}>
                We combine product strategy, world-class design craft, and engineering precision under one roof. No silos, no handoff friction.
              </p>
            </div>

            {/* Three-column panels */}
            <div className={styles.panels}>
              {/* 01 // Graphic Design & Creative Suite */}
              <div className={`${styles.panel} ${styles.panelOrange}`}>
                <div className={styles.panelHeader}>
                  <span className={`${styles.panelTag} ${styles.panelTagOrange}`}>01 // Graphic Design &amp; Creative</span>
                  <h2 className={styles.panelTitle}>Visual Impact &amp; Pitch Decks</h2>
                </div>
                <div className={styles.serviceList}>
                  {GRAPHIC_SERVICES.map((s) => (
                    <a key={s.title} href={s.title.includes("Graphic") || s.title.includes("Pitch") ? "/services/graphic-design" : s.title.includes("Video") ? "/services/video-editing" : s.title.includes("Branded") ? "/services/branded-content" : "/services/brand-identity"} className={styles.serviceItem} style={{ textDecoration: "none" }}>
                      <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                      <div>
                        <div className={styles.serviceName}>{s.title} ↗</div>
                        <div className={styles.serviceDesc}>{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 02 // Product Design */}
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <span className={styles.panelTag}>02 // Product &amp; UX/UI</span>
                  <h2 className={styles.panelTitle}>Craft That Converts</h2>
                </div>
                <div className={styles.serviceList}>
                  {DESIGN_SERVICES.map((s) => (
                    <a key={s.title} href={s.title.includes("Product") ? "/services/product-design" : s.title.includes("Brand") ? "/services/brand-identity" : s.title.includes("Systems") ? "/services/design-systems" : "/services/ux-research"} className={styles.serviceItem} style={{ textDecoration: "none" }}>
                      <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                      <div>
                        <div className={styles.serviceName}>{s.title} ↗</div>
                        <div className={styles.serviceDesc}>{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 03 // Development */}
              <div className={`${styles.panel} ${styles.panelDark}`}>
                <div className={styles.panelHeader}>
                  <span className={`${styles.panelTag} ${styles.panelTagDark}`}>03 // Engineering</span>
                  <h2 className={`${styles.panelTitle} ${styles.panelTitleDark}`}>Code That Scales</h2>
                </div>
                <div className={styles.serviceList}>
                  {DEV_SERVICES.map((s) => (
                    <a key={s.title} href={s.title.includes("Mobile") ? "/services/mobile-apps" : "/services/web-development"} className={`${styles.serviceItem} ${styles.serviceItemDark}`} style={{ textDecoration: "none" }}>
                      <span className={styles.serviceIconDark} aria-hidden="true">{s.icon}</span>
                      <div>
                        <div className={`${styles.serviceName} ${styles.serviceNameDark}`}>{s.title} ↗</div>
                        <div className={`${styles.serviceDesc} ${styles.serviceDescDark}`}>{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Comparison */}
        <ComparisonTable />

        {/* Audit Lead Magnet */}
        <AuditBanner />
      </main>
      <Footer />
    </>
  );
}
