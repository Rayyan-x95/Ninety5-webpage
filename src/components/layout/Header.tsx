"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `${styles.header} ${scrolled ? styles.scrolled : ""} ${
    isHome && !scrolled ? styles.darkHeroHeader : ""
  }`;

  return (
    <header className={headerClass}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="header-logo">
          <Image src="/logo-header.png" alt="Ninety5 Studio" width={140} height={48} className={styles.logoImage} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className={styles.actions}>
          <a href="/contact" className="btn btn-primary" id="header-cta-btn">
            Book a call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <a href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
