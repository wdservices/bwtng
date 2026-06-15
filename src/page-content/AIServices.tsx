import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Cpu, Check, Brain, Bot, LineChart, Workflow, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AIServices: React.FC = () => {
  const features = [
    { icon: Brain, title: 'Machine Learning', description: 'Custom ML models trained on your data for predictions and insights' },
    { icon: Bot, title: 'AI Chatbots', description: 'Intelligent conversational agents for customer support and engagement' },
    { icon: LineChart, title: 'Predictive Analytics', description: 'Data-driven forecasting to make smarter business decisions' },
    { icon: Workflow, title: 'Process Automation', description: 'AI-powered automation that eliminates repetitive manual tasks' },
    { icon: Sparkles, title: 'Generative AI', description: 'Custom generative AI solutions for content, images and more' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Services | Machine Learning, Chatbots & AI Solutions | Bluewaves Technology</title>
        <meta name="description" content="Professional AI services. Machine learning, AI chatbots, predictive analytics, process automation and generative AI solutions for businesses." />
        <meta name="keywords" content="AI services, machine learning, AI chatbot, artificial intelligence, predictive analytics, generative AI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/ai-services" />
        <meta property="og:title" content="AI Services | Machine Learning, Chatbots & AI Solutions | Bluewaves Technology" />
        <meta property="og:description" content="Professional AI services. Machine learning, AI chatbots, predictive analytics, process automation and generative AI solutions to transform your business." />
        <meta property="og:url" content="https://www.bwtng.live/ai-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services | Machine Learning, Chatbots & AI Solutions | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional AI services. Machine learning, AI chatbots, predictive analytics, process automation and generative AI solutions to transform your business." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & Machine Learning Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "description": "Professional AI services including machine learning, AI chatbots, predictive analytics, process automation and generative AI solutions.",
      "url": "https://www.bwtng.live/ai-services"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-medium">AI Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">AI Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Harness the power of artificial intelligence to automate, predict and transform your business operations.
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
                'Custom machine learning model development',
                'AI-powered chatbot and virtual assistant creation',
                'Predictive analytics and demand forecasting',
                'Natural language processing (NLP) solutions',
                'Computer vision and image recognition systems',
                'Recommendation engines and personalization',
                'AI workflow automation and orchestration',
                'Data pipeline and ML infrastructure setup',
                'AI strategy consulting and implementation'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Leverage AI for Your Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's explore how AI can automate your processes, reduce costs and unlock new opportunities!
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

export default AIServices;
