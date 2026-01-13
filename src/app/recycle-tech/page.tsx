import Container from "@/components/Container";
import Link from "next/link";

const acceptedItems = [
  "Laptops, desktops, and tablets (working or not)",
  "Monitors, keyboards, mice, and docks",
  "Networking gear, servers, and peripherals",
  "Cables, chargers, and power supplies",
  "Small office electronics and accessories",
];

const processSteps = [
  {
    title: "Schedule a pickup",
    detail:
      "Tell us what you have and where it is. We can coordinate drop-off or onsite pickup for businesses, schools, and community partners.",
  },
  {
    title: "Secure transport",
    detail:
      "We inventory and transport items in locked containers to our processing partners so nothing gets lost in transit.",
  },
  {
    title: "Data sanitization",
    detail:
      "All storage media is wiped or destroyed following NIST 800-88 guidance. Certificates are available on request.",
  },
  {
    title: "Refurbish or recycle",
    detail:
      "Working devices are refurbished for low-income households. End-of-life items are recycled through vetted e-waste vendors.",
  },
];

const impactPoints = [
  {
    title: "Environmental impact",
    detail:
      "Keep hazardous materials out of landfills and reduce the carbon footprint of new device production.",
  },
  {
    title: "Digital equity",
    detail:
      "Every refurbished device supports a student, job seeker, or neighbor who needs reliable technology.",
  },
  {
    title: "Community partnerships",
    detail:
      "We collaborate with schools, nonprofits, and local governments across Kansas City to expand access.",
  },
];

export default function RecycleTechPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 py-16 text-white">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Recycle Tech</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Responsible e-waste recycling with community impact
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Donate surplus technology and let us do the rest. We secure data, refurbish what we
                can, and recycle the rest through trusted partners.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-teal-500 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-teal-400"
              >
                Schedule a pickup
              </Link>
              <Link
                href="/donate"
                className="rounded-md border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Learn about donating
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">What we accept</h2>
              <p className="mt-3 text-slate-600">
                We take most small and medium-sized tech equipment. If you have something unusual,
                reach out and we will help you find the right pathway.
              </p>
              <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
                {acceptedItems.map((item) => (
                  <li key={item} className="rounded-lg border border-slate-200 bg-white p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Data security promise</h3>
              <p className="mt-3 text-slate-600">
                We treat every device like it holds sensitive data. Drives are wiped using certified
                software or destroyed when wiping is not possible.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="rounded-md bg-slate-50 p-3">
                  Certificate of destruction available for enterprise donors.
                </div>
                <div className="rounded-md bg-slate-50 p-3">Chain-of-custody logging for bulk collections.</div>
                <div className="rounded-md bg-slate-50 p-3">
                  Compliance aligned with NIST 800-88 standards.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">How the process works</h2>
              <p className="mt-3 text-slate-600">
                Our team handles the logistics so you can focus on your mission. From pickup to
                reporting, we keep it simple and transparent.
              </p>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-sm font-semibold text-teal-600">Step {index + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-white">
            <div className="grid gap-8 lg:grid-cols-3">
              {impactPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-3 text-sm text-slate-200">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-teal-600 py-12">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Ready to recycle your tech?</h2>
              <p className="mt-2 text-teal-50">
                Tell us what you have and we will coordinate pickup or drop-off options.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-white px-4 py-2 font-medium text-teal-700 shadow-md shadow-black/10 transition hover:bg-slate-100 hover:shadow-lg"
              >
                Start a recycling request
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-white/70 px-4 py-2 text-white transition hover:bg-white/10"
              >
                Learn about our mission
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
