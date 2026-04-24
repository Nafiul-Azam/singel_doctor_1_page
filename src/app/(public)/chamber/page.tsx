import { PageBanner } from "@/components/shared/PageBanner";
import { ChamberLocationSection } from "@/features/chamber/sections/ChamberLocationSection";
import { getChamberInfo } from "@/services/chamber.service";

export default async function ChamberPage() {
  const chamber = await getChamberInfo();

  return (
    <>
      <PageBanner
        title="Chamber Information"
        description="Location and chamber details for in-person visits."
      />
      <ChamberLocationSection
        name={chamber.name}
        address={chamber.address}
        phone={chamber.phone}
      />
    </>
  );
}
