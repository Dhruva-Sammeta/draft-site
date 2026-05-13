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
    line3: "OAKRIDGE MUN",
    badge: "XVI",
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
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-5 px-4 py-6 text-center sm:gap-7 md:gap-9 md:py-16 lg:py-20"
    >
      {/* Logo Crest */}
      <motion.div variants={itemVariants}>
        <Image
          src="/favicon.svg"
          alt="Draft MUN Crest"
          width={64}
          height={64}
          className="mx-auto drop-shadow-[0_0_40px_rgba(48,205,215,0.3)] sm:w-20 sm:h-20"
          priority
        />
      </motion.div>

      {/* Alert Bar */}
      {HERO_CONFIG.alert.show && (
        <motion.div variants={itemVariants}>
          <Link
            href={HERO_CONFIG.alert.href}
            className="group inline-flex items-center gap-3 rounded-full border border-oakridge-teal/30 bg-oakridge-deep/50 px-6 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-oakridge-teal/60 hover:bg-oakridge-deep/70 sm:px-8"
          >
            <span className="h-2 w-2 rounded-full bg-oakridge-teal animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-oakridge-warm-white sm:text-xs">
              {HERO_CONFIG.alert.title}
            </span>
            <span className="text-oakridge-teal/60 group-hover:text-oakridge-teal transition-colors text-sm">&rarr;</span>
          </Link>
        </motion.div>
      )}

      {/* Main Headline */}
      <motion.div variants={itemVariants} className="relative w-full max-w-5xl">
        {/* Floating Chapter Badge */}
        <motion.div
          variants={badgeVariants}
          className="absolute right-[2%] -top-1 z-20 rounded-lg border-[2px] border-dashed border-oakridge-warm-white/40 px-3 py-1 text-base font-black text-oakridge-warm-white/80 sm:right-[12%] sm:-top-5 sm:text-3xl sm:rounded-xl sm:border-[2.5px] sm:px-4 sm:py-1.5 md:right-[10%] md:-top-8 md:px-5 md:py-2 md:text-4xl"
        >
          {HERO_CONFIG.heading.badge}
        </motion.div>

        <h1 className="font-heading text-[clamp(32px,8vw,130px)] font-black leading-[1.05] tracking-[-0.03em] text-oakridge-warm-white">
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{HERO_CONFIG.heading.line1}</span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-oakridge-teal glow-text-cyan">{HERO_CONFIG.heading.highlight}</span>{" "}
            {HERO_CONFIG.heading.line2}
          </span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{HERO_CONFIG.heading.line3}</span>
        </h1>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {HERO_CONFIG.buttons.map((btn) => (
          <Link
            key={btn.text}
            href={btn.href}
            className={`rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 sm:px-9 sm:py-4 sm:text-[13px] ${
              btn.style === "primary"
                ? "bg-oakridge-teal text-oakridge-deep shadow-[0_4px_20px_rgba(48,205,215,0.25)] hover:bg-oakridge-light-teal hover:shadow-[0_4px_30px_rgba(48,205,215,0.4)]"
                : "border border-oakridge-warm-white/50 text-oakridge-warm-white backdrop-blur-sm hover:bg-oakridge-warm-white/10 hover:border-oakridge-warm-white"
            }`}
          >
            {btn.text}
          </Link>
        ))}
      </motion.div>

      {/* Countdown Timer - overlaid directly */}
      <motion.div variants={itemVariants} className="w-full max-w-md mt-2 sm:max-w-2xl sm:mt-4">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-oakridge-teal/70 sm:text-[11px]">
          Conference begins in
        </p>
        <Countdown />
      </motion.div>
    </motion.div>
  );
}
