import React from "react";
import CommitteeCard from "@/components/ui/CommitteeCard";
import { committeesData } from "@/data/committees";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export const metadata = {
  title: "Committees | Oakridge MUN Chapter XVI",
  description: "Explore all 20 committees at Oakridge MUN Chapter XVI. From General Assembly to Crisis, find the right committee for you.",
};

export default function CommitteesPage() {
  // Group committees by type
  const typeGroups = committeesData.reduce((acc, c) => {
    if (!acc[c.type]) acc[c.type] = [];
    acc[c.type].push(c);
    return acc;
  }, {} as Record<string, typeof committeesData>);

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

  const typeCount = Object.keys(typeGroups).length;

  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col gap-4 md:grid md:grid-cols-[0.5fr_1fr_0.7fr] md:items-end md:gap-6">
            <p className="section-kicker">Chapter XVI / {committeesData.length} Committees</p>
            <h1 className="display-title">Conference committees.</h1>
            <p className="body-large">
              From General Assembly to fast-paced crisis simulations, discover the full committee slate for this year&apos;s conference.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {typeOrder.filter(t => typeGroups[t]).map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-1.5 rounded-full border border-oakridge-teal/20 bg-oakridge-paper/50 px-4 py-1.5 text-xs font-bold text-oakridge-muted"
              >
                {type}
                <span className="text-oakridge-teal">{typeGroups[type].length}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Committee List */}
        <div className="grid">
          {committeesData.map((committee, index) => (
            <CommitteeCard key={committee.slug} index={index} {...committee} />
          ))}
        </div>
      </div>
    </div>
  );
}
