import Link from "next/link";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const contactCards = [
  {
    title: "Call Clinic",
    value: "+8801XXXXXXXXX",
    text: "For appointment and quick support",
    icon: Phone,
    href: "tel:+8801XXXXXXXXX",
  },
  {
    title: "Email Support",
    value: "hello@doctorclinic.com",
    text: "For reports, queries, and follow-up",
    icon: Mail,
    href: "mailto:hello@doctorclinic.com",
  },
  {
    title: "Clinic Location",
    value: "City Medical Area",
    text: "Main Chamber, Rangpur, Bangladesh",
    icon: MapPin,
    href: "#clinic-map",
  },
];

const scheduleItems = [
  { day: "Saturday - Thursday", time: "5:00 PM - 9:00 PM" },
  { day: "Friday", time: "Emergency / Closed" },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f7fafc] pb-24 lg:pb-16">
      {/* Contact Hero */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Info */}
          <aside className="relative">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-200/35 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(255,255,255,0.18)_52%,rgba(16,185,129,0.06))]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Clinic Contact
                </div>

                <h1 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-4xl">
                  Get in touch with Dr. Sarah Ahmed&apos;s clinic.
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[0.95rem] sm:leading-7">
                  Contact us for appointment support, chamber information,
                  follow-up questions, and general healthcare queries.
                </p>

                <div className="mt-5 grid gap-3">
                  {contactCards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-white/65 p-4 shadow-[0_14px_40px_-34px_rgba(15,23,42,0.45)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-950">
                            {item.title}
                          </p>
                          <p className="mt-0.5 truncate text-sm font-medium text-slate-700">
                            {item.value}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-[1.35rem] border border-emerald-100 bg-emerald-50/70 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="text-sm font-medium leading-6 text-slate-700">
                      For faster service, please include your name, phone
                      number, and preferred appointment time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-4 rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Clinic Schedule
                  </p>
                  <p className="text-xs text-slate-500">
                    Regular chamber hours
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {scheduleItems.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50/80 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-600">
                      {item.day}
                    </span>
                    <span className="text-sm font-semibold text-slate-950">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/78 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.22)_54%,rgba(14,165,233,0.06))]" />

            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Send Message
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                    How can we help?
                  </h2>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_-24px_rgba(15,23,42,0.9)]">
                  <MessageSquareText className="h-5 w-5" />
                </div>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Full Name
                    </span>
                    <span className="relative block">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        name="name"
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/85 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Phone Number
                    </span>
                    <span className="relative block">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+8801XXXXXXXXX"
                        className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/85 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                      />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Email Optional
                  </span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="patient@email.com"
                      className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/85 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Query Type
                  </span>
                  <select
                    name="queryType"
                    defaultValue=""
                    className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="appointment">Appointment Support</option>
                    <option value="follow-up">Follow-up Query</option>
                    <option value="report">Report / Prescription</option>
                    <option value="general">General Question</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm font-medium leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-normal leading-5 text-slate-500">
                    Our support team will contact you as soon as possible.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_16px_34px_-24px_rgba(15,23,42,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>

      {/* Map Section */}
      <section id="clinic-map" className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-5">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Clinic Map
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                Visit our chamber
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              <MapPin className="h-4 w-4 text-emerald-700" />
              Rangpur, Bangladesh
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.35rem] border border-slate-100 bg-slate-100">
            <iframe
              title="Clinic Location Map"
              src="https://www.google.com/maps?q=Rangpur%20Bangladesh&output=embed"
              className="h-[260px] w-full border-0 sm:h-[340px] lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-[1.25rem] bg-slate-50/80 p-4">
              <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <p className="text-sm font-medium leading-6 text-slate-700">
                Please arrive 10 minutes before your appointment.
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-[1.25rem] bg-slate-50/80 p-4">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <p className="text-sm font-medium leading-6 text-slate-700">
                Bring previous prescriptions and reports.
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-[1.25rem] bg-slate-50/80 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <p className="text-sm font-medium leading-6 text-slate-700">
                Emergency cases should call the clinic first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
