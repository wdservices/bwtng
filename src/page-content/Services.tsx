import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Cpu, Zap, Palette, TrendingUp, MessageSquare, Users, Brain, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Professional, responsive websites that drive results for your business.',
      icon: Globe,
      path: '/web-development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      path: '/mobile-app-development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      icon: Cpu,
      path: '/ai-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Tools',
      description: 'Custom software tools to streamline your business operations.',
      icon: Zap,
      path: '/digital-tools',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      icon: Palette,
      path: '/ui-ux-design',
      color: 'from-rose-500 to-red-500'
    },
    {
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      icon: TrendingUp,
      path: '/seo-services',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business online.',
      icon: MessageSquare,
      path: '/digital-marketing',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Business Consulting',
      description: 'Expert advice to help your business thrive in the digital age.',
      icon: Users,
      path: '/business-consultation',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const allServices = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native & cross-platform apps for iOS and Android with beautiful UX.",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built to perform.",
      color: "text-primary",
    },
    {
      icon: Cpu,
      title: "Custom Software",
      description: "Tailored solutions designed to streamline your business operations.",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent tools and models to automate and enhance your workflow.",
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Chatbots",
      description: "Conversational AI that provides 24/7 customer support and engagement.",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Digital Transformation",
      description: "Complete modernization of your business infrastructure and processes.",
      color: "text-primary",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Our Services | Web, Mobile, AI & SEO Solutions | Bluewaves Technology Nigeria</title>
        <meta name="description" content="Explore Bluewaves Technology's services: web development, mobile apps, AI solutions, SEO, branding and digital transformation in Nigeria." />
        <meta name="keywords" content="web development Nigeria, mobile app development Nigeria, AI solutions Nigeria, digital services Port Harcourt" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/services" />
        <meta property="og:title" content="Our Services | Web, Mobile, AI & SEO Solutions | Bluewaves Technology Nigeria" />
        <meta property="og:description" content="Explore Bluewaves Technology's full range of services: web development, mobile app development, AI solutions, SEO, branding, chatbots and digital transformation for businesses in Nigeria." />
        <meta property="og:url" content="https://www.bwtng.live/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Web, Mobile, AI & SEO Solutions | Bluewaves Technology Nigeria" />
        <meta name="twitter:description" content="Explore Bluewaves Technology's full range of services: web development, mobile app development, AI solutions, SEO, branding, chatbots and digital transformation for businesses in Nigeria." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Bluewaves Technology Services",
              "description": "Premium digital solutions, software engineering, and automation services in Nigeria.",
              "url": "https://www.bwtng.live/services",
              "numberOfItems": 4,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Web Application Development",
                    "description": "High-performance web development utilizing cutting-edge technologies like React, Vite, Tailwind CSS, and Node.js.",
                    "image": "https://www.bwtng.live/image/web-dev-hero.jpg",
                    "provider": {
                      "@type": "Organization",
                      "name": "Bluewaves Technology",
                      "url": "https://www.bwtng.live"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Scalable native and cross-platform iOS and Android mobile apps designed to maximize user engagement and business efficiency.",
                    "image": "https://www.bwtng.live/image/mobile-app-hero.jpg",
                    "provider": {
                      "@type": "Organization",
                      "name": "Bluewaves Technology",
                      "url": "https://www.bwtng.live"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "AI Solutions & Automation",
                    "description": "Custom smart features, predictive analytics workflows, and specialized AI automation configurations built to streamline business systems.",
                    "image": "https://www.bwtng.live/image/ai-solutions-hero.jpg",
                    "provider": {
                      "@type": "Organization",
                      "name": "Bluewaves Technology",
                      "url": "https://www.bwtng.live"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "SEO & Branding Solutions",
                    "description": "Comprehensive search engine optimization strategies and modern visual brand identities designed to maximize corporate reach.",
                    "image": "https://www.bwtng.live/image/branding-hero.jpg",
                    "provider": {
                      "@type": "Organization",
                      "name": "Bluewaves Technology",
                      "url": "https://www.bwtng.live"
                    }
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What technologies does Bluewaves Technology use for web development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build modern, high-performance web applications using cutting-edge frameworks like React, Vite, Next.js, Tailwind CSS, and robust backend systems powered by Node.js."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to develop a custom mobile application?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline depends on the project scope and complexity. Typically, a standard custom cross-platform iOS and Android app takes between 4 to 12 weeks from initial design to deployment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate AI and automation features into existing business software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in integrating custom AI solutions, automation workflows, and predictive analytics modules seamlessly into your existing tech infrastructure to improve efficiency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do your digital services include post-launch support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide dedicated technical support, performance maintenance, security monitoring, and regular updates post-deployment to ensure your platform runs perfectly."
                  }
                }
              ]
            }
          ])}
        </script>
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              End-to-end digital solutions that drive growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group glass-card rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;
