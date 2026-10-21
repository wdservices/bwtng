import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allPosts, BlogPost } from '@/data/blog-posts';
import { FileText, Calendar, Tag, Eye, Clock, Search, ArrowRight, Sparkles } from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import { useBlogViews } from '@/hooks/useBlogViews';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BLUEWAVES_BLOG_IMAGE = '/image/blog/bluewaves-blog-bg.jpg';
const BLUEWAVES_BLOG_IMAGE_ABSOLUTE = 'https://www.bwtng.live/image/blog/bluewaves-blog-bg.jpg';

function PostViews({ slug }: { slug: string }) {
  const views = useBlogViews(slug);
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5" />
      {views !== null ? views.toLocaleString() : '—'}
    </span>
  );
}

function calculateReadingTime(content: string = ''): number {
  const clean = content.replace(/<[^>]*>/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    allPosts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Blog & Tech Insights | Bluewaves Technology Nigeria</title>
        <meta
          name="description"
          content="Engineering deep-dives, mobile app architecture, web design principles, AI automation, and product growth guides from Bluewaves Technology."
        />
        <meta
          name="keywords"
          content="tech blog Nigeria, web development blog Port Harcourt, AI blog Nigeria, software architecture, Bluewaves Technology insights"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/blog" />
        <meta property="og:title" content="Blog & Tech Insights | Bluewaves Technology Nigeria" />
        <meta
          property="og:description"
          content="Engineering deep-dives, mobile app architecture, web design principles, AI automation, and product growth guides from Bluewaves Technology."
        />
        <meta property="og:url" content="https://www.bwtng.live/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={BLUEWAVES_BLOG_IMAGE_ABSOLUTE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Tech Insights | Bluewaves Technology Nigeria" />
        <meta
          name="twitter:description"
          content="Engineering deep-dives, mobile app architecture, web design principles, AI automation, and product growth guides from Bluewaves Technology."
        />
        <meta name="twitter:image" content={BLUEWAVES_BLOG_IMAGE_ABSOLUTE} />
      </Helmet>

      {/* Top Header */}
      <Header />

      {/* Hero Header with Unique Bluewaves Background & Ambient Glow */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 sm:pt-36 pb-14 sm:pb-16">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src={BLUEWAVES_BLOG_IMAGE}
            alt="Bluewaves Technology Blog Background"
            className="w-full h-full object-cover filter blur-xs"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-5 sm:mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bluewaves Technology Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Insights, Architecture &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              Digital Craft
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Actionable architectural guides, development strategies, UI/UX breakdowns, and modern AI engineering
            insights published by the Bluewaves Technology team.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search 40+ engineering articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="container mx-auto px-4 max-w-6xl py-14">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
            <FileText className="h-14 w-14 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-300 mb-2">No matching articles found</h3>
            <p className="text-slate-500 max-w-md mx-auto text-sm mb-6">
              Try searching for different keywords such as "web design", "mobile app", "pricing", or "developer".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post: BlogPost) => {
              const readingTime = calculateReadingTime(post.content);
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  {/* Unified Bluewaves Blog Background Image Cover */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <img
                      src={BLUEWAVES_BLOG_IMAGE}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Category Pill Tag */}
                    {post.category && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-950/80 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    )}

                    {/* Reading Time Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-md">
                        <Clock className="w-3 h-3 text-sky-400" />
                        {readingTime} min read
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[11px] font-medium text-slate-400"
                          >
                            <Tag className="w-2.5 h-2.5 mr-1 text-slate-500" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 line-clamp-2 group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Footer Info */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <PostViews slug={post.slug} />
                        <span className="inline-flex items-center gap-1 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Blog;
