import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
  BadgeCheck,
  Activity,
} from "lucide-react";

const stats = [
  { label: "অভিজ্ঞতা", value: "১২+" },
  { label: "সন্তুষ্ট রোগী", value: "৮k+" },
  { label: "রেটিং", value: "৪.৯" },
];

const highlights = [
  {
    icon: HeartPulse,
    title: "রোগীবান্ধব সেবা",
    text: "প্রতিটি রোগীর কথা মনোযোগ দিয়ে শুনে সহজ ভাষায় চিকিৎসা পরিকল্পনা দেওয়া হয়।",
  },
  {
    icon: ShieldCheck,
    title: "নিরাপদ পরামর্শ",
    text: "সৎ পরামর্শ, পরিষ্কার diagnosis এবং প্রয়োজন অনুযায়ী চিকিৎসা।",
  },
  {
    icon: Clock3,
    title: "সময়মতো ভিজিট",
    text: "সুশৃঙ্খল appointment flow, কম অপেক্ষা এবং আরামদায়ক clinic experience।",
  },
];

const careValues = [
  "প্রতিটি রোগীর জন্য আলাদা care plan",
  "রোগ ও ওষুধ সম্পর্কে সহজ ব্যাখ্যা",
  "Follow-up friendly treatment approach",
  "পরিষ্কার, শান্ত ও comfortable clinic environment",
];

