import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Check, Share2, Mail, BarChart3, Megaphone, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const DigitalMarketing: React.FC = () => {
  const features = [
    { icon: Megaphone, title: 'Social Media Marketing', description: 'Engage your audience and build community across all social platforms' },
    { icon: Mail, title: 'Email Marketing', description: 'Targeted email campaigns that nurture leads and drive conversions' },
    { icon: Search, title: 'PPC Advertising', description: 'Data-driven paid campaigns on Google, Facebook, Instagram and more' },
    { icon: Share2, title: 'Content Marketing', description: 'Strategic content that attracts, engages and converts your target audience' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Comprehensive performance tracking and actionable insights' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Digital Marketing | Social Media, SEO & PPC | Bluewaves Technology</title>
        <meta name="description" content="Professional digital marketing services. Social media marketing, email campaigns, PPC advertising, content marketing and analytics for businesses." />
        <meta name="keywords" content="digital marketing, social media marketing, PPC advertising, email marketing, content marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/digital-marketing" />
        <meta property="og:title" content="Digital Marketing | Social Media, SEO & PPC | Bluewaves Technology" />
        <meta property="og:description" content="Professional digital marketing services. Social media marketing, email campaigns, PPC advertising, content marketing and analytics to grow your business online." />
        <meta property="og:url" content="https://www.bwtng.live/digital-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing | Social Media, SEO & PPC | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional digital marketing services. Social media marketing, email campaigns, PPC advertising, content marketing and analytics to grow your business online." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Professional digital marketing services including social media marketing, email campaigns, PPC advertising, content marketing and analytics.",
      "url": "https://www.bwtng.live/digital-marketing"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Marketing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Grow your online presence, reach your audience, and drive measurable business results.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>

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

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="space-y-4">
              {[
                'Social media strategy and management',
                'Content creation and calendar planning',
                'Paid advertising on Google, Facebook and Instagram',
                'Email marketing automation and campaigns',
                'Influencer marketing and partnership outreach',
                'Brand awareness and lead generation campaigns',
                'Conversion rate optimization (CRO)',
                'Marketing analytics and performance reporting',
                'Competitor analysis and market positioning'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create a digital marketing strategy that drives real traffic, leads and sales!
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

export default DigitalMarketing;
