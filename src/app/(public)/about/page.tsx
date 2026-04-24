import Link from "next/link";
import { PageBanner } from "@/components/shared/PageBanner";
import { ROUTES } from "@/constants/routes";
import {
  Award,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartPulse,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "12+" },
  { label: "Happy Patients", value: "8k+" },
  { label: "Patient Rating", value: "4.9" },
];

const highlights = [
  {
    icon: HeartPulse,
    title: "Patient-first care",
    text: "Every consultation is focused on comfort, clarity, and practical treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical treatment",
    text: "Clear advice, honest diagnosis, and no unnecessary pressure.",
  },
  {
    icon: Clock3,
    title: "Time-friendly visits",
    text: "Organized schedule, smooth appointment flow, and better clinic experience.",
  },
];

const values = [
  "Personalized care plan for every patient",
  "Clear explanation of diagnosis and medicine",
  "Follow-up friendly treatment approach",
  "Modern, clean, and comfortable clinic environment",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7fafc]">
      <PageBanner
        title="About Dr. Sarah Ahmed"
        description="Personal, ethical, and patient-focused healthcare from one trusted doctor. Learn about the doctor, clinic mission, values, and care approach."
      />

      {/* Doctor Intro */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left Doctor Card */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/45 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-44 w-44 rounded-full bg-sky-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-5 pt-6">
                <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-700 backdrop-blur-xl">
                  Available
                </div>

                <div className="mx-auto grid h-56 w-full max-w-[270px] place-items-end sm:h-72">
                  <div className="relative h-52 w-52 rounded-full bg-gradient-to-br from-emerald-200 via-white to-sky-200 shadow-inner sm:h-64 sm:w-64">
                    <div className="absolute inset-5 rounded-full bg-white/65 backdrop-blur-xl" />
                    <div className="absolute inset-0 grid place-items-center">
                      <Stethoscope
                        className="h-20 w-20 text-emerald-700/80 sm:h-24 sm:w-24"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative -mt-3 rounded-[1.35rem] border border-white/75 bg-white/75 p-4 text-center shadow-[0_16px_40px_-32px_rgba(15,23,42,0.55)] backdrop-blur-xl">
                  <h2 className="text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">
                    Dr. Sarah Ahmed
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    Family Medicine & Primary Care
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-slate-50/80 px-2 py-3"
                      >
                        <p className="text-lg font-black tracking-[-0.04em] text-slate-950">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-[0.62rem] font-bold leading-tight text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Single Doctor Care
            </div>

            <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-5xl">
              Modern healthcare with a personal doctor relationship.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Dr. Sarah Ahmed provides patient-focused consultation with clear
              communication, ethical treatment, and a calm clinic experience.
              The goal is simple: every patient should understand their health,
              treatment plan, and next steps with confidence.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/75 bg-white/75 p-4 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.5)] backdrop-blur-xl"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-3 text-sm font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ROUTES.appointment}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_18px_38px_-24px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]"
              >
                <CalendarCheck2 className="h-4 w-4" />
                Book Appointment
              </Link>

              <Link
                href={ROUTES.contact}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-300 active:scale-[0.98]"
              >
                <PhoneCall className="h-4 w-4" />
                Contact Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[1.8rem] border border-white/75 bg-white/75 p-5 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                <Award className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Clinic Mission
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                To make quality healthcare easier, clearer, and more personal
                for every patient through ethical consultation, better
                follow-up, and a trusted doctor-patient relationship.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/75 bg-white/75 p-5 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] backdrop-blur-xl">
                <GraduationCap className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-lg font-black text-slate-950">
                  Experience & Knowledge
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Practical clinical experience with modern treatment approach,
                  clear diagnosis, and patient education.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/75 bg-white/75 p-5 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] backdrop-blur-xl">
                <UsersRound className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-lg font-black text-slate-950">
                  Friendly Care
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Patients get enough time to explain their problems and receive
                  treatment guidance in a simple way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Care Approach */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/75 bg-white/70 p-5 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Care Values
              </div>

              <h2 className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Treatment that feels clear, calm, and trustworthy.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                The clinic is designed for patients who want a reliable doctor,
                organized consultation, and a comfortable experience without
                confusion.
              </p>
            </div>

            <div className="grid gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-slate-50/75 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-slate-700" />
              <div>
                <p className="text-xs font-bold text-slate-500">
                  Clinic Location
                </p>
                <p className="text-sm font-black text-slate-950">
                  Main Chamber, City Medical Area
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4">
              <Clock3 className="h-5 w-5 shrink-0 text-slate-700" />
              <div>
                <p className="text-xs font-bold text-slate-500">
                  Consultation Time
                </p>
                <p className="text-sm font-black text-slate-950">
                  Sat - Thu, 5:00 PM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
