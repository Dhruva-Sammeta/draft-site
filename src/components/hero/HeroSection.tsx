"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic overlay stack */}
        <div className="absolute inset-0 bg-hero-gradient opacity-92" />
        <div className="absolute inset-0 bg-oakridge-deep/40" />
        <div className="absolute inset-x-3 top-[10vh] bottom-[8vh] rounded-[2rem] border border-oakridge-teal/10 glass-frosted opacity-85 sm:inset-x-5 sm:top-[11vh] sm:bottom-[9vh] lg:inset-x-[7vw] lg:top-[12vh] lg:bottom-[11vh] lg:rounded-[var(--radius)]" />
      </div>

      {/* Subtle animated vignette border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="lines z-[1]"
      />

      {/* Premium glass frosted overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.8 }}
        className="absolute inset-x-3 inset-y-3 z-[2] pointer-events-none rounded-[1.75rem] glass-liquid sm:inset-x-5 sm:inset-y-5 lg:inset-x-6 lg:inset-y-6"
      />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-oakridge-teal/[0.06] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[8%] h-80 w-80 rounded-full bg-oakridge-gold/[0.05] blur-3xl"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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
