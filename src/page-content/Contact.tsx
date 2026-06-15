import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const ContactPage: React.FC = () => {
  const whatsappUrl = "https://wa.me/2347051551543";

  const contactItems = [
    { icon: Mail, label: "Email", value: "info@bwtng.live", href: "mailto:info@bwtng.live", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "08108510085", color: "text-primary" },
    { icon: MessageCircle, label: "WhatsApp", value: "07051551543", href: whatsappUrl, color: "text-primary" },
    { icon: MapPin, label: "Address", value: "Road 12, First Avenue, Ada George, Port Harcourt, Nigeria", color: "text-primary" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Bluewaves Technology | Get a Free Quote | Port Harcourt Nigeria</title>
        <meta name="description" content="Contact Bluewaves Technology for web development, mobile apps, AI solutions, SEO and branding services in Port Harcourt, Nigeria." />
        <meta name="keywords" content="contact Bluewaves Technology, web developer Port Harcourt phone number, software company contact Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/contact" />
        <meta property="og:title" content="Contact Bluewaves Technology | Get a Free Quote | Port Harcourt Nigeria" />
        <meta property="og:description" content="Contact Bluewaves Technology for web development, mobile apps, AI solutions, SEO and branding services. Located in Ada George, Port Harcourt. Call 08108510085 or WhatsApp 07051551543." />
        <meta property="og:url" content="https://www.bwtng.live/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Bluewaves Technology | Get a Free Quote | Port Harcourt Nigeria" />
        <meta name="twitter:description" content="Contact Bluewaves Technology for web development, mobile apps, AI solutions, SEO and branding services. Located in Ada George, Port Harcourt. Call 08108510085 or WhatsApp 07051551543." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Reach out and let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon;
                    const Wrapper = item.href ? 'a' : 'div';
                    const wrapperProps = item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
                    
                    return (
                      <Wrapper
                        key={index}
                        {...wrapperProps}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.label}</h3>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 h-12 text-base glow-sm">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
