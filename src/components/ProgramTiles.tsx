import Link from "next/link";
import Container from "./Container";

const tiles = [
  {
    title: "Get a device",
    desc: "Refurbished laptops/desktops for eligible households and nonprofits.",
    href: "/coming-soon",
  },
  {
    title: "Internet options",
    desc: "Affordable connectivity pathways and partner programs.",
    href: "/coming-soon",
  },
  {
    title: "Recycle tech",
    desc: "Secure e-waste pickup and data sanitization pathways.",
    href: "/recycle-tech",
  },
  {
    title: "Eligibility",
    desc: "See the documents and income guidelines you’ll need.",
    href: "/eligibility",
  },
];

export default function ProgramTiles() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl bg-[#0f4c64] p-6 text-white
           shadow-lg ring-1 ring-white/15
           transition hover:-translate-y-0.5 hover:shadow-2xl hover:bg-[#115a75]"
            >
              <div className="font-semibold text-white">{t.title}</div>
              <div className="mt-2 text-sm text-slate-200">{t.desc}</div>
              <div className="mt-4 text-sm font-medium text-teal-200 group-hover:text-teal-100">Learn more →</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
