import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappUrl = 'https://wa.me/2347051551543';

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-5">
              <img src="/logo.png" alt="Bluewaves Technology" className="w-8 h-8 object-contain rounded-lg" />
              <span className="text-base font-bold text-foreground font-display">
                Bluewaves <span className="text-primary">Technology</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
              Bluewaves Technology is a leading digital solutions company in Nigeria providing web development,
              SEO services, branding, app development, and digital marketing solutions for businesses in
              Port Harcourt, Rivers State, and across Nigeria.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:info@bwtng.live"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" /> info@bwtng.live
              </a>
              <a href="mailto:hello.bluewavestech@gmail.com"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" /> hello.bluewavestech@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" /> 08108510085
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-3.5 w-3.5 text-primary shrink-0" /> WhatsApp: 07051551543
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> Ada George, Port Harcourt, Nigeria
              </div>
            </div>
          </div>

           {/* Quick Links */}
           <div>
             <h3 className="text-xs font-bold text-foreground mb-5 uppercase tracking-widest">Quick Links</h3>
             <ul className="space-y-2.5 text-sm">
               {[
                 { label: 'Home',         to: '/' },
                 { label: 'About Us',     to: '/about-us' },
                 { label: 'Services',     to: '/services' },
                 { label: 'Portfolio',    to: '/portfolio' },
                 { label: 'Pricing',      to: '/pricing' },
                 { label: 'Testimonials', to: '/testimonials' },
                 { label: 'FAQs',         to: '/faqs' },
                 { label: 'Contact',      to: '/contact' },
                 { label: 'Blog',         to: '/blog' },
                 { label: 'Admin Dashboard', to: '/admin/login' },
               ].map(item => (
                 <li key={item.label}>
                   <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                 </li>
               ))}
             </ul>
           </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-foreground mb-5 uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Web Development',        to: '/web-development' },
                { label: 'Mobile App Development', to: '/mobile-app-development' },
                { label: 'SEO Services',            to: '/seo-services' },
                { label: 'Branding',                to: '/branding' },
                { label: 'AI Solutions',            to: '/services' },
                { label: 'Custom Software',         to: '/services' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bluewaves Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
