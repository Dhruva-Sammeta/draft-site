"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Committees", href: "/committees" },
  { label: "Secretariat", href: "/secretariat" },
  { label: "Resources", href: "/resources" },
  { label: "Register", href: "/register" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const navbarVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileItemVariants = {
  closed: { y: 20, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.12 + i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="glass-liquid glass-hover rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500">
          {/* Brand: Favicon icon + OAKRIDGE MUN XVI */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/favicon.png"
              alt="Oakridge MUN Crest"
              width={32}
              height={32}
              className="drop-shadow-md"
              priority
            />
            <span className="text-oakridge-warm-white font-black text-sm tracking-[0.08em] uppercase group-hover:text-oakridge-teal transition-colors duration-300 sm:text-[15px]">
              OAKRIDGE MUN <span className="text-oakridge-teal">XVI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-[13px] font-semibold transition-colors duration-300 group ${
                  pathname === item.href ? "text-oakridge-warm-white" : "text-oakridge-muted hover:text-oakridge-warm-white"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-oakridge-teal rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-oakridge-teal/50 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Hamburger - mobile */}
          <button
            onClick={toggle}
            className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 group overflow-visible"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300 origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-oakridge-navy/95 backdrop-blur-xl" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
              {/* Brand in mobile menu */}
              <div className="mb-8 flex flex-col items-center gap-3">
                <Image
                  src="/favicon.png"
                  alt="Oakridge MUN"
                  width={56}
                  height={56}
                  className="drop-shadow-xl"
                />
                <span className="text-oakridge-warm-white font-black text-lg tracking-[0.1em] uppercase">
                  OAKRIDGE MUN <span className="text-oakridge-teal">XVI</span>
                </span>
              </div>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className={`text-2xl font-semibold tracking-wider transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-oakridge-teal"
                      : "text-oakridge-warm-white/80 hover:text-oakridge-teal"
                  }`}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
