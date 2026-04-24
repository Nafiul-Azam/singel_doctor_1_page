import { Container } from "@/components/layout/Container";

export function ContactMapSection() {
  return (
    <section className="pb-12">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Map</h3>
          <p className="mt-2 text-sm text-slate-600">
            Replace this placeholder with embedded Google Map or map provider
            widget.
          </p>
        </div>
      </Container>
    </section>
  );
}
