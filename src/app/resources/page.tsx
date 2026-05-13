import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Resources | Oakridge MUN",
  description: "Official documents, guides, and resources for Oakridge MUN.",
};

// Update this URL once the Excel file is uploaded / shared
const ALLOCATION_MATRIX_URL = "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?usp=sharing";

const resourceCategories = [
  {
    title: "Background Guides",
    eyebrow: "Research",
    items: ["Coming Soon for all committees"],
    href: null,
  },
  {
    title: "Policy Documents",
    eyebrow: "Conduct",
    items: ["Delegate Code of Conduct", "Position Paper Guidelines", "Plagiarism Policy"],
    href: null,
  },
  {
    title: "Rules of Procedure",
    eyebrow: "Debate",
    items: ["UN UNA-USA ROP Quick Guide", "Crisis ROP Guide", "Specialized Agencies Addendum"],
    href: null,
  },
  {
    title: "Delegate Training",
    eyebrow: "Preparation",
    items: ["How to write a resolution", "Effective lobbying strategies", "Public speaking tips"],
    href: null,
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Delegate Resources</p>
            <h1 className="display-title">Conference resources.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Access official documents, training materials, and guides to prepare for the conference.
            </p>
          </div>

          {/* ── Allocation Matrix CTA ─────────────────────────────── */}
          <a
            href={ALLOCATION_MATRIX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-3 rounded-2xl border border-oakridge-teal/40 bg-oakridge-teal/10 px-6 py-4 transition-all duration-300 hover:border-oakridge-teal/70 hover:bg-oakridge-teal/20 sm:self-end"
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-oakridge-teal">
                Live Document
              </p>
              <p className="mt-0.5 text-base font-black text-oakridge-warm-white group-hover:text-oakridge-teal transition-colors">
                Allocation Matrix →
              </p>
            </div>
            <svg
              className="h-5 w-5 text-oakridge-teal/60 group-hover:text-oakridge-teal transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {resourceCategories.map((category) => (
            <article key={category.title} className="thin-panel p-7">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-dark-teal">
                {category.eyebrow}
              </p>
              <h2 className="mb-6 font-sans text-xl font-black tracking-[-0.04em] text-oakridge-warm-white sm:text-3xl">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 border-t border-oakridge-teal/10 pt-3"
                  >
                    <span className="text-oakridge-muted">{item}</span>
                    <Button variant="outline" className="min-h-10 px-4 text-xs" href="#">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
