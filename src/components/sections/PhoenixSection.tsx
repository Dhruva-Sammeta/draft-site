"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PhoenixSection() {
  return (
    <section 
      className="site-section py-20 sm:py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto flex max-w-[var(--content)] flex-col items-center px-4 text-center sm:px-6">
        {/* Phoenix image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="media-glass mb-10 rounded-[2rem] p-5 sm:mb-12 sm:rounded-[2.5rem] sm:p-8"
        >
          <Image
            src="/media/phoenix.png"
            alt="The Oakridge Phoenix"
            width={240}
            height={240}
            className="phoenix-glow mx-auto w-[min(68vw,280px)] rounded-[32px] sm:w-[280px] sm:rounded-[40px]"
          />
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <h2 className="font-heading text-4xl font-black tracking-[-0.04em] text-oakridge-navy md:text-6xl lg:text-7xl">
            <span className="italic text-oakridge-dark-teal">Create.</span>{" "}
            Debate.{" "}
            <span className="text-oakridge-red">Innovate.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="glass-liquid mx-auto mt-7 max-w-3xl space-y-5 rounded-[2rem] px-5 py-7 text-base leading-relaxed text-oakridge-navy/72 sm:mt-8 sm:px-8 sm:py-8 sm:text-lg"
        >
          <p>
            In an era defined by fracturing alliances, eroding institutions, and a global order under
            unprecedented strain, the need for young leaders who can think beyond borders has never
            been greater.
          </p>
          <p className="text-oakridge-navy font-semibold">
            Sixteen years of Oakridge MUN have proven that the conference room is where the next
            generation of diplomats, policymakers, and changemakers find their voice. Chapter XVI
            continues that tradition - sharper, bolder, and more urgent than ever.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-oakridge-teal/40 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
