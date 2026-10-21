import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Smartphone, Check, Zap, Palette, Shield, ArrowRight,
  CheckCircle2, Bell, Lock, WifiOff, Cpu, Layers
} from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import MobileAppShowcase from '@/components/showcases/MobileAppShowcase';
import { Link } from 'react-router-dom';

const MOBILE_DELIVERABLES = [
  {
    title: 'PrepVerse — Exam Intelligence App',
    desc: 'Proprietary offline-capable testing suite engineered with instant mock grading, simulated exam timer, and rich performance analytics.',
    image: '/image/work/prepverse.jpg',
    tag: 'React Native · SQLite · Offline-First',
    features: ['100% Offline question bank sync', 'Intelligent analytics & topic scoring', 'Instant automated result generation'],
  },
  {
    title: 'EmergenSee — Rapid SOS Dispatch',
    desc: 'Emergency security and medical alert system connecting distressed citizens with nearby responders in real-time.',
    image: '/emergensee.png',
    tag: 'Geolocation · WebSockets · Background Tasks',
    features: ['Sub-second panic beacon broadcast', 'Live GPS vector tracking', 'Automated SMS & voice dial fallback'],
  },
  {
    title: 'Commercial E-Commerce & FinTech Apps',
    desc: 'High-conversion consumer shopping, digital wallet, and subscription mobile applications with instant Paystack checkout.',
    image: '/image/work/raffila.jpg',
    tag: 'Flutter · Paystack SDK · Push Gateway',
    features: ['Biometric FaceID / TouchID authentication', 'One-click wallet funding & card tokenize', 'Segmented push promotions'],
  },
];

const MOBILE_SPECS = [
  { title: 'Core Frameworks', tech: 'React Native, Expo (EAS Build), Flutter & Dart, Swift / Kotlin Native Bridges' },
  { title: 'Local Persistence', tech: 'SQLite, WatermelonDB, Encrypted MMKV Storage, Offline-First Sync' },
  { title: 'Push & Telemetry', tech: 'Firebase Cloud Messaging (FCM), Apple APNs, Sentry Real-Time Crash Monitoring' },
  { title: 'Hardware Integration', tech: 'Camera QR Scanners, BLE Proximity, GPS Geofencing, Biometric Secure Enclave' },
  { title: 'Store Deployment', tech: 'Apple App Store (TestFlight & Production), Google Play Console, Zero-Rejection Guarantee' },
  { title: 'Performance Target', tech: '60–120 FPS Native Threading, Sub-20MB Bundle Optimization, Fast Cold Start' },
];

const MobileAppDevelopment: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Mobile App Development Nigeria | iOS &amp; Android Apps | Bluewaves Technology</title>
        <meta name="description" content="Custom mobile app development for iOS and Android in Nigeria. High performance apps built with React Native, Flutter, Swift, and Kotlin by Bluewaves Technology in Port Harcourt." />
        <link rel="canonical" href="https://www.bwtng.live/mobile-app-development" />
      </Helmet>
      <Header />

      {/* Hero Section with High-Resolution Image Banner */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold max-w-full truncate">
                <Smartphone className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">NATIVE &amp; CROSS-PLATFORM MOBILE PRACTICE</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-[1.08] text-balance">
                Custom <span className="text-primary">Mobile Apps</span> Engineered for Everyday Life.
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We engineer native iOS and Android applications with silky-smooth 60–120 FPS animations, encrypted offline-first databases, and reliable hardware integrations.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 w-full sm:w-auto">
                  <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20I%20want%20to%20discuss%20a%20mobile%20app%20project." target="_blank" rel="noopener noreferrer">
                    Initiate App Scoping <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold bg-card/60 backdrop-blur-md w-full sm:w-auto">
                  <Link to="/portfolio">Explore Mobile Portfolio</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground pt-4 border-t border-border/60">
                <span>📱 iOS &amp; Android App Stores</span>
                <span className="text-border hidden sm:inline">·</span>
                <span>📶 100% Offline-First Sync</span>
                <span className="text-border hidden sm:inline">·</span>
                <span>🔐 Biometric Security</span>
              </div>
            </div>

            {/* Visual Hero Image Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/image/mobile-app-hero.jpg"
                  alt="Modern mobile application development with native testing and responsive UI"
                  loading="lazy"
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-foreground font-semibold">Engine: React Native &amp; Flutter</span>
                  </div>
                  <span className="text-primary font-bold">120 FPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mobile Engineering Workbench */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Device Simulation</span>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground mt-2">
              Interactive Mobile Device Workbench
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore responsive mobile device frames, native biometric prompts, and offline synchronization states.
            </p>
          </div>
          <MobileAppShowcase />
        </div>
      </section>

      {/* Visual Deliverables Grid: Real mobile apps we build */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">Verified App Deployments</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground mt-2">
                Mobile products we have engineered.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              From high-stakes emergency dispatch to offline school examinations, our mobile architectures handle heavy everyday usage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MOBILE_DELIVERABLES.map((del, idx) => (
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
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                    <Link to="/portfolio">Inspect App Specifications</Link>
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
              Our Mobile Engineering Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOBILE_SPECS.map((spec, i) => (
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
              Mobile App Development FAQ
            </h2>
          </div>
          <ServiceFAQ serviceName="mobile-app-development" />
        </div>
      </section>

      {/* Final Callout Bar */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/90 to-primary/10 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-primary font-bold tracking-wider block">Kickstart Your Mobile App</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
                Ready to publish your app to the world?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Chat with our mobile lead developers for architecture consultation, store compliance advisory, and sprint pricing.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <a href="https://wa.me/2347051551543?text=Hi%20Bluewaves%2C%20let%27s%20scope%20a%20new%20mobile%20app%20project." target="_blank" rel="noopener noreferrer">
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

export default MobileAppDevelopment;
