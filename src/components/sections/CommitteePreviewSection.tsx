"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { committeesData } from "@/data/committees";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const glowColor = {
  Beginner: "hover:shadow-[0_0_24px_rgba(74,222,128,0.18)] hover:border-green-400/40",
  Intermediate: "hover:shadow-[0_0_24px_rgba(230,162,93,0.18)] hover:border-oakridge-orange/40",
  Advanced: "hover:shadow-[0_0_24px_rgba(255,55,80,0.18)] hover:border-oakridge-red/40",
};

export default function CommitteePreviewSection() {
  const featured = committeesData.slice(0, 8);

  return (
    <section className="relative bg-oakridge-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div variants={itemVariants} className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-2">20 Committees</p>
              <h2 className="font-sans text-3xl font-black tracking-[-0.04em] text-oakridge-warm-white md:text-5xl">
                Find your committee.
              </h2>
            </div>
            <Link
              href="/committees"
              className="inline-flex items-center gap-2 text-sm font-bold text-oakridge-teal transition-colors hover:text-oakridge-light-teal"
            >
              View all committees
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((committee) => (
              <motion.div key={committee.slug} variants={itemVariants}>
                <Link
                  href={`/committees/${committee.slug}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-oakridge-teal/15 bg-oakridge-paper/40 p-5 transition-all duration-300 h-full ${glowColor[committee.difficulty]}`}
                >
                  <span className="committee-numeral absolute -right-2 -top-4 text-7xl leading-none select-none">
                    {committee.symbol}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-black italic text-oakridge-teal/60 tracking-wide">
                        {committee.symbol}
                      </span>
                      <span className="rounded-full bg-oakridge-deep px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-oakridge-dark-teal">
                        {committee.type}
                      </span>
                    </div>
                    <h3 className="font-sans text-xl font-black text-oakridge-warm-white transition-colors duration-300 group-hover:text-oakridge-teal">
                      {committee.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-oakridge-muted leading-relaxed line-clamp-2">
                      {committee.fullName}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-end">
                      <span className="text-oakridge-teal/40 text-xs font-bold group-hover:text-oakridge-teal transition-colors tracking-wider uppercase">
                        View &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
