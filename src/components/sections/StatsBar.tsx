"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./StatsBar.module.css";

const STATS = [
  { value: "100", suffix: "+", label: "Projects Delivered" },
  { value: "98",  suffix: "%", label: "Client Satisfaction" },
  { value: "4.9", suffix: "★", label: "Average Rating" },
  { value: "3",   suffix: "×", label: "Avg. ROI Increase" },
];

export default function StatsBar() {
  const ref = useReveal<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className={styles.statsBar} id="stats">
      <div className={`container ${styles.inner}`}>
        {STATS.map((s, i) => (
          <div key={s.label} className={`reveal reveal-delay-${i + 1} ${styles.metric}`}>
            <div className={styles.metricValue}>
              {s.value}<span>{s.suffix}</span>
            </div>
            <div className={styles.metricLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
