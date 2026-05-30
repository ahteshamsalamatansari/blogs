'use strict';

import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const primaryTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'General';
  const displayImage = post.thumbnailImage || post.coverImage;
  
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="flex flex-col group h-full cursor-pointer bg-surface-container rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <article className="flex flex-col h-full">
        {/* Cover Image Container */}
        <div className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden shrink-0">
          {displayImage ? (
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={displayImage} 
              alt={post.title}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-outline text-[48px]">image</span>
            </div>
          )}
        </div>
        
        {/* Card Body */}
        <div className="p-8 flex flex-col flex-grow">
          <span className="text-[11px] font-medium text-secondary uppercase tracking-widest mb-3">
            {primaryTag}
          </span>
          <h4 className="text-[22px] font-bold text-on-surface leading-tight mb-4 flex-grow group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h4>
          <span className="text-[13px] font-medium text-primary border-b border-primary/20 pb-0.5 w-fit group-hover:border-primary transition-colors duration-200 font-sans">
            Read Article
          </span>
        </div>
      </article>
    </Link>
  );
}
