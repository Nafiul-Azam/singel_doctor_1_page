import Link from "next/link";
import { ArrowRight, CalendarPlus, PhoneCall, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

export function HomeAppointmentCTASection() {
  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-8 sm:py-10 md:py-12">
      {/* Soft premium background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_70%_90%,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.82),rgba(236,254,255,0.88))]" />

      <Container className="relative">
        <div className="group/card relative overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/65 p-2 shadow-[0_22px_70px_-50px_rgba(15,23,42,0.55)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_30px_85px_-52px_rgba(14,165,233,0.58)] sm:p-2.5">
          {/* Border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-r from-sky-200/0 via-sky-200/35 to-cyan-200/0 opacity-0 blur-xl transition-opacity duration-500 group-hover/card:opacity-100" />

          <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-5 py-5 text-white sm:px-6 md:px-7 md:py-6">
            {/* Elegant animated background */}
            <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl transition-transform duration-700 group-hover/card:scale-125" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-cyan-300/18 blur-3xl transition-transform duration-700 group-hover/card:scale-125" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_34%)]" />

            <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              {/* Minimal content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.7rem] font-bold text-sky-100 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-200 motion-safe:animate-pulse" />
                  Quick Appointment
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  আজই appointment নিন
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                  সহজে request পাঠান, প্রয়োজন হলে সরাসরি call করুন।
                </p>
              </div>

              {/* Buttons */}
              <div className="grid gap-3 sm:grid-cols-2 md:min-w-[340px]">
                <Link
                  href={ROUTES.appointment}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-bold text-slate-950 shadow-[0_18px_45px_-28px_rgba(255,255,255,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_-28px_rgba(14,165,233,0.85)] active:scale-[0.97]"
                >
                  {/* No shine: premium radial fill */}
                  <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 transition-all duration-500 group-hover:h-40 group-hover:w-40" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-sky-200/40 transition-all duration-300 group-hover:ring-sky-300/80" />
                  <span className="absolute inset-1 rounded-full border border-transparent transition-all duration-300 group-hover:border-sky-200/70" />

                  <span className="relative z-10 inline-flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:bg-sky-600">
                      <CalendarPlus className="h-3.5 w-3.5" />
                    </span>
                    Appointment
                    <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-sky-700" />
                  </span>
                </Link>

                <a
                  href="tel:+8801XXXXXXXXX"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.14] hover:shadow-[0_24px_65px_-35px_rgba(45,212,191,0.8)] active:scale-[0.97]"
                >
                  {/* No shine: soft inner glow */}
                  <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 transition-all duration-500 group-hover:h-44 group-hover:w-44" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-white/10 transition-all duration-300 group-hover:ring-cyan-200/35" />

                  <span className="relative z-10 inline-flex items-center gap-2">
                    <span className="relative grid h-7 w-7 place-items-center rounded-full bg-white/10 text-cyan-100 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-cyan-400/20">
                      <span className="absolute inset-0 rounded-full bg-cyan-300/20 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
                      <PhoneCall className="relative h-3.5 w-3.5" />
                    </span>
                    Call করুন
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
