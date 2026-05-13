"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextType {
  scrollProgress: number; // 0 → 1 based on hero section visibility
  isHeroVisible: boolean;
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Use passive scroll listener — works with both native and Lenis-emitted scroll events
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      const heroHeight = window.innerHeight;
      const progress = Math.min(currentScroll / heroHeight, 1);
      setScrollProgress(progress);
      setIsHeroVisible(currentScroll < heroHeight * 0.5);
    };

    // Lenis re-dispatches "scroll" on window, so a single passive listener covers both
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollProgress, isHeroVisible, scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextType {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
}
