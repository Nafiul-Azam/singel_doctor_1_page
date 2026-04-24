import Link from "next/link";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  Clock3,
  HeartPulse,
  MessageCircleQuestion,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const featuredBlogs = [
  {
    title: "When should you visit a doctor for fever?",
    category: "General Health",
    readTime: "4 min read",
    description:
      "Learn when fever is normal, when it needs medical attention, and what signs should not be ignored.",
  },
  {
    title: "Simple daily habits for better heart health",
    category: "Lifestyle",
    readTime: "5 min read",
    description:
      "Small lifestyle changes can improve long-term health, energy, and overall wellness.",
  },
  {
    title: "How to prepare before a doctor appointment",
    category: "Patient Guide",
    readTime: "3 min read",
    description:
      "Know what information, reports, and symptoms you should prepare before meeting your doctor.",
  },
];

const healthTips = [
  "Drink enough water and avoid skipping meals.",
  "Do not take antibiotics without doctor advice.",
  "Keep previous prescriptions and reports organized.",
  "Sleep properly and avoid unnecessary stress.",
];

const qnaItems = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Yes, appointment booking is recommended so the doctor can manage time properly and reduce patient waiting time.",
  },
  {
    question: "Can I bring my previous medical reports?",
    answer:
      "Yes. Previous prescriptions, lab reports, X-rays, and medicine history help the doctor understand your condition better.",
  },
  {
    question: "What should I do if I miss my appointment time?",
    answer:
      "Contact the clinic as soon as possible. The clinic team can help you reschedule based on available slots.",
  },
  {
    question: "Can I ask about medicine side effects?",
    answer:
      "Yes. You should always ask the doctor about dosage, side effects, and how long you need to continue the medicine.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="overflow-hidden bg-[#f7fafc] pb-24 lg:pb-16">
        {/* Intro Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-sky-200/35 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Patient Education
              </div>

              <h1 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-4xl">
                Clear health guidance for everyday patient questions.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[0.95rem] sm:leading-7">
                Read simple health tips, appointment preparation guides, and
                common Q&A so patients can make better decisions before and
                after consultation.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#health-blogs"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-[0_16px_34px_-24px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]"
                >
                  <BookOpenText className="h-4 w-4" />
                  Read Blogs
                </Link>

                <Link
                  href="#patient-qna"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-300 active:scale-[0.98]"
                >
                  <MessageCircleQuestion className="h-4 w-4" />
                  View Q&A
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex items-start gap-3 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_45px_-36px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Health Tips
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Simple daily guidance for better health habits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_45px_-36px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Doctor Guidance
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Patient-friendly information before consultation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_45px_-36px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Safe Advice
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Clear, ethical, and easy-to-understand answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section id="health-blogs" className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Health Blogs
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Latest patient education topics
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Short, useful, and easy health articles for patients and families.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredBlogs.map((blog, index) => (
              <article
                key={blog.title}
                className="group overflow-hidden rounded-[1.65rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_-46px_rgba(15,23,42,0.62)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    {blog.readTime}
                  </span>
                </div>

                <div className="mt-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                  <BookOpenText className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {blog.description}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition group-hover:gap-2"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-slate-400">
                  Article #{String(index + 1).padStart(2, "0")}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-7xl rounded-[1.8rem] border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Quick Health Tips
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Small habits that help patients stay healthier.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                These are simple reminders. For personal treatment, always
                consult the doctor directly.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {healthTips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-slate-100 bg-slate-50/70 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="patient-qna" className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Patient Q&A
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              Common questions before visiting the clinic
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.65rem] border border-white/80 bg-slate-950 p-5 text-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.8)] sm:p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                <CircleHelp className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                Need a personal answer?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                General Q&A can help, but every patient condition is different.
                Book an appointment for personal medical advice.
              </p>

              <Link
                href="/appointment"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>

            <div className="grid gap-3">
              {qnaItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.35rem] border border-white/80 bg-white/78 p-4 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl open:border-emerald-100 open:bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-950">
                    <span>{item.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-700 transition group-open:rotate-45 group-open:bg-emerald-50 group-open:text-emerald-700">
                      +
                    </span>
                  </summary>

                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
