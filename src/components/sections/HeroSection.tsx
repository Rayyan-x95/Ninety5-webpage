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

      // Entrance sequence
      tl.fromTo(
        `.${styles.gridOverlay}`,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, rotateX: 10 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2 },
          0.3
        )
        .fromTo(
          `.${styles.orbBlue}`,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
          0.4
        )
        .fromTo(
          `.${styles.orbOrange}`,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
          0.6
        );

      // Slow orbit for glows
      gsap.to(`.${styles.orbBlue}`, {
        x: 20,
        y: -15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(`.${styles.orbOrange}`, {
        x: -15,
        y: 20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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
