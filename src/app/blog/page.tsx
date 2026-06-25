import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { blogPosts, formatBlogDate } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <PageBanner
        eyebrow="Insights & Updates"
        title="Blog"
        description="Articles and news from our aged care specialist team."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <p className="text-center text-lg text-brand-muted">
              We are preparing content for this page. Check back soon for aged care
              staffing insights, team stories, and industry updates.
            </p>
          ) : (
            <ul className="space-y-6">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <article className="rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-red">
                      <span>{post.category}</span>
                      <span className="text-brand-border">|</span>
                      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-brand-blue-dark">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-blue">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-brand-muted">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                    >
                      Read article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
