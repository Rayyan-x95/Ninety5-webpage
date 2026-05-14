"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const BARS = [40, 70, 45, 90, 65, 80, 50, 60];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        {/* ── LEFT: Main Content ── */}
        <div className={styles.content}>

          {/* Eyebrow */}
          <div className={`reveal ${styles.eyebrow}`}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>NINETY5.STUDIO</span>
            <span className={styles.eyebrowSep}>·</span>
            <span className={styles.eyebrowText}>EST. 2023</span>
          </div>

          {/* Headline */}
          <h1 className={`reveal reveal-delay-1 ${styles.headline}`}>
            WE{" "}
            <span className={styles.headlineOutline}>DESIGN</span>
            <br />
            <span className={styles.headlineBlock}>& BUILD</span>
            <br />
            EXCEPTIONAL
            <br />
            <span className={styles.headlineAccent}>PRODUCTS.</span>
          </h1>

          {/* Sub */}
          <p className={`reveal reveal-delay-2 ${styles.sub}`}>
            A brutalist design and engineering studio crafting
            high-performance digital products that define industries —
            from concept to deployment.
          </p>

          {/* CTAs */}
          <div className={`reveal reveal-delay-3 ${styles.ctas}`}>
            <a href="#work" className="btn btn-primary" id="hero-view-work-btn">
              Explore Work ↗
            </a>
            <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
              Start a Project
            </a>
          </div>

          {/* Social proof */}
          <div className={`reveal reveal-delay-4 ${styles.proof}`}>
            <div className={styles.avatarRow}>
              {["#1B4FFF", "#7C3AED", "#059669", "#D97706"].map((c, i) => (
                <div key={i} className={styles.avatar} style={{ background: c, zIndex: 4 - i }}>
                  {["AM", "JK", "SP", "TR"][i]}
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              <strong>100+ clients</strong> worldwide trust Ninety5
            </div>
          </div>
        </div>

        {/* ── RIGHT: Dashboard Visual ── */}
        <div className={`reveal reveal-delay-2 ${styles.visual}`}>

          {/* Status badge top */}
          <div className={styles.badgeTop}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeLabel}>OPEN FOR WORK</span>
          </div>

          {/* Main card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span /><span /><span />
              </div>
              <span className={styles.cardTitle}>STUDIO_DASHBOARD</span>
              <span className={styles.cardLive}>
                <span className={styles.liveDot} />LIVE
              </span>
            </div>

            {/* Metrics row */}
            <div className={styles.metricsRow}>
              {[
                { v: "+300%", l: "ROI" },
                { v: "4.9★", l: "Rating" },
                { v: "98%", l: "Retention" },
              ].map((m) => (
                <div key={m.l} className={styles.metricBox}>
                  <div className={styles.metricVal}>{m.v}</div>
                  <div className={styles.metricLabel}>{m.l}</div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className={styles.chart}>
              <div className={styles.chartBars}>
                {BARS.map((h, i) => (
                  <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className={styles.chartAxis}>
                {["M", "T", "W", "T", "F", "S", "S", "M"].map((d, i) => (
                  <span key={i} className={styles.axisLabel}>{d}</span>
                ))}
              </div>
            </div>

            {/* Client list */}
            <div className={styles.clientRow}>
              {["ATLAS", "BLOOM", "FORGE", "ORBIT"].map((c) => (
                <span key={c} className={styles.clientTag}>{c}</span>
              ))}
            </div>
          </div>

          {/* Config sidebar */}
          <div className={styles.sidePanel}>
            <span className={styles.sidePanelLine}>// config</span>
            <span className={styles.sidePanelLine}>ver: <em>2025</em></span>
            <span className={styles.sidePanelLine}>mode: <em>premium</em></span>
            <div className={styles.sideDivider} />
            <span className={styles.sidePanelHead}>PALETTE</span>
            {[
              { bg: "#1B4FFF", hex: "#1B4F" },
              { bg: "#FF5B00", hex: "#FF5B" },
              { bg: "#0C0C0A", hex: "#0C0C" },
            ].map((s) => (
              <div key={s.hex} className={styles.swatch} style={{ background: s.bg }}>
                <span className={styles.swatchHex}>{s.hex}</span>
              </div>
            ))}
          </div>

          {/* Crop marks */}
          <div className={styles.cropTL} />
          <div className={styles.cropBR} />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
