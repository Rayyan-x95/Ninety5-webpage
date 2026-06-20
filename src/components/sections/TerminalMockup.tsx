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

export default function TerminalMockup() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance sequence for terminal and its typing lines
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo.out" }
      );

      gsap.fromTo(
        `.${styles.termLine}`,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "expo.out", delay: 0.4 }
      );

      // Floating animation for terminal
      gsap.to(terminalRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.terminalWrap}>
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
          <div className={styles.termStat} aria-label="Retention increase: +280%">
            <span className={styles.termStatVal}>+280%</span>
            <span className={styles.termStatLabel}>RETENTION</span>
          </div>
          <div className={styles.termStatDivider} />
          <div className={styles.termStat} aria-label="Average Rating: 4.9 out of 5 stars">
            <span className={styles.termStatVal}>4.9★</span>
            <span className={styles.termStatLabel}>RATING</span>
          </div>
          <div className={styles.termStatDivider} />
          <div className={styles.termStat} aria-label="Shipped projects: 100+">
            <span className={styles.termStatVal}>100+</span>
            <span className={styles.termStatLabel}>SHIPPED</span>
          </div>
        </div>

        {/* Corner accents */}
        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />
      </div>
    </div>
  );
}
