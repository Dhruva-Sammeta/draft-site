"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const slowNetwork = connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

    // Native scrolling is smoother and cheaper on low-power touch devices.
    if (prefersReducedMotion || isTouchDevice || slowNetwork) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.78,
      touchMultiplier: 1,
    });

    // Integrate with requestAnimationFrame for smooth loop
    let raf: number;
    let lastTime = 0;
    function loop(time: number) {
      if (time - lastTime > 8) {
        lenis.raf(time);
        lastTime = time;
      }
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
