import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  Clock3,
  HeartPulse,
  MessageCircleQuestion,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

const featuredBlogs = [
  {
    title: "জ্বর হলে কখন ডাক্তার দেখাবেন?",
    category: "General Health",
    readTime: "৪ মিনিট",
    description:
      "জ্বর কখন সাধারণ, কখন সতর্ক হওয়া দরকার এবং কোন লক্ষণগুলো অবহেলা করা উচিত নয়—সহজভাবে জানুন।",
  },
  {
    title: "হার্ট ভালো রাখতে সহজ দৈনন্দিন অভ্যাস",
    category: "Lifestyle",
    readTime: "৫ মিনিট",
    description:
      "খাদ্যাভ্যাস, ঘুম, হাঁটা এবং stress control-এর মতো ছোট অভ্যাস দীর্ঘমেয়াদে health ভালো রাখতে সাহায্য করে।",
  },
  {
    title: "ডাক্তারের কাছে যাওয়ার আগে কী প্রস্তুতি নেবেন?",
    category: "Patient Guide",
    readTime: "৩ মিনিট",
    description:
      "আগের prescription, report, medicine list এবং symptoms note করে রাখলে doctor consultation অনেক সহজ হয়।",
  },
];

const healthTips = [
  "পর্যাপ্ত পানি পান করুন এবং দীর্ঘ সময় না খেয়ে থাকবেন না।",
  "ডাক্তারের পরামর্শ ছাড়া antibiotic বা painkiller খাবেন না।",
  "আগের prescription, test report এবং medicine list গুছিয়ে রাখুন।",
  "নিয়মিত ঘুম, হালকা হাঁটা এবং stress কমানো health-এর জন্য জরুরি।",
];

const qnaItems = [
  {
    question: "Clinic visit করার আগে appointment লাগবে কি?",
    answer:
      "Appointment নেওয়া ভালো। এতে clinic team সময় ঠিকভাবে manage করতে পারে এবং রোগীর waiting time কম হয়।",
  },
  {
    question: "আগের medical report সঙ্গে আনতে হবে?",
    answer:
      "হ্যাঁ। আগের prescription, lab report, X-ray বা medicine history থাকলে doctor আপনার health condition ভালোভাবে বুঝতে পারবেন।",
  },
  {
    question: "Appointment time miss করলে কী করব?",
    answer:
      "যত দ্রুত সম্ভব clinic-এ contact করুন। Available slot থাকলে clinic team আপনাকে reschedule করতে সাহায্য করবে।",
  },
  {
    question: "Medicine side effect নিয়ে doctor-কে জিজ্ঞেস করা যাবে?",
    answer:
      "অবশ্যই। Medicine dosage, side effect, কতদিন খাবেন এবং কোন খাবারের সাথে সমস্যা হতে পারে—এসব জিজ্ঞেস করা উচিত।",
  },
];

const featureCards = [
  {
    title: "Health Tips",
    text: "রোগীর জন্য সহজ daily health guidance.",
    Icon: HeartPulse,
  },
  {
    title: "Doctor Guidance",
    text: "Consultation-এর আগে helpful information.",
    Icon: Stethoscope,
  },
  {
    title: "Safe Advice",
    text: "Clear, ethical এবং easy-to-understand answer.",
    Icon: ShieldCheck,
  },
];

const journeyItems = [
  {
    title: "প্রশ্ন পড়ুন",
    text: "Common patient question দেখে নিজের doubt clear করুন।",
    Icon: MessageCircleQuestion,
  },
  {
    title: "Tips follow করুন",
    text: "Daily health habit গুলো সহজভাবে maintain করুন।",
    Icon: CheckCircle2,
  },
  {
    title: "Doctor consult করুন",
    text: "Personal medical advice-এর জন্য appointment নিন।",
    Icon: CalendarDays,
  },
];

