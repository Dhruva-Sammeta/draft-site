import React from "react";
import { notFound } from "next/navigation";
import { committeesData } from "@/data/committees";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Button from "@/components/ui/Button";
import Link from "next/link";

export async function generateStaticParams() {
  return committeesData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const committee = committeesData.find((c) => c.slug === slug);
  if (!committee) return { title: "Not Found" };

  return {
    title: `${committee.name} - ${committee.fullName} | Oakridge MUN XVI`,
    description: `${committee.description} Agenda: ${committee.agenda}`,
  };
}

export default async function CommitteeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const committee = committeesData.find((c) => c.slug === slug);
  const committeeIndex = committeesData.findIndex((c) => c.slug === slug);

  if (!committee) {
    notFound();
  }

  const prevCommittee = committeeIndex > 0 ? committeesData[committeeIndex - 1] : null;
  const nextCommittee = committeeIndex < committeesData.length - 1 ? committeesData[committeeIndex + 1] : null;
  const chairs = committee.chairs.length
    ? committee.chairs
    : [
        { role: "Chairperson", name: "TBA" },
        { role: "Vice Chairperson", name: "TBA" },
      ];

  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-oakridge-navy/60">
          <Link href="/committees" className="hover:text-oakridge-teal transition-colors">
            Committees
          </Link>
          <span className="text-oakridge-teal/40">/</span>
          <span className="text-oakridge-navy font-semibold">{committee.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {/* Roman numeral badge */}
            <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-oakridge-teal/20 bg-oakridge-paper text-xl font-black italic text-oakridge-teal">
              {committee.symbol}
            </span>
            <span className="rounded-full border border-oakridge-teal/15 bg-oakridge-paper px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-oakridge-dark-teal">
              {committee.type}
            </span>
          </div>
          <h1 className="display-title">{committee.name}</h1>
          <p className="body-large mt-3 text-oakridge-teal font-semibold">{committee.fullName}</p>
          <p className="body-large mt-4 max-w-3xl">{committee.description}</p>
        </div>

        {/* Main Content Panel */}
        <div className="thin-panel mb-10 p-7 md:p-10">
          {/* Overview */}
          <section className="border-b border-oakridge-teal/10 pb-8">
            <p className="section-kicker mb-4">Overview</p>
            <p className="body-large">{committee.overview}</p>
          </section>

          {/* Agenda */}
          <section className="border-b border-oakridge-teal/10 py-8">
            <p className="section-kicker mb-4">Agenda</p>
            <div className="rounded-[22px] border border-oakridge-teal/15 bg-oakridge-paper p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-oakridge-teal/20 bg-oakridge-navy text-sm font-black italic text-oakridge-teal">
                  {committee.symbol}
                </span>
                <div>
              <h2 className="font-sans text-2xl font-black tracking-[-0.04em] text-oakridge-navy md:text-3xl">
                    {committee.agenda}
                  </h2>
              <p className="mt-3 text-sm text-oakridge-navy/65">
                    Delegates are expected to research this agenda thoroughly and come prepared with a comprehensive understanding of their portfolio country&apos;s position.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Committee Details Grid */}
          <section className="border-b border-oakridge-teal/10 py-8">
            <p className="section-kicker mb-4">Committee Details</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
              {[
                { label: "Type", value: committee.type },
                { label: "Chapter", value: "XVI" },
                { label: "Symbol", value: committee.symbol },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-xl border border-oakridge-navy/10 bg-white p-4 text-center"
                >
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-teal">
                    {detail.label}
                  </span>
                  <span className="mt-2 block font-sans text-lg font-bold text-oakridge-navy">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Executive Board */}
          <section className="pt-8">
            <p className="section-kicker mb-4">Executive Board</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {chairs.map((chair) => (
                <div
                  key={`${committee.slug}-${chair.role}`}
                  className="flex items-center gap-4 rounded-[22px] border border-oakridge-navy/12 bg-white p-5"
                >
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-oakridge-paper font-black text-oakridge-teal text-lg">
                    EB
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-black text-oakridge-navy">{chair.name}</h3>
                    <p className="text-sm text-oakridge-navy/62">{chair.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Background Guide Download */}
        <div className="thin-panel flex flex-col gap-5 bg-oakridge-navy p-7 text-oakridge-warm-white sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-oakridge-light-teal">
              Background Guide
            </p>
            <h2 className="mt-2 font-sans text-3xl font-black tracking-[-0.04em]">
              Official study material
            </h2>
            <p className="mt-2 text-oakridge-light-teal">Download access will open once guides are released.</p>
          </div>
          <Button variant="gold" className="w-full sm:w-auto" href="#">
            Download PDF
          </Button>
        </div>

        {/* Navigation between committees */}
        <div className="flex items-center justify-between gap-4">
          {prevCommittee ? (
            <Link
              href={`/committees/${prevCommittee.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-oakridge-teal/15 bg-oakridge-paper/40 px-5 py-4 transition-all hover:border-oakridge-teal/30"
            >
              <span className="text-oakridge-teal/50 group-hover:text-oakridge-teal transition-colors">&larr;</span>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-oakridge-muted">Previous</span>
                <span className="block font-sans text-lg font-bold text-oakridge-navy group-hover:text-oakridge-dark-teal transition-colors">
                  {prevCommittee.name}
                </span>
              </div>
            </Link>
          ) : <div />}
          {nextCommittee ? (
            <Link
              href={`/committees/${nextCommittee.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-oakridge-teal/15 bg-oakridge-paper/40 px-5 py-4 text-right transition-all hover:border-oakridge-teal/30"
            >
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-oakridge-muted">Next</span>
                <span className="block font-sans text-lg font-bold text-oakridge-navy group-hover:text-oakridge-dark-teal transition-colors">
                  {nextCommittee.name}
                </span>
              </div>
              <span className="text-oakridge-teal/50 group-hover:text-oakridge-teal transition-colors">&rarr;</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
