import type { Doctor } from "@/types/doctor.types";

type DoctorProfileCardProps = {
  doctor: Doctor;
};

export function DoctorProfileCard({ doctor }: DoctorProfileCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-semibold text-sky-700">{doctor.specialty}</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">{doctor.name}</h1>
      <p className="text-sm text-slate-600">{doctor.title}</p>
      <p className="mt-3 text-sm text-slate-700">{doctor.bio}</p>
      <p className="mt-3 text-sm text-slate-600">Available: {doctor.availableDays.join(", ")}</p>
    </article>
  );
}
