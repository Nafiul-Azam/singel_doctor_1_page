import { Container } from "@/components/layout/Container";
import { EMERGENCY_INFO } from "@/constants/emergency";

export function EmergencyHotlineSection() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
            Emergency / Hotline
          </p>
          <h2 className="mt-2 text-3xl font-bold text-red-900">
            {EMERGENCY_INFO.hotline}
          </h2>
          <p className="mt-2 text-sm text-red-800">
            Ambulance: {EMERGENCY_INFO.ambulance}
          </p>
          <p className="mt-2 text-sm text-red-800">
            Address: {EMERGENCY_INFO.address}
          </p>
        </div>
      </Container>
    </section>
  );
}
