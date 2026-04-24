import { CTASection } from "@/components/shared/CTASection";
import { ROUTES } from "@/constants/routes";

export function HomeAppointmentCTASection() {
  return (
    <CTASection
      title="Need a consultation today?"
      description="Use the appointment flow now. Later you can connect this same form to backend booking APIs without changing page structure."
      buttonLabel="Go to Appointment"
      buttonHref={ROUTES.appointment}
    />
  );
}
