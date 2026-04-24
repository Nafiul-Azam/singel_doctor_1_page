import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import type { Review } from "@/types/review.types";

type ReviewsListSectionProps = {
  reviews: Review[];
};

export function ReviewsListSection({ reviews }: ReviewsListSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <SectionHeader
          title="Patient Reviews"
          subtitle="This section can later be connected with verified review APIs."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
