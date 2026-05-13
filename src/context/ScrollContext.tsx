"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextType {
  scrollProgress: number; // 0 to 1, based on hero section visibility
  isHeroVisible: boolean;
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // Calculate progress: 0 when at top, 1 when hero is out of view
      const heroHeight = window.innerHeight;
      const progress = Math.min(currentScroll / heroHeight, 1);
      setScrollProgress(progress);

      // Check if hero section is visible (top 50%)
      setIsHeroVisible(currentScroll < heroHeight * 0.5);
    };

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
