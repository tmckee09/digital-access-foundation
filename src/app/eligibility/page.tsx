import Container from "@/components/Container";
import Link from "next/link";

const incomeRows = [
  { members: 1, max: "$31,300" },
  { members: 2, max: "$42,300" },
  { members: 3, max: "$53,500" },
  { members: 4, max: "$64,300" },
  { members: 5, max: "$75,300" },
];

const documentOptions = [
  "Participation in a federal assistance program (SNAP, Medicaid, SSI, etc.)",
  "Most recent tax return or pay stubs showing household income",
  "School enrollment documentation for K-12 or college students",
  "Proof of residency within the Kansas City metro area",
  "Photo ID for the adult applicant",
];

const programHighlights = [
  {
    title: "Households and families",
    detail:
      "Income-qualified households may receive refurbished laptops or desktops depending on availability.",
  },
  {
    title: "Nonprofits and community groups",
    detail:
      "Verified 501(c)(3) organizations can request devices for staff, volunteers, and program participants.",
  },
  {
    title: "Students and job seekers",
    detail:
      "We prioritize learners and job seekers who need reliable technology to succeed.",
  },
];

export default function EligibilityPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-[#0b4f6c] py-16 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Eligibility</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Check if your household qualifies for a device or service
              </h1>
              <p className="mt-4 text-lg text-slate-100">
                We use income and documentation guidelines to ensure refurbished technology reaches
                the people who need it most. If you are unsure, reach out and we will help you
                figure it out.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
                >
                  Ask about eligibility
                </Link>
                <Link
                  href="/get-devices"
                  className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore device programs
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-sm text-slate-100">
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-200">
                Quick checklist
              </div>
              <ul className="mt-4 space-y-3">
                <li>✔ Household income within the guidelines</li>
                <li>✔ Proof of residency in the Kansas City metro</li>
                <li>✔ Documentation ready to share</li>
                <li>✔ Need for a laptop, desktop, or connectivity support</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Income guidelines</h2>
              <p className="mt-3 text-slate-600">
                Income limits are based on household size and are aligned with the PCs for People
                program model. These values are updated annually.
              </p>
              <div className="mt-6 space-y-3">
                {incomeRows.map((row) => (
                  <div
                    key={row.members}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-slate-700">
                      {row.members} household member{row.members > 1 ? "s" : ""}
                    </div>
                    <div className="text-lg font-semibold text-[#0b4f6c]">{row.max}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Documents we accept</h3>
              <p className="mt-3 text-slate-600">
                Bring one of the following items to verify eligibility. We can help you choose the
                right option during intake.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {documentOptions.map((option) => (
                  <li key={option} className="rounded-md bg-slate-50 p-3">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {programHighlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-white">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold">Ready to apply?</h2>
                <p className="mt-3 text-slate-200">
                  Complete a quick intake and our team will confirm eligibility, explain next steps,
                  and match you with the right program.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-4 py-2 font-medium text-slate-900 shadow-md shadow-black/20 transition hover:bg-slate-100"
                >
                  Start intake
                </Link>
                <Link
                  href="/donate"
                  className="rounded-md border border-white/40 px-4 py-2 text-white transition hover:bg-white/10"
                >
                  Support the program
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
