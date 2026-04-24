import { getDoctors } from "@/services/doctor.service";
import { getAvailableSlots } from "@/services/appointment.service";
import { AppointmentHeroSection } from "@/features/appointment/sections/AppointmentHeroSection";
import { AppointmentFormSection } from "@/features/appointment/sections/AppointmentFormSection";
import { AppointmentInfoSection } from "@/features/appointment/sections/AppointmentInfoSection";

export default async function AppointmentPage() {
  const [doctors, slots] = await Promise.all([
    getDoctors(),
    getAvailableSlots(),
  ]);

  return (
    <>
      <AppointmentHeroSection />
      <AppointmentFormSection doctors={doctors} slots={slots} />
      <AppointmentInfoSection />
    </>
  );
}
