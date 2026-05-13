"use client";

import React, { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { Committee } from "@/data/committees";

interface CommitteeModalProps {
  committee: Committee | null;
  onClose: () => void;
}

const difficultyBadge = {
  Beginner: "border-green-400/30 bg-green-500/10 text-green-200",
  Intermediate: "border-oakridge-orange/40 bg-oakridge-orange/10 text-oakridge-light-teal",
  Advanced: "border-oakridge-red/40 bg-oakridge-red/10 text-oakridge-warm-white",
};

export default function CommitteeModal({ committee, onClose }: CommitteeModalProps) {
  useEffect(() => {
    if (!committee) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [committee, onClose]);

  const chairs = useMemo(() => {
    if (!committee) return [];
    if (committee.chairs.length > 0) return committee.chairs;
    return [
      { role: "Chairperson", name: "TBA" },
      { role: "Vice Chairperson", name: "TBA" },
    ];
  }, [committee]);

  return (
    <AnimatePresence>
      {committee && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close committee details"
            className="absolute inset-0 bg-oakridge-ink/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`committee-title-${committee.slug}`}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl glass-liquid shadow-[0_35px_90px_rgba(1,8,14,0.7)]"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-oakridge-teal/10 px-6 py-5">
              <div>
                <p className="section-kicker text-oakridge-teal/70">{committee.type}</p>
                <h2
                  id={`committee-title-${committee.slug}`}
                  className="mt-2 font-sans text-3xl font-black tracking-[-0.04em] text-oakridge-warm-white sm:text-4xl"
                >
                  {committee.name}
                </h2>
                <p className="mt-2 text-sm text-oakridge-muted max-w-2xl">{committee.fullName}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-oakridge-teal/30 bg-oakridge-deep/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-oakridge-warm-white transition-colors hover:border-oakridge-teal hover:text-oakridge-teal"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 px-6 pb-6 pt-5 md:grid-cols-[1.15fr_0.85fr] max-h-[80vh] overflow-y-auto">
              <div className="space-y-5">
                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-5">
                  <p className="section-kicker mb-3">Agenda</p>
                  <h3 className="font-sans text-xl font-black tracking-[-0.03em] text-oakridge-warm-white">
                    {committee.agenda}
                  </h3>
                </div>

                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/60 p-5">
                  <p className="section-kicker mb-2">Intent</p>
                  <p className="text-sm leading-relaxed text-oakridge-muted">{committee.overview}</p>
                </div>

                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/60 p-5">
                  <p className="section-kicker mb-2">Focus</p>
                  <p className="text-sm leading-relaxed text-oakridge-muted">{committee.description}</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-oakridge-teal/20 bg-oakridge-paper text-2xl font-black italic text-oakridge-teal">
                    {committee.symbol}
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-muted">Difficulty</p>
                    <span
                      className={`mt-2 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${
                        difficultyBadge[committee.difficulty]
                      }`}
                    >
                      {committee.difficulty}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Type", value: committee.type },
                    { label: "Format", value: committee.delegateCount },
                    { label: "Chapter", value: "XVI" },
                    { label: "Symbol", value: committee.symbol },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-4 text-center"
                    >
                      <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-oakridge-teal/70">
                        {detail.label}
                      </span>
                      <span className="mt-2 block text-sm font-bold text-oakridge-warm-white">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-5">
                  <p className="section-kicker mb-3">Executive Board</p>
                  <div className="space-y-3">
                    {chairs.map((chair) => (
                      <div
                        key={`${committee.slug}-${chair.role}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-oakridge-teal/10 bg-oakridge-paper/40 px-4 py-3"
                      >
                        <span className="text-xs font-bold text-oakridge-muted">{chair.role}</span>
                        <span className="text-sm font-black text-oakridge-warm-white">{chair.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/committees/${committee.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-oakridge-teal/30 bg-oakridge-deep/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-oakridge-teal transition-colors hover:border-oakridge-teal hover:text-oakridge-light-teal"
                >
                  Full Page
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
