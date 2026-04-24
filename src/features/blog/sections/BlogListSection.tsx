import { BlogCard } from "@/components/cards/BlogCard";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { BlogPost } from "@/types/blog.types";

type BlogListSectionProps = {
  posts: BlogPost[];
};

export function BlogListSection({ posts }: BlogListSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <SectionHeader
          title="Health Tips and Articles"
          subtitle="Blog grid can be replaced by CMS response without UI rewrite."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
