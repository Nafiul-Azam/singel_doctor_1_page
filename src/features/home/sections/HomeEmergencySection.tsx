import { Container } from "@/components/layout/Container";
import { EMERGENCY_INFO } from "@/constants/emergency";

export function HomeEmergencySection() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-700">Emergency Support</p>
          <h3 className="mt-2 text-2xl font-semibold text-red-900">Hotline: {EMERGENCY_INFO.hotline}</h3>
          <p className="mt-2 text-sm text-red-800">Ambulance: {EMERGENCY_INFO.ambulance}</p>
        </div>
      </Container>
    </section>
  );
}
