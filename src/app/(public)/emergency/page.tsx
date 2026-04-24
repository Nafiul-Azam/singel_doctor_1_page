import { PageBanner } from "@/components/shared/PageBanner";
import { EmergencyHotlineSection } from "@/features/emergency/sections/EmergencyHotlineSection";

export default function EmergencyPage() {
  return (
    <>
      <PageBanner
        title="Emergency and Hotline"
        description="Quick access to urgent support numbers and chamber location."
      />
      <EmergencyHotlineSection />
    </>
  );
}
