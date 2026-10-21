import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ExternalLink, Search, Sparkles, Globe, Smartphone,
  Layers, ArrowUpRight, ShieldCheck, Cpu, CheckCircle2,
  Filter, Rocket, Building2, Store, HeartPulse, BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Head as Helmet } from 'vite-react-ssg';
import { clientProjects, products, Product, ClientProject } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

type FilterType = 'all' | 'in-house' | 'client' | 'ai-3d' | 'mobile';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine items for unified filtering if desired
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (activeFilter === 'all' || activeFilter === 'in-house') return true;
      if (activeFilter === 'ai-3d' && (item.tags?.some((t) => t.includes('AI') || t.includes('WebGL') || t.includes('Three.js')) || item.category.includes('AI') || item.category.includes('Immersive'))) return true;
      if (activeFilter === 'mobile' && (item.tags?.some((t) => t.includes('Mobile') || t.includes('Android')) || item.category.includes('Mobile') || item.slug === 'herbalstrength')) return true;
      return false;
    });
  }, [activeFilter, searchQuery]);

  const filteredClients = useMemo(() => {
    if (activeFilter === 'in-house') return [];
    return clientProjects.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (activeFilter === 'all' || activeFilter === 'client') return true;
      if (activeFilter === 'mobile' && item.slug === 'mega-vantage-apartments') return true;
      return false;
    });
  }, [activeFilter, searchQuery]);

  const allClientsList = [
    'Anaco Prime Sport',
    'Bakebook',
    'EmergenSee System',
    'Golden Tulip Hotel Rivotels',
    'Oak Park and Gardens',
    'Megavantage Dynamic Oil & Gas',
    'Peers Alliance NG Consulting',
    'Megavantage Apartments',
    'Raffila Gaming Platform',
    'Citivas Ecosystem',
    'PrepVerse Academy',
    'TechHub Port Harcourt',
    'West African Marine & Energy'
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Work & Portfolio | In-House Products & Enterprise Client Projects | Bluewaves Technology</title>
        <meta
          name="description"
          content="Explore Bluewaves Technology's portfolio of in-house software innovations (PrepVerse, Sankofa Wing 3D Museum, Citivas, HerbalStrength, Asemi, Drafta) and deployed enterprise client platforms."
        />
        <meta
          name="keywords"
          content="Bluewaves Technology portfolio, software products Nigeria, Sankofa Wing 3D, PrepVerse AI, Citivas, HerbalStrength, Asemi, Raffila, Mega Vantage"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/portfolio" />
        <meta property="og:title" content="Work & Portfolio | In-House Products & Enterprise Client Projects | Bluewaves Technology" />
        <meta property="og:description" content="Explore our full portfolio of proprietary in-house software products and enterprise client systems." />
        <meta property="og:url" content="https://www.bwtng.live/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>

      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.12),transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered in Port Harcourt · Deployed Globally</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              Our <span className="text-primary">Work</span> & In-House Innovations
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We build proprietary software solutions and engineer mission-critical systems for leading brands. Explore our live products, active builds, and verified case studies.
            </p>
          </div>

          {/* Quantified Showcase Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-card/70 border border-border/80 rounded-2xl p-5 text-center backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-extrabold text-foreground font-display">8+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">In-House Products</div>
            </div>
            <div className="bg-card/70 border border-border/80 rounded-2xl p-5 text-center backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-extrabold text-primary font-display">756+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Solutions Delivered</div>
            </div>
            <div className="bg-card/70 border border-border/80 rounded-2xl p-5 text-center backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-extrabold text-foreground font-display">50k+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">3D Museum Explorers</div>
            </div>
            <div className="bg-card/70 border border-border/80 rounded-2xl p-5 text-center backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-extrabold text-foreground font-display">99.8%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Platform Reliability</div>
            </div>
          </div>

          {/* Interactive Controls & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-card border border-border rounded-2xl w-full md:w-auto">
              {[
                { id: 'all', label: 'All Works' },
                { id: 'in-house', label: 'In-House Products (8)' },
                { id: 'client', label: 'Client Platforms (5)' },
                { id: 'ai-3d', label: 'AI & 3D WebGL' },
                { id: 'mobile', label: 'Mobile Apps' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as FilterType)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search by name, tech or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 text-xs rounded-xl bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl space-y-24">

          {/* Section 1: In-House Products Grid */}
          {(activeFilter === 'all' || activeFilter === 'in-house' || activeFilter === 'ai-3d' || activeFilter === 'mobile') && filteredProducts.length > 0 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-border/60">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold mb-1">
                    <Rocket className="w-3.5 h-3.5" />
                    Proprietary Software Pipeline
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                    In-House Products & Ventures
                  </h2>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {filteredProducts.length} of {products.length} Products Shown
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isLive = product.status === 'live';
                  return (
                    <div
                      key={product.slug}
                      className="group flex flex-col justify-between rounded-2xl bg-card border border-border/80 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden hover:-translate-y-1"
                    >
                      {/* Top Visual or Banner */}
                      <div className="relative aspect-[16/9] w-full bg-muted/40 overflow-hidden border-b border-border/60">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-card via-background to-muted/20">
                            {product.logo ? (
                              <img src={product.logo} alt="" className="w-16 h-16 object-contain mb-2" />
                            ) : (
                              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                                <Cpu className="w-7 h-7" />
                              </div>
                            )}
                            <span className="text-xs font-mono text-muted-foreground">Bluewaves Innovation Lab</span>
                          </div>
                        )}

                        {/* Status Badge Over Image */}
                        <div className="absolute top-3 right-3 z-10">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border shadow-sm ${
                              isLive
                                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
                                : 'bg-amber-950/80 text-amber-400 border-amber-500/30'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                              }`}
                            />
                            {isLive ? 'Live Production' : 'In Development'}
                          </span>
                        </div>

                        {/* Category Pill Over Image */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-background/85 border border-border/80 text-foreground backdrop-blur-md">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2.5">
                            {product.logo && (
                              <div className="w-8 h-8 rounded-lg bg-card border border-border/80 p-1 shrink-0 flex items-center justify-center">
                                <img src={product.logo} alt="" className="w-full h-full object-contain" />
                              </div>
                            )}
                            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                            {product.description}
                          </p>

                          {/* Quantified Metrics Highlight */}
                          {product.metrics && (
                            <div className="mb-4 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/15 text-[11px] font-mono text-primary flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{product.metrics}</span>
                            </div>
                          )}

                          {/* Tech Stack Tags */}
                          {product.tags && (
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {product.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60 font-mono"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Card Action Footer */}
                        <div className="pt-4 border-t border-border/60">
                          {product.url ? (
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-between w-full h-10 px-4 rounded-xl text-xs font-semibold bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 transition-all duration-200 group/btn"
                            >
                              <span>{product.cta || 'Visit Product'}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                          ) : (
                            <div className="inline-flex items-center justify-center w-full h-10 px-4 rounded-xl text-xs font-semibold bg-muted/50 text-muted-foreground border border-border/60 cursor-not-allowed">
                              <span>Active Pipeline · Beta Soon</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 2: Enterprise Client Case Studies */}
          {(activeFilter === 'all' || activeFilter === 'client') && filteredClients.length > 0 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-border/60">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    Client Platforms & Deployments
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                    Custom Client Solutions
                  </h2>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {filteredClients.length} Enterprise Platforms
                </span>
              </div>

              <div className="space-y-6">
                {filteredClients.map((client, idx) => (
                  <div
                    key={client.slug}
                    className="group rounded-2xl bg-card border border-border/80 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 p-6 sm:p-8"
                  >
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      {/* Left: Project Screenshot */}
                      <div className="md:col-span-5 rounded-xl overflow-hidden bg-muted/30 border border-border/60 aspect-[16/10] relative">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-background/90 border border-border/80 text-foreground backdrop-blur-md">
                            {client.category}
                          </span>
                        </div>
                      </div>

                      {/* Right: Technical Breakdown */}
                      <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {client.name}
                            </h3>
                            <span className="text-xs font-mono text-muted-foreground shrink-0">
                              Production Shipped
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {client.description}
                          </p>

                          {/* Note / Special Architecture Callout */}
                          {client.note && (
                            <div className="p-3 rounded-xl bg-muted/50 border border-border/70 text-xs text-foreground/90 mb-3 flex items-start gap-2">
                              <span className="text-primary font-bold shrink-0">✦ Architecture Note:</span>
                              <span>{client.note}</span>
                            </div>
                          )}

                          {/* Metrics Pill */}
                          {client.metrics && (
                            <div className="text-xs font-mono text-primary flex items-center gap-1.5 mb-4">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>{client.metrics}</span>
                            </div>
                          )}

                          {/* Tags */}
                          {client.tags && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {client.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border/60 font-mono"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CTA Link */}
                        <div>
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-full text-xs font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/link"
                          >
                            <a href={client.url} target="_blank" rel="noopener noreferrer">
                              Visit Live Platform
                              <ExternalLink className="ml-2 w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Verified Client Logo Roster */}
          <div className="pt-12 border-t border-border/60">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block mb-1">
                Client Ecosystem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                Trusted by 500+ Businesses Across Nigeria & Beyond
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Delivering high-availability web architectures, mobile products, and custom digital software since 2019.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {allClientsList.map((client, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-card border border-border/80 text-center flex items-center justify-center min-h-[64px] hover:border-primary/40 hover:bg-card/90 transition-all text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  {client}
                </div>
              ))}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-center flex items-center justify-center min-h-[64px] text-xs font-bold text-primary">
                + 740 More Completed Engagements
              </div>
            </div>
          </div>

          {/* Bottom Consultation Banner */}
          <div className="relative rounded-3xl bg-gradient-to-br from-card via-card/90 to-primary/10 border border-primary/30 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-semibold">
                Start An Engineering Sprint
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-foreground">
                Ready to Turn Your Idea into a Shipped Product?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you need a custom SaaS platform, an AI automation pipeline, or a high-converting mobile app, our senior engineering team is ready to deliver.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                >
                  <a href="/#start">Start a Project</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 font-semibold"
                >
                  <a
                    href="https://wa.me/2347051551543?text=Hello%20Bluewaves!%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
