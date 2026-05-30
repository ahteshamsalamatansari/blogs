import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPostFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  thumbnailImage?: string;
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
  readingTime: number;
}

// Ensure the blog directory exists
function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

// Calculate reading time based on word count
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const cleanText = text.replace(/[#*`~_]/g, ''); // strip markdown formatting symbols
  const wordCount = cleanText.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Get all blog posts, sorted by date (newest first)
export function getBlogPosts(): BlogPost[] {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.mdx?$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      const { data, content } = matter(fileContent);
      const frontmatter = data as BlogPostFrontmatter;
      const readingTime = calculateReadingTime(content);
      
      return {
        slug,
        content,
        readingTime,
        title: frontmatter.title || 'Untitled Post',
        subtitle: frontmatter.subtitle || '',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        excerpt: frontmatter.excerpt || '',
        tags: frontmatter.tags || [],
        coverImage: frontmatter.coverImage || '',
        thumbnailImage: frontmatter.thumbnailImage || '',
        authorName: frontmatter.authorName || 'Ahtesham Ansari',
        authorRole: frontmatter.authorRole || 'AI Engineer',
        authorImage: frontmatter.authorImage || '',
      };
    });
    
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  ensureBlogDir();
  
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  let filePath = '';
  
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogPostFrontmatter;
  const readingTime = calculateReadingTime(content);
  
  return {
    slug,
    content,
    readingTime,
    title: frontmatter.title || 'Untitled Post',
    subtitle: frontmatter.subtitle || '',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    excerpt: frontmatter.excerpt || '',
    tags: frontmatter.tags || [],
    coverImage: frontmatter.coverImage || '',
    thumbnailImage: frontmatter.thumbnailImage || '',
    authorName: frontmatter.authorName || 'Ahtesham Ansari',
    authorRole: frontmatter.authorRole || 'AI Engineer',
    authorImage: frontmatter.authorImage || '',
  };
}

// Get related posts (sharing the same tags, excluding the current post)
export function getRelatedPosts(currentSlug: string, tags: string[], limit = 2): BlogPost[] {
  const posts = getBlogPosts();
  return posts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const matchCount = post.tags.filter(tag => tags.includes(tag)).length;
      return { post, matchCount };
    })
    .filter(item => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(item => item.post)
    .slice(0, limit);
}

// Get all tags and their post counts
export function getAllTags(): { name: string; count: number }[] {
  const posts = getBlogPosts();
  const tagCounts: { [key: string]: number } = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.keys(tagCounts).map(name => ({
    name,
    count: tagCounts[name]
  })).sort((a, b) => b.count - a.count);
}
