import Link from "next/link";
import {
  ArrowRight,
  CalendarPlus,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 py-10 sm:py-14 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />

      <Container className="relative grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-10">
        {/* Left Content */}
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/75 px-3 py-1.5 text-[0.68rem] font-semibold text-sky-700 shadow-sm backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Trusted Single Doctor Healthcare
          </div>

          <h1 className="mt-4 text-[2.15rem] font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl">
            Personal healthcare with a{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              trusted doctor
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:mx-0 md:mt-5 md:text-lg md:leading-8">
            Book appointments, check chamber schedule, explore treatments, and
            connect with your doctor from one clean and modern clinic platform.
          </p>

          {/* Mobile: 2 buttons side by side */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:mt-8 md:justify-start">
            <Link
              href={ROUTES.appointment}
              className="group relative inline-flex h-11 min-w-0 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-3 text-[0.78rem] font-semibold text-white shadow-[0_18px_34px_-18px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_-20px_rgba(15,23,42,0.95)] active:scale-[0.97] sm:h-12 sm:px-6 sm:text-sm"
            >
              <span className="relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
                <CalendarPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Book
                <span className="hidden xs:inline">Appointment</span>
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
            </Link>

            <Link
              href={ROUTES.doctor}
              className="group inline-flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 text-[0.78rem] font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md active:scale-[0.97] sm:h-12 sm:gap-2 sm:px-6 sm:text-sm"
            >
              <span className="whitespace-nowrap">Meet Doctor</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
            </Link>
          </div>

          {/* Small Trust Stats */}
          <div className="mt-7 grid max-w-2xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl sm:p-4">
              <div className="flex flex-col items-center gap-1 text-sky-700 sm:flex-row sm:gap-2 md:items-start">
                <Star className="h-3.5 w-3.5 fill-sky-600 sm:h-4 sm:w-4" />
                <span className="text-[0.72rem] font-bold sm:text-sm">4.9</span>
              </div>
              <p className="mt-1 text-[0.65rem] leading-4 text-slate-500 sm:text-xs">
                Rating
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl sm:p-4">
              <div className="flex flex-col items-center gap-1 text-sky-700 sm:flex-row sm:gap-2 md:items-start">
                <Stethoscope className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-[0.72rem] font-bold sm:text-sm">10+</span>
              </div>
              <p className="mt-1 text-[0.65rem] leading-4 text-slate-500 sm:text-xs">
                Years
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl sm:p-4">
              <div className="flex flex-col items-center gap-1 text-sky-700 sm:flex-row sm:gap-2 md:items-start">
                <Clock3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-[0.72rem] font-bold sm:text-sm">
                  Daily
                </span>
              </div>
              <p className="mt-1 text-[0.65rem] leading-4 text-slate-500 sm:text-xs">
                OPD
              </p>
            </div>
          </div>
        </div>

        {/* Right Doctor Card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/60 p-3 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.55)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-4">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />

            {/* Doctor Identity */}
            <div className="relative rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-xl sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg sm:h-16 sm:w-16">
                  <Stethoscope
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-sky-700 sm:text-sm">
                    General Physician
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">
                    Dr. Sarah Ahmed
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    MBBS, FCPS Medicine
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                <div className="rounded-2xl bg-slate-50 p-3 sm:p-4">
                  <p className="text-[0.7rem] font-medium text-slate-500 sm:text-xs">
                    Experience
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-950 sm:text-lg">
                    10+ Years
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 sm:p-4">
                  <p className="text-[0.7rem] font-medium text-slate-500 sm:text-xs">
                    Patients
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-950 sm:text-lg">
                    8k+
                  </p>
                </div>
              </div>
            </div>

            {/* Today Schedule */}
            <div className="relative mt-3 rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-xl sm:mt-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Today&apos;s Chamber
                  </p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Available for consultation
                  </p>
                </div>

                <div className="rounded-full bg-emerald-50 px-3 py-1 text-[0.68rem] font-bold text-emerald-700 sm:text-xs">
                  Open
                </div>
              </div>

              <div className="mt-4 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 sm:text-sm">
                    <Clock3 className="h-4 w-4 text-sky-600" />
                    Evening OPD
                  </div>
                  <span className="text-xs font-bold text-slate-950 sm:text-sm">
                    6PM - 10PM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 sm:text-sm">
                    <PhoneCall className="h-4 w-4 text-sky-600" />
                    Hotline
                  </div>
                  <span className="text-xs font-bold text-slate-950 sm:text-sm">
                    +880 1XXX
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <Link
              href={ROUTES.appointment}
              className="group relative mt-3 inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-2xl bg-sky-600 text-xs font-bold text-white shadow-[0_18px_34px_-18px_rgba(2,132,199,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 active:scale-[0.98] sm:mt-4 sm:h-12 sm:text-sm"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                Get Appointment Today
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
