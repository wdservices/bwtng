import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, allPosts, BlogPost } from '@/data/blog-posts';
import { ArrowLeft, Calendar, Tag, Eye, Clock, User, Share2, Sparkles, ChevronRight, MessageSquare } from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import { useBlogViews } from '@/hooks/useBlogViews';

const BLUEWAVES_BLOG_IMAGE = '/image/blog/bluewaves-blog-bg.jpg';
const BLUEWAVES_BLOG_IMAGE_ABSOLUTE = 'https://www.bwtng.live/image/blog/bluewaves-blog-bg.jpg';

function calculateReadingTime(content: string = ''): number {
  const clean = content.replace(/<[^>]*>/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  const views = useBlogViews(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
        <Helmet>
          <title>Post Not Found | Bluewaves Technology Blog</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center max-w-md py-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Article Not Found</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            The article you are searching for might have moved or the URL is incorrect. Explore our complete insights journal.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Insights
          </Link>
        </div>
      </div>
    );
  }

  const url = `https://www.bwtng.live/blog/${post.slug}`;
  const desc = post.excerpt || `${post.title} — insights and practical technology guides from Bluewaves Technology.`;
  const readingTime = calculateReadingTime(post.content);

  const otherPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>{`${post.title} | Bluewaves Technology Blog`}</title>
        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${post.title} | Bluewaves Technology`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={BLUEWAVES_BLOG_IMAGE_ABSOLUTE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Bluewaves Technology" />
        {post.category && <meta property="article:section" content={post.category} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Bluewaves Technology`} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={BLUEWAVES_BLOG_IMAGE_ABSOLUTE} />

        {/* Structured Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: desc,
            image: BLUEWAVES_BLOG_IMAGE_ABSOLUTE,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': url,
            },
            author: {
              '@type': 'Organization',
              name: 'Bluewaves Technology',
              url: 'https://www.bwtng.live',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Bluewaves Technology',
              url: 'https://www.bwtng.live',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.bwtng.live/logo.png',
              },
            },
          })}
        </script>
      </Helmet>

      {/* Hero Header with Unique Bluewaves Background Image */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-slate-900 pt-16 pb-16 lg:pb-20">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img
            src={BLUEWAVES_BLOG_IMAGE}
            alt="Bluewaves Technology Background"
            className="w-full h-full object-cover filter blur-xs"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="container relative mx-auto px-4 max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-300 font-medium truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.category && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                {post.category}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {readingTime} min read
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              {views !== null ? views.toLocaleString() : '—'} views
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author & Publish Date */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
              BW
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Bluewaves Editorial Team</div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3 h-3 text-slate-500" />
                <span>
                  Published on{' '}
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 items-start">
          {/* Article */}
          <article className="min-w-0">
            {/* Featured Image Canvas with Unified Bluewaves Technology Artwork */}
            <div className="relative mb-8 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={BLUEWAVES_BLOG_IMAGE}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                <span className="font-mono text-[11px] tracking-wider text-sky-300">
                  BLUEWAVES // PERSPECTIVES
                </span>
                <span className="text-slate-400 font-mono text-[11px]">BWTNG.LIVE</span>
              </div>
            </div>

            {/* Excerpt Lead Box */}
            {post.excerpt && (
              <div className="mb-10 p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed font-light">
                  "{post.excerpt}"
                </p>
              </div>
            )}

            {/* Article Content Render */}
            <div className="blog-content-body text-slate-300 text-base sm:text-lg leading-relaxed space-y-6">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h4:text-xl prose-h4:text-sky-300 prose-h4:mt-8 prose-h4:mb-3 prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1.5 prose-strong:text-white"
              />
            </div>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">
                    Related Tags:
                  </span>
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      <Tag className="w-3 h-3 mr-1 text-slate-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bluewaves Call-to-Action Box */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-500/30 shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Turn Ambitious Ideas Into Reality
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Ready to build your next web or mobile app?
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                    Bluewaves Technology designs and engineers scalable software platforms, AI automation systems, and high-performance mobile apps.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 text-center whitespace-nowrap"
                  >
                    Start a Project
                  </Link>
                  <a
                    href="https://wa.me/2347051551543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar / More Articles */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                More Insights
              </h3>

              <div className="space-y-4">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/blog/${other.slug}`}
                    className="group block p-3 -mx-3 rounded-xl hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="flex gap-3 items-start">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-800 bg-slate-950">
                        <img
                          src={BLUEWAVES_BLOG_IMAGE}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                          {other.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-500">
                          <span>
                            {new Date(other.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span>•</span>
                          <span>{calculateReadingTime(other.content)} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <Link
                  to="/blog"
                  className="flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Browse all 40+ articles</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
