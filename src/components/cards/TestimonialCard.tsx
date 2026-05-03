import { Star } from "lucide-react";
import type { Review } from "@/types/review.types";

type TestimonialCardProps = {
  review: Review;
};

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <article className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg">
      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-300"
              }
            />
          ))}
        </div>

        {/* Message */}
        <blockquote className="text-sm leading-relaxed text-slate-700">
          &quot;{review.message}&quot;
        </blockquote>

        {/* Patient Name */}
        <footer className="border-t border-slate-200 pt-4">
          <p className="font-semibold text-slate-900">{review.patientName}</p>
          {review.patientTitle && (
            <p className="mt-1 text-xs text-slate-500">{review.patientTitle}</p>
          )}
        </footer>
      </div>
    </article>
  );
}
