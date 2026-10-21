import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Cpu, Check, Brain, Bot, LineChart, Workflow, Sparkles,
  ArrowRight, ShieldCheck, Database, Layers, CheckCircle2,
  Terminal, Zap, Code2
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import AIShowcase from '@/components/showcases/AIShowcase';
import { Link } from 'react-router-dom';

const AI_DELIVERABLES = [
  {
    title: 'Domain RAG Vector Search Pipelines',
    desc: 'Connect internal proprietary knowledge (PDFs, policies, database records) into hallucination-free semantic search and chat engines.',
    image: '/image/ai-solutions-hero.jpg',
    tag: 'RAG · Pgvector · Hybrid Retrieval',
    features: ['Context-grounded responses with source citations', 'Sub-250ms vector query matching', 'Automatic sync on document update'],
  },
  {
    title: 'Autonomous Multi-Agent Automation',
    desc: 'Intelligent software agents that execute multi-step business tasks: parsing emails, generating invoices, and querying CRM APIs.',
    image: '/image/tech-wizard-hero.jpg',
    tag: 'Tool Calling · Agentic Workflows',
    features: ['Function calling with deterministic JSON schema', 'Human-in-the-loop approvals', 'Full execution audit trails'],
  },
  {
    title: 'Intelligent Vision & Document OCR',
    desc: 'Automated extraction of structured key-value data from physical IDs, paper receipts, waybills, and medical lab reports.',
    image: '/image/work/citivas.jpg',
    tag: 'Computer Vision · Document AI',
    features: ['99.4% Extraction accuracy', 'Automatic PII redaction and encryption', 'Direct database insert pipeline'],
  },
];

const AI_SPECS = [
  { title: 'Foundation Models', tech: 'Google Gemini 2.5 (Pro & Flash), OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet' },
  { title: 'Vector Datastores', tech: 'Pgvector (PostgreSQL), Pinecone, Redis Vector, Milvus Cluster' },
  { title: 'Agent Frameworks', tech: 'LangChain, LlamaIndex, Custom TypeScript Agent Loops, Function Calling' },
  { title: 'Inference Speed', tech: 'Streaming SSE responses, Token optimizations, Sub-300ms Time-to-First-Token' },
  { title: 'Privacy & Compliance', tech: 'Zero model retention agreements, Strict client data segregation, Encryption at rest' },
  { title: 'Edge & Local ML', tech: 'ONNX Runtime, Transformers.js, Offline client-side sentiment & intent classifiers' },
];

const AIServices: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>AI &amp; Machine Learning Services | Custom Agents &amp; RAG | Bluewaves Technology</title>
        <meta name="description" content="Enterprise AI solutions in Nigeria. RAG semantic search pipelines, LLM multi-agent automation, and intelligent chatbots engineered by Bluewaves Technology." />
        <link rel="canonical" href="https://www.bwtng.live/ai-services" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Brain className="w-3.5 h-3.5" />
                <span>INTELLIGENT SYSTEMS &amp; AI PRACTICE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.05]">
                Enterprise <span className="text-primary">AI Solutions</span> &amp; Autonomous Agents.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We turn state-of-the-art foundation models into production systems: hallucination-free enterprise RAG, automated customer dispatchers, and multi-step agent pipelines.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20consult%20on%20an%20AI%20automation%20project." target="_blank" rel="noopener noreferrer">
                    Initiate AI Architecture Review <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md">
                  <Link to="/ai-builder-academy">Explore AI Academy</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>⚡ Sub-250ms RAG Retrieval</span>
                <span className="text-border">·</span>
                <span>🛡️ Enterprise Data Privacy</span>
                <span className="text-border">·</span>
                <span>🤖 Gemini 2.5 Integrated</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/ai-solutions-hero.jpg"
                  alt="Neural network visualization and autonomous AI agent reasoning pipeline"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Gemini 2.5 Flash Pipeline</span>
                  </div>
                  <span className="text-primary font-bold">&lt;280ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Engineering Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Interactive Simulation</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              AI Reasoning &amp; Context Pipeline Showcase
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Observe vector search embeddings, semantic scoring, and structured output formatting in real-time.
            </p>
          </div>
          <AIShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid: Real AI solutions we build */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Autonomous Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                AI systems we engineer for clients.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              We design robust safety rails and verification layers so our AI models act as reliable enterprise collaborators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {AI_DELIVERABLES.map((del, idx) => (
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
                    <Link to="/ai-builder-academy">Learn AI Implementation</Link>
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
              Our AI &amp; Machine Learning Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SPECS.map((spec, i) => (
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
              AI &amp; Automation FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="ai-services" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Empower Your Workflows</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to deploy customized AI models?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Schedule a technical consultation to explore RAG indexing, custom agent tooling, and enterprise privacy compliance.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20scope%20an%20AI%20agent%20solution." target="_blank" rel="noopener noreferrer">
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

export default AIServices;
