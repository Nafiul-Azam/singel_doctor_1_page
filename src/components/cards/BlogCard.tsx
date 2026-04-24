import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { formatDisplayDate } from "@/lib/utils/date";
import { truncateText } from "@/lib/utils/format";
import type { BlogPost } from "@/types/blog.types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{post.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{truncateText(post.excerpt, 100)}</p>
      <p className="mt-3 text-xs text-slate-500">{formatDisplayDate(post.publishedAt)}</p>
      <Link href={`${ROUTES.blog}/${post.slug}`} className="mt-4 inline-flex text-sm font-medium text-sky-700">
        Read article
      </Link>
    </article>
  );
}
