import type { Review } from "@/types/review.types";

type TestimonialCardProps = {
  review: Review;
};

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-amber-500">{"*".repeat(review.rating)}</p>
      <p className="mt-3 text-sm text-slate-700">
        &quot;{review.message}&quot;
      </p>
      <p className="mt-4 text-sm font-semibold text-slate-900">
        {review.patientName}
      </p>
    </article>
  );
}
