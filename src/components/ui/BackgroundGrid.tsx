import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(48,205,215,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(48,205,215,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35 sm:bg-[size:72px_72px]" />
      <div className="absolute inset-x-4 bottom-8 top-[var(--nav-safe)] rounded-[2rem] border border-oakridge-teal/10 sm:inset-x-[var(--pad)] sm:bottom-10 sm:rounded-[var(--radius)]" />
      <div className="absolute right-4 top-[18vh] h-20 w-20 rounded-full border border-oakridge-teal/24 bg-oakridge-teal/[0.03] blur-[0.2px] sm:right-[8vw] sm:h-28 sm:w-28" />
      <div className="absolute bottom-[10vh] left-4 h-14 w-14 rounded-full border border-oakridge-gold/18 bg-oakridge-gold/[0.025] sm:bottom-[14vh] sm:left-[8vw] sm:h-20 sm:w-20" />
    </div>
  );
}
