import type { BlogPost } from "@/types/blog.types";

export const blogMockData: BlogPost[] = [
  {
    id: "b1",
    slug: "daily-heart-care-habits",
    title: "5 Daily Habits for Better Heart Health",
    excerpt:
      "Simple routines that reduce heart risk and improve long-term wellness.",
    coverImage: "/images/blog/blog-1.jpg",
    publishedAt: "2026-03-14",
    author: "Dr. Mahmud Rahman",
    category: "Cardiology",
    content:
      "Healthy heart habits include regular movement, balanced meals, hydration, stress management, and periodic checkups.",
  },
  {
    id: "b2",
    slug: "monsoon-skin-protection",
    title: "How to Protect Your Skin During Monsoon",
    excerpt:
      "Prevent fungal infection and irritation with practical skin-care steps.",
    coverImage: "/images/blog/blog-2.jpg",
    publishedAt: "2026-02-27",
    author: "Dr. Nabila Islam",
    category: "Dermatology",
    content:
      "Keep skin clean and dry, use breathable fabric, and avoid sharing personal items during humid weather.",
  },
  {
    id: "b3",
    slug: "when-to-book-a-checkup",
    title: "When Should You Book a General Checkup?",
    excerpt: "Know the signs and frequency of preventive health screening.",
    coverImage: "/images/blog/blog-3.jpg",
    publishedAt: "2026-01-11",
    author: "Dr. Samira Haque",
    category: "General Medicine",
    content:
      "Adults should consider yearly checkups, especially if they have family history or ongoing symptoms.",
  },
];
