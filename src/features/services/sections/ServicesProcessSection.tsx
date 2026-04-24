import { Container } from "@/components/layout/Container";

export function ServicesProcessSection() {
  return (
    <section className="py-8">
      <Container className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">How We Work</h3>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-600">
          <li>Book appointment or walk-in registration</li>
          <li>Initial assessment and required tests</li>
          <li>Consultation, treatment plan, and follow-up</li>
        </ol>
      </Container>
    </section>
  );
}
