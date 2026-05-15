import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Glass frosted border frame */}
      <div className="absolute inset-x-3 top-24 bottom-8 rounded-[2rem] border border-oakridge-teal/10 glass-frosted sm:inset-x-[var(--pad)] sm:top-28 sm:bottom-10 sm:rounded-[var(--radius)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,48,87,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(0,48,87,0.035)_1px,transparent_1px)] bg-[size:56px_56px] sm:bg-[size:72px_72px]" />
      
      {/* Glass circles */}
      <div className="absolute right-4 top-[14vh] h-20 w-20 rounded-full border border-oakridge-teal/35 glass-frosted sm:right-[8vw] sm:top-[18vh] sm:h-28 sm:w-28" />
      <div className="absolute bottom-[10vh] left-4 h-14 w-14 rounded-full border border-oakridge-gold/25 glass-frosted sm:bottom-[14vh] sm:left-[8vw] sm:h-20 sm:w-20" />
      
      {/* Additional glass accents */}
      <div className="absolute left-1/2 top-[28%] -translate-x-1/2 h-20 w-20 rounded-full border border-oakridge-teal/20 glass-frosted opacity-60 sm:top-1/3 sm:h-32 sm:w-32" />
    </div>
  );
}
