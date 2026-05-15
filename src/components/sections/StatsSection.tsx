"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "16", label: "Years of Legacy", suffix: "" },
  { value: "650", label: "Delegates", suffix: "+" },
  { value: "20", label: "Committees", suffix: "" },
  { value: "3", label: "Days", suffix: "" },
];

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function StatsSection() {
  return (
    <section className="site-section border-y border-oakridge-navy/10 py-16 md:py-24">
      <div className="mx-auto max-w-[var(--content)] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-liquid flex min-h-[156px] flex-col items-center justify-center rounded-2xl p-6 text-center md:min-h-[180px] md:p-8"
            >
              <span className="font-sans text-5xl font-black leading-none text-oakridge-dark-teal md:text-6xl">
                {stat.value}
                <span className="text-oakridge-red">{stat.suffix}</span>
              </span>
              <span className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-oakridge-navy/58">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
