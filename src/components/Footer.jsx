export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">About</h4>
            <p className="mt-3 text-sm text-gray-600">
              MinimalBlog is a clean, mobile-first theme focused on readability and speed. Built with semantic HTML and accessible colors.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Categories</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Development</a></li>
              <li><a href="#" className="hover:underline">Productivity</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Subscribe</h4>
            <p className="mt-3 text-sm text-gray-600">Get the latest posts delivered to your inbox.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MinimalBlog. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