const infoCards = [
  {
    icon: GraduationCap,
    title: "অভিজ্ঞ চিকিৎসা",
    text: "আধুনিক treatment approach এবং বাস্তব clinical experience দিয়ে রোগীকে সঠিক guidance দেওয়া হয়।",
  },
  {
    icon: UsersRound,
    title: "Friendly Consultation",
    text: "রোগী যেন সহজে সমস্যা বলতে পারে এবং treatment বুঝতে পারে—এটাই আমাদের priority।",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page relative overflow-hidden bg-[#f6faf9] text-slate-950">
      {/* Global premium background */}
      <div className="about-orb-one pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="about-orb-two pointer-events-none fixed -right-40 top-52 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-50" />

      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left Content */}
          <div className="about-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
              <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
              Trusted Doctor Care
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.07em] text-slate-950 sm:text-5xl lg:text-6xl">
              আপনার স্বাস্থ্যের জন্য ব্যক্তিগত ও বিশ্বস্ত চিকিৎসা।
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Dr. Sarah Ahmed রোগীদের জন্য সহজ, নিরাপদ এবং পরিষ্কার চিকিৎসা
              পরামর্শ প্রদান করেন। এখানে প্রতিটি consultation হয় যত্নসহকারে, সময়
              নিয়ে এবং রোগীর প্রয়োজন বুঝে।
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ROUTES.appointment}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_22px_45px_-25px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-56 group-hover:w-56" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                  Appointment নিন
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>

              <Link
                href={ROUTES.contact}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/85 px-6 text-sm font-black text-slate-950 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:text-emerald-700 active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50 transition-all duration-500 group-hover:h-44 group-hover:w-44" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  Clinic Contact
                </span>
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className="about-stat-card rounded-3xl border border-white/80 bg-white/75 p-4 text-center shadow-[0_18px_55px_-42px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_65px_-44px_rgba(16,185,129,0.45)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-2xl font-black tracking-[-0.05em] text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Doctor Image */}
          <div className="about-doctor-wrap relative">
            <div className="about-small-orb-one absolute -left-6 top-10 h-24 w-24 rounded-full bg-emerald-300/30 blur-2xl" />
            <div className="about-small-orb-two absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 p-3 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_38px_110px_-58px_rgba(16,185,129,0.58)]">
              <div className="group relative overflow-hidden rounded-[1.85rem] bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-xs font-black text-emerald-700 shadow-sm backdrop-blur-xl">
                  <BadgeCheck className="h-4 w-4" />
                  Available Today
                </div>

                <div className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/75 text-emerald-700 shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Stethoscope className="h-5 w-5" />
                </div>

                <div className="relative mx-auto h-[390px] max-w-[520px] sm:h-[500px]">
                  <Image
                    src="/doctor.png"
                    alt="Dr. Sarah Ahmed"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain object-bottom drop-shadow-[0_30px_35px_rgba(15,23,42,0.18)] transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/85 bg-white/80 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-950 sm:text-xl">
                        Dr. Sarah Ahmed
                      </h2>
                      <p className="mt-1 text-xs font-bold text-emerald-700 sm:text-sm">
                        Family Medicine & Primary Care
                      </p>
                    </div>

                    <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <Activity className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="about-card about-scroll-reveal group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-48px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.52)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/40 group-hover:scale-125" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <h3 className="relative mt-4 text-base font-black tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="about-mission-card about-scroll-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_26px_80px_-50px_rgba(15,23,42,0.8)] sm:p-8">
            <div className="about-dark-orb-one pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="about-dark-orb-two pointer-events-none absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-cyan-300/12 blur-3xl" />

            <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-300 transition-all duration-300 hover:rotate-6 hover:scale-110">
              <Award className="h-5 w-5" />
            </div>

            <p className="relative mt-6 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Clinic Mission
            </p>

            <h2 className="relative mt-3 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
              চিকিৎসা যেন হয় সহজ, পরিষ্কার এবং বিশ্বাসযোগ্য।
            </h2>

            <p className="relative mt-4 text-sm leading-7 text-slate-300">
              আমাদের লক্ষ্য হলো রোগীকে শুধু prescription দেওয়া নয়, বরং তার
              health condition, treatment এবং next step পরিষ্কারভাবে বুঝিয়ে
              দেওয়া।
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="about-card about-scroll-reveal group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_22px_65px_-48px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.52)]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-200/40 group-hover:scale-125" />

                  <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative mt-5 text-lg font-black tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Care Values */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 lg:pb-16">
        <div className="about-care-card about-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 p-5 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Care Values
              </div>

              <h2 className="mt-4 max-w-xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                প্রতিটি consultation হবে calm, clear এবং comfortable.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                রোগীর সমস্যা বুঝে সঠিক পরামর্শ, follow-up guidance এবং সুন্দর
                clinic experience নিশ্চিত করাই আমাদের কাজ।
              </p>
            </div>

            <div className="grid gap-3">
              {careValues.map((value, index) => (
                <div
                  key={value}
                  className="group flex items-start gap-3 rounded-[1.35rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-md"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <div className="group flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-slate-700 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500">
                  Clinic Location
                </p>
                <p className="text-sm font-black text-slate-950">
                  Main Chamber, City Medical Area
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-slate-700 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <Clock3 className="h-5 w-5" />
              </div>

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

      <style>{`
        @keyframes aboutReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes aboutDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes aboutDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        @keyframes aboutPop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .about-reveal,
        .about-scroll-reveal,
        .about-care-card {
          animation: aboutReveal 0.8s ease-out both;
        }

        .about-doctor-wrap {
          animation:
            aboutReveal 0.85s ease-out 0.12s both,
            aboutFloat 6s ease-in-out 1s infinite;
        }

        .about-stat-card {
          animation: aboutPop 0.65s ease-out both;
        }

        .about-orb-one,
        .about-small-orb-one,
        .about-dark-orb-one {
          animation: aboutDriftOne 9s ease-in-out infinite;
        }

        .about-orb-two,
        .about-small-orb-two,
        .about-dark-orb-two {
          animation: aboutDriftTwo 10s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .about-scroll-reveal,
          .about-care-card {
            animation: aboutReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-scroll-reveal,
          .about-care-card,
          .about-doctor-wrap,
          .about-stat-card,
          .about-orb-one,
          .about-orb-two,
          .about-small-orb-one,
          .about-small-orb-two,
          .about-dark-orb-one,
          .about-dark-orb-two {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
