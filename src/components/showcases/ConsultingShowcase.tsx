import React, { useState } from 'react';
import { Target, TrendingUp, Lightbulb, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';

export default function ConsultingShowcase() {
  const [selectedStage, setSelectedStage] = useState<'audit' | 'architecture' | 'execution'>('audit');

  const roadmap = {
    audit: {
      title: 'Phase 1: Operational Diagnostic & Tech Debt',
      focus: 'Evaluating manual friction, data silos, and outdated legacy software stacks.',
      deliverable: 'Technical Audit Scorecard & Gap Analysis (14 Days)',
      metric: 'Average 34% cost reduction identified',
    },
    architecture: {
      title: 'Phase 2: Modern Enterprise Blueprint',
      focus: 'Defining cloud data pipelines, role-based access models, and vendor integrations.',
      deliverable: 'Solution Architecture SRS & Cost-Benefit Model',
      metric: 'Zero-lockin open standards',
    },
    execution: {
      title: 'Phase 3: Phased Migration & Governance',
      focus: 'Staged migration sprints with automated backups, data integrity checks, and team training.',
      deliverable: 'Full Deployment, Admin Training & SLA Support',
      metric: '99.9% uptime guaranteed',
    },
  };

  const active = roadmap[selectedStage];

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Executive Advisory Matrix
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Digital Transformation Framework & ROI Engine
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          {[
            { id: 'audit', label: '1. Diagnostic' },
            { id: 'architecture', label: '2. Blueprint' },
            { id: 'execution', label: '3. Execution' },
          ].map(stage => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedStage === stage.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 p-7 rounded-2xl bg-background border border-border shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-primary font-semibold uppercase">{active.deliverable}</span>
            <span className="text-xs text-emerald-400 font-mono font-bold">{active.metric}</span>
          </div>

          <h4 className="font-display text-xl font-bold text-foreground">{active.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{active.focus}</p>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
            <span>Direct Advisory by Principal Technical Architects</span>
            <span className="text-foreground font-semibold flex items-center gap-1">
              Guaranteed Delivery Windows <ChevronRight className="w-3.5 h-3.5 text-primary" />
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl bg-background/60 border border-border">
            <span className="text-xs text-muted-foreground block mb-1">Commercial Impact</span>
            <span className="text-xl font-bold text-foreground font-mono">+180% Operational Output</span>
          </div>
          <div className="p-4 rounded-xl bg-background/60 border border-border">
            <span className="text-xs text-muted-foreground block mb-1">Time to First Production Sprint</span>
            <span className="text-xl font-bold text-primary font-mono">&lt; 14 Business Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
