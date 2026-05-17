"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-hero-gradient pb-14 pt-[var(--nav-safe)] sm:pb-18 lg:pb-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-95"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic overlay stack */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,19,0.42)_0%,rgba(4,22,36,0.28)_42%,rgba(2,11,19,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(48,205,215,0.04),rgba(2,11,19,0.18)_62%,rgba(2,11,19,0.58)_100%)]" />
      </div>

      {/* Subtle animated vignette border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="lines z-[1] hidden sm:block"
      />

      {/* Premium glass edge, kept light so the video remains visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 2.8 }}
        className="pointer-events-none absolute inset-x-3 bottom-4 top-[calc(var(--nav-safe)-1rem)] z-[2] rounded-[1.75rem] border border-oakridge-teal/12 bg-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6"
      />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-oakridge-teal/[0.06] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[8%] h-80 w-80 rounded-full bg-oakridge-gold/[0.035] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, -10, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] right-[20%] h-56 w-56 rounded-full bg-oakridge-teal/[0.05] blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <HeroContent />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-oakridge-muted/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-oakridge-teal/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
