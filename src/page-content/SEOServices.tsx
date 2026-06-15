import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, Check, Search, Target, BarChart3, Users, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const SEOServices: React.FC = () => {
  const features = [
    { icon: Search, title: 'Keyword Research', description: 'Find the best keywords to target your audience' },
    { icon: Target, title: 'On-Page SEO', description: 'Optimize your website content and structure' },
    { icon: BarChart3, title: 'Analytics', description: 'Track performance and measure results' },
    { icon: Users, title: 'Local SEO', description: 'Rank in local searches in your area' },
    { icon: Zap, title: 'Technical SEO', description: 'Improve site speed and technical performance' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>SEO Services | Rank Higher on Google | Bluewaves Technology</title>
        <meta name="description" content="Professional SEO services. Technical SEO, keyword research, on-page optimization, link building and local SEO for businesses." />
        <meta name="keywords" content="SEO services, SEO company, search engine optimization, local SEO, Google ranking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/seo-services" />
        <meta property="og:title" content="SEO Services | Rank Higher on Google | Bluewaves Technology" />
        <meta property="og:description" content="Professional SEO services to grow your online visibility. Technical SEO, keyword research, on-page optimization, link building and local SEO for businesses." />
        <meta property="og:url" content="https://www.bwtng.live/seo-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services | Rank Higher on Google | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional SEO services to grow your online visibility. Technical SEO, keyword research, on-page optimization, link building and local SEO for businesses." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Professional SEO services to improve search rankings, drive organic traffic and grow online visibility for businesses.",
      "url": "https://www.bwtng.live/seo-services"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">SEO Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">SEO Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Improve your search rankings, drive organic traffic, and grow your business online.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* What We Offer */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="space-y-4">
              {[
                'Comprehensive SEO audit and analysis',
                'Keyword research and strategy',
                'On-page optimization',
                'Technical SEO improvements',
                'Local SEO for your area',
                'Content strategy and optimization',
                'Link building services',
                'Monthly reporting and analytics',
                'Google Business Profile optimization'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Rank Higher?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's improve your search rankings and drive more organic traffic to your website!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SEOServices;
