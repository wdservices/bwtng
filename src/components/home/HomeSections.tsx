import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Globe, Smartphone, Brain, Briefcase,
  Layers, Box, ShieldCheck, Check, Sparkles, Rocket, Zap,
  Code2, Database, Cpu, Terminal, ChevronRight, CheckCircle2,
  Phone, Mail, MessageSquare, Lock, Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, Eyebrow } from './Reveal';
import { clientProjects, products, MUSEUM_URL } from '@/data/portfolio';
import TechGlobe3D from '@/components/TechGlobe3D';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

/* ---------------- HERO (LEFT TEXT + RIGHT BORDERLESS 3D TECH GLOBE) ---------------- */
export const StudioHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax & scale for deep layered effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.92, 0.35]);

  return (
    <motion.section
      ref={heroRef}
      style={{ scale: heroScale, opacity: heroOpacity }}
      className="relative min-h-[88vh] sm:min-h-[96vh] flex items-center overflow-hidden bg-background pt-24 sm:pt-28 pb-20 sm:pb-32 z-10 will-change-transform"
    >
      {/* Background Cybernetic Grid & Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] opacity-80"
          aria-hidden="true"
        />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/90 to-transparent" aria-hidden="true" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Adjusted Text Size & Value Proposition */}
          <motion.div style={{ y: contentY }} className="lg:col-span-6 space-y-6">
            {/* Smart Studio Telemetry Strip */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-card/85 border border-primary/30 backdrop-blur-md text-[11px] sm:text-xs text-muted-foreground shadow-sm max-w-full overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-foreground font-medium whitespace-nowrap">Port Harcourt, Nigeria</span>
              <span aria-hidden="true" className="text-border">·</span>
              <span className="whitespace-nowrap">Full-Stack &amp; AI Studio</span>
              <span aria-hidden="true" className="text-border hidden sm:inline">·</span>
              <span className="text-primary font-medium hidden sm:inline whitespace-nowrap">Available for Q2</span>
            </motion.div>

            {/* Elegant, Unclustered Hero Headline with Open Spacing and Natural Rhythm */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.2] sm:leading-[1.22] tracking-tight max-w-xl text-balance"
            >
              We turn{' '}
              <span className="text-primary font-bold">ambitious ideas</span>{' '}
              into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-200 to-white font-bold drop-shadow-[0_2px_14px_rgba(59,130,246,0.35)]">
                digital experiences.
              </span>
            </motion.h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              We design and engineer bespoke software, high-performance mobile apps, AI automation pipelines, and immersive digital platforms tailored to solve real problems.
            </p>

            {/* Quantified Metrics */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-muted-foreground font-medium pt-1">
              <div>
                <span className="text-foreground font-bold text-sm tabular-nums">756+</span> Projects Shipped
              </div>
              <span aria-hidden="true" className="text-border">·</span>
              <div>
                <span className="text-foreground font-bold text-sm tabular-nums">500+</span> Client Partners
              </div>
              <span aria-hidden="true" className="text-border">·</span>
              <div>
                <span className="text-foreground font-bold text-sm tabular-nums">2–6 Wks</span> Average Delivery
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center">
                <a href="#ecosystem">
                  Explore Architecture <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 font-semibold bg-card/60 backdrop-blur-md hover:bg-card w-full sm:w-auto justify-center">
                <a href="#work">Explore Our Work</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Borderless 3D Tech Globe Model blending seamlessly into background */}
          <motion.div style={{ y: globeY }} className="lg:col-span-6 flex items-center justify-center lg:justify-end w-full min-w-0">
            <TechGlobe3D />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------------- SERVICES OVERVIEW (OVERLAPPING STACK OVER HERO) ---------------- */
const serviceCategories = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Platforms & Systems',
    desc: 'High-speed, conversion-optimised web platforms, client portals, and scalable SaaS solutions.',
    tags: ['Next.js / React', 'TypeScript', 'Tailwind', 'REST / GraphQL'],
    href: '/web-development',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Native and cross-platform iOS & Android mobile products crafted for fluid everyday utility.',
    tags: ['React Native', 'Flutter', 'Offline-First', 'Push Engine'],
    href: '/mobile-app-development',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Solutions & Automation',
    desc: 'LLM agents, automated enterprise pipelines, intelligent search, and predictive workflows.',
    tags: ['Gemini / GPT-4', 'RAG Pipelines', 'Process Automation', 'Custom Fine-Tuning'],
    href: '/ai-services',
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Operations & Management Tools',
    desc: 'Custom inventory tracking, billing portals, hospital and school administration platforms.',
    tags: ['Role-Based Access', 'Audit Logs', 'Real-time Analytics', 'Multi-tenant'],
    href: '/digital-tools',
  },
  {
    id: 'immersive',
    icon: Box,
    title: '3D & Immersive Experiences',
    desc: 'Interactive WebGL 3D galleries, virtual showrooms, and historical digital preservation.',
    tags: ['Three.js', 'WebGL', 'Spatial Audio', '3D Asset Pipelines'],
    href: '#museum',
  },
  {
    id: 'growth',
    icon: Rocket,
    title: 'Growth & Search Architecture',
    desc: 'Technical SEO audits, domain authority expansion, and conversion funnel optimization.',
    tags: ['Core Web Vitals', 'Structured Schema', 'Content Automation', 'Analytics'],
    href: '/seo-services',
  },
];

