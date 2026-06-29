import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, allPosts } from '@/data/blog-posts';
import { ArrowLeft, Calendar, Tag, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useBlogViews } from '@/hooks/useBlogViews';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const views = useBlogViews(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Helmet>
          <title>Post Not Found | Bluewaves Technology Blog</title>
          <meta name="robots" content="noindex" />
        </Helmet>
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

  const url = `https://www.bwtng.live/blog/${post.slug}`;
  const desc = post.excerpt || '';

  const otherPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${post.title} | Bluewaves Technology Blog`}</title>
        <meta name="description" content={desc} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {post.coverImage && <meta property="og:image" content={`https://www.bwtng.live${post.coverImage}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={desc} />
        {post.coverImage && <meta name="twitter:image" content={`https://www.bwtng.live${post.coverImage}`} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: desc,
            image: post.coverImage ? `https://www.bwtng.live${post.coverImage}` : undefined,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'Bluewaves Technology' },
            publisher: {
              '@type': 'Organization',
              name: 'Bluewaves Technology',
              logo: { '@type': 'ImageObject', url: 'https://www.bwtng.live/logo.png' },
            },
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <article className="max-w-4xl">
            {post.coverImage ? (
              <div className="mb-8 rounded-md overflow-hidden shadow-lg">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="mb-8 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-30">{post.title.charAt(0)}</span>
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>{views !== null ? views.toLocaleString() : '—'} views</span>
                </div>
                {post.category && (
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => (
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

            {post.excerpt && (
              <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <p className="text-lg text-gray-700 italic">
                  {post.excerpt}
                </p>
              </div>
            )}

            <div className="prose prose-lg max-w-none overflow-hidden">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">More Posts</h2>
              {otherPosts.length === 0 ? (
                <p className="text-sm text-gray-500">No other blog posts yet.</p>
              ) : (
                <div className="space-y-4">
                  {otherPosts.map((otherPost) => (
                    <Link
                      key={otherPost.slug}
                      to={`/blog/${otherPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        {otherPost.coverImage ? (
                          <div className="w-24 h-24 shrink-0 rounded-sm overflow-hidden bg-gray-100">
                            <img
                              src={otherPost.coverImage}
                              alt={otherPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ) : null}
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {otherPost.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {otherPost.date}
                          </p>
                          {otherPost.excerpt && (
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {otherPost.excerpt}
                            </p>
                          )}
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
