"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Countdown from "@/components/ui/Countdown";

// ============================================================================
// HERO CONFIGURATION - Edit this object to change all hero content.
// ============================================================================
const HERO_CONFIG = {
  alert: {
    show: true,
    title: "COMMITTEES ANNOUNCED",
    subtitle: "Explore committees to find them.",
    href: "/committees",
  },
  heading: {
    line1: "CELEBRATING",
    highlight: "16 YEARS",
    line2: "OF",
    line3: "OAKRIDGE MUN XVI",
    badge: "2026",
  },
  buttons: [
    { text: "Explore Committees", href: "/committees", style: "primary" as const },
    { text: "Register Now", href: "/register", style: "secondary" as const },
  ],
};
// ============================================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { y: 36, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badgeVariants = {
  hidden: { scale: 0, rotate: -30, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 14,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 1.2 },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex w-full max-w-[var(--content)] flex-col items-center justify-start gap-4 px-4 text-center sm:gap-6 sm:px-6 md:gap-8 lg:gap-9"
    >
      {/* Logo Crest */}
      <motion.div
        variants={itemVariants}
        className="media-glass rounded-[1.6rem] px-4 py-4 sm:rounded-[2rem] sm:px-5 sm:py-5 md:px-7 md:py-7"
      >
        <Image
          src="/favicon.svg"
          alt="Oakridge MUN Crest"
          width={200}
          height={200}
          className="mx-auto h-[82px] w-[82px] drop-shadow-[0_0_48px_rgba(48,205,215,0.28)] sm:h-[118px] sm:w-[118px] md:h-[160px] md:w-[160px] lg:h-[184px] lg:w-[184px]"
          priority
        />
      </motion.div>

      {/* Alert Bar */}
      {HERO_CONFIG.alert.show && (
        <motion.div variants={itemVariants}>
          <Link
            href={HERO_CONFIG.alert.href}
            className="group glass-premium inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-all duration-300 sm:px-8"
          >
            <span className="h-2 w-2 rounded-full bg-oakridge-gold animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-oakridge-warm-white sm:text-xs">
              {HERO_CONFIG.alert.title}
            </span>
            <span className="text-oakridge-teal/60 group-hover:text-oakridge-gold transition-colors text-sm">&rarr;</span>
          </Link>
        </motion.div>
      )}

      {/* Main Headline */}
      <motion.div
        variants={itemVariants}
        className="relative w-full max-w-[var(--content-narrow)] rounded-[2rem] border border-oakridge-teal/12 bg-oakridge-deep/28 px-4 py-6 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-[6px] sm:rounded-[2.5rem] sm:px-8 sm:py-9 md:px-12 md:py-12"
      >
        {/* Floating Chapter Badge */}
        <motion.div
          variants={badgeVariants}
          className="absolute right-2 -top-3 z-20 rounded-lg border-[2px] border-dashed border-oakridge-gold/48 bg-oakridge-deep/68 px-3 py-1 text-sm font-black text-oakridge-gold sm:right-[8%] sm:-top-6 sm:rounded-xl sm:border-[2.5px] sm:px-4 sm:py-1.5 sm:text-2xl md:right-[10%] md:-top-8 md:px-5 md:py-2 md:text-4xl"
        >
          {HERO_CONFIG.heading.badge}
        </motion.div>

        <h1 className="font-heading text-[clamp(2.15rem,8vw,8rem)] font-black leading-[1.03] tracking-[-0.045em] text-oakridge-warm-white">
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{HERO_CONFIG.heading.line1}</span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-oakridge-gold drop-shadow-[0_0_24px_rgba(188,154,110,0.36)]">{HERO_CONFIG.heading.highlight}</span>{" "}
            {HERO_CONFIG.heading.line2}
          </span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{HERO_CONFIG.heading.line3}</span>
        </h1>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        {HERO_CONFIG.buttons.map((btn) => (
          <Link
            key={btn.text}
            href={btn.href}
            className={`min-w-[210px] rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 sm:min-w-0 sm:px-8 sm:py-4 sm:text-[13px] md:px-9 ${
              btn.style === "primary"
                ? "glass-gold text-oakridge-warm-white shadow-[0_4px_20px_rgba(188,154,110,0.24)] hover:shadow-[0_6px_36px_rgba(188,154,110,0.38)] hover:border-oakridge-gold"
                : "glass-premium border-oakridge-warm-white/25 text-oakridge-warm-white hover:border-oakridge-gold hover:text-oakridge-gold"
            }`}
          >
            {btn.text}
          </Link>
        ))}
      </motion.div>

      {/* Countdown Timer - overlaid directly */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-[var(--content-narrow)] rounded-[1.8rem] border border-oakridge-teal/12 bg-oakridge-deep/36 px-4 py-4 backdrop-blur-[7px] sm:mt-2 sm:rounded-[2rem] sm:px-6 sm:py-5"
      >
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-oakridge-teal/70 sm:text-[11px]">
          Conference begins in
        </p>
        <Countdown />
      </motion.div>
    </motion.div>
  );
}
