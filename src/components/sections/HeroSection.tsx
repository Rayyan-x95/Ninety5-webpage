"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Entrance sequence (Preserve SSR paint visibility for instant LCP)
      tl.fromTo(
        `.${styles.gridOverlay}`,
        { opacity: 0 },
        { opacity: 1, duration: 1.0 }
      )
        .fromTo(
          `.${styles.orbBlue}`,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          0.1
        )
        .fromTo(
          `.${styles.orbOrange}`,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          0.2
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Background layers */}
      <div className={styles.gridOverlay} />
      <div className={styles.orbBlue} />
      <div className={styles.orbOrange} />
      <div className={styles.noiseLayer} />

      {/* Vertical rules */}
      <div className={styles.vRule} style={{ left: "25%" }} />
      <div className={styles.vRule} style={{ left: "50%" }} />
      <div className={styles.vRule} style={{ left: "75%" }} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Main Hero Headline */}
          <h1 ref={headlineRef} className={styles.headline}>
            <span>We Design</span>{" "}
            <span className={styles.headlineHighlight}>&amp; Build</span><br />
            Digital <span className={styles.headlineAccent}>Products</span><br />
            <span>That Define <span className={styles.headlineStrike}>Industries.</span></span>
          </h1>
        </div>
      </div>
    </section>
  );
}
