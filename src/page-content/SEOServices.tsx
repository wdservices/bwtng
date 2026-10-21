import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  TrendingUp, Check, Search, Target, BarChart3, Users, Zap,
  ArrowRight, ShieldCheck, CheckCircle2, LineChart, Code2, Globe
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import SEOShowcase from '@/components/showcases/SEOShowcase';
import { Link } from 'react-router-dom';

const SEO_DELIVERABLES = [
  {
    title: 'Core Web Vitals & Speed Hardening',
    desc: 'Audit and rebuild slow scripts, excessive DOM nodes, and layout shifts to achieve green 95+ Google Lighthouse scores.',
    image: '/image/seo-dashboard-hero.jpg',
    tag: 'Lighthouse 98+ · LCP <1.2s · INP <80ms',
    features: ['Image lazy-loading & AVIF compression', 'Critical CSS inlining & code splitting', 'Zero cumulative layout shift (CLS) guarantee'],
  },
  {
    title: 'JSON-LD Semantic Structured Schema',
    desc: 'Inject rich structured metadata that gives your brand star ratings, event cards, site search boxes, and FAQ accordions directly on Google SERPs.',
    image: '/image/work/megavantage-homes.jpg',
    tag: 'Schema.org · Rich Snippets · SERP Lift',
    features: ['Automated JSON-LD schema generation', 'OpenGraph & Twitter Card dynamic tags', 'Google Search Console error zeroing'],
  },
  {
    title: 'Local Port Harcourt & Nigerian GEO Dominance',
    desc: 'Capture high-intent commercial searches in Port Harcourt, Lagos, Abuja, and international markets.',
    image: '/image/work/citivas.jpg',
    tag: 'Local SEO · Google Maps · GBP Engine',
    features: ['Google Business Profile citation optimization', 'High-intent keyword footprint map', 'Competitor keyword gap analysis'],
  },
];

const SEO_SPECS = [
  { title: 'Auditing Tooling', tech: 'Google Search Console, Lighthouse CI, Screaming Frog SEO Spider, Ahrefs' },
  { title: 'Core Web Vitals Standard', tech: 'LCP < 1.2s, FID < 15ms, CLS 0.00, Server TTFB < 50ms' },
  { title: 'Structured Data Formats', tech: 'JSON-LD (Organization, Product, Service, BreadcrumbList, FAQPage)' },
  { title: 'Server Infrastructure', tech: 'Edge Caching, Dynamic XML Sitemaps, Gzip/Brotli compression, HTTP/3' },
  { title: 'Content & Canonical Rules', tech: 'Hreflang internationalization, Robots.txt syntax, Self-referential canonics' },
  { title: 'Reporting & Telemetry', tech: 'Weekly ranking trajectories, Click-through rate (CTR) gains, Conversion attribution' },
];

const SEOServices: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Technical SEO Services Nigeria | Rank #1 on Google | Bluewaves Technology</title>
        <meta name="description" content="Technical SEO, Core Web Vitals optimization, semantic schema, and local search dominance in Nigeria engineered by Bluewaves Technology in Port Harcourt." />
        <link rel="canonical" href="https://www.bwtng.live/seo-services" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>SEARCH ENGINE ARCHITECTURE PRACTICE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Engineering-Grade <span className="text-primary">Technical SEO</span> &amp; Search Dominance.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We do not just sprinkle keywords—we architect crawl budgets, eliminate latency bottlenecks, and implement rich semantic schema so search engines place your brand first.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20an%20audit%20and%20technical%20SEO%20proposal." target="_blank" rel="noopener noreferrer">
                    Request Technical SEO Audit <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Past Growth</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>📈 98+ Google Lighthouse</span>
                <span className="text-border">·</span>
                <span>🏷️ Structured Schema.org</span>
                <span className="text-border">·</span>
                <span>⚡ Sub-second Indexing</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/seo-dashboard-hero.jpg"
                  alt="Modern technical SEO command center with Core Web Vitals and organic traffic trajectory monitor"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Core Web Vitals: 98/100</span>
                  </div>
                  <span className="text-primary font-bold">1.2s LCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive SEO Engineering Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Live Audit Sandbox</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive SEO Health &amp; Schema Inspector
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Simulate crawl depth, verify JSON-LD tags, and evaluate Core Web Vitals parameters live.
            </p>
          </div>
          <SEOShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Strategic Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                Proven search architectures we implement.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              We combine deep web performance engineering with semantic entity graphs to secure sustained search dominance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SEO_DELIVERABLES.map((del, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/20 border-b border-border/60">
                    <img
                      src={del.image}
                      alt={del.title}
                      loading="lazy"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/60 text-[10px] font-mono text-primary font-bold">
                      {del.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {del.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {del.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-border/60">
                      {del.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full rounded-xl text-xs font-semibold h-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Link to="/portfolio">Review Ranking Case Studies</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Specs Matrix */}
      <section className="py-20 bg-card/60 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Engineering Specs</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Our Technical SEO Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_SPECS.map((spec, i) => (
              <div key={i} className="p-6 rounded-2xl bg-background/90 border border-border/80">
                <span className="text-xs font-mono text-primary font-bold block mb-2">{spec.title}</span>
                <p className="text-sm font-medium text-foreground leading-relaxed">{spec.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Common Inquiries</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Technical SEO FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="seo-services" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Claim Search Dominance</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to rank #1 for your high-intent searches?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our technical SEO engineering team to review current domain health and receive a custom roadmap.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20discuss%20SEO%20and%20search%20optimization." target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SEOServices;
