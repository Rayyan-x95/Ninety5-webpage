"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollExperience.module.css";

const STAGES = [
  {
    num: "01",
    tag: "DISCOVERY // IA",
    title: "Heuristic Wireframing",
    desc: "We deconstruct user workflows into high-density architecture diagrams and accessible wireframe nodes before touching layout cosmetics.",
    telemetry: "IA_GRAPH // 48 NODES VALIDATED",
  },
  {
    num: "02",
    tag: "SYSTEM // TOKENS",
    title: "Tokenized Design System",
    desc: "Every color, spacing unit, and typography curve is mapped to atomic JSON design variables, syncing Figma components 1-to-1 with code.",
    telemetry: "TOKENS // 180+ CSS VARIABLES SYNCED",
  },
  {
    num: "03",
    tag: "ENGINEERING // NEXT.JS",
    title: "Full-Stack RSC Architecture",
    desc: "We write strict TypeScript and utilize React 19 Server Components to eliminate client-side JavaScript bloat and ensure sub-second loads.",
    telemetry: "BUNDLE // < 95KB ZERO-JS SERVER CORE",
  },
  {
    num: "04",
    tag: "OUTPUT // CONVERSION",
    title: "100/100 Core Web Vitals",
    desc: "Sub-0.8s Largest Contentful Paint and automated Search Console indexing guarantee peak organic visibility and instant client conversion.",
    telemetry: "PERF // LIGHTHOUSE 100/100 VERIFIED",
  },
];

const CODE_SNIPPETS = {
  page: `// app/analytics/page.tsx — React 19 Server Component
import { getPerformanceMetrics } from "@/lib/telemetry";
import { MetricChart } from "@/components/MetricChart";

export default async function AnalyticsPage() {
  const data = await getPerformanceMetrics({ cache: "force-cache" });

  return (
    <main className="dashboard-grid">
      <header className="flex justify-between items-center">
        <h1 className="font-display text-4xl">System Telemetry</h1>
        <span className="badge-live">Sub-second Latency</span>
      </header>
      <MetricChart dataset={data.vitals} score={100} />
    </main>
  );
}`,
  telemetry: `// lib/telemetry.ts — Edge Data Pipeline
export async function getPerformanceMetrics(opts: { cache: string }) {
  const start = performance.now();
  const res = await fetch("https://api.ninety5.in/v1/telemetry", {
    next: { revalidate: 3600, tags: ["telemetry"] }
  });
  const data = await res.json();
  const latency = Math.round(performance.now() - start);

  return { ...data, latency: \`\${latency}ms\` };
}`,
  schema: `// prisma/schema.prisma — Tokenized Database Model
model SystemAudit {
  id           String   @id @default(cuid())
  domain       String   @unique
  lighthouse   Int      @default(100)
  lcpScore     Float    @default(0.58)
  clsScore     Float    @default(0.00)
  createdAt    DateTime @default(now())
}`
};

