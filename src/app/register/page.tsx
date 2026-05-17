import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Register | Oakridge MUN",
  description: "Register for the upcoming Oakridge Model United Nations conference.",
};

export default function RegisterPage() {
  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="section-kicker">Chapter XVI</p>
          <h1 className="display-title">Delegate registration.</h1>
          <p className="body-large mx-auto mt-6 max-w-2xl">
            Secure your place at the premier Model United Nations conference.
          </p>
        </div>

        <div className="thin-panel mx-auto grid max-w-[var(--content-narrow)] gap-6 p-5 text-center sm:p-7 md:grid-cols-[1fr_1.2fr] md:p-10 md:text-left">
          <div className="grid min-h-[240px] place-content-center rounded-[24px] bg-oakridge-navy p-6 text-oakridge-warm-white sm:min-h-[280px] sm:p-8">
            <span className="font-sans text-7xl font-black leading-none text-oakridge-teal">650+</span>
            <span className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-oakridge-light-teal">
              Delegate seats
            </span>
          </div>
          <div className="self-center">
            <p className="section-kicker">Opening Soon</p>
            <h2 className="font-sans text-2xl font-black tracking-[-0.05em] text-oakridge-warm-white sm:text-4xl md:text-6xl">
              Registration portal is being finalized.
            </h2>
            <p className="mt-5 leading-relaxed text-oakridge-muted">
              Please check back shortly or follow our official channels for the exact launch date.
            </p>
            <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-[20px] border border-oakridge-teal/15">
              {[
                ["20", "Committees"],
                ["3", "Days"],
                ["XVI", "Chapter"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-oakridge-teal/10 p-4 text-center last:border-r-0">
                  <strong className="block font-sans text-2xl font-black text-oakridge-warm-white">{value}</strong>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-oakridge-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Button variant="gold" href="#">
                Get Notified
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
