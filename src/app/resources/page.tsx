import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Resources | Oakridge MUN",
  description: "Official documents, guides, and resources for Oakridge MUN.",
};

export default function ResourcesPage() {
  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6">
          <div>
            <p className="section-kicker">Delegate Resources</p>
            <h1 className="display-title">Conference resources.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Official documents and guides will be published here once they are ready.
            </p>
          </div>
        </div>
        <div className="thin-panel px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="section-kicker">Updates soon</p>
          <h2 className="mt-3 font-sans text-2xl font-black tracking-[-0.04em] text-oakridge-navy sm:text-3xl">
            Resources will be released shortly.
          </h2>
          <p className="body-large mt-4">
            Check back here for background guides, rules of procedure, and official documents.
          </p>
          <Button variant="outline" className="mt-6" href="/contact">
            Contact the team
          </Button>
        </div>
      </div>
    </div>
  );
}
