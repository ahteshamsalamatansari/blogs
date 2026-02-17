'use strict';

'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

interface BlogListClientProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogListClient({ posts, allTags }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Header */}
      <div className="mb-12 border-b border-outline-variant/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-sans">
            Editorial Archive
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base mt-2">
            Browse our full collection of architecture, design, and philosophy essays.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 pl-11 text-on-surface font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] select-none">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer select-none"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10 select-none">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedTag === null
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            All Categories
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6 text-[12px] font-bold text-on-surface-variant/80 uppercase tracking-widest">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
      </div>

      {/* Post Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-surface-container rounded-xl">
          <span className="material-symbols-outlined text-outline text-[48px] mb-4">search_off</span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No articles found</h3>
          <p className="text-on-surface-variant text-sm">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}
    </div>
  );
}
