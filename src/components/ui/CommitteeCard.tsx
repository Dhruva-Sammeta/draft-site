"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Committee } from "@/data/committees";

interface CommitteeCardProps extends Committee {
  index: number;
  onOpen?: (slug: string) => void;
}

export default function CommitteeCard({
  name,
  fullName,
  type,
  slug,
  symbol,
  agenda,
  index,
  onOpen,
}: CommitteeCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const Wrapper = (onOpen ? "button" : Link) as React.ElementType;
  const wrapperProps = onOpen
    ? {
        type: "button",
        onClick: () => onOpen(slug),
        "aria-label": `Open details for ${name}`,
        "aria-haspopup": "dialog" as const,
      }
    : {
        href: `/committees/${slug}`,
      };

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className={`group mx-auto w-full max-w-[var(--content)] rounded-2xl border border-oakridge-teal/15 bg-oakridge-paper/40 shadow-[0_12px_30px_rgba(1,8,14,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-oakridge-warm-white hover:shadow-[0_18px_36px_rgba(1,8,14,0.3)] hover:scale-[1.01] group-hover:border-oakridge-gold/30 group-hover:shadow-[0_0_20px_rgba(188,154,110,0.15)]`}
    >
      <Wrapper
        {...wrapperProps}
        className="grid min-h-[130px] w-full grid-cols-[44px_1fr] items-center gap-4 px-4 py-5 text-left sm:grid-cols-[50px_1fr] sm:px-5 sm:py-6 md:grid-cols-[60px_48px_minmax(200px,0.4fr)_1fr] md:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oakridge-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-oakridge-navy"
      >
        <span className="font-mono text-sm font-black text-oakridge-gold group-hover:text-oakridge-gold">{number}.</span>
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
      </Wrapper>
    </motion.article>
  );
}
