import { Ambulance, PhoneCall, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EMERGENCY_INFO } from "@/constants/emergency";

export function HomeEmergencySection() {
  return (
    <section className="emergency-section relative overflow-hidden py-10 sm:py-12">
      <Container>
        <div className="emergency-card relative overflow-hidden rounded-[1.6rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-rose-50 p-5 shadow-[0_24px_70px_-50px_rgba(127,29,29,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_-55px_rgba(220,38,38,0.45)] sm:p-6 md:p-7">
          {/* Animated soft background */}
          <div className="emergency-orb-one pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-200/35 blur-3xl" />
          <div className="emergency-orb-two pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Left content */}
            <div className="flex items-start gap-4">
              <div className="emergency-icon-wrap relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-100 text-red-700 ring-1 ring-red-200/70">
                <span className="absolute inset-0 rounded-2xl bg-red-400/15 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <ShieldAlert
                  className="emergency-icon h-6 w-6"
                  strokeWidth={1.9}
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">
                  Emergency Support
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-red-950 sm:text-3xl">
                  জরুরি সহায়তা প্রয়োজন?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-red-800/80">
                  জরুরি অবস্থায় appointment form-এর অপেক্ষা না করে সরাসরি
                  hotline অথবা ambulance number-এ যোগাযোগ করুন।
                </p>
              </div>
            </div>

            {/* Right contact cards */}
            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[420px]">
              <a
                href={`tel:${EMERGENCY_INFO.hotline}`}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-red-100 bg-white/82 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-[0_22px_55px_-38px_rgba(220,38,38,0.55)] active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 transition-all duration-500 group-hover:h-48 group-hover:w-48" />
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-red-500 to-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-red-700 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <PhoneCall className="h-5 w-5" />
                </div>

                <div className="relative">
                  <p className="text-xs font-medium text-red-700/80">Hotline</p>
                  <p className="mt-0.5 text-sm font-bold text-red-950">
                    {EMERGENCY_INFO.hotline}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${EMERGENCY_INFO.ambulance}`}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-red-100 bg-white/82 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-[0_22px_55px_-38px_rgba(225,29,72,0.55)] active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-50 transition-all duration-500 group-hover:h-48 group-hover:w-48" />
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-rose-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-700 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white">
                  <Ambulance className="h-5 w-5" />
                </div>

                <div className="relative">
                  <p className="text-xs font-medium text-red-700/80">
                    Ambulance
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-red-950">
                    {EMERGENCY_INFO.ambulance}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes emergencyReveal {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes emergencyDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-16px, 14px, 0) scale(1.08);
          }
        }

        @keyframes emergencyDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -12px, 0) scale(1.08);
          }
        }

        @keyframes emergencyIconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .emergency-card {
          animation: emergencyReveal 0.75s ease-out both;
        }

        .emergency-orb-one {
          animation: emergencyDriftOne 8s ease-in-out infinite;
        }

        .emergency-orb-two {
          animation: emergencyDriftTwo 9s ease-in-out infinite;
        }

        .emergency-icon {
          animation: emergencyIconPulse 2.4s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .emergency-card {
            animation: emergencyReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 35%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .emergency-card,
          .emergency-orb-one,
          .emergency-orb-two,
          .emergency-icon {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
