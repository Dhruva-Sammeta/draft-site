import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Resources | Draft MUN",
  description: "Official documents, guides, and resources for Draft MUN.",
};

const resourceCategories = [
  {
    title: "Background Guides",
    eyebrow: "Research",
    items: ["Coming Soon for all committees"],
  },
  {
    title: "Policy Documents",
    eyebrow: "Conduct",
    items: ["Delegate Code of Conduct", "Position Paper Guidelines", "Plagiarism Policy"],
  },
  {
    title: "Rules of Procedure",
    eyebrow: "Debate",
    items: ["UN UNA-USA ROP Quick Guide", "Crisis ROP Guide", "Specialized Agencies Addendum"],
  },
  {
    title: "Delegate Training",
    eyebrow: "Preparation",
    items: ["How to write a resolution", "Effective lobbying strategies", "Public speaking tips"],
  },
  {
    title: "Country Matrix",
    eyebrow: "Allotments",
    items: ["First Allotment Matrix", "Second Allotment Matrix"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="section-kicker">Delegate Resources</p>
          <h1 className="display-title">Conference resources.</h1>
          <p className="body-large mt-6 max-w-2xl">
            Access official documents, training materials, and guides to prepare for the conference.
          </p>
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
