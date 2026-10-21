import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Globe, Check, Rocket, Smartphone, Palette, TrendingUp,
  ArrowRight, ShieldCheck, Cpu, Code2, Database, Layers,
  ExternalLink, CheckCircle2, Server, Lock, Zap
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import WebDevShowcase from '@/components/showcases/WebDevShowcase';
import { Link } from 'react-router-dom';

const WEB_DELIVERABLES = [
  {
    title: 'Custom SaaS & Web Applications',
    desc: 'Complex multi-tenant web platforms engineered with React 19 / Next.js 15, PostgreSQL, and robust role-based access control.',
    image: '/image/work/citivas.jpg',
    tag: 'Next.js 15 · Postgres · Tailwind',
    features: ['High-concurrency database queries', 'Real-time WebSocket telemetry', 'Paystack & Stripe multi-currency checkout'],
  },
  {
    title: 'Enterprise Corporate Portals',
    desc: 'High-speed corporate web platforms with sub-second page loads, structured CMS workflows, and conversion-focused design.',
    image: '/image/work/megavantage-dynamic.jpg',
    tag: 'SSR Architecture · Core Vitals · TypeScript',
    features: ['Sub-30ms Edge TTFB', 'Dynamic SEO & OpenGraph card generator', 'Automated Lead Routing to CRM & WhatsApp'],
  },
  {
    title: 'Hospitality & Booking Portals',
    desc: 'Bespoke hotel booking engines, room availability synchronizers, and reservation management portals.',
    image: '/image/work/rivotels.jpg',
    tag: 'Real-time Booking · Secure Payments',
    features: ['Calendar sync across channels', 'Automated reservation confirmation SMS', 'Admin operational dashboards'],
  },
];

const TECH_SPECS = [
  { title: 'Frontend Architecture', tech: 'React 19, Next.js 15 (App Router), TypeScript Strict, Tailwind CSS v4' },
  { title: 'State & Caching', tech: 'TanStack Query v5, Redis In-Memory, Server Actions, Hybrid PPR' },
  { title: 'Database & ORM', tech: 'PostgreSQL, Cloud SQL, Supabase, Drizzle ORM, ACID-compliant Transactions' },
  { title: 'Security & Compliance', tech: 'TLS 1.3, AES-256 Data Encryption, CSP Headers, OWASP Top-10 Hardened' },
  { title: 'Payment Gateways', tech: 'Paystack, Flutterwave, Stripe, Automated Webhook Reconciliation' },
  { title: 'Deployment & SLA', tech: 'Edge CDN Clusters, Docker Containers, Automated CI/CD, 99.98% Uptime' },
];

const WebDevelopment: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Web Development Services Nigeria | Custom Websites &amp; SaaS | Bluewaves Technology</title>
        <meta name="description" content="Professional web development in Nigeria. Fast, responsive, SEO-ready websites, SaaS platforms, and enterprise web applications using React, Next.js, and TypeScript." />
        <link rel="canonical" href="https://www.bwtng.live/web-development" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>ENTERPRISE WEB PRACTICE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Custom <span className="text-primary">Web Development</span> &amp; Scalable SaaS Platforms.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We engineer bulletproof web applications, client portals, and e-commerce platforms engineered for extreme velocity, sub-second TTFB, and verified conversion lift.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20discuss%20a%20web%20development%20project." target="_blank" rel="noopener noreferrer">
                    Initiate Project Scoping <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Live Deployments</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>⚡ Sub-second Core Web Vitals</span>
                <span className="text-border">·</span>
                <span>🔒 100% IP &amp; Code Ownership</span>
                <span className="text-border">·</span>
                <span>💳 Paystack Verified</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/web-dev-hero.jpg"
                  alt="High performance web development workspace and live code rendering"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Production Node: Next.js 15</span>
                  </div>
                  <span className="text-primary font-bold">99.98% SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WebDev Engineering Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Live System Simulation</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Web Development Workbench
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Test responsive viewports, simulate network throttling, and audit production metrics in real-time.
            </p>
          </div>
          <WebDevShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid: Real systems we build */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Verified Production Platforms</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                What we build &amp; ship for clients.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Every system is customized from the database schema up to meet strict commercial performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WEB_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/portfolio">Inspect Case Study</Link>
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
              Our Web Development Tech Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_SPECS.map((spec, i) => (
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
              Web Development FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="web-development" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Kickstart Your Web Platform</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to engineer your web application?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Get an estimated sprint timeline, database architecture overview, and commercial scoping on WhatsApp.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20scope%20a%20new%20web%20application." target="_blank" rel="noopener noreferrer">
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

export default WebDevelopment;
