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
    primary: "glass-premium border-oakridge-teal text-oakridge-warm-white hover:shadow-[0_0_40px_rgba(48,205,215,0.3)]",
    gold: "glass-gold border-oakridge-gold text-oakridge-warm-white hover:shadow-[0_0_50px_rgba(188,154,110,0.4)]",
    secondary: "glass-premium border-oakridge-teal/20 text-oakridge-warm-white hover:shadow-[0_0_30px_rgba(48,205,215,0.2)]",
    outline: "glass-frosted border-oakridge-teal/30 text-oakridge-warm-white hover:shadow-[0_0_35px_rgba(48,205,215,0.25)]",
  };

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-full bg-oakridge-deep text-oakridge-warm-white transition-colors duration-300 group-hover:bg-oakridge-teal group-hover:text-oakridge-warm-white"
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
