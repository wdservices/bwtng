import React, { useState } from 'react';
import { Brain, Sparkles, Terminal, Play, Zap, Cpu, Database } from 'lucide-react';

export default function AIShowcase() {
  const [selectedAgent, setSelectedAgent] = useState<'support' | 'extractor' | 'rag'>('support');
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState(
    'Neural Agent initialized. Ready to execute RAG retrieval against enterprise documents.'
  );

  const runAgent = () => {
    setIsGenerating(true);
    setOutput('Analyzing query intent...\nRetrieving top-k semantic embeddings from vector store...\nApplying domain system instructions...\nSynthesizing verified output...');

    setTimeout(() => {
      setIsGenerating(false);
      if (selectedAgent === 'support') {
        setOutput('Hello! Your annual invoice #BW-8821 for ₦2,400,000 has been verified on Paystack. Transaction ID: ref_88301. Your receipts are attached to this account.');
      } else if (selectedAgent === 'extractor') {
        setOutput('{\n  "vendor": "Megavantage Holdings",\n  "amount_naira": 4500000,\n  "vat_exempt": false,\n  "status": "APPROVED_BY_AUDITOR",\n  "confidence_score": 0.994\n}');
      } else {
        setOutput('Retrieved 3 enterprise context chunks:\n1. [SOP-v4.2] Return policy for digital goods\n2. [ESCROW-REF] Paystack settlement timeline 24-48 hours\nConclusion: User request complies with SLA terms. Proceeding with refund validation.');
      }
    }, 900);
  };

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Interactive AI Playground
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Enterprise LLM Agents & Vector RAG Pipeline
          </h3>
        </div>

        {/* Agent switcher tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          {[
            { id: 'support', label: 'Support Agent' },
            { id: 'extractor', label: 'JSON Extractor' },
            { id: 'rag', label: 'RAG Knowledge' },
          ].map(agent => (
            <button
              key={agent.id}
              onClick={() => setSelectedAgent(agent.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedAgent === agent.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {agent.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Configuration & Trigger */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-background/70 border border-border">
            <h4 className="font-display text-sm font-bold text-foreground mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" /> Active Model Configuration
            </h4>
            <div className="space-y-2.5 text-xs text-muted-foreground mb-4 font-mono">
              <div className="flex justify-between">
                <span>Core Engine:</span>
                <span className="text-foreground">Gemini 2.5 / GPT-4o</span>
              </div>
              <div className="flex justify-between">
                <span>Vector Dimension:</span>
                <span className="text-foreground">768 Float32 Cosine</span>
              </div>
              <div className="flex justify-between">
                <span>Temperature:</span>
                <span className="text-foreground">0.2 (High Precision)</span>
              </div>
              <div className="flex justify-between">
                <span>Execution Mode:</span>
                <span className="text-emerald-400">Streaming API</span>
              </div>
            </div>

            <button
              onClick={runAgent}
              disabled={isGenerating}
              className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isGenerating ? 'Synthesizing Response...' : 'Execute Agent Query'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-background/50 border border-border/80 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground block mb-1">Domain Grounding:</span>
            Enterprise documents are converted into high-density vector embeddings, enabling hallucination-free retrieval.
          </div>
        </div>

        {/* Right Column: Simulated Terminal Stream Output */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-background shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border/70">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>bluewaves-agent-telemetry</span>
              </div>
              <span className="text-[10px] font-mono text-primary flex items-center gap-1">
                <Cpu className="w-3 h-3" /> Latency: 240ms
              </span>
            </div>

            <div className="p-6 font-mono text-xs leading-relaxed text-foreground min-h-[220px] whitespace-pre-wrap bg-background/90">
              {output}
              {isGenerating && <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />}
            </div>

            <div className="px-4 py-2 bg-muted/20 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Grounding: 100% Verified</span>
              <span>Tokens: 142 · Cost: $0.00028</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
