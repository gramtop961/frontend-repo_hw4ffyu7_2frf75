import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import Footer from './components/Footer';

export default function App() {
  const posts = [
    {
      id: 1,
      title: 'Designing for Focus: A Guide to Minimal Interfaces',
      excerpt:
        'Minimalism is not about removing features; it is about removing friction. Here is how to design interfaces that help readers stay engaged.',
      date: 'Oct 21, 2025',
      datetime: '2025-10-21',
      readingTime: 5,
      image:
        'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 2,
      title: 'Typography Tips for Readable Blog Posts',
      excerpt:
        'Line length, contrast, and rhythm matter. These small tweaks can dramatically improve reading comfort on mobile and desktop.',
      date: 'Oct 18, 2025',
      datetime: '2025-10-18',
      readingTime: 4,
      image:
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 3,
      title: 'Speed First: Optimizing Images the Right Way',
      excerpt:
        'From modern formats to responsive sizes and lazy loading — practical steps to keep your blog fast and search-friendly.',
      date: 'Oct 10, 2025',
      datetime: '2025-10-10',
      readingTime: 6,
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
      href: '#',
    },
  ];

  const featured = {
    title: 'A Clean, AMP-Friendly Blogging Theme',
    excerpt:
      'Built for speed and clarity. This layout uses semantic HTML, responsive images, and minimal scripts—perfect for mobile-first reading.',
    date: 'Oct 24, 2025',
    datetime: '2025-10-24',
    readingTime: 3,
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <main id="articles">
        <FeaturedPost post={featured} />
        <section aria-labelledby="latest-heading" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h2 id="latest-heading" className="text-xl font-bold tracking-tight">Latest articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h2 className="text-xl font-bold tracking-tight">About this theme</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            This is a simple, mobile-first blog layout inspired by WordPress themes and AMP best practices. It favors semantic HTML, small
            UI footprints, accessible colors, and lazy-loaded media for fast page loads.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
