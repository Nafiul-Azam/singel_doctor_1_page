"use client";

import { useMemo, useState, type FormEvent } from "react";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  UsersRound,
  FileText,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const timeSlots = [
  {
    label: "Morning",
    note: "Regular consultation",
    slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
  },
  {
    label: "Evening",
    note: "Most preferred",
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
  "h-12 w-full rounded-2xl border border-slate-200/80 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100";

const labelClassName =
  "mb-2 block text-[11px] font-black uppercase tracking-[0.14em] text-slate-500";

const infoItems = [
  {
    title: "Doctor Consultation",
    text: "রোগীর সমস্যা শুনে পরিষ্কার treatment guidance দেওয়া হবে।",
    Icon: Stethoscope,
  },
  {
    title: "Secure Booking",
    text: "আপনার appointment request clinic team review করবে।",
    Icon: ShieldCheck,
  },
  {
    title: "Follow-up Friendly",
    text: "প্রয়োজনে follow-up visit বা report review করা যাবে।",
    Icon: HeartPulse,
  },
];

export function AppointmentHeroSection() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate);
  const [selectedSlot, setSelectedSlot] = useState("");

  const selectedSlotLabel = useMemo(() => {
    if (!selectedSlot) return "এখনো কোনো slot select করা হয়নি";
    return selectedSlot;
  }, [selectedSlot]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      patientName: formData.get("patientName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      age: formData.get("age"),
      gender: formData.get("gender"),
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
    <section className="appointment-page relative overflow-hidden bg-[#f5faf9] pb-24 text-slate-950 lg:pb-16">
      <PageBanner
        title="Book an Appointment"
        description="Choose your preferred date and time slot. Our clinic team will confirm your appointment as soon as possible."
      />

      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Premium moving background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.14),transparent_28%)]" />
        <div className="appointment-orb-one pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="appointment-orb-two pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          {/* Left Realistic Info Panel */}
          <aside className="appointment-reveal relative">
            <div className="appointment-sidebar sticky top-6 overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_36px_105px_-62px_rgba(16,185,129,0.58)] sm:p-6">
              <div className="appointment-orb-three pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                  <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
                  Quick Clinic Booking
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl">
                  Dr. Sarah Ahmed এর জন্য appointment request করুন।
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Patient information, visit type, date এবং available time slot
                  select করে booking request submit করুন।
                </p>

                <div className="mt-6 grid gap-3">
                  {infoItems.map((item, index) => {
                    const Icon = item.Icon;

                    return (
                      <div
                        key={item.title}
                        className="appointment-info-card group relative flex items-start gap-3 overflow-hidden rounded-[1.4rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-[0_24px_65px_-44px_rgba(16,185,129,0.45)]"
                        style={{ animationDelay: `${index * 90}ms` }}
                      >
                        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/40" />

                        <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="relative">
                          <h3 className="text-sm font-black text-slate-950">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Summary */}
                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-emerald-50/75 shadow-sm">
                  <div className="border-b border-emerald-100/80 px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
                      Booking Summary
                    </p>
                  </div>

                  <div className="grid gap-3 p-4">
                    <div className="group flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500">
                          Selected Date
                        </p>
                        <p className="text-sm font-black text-slate-950">
                          {selectedDate}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                        <Clock3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500">
                          Selected Slot
                        </p>
                        <p className="text-sm font-black text-slate-950">
                          {selectedSlotLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-amber-100 bg-amber-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-50 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-xs font-semibold leading-5 text-slate-700">
                      Emergency হলে form submit না করে সরাসরি clinic hotline-এ
                      call করুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Appointment Form */}
          <form
            onSubmit={handleSubmit}
            className="appointment-form-card appointment-reveal relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.78)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_36px_105px_-62px_rgba(14,165,233,0.56)] sm:p-6 lg:p-7"
          >
            <div className="appointment-orb-four pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-100/80 blur-3xl" />
            <div className="appointment-orb-five pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100/80 blur-3xl" />

            <div className="relative">
              {/* Form Header */}
              <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">
                    Appointment Request Form
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                    Patient Details
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    নিচের তথ্যগুলো পূরণ করুন। Slot select না করলে submit button
                    active হবে না।
                  </p>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open for Booking
                </div>
              </div>

              {/* Basic Info */}
              <div className="appointment-block rounded-[1.7rem] border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:bg-white hover:shadow-md sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      Basic Patient Information
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      রোগীর নাম, ফোন এবং basic details দিন।
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="appointment-field block">
                    <span className={labelClassName}>Patient Name</span>
                    <span className="relative block">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors duration-300" />
                      <input
                        name="patientName"
                        required
                        placeholder="রোগীর পূর্ণ নাম"
                        className={`${inputClassName} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="appointment-field block">
                    <span className={labelClassName}>Phone Number</span>
                    <span className="relative block">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+8801XXXXXXXXX"
                        className={`${inputClassName} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="appointment-field block">
                    <span className={labelClassName}>Email Optional</span>
                    <span className="relative block">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        name="email"
                        type="email"
                        placeholder="patient@email.com"
                        className={`${inputClassName} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="appointment-field block">
                    <span className={labelClassName}>Age Optional</span>
                    <input
                      name="age"
                      type="number"
                      min="1"
                      max="120"
                      placeholder="রোগীর বয়স"
                      className={inputClassName}
                    />
                  </label>

                  <label className="appointment-field block">
                    <span className={labelClassName}>Gender Optional</span>
                    <select
                      name="gender"
                      defaultValue=""
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="appointment-field block">
                    <span className={labelClassName}>Visit Type</span>
                    <select
                      name="visitType"
                      required
                      defaultValue=""
                      className={inputClassName}
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
              </div>

              {/* Date & Slot */}
              <div className="appointment-block mt-5 rounded-[1.7rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      Appointment Schedule
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      Date select করে available time slot choose করুন।
                    </p>
                  </div>
                </div>

                <label className="appointment-field block">
                  <span className={labelClassName}>Appointment Date</span>
                  <input
                    type="date"
                    value={selectedDate}
                    min={getTodayDate()}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setSelectedSlot("");
                    }}
                    className={inputClassName}
                  />
                </label>

                <div className="mt-5">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-500">
                        Available Time Slots
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        একটি slot select করুন।
                      </p>
                    </div>

                    <div className="w-fit rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
                      {selectedDate}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {timeSlots.map((group) => (
                      <div
                        key={group.label}
                        className="rounded-[1.4rem] border border-slate-100 bg-slate-50/70 p-3 transition-all duration-300 hover:bg-white sm:p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-emerald-700" />
                            <p className="text-sm font-black text-slate-950">
                              {group.label}
                            </p>
                          </div>

                          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-500">
                            {group.note}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                          {group.slots.map((slot) => {
                            const active = selectedSlot === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`group/slot relative h-11 overflow-hidden rounded-2xl border text-xs font-black transition-all duration-300 active:scale-[0.97] ${
                                  active
                                    ? "border-emerald-600 bg-emerald-600 text-white shadow-[0_15px_28px_-18px_rgba(5,150,105,0.9)]"
                                    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-sm"
                                }`}
                              >
                                <span
                                  className={`absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 group-hover/slot:h-20 group-hover/slot:w-20 ${
                                    active ? "bg-white/10" : "bg-emerald-100"
                                  }`}
                                />
                                <span className="relative z-10">{slot}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="appointment-block mt-5 rounded-[1.7rem] border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:bg-white hover:shadow-md sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      Patient Note
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      রোগীর সমস্যা বা short message লিখতে পারেন।
                    </p>
                  </div>
                </div>

                <label className="appointment-field block">
                  <span className={labelClassName}>Short Message Optional</span>
                  <span className="relative block">
                    <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" />
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="যেমন: জ্বর ৩ দিন ধরে, রিপোর্ট দেখাতে চাই..."
                      className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white py-3 pl-11 pr-4 text-sm font-semibold leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    />
                  </span>
                </label>
              </div>

              {/* Clinic Note */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="group flex items-center gap-3 rounded-[1.4rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50/60 hover:shadow-md">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
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

                <div className="group flex items-center gap-3 rounded-[1.4rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50/60 hover:shadow-md">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Confirmation
                    </p>
                    <p className="text-sm font-black text-slate-950">
                      Clinic team will call
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6 flex flex-col gap-4 rounded-[1.7rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-xs font-semibold leading-5 text-slate-500">
                    Submit করার পর clinic team confirmation call করবে।
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!selectedSlot}
                  className="group relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_18px_35px_-22px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none disabled:hover:translate-y-0"
                >
                  <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-56 group-hover:w-56" />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Send className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                    Submit Booking
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes appointmentReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes appointmentPop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes appointmentFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes appointmentDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes appointmentDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        .appointment-reveal {
          animation: appointmentReveal 0.8s ease-out both;
        }

        .appointment-sidebar {
          animation: appointmentFloat 6.5s ease-in-out 1s infinite;
        }

        .appointment-info-card,
        .appointment-block {
          animation: appointmentPop 0.65s ease-out both;
        }

        .appointment-orb-one,
        .appointment-orb-three,
        .appointment-orb-four {
          animation: appointmentDriftOne 9s ease-in-out infinite;
        }

        .appointment-orb-two,
        .appointment-orb-five {
          animation: appointmentDriftTwo 10s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .appointment-form-card,
          .appointment-sidebar {
            animation: appointmentReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .appointment-reveal,
          .appointment-sidebar,
          .appointment-info-card,
          .appointment-block,
          .appointment-orb-one,
          .appointment-orb-two,
          .appointment-orb-three,
          .appointment-orb-four,
          .appointment-orb-five,
          .appointment-form-card {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
