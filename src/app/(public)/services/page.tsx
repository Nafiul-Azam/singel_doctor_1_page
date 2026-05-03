import Image from "next/image";
import Link from "next/link";
import { getClinicServices } from "@/services/services.service";
import { ROUTES } from "@/constants/routes";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
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
  UsersRound,
  Zap,
} from "lucide-react";

type ClinicService = Awaited<ReturnType<typeof getClinicServices>>[number];

const fallbackServices = [
  {
    title: "General Consultation",
    description:
      "জ্বর, ব্যথা, দুর্বলতা, infection এবং সাধারণ health concern-এর জন্য personal doctor consultation.",
  },
  {
    title: "Follow-up Care",
    description:
      "চিকিৎসার progress review, medicine adjustment এবং next treatment step সম্পর্কে clear guidance.",
  },
  {
    title: "Prescription Review",
    description:
      "Medicine dosage, safety check এবং রোগীর জন্য সহজ ভাষায় prescription explanation.",
  },
  {
    title: "Preventive Health Advice",
    description:
      "Lifestyle, diet, routine checkup এবং long-term healthy life-এর জন্য preventive guidance.",
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
    title: "Appointment নিন",
    text: "আপনার সুবিধামতো সময় নির্বাচন করে consultation request করুন।",
    Icon: CalendarPlus,
  },
  {
    title: "Doctor Consultation",
    text: "শান্ত পরিবেশে সরাসরি doctor-এর সাথে আপনার সমস্যা আলোচনা করুন।",
    Icon: Stethoscope,
  },
  {
    title: "Clear Treatment Plan",
    text: "Prescription, medicine guidance এবং follow-up direction বুঝে নিন।",
    Icon: ClipboardCheck,
  },
];

