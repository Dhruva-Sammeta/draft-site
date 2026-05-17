import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export const metadata = {
  title: "Secretariat | Oakridge MUN",
  description: "Meet the Secretariat of Oakridge Model United Nations.",
};

export default function SecretariatPage() {
  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 text-center sm:px-6">
        <p className="section-kicker">Leadership</p>
        <h1 className="display-title">Meet the secretariat.</h1>
        <p className="body-large mx-auto mt-6 max-w-2xl">
          The dedicated team behind Oakridge MUN, working to deliver a focused, polished, and rigorous conference experience.
        </p>

        <div className="thin-panel mx-auto mt-14 max-w-[var(--content-narrow)] p-7 sm:p-10 md:p-16">
          <p className="font-sans text-2xl font-black tracking-[-0.05em] text-oakridge-warm-white sm:text-4xl md:text-6xl">
            Secretariat details will be announced soon.
          </p>
          <p className="mt-5 text-oakridge-muted">Stay tuned for the official reveal.</p>
        </div>
      </div>
    </div>
  );
}
