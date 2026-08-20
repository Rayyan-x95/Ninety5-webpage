"use client";

import styles from "./MarqueeStrip.module.css";

const ITEMS = [
  "Graphic Design",
  "Investor Pitch Decks",
  "Product UI/UX",
  "Video Editing & Motion",
  "Branded Content Suite",
  "In-House SaaS Products",
  "Design Systems",
  "Next.js Engineering",
  "Brand Identity",
  "Conversion Rate Optimization",
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
