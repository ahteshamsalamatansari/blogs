import { getBlogPosts, getAllTags } from '@/lib/mdx';
import BlogListClient from './BlogListClient';

export default function BlogListingPage() {
  const posts = getBlogPosts();
  const tagsData = getAllTags();
  const tags = tagsData.map(t => t.name);

  return <BlogListClient posts={posts} allTags={tags} />;
}
