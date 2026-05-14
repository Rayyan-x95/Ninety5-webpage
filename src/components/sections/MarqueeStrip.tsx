"use client";

import styles from "./MarqueeStrip.module.css";

const ITEMS = [
  "UI/UX Design",
  "Product Strategy",
  "Brand Identity",
  "React & Next.js",
  "Mobile Apps",
  "Design Systems",
  "Motion Design",
  "Webflow",
  "Performance",
  "Research",
];

export default function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
