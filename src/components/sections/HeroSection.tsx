"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";


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


      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
