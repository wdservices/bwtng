export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  content: string;
}

const modules = import.meta.glob('./*.json', { eager: true }) as Record<string, { default: BlogPost }>;

const posts: BlogPost[] = Object.values(modules).map(m => {
  const p = m.default;
  return {
    ...p,
    coverImage: p.coverImage || '/image/blog/bluewaves-blog-bg.jpg',
  };
});

export const allPosts: BlogPost[] = posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const getPostBySlug = (slug: string | undefined): BlogPost | undefined =>
  allPosts.find(post => post.slug === slug);
