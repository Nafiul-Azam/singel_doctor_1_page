import { PageBanner } from "@/components/shared/PageBanner";
import { ConsultationPlansSection } from "@/features/online-consultation/sections/ConsultationPlansSection";
import { ConsultationStepsSection } from "@/features/online-consultation/sections/ConsultationStepsSection";

export default function OnlineConsultationPage() {
  return (
    <>
      <PageBanner
        title="Online Consultation"
        description="A scalable consultation page ready for dynamic plans, pricing, and slots from backend."
      />
      <ConsultationPlansSection />
      <ConsultationStepsSection />
    </>
  );
}
