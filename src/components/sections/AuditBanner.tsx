"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./AuditBanner.module.css";

export default function AuditBanner() {
  const ref = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className={styles.bannerWrapper} id="free-audit">
      <div className={styles.glow} />
      <div className="container">
        <div className={`reveal ${styles.inner}`}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Zero-Risk Diagnostic</span>
            </div>
            <h2 className={styles.title}>
              Want to Know Why Your Current Site Isn&apos;t Converting?
            </h2>
            <p className={styles.desc}>
              Send us your website URL or Figma link. We&apos;ll record a bespoke 5-minute video breakdown detailing your UI hierarchy flaws, drop-off points, and Core Web Vitals speed bottlenecks — delivered to your inbox within 48 hours. Completely free.
            </p>
          </div>

          <div className={styles.ctaGroup}>
            <a href="/contact?audit=true" className={styles.btnAudit} id="audit-banner-btn">
              <span>Claim Free 48h Audit</span>
              <span>↗</span>
            </a>
            <span className={styles.note}>No sales pitch • Actionable video report • 100% confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}
