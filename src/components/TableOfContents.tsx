'use strict';

'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

// Simple slugify function matching our heading id generation
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings from MDX string
  useEffect(() => {
    const headingRegex = /^(##|###)\s+(.*)$/gm;
    const items: TocItem[] = [];
    let match;

    // Use a clean version of content without code blocks to avoid false headings
    const contentWithoutCode = content.replace(/```[\s\S]*?```/g, '');

    while ((match = headingRegex.exec(contentWithoutCode)) !== null) {
      const level = match[1].length; // 2 for h2, 3 for h3
      const text = match[2].trim();
      const id = slugify(text);
      items.push({ text, id, level });
    }

    setHeadings(items);
  }, [content]);

  // Track scroll position to set active heading
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px', // Trigger when heading is in top portion of screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each heading element on the page
    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-4 select-none">
      <p className="text-[12px] font-bold text-on-surface uppercase tracking-widest border-b border-outline-variant/30 pb-2">
        Table of Contents
      </p>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={index}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(heading.id);
                }
              }}
              className={`block text-[13px] leading-relaxed transition-all duration-200 hover:text-primary ${
                activeId === heading.id
                  ? 'text-primary font-medium border-l border-primary pl-2 -ml-2'
                  : 'text-on-surface-variant/75 pl-0'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
