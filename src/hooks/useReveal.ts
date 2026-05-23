"use client";

import { useEffect, useRef } from "react";

/**
 * A reusable hook to observe elements with the `.reveal` class inside the ref container,
 * adding the `.visible` class when they enter the viewport.
 * 
 * Performance Optimization: Once an element is revealed, it is unobserved to save CPU cycles.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els || els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
