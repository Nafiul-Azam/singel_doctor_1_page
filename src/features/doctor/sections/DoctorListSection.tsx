import { DoctorCard } from "@/components/cards/DoctorCard";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Doctor } from "@/types/doctor.types";

type DoctorListSectionProps = {
  doctors: Doctor[];
};

export function DoctorListSection({ doctors }: DoctorListSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <SectionHeader title="Our Doctors" subtitle="Modular doctor listing ready for API, filters, and pagination." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
