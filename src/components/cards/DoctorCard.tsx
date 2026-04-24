import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import type { Doctor } from "@/types/doctor.types";

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-sky-700">{doctor.specialty}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{doctor.name}</h3>
      <p className="text-sm text-slate-600">{doctor.title}</p>
      <p className="mt-2 text-sm text-slate-500">Experience: {doctor.experienceYears} years</p>
      <Link
        href={`${ROUTES.doctor}/${doctor.slug}`}
        className="mt-4 inline-flex text-sm font-medium text-sky-700 hover:text-sky-800"
      >
        View profile
      </Link>
    </article>
  );
}
