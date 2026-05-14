"use client";

import Link from "next/link";
import { Twitter, Linkedin, Dribbble, Github } from "lucide-react";
import styles from "./Footer.module.css";

const FOOTER_LINKS = {
  Services: [
    { label: "Product Design", href: "/services/product-design" },
    { label: "Brand Identity", href: "/services/brand-identity" },
    { label: "Design Systems", href: "/services/design-systems" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "UX Research", href: "/services/ux-research" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Our process", href: "/process" },
    { label: "Selected work", href: "/work" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

const SOCIALS = [
  { label: "X / Twitter", href: "https://twitter.com/ninety5studio", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/ninety5", icon: Linkedin },
  { label: "Dribbble", href: "https://dribbble.com/ninety5", icon: Dribbble },
  { label: "GitHub", href: "https://github.com/ninety5", icon: Github },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      {/* Top strip */}
      <div className={styles.topStrip}>
        <div className={`container ${styles.topInner}`}>
          <div className={styles.topLeft}>
            <div className={styles.logo}>
              <img src="/logo-footer.png" alt="Ninety5" className={styles.logoImage} />
            </div>
            <p className={styles.tagline}>
              Design &amp; development studio crafting remarkable digital
              products for ambitious brands.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.social}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon size={24} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col} className={styles.linkCol}>
              <div className={styles.colTitle}>{col}</div>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA col */}
          <div className={styles.ctaCol}>
            <div className={styles.colTitle}>Work with us</div>
            <p className={styles.ctaText}>
              Ready to build something great? We&apos;d love to hear about your
              project.
            </p>
            <a href="#contact" className="btn btn-accent" id="footer-cta-btn">
              Start a project
            </a>
            <div className={styles.email}>
              <a href="mailto:hello@ninety5.studio">hello@ninety5.studio</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Ninety5 Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
