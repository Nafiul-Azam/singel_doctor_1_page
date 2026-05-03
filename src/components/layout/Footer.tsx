import Link from "next/link";
import {
  CalendarPlus,
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
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
    <footer className="footer-premium relative mt-16 overflow-hidden border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
      {/* Premium animated background */}
      <div className="footer-orb-one pointer-events-none absolute -left-36 top-8 h-80 w-80 rounded-full bg-sky-400/16 blur-3xl" />
      <div className="footer-orb-two pointer-events-none absolute -right-36 bottom-0 h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl" />
      <div className="footer-orb-three pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/8 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

      <Container className="relative py-10 sm:py-12 md:py-14">
        <div className="footer-reveal grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href={ROUTES.home}
              className="group inline-flex items-center gap-3"
            >
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 text-sky-200 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:border-sky-300/40 group-hover:bg-white/15">
                <span className="absolute inset-0 rounded-2xl bg-sky-400/0 transition-all duration-500 group-hover:bg-sky-400/15" />
                <Stethoscope
                  className="relative h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.9}
                />
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
              একজন বিশ্বস্ত ডাক্তারের personal, ethical এবং patient-focused
              healthcare platform.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-sky-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-white/15">
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
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300/70 transition-all duration-300 group-hover:w-4 group-hover:bg-sky-200 group-hover:shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-300 transition-all duration-300 group-hover:w-full" />
                    </span>
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
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70 transition-all duration-300 group-hover:w-4 group-hover:bg-cyan-200 group-hover:shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="footer-contact-card relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 p-5 shadow-[0_28px_80px_-55px_rgba(14,165,233,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-white/[0.13]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-300/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Contact Info
            </h4>

            <div className="mt-4 space-y-3">
              <div className="group flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-white">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-white">
                    hello@carepoint.com
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Chamber</p>
                  <p className="text-sm font-semibold text-white">
                    Rangpur, Bangladesh
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
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
              className="group relative mt-5 inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(14,165,233,0.85)] active:scale-[0.97]"
            >
              <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 transition-all duration-500 group-hover:h-48 group-hover:w-48" />

              <span className="relative z-10 inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                Book Appointment
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-10 border-t border-white/10 pt-5">
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

      <style>{`
        @keyframes footerReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes footerDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 16px, 0) scale(1.08);
          }
        }

        @keyframes footerDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -14px, 0) scale(1.08);
          }
        }

        @keyframes footerSoftFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .footer-reveal {
          animation: footerReveal 0.8s ease-out both;
        }

        .footer-contact-card {
          animation: footerSoftFloat 6s ease-in-out infinite;
        }

        .footer-orb-one {
          animation: footerDriftOne 9s ease-in-out infinite;
        }

        .footer-orb-two {
          animation: footerDriftTwo 10s ease-in-out infinite;
        }

        .footer-orb-three {
          animation: footerDriftOne 12s ease-in-out infinite reverse;
        }

        @supports (animation-timeline: view()) {
          .footer-reveal {
            animation: footerReveal both;
            animation-timeline: view();
            animation-range: entry 8% cover 32%;
          }

          .footer-bottom {
            animation: footerReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 25%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-reveal,
          .footer-contact-card,
          .footer-orb-one,
          .footer-orb-two,
          .footer-orb-three,
          .footer-bottom {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}