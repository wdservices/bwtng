import React, { useState } from 'react';
import { Search, Globe, Gauge, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function SEOShowcase() {
  const [keyword, setKeyword] = useState('Best software company Port Harcourt');
  const [activeTab, setActiveTab] = useState<'serp' | 'vitals' | 'schema'>('serp');

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Search Engineering Lab
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            SERP Preview & Technical Search Audit
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
          {[
            { id: 'serp', label: 'Google SERP' },
            { id: 'vitals', label: 'Core Vitals' },
            { id: 'schema', label: 'JSON-LD Schema' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'serp' && (
        <div className="space-y-6">
          {/* Simulated Google Search Box */}
          <div className="p-3.5 rounded-full bg-background border border-border/80 flex items-center gap-3 px-5 max-w-xl">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              className="bg-transparent border-none text-xs text-foreground focus:outline-none flex-1"
              placeholder="Enter search query..."
            />
            <span className="text-[10px] text-primary font-mono font-semibold">Rank #1 Target</span>
          </div>

          {/* Google Snippet Card */}
          <div className="p-6 rounded-2xl bg-background border border-border shadow-md max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>https://www.bwtng.live › software-solutions</span>
            </div>
            <h4 className="text-lg font-medium text-[#8ab4f8] hover:underline cursor-pointer">
              Bluewaves Technology — Leading Digital Solutions & Software Nigeria
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bluewaves Technology builds high-performance web applications, mobile apps, and custom enterprise tools for organisations in Port Harcourt and across Nigeria. 756+ successful deployments.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[11px] text-muted-foreground/80 font-mono">
              <span className="text-emerald-400">Rating: 4.9 ★★★★★ (500+ reviews)</span>
              <span>·</span>
              <span>Port Harcourt, NG</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'vitals' && (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-background border border-border">
            <span className="text-xs text-muted-foreground block mb-2 font-mono">LCP (Largest Contentful Paint)</span>
            <span className="text-3xl font-bold font-mono text-emerald-400 tabular-nums">0.82s</span>
            <span className="text-xs text-emerald-400 block mt-2">Target &lt; 2.5s (Passed)</span>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border">
            <span className="text-xs text-muted-foreground block mb-2 font-mono">INP (Interaction to Next Paint)</span>
            <span className="text-3xl font-bold font-mono text-emerald-400 tabular-nums">38ms</span>
            <span className="text-xs text-emerald-400 block mt-2">Target &lt; 200ms (Passed)</span>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border">
            <span className="text-xs text-muted-foreground block mb-2 font-mono">CLS (Cumulative Layout Shift)</span>
            <span className="text-3xl font-bold font-mono text-emerald-400 tabular-nums">0.002</span>
            <span className="text-xs text-emerald-400 block mt-2">Target &lt; 0.1 (Passed)</span>
          </div>
        </div>
      )}

      {activeTab === 'schema' && (
        <div className="p-5 rounded-2xl bg-background border border-border font-mono text-xs text-foreground overflow-x-auto leading-relaxed">
          <pre>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bluewaves Technology",
  "telephone": "+2348108510085",
  "address": {
    "addressLocality": "Port Harcourt",
    "addressRegion": "Rivers State",
    "addressCountry": "NG"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
  }
}`}</pre>
        </div>
      )}
    </div>
  );
}
