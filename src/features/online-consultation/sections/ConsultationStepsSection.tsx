import { Container } from "@/components/layout/Container";

export function ConsultationStepsSection() {
  return (
    <section className="pb-12">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            How Online Consultation Works
          </h3>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            <li>Choose plan and preferred doctor</li>
            <li>Confirm time slot and make payment</li>
            <li>Join call and receive digital prescription</li>
          </ol>
        </div>
      </Container>
    </section>
  );
}
