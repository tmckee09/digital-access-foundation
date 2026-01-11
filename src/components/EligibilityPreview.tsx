import Container from "./Container";
import Link from "next/link";

const rows = [
  { members: 1, max: "$31,300" },
  { members: 2, max: "$42,300" },
  { members: 3, max: "$53,500" },
  { members: 4, max: "$64,300" },
  { members: 5, max: "$75,300" },
];

export default function EligibilityPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* LEFT COPY */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#0b4f6c] sm:text-5xl">
              Are you eligible?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
              While we wish we could provide affordable technology to everyone in
              our community, our mission requires us to focus our efforts on
              individuals and families who need it most. Eligibility is based on
              household income and documentation requirements.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Check the income guidelines to see if you qualify for our programs
              and services.
            </p>

            <Link
              href="/eligibility"
              className="mt-8 inline-flex rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition hover:bg-teal-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              Find Out More
            </Link>
          </div>

          {/* RIGHT TABLE */}
          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-black/10 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Family members
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Max income allowed
              </div>
            </div>

            <div className="space-y-3">
              {rows.map((r) => (
                <div
                  key={r.members}
                  className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
                    {r.members}
                  </div>
                  <div className="text-lg font-semibold text-[#0b4f6c]">
                    {r.max}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
