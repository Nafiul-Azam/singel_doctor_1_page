import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarPlus,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { ClinicService } from "@/types/service.types";
import { ROUTES } from "@/constants/routes";

type HomeServicesPreviewSectionProps = {
  services: ClinicService[];
};

const DOCTOR_HIGHLIGHTS = [
  {
    title: "General Consultation",
    description:
      "Regular checkup, fever, pain, infection, allergy, and common health problems.",
    Icon: Stethoscope,
  },
  {
    title: "Chronic Care",
    description:
      "Diabetes, blood pressure, asthma, long-term medicine and follow-up care.",
    Icon: HeartPulse,
  },
  {
    title: "Online Consultation",
    description:
      "Easy remote consultation support for patients who cannot visit chamber.",
    Icon: Video,
  },
];

const CORE_TREATMENTS = [
  {
    title: "General Checkup",
    description:
      "Regular health checkup, fever, cough, weakness, pain, infection and common illness care.",
    Icon: Stethoscope,
  },
  {
    title: "Cardiac Care",
    description:
      "Blood pressure, chest discomfort, heart health screening and cardiac risk guidance.",
    Icon: HeartPulse,
  },
  {
    title: "Follow-up Care",
    description:
      "Review previous prescription, reports, medicine plan and treatment progress.",
    Icon: Activity,
  },
  {
    title: "Medicine Advice",
    description:
      "Safe medicine guidance, dosage instructions and proper treatment support.",
    Icon: ShieldCheck,
  },
];

export function HomeServicesPreviewSection({
  services,
}: HomeServicesPreviewSectionProps) {
  const serviceCount = services.length;

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4" />
            Single Doctor Services
          </div>

          <SectionHeader
            title="Focused medical care for every patient"
            subtitle="A clean and premium service section for a single doctor clinic website. Patients can quickly understand what care they can get and book an appointment."
          />
        </div>

        {/* Top Doctor Highlights */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTOR_HIGHLIGHTS.map((item) => {
            const Icon = item.Icon;

            return (
              <Link
                href={ROUTES.services}
                key={item.title}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/60 p-5 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_28px_60px_-34px_rgba(14,165,233,0.55)] active:scale-[0.98]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-300/20 blur-2xl transition-all duration-300 group-hover:bg-sky-300/35" />

                <div className="relative flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Core Treatments */}
        <div className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/70 p-3 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:p-4 md:mt-12">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-50 via-white to-sky-50/50 p-4 sm:p-5 md:p-7">
            <div className="mb-6 flex flex-col gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-sm">
                  Core Treatments
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Services patients usually need
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Clean and organized treatment cards for a single doctor
                  clinic.
                </p>
              </div>

              <Link
                href={ROUTES.services}
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md active:scale-[0.97]"
              >
                View All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4">
              {CORE_TREATMENTS.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <Link
                    href={ROUTES.services}
                    key={item.title}
                    className="group relative block overflow-hidden rounded-2xl border border-white/80 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_50px_-34px_rgba(14,165,233,0.58)] active:scale-[0.98] sm:rounded-3xl sm:p-5"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-200/25 blur-2xl transition-all duration-300 group-hover:bg-sky-300/35" />

                    <div className="relative flex h-full flex-col">
                      <div className="mb-3 flex items-start justify-between gap-2 sm:mb-5 sm:gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-slate-950 group-hover:text-white sm:h-12 sm:w-12">
                          <Icon
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            strokeWidth={1.9}
                          />
                        </div>

                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[0.65rem] font-bold text-slate-500 sm:px-3 sm:text-xs">
                          0{index + 1}
                        </span>
                      </div>

                      <h4 className="text-[0.95rem] font-bold leading-tight tracking-tight text-slate-950 sm:text-lg">
                        {item.title}
                      </h4>

                      <p className="mt-2 flex-1 text-[0.76rem] leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 sm:mt-5 sm:pt-4">
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-sky-700 sm:text-xs">
                          Details
                        </span>

                        <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:translate-x-1 sm:h-8 sm:w-8">
                          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {serviceCount > 0 ? (
              <p className="mt-4 text-center text-xs font-medium text-slate-500">
                {serviceCount} service{serviceCount > 1 ? "s" : ""} ready to
                connect with dynamic data.
              </p>
            ) : null}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-[2rem] border border-sky-100 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 p-5 text-white shadow-[0_30px_80px_-42px_rgba(15,23,42,0.8)] sm:p-6 md:mt-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-sky-200">
                Need doctor consultation?
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Explore doctor services before booking
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                See available treatments, consultation options, chamber support,
                and online care details.
              </p>
            </div>

            <Link
              href={ROUTES.services}
              className="group relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                View Services
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-sky-200/80 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
