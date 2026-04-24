import { Container } from "@/components/layout/Container";
import { AppointmentForm } from "@/features/appointment/components/AppointmentForm";
import type { Doctor } from "@/types/doctor.types";
import type { AppointmentTimeSlot } from "@/types/appointment.types";

type AppointmentFormSectionProps = {
  doctors: Doctor[];
  slots: AppointmentTimeSlot[];
};

export function AppointmentFormSection({
  doctors,
  slots,
}: AppointmentFormSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <AppointmentForm doctors={doctors} slots={slots} />
      </Container>
    </section>
  );
}
