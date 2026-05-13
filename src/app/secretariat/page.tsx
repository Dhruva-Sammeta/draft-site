import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export const metadata = {
  title: "Secretariat | Draft MUN",
  description: "Meet the Secretariat of Draft Model United Nations.",
};

export default function SecretariatPage() {
  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="section-kicker">Leadership</p>
        <h1 className="display-title">Meet the secretariat.</h1>
        <p className="body-large mx-auto mt-6 max-w-2xl">
          The dedicated team behind Draft MUN, working to deliver a focused, polished, and rigorous conference experience.
        </p>

        <div className="thin-panel mx-auto mt-14 max-w-3xl p-10 md:p-16">
          <p className="font-sans text-2xl font-black tracking-[-0.05em] text-oakridge-warm-white sm:text-4xl md:text-6xl">
            Secretariat details will be announced soon.
          </p>
          <p className="mt-5 text-oakridge-muted">Stay tuned for the official reveal.</p>
        </div>
      </div>
    </div>
  );
}
