import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { BlogPost } from "@/types/blog.types";

type HomeBlogPreviewSectionProps = {
  posts: BlogPost[];
};

export function HomeBlogPreviewSection({ posts }: HomeBlogPreviewSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeader title="Health Tips and Blog" subtitle="Content section designed for future CMS and editorial workflows." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
