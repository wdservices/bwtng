import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, Cpu, Zap, Palette, TrendingUp,
  MessageSquare, Users, ArrowRight, ShieldCheck, CheckCircle2,
  Sparkles, Layers, Box, Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Head as Helmet } from 'vite-react-ssg';

const SERVICES_CATALOG = [
  {
    id: 'web',
    title: 'Web Platforms & Systems',
    subtitle: 'High-performance web applications, customer portals, and enterprise SaaS platforms.',
    image: '/image/web-dev-hero.jpg',
    icon: Globe,
    path: '/web-development',
    tag: 'Next.js 15 · TypeScript · Three.js',
    deliverables: [
      'Custom SaaS & Multi-tenant Platforms',
      'High-conversion corporate web systems',
      'Paystack & global payment gateways',
      'Sub-second Core Web Vitals optimization',
    ],
    highlight: '99.98% Uptime SLA',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    subtitle: 'Native and cross-platform iOS & Android mobile products crafted for fluid everyday utility.',
    image: '/image/mobile-app-hero.jpg',
    icon: Smartphone,
    path: '/mobile-app-development',
    tag: 'React Native · Flutter · SQLite Sync',
    deliverables: [
      'iOS & Android native deployment',
      'Offline-first synchronized databases',
      'Segmented push notification engines',
      'Biometric authentication & secure storage',
    ],
    highlight: '60–120 FPS Fluidity',
  },
  {
    id: 'ai',
    title: 'AI Solutions & Automation',
    subtitle: 'Autonomous LLM agents, customized RAG pipelines, intelligent vision, and predictive workflows.',
    image: '/image/ai-solutions-hero.jpg',
    icon: Cpu,
    path: '/ai-services',
    tag: 'Gemini 2.5 · LangChain · RAG Vectors',
    deliverables: [
      'Domain-specific RAG vector search',
      'Autonomous customer support agents',
      'Automated document extraction pipelines',
      'Predictive analytics & ML classification',
    ],
    highlight: '<280ms Inference',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design & Prototyping',
    subtitle: 'Design systems, high-fidelity Figma prototypes, and micro-interaction architectures.',
    image: '/image/uiux-design-hero.jpg',
    icon: Palette,
    path: '/ui-ux-design',
    tag: 'Figma Systems · Design Tokens · Motion',
    deliverables: [
      'Enterprise design systems & token libraries',
      'Interactive click-through prototypes',
      'User journey mapping & usability audits',
      'Accessibility (WCAG 2.1 AA) compliance',
    ],
    highlight: 'Zero-AI-Slop Standard',
  },
  {
    id: 'seo',
    title: 'Technical SEO & Search Architecture',
    subtitle: 'Technical schema architecture, search index optimization, and Core Web Vitals dominance.',
    image: '/image/seo-dashboard-hero.jpg',
    icon: TrendingUp,
    path: '/seo-services',
    tag: 'Schema.org · Core Vitals · SERP Dominance',
    deliverables: [
      'Comprehensive technical site audits',
      'JSON-LD semantic structured data',
      'Server-side rendering & speed tuning',
      'Search ranking trajectory monitoring',
    ],
    highlight: 'Top-3 Search Ranking Targets',
  },
  {
    id: 'tools',
    title: 'Digital Tools & Custom Software',
    subtitle: 'Bespoke ERPs, real-time inventory management, hospital portals, and internal workflows.',
    image: '/image/digital-tools-hero.jpg',
    icon: Zap,
    path: '/digital-tools',
    tag: 'RBAC · Real-time PubSub · Postgres',
    deliverables: [
      'Role-based access management (RBAC)',
      'Automated invoice & billing dispatch',
      'Multi-location inventory tracking',
      'Granular audit trails & compliance logs',
    ],
    highlight: 'Tailored to Internal Workflows',
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    subtitle: 'Strategic brand identity, brand guidelines, typography scales, and premium collateral.',
    image: '/image/branding-hero.jpg',
    icon: Sparkles,
    path: '/branding',
    tag: 'Brand Identity · Guidelines · Collateral',
    deliverables: [
      'Logo suites & trademark-ready vectors',
      'Comprehensive brand guideline manuals',
      'Typography & corporate color palettes',
      'Physical & digital marketing collateral',
    ],
    highlight: 'Iconic Market Presence',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Growth',
    subtitle: 'Multi-channel acquisition funnels, conversion rate optimization, and performance tracking.',
    image: '/image/digital-marketing-hero.jpg',
    icon: MessageSquare,
    path: '/digital-marketing',
    tag: 'Funnel Optimization · Paid Ads · Telemetry',
    deliverables: [
      'Multi-channel conversion funnel tracking',
      'Precision Meta, Google & LinkedIn campaigns',
      'A/B landing page conversion audits',
      'Automated email nurture sequences',
    ],
    highlight: 'Data-Driven ROI',
  },
  {
    id: 'consulting',
    title: 'Business & Tech Consultation',
    subtitle: 'Technology roadmapping, database architecture advisory, and sprint project scoping.',
    image: '/image/tech-wizard-hero.jpg',
    icon: Users,
    path: '/business-consultation',
    tag: 'Cloud Strategy · Architecture · Scoping',
    deliverables: [
      'Comprehensive Software Requirement Specs (SRS)',
      'Legacy database & cloud migration plans',
      'Security posture & penetration reviews',
      'Vendor & technology stack selection',
    ],
    highlight: 'Eliminates Costly Missteps',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Engineering Practices &amp; Digital Services | Bluewaves Technology Studio</title>
        <meta name="description" content="Explore our full engineering capabilities: custom web platforms, mobile apps, AI automation, UI/UX systems, technical SEO, and business software in Port Harcourt, Nigeria." />
        <link rel="canonical" href="https://www.bwtng.live/services" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK STUDIO CAPABILITIES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05] mb-6">
            Services engineered for <span className="text-primary">uncompromising scale.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            From consumer mobile apps and proprietary WebGL experiences to high-concurrency enterprise portals, we engineer digital solutions built around real operational goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground border-y border-border/60 py-4 max-w-2xl mx-auto">
            <span>756+ Shipped Deployments</span>
            <span className="text-border">·</span>
            <span>Zero-Vendor-Lockin</span>
            <span className="text-border">·</span>
            <span>Direct WhatsApp Scoping</span>
          </div>
        </div>
      </section>

      {/* Services Grid with Visual Representation Images */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CATALOG.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual representation image preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/20 border-b border-border/60">
                      <img
                        src={service.image}
                        alt={`${service.title} deliverables preview`}
                        loading="lazy"
                        width={640}
                        height={400}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/60 text-[11px] font-mono text-foreground font-medium shadow-sm">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          0{index + 1}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-mono text-primary font-semibold">
                          {service.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <div className="text-[11px] font-mono text-primary font-medium mb-1.5">
                        {service.tag}
                      </div>

                      <h2 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.subtitle}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-4 border-t border-border/60 mb-6">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-6 pb-6 pt-2">
                    <Button asChild className="w-full rounded-xl bg-card border border-border/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-semibold text-xs h-11 group/btn">
                      <Link to={service.path} className="flex items-center justify-between">
                        <span>Explore practice &amp; specs</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Scoping Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Ready to Build</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Need a tailored engineering architecture?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our software engineering team to review system requirements, timeline estimates, and sprint deliverables.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                <a href="https://wa.me/2347051551543?text=Hello%20Bluewaves%2C%20I%20would%20like%20to%20discuss%20a%20new%20service%20project." target="_blank" rel="noopener noreferrer">
                  Dispatch Brief on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                <Link to="/portfolio">Explore Past Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
