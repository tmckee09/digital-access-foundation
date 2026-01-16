import Container from "./Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#083d56] text-slate-200 border-t border-white/10">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold text-white">
              Digital Access Foundation
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Closing the digital divide through refurbished technology, connectivity
              options, and responsible e-waste services.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li>Email: placeholder@digitalaccessfoundation.com (placeholder)</li>
              <li>Phone: (000) 000-0000 (placeholder)</li>
              <li>Address: Kansas City, MO (placeholder)</li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-white">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link className="text-slate-300 hover:text-white transition" href="/eligibility">
                  Eligibility
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white transition" href="/recycle-tech">
                  Recycle Tech
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white transition" href="/coming-soon">
                  Kansas City
                </Link>
              </li>
              <li>
                <Link className="text-slate-300 hover:text-white transition" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} Digital Access Foundation. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
