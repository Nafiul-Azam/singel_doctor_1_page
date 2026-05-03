import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarPlus,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-8 sm:py-10 md:py-14">
      {/* Animated medical background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(14,165,233,0.20),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_72%_90%,rgba(16,185,129,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,249,255,0.72),rgba(236,254,255,0.82))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/85 bg-white/58 p-4 shadow-[0_30px_95px_-58px_rgba(15,23,42,0.58)] backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_36px_110px_-62px_rgba(14,165,233,0.55)] sm:p-5 md:grid md:grid-cols-[1.03fr_0.97fr] md:items-center md:gap-8 lg:p-8">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl motion-safe:animate-pulse" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl motion-safe:animate-pulse" />

          {/* Left content */}
          <div className="relative order-2 mt-6 md:order-1 md:mt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-3 py-1.5 text-[0.72rem] font-semibold text-sky-700 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              নিরাপদ, সহজ ও বিশ্বস্ত চিকিৎসা সেবা
            </div>

            <h1 className="mt-4 max-w-2xl text-[2.05rem] font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              আপনার স্বাস্থ্যসেবা এখন
              <span className="block bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                আরও সহজ ও professional
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              অভিজ্ঞ ডাক্তারের chamber schedule দেখুন, সহজে appointment বুক করুন
              এবং প্রয়োজনীয় চিকিৎসা পরামর্শের জন্য দ্রুত যোগাযোগ করুন। রোগীদের
              জন্য পরিষ্কার, নির্ভরযোগ্য এবং সহজে বোঝার মতো clinic experience.
            </p>

            {/* Trust cards */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="group rounded-2xl border border-white/85 bg-white/72 p-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-sky-700 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                    <Stethoscope className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      অভিজ্ঞ ডাক্তার
                    </p>
                    <p className="mt-0.5 text-[0.68rem] text-slate-500">
                      Medicine & General Care
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-white/85 bg-white/72 p-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      রোগীর আস্থা
                    </p>
                    <p className="mt-0.5 text-[0.68rem] text-slate-500">
                      4.9 patient rating
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-white/85 bg-white/72 p-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      নিয়মিত chamber
                    </p>
                    <p className="mt-0.5 text-[0.68rem] text-slate-500">
                      Daily OPD schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link
                href={ROUTES.appointment}
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-4 text-xs font-semibold text-white shadow-[0_20px_42px_-24px_rgba(15,23,42,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-28px_rgba(14,165,233,0.85)] active:scale-[0.98] sm:h-12 sm:px-6 sm:text-sm"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 transition-all duration-500 group-hover:h-56 group-hover:w-56" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                  Appointment নিন
                </span>
              </Link>

              <Link
                href={ROUTES.doctor}
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-white/80 px-4 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:text-sky-700 hover:shadow-md active:scale-[0.98] sm:h-12 sm:px-6 sm:text-sm"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 transition-all duration-500 group-hover:h-40 group-hover:w-40" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  ডাক্তার দেখুন
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              জরুরি সমস্যায় সরাসরি কল করুন। Online appointment শুধুমাত্র chamber
              visit সহজ করার জন্য।
            </p>
          </div>

          {/* Right doctor profile */}
          <div className="relative order-1 transition-transform duration-700 hover:-translate-y-1 md:order-2">
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/90 bg-white/62 p-3 shadow-[0_28px_88px_-48px_rgba(15,23,42,0.68)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_34px_100px_-52px_rgba(14,165,233,0.58)] sm:rounded-[2rem] sm:p-4">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-300/25 blur-3xl motion-safe:animate-pulse" />
              <div className="pointer-events-none absolute -bottom-24 left-8 h-60 w-60 rounded-full bg-emerald-300/16 blur-3xl motion-safe:animate-pulse" />

              {/* Doctor photo */}
              <div className="group relative overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-sky-50 via-white to-cyan-50 sm:rounded-[1.6rem]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/doctor.png"
                    alt="Doctor photo"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[0.7rem] font-bold text-emerald-700 shadow-sm backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  আজ chamber আছে
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/62 via-slate-950/18 to-transparent p-4">
                  <p className="text-xs font-medium text-white/85">
                    Trusted consultation
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    Dr. Sarah Ahmed
                  </h2>
                  <p className="mt-1 text-xs text-white/78">
                    MBBS, FCPS Medicine
                  </p>
                </div>
              </div>

              {/* Doctor details */}
              <div className="relative mt-3 rounded-[1.25rem] border border-white/85 bg-white/82 p-4 shadow-sm backdrop-blur-xl sm:mt-4 sm:rounded-[1.5rem] sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-sky-700">
                      General Physician
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">
                      ব্যক্তিগত যত্নে চিকিৎসা পরামর্শ
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      রোগীর সমস্যা শুনে প্রয়োজন অনুযায়ী পরামর্শ ও follow-up
                      guidance দেওয়া হয়।
                    </p>
                  </div>

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-lg transition-transform duration-300 hover:rotate-6 hover:scale-105">
                    <Stethoscope className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                    <p className="text-[0.68rem] font-medium text-slate-500">
                      Experience
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-950">
                      10+ Years
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                    <p className="text-[0.68rem] font-medium text-slate-500">
                      Served Patients
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-950">
                      8k+
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="relative mt-3 grid gap-2 sm:mt-4">
                <div className="group flex items-center justify-between gap-3 rounded-2xl border border-white/85 bg-white/82 px-3 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-4">
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900">
                        Evening Chamber
                      </p>
                      <p className="text-[0.68rem] text-slate-500">
                        আজকের schedule
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 text-xs font-bold text-slate-950">
                    6PM - 10PM
                  </p>
                </div>

                <div className="group flex items-center justify-between gap-3 rounded-2xl border border-white/85 bg-white/82 px-3 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-4">
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900">
                        Clinic Location
                      </p>
                      <p className="truncate text-[0.68rem] text-slate-500">
                        Rangpur, Bangladesh
                      </p>
                    </div>
                  </div>

                  <Link
                    href={ROUTES.doctor}
                    className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 transition hover:bg-sky-100"
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/85 bg-white/88 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:text-sky-700 hover:shadow-md active:scale-[0.98]"
                >
                  <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  Call Now
                </a>

                <Link
                  href={ROUTES.appointment}
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 text-xs font-bold text-white shadow-[0_20px_42px_-24px_rgba(2,132,199,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:from-sky-700 hover:to-cyan-700 active:scale-[0.98]"
                >
                  <CalendarPlus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
