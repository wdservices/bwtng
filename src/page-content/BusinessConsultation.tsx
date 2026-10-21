import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Users, Check, Lightbulb, BarChart3, Target, Shield, TrendingUp,
  ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, FileText
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import ConsultingShowcase from '@/components/showcases/ConsultingShowcase';
import { Link } from 'react-router-dom';

const CONSULTING_DELIVERABLES = [
  {
    title: 'Software Requirement Specs (SRS) & Architecture Maps',
    desc: 'Transform ambiguous product visions into rigorous engineering contracts: data schemas, API contracts, entity-relationship diagrams, and sprint schedules.',
    image: '/image/tech-wizard-hero.jpg',
    tag: 'SRS Documentation · Schemas · Scope',
    features: ['Entity relationship diagrams & database schema design', 'API endpoint contracts & integration boundaries', 'Eliminates costly developer misunderstandings'],
  },
  {
    title: 'Legacy System & Database Modernization',
    desc: 'Architect seamless migration paths moving legacy on-premise databases, manual spreadsheets, and outdated PHP/ASP apps onto scalable cloud clusters.',
    image: '/image/work/megavantage-dynamic.jpg',
    tag: 'Cloud Migration · Zero Downtime',
    features: ['Step-by-step phased rollout roadmap', 'Zero data-loss replication safeguards', 'Drastic cloud infrastructure cost reductions'],
  },
  {
    title: 'Security Auditing & Penetration Review',
    desc: 'Comprehensive penetration tests, database permission auditing, OWASP Top-10 security analysis, and role-based access validation.',
    image: '/image/work/citivas.jpg',
    tag: 'Pen Testing · OWASP · Compliance',
    features: ['Vulnerability risk severity matrix', 'Remediation code snippets for engineers', 'Compliance ready reports for executives'],
  },
];

const CONSULTING_SPECS = [
  { title: 'Engagement Model', tech: 'Bi-weekly advisory sprints, technical sprint leadership, or fixed-scope architectural audit' },
  { title: 'Architectural Deliverables', tech: 'Comprehensive SRS document, ERD diagrams, OpenAPI 3.0 schemas, cloud infrastructure blueprints' },
  { title: 'Tech Stack Advisory', tech: 'Neutral, pragmatic selection across Cloud SQL, Supabase, Next.js, Flutter, AWS, and GCP' },
  { title: 'Cost Engineering', tech: 'Auditing server compute, database over-provisioning, and 3P SaaS tool overlap to slash burn' },
  { title: 'Team Enablement', tech: 'Pair programming, code reviews, and git workflow enforcement for internal engineering teams' },
  { title: 'Direct Access', tech: 'Private Slack / WhatsApp advisory channel directly with Bluewaves principal architects' },
];

const BusinessConsultation: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Business &amp; Tech Consultation Services | Digital Strategy | Bluewaves Technology</title>
        <meta name="description" content="Expert tech consultation and digital transformation advisory in Nigeria. Software architecture, database schema design, and cloud strategy by Bluewaves Technology." />
        <link rel="canonical" href="https://www.bwtng.live/business-consultation" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>TECHNOLOGY STRATEGY &amp; ARCHITECTURE ADVISORY</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Pragmatic <span className="text-primary">Tech Consultation</span> &amp; Digital Roadmapping.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Avoid costly technical debt and failed engineering hires. We review schemas, architect bulletproof systems, and provide seasoned guidance before you write code.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20book%20a%20technology%20consultation%20session." target="_blank" rel="noopener noreferrer">
                    Book Architecture Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Case Studies</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>📋 Comprehensive SRS Specs</span>
                <span className="text-border">·</span>
                <span>🛡️ Zero Cloud Vendor Lock-In</span>
                <span className="text-border">·</span>
                <span>🤝 Direct Principal Architect Access</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/tech-wizard-hero.jpg"
                  alt="Senior software architects conducting technical roadmap and system architecture review"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Strategic Practice: Advisory</span>
                  </div>
                  <span className="text-primary font-bold">100% Impartial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Showcase Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Diagnostic Sandbox</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Tech Readiness Evaluator
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Simulate operational friction points, evaluate cloud maturity, and calculate estimated delivery windows.
            </p>
          </div>
          <ConsultingShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Advisory Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                Tangible roadmaps we construct.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Concrete architectural assets, schema diagrams, and risk models that protect capital and guarantee smooth delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CONSULTING_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/portfolio">Review Advisory Outcomes</Link>
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
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Advisory Framework</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Our Consultation Engagement Structure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTING_SPECS.map((spec, i) => (
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
              Technology Consultation FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="business-consultation" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Align Your Engineering</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to de-risk your technology strategy?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Connect directly with our principal software architects on WhatsApp to schedule an exploratory discovery session.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20schedule%20a%20tech%20consultation." target="_blank" rel="noopener noreferrer">
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

export default BusinessConsultation;
