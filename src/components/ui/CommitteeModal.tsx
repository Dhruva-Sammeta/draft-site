"use client";

import React, { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { Committee } from "@/data/committees";

interface CommitteeModalProps {
  committee: Committee | null;
  onClose: () => void;
}

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
          className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6 sm:p-8"
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
            className="relative flex max-h-[90vh] w-full max-w-[var(--content-narrow)] flex-col overflow-hidden rounded-3xl glass-liquid shadow-[0_35px_90px_rgba(1,8,14,0.7)]"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-oakridge-teal/10 px-6 py-5 shrink-0">
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
                className="rounded-full border border-oakridge-gold/30 bg-oakridge-deep/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-oakridge-warm-white transition-colors hover:border-oakridge-gold hover:text-oakridge-gold"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 px-6 pb-6 pt-5 md:grid-cols-[1.15fr_0.85fr] overflow-y-auto flex-1 min-h-0">
              <div className="space-y-5">
                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-5">
                  <p className="section-kicker mb-3">Agenda</p>
                  <h3 className="font-sans text-xl font-black tracking-[-0.03em] text-oakridge-warm-white">
                    {committee.agenda}
                  </h3>
                </div>

                <div className="rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/60 p-5">
                  <p className="section-kicker mb-2">Background & Focus</p>
                  <p className="text-sm leading-relaxed text-oakridge-muted">{committee.overview}</p>
                  <p className="text-sm leading-relaxed text-oakridge-muted mt-2">{committee.description}</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 rounded-2xl border border-oakridge-teal/15 bg-oakridge-navy/70 p-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-oakridge-teal/20 bg-oakridge-paper text-2xl font-black italic text-oakridge-teal">
                    {committee.symbol}
                  </span>
                  <div>
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] border-oakridge-teal/40 bg-oakridge-teal/10 text-oakridge-teal">
                      Chapter XVI
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Type", value: committee.type },
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-oakridge-gold/30 bg-oakridge-deep/70 w-full py-2 text-xs font-black uppercase tracking-[0.18em] text-oakridge-gold transition-colors hover:border-oakridge-gold hover:text-oakridge-gold"
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
