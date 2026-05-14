import styles from "./AnalyticsShowcase.module.css";

export default function AnalyticsShowcase() {
  const bars = [40, 70, 45, 90, 60, 80, 50];

  return (
    <section className={styles.section}>
      {/* Background Watermark */}
      <div className={styles.watermark}>DATA</div>

      <div className="container">
        <div className={styles.wrapper}>
          {/* Side Log (Filling space) */}
          <div className={styles.sideLog}>
            <div className={styles.logHeader}>SYSTEM_LOG // v1.0.4</div>
            <div className={styles.logEntries}>
              <div>[04:22:15] SYNCING...</div>
              <div>[04:22:16] UPLINK STABLE</div>
              <div>[04:22:18] DATA_STREAM ACTIVE</div>
              <div>[04:22:20] LOAD 65%</div>
              <div className={styles.logHighlight}>OPTIMIZING_RESOURCES</div>
            </div>
          </div>

          <div className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.dotGrid}>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.liveIndicator}>
                  <span className={styles.pulse}></span>
                  LIVE SYSTEM MONITOR
                </div>
                <h2 className={styles.title}>
                  ANALYTICS<br />
                  DASHBOARD
                </h2>
              </div>
            </div>

            <div className={styles.divider}></div>

            {/* Chart Area */}
            <div className={styles.chartArea}>
              <div className={styles.bars}>
                {bars.map((height, i) => (
                  <div 
                    key={i} 
                    className={styles.bar} 
                    style={{ '--height': `${height}%` } as any}
                  >
                    <div className={styles.barFill}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
              <div className={styles.controlRow}>
                <span className={styles.label}>STATUS</span>
                <span className={styles.statusBox}>ONLINE</span>
              </div>
              <div className={styles.controlRow}>
                <span className={styles.label}>LOAD</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>
              <div className={styles.controlRow}>
                <span className={styles.label}>NETWORK</span>
                <span className={styles.statusBox}>STABLE</span>
              </div>
            </div>

            <div className={styles.divider}></div>

            {/* Bottom Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>+124<sup>%</sup></div>
                <div className={styles.statLabel}>GROWTH</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>4.8<sub>s</sub></div>
                <div className={styles.statLabel}>AVG. SPEED</div>
              </div>
            </div>

            {/* Design Spec Elements */}
            <div className={styles.designSpecs}>
              <div className={styles.swatches}>
                <span className={styles.swatch} style={{ backgroundColor: "var(--color-brand-blue)" }}></span>
                <span className={styles.swatch} style={{ backgroundColor: "var(--color-brand-orange)" }}></span>
                <span className={styles.swatch} style={{ backgroundColor: "var(--color-dark)" }}></span>
                <span className={styles.hexCode}>#1B4FFF</span>
              </div>
              <div className={styles.dimensionX}>800px</div>
            </div>
          </div>
          
          {/* External Design Elements */}
          <div className={styles.cropMarkTL}></div>
          <div className={styles.cropMarkTR}></div>
          <div className={styles.cropMarkBL}></div>
          <div className={styles.cropMarkBR}></div>
          <div className={styles.sideDimension}>HEIGHT: 620px</div>
          
          {/* Floating Modern Shapes */}
          <div className={styles.floatingTag}>REAL-TIME DATA</div>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
        </div>
      </div>
    </section>
  );
}
