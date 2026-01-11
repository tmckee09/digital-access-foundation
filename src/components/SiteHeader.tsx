import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const nav = [
  { href: "/get-devices", label: "Get Devices" },
  { href: "/internet", label: "Internet" },
  { href: "/recycle-tech", label: "Recycle Tech" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/about", label: "About" },
  { href: "/kansas-city", label: "Kansas City" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-[#f6f5f2]">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-transparent.jpeg"
              alt="Digital Access Foundation"
              width={40}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <div className="leading-tight">
              <div className="font-semibold">Digital Access Foundation</div>
              <div className="text-xs text-slate-600">Kansas City, MO</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm text-slate-700 hover:text-slate-950"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/eligibility"
              className="hidden rounded-md border px-3 py-2 text-sm hover:bg-slate-50 sm:inline-block"
            >
              Check Eligibility
            </Link>
            <Link
              href="/donate"
              className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
            >
              Donate
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
