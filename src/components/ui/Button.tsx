"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gold";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border px-5 text-[11px] font-black tracking-wide transition-colors duration-300 sm:min-h-[58px] sm:gap-4 sm:px-7 sm:text-sm";

  const variants = {
    primary: "border-oakridge-navy bg-oakridge-navy text-oakridge-warm-white hover:border-oakridge-dark-teal hover:bg-oakridge-dark-teal",
    gold: "border-oakridge-gold bg-oakridge-gold text-oakridge-navy hover:border-oakridge-navy hover:bg-oakridge-warm-white",
    secondary: "border-oakridge-dark-teal bg-oakridge-warm-white text-oakridge-navy hover:bg-oakridge-light-teal/45",
    outline: "border-oakridge-navy/18 bg-oakridge-warm-white text-oakridge-navy hover:border-oakridge-dark-teal hover:bg-white",
  };

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-full bg-oakridge-navy text-oakridge-warm-white transition-colors duration-300 group-hover:bg-oakridge-red group-hover:text-white"
      >
        <span className="h-[2px] w-4 bg-current" />
        <span className="absolute h-2.5 w-2.5 translate-x-1 rotate-45 border-r-2 border-t-2 border-current" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
