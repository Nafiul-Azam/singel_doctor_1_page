import { Container } from "@/components/layout/Container";
import type { AppointmentTimeSlot } from "@/types/appointment.types";

type ScheduleTableSectionProps = {
  slots: AppointmentTimeSlot[];
};

export function ScheduleTableSection({ slots }: ScheduleTableSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Doctor Schedule (Sample)
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {slots.map((slot) => (
              <li
                key={slot.id}
                className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
              >
                {slot.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
