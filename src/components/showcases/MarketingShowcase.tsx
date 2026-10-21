import React, { useState } from 'react';
import { Megaphone, TrendingUp, Users, Target, ArrowRight, DollarSign, BarChart2 } from 'lucide-react';

export default function MarketingShowcase() {
  const [budgetNaira, setBudgetNaira] = useState(500000);

  const estimatedReach = Math.round(budgetNaira * 0.42);
  const estimatedClicks = Math.round(budgetNaira * 0.024);
  const estimatedQualifiedLeads = Math.round(budgetNaira * 0.0028);
  const estimatedPipeline = Math.round(estimatedQualifiedLeads * 350000);

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Performance Marketing Lab
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Multi-Channel Acquisition & Conversion Funnel
          </h3>
        </div>

        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          ROAS Benchmark: 4.8x – 6.2x
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Budget Estimator */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-background border border-border space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="budget-slider" className="text-xs font-medium text-foreground">
                Monthly Advertising Investment
              </label>
              <span className="text-sm font-bold font-mono text-primary">
                ₦{budgetNaira.toLocaleString()}
              </span>
            </div>
            <input
              id="budget-slider"
              type="range"
              min="150000"
              max="3000000"
              step="50000"
              value={budgetNaira}
              onChange={e => setBudgetNaira(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
              <span>₦150k</span>
              <span>₦1.5M</span>
              <span>₦3.0M</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Estimated Targeted Reach:</span>
              <span className="text-sm font-bold font-mono text-foreground">~{estimatedReach.toLocaleString()}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">High-Intent Visits:</span>
              <span className="text-sm font-bold font-mono text-foreground">~{estimatedClicks.toLocaleString()}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Qualified B2B Inquiries:</span>
              <span className="text-sm font-bold font-mono text-emerald-400 font-bold">~{estimatedQualifiedLeads} Leads</span>
            </div>
          </div>
        </div>

        {/* Funnel Visualizer */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 rounded-xl bg-background/60 border border-border flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">1. Meta Ads & Google Search Ads</span>
            <span className="text-xs font-mono text-muted-foreground">Demographic & Keyword Intent</span>
          </div>
          <div className="p-4 rounded-xl bg-background/60 border border-border flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">2. Conversion-Optimized Landing Page</span>
            <span className="text-xs font-mono text-muted-foreground">&lt; 1.2s Load Time · WhatsApp Hook</span>
          </div>
          <div className="p-4 rounded-xl bg-background/60 border border-border flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">3. Lead Qualification & CRM Sync</span>
            <span className="text-xs font-mono text-muted-foreground">Instant Sales Notification</span>
          </div>
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Projected Sales Pipeline Generated:</span>
            <span className="text-base font-bold font-mono text-primary">~₦{estimatedPipeline.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
