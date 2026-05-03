import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleHelp,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const contactCards = [
  {
    title: "Call Clinic",
    value: "+8801XXXXXXXXX",
    text: "Appointment ও quick support-এর জন্য call করুন।",
    icon: Phone,
    href: "tel:+8801XXXXXXXXX",
  },
  {
    title: "Email Support",
    value: "hello@doctorclinic.com",
    text: "Report, query ও follow-up support-এর জন্য email করুন।",
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

const visitTips = [
  "Appointment time-এর ১০ মিনিট আগে clinic-এ আসুন।",
  "আগের prescription, report এবং medicine list সঙ্গে আনুন।",
  "Emergency হলে form না পাঠিয়ে সরাসরি clinic hotline-এ call করুন।",
];

const qnaItems = [
  {
    question: "Appointment confirm হতে কত সময় লাগে?",
    answer:
      "Form submit করার পর clinic team আপনার phone number-এ contact করবে। Confirmation call পাওয়ার পর appointment final হবে।",
  },
  {
    question: "Report বা prescription নিয়ে আসতে হবে কি?",
    answer:
      "হ্যাঁ। আগের prescription, test report, X-ray বা medicine history থাকলে doctor আপনার condition ভালোভাবে বুঝতে পারবেন।",
  },
  {
    question: "Emergency হলে কী করব?",
    answer:
      "Emergency হলে contact form submit না করে সরাসরি clinic hotline বা nearest hospital emergency department-এ যোগাযোগ করুন।",
  },
  {
    question: "Follow-up query contact form দিয়ে পাঠানো যাবে?",
    answer:
      "হ্যাঁ। Follow-up query, report review বা appointment related question contact form দিয়ে পাঠানো যাবে।",
  },
];

const inputClassName =
  "h-12 w-full rounded-2xl border border-slate-200/80 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100";

const labelClassName =
  "mb-2 block text-[11px] font-black uppercase tracking-[0.14em] text-slate-500";

export default function ContactPage() {
  return (
    <main className="contact-premium-page relative overflow-hidden bg-[#f5faf9] pb-24 text-slate-950 lg:pb-16">
      {/* Premium global background */}
      <div className="contact-orb-one pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="contact-orb-two pointer-events-none fixed -right-40 top-52 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />

      {/* Hero + Contact Form */}
      <section className="relative px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f5faf9_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          {/* Left Info Panel */}
          <aside className="contact-reveal relative">
            <div className="sticky top-6 space-y-4">
              <div className="contact-left-card relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 p-5 shadow-[0_35px_95px_-60px_rgba(15,23,42,0.78)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_42px_120px_-64px_rgba(16,185,129,0.58)] sm:p-7">
                <div className="contact-card-orb-one pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-100/90 blur-3xl" />
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                    <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
                    Clinic Contact
                  </div>

                  <h1 className="mt-5 text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-5xl">
                    Dr. Sarah Ahmed&apos;s clinic-এর সাথে সহজে যোগাযোগ করুন।
                  </h1>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Appointment support, chamber information, follow-up query
                    এবং general healthcare question-এর জন্য নিচের form বা direct
                    contact option ব্যবহার করুন।
                  </p>

                  <div className="mt-6 grid gap-3">
                    {contactCards.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="contact-mini-card group relative flex items-start gap-3 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.52)]"
                          style={{ animationDelay: `${index * 90}ms` }}
                        >
                          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/45" />
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="relative min-w-0">
                            <p className="text-sm font-black text-slate-950">
                              {item.title}
                            </p>
                            <p className="mt-0.5 truncate text-sm font-bold text-slate-700">
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

                  <div className="mt-5 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                      <p className="text-sm font-bold leading-6 text-slate-700">
                        দ্রুত support পেতে আপনার নাম, phone number এবং preferred
                        appointment time লিখে পাঠান।
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="contact-scroll-reveal relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_-58px_rgba(16,185,129,0.5)] sm:p-6">
                <div className="contact-card-orb-two pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-sky-100/90 blur-3xl" />

                <div className="relative flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition-all duration-300 hover:rotate-6 hover:scale-110">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-base font-black text-slate-950">
                      Clinic Schedule
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Regular chamber hours
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 grid gap-2">
                  {scheduleItems.map((item) => (
                    <div
                      key={item.day}
                      className="flex flex-col gap-1 rounded-2xl bg-slate-50/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50/70 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-sm font-bold text-slate-600">
                        {item.day}
                      </span>
                      <span className="text-sm font-black text-slate-950">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="contact-form-shell contact-reveal relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/80 p-4 shadow-[0_35px_95px_-60px_rgba(15,23,42,0.78)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_42px_120px_-64px_rgba(14,165,233,0.56)] sm:p-6 lg:p-7">
            <div className="contact-form-orb-one pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-100/80 blur-3xl" />
            <div className="contact-form-orb-two pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100/80 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">
                    Send Message
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                    How can we help?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    নিচের form পূরণ করুন। Clinic support team যত দ্রুত সম্ভব
                    আপনার সাথে যোগাযোগ করবে।
                  </p>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Support Open
                </div>
              </div>

              <form className="grid gap-5">
                {/* Basic Info */}
                <div className="contact-block rounded-[1.8rem] border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:bg-white hover:shadow-md sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-950">
                        Patient Information
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        আপনার basic contact information দিন।
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block transition-all duration-300 focus-within:-translate-y-0.5">
                      <span className={labelClassName}>Full Name</span>
                      <span className="relative block">
                        <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          required
                          name="name"
                          placeholder="আপনার পূর্ণ নাম"
                          className={`${inputClassName} pl-11`}
                        />
                      </span>
                    </label>

                    <label className="block transition-all duration-300 focus-within:-translate-y-0.5">
                      <span className={labelClassName}>Phone Number</span>
                      <span className="relative block">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+8801XXXXXXXXX"
                          className={`${inputClassName} pl-11`}
                        />
                      </span>
                    </label>

                    <label className="block transition-all duration-300 focus-within:-translate-y-0.5 sm:col-span-2">
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
                  </div>
                </div>

                {/* Query */}
                <div className="contact-block rounded-[1.8rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <MessageSquareText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-950">
                        Message Details
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        কী বিষয়ে support দরকার তা select করে message লিখুন।
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <label className="block transition-all duration-300 focus-within:-translate-y-0.5">
                      <span className={labelClassName}>Query Type</span>
                      <select
                        name="queryType"
                        defaultValue=""
                        className={inputClassName}
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

                    <label className="block transition-all duration-300 focus-within:-translate-y-0.5">
                      <span className={labelClassName}>Message</span>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="যেমন: Appointment নিতে চাই, report দেখাতে চাই, follow-up query আছে..."
                        className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      />
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 rounded-[1.8rem] border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs font-semibold leading-5 text-slate-500">
                      Message পাঠানোর পর clinic team আপনার provided phone
                      number-এ contact করবে।
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_18px_35px_-22px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98]"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-56 group-hover:w-56" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Send className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                      Send Message
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>

      {/* Patient Visit Guide */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="contact-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
              <div className="contact-dark-orb pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200 backdrop-blur-xl transition-all duration-300 hover:rotate-6 hover:scale-110">
                  <Stethoscope className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Visit Guide
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                  Clinic visit করার আগে ছোট কিছু প্রস্তুতি।
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  এই simple guide follow করলে doctor consultation আরও smooth,
                  clear এবং useful হবে।
                </p>
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:p-7">
              {visitTips.map((tip, index) => (
                <div
                  key={tip}
                  className="contact-tip-card group relative flex items-start gap-3 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.52)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/45" />

                  <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                    <span className="text-xs font-black">0{index + 1}</span>
                  </div>

                  <p className="relative text-sm font-bold leading-6 text-slate-700">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="contact-scroll-reveal mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Contact Q&A
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Contact করার আগে common প্রশ্ন ও উত্তর।
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Patient যেন সহজে বুঝতে পারে কখন call করবে, কখন form submit করবে
              এবং কী তথ্য দিতে হবে।
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="contact-scroll-reveal relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_28px_85px_-55px_rgba(15,23,42,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_105px_-55px_rgba(16,185,129,0.6)] sm:p-7">
              <div className="contact-dark-orb pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200 transition-all duration-300 hover:rotate-6 hover:scale-110">
                  <CircleHelp className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">
                  জরুরি সাহায্য দরকার?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  Contact form general support-এর জন্য। Emergency হলে form না
                  পাঠিয়ে সরাসরি hotline বা nearest hospital contact করুন।
                </p>

                <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:bg-white/[0.14]">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-xs font-semibold leading-5 text-slate-300">
                      Chest pain, severe breathing problem, unconsciousness,
                      heavy bleeding হলে immediately emergency support নিন।
                    </p>
                  </div>
                </div>

                <Link
                  href="tel:+8801XXXXXXXXX"
                  className="group relative mt-6 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98]"
                >
                  <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-100 via-cyan-100 to-sky-100 transition-all duration-500 group-hover:h-52 group-hover:w-52" />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                    Call Clinic
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {qnaItems.map((item, index) => (
                <details
                  key={item.question}
                  className="contact-qna contact-scroll-reveal group rounded-[1.6rem] border border-white/80 bg-white/80 p-4 shadow-[0_18px_55px_-44px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_-48px_rgba(16,185,129,0.45)] open:border-emerald-100 open:bg-white sm:p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-open:bg-emerald-600 group-open:text-white">
                        <span className="text-xs font-black">0{index + 1}</span>
                      </div>

                      <h3 className="pt-2 text-sm font-black leading-6 text-slate-950 sm:text-base">
                        {item.question}
                      </h3>
                    </div>

                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-50 text-lg font-black text-slate-700 transition duration-300 group-open:rotate-45 group-open:bg-emerald-50 group-open:text-emerald-700">
                      +
                    </span>
                  </summary>

                  <div className="contact-answer mt-4 border-t border-slate-100 pt-4">
                    <p className="text-sm font-medium leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}

              <div className="contact-scroll-reveal rounded-[1.6rem] border border-emerald-100 bg-emerald-50/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    Form submit করার সময় phone number সঠিকভাবে দিন, কারণ clinic
                    team confirmation-এর জন্য call করবে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="clinic-map" className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="contact-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 p-4 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_36px_100px_-60px_rgba(16,185,129,0.52)] sm:p-5">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                Clinic Map
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Visit our chamber
              </h2>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
              <MapPin className="h-4 w-4 text-emerald-700" />
              Rangpur, Bangladesh
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-slate-100 bg-slate-100 shadow-sm">
            <iframe
              title="Clinic Location Map"
              src="https://www.google.com/maps?q=Rangpur%20Bangladesh&output=embed"
              className="h-[260px] w-full border-0 sm:h-[340px] lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes contactPop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes contactFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes contactDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes contactDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        .contact-reveal,
        .contact-scroll-reveal {
          animation: contactReveal 0.8s ease-out both;
        }

        .contact-left-card {
          animation:
            contactReveal 0.85s ease-out both,
            contactFloat 6.5s ease-in-out 1s infinite;
        }

        .contact-mini-card,
        .contact-block,
        .contact-tip-card,
        .contact-qna {
          animation: contactPop 0.65s ease-out both;
        }

        .contact-orb-one,
        .contact-card-orb-one,
        .contact-form-orb-one,
        .contact-dark-orb {
          animation: contactDriftOne 9s ease-in-out infinite;
        }

        .contact-orb-two,
        .contact-card-orb-two,
        .contact-form-orb-two {
          animation: contactDriftTwo 10s ease-in-out infinite;
        }

        .contact-answer {
          animation: contactReveal 0.35s ease-out both;
        }

        @supports (animation-timeline: view()) {
          .contact-scroll-reveal,
          .contact-form-shell {
            animation: contactReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal,
          .contact-scroll-reveal,
          .contact-left-card,
          .contact-mini-card,
          .contact-block,
          .contact-tip-card,
          .contact-qna,
          .contact-orb-one,
          .contact-orb-two,
          .contact-card-orb-one,
          .contact-card-orb-two,
          .contact-form-orb-one,
          .contact-form-orb-two,
          .contact-dark-orb,
          .contact-answer,
          .contact-form-shell {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
