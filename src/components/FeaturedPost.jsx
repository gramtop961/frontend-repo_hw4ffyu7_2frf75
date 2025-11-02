export default function FeaturedPost({ post }) {
  if (!post) return null;
  return (
    <section aria-labelledby="featured-heading" className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h2 id="featured-heading" className="sr-only">
          Featured post
        </h2>
        <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
          <a href={post.href} className="block overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              width={1200}
              height={800}
              className="h-64 w-full object-cover md:h-full"
            />
          </a>
          <div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              <a href={post.href} className="hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
            <a
              href={post.href}
              className="mt-5 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
            >
              Read article
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
