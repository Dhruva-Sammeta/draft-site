"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SecGenNote() {
  return (
    <section className="site-section py-20 sm:py-28 md:py-32">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.045]">
        <Image
          src="/favicon.svg"
          alt=""
          width={600}
          height={600}
          className="select-none"
          aria-hidden
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-[var(--content-narrow)] px-4 sm:px-6"
      >
        <div className="glass-liquid rounded-[2rem] px-5 py-8 sm:rounded-[2.5rem] sm:px-8 sm:py-10 md:px-12 md:py-12">
        {/* Kicker */}
        <motion.p
          variants={itemVariants}
          className="section-kicker mb-4"
        >
          A note from the Secretary-General
        </motion.p>

        {/* Pull-quote rule */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-px w-16 bg-oakridge-teal"
        />

        {/* Quote */}
        <motion.blockquote
          variants={itemVariants}
          className="font-heading text-[clamp(22px,3.8vw,42px)] font-black leading-[1.18] tracking-[-0.025em] text-oakridge-navy"
        >
          &ldquo;Sixteen years ago, this conference was a dream held by a handful of
          students with a belief that young voices could shape the world. Today,
          as we stand at Chapter XVI, that dream has never felt more real —or
          more urgent at a time when rebuilding diplomacy is no longer an ideal,
          but a necessity.&rdquo;
        </motion.blockquote>

        {/* Author */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-oakridge-teal/20" />
          <div className="text-right">
            <p className="font-sans text-base font-black text-oakridge-navy">
              Shrey Vajpayee
            </p>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-dark-teal">
              Secretary-General, Chapter XVI
            </p>
          </div>
        </motion.div>

        {/* Body text */}
        <motion.p
          variants={itemVariants}
          className="mt-10 body-large max-w-2xl"
        >
          This year we return with a renewed commitment to rigorous debate,
          collaborative diplomacy, and a conference experience that challenges
          every delegate to think beyond the familiar. Whether this is your
          first time at a MUN or your tenth, we welcome you.
        </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
