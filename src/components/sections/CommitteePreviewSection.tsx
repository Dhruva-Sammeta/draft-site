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

export default function CommitteePreviewSection() {
  const featured = committeesData.slice(0, 8);

  return (
    <section className="site-section py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[var(--content)] px-4 sm:px-6">
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
              <p className="section-kicker mb-2">19 Committees</p>
              <h2 className="font-sans text-3xl font-black tracking-[-0.04em] text-oakridge-navy md:text-5xl">
                Find your committee.
              </h2>
            </div>
            <Link
              href="/committees"
              className="inline-flex items-center gap-2 text-sm font-bold text-oakridge-dark-teal transition-colors hover:text-oakridge-red"
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
              className="group glass-liquid relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-oakridge-dark-teal/40"
                >
                  <span className="committee-numeral absolute -right-2 -top-4 text-7xl leading-none select-none">
                    {committee.symbol}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-black italic text-oakridge-teal/60 tracking-wide">
                        {committee.symbol}
                      </span>
                      <span className="rounded-full border border-oakridge-navy/10 bg-oakridge-light-teal/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-oakridge-dark-teal">
                        {committee.type}
                      </span>
                    </div>
                    <h3 className="font-sans text-xl font-black text-oakridge-navy transition-colors duration-300 group-hover:text-oakridge-dark-teal">
                      {committee.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-oakridge-navy/64 leading-relaxed line-clamp-2">
                      {committee.fullName}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-end">
                      <span className="text-oakridge-dark-teal/70 text-xs font-bold group-hover:text-oakridge-red transition-colors tracking-wider uppercase">
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
