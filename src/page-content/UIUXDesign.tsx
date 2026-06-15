import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Palette, Check, PenTool, Layout, MousePointer, Layers, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const UIUXDesign: React.FC = () => {
  const features = [
    { icon: PenTool, title: 'Wireframing & Prototyping', description: 'Interactive wireframes and prototypes to visualize your product before development' },
    { icon: Layout, title: 'User Interface Design', description: 'Beautiful, pixel-perfect interfaces that align with your brand identity' },
    { icon: MousePointer, title: 'User Experience Research', description: 'Data-driven UX decisions based on real user behavior and testing' },
    { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries and design tokens for consistent products' },
    { icon: Eye, title: 'Usability Testing', description: 'Validate designs with real users to ensure intuitive navigation and flow' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>UI/UX Design Services | User Interface & Experience Design | Bluewaves Technology</title>
        <meta name="description" content="Professional UI/UX design services. Wireframing, prototyping, user interface design, UX research and design systems for web and mobile apps." />
        <meta name="keywords" content="UI/UX design, user interface design, UX research, app design, web design UX" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/ui-ux-design" />
        <meta property="og:title" content="UI/UX Design Services | User Interface & Experience Design | Bluewaves Technology" />
        <meta property="og:description" content="Professional UI/UX design services. We create intuitive, beautiful interfaces through wireframing, prototyping, UX research and design systems." />
        <meta property="og:url" content="https://www.bwtng.live/ui-ux-design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Services | User Interface & Experience Design | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional UI/UX design services. We create intuitive, beautiful interfaces through wireframing, prototyping, UX research and design systems." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UI/UX Design Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Professional UI/UX design services including wireframing, prototyping, user interface design, UX research and design systems for web and mobile applications.",
      "url": "https://www.bwtng.live/ui-ux-design"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">UI/UX Design</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">UI/UX Design</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create intuitive, beautiful digital experiences that users love and drive business results.
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
                'User research and persona development',
                'Information architecture and sitemap planning',
                'Low-fidelity and high-fidelity wireframing',
                'Interactive prototype development',
                'User interface design for web and mobile',
                'Design system and component library creation',
                'Usability testing and heuristic evaluation',
                'Responsive design for all screen sizes',
                'Design handoff and developer collaboration'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your User Experience?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's design interfaces that are not only beautiful but also intuitive and conversion-focused!
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

export default UIUXDesign;
