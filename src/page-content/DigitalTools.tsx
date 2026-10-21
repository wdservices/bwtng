import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Zap, Check, Wrench, Database, Cloud, Lock, Cog,
  ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, Server
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import ToolsShowcase from '@/components/showcases/ToolsShowcase';
import { Link } from 'react-router-dom';

const TOOLS_DELIVERABLES = [
  {
    title: 'Custom ERP & Operational Dashboards',
    desc: 'Unify company operations into a single pane of glass: employee permissions, financial summaries, project tracking, and executive metrics.',
    image: '/image/digital-tools-hero.jpg',
    tag: 'Enterprise ERP · Role Access · Telemetry',
    features: ['Granular role-based permissions (RBAC)', 'Real-time WebSocket metric telemetry', 'Exportable executive PDF & Excel audit sheets'],
  },
  {
    title: 'Inventory & Supply Chain Sync Engines',
    desc: 'Track warehouse stock across multiple locations, barcode scanner integrations, automated replenishment alerts, and supplier invoicing.',
    image: '/image/work/megavantage-dynamic.jpg',
    tag: 'Multi-Location · Barcodes · Alerts',
    features: ['Real-time multi-branch stock counts', 'Automated purchase order dispatch', 'Discrepancy audit logging'],
  },
  {
    title: 'Hospital, School & Hotel Management Suites',
    desc: 'Specialized administrative portals for patient scheduling, student grade portals, guest check-in, and automated SMS reminder broadcasts.',
    image: '/image/work/rivotels.jpg',
    tag: 'Custom Verticals · SMS Alerts · Portals',
    features: ['Patient / student / guest lifecycle records', 'Automated WhatsApp & SMS appointment reminders', 'Encrypted cloud document vault'],
  },
];

const TOOLS_SPECS = [
  { title: 'Core Architecture', tech: 'React 19 / Next.js 15, Node.js Microservices, PostgreSQL with Row-Level Security (RLS)' },
  { title: 'Access & Compliance', tech: 'Multi-tenant schemas, granular Role-Based Access Control (RBAC), immutable audit logs' },
  { title: 'Real-Time Sync', tech: 'Redis in-memory Pub/Sub, WebSocket live subscriptions, offline queue retry logic' },
  { title: 'Hardware Integration', tech: 'USB / Bluetooth barcode scanners, POS receipt printers, digital signature pads' },
  { title: 'Export & Reporting', tech: 'Background headless PDF rendering, bulk Excel streams, scheduled email digests' },
  { title: 'Data Sovereignty', tech: 'Self-hosted or private cloud database VPC deployment with daily automated backups' },
];

const DigitalTools: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Digital Tools &amp; Custom Software Nigeria | Enterprise ERPs &amp; Portals | Bluewaves</title>
        <meta name="description" content="Custom digital tools, ERPs, and workflow automation software in Nigeria. Streamline internal business operations with software engineered by Bluewaves Technology in Port Harcourt." />
        <link rel="canonical" href="https://www.bwtng.live/digital-tools" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>OPERATIONAL SOFTWARE &amp; CUSTOM TOOLS</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Custom <span className="text-primary">Digital Tools</span> &amp; Enterprise Software.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Replace clunky spreadsheets and expensive generic software with tailored internal tools, administrative ERPs, and automated workflows engineered around your business.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20discuss%20custom%20software%20or%20an%20ERP%20portal." target="_blank" rel="noopener noreferrer">
                    Initiate Software Scoping <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/portfolio">Explore Live Solutions</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>🛡️ Role-Based Access Control</span>
                <span className="text-border">·</span>
                <span>⚡ Real-time Telemetry</span>
                <span className="text-border">·</span>
                <span>💾 100% Data Sovereignty</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/digital-tools-hero.jpg"
                  alt="Corporate operations center showing multi-screen workstation with custom ERP software dashboard and inventory pipeline"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-foreground font-semibold">ERP Cluster: Online</span>
                  </div>
                  <span className="text-primary font-bold">Postgres RLS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Showcase Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Operational Sandbox</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Tools &amp; Permissions Workbench
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore role-based access levels, automated invoice dispatches, and real-time database synchronizations.
            </p>
          </div>
          <ToolsShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Enterprise Deliverables</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                Custom software systems we engineer.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Engineered exclusively around your proprietary business workflows, removing SaaS subscription bloat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TOOLS_DELIVERABLES.map((del, idx) => (
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
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                    <Link to="/portfolio">Inspect Software Specs</Link>
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
              Our Custom Software Architecture
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS_SPECS.map((spec, i) => (
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
              Custom Software FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="digital-tools" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Automate Your Operations</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to build bespoke software for your team?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our enterprise solutions team on WhatsApp to review your workflows and map an efficient software architecture.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20scope%20a%20custom%20software%20tool." target="_blank" rel="noopener noreferrer">
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

export default DigitalTools;
