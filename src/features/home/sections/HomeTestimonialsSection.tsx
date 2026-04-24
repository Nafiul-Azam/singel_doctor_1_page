import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Review } from "@/types/review.types";

type HomeTestimonialsSectionProps = {
  reviews: Review[];
};

export function HomeTestimonialsSection({ reviews }: HomeTestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeader title="Patient Reviews" subtitle="Testimonials can later come from verified users and admin moderation." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
