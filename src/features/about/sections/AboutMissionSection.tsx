import Link from "next/link";
import {
  ArrowRight,
  CalendarPlus,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

const MISSION_POINTS = [
  "Accessible consultation",
  "Ethical treatment process",
  "Clear patient guidance",
];

const VISION_POINTS = [
  "Digital appointment flow",
  "Trusted doctor profile",
  "Long-term patient relationship",
];

export function AboutMissionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-20">
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Mission & Vision
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            A clear purpose behind every patient consultation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            This single doctor clinic is built to provide safe, ethical, and
            easy-to-access healthcare with a modern digital experience.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_30px_80px_-48px_rgba(14,165,233,0.55)] sm:p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/35 blur-3xl transition-all duration-300 group-hover:bg-sky-300/40" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl">
                  <HeartHandshake className="h-6 w-6" strokeWidth={1.9} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                    Mission
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    Ethical care for every family
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Deliver accessible, ethical, and high-quality healthcare for
                every family through clear communication, proper diagnosis, and
                safe treatment guidance.
              </p>

              <div className="mt-6 space-y-3">
                {MISSION_POINTS.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-sky-50 text-sky-700">
                      <ShieldCheck className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-5 text-white shadow-[0_30px_90px_-52px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-1 sm:p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-100 shadow-xl backdrop-blur-xl">
                  <Eye className="h-6 w-6" strokeWidth={1.9} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                    Vision
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    A trusted digital clinic experience
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Become a trusted single doctor clinic platform powered by
                efficient digital health services, appointment booking, and
                patient-friendly communication.
              </p>

              <div className="mt-6 space-y-3">
                {VISION_POINTS.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl"
                  >
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sky-200">
                      <Stethoscope className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <span className="text-sm font-semibold text-slate-100">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col gap-3 rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="text-sm font-bold text-slate-950">
              Want to visit the doctor?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Book an appointment and get proper consultation support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            <Link
              href={ROUTES.appointment}
              className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-4 text-xs font-bold text-white shadow-[0_18px_34px_-18px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] sm:px-5 sm:text-sm"
            >
              <span className="relative z-10 inline-flex items-center gap-1.5">
                <CalendarPlus className="h-4 w-4" />
                Book Now
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
            </Link>

            <Link
              href={ROUTES.doctor}
              className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md active:scale-[0.97] sm:px-5 sm:text-sm"
            >
              Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
