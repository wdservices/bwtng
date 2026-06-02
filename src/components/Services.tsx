import React from 'react';
import { Smartphone, Globe, Cog, Brain, MessageSquare, Code, TrendingUp, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const services = [
  { icon: Globe,         title: "Web Development",       description: "Modern, responsive websites and web applications built for performance and conversions.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/web-development" },
  { icon: Smartphone,    title: "Mobile Apps",            description: "Native & cross-platform apps for iOS and Android with intuitive, beautiful UX.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/mobile-app-development" },
  { icon: Brain,         title: "AI Solutions",           description: "Intelligent tools and models to automate, enhance, and future-proof your workflow.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/services" },
  { icon: TrendingUp,    title: "SEO Services",           description: "Rank higher, get found faster. Data-driven SEO that drives real organic growth.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/seo-services" },
  { icon: MessageSquare, title: "AI Chatbots",            description: "Conversational AI that provides 24/7 customer support and deep engagement.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/services" },
  { icon: Palette,       title: "Branding",               description: "Distinctive brand identities that tell your story and captivate your audience.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/branding" },
  { icon: Cog,           title: "Custom Software",        description: "Tailored business solutions that eliminate inefficiencies and scale with you.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/services" },
  { icon: Code,          title: "Digital Transformation", description: "Complete modernization of your business infrastructure and digital processes.", iconBg: "bg-primary/10", iconColor: "text-primary", path: "/services" },
];

const Services = () => (
  <section id="services" className="py-32 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 font-display">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">End-to-end digital solutions that drive growth, innovation, and competitive advantage.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Link to={service.path}
                className="group glass-card rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 block h-full">
                <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 ${service.iconColor} group-hover:bg-primary/20 transition-colors`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