export default function ScrollExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [activeCodeTab, setActiveCodeTab] = useState<"page" | "telemetry" | "schema">("page");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 25%",
        end: "bottom 75%",
        onUpdate: (self) => {
          const progress = self.progress;
          const stageIndex = Math.min(3, Math.floor(progress * 4));
          setActiveStage(stageIndex);

          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${Math.min(100, Math.max(5, progress * 100))}%`;
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleCopy = (token: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <section ref={sectionRef} className={styles.section} id="architecture">
      <div className="container">
        
        {/* Intro */}
        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>THE NINETY5 STANDARD</span>
          </div>
          <h2 className={styles.title}>
            From Heuristic Wireframes<br />
            To Production Code.
          </h2>
          <p className={styles.subtitle}>
            Scroll through our systematic pipeline. We eliminate the traditional gap between design intention and frontend execution.
          </p>
        </div>

        {/* Dynamic Global Stage Progress Bar */}
        <div className={styles.progressTrack}>
          <div ref={progressBarRef} className={styles.progressBar} />
        </div>

        {/* Pinned Architecture Stage Container */}
        <div ref={containerRef} className={styles.pinnedContainer}>
          
          {/* Left Column: Stage Selector Cards */}
          <div className={styles.trackerCol}>
            {STAGES.map((s, idx) => (
              <div
                key={s.num}
                className={`${styles.stageCard} ${activeStage === idx ? styles.stageCardActive : ""}`}
                onClick={() => setActiveStage(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveStage(idx); }}
              >
                <div className={styles.stageHeader}>
                  <span className={styles.stageNumber}>STAGE_{s.num}</span>
                  <span className={styles.stageTag}>{s.tag}</span>
                </div>
                <h3 className={styles.stageTitle}>{s.title}</h3>
                <p className={styles.stageDesc}>{s.desc}</p>
                {activeStage === idx && <div className={styles.activeIndicatorLine} />}
              </div>
            ))}
          </div>

          {/* Right Column: Live Interactive Viewport */}
          <div className={styles.canvasCol}>
            
            {/* Window Topbar */}
            <div className={styles.canvasTopBar}>
              <div className={styles.windowControls}>
                <span className={styles.controlDot} />
                <span className={styles.controlDot} />
                <span className={styles.controlDot} />
                <span className={styles.windowTitle}>NINETY5_ENGINE // {STAGES[activeStage].tag}</span>
              </div>
              <span className={styles.canvasTelemetry}>
                {STAGES[activeStage].telemetry}
              </span>
            </div>

            {/* Viewport Layers */}
            <div className={styles.canvasViewport}>
              
              {/* ── STAGE 1: Interactive Wireframe & Node Blueprint ── */}
              <div className={`${styles.stageLayer} ${activeStage === 0 ? styles.layerActive : ""}`}>
                <div className={styles.blueprintWrapper}>
                  <div className={styles.scanline} />
                  
                  {/* Blueprint Coordinate Header */}
                  <div className={styles.blueprintCoords}>
                    <span>GRID: 12-COL 8PX BASELINE</span>
                    <span>COORDS: X:480 Y:240</span>
                    <span className={styles.pulseLive}>● SCANNING</span>
                  </div>

                  <div className={styles.wireframeGrid}>
                    {/* Sidebar */}
                    <div className={styles.wireframeSidebar}>
                      <div className={styles.nodeTag}>[NODE // NAV_CORE]</div>
                      <div className={styles.wireframeBlock} style={{ width: "85%" }} />
                      <div className={styles.wireframeBlock} style={{ width: "65%" }} />
                      <div className={styles.wireframeBlock} style={{ width: "95%" }} />
                      <div className={styles.wireframeBlock} style={{ width: "45%" }} />
                      <div className={styles.wireframeBadge}>IA_VERIFIED</div>
                    </div>

                    {/* Main Content Area */}
                    <div className={styles.wireframeContent}>
                      <div className={styles.wireframeHeaderRow}>
                        <div className={styles.wireframeBlock} style={{ width: "35%", height: "18px" }} />
                        <div className={styles.wireframePill}>Figma Auto-Layout</div>
                      </div>
                      
                      <div className={styles.wireframeBlock} style={{ width: "100%", height: "12px" }} />
                      
                      <div className={styles.wireframeCardGrid}>
                        <div className={styles.wireframeCard}>
                          <div className={styles.nodeTag}>[NODE // METRIC_A]</div>
                          <div className={styles.wireframeBlock} style={{ width: "70%", height: "14px", marginTop: "6px" }} />
                          <div className={styles.wireframeGraphSim} />
                        </div>
                        <div className={styles.wireframeCard}>
                          <div className={styles.nodeTag}>[NODE // METRIC_B]</div>
                          <div className={styles.wireframeBlock} style={{ width: "80%", height: "14px", marginTop: "6px" }} />
                          <div className={styles.wireframeGraphSimAlt} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow connection path */}
                  <div className={styles.blueprintFooter}>
                    <span className={styles.flowStep}>01 User Research</span>
                    <span className={styles.flowArrow}>→</span>
                    <span className={styles.flowStep}>02 Architecture Nodes</span>
                    <span className={styles.flowArrow}>→</span>
                    <span className={styles.flowStepActive}>03 Tokenized Blueprint</span>
                  </div>
                </div>
              </div>

              {/* ── STAGE 2: Design Tokens Lab ── */}
              <div className={`${styles.stageLayer} ${activeStage === 1 ? styles.layerActive : ""}`}>
                <div className={styles.tokensLayout}>
                  
                  {/* Swatches Grid */}
                  <div className={styles.tokenSwatches}>
                    <button
                      type="button"
                      className={styles.tokenSwatch}
                      style={{ background: "var(--color-brand-blue)" }}
                      onClick={() => handleCopy("blue", "#1B4FFF")}
                      title="Click to copy CSS token"
                    >
                      <span className={styles.tokenHex}>#1B4FFF</span>
                      <span className={styles.tokenName}>--color-brand-blue</span>
                      <span className={styles.tokenContrast}>WCAG AAA (21:1)</span>
                      {copiedToken === "blue" && <span className={styles.copiedBadge}>COPIED!</span>}
                    </button>

                    <button
                      type="button"
                      className={styles.tokenSwatch}
                      style={{ background: "var(--color-brand-orange)" }}
                      onClick={() => handleCopy("orange", "#FF5B00")}
                      title="Click to copy CSS token"
                    >
                      <span className={styles.tokenHex}>#FF5B00</span>
                      <span className={styles.tokenName}>--color-brand-orange</span>
                      <span className={styles.tokenContrast}>WCAG AA PASS</span>
                      {copiedToken === "orange" && <span className={styles.copiedBadge}>COPIED!</span>}
                    </button>

                    <button
                      type="button"
                      className={styles.tokenSwatch}
                      style={{ background: "#0C0C0A", border: "2px solid #444" }}
                      onClick={() => handleCopy("dark", "#0C0C0A")}
                      title="Click to copy CSS token"
                    >
                      <span className={styles.tokenHex}>#0C0C0A</span>
                      <span className={styles.tokenName}>--color-dark-slate</span>
                      <span className={styles.tokenContrast}>PRIMARY CANVAS</span>
                      {copiedToken === "dark" && <span className={styles.copiedBadge}>COPIED!</span>}
                    </button>
                  </div>

                  {/* Typography & Metrics Specimen */}
                  <div className={styles.typographyTokens}>
                    <div className={styles.specimenRow}>
                      <span className={styles.specimenLabel}>DISPLAY</span>
                      <span className={styles.specimenValue} style={{ fontFamily: "var(--font-display)" }}>
                        SYNE HEAVY 800 // -0.04em
                      </span>
                    </div>
                    <div className={styles.specimenRow}>
                      <span className={styles.specimenLabel}>BODY</span>
                      <span className={styles.specimenValue} style={{ fontFamily: "var(--font-body)" }}>
                        INTER VARIABLE 400 / 600 / 700
                      </span>
                    </div>
                    <div className={styles.specimenRow}>
                      <span className={styles.specimenLabel}>SHADOW</span>
                      <span className={styles.specimenValue} style={{ fontFamily: "monospace" }}>
                        --shadow-brutal: 10px 10px 0 #0C0C0A
                      </span>
                    </div>
                  </div>

                  <div className={styles.tokenSyncStatus}>
                    <span className={styles.syncDot} />
                    <span>FIGMA TOKENS STUDIO SYNC: 100% AUTOMATED GITHUB ACTION</span>
                  </div>
                </div>
              </div>

              {/* ── STAGE 3: React 19 RSC Terminal ── */}
              <div className={`${styles.stageLayer} ${activeStage === 2 ? styles.layerActive : ""}`}>
                <div className={styles.ideContainer}>
                  
                  {/* File Tabs */}
                  <div className={styles.ideTabs}>
                    <button
                      type="button"
                      className={`${styles.ideTab} ${activeCodeTab === "page" ? styles.ideTabActive : ""}`}
                      onClick={() => setActiveCodeTab("page")}
                    >
                      page.tsx <span className={styles.tabBadge}>RSC</span>
                    </button>
                    <button
                      type="button"
                      className={`${styles.ideTab} ${activeCodeTab === "telemetry" ? styles.ideTabActive : ""}`}
                      onClick={() => setActiveCodeTab("telemetry")}
                    >
                      telemetry.ts <span className={styles.tabBadge}>EDGE</span>
                    </button>
                    <button
                      type="button"
                      className={`${styles.ideTab} ${activeCodeTab === "schema" ? styles.ideTabActive : ""}`}
                      onClick={() => setActiveCodeTab("schema")}
                    >
                      schema.prisma <span className={styles.tabBadge}>DB</span>
                    </button>
                  </div>

                  {/* Code Body */}
                  <pre className={styles.codeTerminal}>
                    <code>{CODE_SNIPPETS[activeCodeTab]}</code>
                  </pre>

                  {/* Terminal Stats Footer */}
                  <div className={styles.ideFooter}>
                    <span>NEXT.JS 16 APPS // ZERO CLIENT BUNDLE</span>
                    <span>TURBOPACK COMPILED: 4.8ms</span>
                  </div>
                </div>
              </div>

              {/* ── STAGE 4: Performance & Vitals Gauge Deck ── */}
              <div className={`${styles.stageLayer} ${activeStage === 3 ? styles.layerActive : ""}`}>
                <div className={styles.vitalsDeck}>
                  
                  {/* Gauge 1: Lighthouse Core */}
                  <div className={styles.vitalBox}>
                    <div className={styles.gaugeRing}>
                      <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
                        <circle cx="50" cy="50" r="42" className={styles.gaugeBg} />
                        <circle cx="50" cy="50" r="42" className={styles.gaugeProgress} />
                      </svg>
                      <div className={styles.gaugeScore}>100</div>
                    </div>
                    <span className={styles.vitalLabel}>LIGHTHOUSE SCORE</span>
                    <span className={styles.vitalSub}>PERFORMANCE • SEO • A11Y</span>
                  </div>

                  {/* Gauge 2: LCP Speed */}
                  <div className={styles.vitalBox}>
                    <div className={styles.gaugeRing}>
                      <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
                        <circle cx="50" cy="50" r="42" className={styles.gaugeBg} />
                        <circle cx="50" cy="50" r="42" className={styles.gaugeProgressBlue} />
                      </svg>
                      <div className={styles.gaugeScore} style={{ color: "var(--color-brand-blue)" }}>0.58s</div>
                    </div>
                    <span className={styles.vitalLabel}>LCP SPEED INDEX</span>
                    <span className={styles.vitalSub}>SUB-SECOND WORLDWIDE</span>
                  </div>
                </div>

                {/* Score Breakdown Cards */}
                <div className={styles.vitalsPillRow}>
                  <div className={styles.vitalMetricPill}>
                    <span className={styles.metricKey}>CLS:</span>
                    <span className={styles.metricVal}>0.00</span>
                  </div>
                  <div className={styles.vitalMetricPill}>
                    <span className={styles.metricKey}>FID / INP:</span>
                    <span className={styles.metricVal}>12ms</span>
                  </div>
                  <div className={styles.vitalMetricPill}>
                    <span className={styles.metricKey}>TTFB:</span>
                    <span className={styles.metricVal}>42ms</span>
                  </div>
                  <div className={styles.vitalMetricPill}>
                    <span className={styles.metricKey}>SEARCH:</span>
                    <span className={styles.metricVal}>#1 RANK READY</span>
                  </div>
                </div>

                <div className={styles.liveBadge}>
                  <span className={styles.pulseDot} />
                  <span>ALL ENGINES VERIFIED // READY FOR ENTERPRISE DEPLOYMENT</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
