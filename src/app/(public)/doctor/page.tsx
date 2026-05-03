import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import {
  ArrowRight,
  BadgeCheck,
  CalendarPlus,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Video,
  Activity,
  ClipboardCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { getDoctors } from "@/services/doctor.service";

const DOCTOR_STATS = [
  {
    label: "অভিজ্ঞতা",
    value: "10+",
  },
  {
    label: "রোগী",
    value: "8k+",
  },
  {
    label: "রেটিং",
    value: "4.9",
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
      "রোগীর সমস্যা বুঝে clear explanation, treatment plan এবং follow-up guidance দেওয়া হয়।",
    Icon: Stethoscope,
  },
  {
    title: "Safe Treatment Plan",
    description:
      "প্রয়োজন অনুযায়ী diagnosis, medicine advice এবং unnecessary treatment থেকে নিরাপদ পরামর্শ।",
    Icon: ShieldCheck,
  },
  {
    title: "Long Term Health Care",
    description:
      "Blood pressure, diabetes, heart risk এবং chronic health issue-এর জন্য নিয়মিত care support।",
    Icon: HeartPulse,
  },
];

const PROCESS_STEPS = [
  {
    title: "Profile দেখুন",
    text: "Doctor information, experience এবং chamber details check করুন।",
    Icon: UserRound,
  },
  {
    title: "Appointment নিন",
    text: "আপনার সুবিধামতো সময় অনুযায়ী appointment request করুন।",
    Icon: CalendarPlus,
  },
  {
    title: "Clinic Visit",
    text: "সময়মতো chamber-এ এসে smooth consultation complete করুন।",
    Icon: ClipboardCheck,
  },
];

export default async function DoctorPage() {
  const doctors = await getDoctors();
  const primaryDoctor = doctors[0];

  return (
    <main className="doctor-page-premium relative overflow-hidden bg-[#f5faf9] text-slate-950">
      {/* Premium global background */}
      <div className="doctor-page-orb-one pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="doctor-page-orb-two pointer-events-none fixed -right-40 top-48 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />

      {/* Premium Hero */}
      <section className="relative overflow-hidden px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f5faf9_100%)]" />

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            {/* Left Content */}
            <div className="doctor-reveal relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/82 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
                Premium Doctor Profile
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.075em] text-slate-950 sm:text-5xl lg:text-6xl">
                একজন বিশ্বস্ত ডাক্তারের সাথে সহজ ও আধুনিক চিকিৎসা সেবা।
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Doctor profile, chamber time, service details এবং appointment
                booking—সবকিছু এক জায়গায় সুন্দরভাবে সাজানো। রোগীর জন্য clean,
                fast এবং friendly healthcare experience.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={ROUTES.appointment}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_22px_45px_-24px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_75px_-30px_rgba(16,185,129,0.78)] active:scale-[0.98]"
                >
                  <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-60 group-hover:w-60" />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
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
                    <PhoneCall className="h-4 w-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                    Contact Clinic
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {DOCTOR_STATS.map((item, index) => (
                  <div
                    key={item.label}
                    className="doctor-stat-card rounded-[1.4rem] border border-white/80 bg-white/75 p-4 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_26px_70px_-44px_rgba(16,185,129,0.48)]"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <p className="text-2xl font-black tracking-[-0.05em] text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Doctor Visual */}
            <div className="doctor-visual-wrap relative">
              <div className="doctor-floating-badge absolute -left-6 top-8 z-10 hidden rounded-3xl border border-white/80 bg-white/82 p-4 shadow-[0_22px_55px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">Status</p>
                    <p className="text-sm font-black text-slate-950">
                      Available Today
                    </p>
                  </div>
                </div>
              </div>

              <div className="doctor-floating-badge-two absolute -right-4 bottom-16 z-10 hidden rounded-3xl border border-white/80 bg-white/82 p-4 shadow-[0_22px_55px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                    <Star className="h-5 w-5 fill-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Patient Rating
                    </p>
                    <p className="text-sm font-black text-slate-950">
                      4.9 out of 5
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_95px_-58px_rgba(15,23,42,0.8)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_42px_120px_-62px_rgba(16,185,129,0.58)]">
                <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
                  <div className="doctor-dark-orb-one pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
                  <div className="doctor-dark-orb-two pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative mx-auto h-[420px] max-w-[520px] sm:h-[540px]">
                    <Image
                      src="/doctor.png"
                      alt="Doctor profile"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-contain object-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.28)] transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/15 bg-white/10 p-4 text-white shadow-[0_18px_50px_-32px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                          General Physician
                        </p>
                        <h2 className="mt-1 text-xl font-black tracking-[-0.04em]">
                          Dr. Sarah Ahmed
                        </h2>
                        <p className="mt-1 text-xs font-medium text-slate-300">
                          MBBS, FCPS Medicine
                        </p>
                      </div>

                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-emerald-700 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <Activity className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Doctor Data / Card Section */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <Container>
          <div className="doctor-scroll-reveal grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Doctor Card From Data */}
            <div className="doctor-panel relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.7)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_32px_95px_-58px_rgba(16,185,129,0.52)] sm:p-5">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/25 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                    Live Profile
                  </p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-slate-950">
                    Doctor Information
                  </h3>
                </div>

                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <UserRound className="h-5 w-5" />
                </div>
              </div>

              {primaryDoctor ? (
                <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-100 bg-slate-50/70 p-3">
                  <DoctorCard doctor={primaryDoctor} />
                </div>
              ) : (
                <div className="relative rounded-[1.6rem] border border-slate-100 bg-slate-50/80 p-5 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    <Stethoscope className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 text-lg font-black text-slate-950">
                    Dr. Sarah Ahmed
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    General Physician
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Doctor profile data পাওয়া যায়নি। Fallback profile দেখানো
                    হচ্ছে।
                  </p>
                </div>
              )}
            </div>

            {/* Right Care Points */}
            <div className="doctor-panel rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.7)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_32px_95px_-58px_rgba(16,185,129,0.52)] sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                    Care Overview
                  </p>
                  <h3 className="mt-2 max-w-xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                    রোগীর জন্য পরিষ্কার, নিরাপদ ও organized consultation.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    এই profile page থেকে রোগী খুব সহজে doctor details, chamber
                    schedule, services এবং appointment action বুঝতে পারবে।
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {CARE_POINTS.map((item) => {
                  const Icon = item.Icon;

                  return (
                    <Link
                      key={item.title}
                      href={ROUTES.services}
                      className="group relative flex items-start gap-4 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50/75 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-[0_22px_60px_-38px_rgba(16,185,129,0.62)] active:scale-[0.98]"
                    >
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/45" />

                      <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm ring-1 ring-slate-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <div className="relative min-w-0 flex-1">
                        <h4 className="text-sm font-black text-slate-950 sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                          {item.description}
                        </p>
                      </div>

                      <ArrowRight className="relative mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-emerald-700" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule & Contact */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <Container>
          <div className="doctor-scroll-reveal overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.7)] backdrop-blur-2xl">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-950 p-6 text-white sm:p-8">
                <div className="doctor-dark-orb-one pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-xl">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                    আজকের Chamber Schedule
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-50">
                    রোগীর সুবিধার জন্য OPD time, hotline এবং chamber location
                    এখানে পরিষ্কারভাবে দেখানো হয়েছে।
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-xs font-bold text-emerald-100">
                        Today&apos;s OPD
                      </p>
                      <p className="mt-1 text-xl font-black">6PM - 10PM</p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-xs font-bold text-emerald-100">
                        Weekly
                      </p>
                      <p className="mt-1 text-xl font-black">Sat - Thu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-5 sm:p-7">
                <div className="group flex items-center gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <PhoneCall className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">Hotline</p>
                    <p className="text-sm font-black text-slate-950">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Chamber Location
                    </p>
                    <p className="text-sm font-black text-slate-950">
                      Rangpur, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Video className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Online Support
                    </p>
                    <p className="text-sm font-black text-slate-950">
                      Appointment inquiry available
                    </p>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <Link
                    href={ROUTES.appointment}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-4 text-xs font-black text-white shadow-[0_18px_35px_-20px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98] sm:text-sm"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-52 group-hover:w-52" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      Book Now
                    </span>
                  </Link>

                  <Link
                    href={ROUTES.services}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white px-4 text-xs font-black text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700 active:scale-[0.98] sm:text-sm"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50 transition-all duration-500 group-hover:h-40 group-hover:w-40" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Services
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-16">
        <Container>
          <div className="doctor-scroll-reveal rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.7)] backdrop-blur-2xl sm:p-7">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Simple Patient Journey
              </div>

              <h3 className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                রোগীর জন্য booking process সহজ ও পরিষ্কার।
              </h3>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.Icon;

                return (
                  <div
                    key={step.title}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-slate-100 bg-slate-50/75 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-emerald-50/70 hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.58)]"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/45 group-hover:scale-125" />
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-4xl font-black tracking-[-0.08em] text-slate-200 transition-all duration-300 group-hover:text-emerald-200">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="relative mt-5 text-base font-black text-slate-950">
                      {step.title}
                    </h4>
                    <p className="relative mt-2 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @keyframes doctorPageReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes doctorPageFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes doctorPageDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes doctorPageDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        @keyframes doctorPagePop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .doctor-reveal,
        .doctor-scroll-reveal {
          animation: doctorPageReveal 0.8s ease-out both;
        }

        .doctor-visual-wrap {
          animation:
            doctorPageReveal 0.85s ease-out 0.12s both,
            doctorPageFloat 6s ease-in-out 1s infinite;
        }

        .doctor-floating-badge {
          animation:
            doctorPageReveal 0.75s ease-out 0.28s both,
            doctorPageFloat 5.5s ease-in-out 1.2s infinite;
        }

        .doctor-floating-badge-two {
          animation:
            doctorPageReveal 0.75s ease-out 0.38s both,
            doctorPageFloat 6.2s ease-in-out 1.5s infinite;
        }

        .doctor-stat-card {
          animation: doctorPagePop 0.65s ease-out both;
        }

        .doctor-page-orb-one,
        .doctor-dark-orb-one {
          animation: doctorPageDriftOne 9s ease-in-out infinite;
        }

        .doctor-page-orb-two,
        .doctor-dark-orb-two {
          animation: doctorPageDriftTwo 10s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .doctor-scroll-reveal {
            animation: doctorPageReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .doctor-reveal,
          .doctor-scroll-reveal,
          .doctor-visual-wrap,
          .doctor-floating-badge,
          .doctor-floating-badge-two,
          .doctor-stat-card,
          .doctor-page-orb-one,
          .doctor-page-orb-two,
          .doctor-dark-orb-one,
          .doctor-dark-orb-two {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
