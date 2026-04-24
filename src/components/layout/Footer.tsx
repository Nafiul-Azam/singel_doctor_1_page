import Link from "next/link";
import {
  CalendarPlus,
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

const QUICK_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "About Doctor", href: ROUTES.about },
  { label: "Doctor Profile", href: ROUTES.doctor },
  { label: "Services", href: ROUTES.services },
  { label: "Reviews", href: ROUTES.reviews },
];

const SUPPORT_LINKS = [
  { label: "Book Appointment", href: ROUTES.appointment },
  { label: "Contact", href: ROUTES.contact },
  { label: "Emergency", href: ROUTES.emergency },
];

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />

      <Container className="relative py-10 sm:py-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href={ROUTES.home} className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-200 shadow-xl backdrop-blur-xl">
                <Stethoscope className="h-6 w-6" strokeWidth={1.9} />
              </span>

              <span>
                <span className="block text-lg font-bold tracking-tight text-white">
                  CarePoint Clinic
                </span>
                <span className="mt-0.5 block text-xs font-medium text-sky-200">
                  Single Doctor Healthcare
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Personal, ethical, and patient-focused healthcare from one trusted
              doctor. Book appointments, explore services, and get clear medical
              guidance.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-sky-100 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" />
              Trusted Patient Care
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300/70 transition-all duration-300 group-hover:w-3 group-hover:bg-sky-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              Support
            </h4>

            <ul className="mt-4 space-y-2.5 text-sm">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300/70 transition-all duration-300 group-hover:w-3 group-hover:bg-sky-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              Contact Info
            </h4>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-white">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-white">
                    hello@carepoint.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Chamber</p>
                  <p className="text-sm font-semibold text-white">
                    Rangpur, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
                  <Clock3 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">OPD Time</p>
                  <p className="text-sm font-semibold text-white">
                    6:00 PM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={ROUTES.appointment}
              className="group relative mt-5 inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                Book Appointment
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-sky-200/80 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              Copyright {new Date().getFullYear()} CarePoint Clinic. All rights
              reserved.
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400">
              <HeartPulse className="h-4 w-4 text-sky-300" />
              <span>Built for better patient care</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
