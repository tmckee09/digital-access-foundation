import Hero from "@/components/Hero";
import ProgramTiles from "@/components/ProgramTiles";
import Container from "@/components/Container";
import Link from "next/link";

import ImpactSection from "@/components/ImpactSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import EligibilityPreview from "@/components/EligibilityPreview";
import DonorBanner from "@/components/DonorBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramTiles />

      {/* DONOR IMAGE BANNER */}
      <DonorBanner />

      {/* Teal eligibility callout (keep as-is, just slightly enhanced hover/shadow) */}
      <section className="bg-teal-600 py-12">
  <Container>
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">Are you eligible?</h2>

        <p className="mt-2 text-teal-50">
          Eligibility is income-based and documentation-based. For now, we’re aligning with
          the same model used by PCs for People.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/eligibility"
          className="rounded-md bg-white px-4 py-2 font-medium text-teal-700 shadow-md shadow-black/10 transition hover:bg-slate-100 hover:shadow-lg"
        >
          View Eligibility Requirements
        </Link>

        <Link
          href="/contact"
          className="rounded-md border border-white/70 px-4 py-2 text-white transition hover:bg-white/10"
        >
          Ask a Question
        </Link>
      </div>
    </div>
  </Container>
</section>

      {/* NEW long-scroll sections */}
      <ImpactSection />
      <TestimonialBanner />
      <EligibilityPreview />
    </>
  );
}
