import Link from "next/link";
import { PageBanner } from "@/components/shared/PageBanner";
import { getClinicServices } from "@/services/services.service";
import { ROUTES } from "@/constants/routes";
import {
  Activity,
  ArrowRight,
  CalendarPlus,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

type ClinicService = Awaited<ReturnType<typeof getClinicServices>>[number];

const fallbackServices = [
  {
    title: "General Consultation",
    description:
      "Personal consultation for common health concerns, fever, pain, weakness, infection, and routine medical advice.",
  },
  {
    title: "Follow-up Care",
    description:
      "Organized follow-up visit to review progress, adjust medicine, and guide the next treatment step.",
  },
  {
    title: "Prescription Review",
    description:
      "Clear medicine guidance, dosage explanation, safety check, and patient-friendly treatment instruction.",
  },
  {
    title: "Preventive Health Advice",
    description:
      "Lifestyle, diet, routine checkup, and early risk prevention guidance for long-term better health.",
  },
];

const serviceIcons = [
  Stethoscope,
  HeartPulse,
  ClipboardCheck,
  ShieldCheck,
  Activity,
  UserRound,
];

const careSteps = [
  {
    title: "Book Appointment",
    text: "Choose your preferred visit time and confirm your consultation.",
  },
  {
    title: "Doctor Consultation",
    text: "Discuss your health concern directly with the doctor in a calm environment.",
  },
  {
    title: "Treatment Plan",
    text: "Receive clear prescription, guidance, and follow-up direction.",
  },
];

function getTextValue(
  item: ClinicService | (typeof fallbackServices)[number],
  keys: string[],
  fallback: string,
) {
  const record = item as Record<string, unknown>;

  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  return fallback;
}

export default async function ServicesPage() {
  const services = await getClinicServices();

  const serviceList =
    services && services.length > 0 ? services : fallbackServices;

  return (
    <main className="overflow-hidden bg-[#f7fafc] pb-24 lg:pb-16">
      {/* Hero Intro */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Single Doctor Care
              </div>

              <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-5xl">
                Focused medical services with personal attention.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Get ethical, organized, and patient-friendly healthcare from one
                trusted doctor. Every service is designed to make consultation
                simple, clear, and comfortable.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={ROUTES.appointment}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_18px_38px_-24px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]"
                >
                  <CalendarPlus className="h-4 w-4" />
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

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-emerald-200/45 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-sky-200/45 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/75 bg-white/70 p-4 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.6)] backdrop-blur-xl sm:p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] bg-slate-50/90 p-4">
                    <Stethoscope className="h-6 w-6 text-emerald-700" />
                    <p className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950">
                      {serviceList.length}+
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      Clinic Services
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] bg-slate-50/90 p-4">
                    <Clock3 className="h-6 w-6 text-emerald-700" />
                    <p className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950">
                      30m
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      Avg. Consultation
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] bg-slate-50/90 p-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-700" />
                    <p className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950">
                      1:1
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      Doctor Care
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      All services are handled with clear explanation, ethical
                      treatment, and patient-friendly follow-up guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Services
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Care options for everyday health needs.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Choose the right service and book a consultation with the doctor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              const title = getTextValue(
                service,
                ["title", "name", "serviceName"],
                `Service ${index + 1}`,
              );

              const description = getTextValue(
                service,
                ["description", "shortDescription", "details", "summary"],
                "Professional medical consultation and patient-focused treatment guidance.",
              );

              return (
                <article
                  key={`${title}-${index}`}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/75 bg-white/75 p-5 shadow-[0_20px_55px_-44px_rgba(15,23,42,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-46px_rgba(15,23,42,0.65)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.18)_45%,rgba(16,185,129,0.08))] opacity-70" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full bg-slate-50 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                      {description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        Available
                      </span>

                      <Link
                        href={ROUTES.appointment}
                        className="inline-flex items-center gap-1 text-sm font-black text-slate-950 transition group-hover:gap-2"
                      >
                        Book
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/75 bg-white/70 p-5 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                <ClipboardCheck className="h-3.5 w-3.5" />
                Simple Process
              </div>

              <h2 className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Easy consultation flow for better patient experience.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                From appointment booking to treatment guidance, the full process
                is designed to be clear, fast, and comfortable.
              </p>
            </div>

            <div className="grid gap-3">
              {careSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-[1.35rem] border border-slate-100 bg-slate-50/80 p-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.85)] sm:p-7 lg:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                Need doctor consultation?
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                Book your visit with Dr. Sarah Ahmed.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Get personal, clear, and reliable medical guidance from one
                trusted doctor.
              </p>
            </div>

            <Link
              href={ROUTES.appointment}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <CalendarPlus className="h-4 w-4" />
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
