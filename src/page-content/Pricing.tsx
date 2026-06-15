import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter Website',
      price: '₦650,000 – ₦800,000',
      description: 'Ideal for startups, personal brands, small businesses, and portfolios.',
      features: [
        '3–5 Pages',
        'Mobile Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        'WhatsApp Integration',
        'Fast Loading Optimization'
      ],
      popular: false,
      cta: 'Request Quote'
    },
    {
      name: 'Business Website',
      price: '₦850,000 – ₦1,500,000',
      description: 'Perfect for growing businesses, organizations, schools, hotels, and brands needing advanced functionality.',
      features: [
        '10+ Pages',
        'Advanced UI/UX Design',
        'SEO Optimization',
        'Blog Integration',
        'Admin Dashboard',
        'Booking/Inquiry Systems',
        'Google Analytics Setup',
        'Performance Optimization'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Custom Web Solutions',
      price: 'Custom Quote',
      description: 'Tailored for enterprises, startups, fintech platforms, SaaS products, marketplaces, booking systems, and complex digital solutions.',
      features: [
        'Fully Custom Development',
        'API Integrations',
        'Payment Gateway Integration',
        'User Authentication Systems',
        'Scalable Infrastructure',
        'Advanced Security',
        'Custom Dashboards',
        'Cloud Deployment',
        'Dedicated Support'
      ],
      popular: false,
      cta: 'Book a Consultation'
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Website Development Pricing Nigeria | Web & App Packages | Bluewaves Technology</title>
        <meta name="description" content="Transparent pricing for website development in Nigeria. Starter sites from ₦650K, business sites from ₦850K. Get a free quote today." />
        <meta name="keywords" content="website development cost Nigeria, web development pricing Nigeria, how much does a website cost Nigeria, software development pricing Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/pricing" />
        <meta property="og:title" content="Website Development Pricing Nigeria | Web & App Packages | Bluewaves Technology" />
        <meta property="og:description" content="Transparent pricing for website development in Nigeria. Starter sites from ₦650,000. Business websites from ₦850,000. Custom enterprise solutions. Get a quote from Bluewaves Technology." />
        <meta property="og:url" content="https://www.bwtng.live/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Pricing Nigeria | Web & App Packages | Bluewaves Technology" />
        <meta name="twitter:description" content="Transparent pricing for website development in Nigeria. Starter sites from ₦650,000. Business websites from ₦850,000. Custom enterprise solutions. Get a quote from Bluewaves Technology." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Development <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore professional website development packages in Nigeria. Choose the perfect plan for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl' : 'border-border'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border border-border hover:bg-muted/50'}`}>
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-8 rounded-2xl border border-border">
            <p className="text-muted-foreground text-lg">
              Pricing varies based on project requirements, features, integrations, timelines, and business goals. 
              Contact us for a tailored quote that fits your needs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Pricing;
