import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import type { ClinicService } from "@/types/service.types";

type ServiceCardProps = {
  service: ClinicService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg">
      <div className="space-y-4">
        {/* Icon */}
        <div className="inline-flex rounded-lg bg-sky-100 p-3 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-200">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-sky-600">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600">
          {service.shortDescription}
        </p>

        {/* CTA Link */}
        <Link
          href={`${ROUTES.services}/${service.slug}`}
          className="inline-flex gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-700 hover:gap-3"
        >
          Learn More
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