export default function ReviewsPage() {
  return (
    <main className="qna-premium-page relative overflow-hidden bg-[#f5faf9] pb-24 text-slate-950 lg:pb-16">
      {/* Premium global background */}
      <div className="qna-orb-one pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="qna-orb-two pointer-events-none fixed -right-40 top-52 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />

      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f5faf9_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="qna-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/82 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
              <Sparkles className="h-3.5 w-3.5 motion-safe:animate-pulse" />
              Patient Education & Q&A
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.075em] text-slate-950 sm:text-5xl lg:text-6xl">
              রোগীর সাধারণ প্রশ্নের সহজ, পরিষ্কার ও বিশ্বস্ত উত্তর।
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Health tips, doctor visit guide এবং common Q&A এক জায়গায়। রোগী যেন
              সহজে পড়তে পারে, বুঝতে পারে এবং প্রয়োজন হলে appointment নিতে
              পারে—এই page সেটার জন্য cleanভাবে সাজানো।
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#health-blogs"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_22px_45px_-24px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_75px_-30px_rgba(16,185,129,0.78)] active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-sky-600 transition-all duration-500 group-hover:h-60 group-hover:w-60" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <BookOpenText className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110" />
                  Health Blogs
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>

              <Link
                href="#patient-qna"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/85 px-6 text-sm font-black text-slate-950 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:text-emerald-700 active:scale-[0.98]"
              >
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50 transition-all duration-500 group-hover:h-44 group-hover:w-44" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <MessageCircleQuestion className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  View Q&A
                </span>
              </Link>
            </div>
          </div>

          {/* Hero Right Card */}
          <div className="qna-hero-card relative">
            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/75 p-4 shadow-[0_35px_95px_-58px_rgba(15,23,42,0.8)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_42px_120px_-62px_rgba(16,185,129,0.58)] sm:p-5">
              <div className="qna-card-orb-one pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-100/90 blur-3xl" />
              <div className="qna-card-orb-two pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-100/90 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 text-white sm:p-7">
                <div className="qna-dark-orb pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200 backdrop-blur-xl transition-all duration-300 hover:rotate-6 hover:scale-110">
                    <CircleHelp className="h-6 w-6" />
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Updated Guide
                  </div>
                </div>

                <h2 className="relative mt-6 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                  Patient help center for better clinic experience.
                </h2>

                <p className="relative mt-3 text-sm leading-7 text-slate-300">
                  এই section রোগীকে appointment-এর আগে useful information দেয়।
                  তবে personal treatment-এর জন্য doctor consultation প্রয়োজন।
                </p>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "03", label: "Blogs" },
                    { value: "04", label: "Q&A" },
                    { value: "24/7", label: "Readable" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="qna-stat-card rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <p className="text-2xl font-black">{item.value}</p>
                      <p className="mt-1 text-xs font-bold text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {featureCards.map((item, index) => {
                  const Icon = item.Icon;

                  return (
                    <div
                      key={item.title}
                      className="qna-feature-card group relative flex items-start gap-3 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white/82 p-4 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.5)]"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/40" />

                      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
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
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section id="health-blogs" className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="qna-scroll-reveal mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Health Blogs
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                রোগীর জন্য ছোট, সহজ এবং useful health guide.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              প্রতিটি article এমনভাবে লেখা হয়েছে যেন রোগী দ্রুত পড়ে মূল বিষয়
              বুঝতে পারে।
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredBlogs.map((blog, index) => (
              <article
                key={blog.title}
                className="qna-blog-card qna-scroll-reveal group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-48px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_32px_90px_-52px_rgba(16,185,129,0.55)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-100/80 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/80" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-emerald-700">
                      {blog.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Clock3 className="h-3.5 w-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-emerald-700">
                      <BookOpenText className="h-5 w-5" />
                    </div>

                    <span className="text-4xl font-black tracking-[-0.08em] text-slate-100 transition-all duration-300 group-hover:text-emerald-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-slate-950">
                    {blog.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {blog.description}
                  </p>

                  <button
                    type="button"
                    className="group/read relative mt-6 inline-flex items-center overflow-hidden rounded-full bg-slate-50 px-4 py-2 text-xs font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100 transition-all duration-500 group-hover/read:h-28 group-hover/read:w-28" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover/read:translate-x-1" />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="qna-scroll-reveal mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/75 shadow-[0_28px_85px_-58px_rgba(15,23,42,0.75)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
              <div className="qna-dark-orb pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200 backdrop-blur-xl transition-all duration-300 hover:rotate-6 hover:scale-110">
                  <HeartPulse className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Quick Health Tips
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                  ছোট অভ্যাসগুলোই health journey সহজ করে।
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  এগুলো সাধারণ health reminder। Personal treatment বা medicine
                  decision নেওয়ার আগে doctor-এর সাথে consult করুন।
                </p>
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7">
              {healthTips.map((tip, index) => (
                <div
                  key={tip}
                  className="qna-tip-card group relative flex items-start gap-3 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-[0_24px_65px_-42px_rgba(16,185,129,0.5)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/45" />

                  <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
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

      {/* Patient Journey */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {journeyItems.map((item, index) => {
              const Icon = item.Icon;

              return (
                <div
                  key={item.title}
                  className="qna-journey-card qna-scroll-reveal group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_22px_65px_-50px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_85px_-52px_rgba(16,185,129,0.5)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-200/45" />

                  <div className="relative flex items-center justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-4xl font-black tracking-[-0.08em] text-slate-100 transition-all duration-300 group-hover:text-emerald-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-lg font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="patient-qna" className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="qna-scroll-reveal mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Patient Q&A
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Clinic visit করার আগে common প্রশ্ন ও উত্তর।
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Accordion style Q&A—user সহজে question খুলে answer পড়তে পারবে।
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Left CTA */}
            <div className="qna-scroll-reveal relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_28px_85px_-55px_rgba(15,23,42,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_105px_-55px_rgba(16,185,129,0.6)] sm:p-7">
              <div className="qna-dark-orb pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-200">
                  <CircleHelp className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">
                  Personal answer দরকার?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  এই Q&A general guidance দেয়। কিন্তু প্রতিটি patient condition
                  আলাদা। Personal medical advice-এর জন্য appointment নেওয়া
                  সবচেয়ে ভালো।
                </p>

                <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:bg-white/[0.14]">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-xs font-semibold leading-5 text-slate-300">
                      Emergency হলে Q&A না পড়ে সরাসরি clinic hotline বা nearest
                      hospital contact করুন।
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href={ROUTES.appointment}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.75)] active:scale-[0.98]"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-100 via-cyan-100 to-sky-100 transition-all duration-500 group-hover:h-52 group-hover:w-52" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      Book Appointment
                    </span>
                  </Link>

                  <Link
                    href={ROUTES.contact}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 active:scale-[0.98]"
                  >
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 transition-all duration-500 group-hover:h-52 group-hover:w-52" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                      Contact Clinic
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="grid gap-3">
              {qnaItems.map((item, index) => (
                <details
                  key={item.question}
                  className="qna-accordion qna-scroll-reveal group rounded-[1.6rem] border border-white/80 bg-white/80 p-4 shadow-[0_18px_55px_-44px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_-48px_rgba(16,185,129,0.45)] open:border-emerald-100 open:bg-white sm:p-5"
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

                  <div className="qna-answer mt-4 border-t border-slate-100 pt-4">
                    <p className="text-sm font-medium leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}

              <div className="qna-scroll-reveal rounded-[1.6rem] border border-emerald-100 bg-emerald-50/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    সব উত্তর patient education purpose-এর জন্য। Medicine, dosage
                    বা treatment change করার আগে doctor consultation জরুরি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes qnaReveal {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes qnaPop {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes qnaFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes qnaDriftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }

        @keyframes qnaDriftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-22px, -16px, 0) scale(1.08);
          }
        }

        .qna-reveal,
        .qna-scroll-reveal {
          animation: qnaReveal 0.8s ease-out both;
        }

        .qna-hero-card {
          animation:
            qnaReveal 0.85s ease-out 0.12s both,
            qnaFloat 6s ease-in-out 1s infinite;
        }

        .qna-stat-card,
        .qna-feature-card,
        .qna-blog-card,
        .qna-tip-card,
        .qna-journey-card,
        .qna-accordion {
          animation: qnaPop 0.65s ease-out both;
        }

        .qna-orb-one,
        .qna-card-orb-one,
        .qna-dark-orb {
          animation: qnaDriftOne 9s ease-in-out infinite;
        }

        .qna-orb-two,
        .qna-card-orb-two {
          animation: qnaDriftTwo 10s ease-in-out infinite;
        }

        .qna-answer {
          animation: qnaReveal 0.35s ease-out both;
        }

        @supports (animation-timeline: view()) {
          .qna-scroll-reveal {
            animation: qnaReveal both;
            animation-timeline: view();
            animation-range: entry 10% cover 34%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .qna-reveal,
          .qna-scroll-reveal,
          .qna-hero-card,
          .qna-stat-card,
          .qna-feature-card,
          .qna-blog-card,
          .qna-tip-card,
          .qna-journey-card,
          .qna-accordion,
          .qna-orb-one,
          .qna-orb-two,
          .qna-card-orb-one,
          .qna-card-orb-two,
          .qna-dark-orb,
          .qna-answer {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
