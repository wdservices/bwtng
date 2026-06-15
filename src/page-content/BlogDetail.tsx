import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Blog as BlogType, BlogStatus } from '@/types/admin';
import { firestoreApi } from '@/admin/services/firestoreService';
import { renderBlogContent } from '@/lib/renderBlogContent';
import { ArrowLeft, Calendar, Eye, Tag, MousePointerClick } from 'lucide-react';

const BlogDetail = () => {
  const params = useParams();
  const { id } = params;
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [otherPosts, setOtherPosts] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadBlog(id);
    }
  }, [id]);

  // Per-post SEO: title, description, canonical, OpenGraph + JSON-LD
  useEffect(() => {
    if (!blog) return;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const desc = (blog.content || '').replace(/[#*`>_~\-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 160);
    document.title = `${blog.title} | Bluewaves Technology Blog`;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => k !== 'content' && el!.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute('content', attrs.content);
    };
    upsertMeta('meta[name="description"]', { name: 'description', content: desc });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: blog.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: desc });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    if (blog.imageUrl) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: blog.imageUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    const ldId = 'blog-jsonld';
    document.getElementById(ldId)?.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = ldId;
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.title,
      description: desc,
      image: blog.imageUrl ? [blog.imageUrl] : undefined,
      datePublished: (blog as any).createdAt || undefined,
      author: { '@type': 'Organization', name: 'Bluewaves Technology' },
      publisher: {
        '@type': 'Organization',
        name: 'Bluewaves Technology',
        logo: { '@type': 'ImageObject', url: 'https://www.bwtng.live/logo.png' },
      },
      mainEntityOfPage: url,
    });
    document.head.appendChild(ld);
  }, [blog]);

  const loadBlog = async (blogId: string) => {
    try {
      setIsLoading(true);
      const [blogData, allBlogs] = await Promise.all([
        firestoreApi.getBlog(blogId),
        firestoreApi.getBlogs()
      ]);

      if (blogData) {
        setBlog(blogData);
        setOtherPosts(
          allBlogs
            .filter((post) => post.id !== blogId && post.status === BlogStatus.PUBLISHED)
            .slice(0, 5)
        );
        await firestoreApi.incrementBlogViews(blogId);
      } else {
        setOtherPosts([]);
      }
    } catch (error) {
      console.error('Error loading blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 inline mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <article className="max-w-4xl">
            {blog.imageUrl && (
              <div className="mb-8 rounded-md overflow-hidden shadow-lg">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {blog.createdDate || (blog.createdAt
                      ? new Date(blog.createdAt as any).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : 'No date')}
                  </span>
                </div>
                <div className="flex items-center">
                  <span>{blog.createdTime || 'No time'}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>{blog.views || 0} views</span>
                </div>
                <div className="flex items-center">
                  <MousePointerClick className="h-4 w-4 mr-2" />
                  <span>{blog.clicks || 0} clicks</span>
                </div>
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {blog.excerpt && (
              <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <p className="text-lg text-gray-700 italic">
                  {blog.excerpt}
                </p>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                {renderBlogContent(blog.content)}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">More Posts</h2>
              {otherPosts.length === 0 ? (
                <p className="text-sm text-gray-500">No other blog posts yet.</p>
              ) : (
                <div className="space-y-4">
                   {otherPosts.filter((p) => p.id).map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      onClick={() => {
                        if (post.id) {
                          firestoreApi.incrementBlogClicks(post.id);
                        }
                      }}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-24 h-24 shrink-0 rounded-sm overflow-hidden bg-gray-100 aspect-square">
                          {post.imageUrl ? (
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="!rounded-none !m-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                              No image
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.createdDate || 'No date'}
                          </p>
                          {post.excerpt ? (
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {post.excerpt}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
