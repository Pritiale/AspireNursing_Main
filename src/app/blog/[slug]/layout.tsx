import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { createPageMetadata } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "aged care staffing blog",
      "aged care news Melbourne",
      "nursing agency insights",
    ],
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return children;
}
