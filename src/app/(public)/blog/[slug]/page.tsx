import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { formatDisplayDate } from "@/lib/utils/date";
import { getBlogPostBySlug } from "@/services/blog.service";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={post.title}
        description={`${post.author} - ${formatDisplayDate(post.publishedAt)}`}
      />
      <section className="py-10">
        <Container>
          <article className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
            {post.content}
          </article>
        </Container>
      </section>
    </>
  );
}
