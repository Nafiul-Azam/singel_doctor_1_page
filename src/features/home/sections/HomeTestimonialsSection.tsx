"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Review } from "@/types/review.types";

type HomeTestimonialsSectionProps = {
  reviews: Review[];
};

export function HomeTestimonialsSection({
  reviews,
}: HomeTestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const loopReviews = useMemo(() => {
    if (!reviews.length) return [];
    return [...reviews, ...reviews, ...reviews];
  }, [reviews]);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider || loopReviews.length === 0) return;

    const speed = 0.45;

    const animate = () => {
      if (!isPausedRef.current && !isDraggingRef.current) {
        slider.scrollLeft += speed;

        const resetPoint = slider.scrollWidth / 3;

        if (slider.scrollLeft >= resetPoint) {
          slider.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [loopReviews.length]);

  const scrollByCard = (direction: "left" | "right") => {
    const slider = scrollRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider) return;

    isPausedRef.current = true;
    isDraggingRef.current = true;
    setIsDragging(true);

    startXRef.current = event.clientX;
    startScrollLeftRef.current = slider.scrollLeft;

    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider || !isDraggingRef.current) return;

    const moveX = event.clientX - startXRef.current;
    slider.scrollLeft = startScrollLeftRef.current - moveX;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDragging(false);

    window.setTimeout(() => {
      isPausedRef.current = false;
    }, 600);
  };

  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-10 sm:py-12 md:py-16">
      {/* Premium soft background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(45,212,191,0.15),transparent_28%),radial-gradient(circle_at_70%_90%,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.82),rgba(236,254,255,0.88))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.065)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
            <MessageSquareQuote className="h-4 w-4" />
            Patient Reviews
          </div>

          <SectionHeader
            title="রোগীদের অভিজ্ঞতা ও আস্থা"
            subtitle="রোগীরা আমাদের চিকিৎসা সেবা, appointment process এবং doctor consultation সম্পর্কে কী বলছেন তা এখানে দেখা যাবে।"
          />
        </div>
      </Container>
    </section>
  );
}
