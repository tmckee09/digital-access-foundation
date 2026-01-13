import Container from "@/components/Container";
import Link from "next/link";

const values = [
  {
    title: "People first",
    detail:
      "We prioritize households and community organizations that need reliable technology to learn, work, and connect.",
  },
  {
    title: "Responsible stewardship",
    detail:
      "Every donated device is treated with secure data practices and recycled responsibly.",
  },
  {
    title: "Local partnerships",
    detail:
      "We collaborate with schools, nonprofits, and businesses to expand digital access across Kansas City.",
  },
];

const milestones = [
  {
    year: "2025",
    detail:
      "Established Digital Access Foundation’s mission, assembled our founding team, and began building partnerships to address digital access and responsible technology recycling in Kansas City.",
  },
  {
    year: "2026",
    detail:
      "Launched operations to recycle donated technology, securely sanitize data, and connect families, students, and nonprofits with affordable devices and connectivity options.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-[#0b4f6c] py-16 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">About us</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Building a more connected Kansas City
              </h1>
              <p className="mt-4 text-lg text-slate-100">
                Digital Access Foundation connects community members to refurbished technology,
                affordable internet pathways, and responsible recycling options. We focus on closing
                the digital divide through local partnerships and sustainable practices.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
                >
                  Contact our team
                </Link>
                <Link
                  href="/donate"
                  className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Support the mission
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-sm text-slate-100">
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-200">
                What we do
              </div>
              <ul className="mt-4 space-y-3">
                <li>✔ Refurbish devices for income-qualified households</li>
                <li>✔ Provide digital skills and connectivity resources</li>
                <li>✔ Offer secure, responsible e-waste recycling</li>
                <li>✔ Partner with local schools and nonprofits</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
              <p className="mt-3 text-slate-600">
                We believe access to technology is essential for education, employment, and civic
                engagement. By refurbishing devices and coordinating sustainable recycling, we
                reduce barriers and build a stronger, more connected community.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{value.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our story</h3>
              <p className="mt-3 text-slate-600">
                We started with a single goal: help more people access reliable devices. Today, we
                serve families, students, and nonprofits while keeping usable tech in the community.
              </p>
              <div className="mt-6 space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-teal-600">{milestone.year}</div>
                    <p className="mt-2 text-sm text-slate-600">{milestone.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Community impact</h3>
              <p className="mt-3 text-sm text-slate-600">
                We measure success by the households connected, jobs supported, and waste diverted
                from landfills.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Partners</h3>
              <p className="mt-3 text-sm text-slate-600">
                Schools, nonprofits, and civic partners help us deliver devices and digital support
                where it is needed most.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Transparency</h3>
              <p className="mt-3 text-sm text-slate-600">
                We share program updates and welcome community input to guide future initiatives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-white">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold">Join the effort</h2>
                <p className="mt-3 text-slate-200">
                  Whether you are donating devices, volunteering, or sharing resources, your support
                  helps close the digital divide.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/recycle-tech"
                  className="rounded-md bg-white px-4 py-2 font-medium text-slate-900 shadow-md shadow-black/20 transition hover:bg-slate-100"
                >
                  Recycle tech with us
                </Link>
                <Link
                  href="/donate"
                  className="rounded-md border border-white/40 px-4 py-2 text-white transition hover:bg-white/10"
                >
                  Make a donation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
