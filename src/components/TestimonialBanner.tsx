import Container from "./Container";

export default function TestimonialBanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold">Testimonial Banner Works</h2>
          <p className="mt-2 text-slate-600">
            If you can see this, the export is fixed.
          </p>
        </div>
      </Container>
    </section>
  );
}

