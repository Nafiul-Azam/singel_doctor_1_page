"use client";

import { useMemo, useState, type FormEvent } from "react";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const timeSlots = [
  {
    label: "Morning",
    slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
  },
  {
    label: "Evening",
    slots: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
  },
];

const visitTypes = [
  "General Consultation",
  "Follow-up Visit",
  "Prescription Review",
  "Report Review",
  "Emergency Guidance",
];

function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

const inputClassName =
  "h-11 w-full rounded-2xl border border-slate-200/80 bg-white/85 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70";

const labelClassName =
  "mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500";

export function AppointmentHeroSection() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate);
  const [selectedSlot, setSelectedSlot] = useState("");

  const selectedSlotLabel = useMemo(() => {
    if (!selectedSlot) return "No slot selected";
    return selectedSlot;
  }, [selectedSlot]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      patientName: formData.get("patientName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      visitType: formData.get("visitType"),
      date: selectedDate,
      timeSlot: selectedSlot,
      message: formData.get("message"),
    };

    console.log("Appointment Payload:", payload);

    // API ready:
    // await fetch("/api/appointments", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  }

  return (
    <section className="overflow-hidden bg-[#f7fafc] pb-24 lg:pb-16">
      <PageBanner
        title="Book an Appointment"
        description="Choose your preferred date and time slot. Our clinic team will confirm your appointment as soon as possible."
      />

      <div className="px-4 py-7 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          {/* Left Info Card */}
          <aside className="relative">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-200/35 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/72 p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.18)_52%,rgba(16,185,129,0.06))]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Quick Booking
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-4xl">
                  Book your visit with Dr. Sarah Ahmed.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[0.95rem] sm:leading-7">
                  Select a date, choose a time slot, and submit patient details.
                  The form is clean, API-ready, and suitable for admin schedule
                  integration.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-white/62 p-3.5 backdrop-blur-xl">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Stethoscope className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">
                        Single Doctor Care
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Personal consultation with clear treatment guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-white/62 p-3.5 backdrop-blur-xl">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Clock3 className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">
                        Flexible Time Slots
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Choose your preferred morning or evening appointment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-white/62 p-3.5 backdrop-blur-xl">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">
                        Confirmation Support
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Clinic team can confirm booking from admin panel.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/70 p-3.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="text-sm font-medium leading-6 text-slate-700">
                      Selected slot:{" "}
                      <span className="font-semibold text-slate-950">
                        {selectedSlotLabel}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Appointment Form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/76 p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-5 lg:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.2)_54%,rgba(14,165,233,0.06))]" />

            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Appointment Form
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                    Patient Details
                  </h2>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_-24px_rgba(15,23,42,0.9)]">
                  <CalendarDays className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClassName}>Patient Name</span>
                  <span className="relative block">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="patientName"
                      required
                      placeholder="Enter full name"
                      className={`${inputClassName} pl-11 pr-4`}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className={labelClassName}>Phone Number</span>
                  <span className="relative block">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+8801XXXXXXXXX"
                      className={`${inputClassName} pl-11 pr-4`}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className={labelClassName}>Email Optional</span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="patient@email.com"
                      className={`${inputClassName} pl-11 pr-4`}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className={labelClassName}>Visit Type</span>
                  <select
                    name="visitType"
                    required
                    defaultValue=""
                    className={`${inputClassName} px-4`}
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    {visitTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Date */}
              <div className="mt-5">
                <label className="block">
                  <span className={labelClassName}>Appointment Date</span>
                  <input
                    type="date"
                    value={selectedDate}
                    min={getTodayDate()}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setSelectedSlot("");
                    }}
                    className={`${inputClassName} px-4`}
                  />
                </label>
              </div>

              {/* Time Slots */}
              <div className="mt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Time Slot
                    </p>
                    <p className="mt-1 text-xs font-normal text-slate-500">
                      Choose one available slot
                    </p>
                  </div>

                  <div className="hidden rounded-full border border-slate-100 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 sm:block">
                    {selectedDate}
                  </div>
                </div>

                <div className="space-y-3">
                  {timeSlots.map((group) => (
                    <div
                      key={group.label}
                      className="rounded-[1.25rem] border border-slate-100 bg-slate-50/60 p-3"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-emerald-700" />
                        <p className="text-sm font-semibold text-slate-950">
                          {group.label}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                        {group.slots.map((slot) => {
                          const active = selectedSlot === slot;

                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`h-10 rounded-2xl border text-xs font-semibold transition-all duration-200 active:scale-[0.97] ${
                                active
                                  ? "border-emerald-600 bg-emerald-600 text-white shadow-[0_12px_26px_-22px_rgba(5,150,105,0.9)]"
                                  : "border-slate-200/70 bg-white/85 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <label className="mt-5 block">
                <span className={labelClassName}>Short Message Optional</span>
                <span className="relative block">
                  <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write patient problem or note..."
                    className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-11 pr-4 text-sm font-medium leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100/70"
                  />
                </span>
              </label>

              {/* Submit */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-normal leading-5 text-slate-500">
                  By submitting, your appointment request will be sent for
                  confirmation.
                </p>

                <button
                  type="submit"
                  disabled={!selectedSlot}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_16px_34px_-24px_rgba(15,23,42,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none disabled:hover:translate-y-0"
                >
                  <Send className="h-4 w-4" />
                  Submit Booking
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}