import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0b4f6c] to-[#083d56] py-20 border-b border-white/10">
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl">
  Computers and internet access shouldn’t be a luxury.
</h1>

<p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow-sm">
  We provide refurbished devices, connectivity pathways, and secure e-waste services
  to help Kansas City households and nonprofits get connected.
</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
  href="/eligibility"
  className="rounded-md bg-teal-500 px-4 py-2 text-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition hover:bg-teal-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/70"
>
  Check Eligibility
</Link>

<Link
  href="/coming-soon"
  className="rounded-md bg-white/10 px-4 py-2 text-white shadow-md shadow-black/20 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/70"
>
  Get a Device
</Link>

<Link
  href="/recycle-tech"
  className="rounded-md bg-white/10 px-4 py-2 text-white shadow-md shadow-black/20 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/70"
>
  Donate / Recycle Tech
</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
