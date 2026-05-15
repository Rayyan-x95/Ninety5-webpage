"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";

const INFO = [
  { label: "UPLINK", value: "hello@ninety5.studio", href: "mailto:ninety5.designs.95@gmail.com", live: false },
  { label: "AVAILABILITY", value: "OPEN — MAY 2026", href: null, live: true },
  { label: "RESPONSE", value: "Within 24 hours", href: null, live: false },
  { label: "LOCATION", value: "Chennai, India (Remote)", href: null, live: false },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(
        "https://forms-backend.coeffx.tech/api/v1/submit/8fc70538-36ee-4aff-bc24-8b1a52112ee4",
        { method: "POST", body: formData, headers: { Accept: "application/json" } }
      );
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner}>

          {/* ── LEFT ── */}
          <div className={`reveal ${styles.left}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>NINETY5.STUDIO · CONTACT</span>
            </div>
            <h2 className={styles.title}>
              Got a{" "}
              <span className={styles.titleAccent}>Project</span>
              <br />
              In Mind?
            </h2>
            <p className={styles.sub}>
              Tell us about your idea. We read every message and reply within
              24 hours — usually much sooner.
            </p>
            <div className={styles.infoGrid}>
              {INFO.map((row) => (
                <div key={row.label} className={styles.infoRow}>
                  <span className={styles.infoLabel}>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className={styles.infoValue}>{row.value}</a>
                  ) : (
                    <span className={styles.infoValue}>{row.value}</span>
                  )}
                  {row.live && <span className={styles.infoDot} aria-label="Currently available" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className={`reveal reveal-delay-2 ${styles.formWrapper}`}>
            <div className={styles.cropTL} />
            <div className={styles.cropBR} />
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <span className={styles.formHeaderTitle}>INITIALIZE_BRIEF</span>
                <span className={styles.formHeaderStatus}>
                  <span className={styles.statusDot} />
                  LIVE
                </span>
              </div>

              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <div className={styles.successTitle}>Message Received</div>
                  <p className={styles.successText}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="contact-name">FULL_NAME</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className={styles.input}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="contact-email">EMAIL</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder="hello@company.io"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-service">PROJECT_SCOPE</label>
                    <select id="contact-service" name="service" className={styles.select}>
                      <option value="">What do you need help with?</option>
                      <option value="product-design">Product Design</option>
                      <option value="branding">Brand Identity</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="design-system">Design System</option>
                      <option value="ux-research">UX Research</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-message">PROJECT_BRIEF</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className={styles.textarea}
                      rows={4}
                      placeholder="Tell us about your project — goals, timeline, and budget..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submit}`}
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? "SENDING..." : "Send Message ↗"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
