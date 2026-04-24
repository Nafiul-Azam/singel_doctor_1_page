import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { ClinicService } from "@/types/service.types";

type ServicesListSectionProps = {
  services: ClinicService[];
};

export function ServicesListSection({ services }: ServicesListSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <SectionHeader title="Clinic Services" subtitle="Designed as reusable card modules for easy expansion." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
