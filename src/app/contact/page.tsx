import React from "react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact | Draft MUN",
  description: "Get in touch with the Draft MUN team.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.82fr_1.05fr] lg:items-center">
        <div>
          <p className="section-kicker">Reach Out</p>
          <h1 className="display-title">Get in touch.</h1>
          <p className="body-large mt-6">
            Questions about registrations, committees, resources, or conference logistics can come straight to the Draft MUN team.
          </p>
        </div>

        <div className="thin-panel bg-oakridge-navy p-6 md:p-10">
          <div className="mb-8 flex items-start justify-between gap-6 border-b border-oakridge-teal/10 pb-6">
            <h2 className="font-sans text-2xl font-black tracking-[-0.05em] text-oakridge-warm-white sm:text-4xl">
              Send a message
            </h2>
            <p className="text-right text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-dark-teal">
              Chapter XVI
            </p>
          </div>

          <form className="space-y-7" action="mailto:contact@oakridge.in" method="post" encType="text/plain">
            <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-oakridge-muted">
              Name
              <input
                type="text"
                className="border-0 border-b border-oakridge-teal/20 bg-transparent px-0 py-3 text-lg font-bold normal-case tracking-normal text-oakridge-warm-white outline-none transition-colors placeholder:text-oakridge-warm-white/20 focus:border-oakridge-teal sm:text-2xl"
                placeholder="Your full name"
                required
              />
            </label>
            <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-oakridge-muted">
              Email
              <input
                type="email"
                className="border-0 border-b border-oakridge-teal/20 bg-transparent px-0 py-3 text-lg font-bold normal-case tracking-normal text-oakridge-warm-white outline-none transition-colors placeholder:text-oakridge-warm-white/20 focus:border-oakridge-teal sm:text-2xl"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-oakridge-muted">
              Message
              <textarea
                className="h-36 resize-none border-0 border-b border-oakridge-teal/20 bg-transparent px-0 py-3 text-2xl font-bold normal-case tracking-normal text-oakridge-warm-white outline-none transition-colors placeholder:text-oakridge-warm-white/20 focus:border-oakridge-teal"
                placeholder="How can we help?"
                required
              />
            </label>
            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
