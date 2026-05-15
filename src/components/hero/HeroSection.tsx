"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-hero-gradient pb-14 pt-[var(--nav-safe)] sm:pb-18 lg:pb-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,245,237,0.34)_0%,rgba(180,235,245,0.14)_42%,rgba(0,48,87,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,48,87,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(0,48,87,0.16)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.72 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="lines z-[1] hidden sm:block"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.68 }}
        transition={{ duration: 2.8 }}
        className="pointer-events-none absolute inset-x-3 bottom-4 top-[calc(var(--nav-safe)-1rem)] z-[2] rounded-[1.75rem] border border-oakridge-navy/12 bg-oakridge-warm-white/10 sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6"
      />

      <HeroContent />

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
