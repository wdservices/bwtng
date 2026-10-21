import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/portfolio' },
    { label: 'Products', path: '/digital-tools' },
    { label: 'Blog', path: '/blog' },
    { label: 'Academy', path: '/ai-builder-academy' },
    { label: 'About', path: '/about-us' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isMenuOpen
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand wordmark */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 group">
            <img src="/logo.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg transition-transform group-hover:scale-105" aria-hidden="true" />
            <span className="text-base sm:text-lg font-bold text-foreground font-display tracking-tight whitespace-nowrap">
              Bluewaves <span className="text-primary">Technology</span>
            </span>
          </Link>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`transition-colors whitespace-nowrap hover:text-foreground ${
                    active ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://sankofa-wing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              3D Museum <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button asChild size="sm" className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 transition-all hover:scale-[1.02]">
              <a href="/#start">Start a Project</a>
            </Button>
          </div>

          {/* Mobile menu button with 44px touch target */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-card/60 border border-border/60 hover:bg-card"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-foreground" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu drawer with accessible touch targets */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-4 pt-3 border-t border-border space-y-1.5 animate-fade-in bg-card/95 backdrop-blur-2xl rounded-2xl p-3 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center px-4 py-3 min-h-[44px] text-sm font-medium rounded-xl transition-colors ${
                    active
                      ? 'bg-primary/15 text-primary font-semibold border border-primary/25'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://sankofa-wing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 min-h-[44px] text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Sankofa 3D Museum</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </a>
            <div className="pt-2 px-1">
              <Button asChild className="w-full h-11 rounded-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" onClick={() => setIsMenuOpen(false)}>
                <a href="/#start">Start a Project</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
