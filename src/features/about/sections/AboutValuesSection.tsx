import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarPlus,
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

const VALUES = [
  {
    title: "Compassionate Communication",
    description:
      "Every patient is listened to carefully with clear explanation, friendly behavior, and respectful guidance.",
    Icon: HeartHandshake,
  },
  {
    title: "Evidence-Based Treatment",
    description:
      "Treatment decisions are based on medical knowledge, proper diagnosis, reports, and patient condition.",
    Icon: ClipboardCheck,
  },
  {
    title: "Patient Safety First",
    description:
      "Safe medicine advice, transparent process, and proper follow-up care are always prioritized.",
    Icon: ShieldCheck,
  },
];

const DOCTOR_FACTS = [
  {
    label: "Experience",
    value: "10+ Years",
  },
  {
    label: "Patients Served",
    value: "8k+",
  },
  {
    label: "Patient Rating",
    value: "4.9/5",
  },
];

export function AboutValuesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/50 py-12 sm:py-14 md:py-20">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left About Doctor */}
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 text-white shadow-[0_30px_90px_-52px_rgba(15,23,42,0.72)]">
            <div className="relative p-5 sm:p-7 md:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-sky-100 backdrop-blur-xl">
                  <BadgeCheck className="h-4 w-4" />
                  About The Doctor
                </div>

                <div className="mt-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left lg:flex-col lg:items-start">
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
                    <Stethoscope className="h-10 w-10 text-sky-200" />
                  </div>

                  <div className="mt-5 sm:ml-5 sm:mt-0 lg:ml-0 lg:mt-6">
                    <p className="text-sm font-semibold text-sky-200">
                      General Physician
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Dr. Sarah Ahmed
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      MBBS, FCPS Medicine
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                      Dedicated to providing personal, safe, and clear medical
                      care for every patient. The goal is to make consultation
                      simple, trustworthy, and comfortable.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                  {DOCTOR_FACTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-xl sm:p-4"
                    >
                      <p className="text-[0.68rem] font-medium text-slate-300 sm:text-xs">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-white sm:text-lg">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={ROUTES.appointment}
                  className="group relative mt-7 inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
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

          {/* Right Core Values */}
          <div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
                <UsersRound className="h-4 w-4" />
                Core Values
              </div>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Care built on trust, clarity, and patient safety
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
                This clinic focuses on clear communication, proper diagnosis,
                safe treatment, and long-term patient trust.
              </p>
            </div>

            <div className="mt-7 grid gap-3">
              {VALUES.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_22px_55px_-36px_rgba(14,165,233,0.65)] sm:p-5"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-200/25 blur-2xl transition-all duration-300 group-hover:bg-sky-300/35" />

                    <div className="relative flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-bold text-slate-950 sm:text-lg">
                            {item.title}
                          </h4>

                          <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[0.65rem] font-bold text-slate-500">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href={ROUTES.doctor}
              className="group mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md active:scale-[0.97] sm:w-auto"
            >
              View Doctor Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
