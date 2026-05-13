"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "cyan" | "gold";
  className?: string;
}

export default function GlowButton({
  children,
  href = "#",
  variant = "cyan",
  className = "",
}: GlowButtonProps) {
  const colors = {
    cyan: "border-oakridge-teal bg-oakridge-light-teal/40 text-oakridge-warm-white hover:bg-oakridge-teal",
    gold: "border-oakridge-red bg-oakridge-red text-oakridge-warm-white hover:border-oakridge-teal hover:bg-oakridge-navy",
  };

  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border px-6 text-sm font-black uppercase tracking-[0.14em] transition-colors duration-300 ${colors[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
