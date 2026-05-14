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
    "group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border px-7 text-sm font-black tracking-wide transition-colors duration-300";

  const variants = {
    primary: "border-oakridge-teal bg-oakridge-teal text-oakridge-warm-white hover:border-oakridge-teal hover:bg-oakridge-teal hover:text-oakridge-warm-white",
    gold: "border-oakridge-gold bg-oakridge-gold text-oakridge-warm-white hover:border-oakridge-teal hover:bg-oakridge-navy",
    secondary: "border-oakridge-teal/20 bg-oakridge-deep text-oakridge-warm-white hover:border-oakridge-teal hover:bg-oakridge-teal/20",
    outline: "border-oakridge-teal/30 bg-transparent text-oakridge-warm-white hover:border-oakridge-teal hover:bg-oakridge-light-teal/35",
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
