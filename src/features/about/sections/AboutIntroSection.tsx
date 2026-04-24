import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarPlus,
  Clock3,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

const INTRO_POINTS = [
  {
    title: "Personal Consultation",
    description: "One-to-one doctor care with clear explanation and guidance.",
    Icon: Stethoscope,
  },
  {
    title: "Safe Treatment",
    description: "Evidence-based advice, safe medicine, and proper follow-up.",
    Icon: ShieldCheck,
  },
  {
    title: "Easy Appointment",
    description: "Simple appointment flow with chamber timing information.",
    Icon: Clock3,
  },
];

const DOCTOR_FACTS = [
  {
    label: "Experience",
    value: "10+ Years",
  },
  {
    label: "Patients",
    value: "8k+",
  },
  {
    label: "Rating",
    value: "4.9/5",
  },
];

export function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/45 to-cyan-50/50 py-12 sm:py-14 md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
              <BadgeCheck className="h-4 w-4" />
              Who We Are
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              A trusted single doctor clinic focused on{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                personal patient care
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8 lg:mx-0">
              CarePoint Clinic is built around one dedicated doctor, clear
              communication, safe treatment, and a smooth appointment experience
              for every patient.
            </p>

            {/* Buttons */}
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:justify-start">
              <Link
                href={ROUTES.appointment}
                className="group relative inline-flex h-11 min-w-0 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-3 text-xs font-bold text-white shadow-[0_18px_34px_-18px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-20px_rgba(15,23,42,0.95)] active:scale-[0.97] sm:h-12 sm:px-6 sm:text-sm"
              >
                <span className="relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
                  <CalendarPlus className="h-4 w-4" />
                  Book Now
                </span>

                <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
              </Link>

              <Link
                href={ROUTES.doctor}
                className="group inline-flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md active:scale-[0.97] sm:h-12 sm:px-6 sm:text-sm"
              >
                <span className="whitespace-nowrap">Profile</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="mx-auto w-full max-w-[520px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-gradient-to-br from-[#020617] via-[#031026] to-[#07324a] p-5 text-white shadow-[0_30px_90px_-52px_rgba(2,6,23,0.9)] sm:p-7 md:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-sky-100 backdrop-blur-xl">
                  <BadgeCheck className="h-4 w-4" />
                  About The Doctor
                </div>

                <div className="mt-7 flex flex-col items-start">
                  <div className="grid h-24 w-24 place-items-center rounded-[1.75rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
                    <Stethoscope
                      className="h-10 w-10 text-sky-200"
                      strokeWidth={2}
                    />
                  </div>

                  <p className="mt-7 text-sm font-bold text-sky-200">
                    General Physician
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Dr. Sarah Ahmed
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    MBBS, FCPS Medicine
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-8 text-slate-200">
                    Dedicated to providing personal, safe, and clear medical
                    care for every patient. The goal is to make consultation
                    simple, trustworthy, and comfortable.
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-3">
                  {DOCTOR_FACTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
                    >
                      <p className="text-[0.66rem] font-medium leading-4 text-slate-300 sm:text-xs">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm font-extrabold text-white sm:text-xl">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={ROUTES.appointment}
                  className="group relative mt-7 inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] sm:h-14"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <CalendarPlus className="h-4 w-4" />
                    Book Appointment
                  </span>

                  <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-sky-200/80 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Points */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INTRO_POINTS.map((item) => {
            const Icon = item.Icon;

            return (
              <Link
                href={ROUTES.services}
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_22px_55px_-36px_rgba(14,165,233,0.65)] active:scale-[0.98] sm:p-5"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-200/25 blur-2xl transition-all duration-300 group-hover:bg-sky-300/35" />

                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-700" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
