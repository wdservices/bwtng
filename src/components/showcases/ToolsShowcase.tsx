import React, { useState } from 'react';
import { Layers, ArrowRight, Zap, CheckCircle2, ShieldAlert, RefreshCw, Send, Database } from 'lucide-react';

export default function ToolsShowcase() {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'success'>('idle');

  const runPipeline = () => {
    setPipelineState('running');
    setTimeout(() => {
      setPipelineState('success');
      setTimeout(() => setPipelineState('idle'), 4000);
    }, 1200);
  };

  const steps = [
    { title: 'Trigger Event', desc: 'Customer submits form / payment', icon: Zap },
    { title: 'Data Validation', desc: 'Schema checks & deduping', icon: ShieldAlert },
    { title: 'Database Write', desc: 'Atomic multi-tenant record', icon: Database },
    { title: 'External Dispatch', desc: 'WhatsApp & Email receipt', icon: Send },
  ];

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Enterprise Workflow Visualizer
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Automated Operations & Systems Integration
          </h3>
        </div>

        <button
          onClick={runPipeline}
          disabled={pipelineState === 'running'}
          className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs flex items-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${pipelineState === 'running' ? 'animate-spin' : ''}`} />
          {pipelineState === 'running' ? 'Simulating Pipeline...' : 'Test Live Workflow'}
        </button>
      </div>

      {/* Visual Pipeline Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className={`p-5 rounded-2xl border transition-all ${
              pipelineState === 'running'
                ? 'border-primary/80 bg-primary/10 shadow-lg shadow-primary/10'
                : pipelineState === 'success'
                ? 'border-emerald-500/80 bg-emerald-500/10'
                : 'border-border/80 bg-background/80'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <s.icon className={`w-4 h-4 ${pipelineState === 'success' ? 'text-emerald-400' : 'text-primary'}`} />
            </div>
            <h4 className="font-display font-bold text-sm text-foreground mb-1">{s.title}</h4>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Real-time telemetry log */}
      <div className="p-4 rounded-xl bg-background/80 border border-border/70 flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${pipelineState === 'success' ? 'bg-emerald-400' : 'bg-primary animate-pulse'}`} />
          Status: {pipelineState === 'running' ? 'Executing webhook relay...' : pipelineState === 'success' ? 'Pipeline Complete (0 errors)' : 'System Ready · Standing by'}
        </span>
        <span className="text-primary">Integrations: Paystack · WhatsApp · Cloud SQL · SendGrid</span>
      </div>
    </div>
  );
}
