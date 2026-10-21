import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Palette, Check, Paintbrush, Type, Image, Layout, Zap,
  ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Layers
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import BrandingShowcase from '@/components/showcases/BrandingShowcase';
import { Link } from 'react-router-dom';

const BRANDING_DELIVERABLES = [
  {
    title: 'Identity Guidelines & Visual Systems',
    desc: 'Comprehensive brand bible covering typography pairing, strict clear-space rules, responsive mark scales, and brand tone of voice.',
    image: '/image/branding-hero.jpg',
    tag: 'Brand Bible · Typography · Tone',
    features: ['Primary & secondary logo locks', 'Custom corporate color systems', 'Cohesive digital and print asset rules'],
  },
  {
    title: '3D & Digital Brand Assets',
    desc: 'Bespoke 3D brand icons, social launch graphics, dynamic animated intros, and custom SVG iconography.',
    image: '/image/work/sankofa.jpg',
    tag: '3D Assets · Motion · SVG Iconography',
    features: ['High-resolution 3D renders', 'Social media launch packs', 'Web-optimized vector assets'],
  },
  {
    title: 'Physical & Commercial Collateral',
    desc: 'Executive business cards, corporate letterheads, proposal covers, staff ID templates, and branded presentation decks.',
    image: '/image/work/rivotels.jpg',
    tag: 'Print Ready · CMYK · Corporate Deck',
    features: ['Vector print-ready CMYK files', 'Figma & PowerPoint editable decks', 'Signage and merchandise mockups'],
  },
];

const BRANDING_SPECS = [
  { title: 'Vector Standards', tech: 'Adobe Illustrator, SVG 2.0, EPS, PDF/X-1a, Figma Vector Networks' },
  { title: 'Color Gamut Definition', tech: 'Pantone Matching System (PMS), CMYK Press, RGB Screen, Hex Codes' },
  { title: 'Typography Architecture', tech: 'Primary display faces, secondary body font licensing, web font self-hosting' },
  { title: 'Deliverables Format', tech: 'High-res transparent PNGs, lossless SVGs, brand guidelines PDF, icon packs' },
  { title: 'Legal & Trademark', tech: 'Original copyright-free geometry, trademark-search-ready geometry' },
  { title: 'Turnaround Window', tech: '10–14 business days with iterative moodboard and revision milestones' },
];

const Branding: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Branding &amp; Visual Identity Services Nigeria | Logo &amp; Design Systems | Bluewaves Technology</title>
        <meta name="description" content="Professional branding and corporate visual identity design in Nigeria. Logo suites, typography guidelines, and brand strategy by Bluewaves Technology." />
        <link rel="canonical" href="https://www.bwtng.live/branding" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Paintbrush className="w-3.5 h-3.5" />
                <span>BRAND IDENTITY &amp; VISUAL ARCHITECTURE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Memorable <span className="text-primary">Branding</span> &amp; Iconic Corporate Identities.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We craft authoritative brand identities that command attention, build credibility, and endure in competitive commercial markets.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20consult%20on%20brand%20identity%20design." target="_blank" rel="noopener noreferrer">
                    Initiate Brand Scoping <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Past Identities</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>✨ 100% Trademark-Ready</span>
                <span className="text-border">·</span>
                <span>📘 Brand Style Guide Included</span>
                <span className="text-border">·</span>
                <span>📦 Complete Vector Export</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/branding-hero.jpg"
                  alt="Modern brand identity design studio workspace showing typography, stationery, and color swatches"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Brand Identity Suite</span>
                  </div>
                  <span className="text-primary font-bold">Vector-Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Branding Showcase Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Identity Simulation</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Brand Design System Studio
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore dynamic logo locks, typography combinations, and color palette applications in real time.
            </p>
          </div>
          <BrandingShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Design Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                What our branding practice ships.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Complete brand identity kits containing all print and digital assets necessary to project authority from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BRANDING_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/portfolio">Explore Brand Case Studies</Link>
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
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Production Standards</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Our Brand Delivery Specifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDING_SPECS.map((spec, i) => (
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
              Branding &amp; Identity FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="branding" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Ignite Your Brand</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to forge an unforgettable brand identity?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our brand strategists on WhatsApp to discuss your brand vision, target audience, and launch schedule.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20build%20a%20brand%20identity." target="_blank" rel="noopener noreferrer">
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

export default Branding;
