import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Globe, Zap, CheckCircle } from "lucide-react";
import { Helmet } from 'react-helmet-async';


const AboutUs: React.FC = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served", color: "text-primary" },
    { icon: Award, value: "756+", label: "Projects Done", color: "text-primary" },
    { icon: Globe, value: "Global", label: "Reach", color: "text-primary" },
    { icon: Zap, value: "AI", label: "Expertise", color: "text-primary" },
  ];

  const points = [
    "Innovative AI-powered solutions",
    "Custom development expertise",
    "Comprehensive training programs",
    "End-to-end project delivery",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | Bluewaves Technology — Nigeria's Digital Innovation Company</title>
        <meta name="description" content="Bluewaves Technology is a leading software and digital solutions company in Port Harcourt, Nigeria. 500+ clients, 756+ projects. Meet our story and values." />
        <meta name="keywords" content="about Bluewaves Technology, software company Nigeria, tech company Port Harcourt, digital solutions Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/about-us" />
        <meta property="og:title" content="About Us | Bluewaves Technology — Nigeria's Digital Innovation Company" />
        <meta property="og:description" content="Bluewaves Technology is a leading software and digital solutions company in Port Harcourt, Nigeria. 500+ clients, 756+ projects. Meet our story and values." />
        <meta property="og:url" content="https://www.bwtng.live/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Bluewaves Technology — Nigeria's Digital Innovation Company" />
        <meta name="twitter:description" content="Bluewaves Technology is a leading software and digital solutions company in Port Harcourt, Nigeria. 500+ clients, 756+ projects. Meet our story and values." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Bluewaves Technology
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're passionate about creating digital solutions that make a real impact. 
                Since our inception, we've been at the forefront of technological innovation, 
                helping businesses harness the power of AI, mobile apps, and custom software.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of expert developers, AI specialists, and digital strategists work collaboratively to 
                deliver solutions that prepare your business for the future.
              </p>

              <div className="space-y-3">
                {points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">We constantly push boundaries to deliver cutting-edge solutions.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-muted-foreground">We never compromise on the quality of our work.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-4">Client Focus</h3>
                <p className="text-muted-foreground">Your success is our ultimate goal.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
