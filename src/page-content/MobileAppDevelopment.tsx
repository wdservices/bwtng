import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Smartphone, Check, Zap, Palette, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const MobileAppDevelopment: React.FC = () => {
  const features = [
    { icon: Smartphone, title: 'iOS Development', description: 'Native iOS apps with Swift and SwiftUI' },
    { icon: Smartphone, title: 'Android Development', description: 'Native Android apps with Kotlin and Jetpack' },
    { icon: Zap, title: 'Cross-Platform', description: 'React Native and Flutter for both platforms' },
    { icon: Palette, title: 'Beautiful UI/UX', description: 'Intuitive and engaging user interfaces' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Built with security and performance in mind' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Mobile App Development Nigeria | iOS & Android Apps | Bluewaves Technology</title>
        <meta name="description" content="Custom mobile app development for iOS and Android in Nigeria. Native and cross-platform apps built by expert developers in Port Harcourt. React Native, Flutter, Swift and Kotlin." />
        <meta name="keywords" content="mobile app development Nigeria, iOS app development Nigeria, Android app development Nigeria, React Native developer Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/mobile-app-development" />
        <meta property="og:title" content="Mobile App Development Nigeria | iOS & Android Apps | Bluewaves Technology" />
        <meta property="og:description" content="Custom mobile app development for iOS and Android in Nigeria. Native and cross-platform apps built by expert developers in Port Harcourt. React Native, Flutter, Swift and Kotlin." />
        <meta property="og:url" content="https://www.bwtng.live/mobile-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Nigeria | iOS & Android Apps | Bluewaves Technology" />
        <meta name="twitter:description" content="Custom mobile app development for iOS and Android in Nigeria. Native and cross-platform apps built by expert developers in Port Harcourt. React Native, Flutter, Swift and Kotlin." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "areaServed": "Nigeria",
      "description": "Custom iOS and Android mobile app development using React Native, Flutter, Swift and Kotlin.",
      "url": "https://www.bwtng.live/mobile-app-development"
    }` }} />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Mobile App Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile App <span className="text-primary">Development</span> in Nigeria
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create powerful, user-friendly mobile applications for iOS and Android.
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
                'Native iOS and Android app development',
                'Cross-platform apps with React Native',
                'Flutter app development',
                'E-commerce mobile apps',
                'Social media and networking apps',
                'Utility and productivity apps',
                'App maintenance and updates',
                'App store optimization (ASO)'
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your App?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create the next big mobile application together!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
