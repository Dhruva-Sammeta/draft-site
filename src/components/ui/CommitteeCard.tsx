"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Committee } from "@/data/committees";

interface CommitteeCardProps extends Committee {
  index: number;
}

const glowColor = {
  Beginner: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] group-hover:border-green-400/30",
  Intermediate: "group-hover:shadow-[0_0_20px_rgba(230,162,93,0.15)] group-hover:border-oakridge-orange/30",
  Advanced: "group-hover:shadow-[0_0_20px_rgba(255,55,80,0.15)] group-hover:border-oakridge-red/30",
};

export default function CommitteeCard({
  name,
  fullName,
  type,
  delegateCount,
  slug,
  symbol,
  difficulty,
  agenda,
  index,
}: CommitteeCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className={`group border-t border-oakridge-teal/15 last:border-b rounded-xl transition-all duration-300 hover:bg-oakridge-warm-white hover:scale-[1.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:border-transparent hover:z-10 ${glowColor[difficulty]}`}
    >
      <Link
        href={`/committees/${slug}`}
        className="grid min-h-[130px] grid-cols-[50px_1fr] gap-4 px-4 py-6 md:grid-cols-[60px_48px_minmax(200px,0.4fr)_1fr_auto] md:items-center md:gap-6"
      >
        <span className="font-mono text-sm font-black text-oakridge-red group-hover:text-oakridge-red">{number}.</span>
        <span className="hidden md:block text-lg font-black italic text-oakridge-teal/40 tracking-wide group-hover:text-oakridge-dark-teal">
          {symbol}
        </span>
        <div className="overflow-hidden">
          <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-dark-teal group-hover:text-oakridge-dark-teal">
            {type}
          </p>
          <h3 className="font-sans text-2xl font-black leading-none tracking-[-0.04em] text-oakridge-warm-white transition-colors duration-300 group-hover:text-oakridge-navy md:text-4xl">
            {name}
          </h3>
          <p className="mt-1 text-xs text-oakridge-muted group-hover:text-oakridge-navy/60 md:hidden">{fullName}</p>
        </div>
        <div className="col-start-2 md:col-start-auto">
          <p className="text-sm leading-relaxed text-oakridge-muted group-hover:text-oakridge-navy/60 hidden md:block">{fullName}</p>
          <p className="mt-1 text-xs text-oakridge-teal/60 group-hover:text-oakridge-dark-teal line-clamp-1 hidden md:block">Agenda: {agenda}</p>
        </div>
        <span className="col-start-2 md:col-start-auto text-[10px] font-bold text-oakridge-muted group-hover:text-oakridge-navy/50">{delegateCount}</span>
      </Link>
    </motion.article>
  );
}
