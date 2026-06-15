import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Blog as BlogType, BlogStatus } from '@/types/admin';
import { firestoreApi } from '@/admin/services/firestoreService';
import { FileText, Calendar, Eye, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setIsLoading(true);
      const allBlogs = await firestoreApi.getBlogs();
      const publishedBlogs = allBlogs.filter(blog => blog.status === BlogStatus.PUBLISHED);
      setBlogs(publishedBlogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Blog | Tech Insights, Web Dev & AI Tips | Bluewaves Technology Nigeria</title>
        <meta name="description" content="Read the latest articles on web development, mobile apps, AI, SEO and digital transformation from Bluewaves Technology — Nigeria's leading digital solutions company." />
        <meta name="keywords" content="tech blog Nigeria, web development blog Port Harcourt, AI blog Nigeria, software development tips Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/blog" />
        <meta property="og:title" content="Blog | Tech Insights, Web Dev & AI Tips | Bluewaves Technology Nigeria" />
        <meta property="og:description" content="Read the latest articles on web development, mobile apps, AI, SEO and digital transformation from Bluewaves Technology — Nigeria's leading digital solutions company." />
        <meta property="og:url" content="https://www.bwtng.live/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Tech Insights, Web Dev & AI Tips | Bluewaves Technology Nigeria" />
        <meta name="twitter:description" content="Read the latest articles on web development, mobile apps, AI, SEO and digital transformation from Bluewaves Technology — Nigeria's leading digital solutions company." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, news, and updates from our team
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter((b) => b.id).map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.id}`}
                onClick={() => {
                  if (blog.id) {
                    firestoreApi.incrementBlogClicks(blog.id);
                  }
                }}
                className="group bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {blog.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags?.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {blog.createdDate || (blog.createdAt ? new Date(blog.createdAt as any).toLocaleDateString() : 'No date')}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{blog.views || 0} views</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
