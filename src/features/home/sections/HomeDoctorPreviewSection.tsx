import Image from "next/image";
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
import type { Doctor } from "@/types/doctor.types";
import { ROUTES } from "@/constants/routes";

type HomeDoctorPreviewSectionProps = {
  doctors: Doctor[];
};

const DOCTOR_STATS = [
  {
    label: "অভিজ্ঞতা",
    value: "10+ Years",
  },
  {
    label: "সেবা পেয়েছেন",
    value: "8k+ Patients",
  },
  {
    label: "রোগীর আস্থা",
    value: "4.9/5",
  },
  {
    label: "চেম্বার",
    value: "Daily OPD",
  },
];

const DOCTOR_POINTS = [
  {
    title: "বিশ্বস্ত চিকিৎসা পরামর্শ",
    description:
      "রোগীর সমস্যা মনোযোগ দিয়ে শুনে সহজ ভাষায় clear treatment guidance দেওয়া হয়।",
    Icon: ShieldCheck,
  },
  {
    title: "নিয়মিত chamber schedule",
    description:
      "আজকের chamber time, visit support এবং appointment booking সহজভাবে জানা যাবে।",
    Icon: Clock3,
  },
  {
    title: "সহজ location ও contact",
    description:
      "চেম্বার address, hotline এবং doctor profile এক জায়গা থেকে দেখা যাবে।",
    Icon: MapPin,
  },
];

