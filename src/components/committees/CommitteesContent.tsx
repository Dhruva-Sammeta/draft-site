"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommitteeModal from "@/components/ui/CommitteeModal";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import { committeesData } from "@/data/committees";

const typeOrder = [
  "General Assembly",
  "Crisis / Specialized",
  "Crisis",
  "Regional Body",
  "ECOSOC",
  "Specialized Agency",
  "Specialized",
  "Legal",
  "Press",
];

const typeGroups = committeesData.reduce((acc, committee) => {
  if (!acc[committee.type]) acc[committee.type] = [];
  acc[committee.type].push(committee);
  return acc;
}, {} as Record<string, typeof committeesData>);

export default function CommitteesContent() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeCommittee = activeSlug
    ? committeesData.find((committee) => committee.slug === activeSlug) ?? null
    : null;

  const filtered = activeFilter ? committeesData.filter(c => c.type === activeFilter) : committeesData;

  useEffect(() => {
    if (!activeSlug) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSlug]);

  return (
    <div className="relative min-h-screen bg-oakridge-paper pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Chapter XVI / {committeesData.length} Committees</p>
              <h1 className="display-title">Conference committees.</h1>
            </div>
            <p className="body-large max-w-md md:text-right">
              From General Assembly to fast-paced crisis simulations, discover the full committee slate for this year&apos;s conference.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter(null)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-light-teal hover:border-oakridge-dark-teal hover:text-oakridge-navy ${activeFilter === null ? "bg-oakridge-light-teal border-oakridge-dark-teal text-oakridge-navy" : "border-oakridge-navy/15 bg-oakridge-paper/70 text-oakridge-navy/68"}`}
            >
              All
              <span className={activeFilter === null ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{committeesData.length}</span>
            </button>
            {typeOrder.filter((type) => typeGroups[type]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(activeFilter === type ? null : type)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-light-teal hover:border-oakridge-dark-teal hover:text-oakridge-navy ${activeFilter === type ? "bg-oakridge-light-teal border-oakridge-dark-teal text-oakridge-navy" : "border-oakridge-navy/15 bg-oakridge-paper/70 text-oakridge-navy/68"}`}
              >
                {type}
                <span className={activeFilter === type ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{typeGroups[type].length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Committee List - Continuous with dividers */}
        <div className="glass-liquid rounded-2xl overflow-hidden">
          {filtered.map((committee, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === filtered.length - 1;

            return (
              <motion.button
                key={committee.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveSlug(committee.slug)}
                className={`group relative w-full text-left transition-all duration-300 hover:bg-oakridge-paper/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oakridge-teal/60 ${!isLast ? "border-b" : ""} border-oakridge-navy/8`}
              >
                {/* Main row content */}
                <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between md:gap-6">
                  {/* Left: Number and Symbol */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-mono text-xs font-black text-oakridge-red">{number}.</span>
                      <span className="hidden text-xs font-black italic text-oakridge-dark-teal/40 tracking-wide group-hover:text-oakridge-dark-teal sm:block md:hidden">
                        {committee.symbol}
                      </span>
                    </div>
                    <span className="hidden text-lg font-black italic text-oakridge-dark-teal/35 tracking-wide group-hover:text-oakridge-dark-teal/60 transition-colors md:block">
                      {committee.symbol}
                    </span>
                  </div>

                  {/* Center: Type, Name, and Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-dark-teal/60 group-hover:text-oakridge-dark-teal transition-colors">
                      {committee.type}
                    </p>
                    <h3 className="font-sans text-xl font-black leading-tight tracking-[-0.03em] text-oakridge-navy transition-colors duration-300 group-hover:text-oakridge-dark-teal sm:text-2xl md:text-3xl">
                      {committee.name}
                    </h3>
                    <p className="mt-2 text-xs text-oakridge-navy/56 md:hidden">
                      {committee.fullName}
                    </p>
                  </div>

                  {/* Right: Full name and agenda on desktop */}
                  <div className="hidden md:flex md:flex-col md:items-end md:gap-2 md:text-right">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm leading-tight text-oakridge-navy/68 group-hover:text-oakridge-navy transition-colors">
                        {committee.fullName}
                      </p>
                      <p className="text-xs text-oakridge-teal/50 group-hover:text-oakridge-dark-teal transition-colors">
                        {committee.agenda}
                      </p>
                    </div>
                    <span className="text-oakridge-teal/30 group-hover:text-oakridge-teal transition-colors text-xs font-bold">
                      → Details
                    </span>
                  </div>

                  {/* Mobile right arrow */}
                  <span className="md:hidden text-oakridge-teal/30 group-hover:text-oakridge-teal transition-colors">
                    →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <CommitteeModal committee={activeCommittee} onClose={() => setActiveSlug(null)} />
    </div>
  );
}
