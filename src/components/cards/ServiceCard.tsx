import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import type { ClinicService } from "@/types/service.types";

type ServiceCardProps = {
  service: ClinicService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{service.icon}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.shortDescription}</p>
      <Link href={`${ROUTES.services}/${service.slug}`} className="mt-4 inline-flex text-sm font-medium text-sky-700">
        Learn more
      </Link>
    </article>
  );
}