export const ServicesOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const smoothHeaderY = useSpring(headerY, { stiffness: 120, damping: 25 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 -mt-8 sm:-mt-14 md:-mt-28 py-16 sm:py-20 md:py-24 bg-card/95 backdrop-blur-2xl rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-primary/20 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div style={{ y: smoothHeaderY }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Eyebrow>Capabilities &amp; Architecture</Eyebrow>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.08] sm:leading-[1.05]">
                Engineered with precision. Built to scale.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              From high-traffic portals to autonomous AI assistants, our engineering practice turns operational friction into competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* Smart Bento Grid with layered depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {serviceCategories.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-background/80 border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/60">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div>
                  {/* Clean unboxed tags with dividers */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground mb-6 pt-4 border-t border-border/50">
                    {s.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-foreground/70">{tag}</span>
                        {tIdx < s.tags.length - 1 && <span aria-hidden="true" className="text-border">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Explore service <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- STACKING CLIENT PROJECT CARD (SCROLL-LINKED OVERLAP) ---------------- */
interface StackingCardProps {
  project: (typeof clientProjects)[0];
  index: number;
  total: number;
}

const StackingProjectCard: React.FC<StackingCardProps> = ({ project, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 120px', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.7]);
  const smoothScale = useSpring(scale, { stiffness: 150, damping: 25 });

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: isDesktop ? smoothScale : 1,
        opacity: isDesktop ? opacity : 1,
        top: isDesktop ? `${80 + index * 12}px` : undefined,
        zIndex: 10 + index,
      }}
      className="relative lg:sticky rounded-3xl bg-card border border-border/90 p-5 sm:p-6 md:p-8 shadow-[0_-15px_45px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-xl"
    >
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Adjusted Preview Window (16:10 browser frame) */}
        <div className="lg:col-span-7 min-w-0">
          <a
            href={project.url}
            {...ext}
            aria-label={`Visit live deployment: ${project.name}`}
            className="group block rounded-2xl overflow-hidden border border-border/80 bg-background shadow-md hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Browser Chrome Header */}
            <div className="flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-muted/40 border-b border-border/60">
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="ml-2 sm:ml-3 text-xs text-muted-foreground font-mono truncate min-w-0 flex-1">
                  {project.url.replace('https://', '').replace(/\/$/, '')}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-emerald-400 shrink-0 whitespace-nowrap pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden xs:inline-block" />
                Live Production
              </span>
            </div>

            <div className="aspect-[16/10] overflow-hidden bg-muted/20 relative">
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
                width={960}
                height={600}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        </div>

        {/* Project Specs */}
        <div className="lg:col-span-5 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground mb-3 font-mono">
              <span className="whitespace-nowrap shrink-0">0{index + 1} / 0{total}</span>
              <span aria-hidden="true" className="shrink-0">·</span>
              <span className="text-primary font-medium">{project.category}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              {project.name}
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {project.note && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-background/60 border border-border/60 text-xs text-foreground/80 leading-relaxed mb-5 sm:mb-6">
                <span className="font-semibold text-primary">Engineered Highlight: </span>
                {project.note}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2">
            <a
              href={project.url}
              {...ext}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Visit Live System <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <span className="text-[11px] sm:text-xs text-muted-foreground">Full-Stack Solution</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- CLIENT WORK (STACKING CARDS OVER SCROLL) ---------------- */
export const ClientWork = () => {
  const [filter, setFilter] = useState<'all' | 'hospitality' | 'corporate' | 'platform'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = clientProjects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'hospitality') return p.category.toLowerCase().includes('hospitality');
    if (filter === 'corporate') return p.category.toLowerCase().includes('corporate') || p.category.toLowerCase().includes('consulting');
    if (filter === 'platform') return p.category.toLowerCase().includes('raffle') || p.category.toLowerCase().includes('competition');
    return true;
  });

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-25 -mt-8 sm:-mt-14 md:-mt-20 py-16 sm:py-24 md:py-28 bg-background rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-border/90 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <Eyebrow>Verified Production Deployments</Eyebrow>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.08] sm:leading-[1]">
                Products we have built.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              Proportionate, production-grade digital solutions engineered for leading commercial enterprises across Nigeria.
            </p>
          </div>
        </Reveal>

        {/* Interactive Segmented Filter Controls - horizontal scroll with no overflow blow-out */}
        <div className="flex items-center gap-1.5 p-1.5 bg-card border border-border/80 rounded-xl max-w-full overflow-x-auto no-scrollbar mb-8 sm:mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'hospitality', label: 'Hospitality & Stays' },
            { id: 'corporate', label: 'Corporate & Energy' },
            { id: 'platform', label: 'Digital Platforms' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as 'all' | 'hospitality' | 'corporate' | 'platform')}
              className={`px-3.5 sm:px-4 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === tab.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stacked Scrolling Cards Deck */}
        <div className="relative space-y-8 sm:space-y-12 pb-12 sm:pb-16">
          {filteredProjects.map((p, i) => (
            <StackingProjectCard
              key={p.slug}
              project={p}
              index={i}
              total={filteredProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- IN-HOUSE PRODUCTS (OVERLAPPING SMART GRID WITH PARALLAX) ---------------- */
export const InHouseProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inHouseList = products;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative z-30 -mt-8 sm:-mt-14 md:-mt-20 py-16 sm:py-24 md:py-28 bg-card/75 backdrop-blur-2xl rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-border shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
    >
      {/* Background Floating Grid Accent */}
      <motion.div
        style={{ y: bgParallax }}
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Eyebrow>Proprietary IP &amp; Lab Ventures</Eyebrow>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.08] sm:leading-[1] max-w-3xl">
                In-house products we are building.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              Autonomous digital products incubated inside Bluewaves Technology, addressing exam prep, city discovery, 3D heritage, and product authenticity.
            </p>
          </div>
        </Reveal>

        {/* Balanced, Proportionate Product Matrix (3 Columns Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {inHouseList.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05}>
              <article className="group h-full flex flex-col justify-between rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div>
                  {/* Compact Header & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                    <span className="text-primary font-medium">{p.category}</span>
                    <span
                      className={`text-[11px] font-mono ${
                        p.status === 'live' ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {p.status === 'live' ? '● Live' : '○ In Development'}
                    </span>
                  </div>

                  {/* Compact Image or Icon Preview */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-card/60 border border-border/60 mb-5 relative">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        loading="lazy"
                        width={640}
                        height={400}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
                        <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                        <span className="text-sm font-semibold text-foreground">{p.name}</span>
                        <span className="text-xs text-muted-foreground">Product Authentication Suite</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  {p.url ? (
                    <a
                      href={p.url}
                      {...ext}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {p.cta || 'Launch Product'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground font-mono">Private Beta</span>
                  )}
                  <span className="text-[11px] text-muted-foreground/60 font-mono">Bluewaves Labs</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- MUSEUM FEATURE (OVERLAPPING PARALLAX BANNER) ---------------- */
export const MuseumFeature = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={bannerRef}
      id="museum"
      className="relative z-35 -mt-8 sm:-mt-12 md:-mt-16 py-16 sm:py-24 bg-background rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-border shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden border border-border/90 bg-card p-5 sm:p-8 md:p-14 lg:p-16 shadow-2xl">
          {/* Background Image with Deep Parallax & High Visibility */}
          <motion.div style={{ y: imgY }} className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/image/work/sankofa.jpg"
              alt="Inside Sankofa Wing virtual museum"
              loading="lazy"
              width={1200}
              height={750}
              className="w-full h-full object-cover scale-105 opacity-85 object-center"
            />
            {/* Lighter, directional gradient that preserves text legibility on the left while keeping the 3D museum corridor and galleries vivid and clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/65 via-50% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-card/25" />
          </motion.div>

          <motion.div style={{ y: textParallax }} className="relative z-10 max-w-2xl bg-card/60 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <Eyebrow>Signature WebGL Experience</Eyebrow>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-5">
              Culture deserves more than a flat screen. <span className="text-primary">It deserves an experience.</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Sankofa Wing is our proprietary 3D digital museum built on WebGL. It transports visitors through virtual architectural galleries to explore African artefacts, digital sculpture, and heritage without geographical barriers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center">
                <a href={MUSEUM_URL} {...ext}>
                  Enter the 3D Museum <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <span className="text-[11px] sm:text-xs text-muted-foreground font-mono text-center sm:text-left">
                Desktop &amp; Mobile WebGL · No App Install Required
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- WHY & SMART ENGINEERING PROCESS (OVERLAPPING STACK) ---------------- */
const workflowPhases = [
  {
    step: '01',
    title: 'Requirement Architecture & Scope',
    desc: 'We map operational workflows, data contracts, and integration surfaces before writing any code.',
    highlight: 'Comprehensive SRS & Database Schema',
  },
  {
    step: '02',
    title: 'Iterative Sprint Implementation',
    desc: 'Full-stack engineering in rapid bi-weekly sprints with interactive staging environments for client review.',
    highlight: 'Continuous CI/CD Delivery',
  },
  {
    step: '03',
    title: 'Hardening, Security & QA',
    desc: 'Load simulation, penetration testing, database rule auditing, and cross-device optimization.',
    highlight: 'Zero-Downtime Migration',
  },
  {
    step: '04',
    title: 'Production Launch & SLA Support',
    desc: 'Deployment to redundant cloud infrastructure, domain telemetry setup, and continuous maintenance.',
    highlight: 'Dedicated Technical Support',
  },
];

export const WhyAndProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-40 -mt-8 sm:-mt-12 md:-mt-16 py-16 sm:py-24 md:py-28 bg-card/85 backdrop-blur-2xl rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-border shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div style={{ y: headerY }}>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <Eyebrow>Operational Reliability</Eyebrow>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.08] sm:leading-[1]">
                  The Bluewaves engineering framework.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-sm md:text-base">
                Predictable delivery timelines. Clean architectures. No black boxes.
              </p>
            </div>
          </Reveal>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {workflowPhases.map((w, idx) => (
            <Reveal key={w.step} delay={idx * 0.08}>
              <div className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-background/90 border border-border/80 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs text-primary font-bold mb-3 sm:mb-4 block">PHASE {w.step}</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 sm:mb-6">{w.desc}</p>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <span className="text-xs font-medium text-foreground/80">{w.highlight}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- REPLACEMENT FOR CONTACT SPACE: TECHNOLOGY RADAR & STUDIO INTELLIGENCE HUB ---------------- */
const TECH_PILLARS = [
  {
    id: 'ai',
    label: 'AI & Neural Systems',
    icon: Brain,
    badge: 'Autonomous & RAG',
    desc: 'Enterprise generative workflows, customized RAG pipelines, fine-tuned agents, and real-time multimodal intelligence.',
    metrics: [
      { label: 'Token Efficiency', value: '4.8x Optimized' },
      { label: 'Inference Latency', value: '<280ms' },
      { label: 'Context Retrieval', value: 'Hybrid Dense/BM25' },
    ],
    stack: [
      { name: 'Gemini 2.5 / GPT-4o', role: 'Foundation Models & Multimodal Reasoning', tag: 'Core Engine' },
      { name: 'Vector Datastores (Pinecone / Pgvector)', role: 'Embeddings & Semantic Document Indexing', tag: 'RAG' },
      { name: 'LangChain & LlamaIndex', role: 'Agent Tooling & Workflow Chains', tag: 'Orchestration' },
      { name: 'PyTorch / ONNX Runtime', role: 'Edge Inference & Custom Classifier Pipelines', tag: 'ML Ops' },
    ],
  },
  {
    id: 'web',
    label: 'Modern Full-Stack & 3D WebGL',
    icon: Code2,
    badge: 'Edge-Rendered & Spatial',
    desc: 'High-concurrency React 19 / Next.js web applications, sub-second TTFB, and GPU-accelerated Three.js spatial simulations.',
    metrics: [
      { label: 'Edge TTFB', value: '<35ms Global' },
      { label: 'Core Web Vitals', value: '98+ Score' },
      { label: 'Rendering Mode', value: 'Hybrid SSR/PPR' },
    ],
    stack: [
      { name: 'Next.js 15 & React 19', role: 'Server Components, Turbopack, Streaming', tag: 'Frontend Tier' },
      { name: 'TypeScript Strict', role: 'Zero-Any End-to-End Type Safety', tag: 'Language' },
      { name: 'Three.js & WebGL Shaders', role: 'Interactive 3D Virtual Showrooms & Museums', tag: 'Spatial' },
      { name: 'Tailwind CSS v4 & Framer Motion', role: 'Fluid Physics-Based Micro-Interactions', tag: 'UI Engine' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure & Data',
    icon: Database,
    badge: 'Fault-Tolerant & Scalable',
    desc: 'High-availability relational architectures, Redis in-memory pub/sub, automated CI/CD pipelines, and zero-downtime rollouts.',
    metrics: [
      { label: 'Target Availability', value: '99.98% SLA' },
      { label: 'DB Read Latency', value: '<6ms Cached' },
      { label: 'Security Grade', value: 'SOC2 / TLS 1.3' },
    ],
    stack: [
      { name: 'PostgreSQL & Cloud SQL', role: 'ACID Relational Storage with Connection Pooling', tag: 'Database' },
      { name: 'Redis Cache & Pub/Sub', role: 'Session Caching & Real-Time Presence', tag: 'Memory' },
      { name: 'Docker & Kubernetes Clusters', role: 'Container Orchestration & Auto-Scaling', tag: 'DevOps' },
      { name: 'Paystack, Flutterwave & Stripe', role: 'Secure Multi-Currency Payment Integrations', tag: 'FinTech' },
    ],
  },
  {
    id: 'mobile',
    label: 'Cross-Platform & Mobile',
    icon: Smartphone,
    badge: 'Native iOS & Android',
    desc: 'Fluid mobile applications engineered with offline-first local replication, native biometric authentication, and push dispatchers.',
    metrics: [
      { label: 'Frame Rate', value: '60–120 FPS' },
      { label: 'Offline State', value: 'Local SQLite Sync' },
      { label: 'App Bundle Size', value: '<24MB Optimized' },
    ],
    stack: [
      { name: 'React Native & Expo', role: 'Cross-Platform Architecture with Native Bridges', tag: 'Mobile Core' },
      { name: 'Flutter & Dart', role: 'High-Fidelity Canvas Rendering & Embedded Systems', tag: 'Alternate SDK' },
      { name: 'WatermelonDB / SQLite', role: 'Offline-First Encrypted Device Databases', tag: 'Storage' },
      { name: 'Firebase Cloud Messaging', role: 'Segmented Push Notification Gateway', tag: 'Telemetry' },
    ],
  },
];

const STUDIO_FAQS = [
  {
    q: 'Who owns the intellectual property and source code?',
    a: 'Your organisation owns 100% of all intellectual property, source code, database architectures, Figma files, and documentation. Everything is fully handed over to your Git repository upon project sign-off with zero vendor lock-in.',
  },
  {
    q: 'How does your sprint cadence and project review process work?',
    a: 'We work in focused two-week agile sprints. At the end of each sprint, you receive private staging access and a walkthrough demo. You have direct communication with our lead engineers in a dedicated Slack or WhatsApp channel.',
  },
  {
    q: 'Can Bluewaves integrate with existing enterprise software or legacy ERPs?',
    a: 'Yes. We frequently build custom API middleware, automated webhooks, and secure sync services connecting modern web and mobile apps to legacy accounting, hotel management, school portals, or proprietary ERP systems.',
  },
  {
    q: 'What warranty and post-launch SLA support is included?',
    a: 'All production deployments include a 30-day post-launch warranty covering bug resolutions, security telemetry checks, and server tuning. We also offer continuous maintenance SLAs for 24/7 uptime monitoring and automated backups.',
  },
];

export const StudioTechRadar = () => {
  const [activePillar, setActivePillar] = useState('ai');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentPillar = TECH_PILLARS.find(p => p.id === activePillar) || TECH_PILLARS[0];

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative z-45 -mt-8 sm:-mt-12 md:-mt-16 py-16 sm:py-24 md:py-28 bg-card/90 backdrop-blur-2xl rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-primary/25 shadow-[0_-30px_70px_-15px_rgba(0,0,0,0.8)]"
    >
      {/* Anchor point for header #start links */}
      <span id="start" className="sr-only">Studio Technology Ecosystem &amp; Intelligence Hub</span>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Eyebrow>Engineering Standards &amp; Architecture</Eyebrow>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.08] sm:leading-[1] max-w-2xl">
                The Bluewaves Technology Radar.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
              Explore the verified technologies, reliability metrics, and enterprise delivery standards that power all our proprietary IP and client systems.
            </p>
          </div>
        </Reveal>

        {/* 1. Interactive Technology Pillars Switcher - mobile scrollable */}
        <div className="flex items-center gap-2 p-1.5 bg-background/80 border border-border/80 rounded-2xl max-w-full overflow-x-auto mb-8 sm:mb-10 no-scrollbar">
          {TECH_PILLARS.map(pillar => {
            const active = pillar.id === activePillar;
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Active Pillar Architecture Card */}
        <div className="rounded-3xl border border-border/90 bg-background/80 p-5 sm:p-8 md:p-10 mb-14 sm:mb-20 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {currentPillar.badge}
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {currentPillar.label}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-2 max-w-2xl">
                {currentPillar.desc}
              </p>
            </div>

            {/* Pillar Telemetry Indicators - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 shrink-0 w-full lg:w-auto">
              {currentPillar.metrics.map(m => (
                <div key={m.label} className="p-3 sm:p-3.5 rounded-2xl bg-card border border-border/60 text-center">
                  <span className="block text-[10px] md:text-xs text-muted-foreground font-mono uppercase">{m.label}</span>
                  <span className="text-sm md:text-base font-bold text-foreground font-mono mt-0.5 sm:mt-1 block">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 sm:pt-8">
            {currentPillar.stack.map(tech => (
              <div
                key={tech.name}
                className="group p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.role}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-background border border-border/80 text-primary">
                  {tech.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Studio Delivery Standards & FAQ Accordion */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14 sm:mb-16">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>Operational Transparency</Eyebrow>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground leading-[1.1]">
              How we work &amp; protect your business.
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Clear commitments on code ownership, agile cadence, enterprise security, and long-term production reliability.
            </p>

            {/* Verified Certifications Pill Stack */}
            <div className="space-y-2 pt-2 sm:pt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border/60 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-foreground/90 font-medium">100% Repository &amp; IP Transfer Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border/60 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-foreground/90 font-medium">Bi-Weekly Staging Previews with Continuous CI/CD</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border/60 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-foreground/90 font-medium">Post-Launch Warranty &amp; SLA Uptime Telemetry</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {STUDIO_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border/80 bg-background/80 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-foreground text-sm md:text-base hover:text-primary transition-colors min-h-[44px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-90 text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Instant Direct Connect Launchpad (Replaces the Form completely with direct links) */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card/95 to-primary/10 p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Engineering Team Active · Rapid Dispatch
            </div>
            <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase text-foreground">
              Ready to architect your solution?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              Connect directly with our engineering team for technical scoping, architecture reviews, and sprint availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full lg:w-auto">
            <Button asChild size="lg" className="rounded-full px-7 h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center">
              <a href="https://wa.me/2347051551543?text=Hello%20Bluewaves%20Technology%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project." {...ext}>
                <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 h-12 font-semibold bg-background/80 hover:bg-background w-full sm:w-auto justify-center">
              <a href="tel:+2348108510085">
                <Phone className="w-4 h-4 mr-2" /> 0810 851 0085
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-5 h-12 font-semibold text-muted-foreground hover:text-foreground w-full sm:w-auto justify-center">
              <a href="mailto:info@bwtng.live">
                <Mail className="w-4 h-4 mr-2" /> info@bwtng.live
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Backwards-compatible alias for Index.tsx or any other import
export const StartProject = StudioTechRadar;
