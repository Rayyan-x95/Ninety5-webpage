"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "CEO, Atlas Analytics",
    quote: "Ninety5 didn't just design our product — they fundamentally reshaped how we think about our users. The new dashboard reduced support tickets by 60% in the first month. Absolutely unmatched execution.",
    rating: 5,
    avatar: "AM",
    color: "#1B4FFF",
    featured: true,
  },
  {
    id: "t2",
    name: "Sarah Kim",
    role: "Head of Product, Bloom Health",
    quote: "We went from a confusing onboarding flow to a 4.9-star App Store rating. The team's ability to balance aesthetics with usability is genuinely rare.",
    rating: 5,
    avatar: "SK",
    color: "#7C3AED",
    alt: true,
  },
  {
    id: "t3",
    name: "Tom Richter",
    role: "Founder, Forge Dev Tools",
    quote: "Our site was embarrassing for a project with 80k GitHub stars. Ninety5 gave us a brand that finally matches the quality of our product. Conversion up 3×.",
    rating: 5,
    avatar: "TR",
    color: "#059669",
  },
  {
    id: "t4",
    name: "Nadia Osei",
    role: "CTO, Orbit Labs",
    quote: "What sets them apart is how deeply they care about technical quality — the codebase they handed over was the cleanest we've ever received from any external team.",
    rating: 5,
    avatar: "NO",
    color: "#D97706",
    alt: true,
  },
  {
    id: "t5",
    name: "Lucas Patel",
    role: "VP Growth, Vertex SaaS",
    quote: "Three agencies couldn't nail our product's vibe. Ninety5 got it in the first discovery session. The brand has become our biggest competitive differentiator.",
    rating: 5,
    avatar: "LP",
    color: "#DC2626",
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLElement>(0.06);

  const featured = TESTIMONIALS.find((t) => t.featured)!;
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section ref={ref} className={styles.section} id="testimonials">
      <div className="container">

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>CLIENT LOVE</span>
            </div>
            <h2 className={styles.title}>Don&apos;t Take{"\n"}Our Word for It.</h2>
          </div>
          <p className={styles.sub}>
            We measure success entirely by the outcomes our clients achieve —
            not just how the design looks.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Featured */}
          <div className={`reveal ${styles.card} ${styles.cardFeatured}`} id={`testimonial-${featured.id}`}>
            <div>
              <div className={styles.stars} role="img" aria-label={`${featured.rating} out of 5 stars`}>{"★".repeat(featured.rating)}</div>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quote}>{featured.quote}</p>
            </div>
            <div className={styles.author}>
              <div className={styles.avatar} style={{ background: featured.color }} aria-hidden="true">
                {featured.avatar}
              </div>
              <div>
                <div className={styles.name}>{featured.name}</div>
                <div className={styles.meta}>{featured.role}</div>
              </div>
            </div>
          </div>

          {/* Rest */}
          {rest.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${(i % 3) + 1} ${styles.card} ${t.alt ? styles.cardAlt : ""}`}
              id={`testimonial-${t.id}`}
            >
              <div className={styles.stars} role="img" aria-label={`${t.rating} out of 5 stars`}>{"★".repeat(t.rating)}</div>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.color }} aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.meta}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
