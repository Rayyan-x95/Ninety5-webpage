"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

const TerminalMockup = dynamic(() => import("./TerminalMockup"), {
  ssr: false,
});

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
          `.${styles.eyebrow}`,
          { opacity: 0, y: 20, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.8 },
          0.2
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, rotateX: 10 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2 },
          0.3
        )
        .fromTo(
          `.${styles.sub}`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        )
        .fromTo(
          `.${styles.ctaGroup}`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.0
        )
        .fromTo(
          `.${styles.proofBar}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.2
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
        {/* ── LEFT COLUMN ── */}
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowLabel}>NINETY5.IN</span>
            <span className={styles.eyebrowDivider}>—</span>
            <span className={styles.eyebrowLabel}>DESIGN &amp; ENGINEERING</span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className={styles.headline}>
            We <span className={styles.headlineOutline}>Design</span> <span className={styles.headlineHighlight}>&amp; Build</span> Digital <span className={styles.headlineAccent}>Products</span> That Define <span className={styles.headlineStrike}>Industries.</span>
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Full-stack studio crafting high-performance experiences — from
            strategy to pixel to production code.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.ctaPrimary} id="hero-contact-btn">
              <span className={styles.ctaText}>Start a Project</span>
              <span className={styles.ctaPulse} />
            </a>
            <a href="#work" className={styles.ctaSecondary} id="hero-view-work-btn">
              <span className={styles.ctaText}>Explore Work</span>
              <span className={styles.ctaArrow}>↗</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Terminal ── */}
        <TerminalMockup />
      </div>

      {/* ── Bottom proof bar ── */}
      <div className={styles.proofBar}>
        <div className={`container ${styles.proofInner}`}>
          <div className={styles.proofLeft}>
            <span className={styles.trustTitle}>Trusted by:</span>
            <div className={styles.logos}>
              <Image src="/logos/atlas.svg" alt="Logo: Atlas Analytics" width={80} height={20} className={styles.logoItem} />
              <Image src="/logos/bloom.svg" alt="Logo: Bloom Health" width={80} height={20} className={styles.logoItem} />
              <Image src="/logos/forge.svg" alt="Logo: Forge Dev Tools" width={80} height={20} className={styles.logoItem} />
              <Image src="/logos/orbit.svg" alt="Logo: Orbit Labs" width={80} height={20} className={styles.logoItem} />
              <Image src="/logos/vertex.svg" alt="Logo: Vertex SaaS" width={80} height={20} className={styles.logoItem} />
            </div>
          </div>
          <div className={styles.proofRight}>
            <div className={styles.proofTag}>Next.js</div>
            <div className={styles.proofTag}>React Native</div>
            <div className={styles.proofTag}>Figma</div>
            <div className={styles.proofTag}>TypeScript</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollCue}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollLabel}>SCROLL</span>
      </div>
    </section>
  );
}
