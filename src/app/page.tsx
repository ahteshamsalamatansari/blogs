import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const allPosts = getBlogPosts();
  
  // Find "The Soul of Space" as the featured post, or fall back to the first post
  const featuredPost = allPosts.find(p => p.slug === 'soul-of-space') || allPosts[0];
  
  // Get latest 3 posts excluding the featured post
  const latestPosts = allPosts
    .filter(p => p.slug !== featuredPost?.slug)
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface tracking-tighter leading-tight font-sans">
            Ideas, systems, technology, business, and the scattered observations collected while building things on the internet.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Exploring engineering, AI, design, startups, workflows, digital culture, and the strange mechanics behind modern work and online life.
          </p>
          <div className="pt-4">
            <Link 
              href="/blog" 
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg text-[14px] font-medium tracking-wide hover:bg-primary-container transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              Explore the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cover Section */}
      {featuredPost && (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-surface-container shadow-sm">
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                src={featuredPost.coverImage} 
                alt={featuredPost.title} 
              />
              {/* Overlay with gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 md:p-12">
                <div className="text-white max-w-xl">
                  <span className="bg-primary/95 text-on-primary px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-widest mb-4 inline-block select-none">
                    Featured Cover
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 group-hover:text-primary-container transition-colors font-sans">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm md:text-base opacity-90 font-sans line-clamp-2">
                    {featuredPost.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Article Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="flex justify-between items-end mb-12 border-b border-outline-variant/30 pb-4">
          <h3 className="text-xl md:text-2xl font-bold text-on-surface font-sans">Latest Stories</h3>
          <Link 
            href="/blog" 
            className="text-[14px] text-primary font-medium flex items-center gap-1 group transition-colors duration-200"
          >
            View All 
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        
        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-container rounded-xl">
            <span className="material-symbols-outlined text-outline text-[48px] mb-4">article</span>
            <p className="text-on-surface-variant font-medium">No articles found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
