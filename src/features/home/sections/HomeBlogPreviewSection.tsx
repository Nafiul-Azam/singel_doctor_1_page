import { BookOpenText, HeartPulse, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { BlogPost } from "@/types/blog.types";

type HomeBlogPreviewSectionProps = {
  posts: BlogPost[];
};

export function HomeBlogPreviewSection({ posts }: HomeBlogPreviewSectionProps) {
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#f5fbff] py-10 sm:py-12 md:py-16">
      {/* Soft medical background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(45,212,191,0.13),transparent_28%),radial-gradient(circle_at_70%_90%,rgba(16,185,129,0.09),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.82),rgba(236,254,255,0.88))]" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl">
            <BookOpenText className="h-4 w-4" />
            Health Tips
          </div>

          <SectionHeader
            title="স্বাস্থ্য সচেতনতা ও প্রয়োজনীয় টিপস"
            subtitle="রোগীদের জন্য সহজ ভাষায় স্বাস্থ্য পরামর্শ, চিকিৎসা সচেতনতা এবং প্রয়োজনীয় blog content এখানে দেখানো হবে।"
          />
        </div>
      </Container>
    </section>
  );
}
