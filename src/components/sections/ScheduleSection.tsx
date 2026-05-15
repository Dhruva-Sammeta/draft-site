"use client";

import React from "react";
import { motion } from "framer-motion";
import SchedulePreview from "@/components/ui/SchedulePreview";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ScheduleSection() {
  return (
    <section id="schedule" className="site-section py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[var(--content)] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={itemVariants} className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-2">Conference Schedule</p>
              <h2 className="font-sans text-3xl font-black tracking-[-0.04em] text-oakridge-navy md:text-5xl">
                Three days, paced for debate.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-oakridge-navy/68">
              A compact overview of registrations, sessions, meals, ceremonies, and dispersal windows.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SchedulePreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
