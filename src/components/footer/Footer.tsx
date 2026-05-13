import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Conference",
    links: [
      { label: "Committees", href: "/committees" },
      { label: "Register", href: "/register" },
      { label: "Resources", href: "/resources" },
      { label: "Secretariat", href: "/secretariat" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Schedule", href: "/#schedule" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-oakridge-teal/10 bg-oakridge-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/favicon.png"
                alt="Draft MUN"
                width={36}
                height={36}
                className="drop-shadow-md"
              />
              <span className="font-black text-oakridge-warm-white text-sm uppercase tracking-[0.08em]">
                OAKRIDGE MUN <span className="text-oakridge-teal">XVI</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-oakridge-muted">
              Celebrating 16 years of diplomacy, debate, and leadership. Chapter XVI brings together 650+ delegates across 20 committees.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-oakridge-teal/20 bg-oakridge-paper px-4 py-1.5 text-xs font-bold text-oakridge-teal">
                July 24-26, 2026
              </span>
              <span className="inline-flex items-center rounded-full border border-oakridge-teal/20 bg-oakridge-paper px-4 py-1.5 text-xs font-bold text-oakridge-muted">
                OISG, Gachibowli
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-teal">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-oakridge-muted transition-colors duration-300 hover:text-oakridge-warm-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-oakridge-teal/10 pt-8 md:flex-row">
          <p className="text-xs text-oakridge-muted">
            &copy; {new Date().getFullYear()} Draft Model United Nations. All rights reserved.
          </p>
          <p className="text-xs text-oakridge-muted/60">
            Chapter XVI - Draft International School, Gachibowli
          </p>
        </div>
      </div>
    </footer>
  );
}
