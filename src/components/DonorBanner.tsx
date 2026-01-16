import Image from "next/image";
import Link from "next/link";

export default function DonorBanner() {
  return (
    <section className="w-full bg-[#083d56] border-y border-white/10">
      {/* Keep a consistent aspect ratio so overlays line up */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1536 / 380" }}>
        <Image
          src="/donation-banner-wide.png"
          alt="Donate your used computers to create opportunities for people in need."
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Clickable overlays aligned to the button art in the image */}
        {/* NOTE: These percentages are based on your screenshot and may need tiny nudges. */}
        <Link
          href="/recycle-here"
          aria-label="Donate Here"
          className="absolute"
          style={{
            left: "45%",
            top: "71%",
            width: "20%",
            height: "16%",
          }}
        />

        <Link
          href="/recycle-tech"
          aria-label="Learn More"
          className="absolute"
          style={{
            left: "68%",
            top: "71%",
            width: "20%",
            height: "16%",
          }}
        />
      </div>
    </section>
  );
}
