import Container from "@/components/Container";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 py-16 text-white">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Coming soon</p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">More programs are on the way</h1>
            <p className="mt-4 text-lg text-slate-200">
              We are finalizing device and internet offerings for Kansas City. Check back soon or
              reach out and we will help you find the right next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/eligibility"
                className="rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
              >
                Check eligibility
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
