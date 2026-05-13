"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oakridge-deep">
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
        <div className="absolute inset-0 bg-oakridge-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-oakridge-deep/50 via-oakridge-deep/20 to-oakridge-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-oakridge-deep/30 via-transparent to-oakridge-deep/30" />
      </div>

      {/* Subtle animated vignette border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="lines z-[1]"
      />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-oakridge-teal/[0.04] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[8%] h-80 w-80 rounded-full bg-oakridge-teal/[0.03] blur-3xl"
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