const trustItems = [
  {
    label: "Personal Care",
    value: "1:1",
    Icon: UserRound,
  },
  {
    label: "Safe Advice",
    value: "100%",
    Icon: ShieldCheck,
  },
  {
    label: "Easy Booking",
    value: "Fast",
    Icon: Zap,
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
    <main className="services-premium-page relative overflow-hidden bg-[#f5faf9] pb-24 text-slate-950 lg:pb-16">
      {/* Premium global background */}
      <div className="services-orb-one pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="services-orb-two pointer-events-none fixed -right-40 top-52 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />

      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f5faf9_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* Left Content */}
          <div className="services-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/82 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
              <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
              Premium Clinic Services
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.075em] text-slate-950 sm:text-5xl lg:text-6xl">
              রোগীর জন্য সহজ, পরিষ্কার ও বিশ্বস্ত চিকিৎসা সেবা।
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              একজন trusted doctor-এর মাধ্যমে organized consultation, safe
              treatment guidance এবং follow-up friendly healthcare service. রোগী
              যেন সহজে service বুঝতে পারে এবং appointment নিতে পারে—এই page
              সেটার জন্যই তৈরি।
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
                  <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  Contact Clinic
                </span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {trustItems.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <div
                    key={item.label}
                    className="services-stat-card group rounded-[1.5rem] border border-white/80 bg-white/75 p-4 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_26px_70px_-44px_rgba(16,185,129,0.48)]"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>

                    <p className="mt-4 text-xl font-black tracking-[-0.05em] text-slate-950 sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Premium Visual */}
          <div className="services-visual-wrap relative">
            <div className="services-floating-badge absolute -left-5 top-8 z-10 hidden rounded-3xl border border-white/80 bg-white/82 p-4 shadow-[0_22px_55px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Status</p>
                  <p className="text-sm font-black text-slate-950">
                    Services Open
                  </p>
                </div>
              </div>
            </div>

            <div className="services-floating-badge-two absolute -right-4 bottom-14 z-10 hidden rounded-3xl border border-white/80 bg-white/82 p-4 shadow-[0_22px_55px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">
                    Consultation
                  </p>
                  <p className="text-sm font-black text-slate-950">
                    Fast & Clear
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_95px_-58px_rgba(15,23,42,0.8)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_42px_120px_-62px_rgba(16,185,129,0.58)]">
              <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
                <div className="services-dark-orb-one pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="services-dark-orb-two pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

                <div className="relative mx-auto h-[410px] max-w-[520px] sm:h-[540px]">
                  <Image
                    src="/doctor.png"
                    alt="Clinic doctor"
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
                        Single Doctor Care
                      </p>
                      <h2 className="mt-1 text-xl font-black tracking-[-0.04em]">
                        পরিষ্কার চিকিৎসা পরামর্শ
                      </h2>
                      <p className="mt-1 text-xs font-medium text-slate-300">
                        Safe service • Easy booking • Follow-up support
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
      </section>

      {/* Services Grid */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="services-scroll-reveal mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Our Services
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                প্রতিদিনের health needs-এর জন্য focused care options.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              প্রয়োজন অনুযায়ী service বেছে নিয়ে সরাসরি doctor consultation book
              করুন।
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
                  className="services-card services-scroll-reveal group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-48px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_32px_90px_-52px_rgba(16,185,129,0.55)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-100/70 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/80" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.25)_50%,rgba(16,185,129,0.08))]" />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white group-hover:ring-slate-950">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full border border-slate-100 bg-white/80 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-500 transition-all duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-black tracking-[-0.03em] text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                      {description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Available
                      </span>

                      <Link
                        href={ROUTES.appointment}
                        className="group/book relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-26px_rgba(16,185,129,0.7)] active:scale-[0.97]"
                      >
                        <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600 transition-all duration-500 group-hover/book:h-28 group-hover/book:w-28" />
                        <span className="relative z-10 inline-flex items-center gap-1.5">
                          Book
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/book:translate-x-1" />
                        </span>
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
        <div className="services-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/75 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
              <div className="services-dark-orb-one pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200 backdrop-blur-xl transition-all duration-300 hover:rotate-6 hover:scale-110">
                  <ClipboardCheck className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Simple Process
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                  রোগীর জন্য consultation process সহজ ও পরিষ্কার।
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Appointment থেকে treatment plan পর্যন্ত পুরো journey এমনভাবে
                  সাজানো হয়েছে যেন রোগী খুব সহজে next step বুঝতে পারে।
                </p>
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:p-7">
              {careSteps.map((step, index) => {
                const Icon = step.Icon;

                return (
                  <div
                    key={step.title}
                    className="group relative flex gap-4 overflow-hidden rounded-[1.6rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.55)]"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/45 group-hover:scale-125" />
                    <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-emerald-700">
                          STEP 0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-1 text-sm font-black text-slate-950 sm:text-base">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          <div className="services-trust-card services-scroll-reveal group rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-50px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.5)]">
            <UsersRound className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <h3 className="mt-4 text-lg font-black text-slate-950">
              Patient Friendly
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              রোগীর কথা মনোযোগ দিয়ে শুনে সহজ ভাষায় guidance দেওয়া হয়।
            </p>
          </div>

          <div className="services-trust-card services-scroll-reveal group rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-50px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.5)]">
            <ShieldCheck className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            <h3 className="mt-4 text-lg font-black text-slate-950">
              Safe Treatment
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              প্রয়োজন অনুযায়ী ethical treatment এবং clear prescription advice.
            </p>
          </div>

          <div className="services-trust-card services-scroll-reveal group rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-50px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.5)]">
            <Clock3 className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <h3 className="mt-4 text-lg font-black text-slate-950">
              Organized Visit
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Appointment flow, chamber time এবং follow-up process সহজ রাখা হয়।
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="services-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] bg-slate-950 p-5 text-white shadow-[0_28px_85px_-50px_rgba(15,23,42,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_105px_-55px_rgba(16,185,129,0.6)] sm:p-7 lg:p-8">
          <div className="relative">
            <div className="services-dark-orb-two pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Need doctor consultation?
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                  আজই আপনার consultation appointment book করুন।
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                  Personal, clear এবং reliable medical guidance-এর জন্য
                  appointment request করুন।
                </p>
              </div>

              <Link
                href={ROUTES.appointment}
                className="group relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-100 via-cyan-100 to-sky-100 transition-all duration-500 group-hover:h-52 group-hover:w-52" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  Book Now
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes servicesReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes servicesPop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes servicesFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes servicesDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes servicesDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        .services-reveal,
        .services-scroll-reveal {
          animation: servicesReveal 0.8s ease-out both;
        }

        .services-visual-wrap {
          animation:
            servicesReveal 0.85s ease-out 0.12s both,
            servicesFloat 6s ease-in-out 1s infinite;
        }

        .services-floating-badge {
          animation:
            servicesReveal 0.75s ease-out 0.28s both,
            servicesFloat 5.6s ease-in-out 1.2s infinite;
        }

        .services-floating-badge-two {
          animation:
            servicesReveal 0.75s ease-out 0.38s both,
            servicesFloat 6.4s ease-in-out 1.5s infinite;
        }

        .services-stat-card,
        .services-card,
        .services-trust-card {
          animation: servicesPop 0.65s ease-out both;
        }

        .services-orb-one,
        .services-dark-orb-one {
          animation: servicesDriftOne 9s ease-in-out infinite;
        }

        .services-orb-two,
        .services-dark-orb-two {
          animation: servicesDriftTwo 10s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .services-scroll-reveal {
            animation: servicesReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-reveal,
          .services-scroll-reveal,
          .services-visual-wrap,
          .services-floating-badge,
          .services-floating-badge-two,
          .services-stat-card,
          .services-card,
          .services-trust-card,
          .services-orb-one,
          .services-orb-two,
          .services-dark-orb-one,
          .services-dark-orb-two {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
