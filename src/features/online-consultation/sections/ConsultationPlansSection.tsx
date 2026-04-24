import { Container } from "@/components/layout/Container";

export function ConsultationPlansSection() {
  return (
    <section className="py-8">
      <Container className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">
            Quick Follow-up
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            10 minute follow-up consultation for previous patients.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">
            Standard Consult
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Comprehensive 20 minute online consultation with reports review.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">
            Priority Care
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Priority booking for urgent online medical guidance.
          </p>
        </article>
      </Container>
    </section>
  );
}
