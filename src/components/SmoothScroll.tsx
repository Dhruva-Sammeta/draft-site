"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    // Keep native scrolling on touch and reduced-motion devices.
    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      duration: 1.35,          // scroll animation duration (seconds) — higher = slower feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Integrate with requestAnimationFrame for smooth loop
    let raf: number;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null; // purely behavioural, renders nothing
}
