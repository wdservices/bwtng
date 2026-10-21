import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Palette, Check, PenTool, Layout, MousePointer, Layers, Eye,
  ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Sliders
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import UIUXShowcase from '@/components/showcases/UIUXShowcase';
import { Link } from 'react-router-dom';

const UIUX_DELIVERABLES = [
  {
    title: 'Enterprise Figma Design Systems',
    desc: 'Scalable typography hierarchies, color token aliases, auto-layout components, and dark/light mode variants.',
    image: '/image/uiux-design-hero.jpg',
    tag: 'Figma Tokens · Auto-Layout · WCAG AA',
    features: ['Atomic design hierarchy & reusable variants', 'Synchronized code tokens for Tailwind CSS', 'Interactive component state matrix'],
  },
  {
    title: 'Mobile App Wireframes & Interactive Flows',
    desc: 'High-fidelity mobile prototypes that simulate native gestures, bottom sheets, navigation transitions, and real micro-interactions.',
    image: '/image/work/prepverse.jpg',
    tag: 'iOS & Android Guidelines · Native Feel',
    features: ['Clickable prototype sharing links', 'Zero ambiguity for developers', 'Tested against human thumb zones'],
  },
  {
    title: 'SaaS Dashboard & Portal Experience Design',
    desc: 'Dense, clean, information-rich user interfaces that turn complex operational data into effortless administrative workflows.',
    image: '/image/work/citivas.jpg',
    tag: 'SaaS Portals · Data Density · Clean Layout',
    features: ['Balanced whitespace and typographic hierarchy', 'Zero-pill discipline with crisp semantic dividers', 'Keyboard accessibility & focus indicators'],
  },
];

const UIUX_SPECS = [
  { title: 'Design Environment', tech: 'Figma (Variables, Component Sets, Auto-Layout v5, Dev Mode)' },
  { title: 'Accessibility Standard', tech: 'WCAG 2.1 Level AA Compliant Contrast, Focus States, Screen Reader Labels' },
  { title: 'Motion & Physics', tech: 'Framer Motion specs, Easing curves (cubic-bezier), Spring dampening values' },
  { title: 'Design Constitution', tech: 'Anti-AI-slop standard: purposeful typography, intentional color theory, real copy' },
  { title: 'Developer Handoff', tech: 'Tokenized CSS variables, React component prop schemas, SVG asset exports' },
  { title: 'Usability Validation', tech: 'Unmoderated user testing, Hotjar session audits, Conversion funnel friction logs' },
];

const UIUXDesign: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>UI/UX Design Services Nigeria | Product Design &amp; Figma Systems | Bluewaves Technology</title>
        <meta name="description" content="Professional UI/UX product design in Nigeria. Figma design systems, wireframing, high-fidelity prototypes, and mobile app UI engineered by Bluewaves Technology." />
        <link rel="canonical" href="https://www.bwtng.live/ui-ux-design" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Palette className="w-3.5 h-3.5" />
                <span>PRODUCT DESIGN &amp; UI/UX PRACTICE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Distinctive <span className="text-primary">UI/UX Design</span> &amp; Scalable Design Systems.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We craft intentional, high-utility digital interfaces that eliminate user friction. No generic AI templates—every pixel is engineered for clarity, emotion, and commercial conversion.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20consult%20on%20UI%2FUX%20product%20design." target="_blank" rel="noopener noreferrer">
                    Initiate Design Scoping <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Visual Portfolio</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>🎨 100% Figma Source Files</span>
                <span className="text-border">·</span>
                <span>♿ WCAG 2.1 AA Compliant</span>
                <span className="text-border">·</span>
                <span>📐 Tokenized Design Systems</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/uiux-design-hero.jpg"
                  alt="Modern UI/UX design studio workstation with curved display showing Figma design system and mobile prototypes"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Standard: Zero-AI-Slop</span>
                  </div>
                  <span className="text-primary font-bold">Figma Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive UI/UX Engineering Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Design System Sandbox</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Design System Workbench
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore dynamic theme tokens, elevation shadows, typographic contrast, and component states.
            </p>
          </div>
          <UIUXShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Design Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                What our product design studio delivers.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              From raw concept wireframes to interactive Figma prototypes and production design tokens ready for React.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {UIUX_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/portfolio">View Design Case Studies</Link>
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
              Our Product Design Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UIUX_SPECS.map((spec, i) => (
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
              UI/UX Design FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="ui-ux-design" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Transform User Experience</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to elevate your product design?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our UI/UX design directors to review your current product screens or initiate a new Figma design sprint.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20discuss%20a%20UI%2FUX%20design%20project." target="_blank" rel="noopener noreferrer">
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

export default UIUXDesign;
