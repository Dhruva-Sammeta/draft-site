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
    cyan: "border-oakridge-dark-teal bg-oakridge-light-teal/45 text-oakridge-navy hover:bg-oakridge-light-teal",
    gold: "border-oakridge-gold bg-oakridge-gold text-oakridge-navy hover:border-oakridge-navy hover:bg-oakridge-warm-white",
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
