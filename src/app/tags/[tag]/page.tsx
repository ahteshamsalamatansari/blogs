import Link from 'next/link';
import { getBlogPosts, getAllTags } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tagsData = getAllTags();
  return tagsData.map((tag) => ({
    tag: encodeURIComponent(tag.name),
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPosts = getBlogPosts();
  
  // Filter posts that include this tag (case-insensitive check)
  const filteredPosts = allPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Header */}
      <div className="mb-12 border-b border-outline-variant/30 pb-6">
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 mb-6 text-on-surface-variant hover:text-primary transition-colors font-sans"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="text-[13px] font-bold uppercase tracking-wider">Back to Archive</span>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-sans">
          Category: <span className="text-primary capitalize">{decodedTag}</span>
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base mt-2">
          Collection of essays written under the {decodedTag} category.
        </p>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface-container rounded-xl">
          <span className="material-symbols-outlined text-outline text-[48px] mb-4">article</span>
          <p className="text-on-surface-variant font-medium">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
}
