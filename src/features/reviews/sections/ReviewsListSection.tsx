"use client";

import {
  MessageSquareQuote,
  Sparkles,
  CheckCircle2,
  Heart,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import type { Review } from "@/types/review.types";

type ReviewsListSectionProps = {
  reviews: Review[];
};

export function ReviewsListSection({ reviews }: ReviewsListSectionProps) {
  const marqueeReviews = [...reviews, ...reviews];

  return <section></section>;
}
