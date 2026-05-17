"use client";

import { useEffect, useState, useCallback } from "react";
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

const mobileItemVariants = {
  closed: { y: 20, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const pathname = usePathname();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Top nav bar ─────────────────────────────────────── */}
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+0.75rem)] z-[80] w-[calc(100%-1.25rem)] max-w-[var(--content)] -translate-x-1/2 sm:top-[calc(env(safe-area-inset-top)+1rem)] sm:w-[calc(100%-2rem)]"
      >
        <div className="glass-liquid glass-hover flex min-h-[64px] items-center justify-between gap-2 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:min-h-[72px] sm:px-5 sm:py-3 lg:px-6 xl:gap-6">
          {/* Brand */}
          <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2.5">
            <Image
              src="/favicon.svg"
              alt="Oakridge MUN Crest"
              width={32}
              height={32}
              className="h-10 w-10 shrink-0 drop-shadow-md sm:h-11 sm:w-11"
              priority
            />
            <span className="truncate text-[clamp(0.78rem,3.8vw,1rem)] font-black uppercase tracking-[0.07em] text-oakridge-warm-white transition-colors duration-300 group-hover:text-oakridge-teal sm:tracking-[0.08em]">
              OAKRIDGE MUN <span className="text-oakridge-teal">XVI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-2.5 py-2 text-[12px] font-semibold transition-colors duration-300 group ${
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
            className="group relative z-[90] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 overflow-visible rounded-full border border-oakridge-teal/10 bg-oakridge-deep/20 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4, backgroundColor: "#30cdd7" } : { rotate: 0, y: 0, backgroundColor: "#e9eff5" }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1, backgroundColor: "#e9eff5" }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[1.5px]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4, backgroundColor: "#30cdd7" } : { rotate: 0, y: 0, backgroundColor: "#e9eff5" }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Side Panel Overlay ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-oakridge-ink/72 backdrop-blur-md"
            />

            {/* Rounded menu panel, offset below the fixed nav */}
            <motion.div
              initial={{ opacity: 0, y: -14, clipPath: "inset(0 0 100% 0 round 24px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 24px)" }}
              exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0 round 24px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-liquid absolute inset-x-3 bottom-3 top-[var(--nav-safe)] flex flex-col overflow-y-auto rounded-[24px] p-6"
            >
              <div className="mb-8 flex items-center gap-4">
                <Image
                  src="/favicon.svg"
                  alt="Oakridge MUN"
                  width={64}
                  height={64}
                  className="h-14 w-14 shrink-0 drop-shadow-xl"
                />
                <div>
                  <h3 className="text-oakridge-warm-white font-black text-xl tracking-wider uppercase leading-tight">
                    OAKRIDGE MUN
                  </h3>
                  <p className="text-oakridge-teal font-black text-sm tracking-[0.2em] uppercase">
                    Chapter XVI
                  </p>
                </div>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-4 text-lg font-bold tracking-wide transition-all duration-300 ${
                        pathname === item.href
                          ? "text-oakridge-teal"
                          : "text-oakridge-warm-white hover:text-oakridge-teal"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-oakridge-teal transition-all duration-300 ${
                        pathname === item.href ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
                      }`} />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-muted mb-4">
                  Conference Dates
                </p>
                <div className="rounded-xl border border-oakridge-teal/20 bg-oakridge-paper/50 p-4">
                  <p className="text-oakridge-warm-white font-bold text-sm">
                    July 24-26, 2026
                  </p>
                  <p className="text-oakridge-teal text-[11px] font-black uppercase tracking-wider mt-1">
                    OISG, Gachibowli
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
