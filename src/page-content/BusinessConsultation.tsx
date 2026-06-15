import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Check, Lightbulb, BarChart3, Target, Shield, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BusinessConsultation: React.FC = () => {
  const features = [
    { icon: Lightbulb, title: 'Digital Strategy', description: 'Strategic roadmaps to transform and grow your business in the digital age' },
    { icon: BarChart3, title: 'Business Analysis', description: 'In-depth analysis of your operations to identify efficiency improvements' },
    { icon: Target, title: 'Growth Planning', description: 'Data-driven growth strategies tailored to your market and goals' },
    { icon: Shield, title: 'Risk Assessment', description: 'Identify and mitigate risks in your digital transformation journey' },
    { icon: TrendingUp, title: 'Performance Optimization', description: 'Streamline processes and maximize ROI across your business operations' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Business Consultation | Digital Strategy & Transformation | Bluewaves Technology</title>
        <meta name="description" content="Expert business consultation services. Digital strategy, business analysis, growth planning and digital transformation consulting for businesses." />
        <meta name="keywords" content="business consultation, digital strategy, business consulting, digital transformation consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/business-consultation" />
        <meta property="og:title" content="Business Consultation | Digital Strategy & Transformation | Bluewaves Technology" />
        <meta property="og:description" content="Expert business consultation services. Digital strategy, business analysis, growth planning and digital transformation consulting to accelerate your business growth." />
        <meta property="og:url" content="https://www.bwtng.live/business-consultation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Consultation | Digital Strategy & Transformation | Bluewaves Technology" />
        <meta name="twitter:description" content="Expert business consultation services. Digital strategy, business analysis, growth planning and digital transformation consulting to accelerate your business growth." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Business Consultation Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Expert business consultation services including digital strategy, business analysis, growth planning and digital transformation consulting.",
      "url": "https://www.bwtng.live/business-consultation"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Business Consultation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-primary">Business Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate the digital landscape with expert guidance that accelerates your business growth.
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
                'Digital transformation strategy and roadmapping',
                'Business process analysis and optimization',
                'Technology stack assessment and recommendations',
                'Market research and competitive analysis',
                'Revenue model and monetization strategy',
                'Operational efficiency consulting',
                'Change management and team training',
                'Vendor evaluation and technology procurement',
                'KPI development and performance tracking'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's develop a clear strategy that drives measurable results for your business!
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

export default BusinessConsultation;
