"use client";

import React, { useEffect, useState } from "react";
import CommitteeCard from "@/components/ui/CommitteeCard";
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

  useEffect(() => {
    if (!activeSlug) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSlug]);

  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-teal hover:border-oakridge-teal hover:text-oakridge-navy ${activeFilter === null ? "bg-oakridge-teal border-oakridge-teal text-oakridge-navy" : "border-oakridge-teal/20 bg-oakridge-paper/50 text-oakridge-muted"}`}
            >
              All
              <span className={activeFilter === null ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{committeesData.length}</span>
            </button>
            {typeOrder.filter((type) => typeGroups[type]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(activeFilter === type ? null : type)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-teal hover:border-oakridge-teal hover:text-oakridge-navy ${activeFilter === type ? "bg-oakridge-teal border-oakridge-teal text-oakridge-navy" : "border-oakridge-teal/20 bg-oakridge-paper/50 text-oakridge-muted"}`}
              >
                {type}
                <span className={activeFilter === type ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{typeGroups[type].length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Committee List */}
        <div className="grid gap-4">
          {(activeFilter ? committeesData.filter(c => c.type === activeFilter) : committeesData).map((committee, index) => (
            <CommitteeCard
              key={committee.slug}
              index={index}
              onOpen={(slug) => setActiveSlug(slug)}
              {...committee}
            />
          ))}
        </div>
      </div>

      <CommitteeModal committee={activeCommittee} onClose={() => setActiveSlug(null)} />
    </div>
  );
}
