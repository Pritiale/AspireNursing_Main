export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
};

/** Demo blog posts — replace with CMS or MDX content later. */
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-aspire-nursing-blog",
    title: "Welcome to the Aspire Nursing Blog",
    excerpt:
      "Insights, updates, and aged care staffing guidance from our specialist nursing agency team.",
    content:
      "We are building this space to share aged care staffing insights, team stories, and practical guidance for providers and families. Check back soon for our first full articles.",
    publishedAt: "2026-06-01",
    author: "Aspire Nursing Team",
    category: "Company News",
  },
  {
    slug: "aged-care-staffing-what-providers-should-know",
    title: "Aged Care Staffing: What Providers Should Know",
    excerpt:
      "A quick overview of how specialist agencies support residential and home aged care providers.",
    content:
      "Reliable aged care staffing is about more than filling a shift — it is about matching qualified professionals to the right care environment. This article will be expanded with detailed guidance for facility managers and coordinators.",
    publishedAt: "2026-06-15",
    author: "Aspire Nursing Team",
    category: "Industry Insights",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
