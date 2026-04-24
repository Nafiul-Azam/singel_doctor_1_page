import { blogMockData } from "@/data/mock/blog.mock";

export async function getBlogPosts() {
  return blogMockData;
}

export async function getBlogPostBySlug(slug: string) {
  return blogMockData.find((post) => post.slug === slug) ?? null;
}
