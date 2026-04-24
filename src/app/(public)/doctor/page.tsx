import Link from "next/link";
import {
  ArrowRight,
  CalendarPlus,
  Clock3,
  HeartPulse,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { getDoctors } from "@/services/doctor.service";
import { ROUTES } from "@/constants/routes";

const DOCTOR_STATS = [
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
  {
    label: "OPD",
    value: "Daily",
  },
];

const CARE_POINTS = [
  {
    title: "Personal Consultation",
    description:
      "One-to-one consultation with clear explanation and patient-friendly guidance.",
    Icon: Stethoscope,
  },
  {
    title: "Safe Treatment",
    description:
      "Evidence-based medicine advice, proper diagnosis, and follow-up care.",
    Icon: ShieldCheck,
  },
  {
    title: "Heart & Chronic Care",
    description:
      "Support for blood pressure, diabetes, cardiac risk, and long-term health issues.",
    Icon: HeartPulse,
  },
];

export default async function DoctorPage() {
  const doctors = await getDoctors();
  const primaryDoctor = doctors[0];

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/45 to-cyan-50/50 py-12 sm:py-14 md:py-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

        <Container className="relative">
          {/* Top Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
              <UserRound className="h-4 w-4" />
              Doctor Profile
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Trusted care from one dedicated doctor
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              View doctor profile, chamber schedule, consultation details, and
              book your appointment from one clean and professional platform.
            </p>
          </div>

          {/* Main Doctor Section */}
          <div className="mt-9 overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_30px_90px_-52px_rgba(15,23,42,0.55)] backdrop-blur-2xl md:mt-12">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Left Profile */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-5 text-white sm:p-7 md:p-8">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

                <div className="relative">
                  {primaryDoctor ? (
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl sm:p-4">
                      <DoctorCard doctor={primaryDoctor} />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left lg:flex-col lg:items-start">
                      <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
                        <Stethoscope className="h-10 w-10 text-sky-200" />
                      </div>

                      <div className="mt-5 sm:ml-5 sm:mt-0 lg:ml-0 lg:mt-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-sky-100">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          Available for consultation
                        </div>

                        <p className="mt-4 text-sm font-semibold text-sky-200">
                          General Physician
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          Dr. Sarah Ahmed
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          MBBS, FCPS Medicine
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                          Personalized consultation, proper diagnosis guidance,
                          follow-up care, and clear treatment planning for every
                          patient.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {DOCTOR_STATS.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                      >
                        <p className="text-xs font-medium text-slate-300">
                          {item.label}
                        </p>
                        <p className="mt-1 text-lg font-bold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Details */}
              <div className="bg-white p-5 sm:p-7 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                      Doctor Overview
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      Complete care in one trusted chamber
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      Patients can check doctor profile, chamber time, service
                      details, and book appointments from one modern platform.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Open
                  </div>
                </div>

                {/* Care Points */}
                <div className="mt-6 grid gap-3">
                  {CARE_POINTS.map((item) => {
                    const Icon = item.Icon;

                    return (
                      <Link
                        key={item.title}
                        href={ROUTES.services}
                        className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/70 hover:shadow-[0_18px_45px_-32px_rgba(14,165,233,0.55)] active:scale-[0.98]"
                      >
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-sky-700 shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-slate-950 sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-700" />
                      </Link>
                    );
                  })}
                </div>

                {/* Schedule */}
                <div className="mt-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
                        <Clock3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Today&apos;s OPD
                        </p>
                        <p className="text-sm font-bold text-slate-950">
                          6PM - 10PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
                        <PhoneCall className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Hotline
                        </p>
                        <p className="text-sm font-bold text-slate-950">
                          +880 1XXX
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Chamber Location
                      </p>
                      <p className="text-sm font-bold text-slate-950">
                        Rangpur, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link
                    href={ROUTES.appointment}
                    className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-3 text-xs font-bold text-white shadow-[0_18px_34px_-18px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] sm:h-12 sm:text-sm"
                  >
                    <span className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2">
                      <CalendarPlus className="h-4 w-4" />
                      Book Now
                    </span>

                    <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
                  </Link>

                  <Link
                    href={ROUTES.services}
                    className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-bold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md active:scale-[0.97] sm:h-12 sm:gap-2 sm:text-sm"
                  >
                    Services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-sm backdrop-blur-xl sm:p-4">
              <Star className="mx-auto h-4 w-4 fill-sky-600 text-sky-700" />
              <p className="mt-2 text-xs font-bold text-slate-950 sm:text-sm">
                4.9 Rating
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-sm backdrop-blur-xl sm:p-4">
              <ShieldCheck className="mx-auto h-4 w-4 text-sky-700" />
              <p className="mt-2 text-xs font-bold text-slate-950 sm:text-sm">
                Safe Care
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-sm backdrop-blur-xl sm:p-4">
              <Clock3 className="mx-auto h-4 w-4 text-sky-700" />
              <p className="mt-2 text-xs font-bold text-slate-950 sm:text-sm">
                Daily OPD
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
