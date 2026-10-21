import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  MessageSquare, Check, Share2, Mail, BarChart3, Megaphone, Search,
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target, LineChart
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import MarketingShowcase from '@/components/showcases/MarketingShowcase';
import { Link } from 'react-router-dom';

const MARKETING_DELIVERABLES = [
  {
    title: 'Multi-Channel Conversion Funnels',
    desc: 'Full-funnel customer acquisition campaigns across Meta Ads, Google Performance Max, and LinkedIn with server-side conversion tracking.',
    image: '/image/digital-marketing-hero.jpg',
    tag: 'Meta Ads · Google PMax · Server CAPI',
    features: ['Server-side Conversions API (CAPI) bypasses ad blockers', 'Strict ROAS attribution models', 'Automated budget reallocation based on CPA'],
  },
  {
    title: 'Conversion-Engineered Landing Pages',
    desc: 'High-speed, friction-free single-page landing pages with instant Paystack/WhatsApp lead capture and heatmapped click patterns.',
    image: '/image/work/raffila.jpg',
    tag: 'CRO · Split Testing · Instant Lead Capture',
    features: ['Sub-second page load on mobile 4G/3G networks', 'Dynamic text replacement for keyword matching', 'A/B headline & CTA conversion experiments'],
  },
  {
    title: 'Automated Lifecycle Email & SMS Nurturing',
    desc: 'Triggered messaging sequences for cart abandonment, customer onboarding, re-engagement campaigns, and SMS transaction updates.',
    image: '/image/work/citivas.jpg',
    tag: 'Email Automation · SMS Gateways · Retention',
    features: ['Behavioral segment triggers', 'Rich responsive HTML email templates', 'Automated Nigerian DND-safe SMS dispatch'],
  },
];

const MARKETING_SPECS = [
  { title: 'Tracking Infrastructure', tech: 'Google Tag Manager (Server-Side), Meta Conversions API (CAPI), GA4, PostHog' },
  { title: 'Attribution Model', tech: 'First-touch, last-touch, and data-driven multi-touch attribution reports' },
  { title: 'Ad Channels Managed', tech: 'Google Search & PMax, Meta (Instagram & Facebook), LinkedIn Sponsored Content, TikTok Ads' },
  { title: 'Email & SMS Tech', tech: 'Resend, Klaviyo, Brevo, Termii SMS Gateway (Nigeria compliant route)' },
  { title: 'Creative Production', tech: 'Figma visual ad templates, motion graphics snippets, benefit-driven sales copy' },
  { title: 'Reporting Cadence', tech: 'Weekly transparent metric dashboards: CAC, ROAS, Click-Through-Rate (CTR), and CPA' },
];

const DigitalMarketing: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Digital Marketing &amp; Growth Architecture Nigeria | Performance Campaigns | Bluewaves</title>
        <meta name="description" content="Data-driven digital marketing in Nigeria. Performance paid ads, server-side tracking, conversion rate optimization, and automated lead funnels by Bluewaves Technology." />
        <link rel="canonical" href="https://www.bwtng.live/digital-marketing" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>GROWTH ARCHITECTURE &amp; PERFORMANCE MARKETING</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Data-Driven <span className="text-primary">Digital Marketing</span> &amp; Conversion Lift.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We combine scientific attribution, server-side tracking, and conversion rate optimization to turn advertising spend into predictable customer revenue.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20discuss%20a%20growth%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
                    Initiate Campaign Review <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Past Campaigns</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>🎯 Server-Side Meta CAPI</span>
                <span className="text-border">·</span>
                <span>📊 Transparent Weekly ROAS</span>
                <span className="text-border">·</span>
                <span>⚡ Sub-second Funnels</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/digital-marketing-hero.jpg"
                  alt="Modern growth marketing command center with conversion funnel analytics and campaign ROI charts"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Attribution Engine: Active</span>
                  </div>
                  <span className="text-primary font-bold">310% ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Marketing Showcase Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Campaign Telemetry Sandbox</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Funnel &amp; ROI Simulator
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Model acquisition channels, simulate conversion leakages, and calculate projected customer acquisition cost (CAC).
            </p>
          </div>
          <MarketingShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Growth Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                What our growth practice builds.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Full-funnel technical marketing infrastructure connecting paid ad creative directly to high-converting checkout flows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MARKETING_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/portfolio">Explore Growth Case Studies</Link>
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
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Technical Specs</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Our Growth Infrastructure Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETING_SPECS.map((spec, i) => (
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
              Digital Marketing &amp; Growth FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="digital-marketing" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Scale Your Customer Base</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to accelerate predictable growth?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our growth marketing architects on WhatsApp to review your target market, ad budget, and funnel projections.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20discuss%20a%20digital%20marketing%20strategy." target="_blank" rel="noopener noreferrer">
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

export default DigitalMarketing;
