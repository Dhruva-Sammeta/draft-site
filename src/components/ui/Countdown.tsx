"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ============================================================================
// CONFIGURATION - Change the target date here
// ============================================================================
const targetDate = new Date("2026-07-24T00:00:00+05:30").getTime();
// ============================================================================

function getTimeLeft(): TimeLeft {
  const difference = targetDate - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center rounded-xl border border-oakridge-teal/20 bg-[#072237]/80 px-1.5 py-3 backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-5"
        >
          <span
            suppressHydrationWarning
            className="block font-sans text-2xl font-black leading-none text-oakridge-warm-white sm:text-4xl md:text-5xl tabular-nums drop-shadow-md"
          >
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-2 block text-[9px] font-black uppercase tracking-[0.2em] text-oakridge-teal sm:text-[11px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
