import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#faf5ed_0%,#ffffff_46%,#f6efe4_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,48,87,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,48,87,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45 sm:bg-[size:72px_72px]" />
      <div className="absolute inset-x-4 bottom-8 top-[var(--nav-safe)] rounded-[2rem] border border-oakridge-navy/12 sm:inset-x-[var(--pad)] sm:bottom-10 sm:rounded-[var(--radius)]" />
    </div>
  );
}
