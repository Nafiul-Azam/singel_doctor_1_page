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
    title: "সরাসরি ডাক্তার পরামর্শ",
    description:
      "জ্বর, ব্যথা, দুর্বলতা, ইনফেকশন, এলার্জি এবং সাধারণ সমস্যার জন্য সহজ consultation.",
    Icon: Stethoscope,
  },
  {
    title: "দীর্ঘমেয়াদি রোগের যত্ন",
    description:
      "ডায়াবেটিস, রক্তচাপ, অ্যাজমা এবং নিয়মিত follow-up care-এর জন্য support.",
    Icon: HeartPulse,
  },
  {
    title: "Online Consultation",
    description:
      "যারা chamber-এ আসতে পারেন না, তাদের জন্য সহজ remote consultation support.",
    Icon: Video,
  },
];

const CORE_TREATMENTS = [
  {
    title: "General Checkup",
    description:
      "জ্বর, কাশি, দুর্বলতা, ব্যথা এবং সাধারণ অসুস্থতার চিকিৎসা পরামর্শ।",
    Icon: Stethoscope,
  },
  {
    title: "Heart & Pressure Care",
    description:
      "রক্তচাপ, বুকের অস্বস্তি এবং heart health সম্পর্কে professional guidance.",
    Icon: HeartPulse,
  },
  {
    title: "Follow-up Care",
    description:
      "আগের prescription, report এবং treatment progress review করার সুবিধা।",
    Icon: Activity,
  },
  {
    title: "Safe Medicine Advice",
    description:
      "সঠিক ওষুধ, dosage instruction এবং নিরাপদ treatment plan support.",
    Icon: ShieldCheck,
  },
];

export function HomeServicesPreviewSection({
  services,
}: HomeServicesPreviewSectionProps) {
  const serviceCount = services.length;

  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-10 sm:py-12 md:py-20">
      {/* Premium animated background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(45,212,191,0.15),transparent_28%),radial-gradient(circle_at_72%_88%,rgba(16,185,129,0.11),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,249,255,0.80),rgba(236,254,255,0.86))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.065)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />

      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl motion-safe:animate-pulse" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/82 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
            <ShieldCheck className="h-4 w-4 motion-safe:animate-pulse" />
            Doctor Services
          </div>

          <SectionHeader
            title="রোগীদের জন্য সহজ ও নির্ভরযোগ্য চিকিৎসা সেবা"
            subtitle="রোগীরা যেন দ্রুত বুঝতে পারে কোন সেবা পাওয়া যাবে, কখন appointment নেওয়া যাবে এবং কীভাবে চিকিৎসা support পাওয়া যাবে।"
          />
        </div>

        {/* Top doctor highlights */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTOR_HIGHLIGHTS.map((item) => {
            const Icon = item.Icon;

            return (
              <Link
                href={ROUTES.services}
                key={item.title}
                className="group relative block overflow-hidden rounded-[1.65rem] border border-white/85 bg-white/72 p-5 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.58)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_32px_90px_-52px_rgba(14,165,233,0.58)] active:scale-[0.98]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-sky-300/18 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan-300/28" />
                <div className="pointer-events-none absolute -bottom-16 left-10 h-28 w-28 rounded-full bg-emerald-300/0 blur-2xl transition-all duration-700 group-hover:bg-emerald-300/18" />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="relative flex items-start gap-4">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-2xl bg-sky-400/0 transition-all duration-500 group-hover:bg-sky-400/20" />
                    <Icon
                      className="relative h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.9}
                    />
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

        {/* Core treatments */}
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/90 bg-white/62 p-3 shadow-[0_32px_100px_-62px_rgba(15,23,42,0.62)] backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_38px_115px_-64px_rgba(14,165,233,0.55)] sm:p-4 md:mt-12">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-white/68 p-4 backdrop-blur-xl sm:p-5 md:p-7">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-300/16 blur-3xl motion-safe:animate-pulse" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-300/16 blur-3xl motion-safe:animate-pulse" />

            <div className="relative mb-6 flex flex-col gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-sm">
                  Core Treatments
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  রোগীরা সাধারণত যেসব সেবা বেশি প্রয়োজন করেন
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  সহজ ভাষায় সাজানো service card, যাতে রোগী দ্রুত সিদ্ধান্ত নিতে
                  পারে।
                </p>
              </div>

              <Link
                href={ROUTES.services}
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-white/88 px-5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700 hover:shadow-[0_22px_55px_-35px_rgba(14,165,233,0.65)] active:scale-[0.97]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 transition-all duration-500 group-hover:h-44 group-hover:w-44" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  সব সেবা দেখুন
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>

            <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4">
              {CORE_TREATMENTS.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <Link
                    href={ROUTES.services}
                    key={item.title}
                    className="group relative block overflow-hidden rounded-2xl border border-white/85 bg-white/84 p-3 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_26px_65px_-40px_rgba(14,165,233,0.65)] active:scale-[0.98] sm:rounded-3xl sm:p-5"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-200/20 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-sky-300/35" />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-500 via-cyan-400 to-emerald-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full flex-col">
                      <div className="mb-3 flex items-start justify-between gap-2 sm:mb-5 sm:gap-4">
                        <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white sm:h-12 sm:w-12">
                          <span className="absolute inset-0 rounded-2xl bg-cyan-300/0 transition-all duration-500 group-hover:bg-cyan-300/15" />
                          <Icon
                            className="relative h-4 w-4 transition-transform duration-500 group-hover:scale-110 sm:h-5 sm:w-5"
                            strokeWidth={1.9}
                          />
                        </div>

                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[0.65rem] font-bold text-slate-500 ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-sky-50 group-hover:text-sky-700 sm:px-3 sm:text-xs">
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
                          বিস্তারিত
                        </span>

                        <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-sky-600 sm:h-8 sm:w-8">
                          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {serviceCount > 0 ? (
              <p className="relative mt-4 text-center text-xs font-medium text-slate-500">
                মোট {serviceCount}টি service dynamic data থেকে দেখানোর জন্য
                প্রস্তুত।
              </p>
            ) : null}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-sky-900/20 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 p-5 text-white shadow-[0_30px_85px_-42px_rgba(15,23,42,0.85)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_100px_-48px_rgba(14,165,233,0.65)] sm:p-6 md:mt-10">
          <div className="relative">
            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-sky-400/18 blur-3xl motion-safe:animate-pulse" />
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-cyan-400/18 blur-3xl motion-safe:animate-pulse" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-sky-200">
                  চিকিৎসা পরামর্শ প্রয়োজন?
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  Appointment নেওয়ার আগে সেবাগুলো দেখে নিন
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  chamber consultation, follow-up care এবং online support
                  সম্পর্কে সহজে জানুন।
                </p>
              </div>

              <Link
                href={ROUTES.services}
                className="group relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(14,165,233,0.8)] active:scale-[0.97]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 transition-all duration-500 group-hover:h-48 group-hover:w-48" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                  সেবা দেখুন
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
