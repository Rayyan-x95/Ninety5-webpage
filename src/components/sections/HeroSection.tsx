"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

const TYPING_LINES = [
  { prefix: "const", keyword: "studio", operator: "=", value: '"Ninety5";' },
  { prefix: "const", keyword: "craft", operator: "=", value: '["Design", "Code", "Ship"];' },
  { prefix: "const", keyword: "impact", operator: "=", value: "280;" },
  { prefix: "//", keyword: "", operator: "", value: "Building what matters." },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

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
          `.${styles.headlineLine}`,
          { opacity: 0, y: 80, rotateX: 40 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.12 },
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
          `.${styles.terminal}`,
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          0.6
        )
        .fromTo(
          `.${styles.termLine}`,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.15 },
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

      // Floating animation for terminal
      gsap.to(`.${styles.terminal}`, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

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
            <span className={styles.headlineLine}>
              <span className={styles.headlineWord}>We</span>{" "}
              <span className={styles.headlineOutline}>Design</span>
            </span>
            <span className={styles.headlineLine}>
              <span className={styles.headlineHighlight}>&amp; Build</span>{" "}
              <span className={styles.headlineWord}>Digital</span>
            </span>
            <span className={styles.headlineLine}>
              <span className={styles.headlineAccent}>Products</span>{" "}
              <span className={styles.headlineWord}>That</span>
            </span>
            <span className={styles.headlineLine}>
              <span className={styles.headlineWord}>Define</span>{" "}
              <span className={styles.headlineStrike}>Industries.</span>
            </span>
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Full-stack studio crafting high-performance experiences — from
            strategy to pixel to production code.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <a href="#work" className={styles.ctaPrimary} id="hero-view-work-btn">
              <span className={styles.ctaText}>Explore Work</span>
              <span className={styles.ctaArrow}>↗</span>
            </a>
            <a href="#contact" className={styles.ctaSecondary} id="hero-contact-btn">
              <span className={styles.ctaText}>Start a Project</span>
              <span className={styles.ctaPulse} />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Terminal ── */}
        <div className={styles.terminalWrap}>
          <div ref={terminalRef} className={styles.terminal}>
            {/* Terminal chrome */}
            <div className={styles.termHeader}>
              <div className={styles.termDots}>
                <span className={styles.termDotR} />
                <span className={styles.termDotY} />
                <span className={styles.termDotG} />
              </div>
              <span className={styles.termTitle}>ninety5 — zsh</span>
              <div className={styles.termActions}>
                <span className={styles.termLive}>
                  <span className={styles.termLiveDot} />
                  LIVE
                </span>
              </div>
            </div>

            {/* Terminal body */}
            <div className={styles.termBody}>
              {TYPING_LINES.map((line, i) => (
                <div key={i} className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termPrefix}>{line.prefix}</span>{" "}
                  <span className={styles.termKeyword}>{line.keyword}</span>{" "}
                  <span className={styles.termOp}>{line.operator}</span>{" "}
                  <span className={styles.termValue}>{line.value}</span>
                </div>
              ))}
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>❯</span>
                <span className={styles.termCursor} />
              </div>
            </div>

            {/* Terminal stats bar */}
            <div className={styles.termStats}>
              <div className={styles.termStat}>
                <span className={styles.termStatVal}>+280%</span>
                <span className={styles.termStatLabel}>RETENTION</span>
              </div>
              <div className={styles.termStatDivider} />
              <div className={styles.termStat}>
                <span className={styles.termStatVal}>4.9★</span>
                <span className={styles.termStatLabel}>RATING</span>
              </div>
              <div className={styles.termStatDivider} />
              <div className={styles.termStat}>
                <span className={styles.termStatVal}>100+</span>
                <span className={styles.termStatLabel}>SHIPPED</span>
              </div>
            </div>

            {/* Corner accents */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />
          </div>
        </div>
      </div>

      {/* ── Bottom proof bar ── */}
      <div className={styles.proofBar}>
        <div className={`container ${styles.proofInner}`}>
          <div className={styles.proofLeft}>
            <div className={styles.avatarStack}>
              {["#1B4FFF", "#7C3AED", "#059669", "#D97706"].map((c, i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{ background: c, zIndex: 4 - i }}
                >
                  {["AM", "JK", "SP", "TR"][i]}
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              Trusted by <strong>100+ founders</strong> worldwide
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
