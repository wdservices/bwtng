import React, { useState } from 'react';
import { Smartphone, Bell, Wifi, WifiOff, Fingerprint, Battery, Sparkles, Check } from 'lucide-react';

export default function MobileAppShowcase() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const [online, setOnline] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const triggerPush = () => {
    setNotification('Order #4920 payment confirmed via Paystack. Processing receipt...');
    setTimeout(() => setNotification(null), 4500);
  };

  return (
    <div className="my-16 rounded-3xl bg-card border border-border/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/70">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
            Interactive Mobile Simulator
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Native iOS & Android Mobile Engineering
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-background/80 border border-border rounded-xl">
            <button
              onClick={() => setPlatform('ios')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                platform === 'ios' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Apple iOS
            </button>
            <button
              onClick={() => setPlatform('android')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                platform === 'android' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Google Android
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Phone Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-[300px] h-[540px] rounded-[44px] border-[6px] border-border/90 bg-background shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 ring-1 ring-primary/20">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary/40 mr-2" />
              <span className="w-2 h-2 rounded-full bg-muted/60" />
            </div>

            {/* Top Status Bar */}
            <div className="flex items-center justify-between px-3 pt-4 text-[10px] font-mono text-muted-foreground">
              <span>09:41</span>
              <div className="flex items-center gap-2">
                {online ? <Wifi className="w-3 h-3 text-emerald-400" /> : <WifiOff className="w-3 h-3 text-red-400" />}
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Active Push Notification Banner */}
            {notification && (
              <div className="absolute top-12 inset-x-3 p-3 rounded-2xl bg-card border border-primary/50 text-xs shadow-xl z-30 animate-fade-in">
                <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
                  <Bell className="w-3.5 h-3.5 text-primary" /> Bluewaves App Notification
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug">{notification}</p>
              </div>
            )}

            {/* Screen Content */}
            <div className="space-y-3 pt-6 flex-1 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 mx-auto flex items-center justify-center text-primary mb-3">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-sm text-foreground">
                  {platform === 'ios' ? 'iOS Swift / React Native' : 'Android Kotlin / Flutter'}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {online ? 'Cloud Synchronized · Live WebSocket' : 'Offline Storage Active (SQLite/MMKV)'}
                </p>
              </div>

              {/* Biometric Button */}
              <button
                onClick={() => setUnlocked(!unlocked)}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  unlocked ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'bg-card border-border hover:border-primary/50 text-foreground'
                }`}
              >
                <Fingerprint className="w-4 h-4" />
                {unlocked ? 'Biometrics Authenticated' : 'Test Biometric Auth'}
              </button>
            </div>

            {/* Bottom Home Indicator */}
            <div className="w-28 h-1 rounded-full bg-muted-foreground/40 mx-auto mb-1" />
          </div>
        </div>

        {/* Feature Controls & Capabilities */}
        <div className="lg:col-span-7 space-y-5">
          <div className="p-5 rounded-2xl bg-background/70 border border-border">
            <h4 className="font-display text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Interactive Simulator Controls
            </h4>
            <p className="text-xs text-muted-foreground mb-4">
              Click the controls below to test real mobile engine behaviors in the simulator on the left.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={triggerPush}
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-card border border-border hover:border-primary text-foreground flex items-center gap-1.5 transition-colors"
              >
                <Bell className="w-3.5 h-3.5 text-primary" /> Trigger Push Notification
              </button>
              <button
                onClick={() => setOnline(!online)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                  online ? 'bg-card border-border text-foreground hover:border-primary' : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                {online ? <Wifi className="w-3.5 h-3.5 text-emerald-400" /> : <WifiOff className="w-3.5 h-3.5" />}
                Toggle Offline Mode ({online ? 'Online' : 'Offline'})
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-background/50 border border-border/80">
              <span className="text-xs font-semibold text-foreground block mb-1">Offline-First Engine</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Local SQLite cache with background bi-directional sync ensures uninterrupted utility with spotty network.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background/50 border border-border/80">
              <span className="text-xs font-semibold text-foreground block mb-1">Store Publishing & Review</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Full lifecycle management through Apple App Store and Google Play Console approvals and certificate signing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
