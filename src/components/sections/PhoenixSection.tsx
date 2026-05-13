"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PhoenixSection() {
  return (
    <section 
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: "#003057" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-oakridge-teal/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Phoenix image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="phoenix-float mb-12"
        >
          <Image
            src="/media/phoenix.png"
            alt="The Draft Phoenix"
            width={240}
            height={240}
            className="phoenix-glow mx-auto rounded-[48px]"
          />
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-kicker mb-5">The Draft Phoenix</p>
          <h2 className="font-heading text-4xl font-black tracking-[-0.03em] text-oakridge-warm-white md:text-6xl lg:text-7xl">
            <span className="italic text-oakridge-teal">Create.</span>{" "}
            Debate.{" "}
            <span className="text-oakridge-teal">Innovate.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-oakridge-muted sm:text-lg"
        >
          <p>
            In an era defined by fracturing alliances, eroding institutions, and a global order under
            unprecedented strain, the need for young leaders who can think beyond borders has never
            been greater.
          </p>
          <p>
            The phoenix is not decoration - it is a declaration. We rise from the ashes of
            broken diplomacy, failed negotiations, and political deadlock not to inherit the
            world as it is, but to reimagine it as it should be.
          </p>
          <p className="text-oakridge-warm-white/90 font-semibold">
            Sixteen years of Draft MUN have proven that the conference room is where the next
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
