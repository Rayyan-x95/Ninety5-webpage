"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./ComparisonTable.module.css";

const COMPARISON_ROWS = [
  {
    criterion: "Delivery Velocity",
    freelancer: "Variable (4–12 weeks)",
    agency: "Slow (3–6 months)",
    ninety5: "2–6 week agile sprints",
    winner: "ninety5",
  },
  {
    criterion: "Design & Code Integration",
    freelancer: "Design only (handoff gap)",
    agency: "Siloed departments",
    ninety5: "Tokenized Figma to Next.js",
    winner: "ninety5",
  },
  {
    criterion: "Senior Operator Access",
    freelancer: "Hit or miss",
    agency: "Passed to junior staff",
    ninety5: "Direct access to founder & leads",
    winner: "ninety5",
  },
  {
    criterion: "Performance & Core Web Vitals",
    freelancer: "Rarely audited",
    agency: "Bloated page templates",
    ninety5: "Sub-second load times guaranteed",
    winner: "ninety5",
  },
  {
    criterion: "Pricing Structure",
    freelancer: "Unpredictable hourly billing",
    agency: "Heavy $25k–$100k+ overhead",
    ninety5: "Transparent fixed-scope or retainer",
    winner: "ninety5",
  },
];

export default function ComparisonTable() {
  const ref = useReveal<HTMLElement>(0.06);

  return (
    <section ref={ref} className={styles.section} id="why-ninety5">
      <div className="container">
        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>THE NINETY5 ADVANTAGE</span>
          </div>
          <h2 className={styles.title}>Why Modern Founders Choose Us.</h2>
          <p className={styles.sub}>
            Traditional agencies are bloated and slow. Freelancers lack engineering rigor. Ninety5 gives you senior execution with extreme velocity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`reveal ${styles.tableWrapper}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Evaluation Factor</th>
                <th className={styles.th}>Freelancers</th>
                <th className={styles.th}>Traditional Agency</th>
                <th className={`${styles.th} ${styles.thFeatured}`}>Ninety5 Collective</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className={styles.tr}>
                  <td className={styles.td}>
                    <strong>{row.criterion}</strong>
                  </td>
                  <td className={styles.td}>
                    <span className={styles.badgeWarning}>⚠ {row.freelancer}</span>
                  </td>
                  <td className={styles.td}>
                    <span className={styles.badgeNo}>✕ {row.agency}</span>
                  </td>
                  <td className={`${styles.td} ${styles.tdFeatured}`}>
                    <span className={styles.badgeYes}>✓ {row.ninety5}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
