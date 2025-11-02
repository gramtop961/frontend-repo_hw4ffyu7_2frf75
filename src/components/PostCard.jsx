export default function PostCard({ post }) {
  return (
    <article className="group rounded-xl border border-gray-200 overflow-hidden bg-white">
      <a href={post.href} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <time dateTime={post.datetime}>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h3 className="mt-1.5 text-lg font-semibold text-gray-900">
          <a href={post.href} className="hover:underline">
            {post.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>
        <a
          href={post.href}
          className="mt-4 inline-block text-sm font-medium text-gray-900 hover:underline"
          aria-label={`Read ${post.title}`}
        >
          Continue reading →
        </a>
      </div>
    </article>
  );
}
