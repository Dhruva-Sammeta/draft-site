import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export const metadata = {
  title: "Contact | Oakridge MUN",
  description: "Get in touch with the Oakridge MUN team.",
};

const CONTACT_EMAIL = "oakmun@oakridge.in";
const INSTAGRAM_URL = "https://www.instagram.com/oakmun.official";

export default function ContactPage() {
  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content-narrow)] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-kicker">Get in Touch</p>
          <h1 className="display-title">Say hello.</h1>
          <p className="body-large mt-6 max-w-xl">
            Questions about registrations, committees, background guides, or
            anything else — reach out and we&apos;ll get back to you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Email */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group thin-panel flex flex-col gap-5 p-6 transition-all duration-300 hover:border-oakridge-teal/40 sm:gap-6 sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-oakridge-teal/30 bg-oakridge-teal/10 text-oakridge-teal transition-colors group-hover:bg-oakridge-teal/20">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1 text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-dark-teal">
                Email us
              </p>
              <p className="font-sans text-xl font-black tracking-[-0.03em] text-oakridge-navy group-hover:text-oakridge-dark-teal transition-colors">
                {CONTACT_EMAIL}
              </p>
              <p className="mt-2 text-sm text-oakridge-navy/65">
                Send us a mail and we&apos;ll respond within 48 hours.
              </p>
            </div>
            <span className="mt-auto text-oakridge-teal/60 text-sm group-hover:text-oakridge-teal transition-colors">
              Open mail client →
            </span>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group thin-panel flex flex-col gap-5 p-6 transition-all duration-300 hover:border-oakridge-teal/40 sm:gap-6 sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-oakridge-teal/30 bg-oakridge-teal/10 text-oakridge-teal transition-colors group-hover:bg-oakridge-teal/20">
              {/* Instagram icon */}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
              </svg>
            </div>
            <div>
              <p className="mb-1 text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-dark-teal">
                DM us on Instagram
              </p>
              <p className="font-sans text-xl font-black tracking-[-0.03em] text-oakridge-navy group-hover:text-oakridge-dark-teal transition-colors">
                @oakmun.official
              </p>
              <p className="mt-2 text-sm text-oakridge-navy/65">
                Slide into our DMs for quick queries, updates, and announcements.
              </p>
            </div>
            <span className="mt-auto text-oakridge-teal/60 text-sm group-hover:text-oakridge-teal transition-colors">
              Open Instagram →
            </span>
          </a>
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-oakridge-navy/60">
          We typically respond within 24–48 hours. For urgent matters, Instagram DMs are faster.
        </p>
      </div>
    </div>
  );
}