export function HomeDoctorPreviewSection({
  doctors,
}: HomeDoctorPreviewSectionProps) {
  const hasDynamicDoctor = doctors.length > 0;

  return (
    <section className="doctor-premium-section relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-10 sm:py-12 md:py-20">
      {/* Premium animated medical background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(14,165,233,0.20),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_70%_92%,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,249,255,0.78),rgba(236,254,255,0.85))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />

      <div className="doctor-orb-one pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="doctor-orb-two pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="doctor-scroll-reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/82 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
            <UserRound className="h-4 w-4" />
            Meet Your Doctor
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            রোগীর আস্থায় একজন
            <span className="block bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              বিশ্বস্ত ডাক্তারের সেবা
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            ডাক্তার সম্পর্কে জানা, chamber schedule দেখা, hotline call করা এবং
            দ্রুত appointment নেওয়ার জন্য একটি পরিষ্কার, premium ও
            patient-friendly experience.
          </p>
        </div>

        {/* Main premium doctor section */}
        <div className="doctor-shell doctor-scroll-reveal mt-9 rounded-[2.2rem] border border-white/90 bg-white/60 p-2.5 shadow-[0_35px_110px_-65px_rgba(15,23,42,0.68)] backdrop-blur-2xl sm:p-3 md:mt-12 md:p-4">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/72 lg:grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Left premium profile */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-4 text-white sm:p-6 md:p-7">
              <div className="doctor-dark-orb-one pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-sky-400/22 blur-3xl" />
              <div className="doctor-dark-orb-two pointer-events-none absolute -bottom-32 left-8 h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-25" />

              <div className="relative">
                {/* Photo card */}
                <div className="doctor-photo-card group relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/10 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/doctor.png"
                      alt="Doctor photo"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.055]"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/16 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-400/10" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -left-20 top-0 h-full w-24 rotate-12 bg-white/12 blur-xl" />
                    </div>
                  </div>

                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/92 px-3 py-1.5 text-[0.7rem] font-bold text-emerald-700 shadow-sm backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    আজ chamber আছে
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-xs font-medium text-sky-100">
                      General Physician
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Dr. Sarah Ahmed
                    </h3>
                    <p className="mt-1 text-xs text-slate-200">
                      MBBS, FCPS Medicine
                    </p>
                  </div>
                </div>

                {/* Premium message */}
                <div className="doctor-mini-card mt-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-sky-200 ring-1 ring-white/10">
                      <Stethoscope className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        রোগীর জন্য সহজ ও পরিষ্কার treatment plan
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        consultation, diagnosis guidance, medicine advice এবং
                        follow-up care সহজ ভাষায় বুঝিয়ে দেওয়া হয়।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {DOCTOR_STATS.map((item, index) => (
                    <div
                      key={item.label}
                      className="doctor-stat-card rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <p className="text-xs font-medium text-slate-300">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-bold text-white sm:text-lg">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {hasDynamicDoctor ? (
                  <p className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-medium leading-5 text-slate-300">
                    Dynamic doctor data connected আছে। পরবর্তীতে এই static
                    profile data CMS/API থেকে replace করা যাবে।
                  </p>
                ) : null}
              </div>
            </div>

            {/* Right content */}
            <div className="relative overflow-hidden bg-white/82 p-4 backdrop-blur-xl sm:p-6 md:p-7">
              <div className="doctor-light-orb-one pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-300/18 blur-3xl" />
              <div className="doctor-light-orb-two pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-cyan-300/16 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                      Doctor Overview
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      এক জায়গায় doctor profile, schedule ও appointment
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      রোগীরা doctor পরিচিতি, chamber time, location, hotline এবং
                      appointment option সহজে বুঝতে পারবে।
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Open
                  </div>
                </div>

                {/* Highlight cards */}
                <div className="mt-6 grid gap-3">
                  {DOCTOR_POINTS.map((item) => {
                    const Icon = item.Icon;

                    return (
                      <Link
                        key={item.title}
                        href={ROUTES.doctor}
                        className="group relative flex items-start gap-3 overflow-hidden rounded-[1.5rem] border border-white/85 bg-white/85 p-4 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_26px_68px_-40px_rgba(14,165,233,0.66)] active:scale-[0.98] sm:gap-4"
                      >
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-500 via-cyan-400 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-sky-200/40" />

                        <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                          <span className="absolute inset-0 rounded-2xl bg-cyan-300/0 transition-all duration-500 group-hover:bg-cyan-300/15" />
                          <Icon
                            className="relative h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                            strokeWidth={1.9}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-slate-950 sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-sky-50 group-hover:text-sky-700">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Schedule bar */}
                <div className="mt-6 rounded-[1.6rem] border border-white/85 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-3 shadow-sm backdrop-blur-xl sm:p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="group flex items-center gap-3 rounded-2xl border border-white/85 bg-white/88 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                        <Clock3 className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          আজকের OPD
                        </p>
                        <p className="text-sm font-bold text-slate-950">
                          6PM - 10PM
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-3 rounded-2xl border border-white/85 bg-white/88 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        <PhoneCall className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
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
                </div>

                {/* Trust strip */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/85 bg-white/85 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                      <Star className="h-5 w-5 fill-current transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        Patient Friendly
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        সহজ ভাষায় treatment guidance
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-white/85 bg-white/85 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-600 transition-all duration-300 group-hover:bg-rose-500 group-hover:text-white">
                      <HeartPulse className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        Follow-up Care
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Report ও prescription review
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium CTA buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link
                    href={ROUTES.appointment}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-3 text-xs font-bold text-white shadow-[0_22px_48px_-24px_rgba(15,23,42,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-28px_rgba(14,165,233,0.75)] active:scale-[0.97] sm:text-sm"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 transition-all duration-500 group-hover:h-56 group-hover:w-56" />
                    <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />

                    <span className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2">
                      <CalendarPlus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      Appointment নিন
                    </span>
                  </Link>

                  <Link
                    href={ROUTES.doctor}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-white/90 px-3 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:text-sky-700 hover:shadow-[0_22px_55px_-34px_rgba(14,165,233,0.55)] active:scale-[0.97] sm:text-sm"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 transition-all duration-500 group-hover:h-44 group-hover:w-44" />

                    <span className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2">
                      Profile দেখুন
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes doctorFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes doctorDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(22px, 16px, 0) scale(1.08);
          }
        }

        @keyframes doctorDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-20px, -12px, 0) scale(1.08);
          }
        }

        @keyframes doctorReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes doctorStatPop {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .doctor-shell {
          animation: doctorReveal 0.8s ease-out both;
        }

        .doctor-photo-card {
          animation: doctorFloat 6s ease-in-out infinite;
        }

        .doctor-mini-card,
        .doctor-stat-card {
          animation: doctorStatPop 0.65s ease-out both;
        }

        .doctor-orb-one,
        .doctor-dark-orb-one,
        .doctor-light-orb-one {
          animation: doctorDriftOne 9s ease-in-out infinite;
        }

        .doctor-orb-two,
        .doctor-dark-orb-two,
        .doctor-light-orb-two {
          animation: doctorDriftTwo 10s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .doctor-scroll-reveal {
            animation: doctorReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .doctor-shell,
          .doctor-photo-card,
          .doctor-mini-card,
          .doctor-stat-card,
          .doctor-orb-one,
          .doctor-orb-two,
          .doctor-dark-orb-one,
          .doctor-dark-orb-two,
          .doctor-light-orb-one,
          .doctor-light-orb-two,
          .doctor-scroll-reveal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
