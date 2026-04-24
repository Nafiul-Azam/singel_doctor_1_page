import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { DoctorProfileCard } from "@/features/doctor/components/DoctorProfileCard";
import { getDoctorBySlug } from "@/services/doctor.service";

type DoctorDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DoctorDetailsPage({
  params,
}: DoctorDetailsPageProps) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={doctor.name}
        description={`${doctor.title} - ${doctor.specialty}`}
      />
      <section className="py-10">
        <Container>
          <DoctorProfileCard doctor={doctor} />
        </Container>
      </section>
    </>
  );
}
