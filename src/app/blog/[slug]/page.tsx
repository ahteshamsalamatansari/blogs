import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts, getRelatedPosts } from '@/lib/mdx';
import MdxContent from '@/components/MdxContent';
import TableOfContents from '@/components/TableOfContents';
import ScrollProgress from '@/components/ScrollProgress';
import BlogCard from '@/components/BlogCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const primaryTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'Philosophy';
  const relatedPosts = getRelatedPosts(slug, post.tags, 2);

  return (
    <div className="w-full">
      {/* Scroll indicator */}
      <ScrollProgress />

      {/* Article Header Container */}
      <section className="pt-12 pb-12 px-margin-mobile md:px-margin-desktop bg-surface-container-low/40 border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Back Button */}
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 mb-8 text-on-surface-variant hover:text-primary transition-colors duration-300 font-sans"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span className="text-[13px] font-bold uppercase tracking-wider">Back to Archive</span>
            </Link>

            {/* Tag */}
            <div className="mb-6">
              <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full tracking-widest uppercase font-sans">
                {primaryTag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-bold tracking-tight text-on-surface max-w-[840px] font-sans">
              {post.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-on-surface-variant/90 max-w-2xl font-sans">
              {post.subtitle}
            </p>

            {/* Author Block */}
            <div className="flex items-center justify-center gap-6 border-t border-b border-outline-variant/20 py-6 mt-8 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-container overflow-hidden flex items-center justify-center text-on-tertiary">
                  {post.authorImage ? (
                    <img src={post.authorImage} alt={post.authorName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  )}
                </div>
                <div className="text-left font-sans">
                  <p className="text-[13px] font-bold text-on-surface leading-tight">{post.authorName}</p>
                  <p className="text-[11px] text-on-surface-variant/80">{post.authorRole}</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-outline-variant/30"></div>
              <div className="text-left font-sans">
                <p className="text-[13px] font-bold text-on-surface leading-tight">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-[11px] text-on-surface-variant/80">{post.readingTime} min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      {post.coverImage && (
        <section className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
          <div className="relative w-full aspect-[16/9] md:h-[500px] overflow-hidden rounded-xl bg-surface-container shadow-sm mx-auto">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src={post.coverImage} 
              alt={post.title} 
            />
          </div>
        </section>
      )}

      {/* Reading Grid */}
      <section className="px-margin-mobile md:px-margin-desktop pb-20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* Article Text */}
          <article className="min-w-0 font-sans">
            <MdxContent source={post.content} />
            
            {/* Tags Footer */}
            <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-wrap items-center gap-3">
              <span className="text-on-surface-variant text-[13px] font-bold uppercase tracking-wider mr-2 flex items-center">
                <span className="material-symbols-outlined mr-1 text-[18px]">sell</span> Tags:
              </span>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-4 py-1.5 bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant text-xs font-semibold rounded uppercase tracking-wider transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-28 space-y-8">
              <TableOfContents content={post.content} />
              
              {/* Social Share Widget */}
              <div className="border-t border-outline-variant/30 pt-6">
                <p className="text-[12px] font-bold text-on-surface uppercase tracking-widest mb-4">
                  Share Article
                </p>
                <div className="flex gap-3">
                  <button 
                    className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer"
                    title="Share on Twitter"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                  <button 
                    className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer"
                    title="Email link"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Continue Reading / Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-low/30 border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Editorial</p>
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface font-sans">Continue Reading</h3>
              </div>
              <Link 
                href="/blog" 
                className="text-[14px] font-medium text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors duration-200"
              >
                View Archive 
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="group cursor-pointer">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container shadow-sm">
                      <img 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        src={relatedPost.thumbnailImage || relatedPost.coverImage} 
                        alt={relatedPost.title} 
                      />
                    </div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-2 inline-block">
                      {relatedPost.tags[0] || 'General'}
                    </span>
                    <h4 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors duration-300 mb-2 font-sans">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant/90 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
