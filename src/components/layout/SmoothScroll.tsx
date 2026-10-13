"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize smooth inertia scrolling on devices with a mouse/trackpad (fine pointer)
    // On touch devices (smartphones/tablets), native momentum scroll is hardware-accelerated and 120fps.
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (isFinePointer && !prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // Passive, RAF-debounced scroll progress indicator (zero forced reflows)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (progressRef.current) {
            const doc = document.documentElement;
            const scrollTotal = doc.scrollHeight - doc.clientHeight;
            const progress = scrollTotal > 0 ? window.scrollY / scrollTotal : 0;
            progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div
        ref={progressRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "var(--color-brand-orange)",
          zIndex: 10000,
          transform: "scaleX(0)",
          transformOrigin: "left",
          willChange: "transform",
        }}
      />
      {children}
    </>
  );
}
