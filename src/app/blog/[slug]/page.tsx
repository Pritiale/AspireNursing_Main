import Link from "next/link";
import { notFound } from "next/navigation";
import { formatBlogDate, getBlogPost } from "@/data/blog";

type Params = { slug: string };

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-brand-blue-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-[#1c3d5c]" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/80">
            <span>{post.category}</span>
            <span className="text-white/30">|</span>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/70">By {post.author}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-brand-muted">{post.content}</p>
          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
