import { PageBanner } from "@/components/shared/PageBanner";
import { ScheduleTableSection } from "@/features/schedule/sections/ScheduleTableSection";
import { getDoctorSchedules } from "@/services/schedule.service";

export default async function SchedulePage() {
  const slots = await getDoctorSchedules();

  return (
    <>
      <PageBanner
        title="Doctor Schedule"
        description="Sample schedule table, ready for dynamic backend schedules."
      />
      <ScheduleTableSection slots={slots} />
    </>
  );
}
