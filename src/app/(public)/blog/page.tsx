import { PageBanner } from "@/components/shared/PageBanner";
import { BlogListSection } from "@/features/blog/sections/BlogListSection";
import { BlogSidebarSection } from "@/features/blog/sections/BlogSidebarSection";
import { getBlogPosts } from "@/services/blog.service";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageBanner
        title="Blog and Health Tips"
        description="Useful health guidance curated by our doctors."
      />
      <BlogListSection posts={posts} />
      <BlogSidebarSection />
    </>
  );
}
