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
    <article className="group rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg">
      <div className="space-y-4">
        {/* Category Badge */}
        <div className="inline-flex rounded-full bg-sky-100 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-sky-600">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-slate-600">
          {truncateText(post.excerpt, 100)}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <time className="text-xs font-medium uppercase text-slate-500">
            {formatDisplayDate(post.publishedAt)}
          </time>
          <Link
            href={`${ROUTES.blog}/${post.slug}`}
            className="inline-flex gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-sky-700 hover:gap-2.5"
          >
            Read
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
