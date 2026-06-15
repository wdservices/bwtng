import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Palette, Check, Paintbrush, Type, Image, Layout, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const Branding: React.FC = () => {
  const features = [
    { icon: Paintbrush, title: 'Logo Design', description: 'Unique and memorable logo designs' },
    { icon: Type, title: 'Brand Identity', description: 'Complete brand identity systems' },
    { icon: Image, title: 'Visual Design', description: 'Stunning visual assets and graphics' },
    { icon: Layout, title: 'Brand Guidelines', description: 'Comprehensive brand style guides' },
    { icon: Zap, title: 'Brand Strategy', description: 'Strategic brand positioning and messaging' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Branding Services Nigeria | Logo Design & Brand Identity | Bluewaves Technology</title>
        <meta name="description" content="Professional branding services in Nigeria. Logo design, brand identity, visual design and brand strategy to make your business stand out." />
        <meta name="keywords" content="branding services Nigeria, logo design Nigeria, brand identity Nigeria, graphic design Port Harcourt" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/branding" />
        <meta property="og:title" content="Branding Services Nigeria | Logo Design & Brand Identity | Bluewaves Technology" />
        <meta property="og:description" content="Professional branding services in Nigeria including logo design, brand identity, visual design and brand strategy. Create a powerful brand that stands out in Nigeria's competitive market." />
        <meta property="og:url" content="https://www.bwtng.live/branding" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branding Services Nigeria | Logo Design & Brand Identity | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional branding services in Nigeria including logo design, brand identity, visual design and brand strategy. Create a powerful brand that stands out in Nigeria's competitive market." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">Branding</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">Branding Services</span> in Nigeria
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build a strong, memorable brand that stands out from the competition.
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
                'Logo design and refinement',
                'Complete brand identity development',
                'Visual brand system creation',
                'Brand guidelines and style guides',
                'Business card and stationery design',
                'Social media brand assets',
                'Brand strategy and positioning',
                'Brand voice and messaging',
                'Rebranding services'
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Brand?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create a powerful brand identity that resonates with your audience!
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

export default Branding;
