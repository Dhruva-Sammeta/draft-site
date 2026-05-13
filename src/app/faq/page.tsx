"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

// ============================================================================
// FAQ DATA - Edit questions and answers here.
// ============================================================================
const FAQ_DATA = [
  {
    category: "About the Conference",
    items: [
      {
        q: "What is Draft MUN?",
        a: "Oakridge Model United Nations (OakMUN) is one of the largest and most prestigious high school MUN conferences in Asia. Organised by Oakridge International School, Gachibowli (a Nord Anglia Education institution), OakMUN has run for sixteen consecutive years, hosting hundreds of delegates each edition across a wide range of UN and specialized committees."
      },
      {
        q: "What is Chapter XVI?",
        a: "Chapter XVI is the sixteenth edition of Draft MUN. Each annual edition is referred to as a 'Chapter', continuing the legacy of diplomatic simulation, leadership development, and global awareness that the conference was founded on."
      },
      {
        q: "When and where is the conference?",
        a: "Chapter XVI takes place from July 24 to 26, 2026 at Oakridge International School, Gachibowli, Hyderabad, India. All committee sessions, meals, ceremonies, and socials are held on campus."
      },
      {
        q: "How many delegates attend?",
        a: "OakMUN Chapter XVI will host over 650 delegates from schools across India and internationally, making it one of the largest high school MUN events in all of Asia."
      },
      {
        q: "What makes OakMUN different from other conferences?",
        a: "OakMUN stands apart through its scale, its 16-year legacy, its diverse committee slate of 20 committees spanning General Assembly, Crisis, Regional, Legal, and Specialized formats, and its location within a Nord Anglia international school environment. The conference is entirely student-led and is known for its rigorous academic standards and high-quality debate."
      },
    ],
  },
  {
    category: "Committees & Preparation",
    items: [
      {
        q: "How many committees are there?",
        a: "Chapter XVI features 20 committees, ranging from traditional General Assembly committees like DISEC and UNHRC to fast-paced crisis simulations like Armageddon and the Joint Crisis Committees (JCC), regional bodies like Lok Sabha and the US Senate, and specialized forums like the Bilderberg Meeting and FIFA Congress."
      },
      {
        q: "How do I choose a committee?",
        a: "Browse our Committees page to see the full slate. Each committee listing includes the agenda, committee type, format, and a detailed overview. Consider your interests, prior MUN experience, and whether you prefer traditional debate or crisis-style simulation when making your choice."
      },
      {
        q: "Will background guides be provided?",
        a: "Yes. Official background guides are released for every committee well in advance of the conference. These guides cover the agenda, key concepts, relevant precedents, and research direction. They will be available for download on each committee's detail page."
      },
      {
        q: "What is the delegate format?",
        a: "All committees at Chapter XVI follow a single-delegate format. Each delegate represents one country, individual, or entity depending on the committee type."
      },
      {
        q: "Do I need prior MUN experience?",
        a: "Not necessarily. Our committee slate includes committees suitable for all experience levels. That said, delegates are expected to come prepared with research on their assigned country and the agenda topic. First-time delegates are encouraged to reach out to their committee's Executive Board for guidance."
      },
    ],
  },
  {
    category: "Registration & Logistics",
    items: [
      {
        q: "How do I register?",
        a: "Registration opens through the official Draft MUN registration portal. Head delegates should register their delegations, after which individual delegates will be assigned to committees. Visit the Register page for the latest registration link and deadlines."
      },
      {
        q: "Is there a registration fee?",
        a: "Yes. The registration fee covers all committee materials, meals during the conference, the delegate kit, and access to all ceremonies and social events. The exact fee and payment instructions are communicated upon registration."
      },
      {
        q: "What should I bring to the conference?",
        a: "Delegates should bring their printed position papers, formal Western or ethnic attire (as per dress code), stationery, a laptop or tablet for reference, and any materials specified by their committee's Executive Board. A detailed packing list will be shared closer to the conference date."
      },
      {
        q: "What is the dress code?",
        a: "OakMUN follows a strict formal dress code: Western business formal (suit, blazer, tie) or formal ethnic attire. Delegates not adhering to the dress code may not be permitted into committee sessions."
      },
      {
        q: "Is accommodation provided?",
        a: "OakMUN does not provide accommodation. However, recommended hotel options near the campus in Gachibowli will be shared with registered delegations. The venue is well-connected and centrally located in Hyderabad's IT corridor."
      },
    ],
  },
  {
    category: "Awards & Recognition",
    items: [
      {
        q: "What awards are given?",
        a: "Awards at OakMUN include Best Delegate, High Commendation, Special Mention, and Verbal Mention in each committee. Additionally, best delegation awards recognise schools with consistently outstanding performance across committees."
      },
      {
        q: "How are delegates evaluated?",
        a: "Delegates are evaluated by their committee's Executive Board on the quality of their speeches, resolution drafting, diplomacy, adherence to foreign policy, crisis responses (where applicable), and overall contribution to committee proceedings."
      },
    ],
  },
];
// ============================================================================

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-oakridge-teal/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 group"
      >
        <span className="font-sans text-base font-bold text-oakridge-warm-white group-hover:text-oakridge-teal transition-colors duration-200 sm:text-lg">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-oakridge-teal/20 text-oakridge-teal text-lg leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-oakridge-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-oakridge-navy pt-36 pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-14">
          <p className="section-kicker mb-3">Support</p>
          <h1 className="display-title">Frequently asked questions.</h1>
          <p className="body-large mt-4 max-w-2xl">
            Everything you need to know about Draft MUN Chapter XVI. If your question isn&apos;t answered here, reach out via the Contact page.
          </p>
        </div>

        <div className="space-y-12">
          {FAQ_DATA.map((section) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-teal">
                {section.category}
              </h2>
              <div className="thin-panel divide-y-0 overflow-hidden px-6 sm:px-8">
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
