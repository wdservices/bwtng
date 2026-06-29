import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about-us' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Academy', path: '/ai-builder-academy' },
    { label: 'Book', path: '/ship-it-right' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQs', path: '/faqs' },
  ];

  const serviceItems = [
    { label: 'Web Development', path: '/web-development' },
    { label: 'Mobile App Development', path: '/mobile-app-development' },
    { label: 'SEO Services', path: '/seo-services' },
    { label: 'Branding', path: '/branding' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || isMenuOpen
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt="" className="w-9 h-9 object-contain rounded-lg" aria-hidden="true" />
            <span className="text-lg font-bold text-foreground tracking-tight font-display">
              Bluewaves <span className="text-primary">Technology</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-xl shadow-xl py-2 min-w-[200px] z-50">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.label}
                            to={service.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://asemi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Asemi
            </a>
            <div className="w-px h-5 bg-border mx-2" />
            <Link to="/blog">
              <Button size="sm" className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 glow-sm">
                Blog
              </Button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button className="text-foreground p-1" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 pt-4 border-t border-border space-y-1 animate-fade-in bg-background/95 backdrop-blur-xl rounded-b-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.label}
                        to={service.path}
                        className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://asemi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Asemi
            </a>
            <div className="pt-2">
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Blog</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
