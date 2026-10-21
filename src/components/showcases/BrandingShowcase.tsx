import React, { useState } from 'react';
import { Palette, Sparkles, Check, Layers, Type, Eye } from 'lucide-react';

export default function BrandingShowcase() {
  const [activeTheme, setActiveTheme] = useState<'cobalt' | 'emerald' | 'amber'>('cobalt');

  const themes = {
    cobalt: {
      name: 'Cobalt Velocity',
      primary: '#2563EB',
      secondary: '#0F172A',
      accent: '#60A5FA',
      ratio: '8.4:1 (AAA High Contrast)',
      vibe: 'Enterprise Tech, FinTech & Infrastructure',
    },
    emerald: {
      name: 'Verdant Scale',
      primary: '#059669',
      secondary: '#064E3B',
      accent: '#34D399',
      ratio: '9.2:1 (AAA High Contrast)',
      vibe: 'BioTech, Sustainability & Health',
    },
    amber: {
      name: 'Aurum Kinetic',
      primary: '#D97706',
      secondary: '#451A03',
      accent: '#FBBF24',
      ratio: '7.8:1 (AAA High Contrast)',
      vibe: 'Hospitality, Luxury & Creative Studios',
    },
  };

  const current = themes[activeTheme];

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Design Tokens & Brand Studio
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Dynamic Identity System & Contrast Ratio Laboratory
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          {(['cobalt', 'emerald', 'amber'] as const).map(t => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                activeTheme === t ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t} System
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Visual Brand Asset Card */}
        <div className="lg:col-span-6 p-7 rounded-2xl border border-border bg-background shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md transition-colors"
                style={{ backgroundColor: current.primary }}
              >
                BW
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-foreground">{current.name}</h4>
                <span className="text-xs text-muted-foreground">{current.vibe}</span>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400">{current.ratio}</span>
          </div>

          {/* Color swatches */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl border border-border text-center space-y-1">
              <div className="h-10 rounded-lg mb-2 shadow-inner" style={{ backgroundColor: current.primary }} />
              <span className="text-[11px] font-mono text-foreground font-semibold block">Primary</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">{current.primary}</span>
            </div>
            <div className="p-3.5 rounded-xl border border-border text-center space-y-1">
              <div className="h-10 rounded-lg mb-2 shadow-inner" style={{ backgroundColor: current.secondary }} />
              <span className="text-[11px] font-mono text-foreground font-semibold block">Deep Base</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">{current.secondary}</span>
            </div>
            <div className="p-3.5 rounded-xl border border-border text-center space-y-1">
              <div className="h-10 rounded-lg mb-2 shadow-inner" style={{ backgroundColor: current.accent }} />
              <span className="text-[11px] font-mono text-foreground font-semibold block">Accent</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">{current.accent}</span>
            </div>
          </div>

          {/* Typography pairing sample */}
          <div className="p-4 rounded-xl bg-card border border-border/80">
            <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">Typography System</span>
            <div className="font-display font-bold text-xl text-foreground mb-1">Space Grotesk 700 Headline</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Paired with Inter 400/500 body prose for sustained reading stamina across digital interfaces and printed materials.
            </p>
          </div>
        </div>

        {/* Brand System Deliverables */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-2xl bg-background/60 border border-border">
            <h4 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" /> Comprehensive Brand Deliverables
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Vector Master Files (SVG, AI, EPS, PDF) in responsive horizontal, vertical, and icon-only configurations.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Tokens for Tailwind CSS & Figma Design Systems (semantic color tokens, type scale, border radius math).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Stationery, 3D social share cards, brand guidelines handbook, and investor pitch deck theme templates.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
