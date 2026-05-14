"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Global Scroll Reveals using GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveals for grids
    const grids = document.querySelectorAll(".grid-stagger");
    grids.forEach((grid) => {
      const items = grid.querySelectorAll(".reveal");
      gsap.fromTo(items, 
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          }
        }
      );
    });

    // Parallax for ambient glows
    gsap.to(".glow-blue", {
      y: (i, target) => -window.innerHeight * 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    gsap.to(".glow-orange", {
      y: (i, target) => -window.innerHeight * 0.4,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Individual reveals for items not in a stagger grid
    const revealElements = document.querySelectorAll(".reveal:not(.grid-stagger .reveal)");
    
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", background: "var(--color-dark)", zIndex: 10000, transform: "scaleX(0)", transformOrigin: "left", animation: "scrollProgress linear both", animationTimeline: "scroll()" }}></div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollProgress {
          to { transform: scaleX(1); }
        }
      `}} />
      {children}
    </>
  );
}
