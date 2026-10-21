import React, { useState } from 'react';
import { PenTool, MousePointer, Eye, Layers, Check, Sparkles } from 'lucide-react';

export default function UIUXShowcase() {
  const [viewMode, setViewMode] = useState<'wireframe' | 'hifi'>('hifi');

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Product Design & Usability Lab
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            From Low-Fidelity Wireframe to High-Fidelity Design System
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          <button
            onClick={() => setViewMode('wireframe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              viewMode === 'wireframe' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Lo-Fi Wireframe
          </button>
          <button
            onClick={() => setViewMode('hifi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              viewMode === 'hifi' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Hi-Fi Production UI
          </button>
        </div>
      </div>

      {/* Interactive Mock Canvas */}
      <div className="p-6 md:p-8 rounded-2xl bg-background border border-border shadow-lg mb-8 transition-all">
        {viewMode === 'wireframe' ? (
          <div className="space-y-6 font-mono text-xs text-muted-foreground">
            <div className="border border-dashed border-border/80 p-4 rounded-xl flex justify-between items-center">
              <span>[NAVBAR: Brand Logo + 5 Primary Links + CTA Button]</span>
              <span className="text-primary">[44px Touch Target OK]</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-dashed border-border/80 p-6 rounded-xl space-y-2">
                <span className="text-foreground block font-bold">[HERO VALUE PROPOSITION]</span>
                <p>3-line headline with 65ch measure constraint and primary checkout action.</p>
                <div className="h-8 w-28 bg-muted/40 rounded flex items-center justify-center text-[10px]">
                  [BUTTON: Primary]
                </div>
              </div>
              <div className="border border-dashed border-border/80 p-6 rounded-xl flex items-center justify-center min-h-[160px]">
                <span>[MEDIA: 16:10 Aspect Ratio Interactive Visual]</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-card border border-border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-bold text-xs text-foreground">Bluewaves Design System v3</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono">WCAG 2.1 AA Compliant</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-card/60 border border-border">
                <span className="text-xs text-muted-foreground block mb-1">User Journey Efficiency</span>
                <span className="text-2xl font-bold font-mono text-foreground">3 Steps to Checkout</span>
                <p className="text-[11px] text-muted-foreground mt-2">Zero unnecessary account wall friction.</p>
              </div>
              <div className="p-5 rounded-xl bg-card/60 border border-border">
                <span className="text-xs text-muted-foreground block mb-1">Touch Target Minimum</span>
                <span className="text-2xl font-bold font-mono text-emerald-400">48px × 48px</span>
                <p className="text-[11px] text-muted-foreground mt-2">Optimized for one-handed mobile grip.</p>
              </div>
              <div className="p-5 rounded-xl bg-card/60 border border-border">
                <span className="text-xs text-muted-foreground block mb-1">Component Token Reuse</span>
                <span className="text-2xl font-bold font-mono text-primary">100% Modular</span>
                <p className="text-[11px] text-muted-foreground mt-2">Atomic tokens synced with engineering repo.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground font-mono">
        <span>Figma Community Architecture · Zero-pill micro-interactions</span>
        <span className="text-primary font-semibold">User Centered Research & Heuristic Evaluation</span>
      </div>
    </div>
  );
}
