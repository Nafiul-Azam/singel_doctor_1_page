import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { getServiceBySlug } from "@/services/services.service";

type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        description={service.shortDescription}
      />
      <section className="py-10">
        <Container>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            Detailed service content can be managed from CMS or backend and
            mapped here.
          </div>
        </Container>
      </section>
    </>
  );
}
