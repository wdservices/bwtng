import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Tablet, Smartphone, Gauge, CheckCircle2, Code2, Server, ShieldCheck, Zap } from 'lucide-react';

export default function WebDevShowcase() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'architecture' | 'performance' | 'security'>('architecture');

  const viewportWidths = {
    desktop: 'w-full',
    tablet: 'max-w-[620px] mx-auto',
    mobile: 'max-w-[340px] mx-auto',
  };

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background subtle mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70 relative z-10">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Interactive Technical Workbench
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Full-Stack Web Architecture & Performance Audit
          </h3>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          <button
            onClick={() => setDevice('desktop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              device === 'desktop' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop (1440px)
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              device === 'tablet' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" /> Tablet (768px)
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              device === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile (375px)
          </button>
        </div>
      </div>

      {/* Main Viewport Simulator Box */}
      <div className={`transition-all duration-500 ${viewportWidths[device]} relative z-10 mb-8`}>
        <div className="rounded-2xl border border-border bg-background shadow-xl overflow-hidden">
          {/* Simulated Browser Chrome */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border/70">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-4 py-1 rounded-md bg-background/80 border border-border/50 text-xs font-mono text-muted-foreground truncate max-w-[280px]">
              https://client-portal.bwtng.live/v3
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              200 OK
            </span>
          </div>

          {/* Interactive Screen Preview */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-card/40 to-background min-h-[260px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                  BW
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-12 rounded bg-muted/60" />
                  <div className="h-2 w-16 rounded bg-muted/60" />
                  <div className="h-2 w-10 rounded bg-muted/60" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-card border border-border/70">
                  <span className="text-[11px] text-muted-foreground block mb-1">Server Response</span>
                  <span className="text-xl font-bold font-mono text-foreground tabular-nums">18ms</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">Edge Cloud Node</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/70">
                  <span className="text-[11px] text-muted-foreground block mb-1">Lighthouse Score</span>
                  <span className="text-xl font-bold font-mono text-primary tabular-nums">100 / 100</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">Green Zone</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/70">
                  <span className="text-[11px] text-muted-foreground block mb-1">Bundle Size</span>
                  <span className="text-xl font-bold font-mono text-foreground tabular-nums">42.4 KB</span>
                  <span className="text-[10px] text-muted-foreground block mt-1">Gzipped & Tree-shaken</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span>Dynamic Breakpoint Simulation: <strong className="text-foreground capitalize">{device}</strong></span>
              <span className="font-mono text-primary">Hydrated with React 18 & TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Spec Tabs */}
      <div className="grid md:grid-cols-3 gap-4 relative z-10">
        <div className="p-5 rounded-xl bg-background/60 border border-border/70">
          <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
            <Code2 className="w-4 h-4" /> Next-Gen Frontend
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Component-driven architecture using TypeScript, Tailwind CSS, and headless Radix primitives for accessibility.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-background/60 border border-border/70">
          <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
            <Server className="w-4 h-4" /> Resilient Backend
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Scalable Node.js, Express microservices, and managed relational Cloud SQL databases with automated migration pipelines.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-background/60 border border-border/70">
          <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" /> Enterprise Security
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Strict CSP headers, TLS 1.3 encryption, Paystack tokenized transactions, and Firebase RBAC authorization rules.
          </p>
        </div>
      </div>
    </div>
  );
}
