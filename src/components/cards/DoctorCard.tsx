import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import type { Doctor } from "@/types/doctor.types";

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="group rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg">
      <div className="space-y-3">
        {/* Specialty Badge */}
        <div className="inline-flex rounded-full bg-sky-100 px-3 py-1">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {doctor.specialty}
          </p>
        </div>

        {/* Name & Title */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-sky-600">
            {doctor.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-600">
            {doctor.title}
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-2 border-t border-slate-200 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-600">
              Experience
            </span>
            <span className="inline-flex rounded-lg bg-sky-50 px-2 py-1 text-xs font-bold text-sky-700">
              {doctor.experienceYears} years
            </span>
          </div>
        </div>

        {/* CTA Link */}
        <Link
          href={`${ROUTES.doctor}/${doctor.slug}`}
          className="inline-flex gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-700 hover:gap-3 group-hover:shadow-md"
        >
          View Profile
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
