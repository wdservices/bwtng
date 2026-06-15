import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Zap, Check, Wrench, Database, Cloud, Lock, Cog } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const DigitalTools: React.FC = () => {
  const features = [
    { icon: Wrench, title: 'Custom Software', description: 'Tailored software solutions built specifically for your business workflows' },
    { icon: Database, title: 'Database Systems', description: 'Robust data management systems that scale with your business' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Cloud-native tools and infrastructure for maximum flexibility' },
    { icon: Lock, title: 'Security First', description: 'Enterprise-grade security built into every tool we develop' },
    { icon: Cog, title: 'API Integration', description: 'Seamless integration with your existing tools and third-party services' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Digital Tools | Custom Software & Business Automation | Bluewaves Technology</title>
        <meta name="description" content="Custom digital tools and software solutions. Business automation, database systems, cloud solutions and API integration for streamlining operations." />
        <meta name="keywords" content="digital tools, custom software, business automation, software development, API integration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/digital-tools" />
        <meta property="og:title" content="Digital Tools | Custom Software & Business Automation | Bluewaves Technology" />
        <meta property="og:description" content="Custom digital tools and software solutions. Business automation, database systems, cloud solutions and API integration to streamline your operations." />
        <meta property="og:url" content="https://www.bwtng.live/digital-tools" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Tools | Custom Software & Business Automation | Bluewaves Technology" />
        <meta name="twitter:description" content="Custom digital tools and software solutions. Business automation, database systems, cloud solutions and API integration to streamline your operations." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Tools & Custom Software",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Custom digital tools and software solutions including business automation, database systems, cloud solutions and API integration.",
      "url": "https://www.bwtng.live/digital-tools"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom <span className="text-primary">Digital Tools</span> for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline operations with custom software tools designed to solve your unique business challenges.
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
                'Custom business process automation tools',
                'Internal dashboards and reporting systems',
                'Inventory and supply chain management software',
                'CRM and customer management solutions',
                'Billing, invoicing and payment systems',
                'Data migration and system integration',
                'Workflow automation and task management',
                'Real-time monitoring and alerting tools',
                'Third-party API integration and connectors'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Tool Built?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's build the exact software your business needs to operate faster and smarter!
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

export default DigitalTools;
