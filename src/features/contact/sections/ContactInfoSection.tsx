import { Container } from "@/components/layout/Container";
import { EMERGENCY_INFO } from "@/constants/emergency";

export function ContactInfoSection() {
  return (
    <section className="py-8">
      <Container className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-900">Hotline</h3>
          <p className="mt-2 text-sm text-slate-600">
            {EMERGENCY_INFO.hotline}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-900">Address</h3>
          <p className="mt-2 text-sm text-slate-600">
            {EMERGENCY_INFO.address}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-900">Email</h3>
          <p className="mt-2 text-sm text-slate-600">
            hello@carepoint-clinic.com
          </p>
        </div>
      </Container>
    </section>
  );
}
