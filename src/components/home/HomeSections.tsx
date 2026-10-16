import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Globe, Smartphone, Brain, Briefcase, GraduationCap,
  HeartPulse, Layers, Box, ShieldCheck, Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Reveal, Eyebrow } from './Reveal';
import { clientProjects, products, MUSEUM_URL } from '@/data/portfolio';
import heroImg from '@/assets/hero-waves.jpg';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

/* ---------------- HERO ---------------- */
export const StudioHero = () => {
  const words = ['We', 'turn', 'ambitious', 'ideas', 'into', 'digital', 'experiences.'];
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-background pt-28 pb-16">
      <img
        src={heroImg} alt="" aria-hidden="true" width={1600} height={1008} fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-right opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Bluewaves Technology — Digital innovation studio, Port Harcourt
        </motion.p>
        <h1 className="font-display font-bold uppercase text-foreground leading-[0.95] tracking-tight text-[2.6rem] sm:text-6xl lg:text-[5.5rem] max-w-5xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <motion.span className={`inline-block ${w === 'digital' || w === 'experiences.' ? 'text-primary' : ''}`}
                initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end max-w-5xl">
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            We design and engineer software, mobile apps, business platforms and immersive experiences
            for organisations that want technology built around real problems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8 h-12 font-semibold group">
              <a href="#start">Start a Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 font-semibold bg-transparent">
              <a href="#work">Explore Our Work</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- SERVICES ---------------- */
const services = [
  { icon: Globe, title: 'Website Development', desc: 'Fast, search-friendly websites that present your business clearly and convert visitors.', to: '/web-development', span: 'lg:col-span-2' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'iOS and Android apps designed around how your customers actually work.', to: '/mobile-app-development' },
  { icon: Brain, title: 'AI Development & Integration', desc: 'Practical AI features — assistants, automation and intelligent search — inside your products.', to: '/ai-services' },
  { icon: Briefcase, title: 'Business Management Systems', desc: 'Operations, inventory, ordering and reporting tools tailored to your workflow.', to: '/digital-tools' },
  { icon: GraduationCap, title: 'School & Education Technology', desc: 'Learning platforms, exam preparation and school administration software.', to: '/services' },
  { icon: HeartPulse, title: 'Hospital Management Software', desc: 'Patient records, appointments and billing tools for healthcare providers.', to: '/services' },
  { icon: Layers, title: 'Custom Platforms & SaaS', desc: 'Multi-user platforms and subscription products engineered to scale.', to: '/services', span: 'lg:col-span-2' },
  { icon: Box, title: 'Immersive Experiences & 3D', desc: 'Interactive 3D environments, virtual tours and digital museums.', to: '#museum', span: 'lg:col-span-2', accent: true },
];

export const ServicesOverview = () => (
  <section id="services" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <Reveal>
        <Eyebrow>What we build</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-3xl leading-[1.05]">
          Technology designed around real problems.
        </h2>
      </Reveal>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {services.map((s, i) => {
          const Inner = (
            <>
              <div className="flex items-start justify-between">
                <s.icon className={`h-6 w-6 ${s.accent ? 'text-studio-violet' : 'text-primary'}`} aria-hidden="true" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
              </div>
              <div className="mt-12">
                <p className="text-xs text-muted-foreground font-mono mb-2">0{i + 1}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </>
          );
          const cls = `group relative bg-background p-7 min-h-[240px] flex flex-col justify-between hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${s.span ?? ''}`;
          return s.to.startsWith('#')
            ? <a key={s.title} href={s.to} className={cls}>{Inner}</a>
            : <Link key={s.title} to={s.to} className={cls}>{Inner}</Link>;
        })}
      </div>
    </div>
  </section>
);

/* ---------------- CLIENT WORK ---------------- */
export const ClientWork = () => (
  <section id="work" className="py-28 bg-card/40 border-y border-border">
    <div className="container mx-auto px-6">
      <Reveal>
        <Eyebrow>Client projects</Eyebrow>
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground leading-[1]">Real businesses. Real solutions.</h2>
          <p className="text-lg text-muted-foreground max-w-md lg:justify-self-end">
            We partner with organisations to turn complex needs into useful digital experiences.
          </p>
        </div>
      </Reveal>
      <div className="mt-20 space-y-24">
        {clientProjects.map((p, i) => (
          <Reveal key={p.slug}>
            <article className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <a href={p.url} {...ext} aria-label={`Visit ${p.name} (opens in a new tab)`}
                className="lg:col-span-7 group block rounded-xl overflow-hidden border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40" /><span className="w-2 h-2 rounded-full bg-muted-foreground/40" /><span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono truncate">{p.url.replace('https://', '')}</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={`Screenshot of the ${p.name} website`} loading="lazy" width={1200} height={750}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </a>
              <div className="lg:col-span-5">
                <p className="text-xs font-mono text-muted-foreground mb-4">0{i + 1} / 0{clientProjects.length}</p>
                <p className="text-sm text-primary mb-3">{p.category}</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">{p.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                {p.note && <p className="text-sm text-muted-foreground/80 leading-relaxed mt-4 border-l-2 border-primary/40 pl-4">{p.note}</p>}
                <a href={p.url} {...ext}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors">
                  Visit Live Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- PRODUCTS ---------------- */
export const InHouseProducts = () => {
  const list = products.filter(p => !p.featured);
  return (
    <section id="products" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <Reveal>
          <Eyebrow>Bluewaves in-house products</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground leading-[1] max-w-4xl">
            Ideas we believe in. Products we are building.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Beyond client work, we develop digital products that explore new ways to solve everyday problems.
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="group h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors">
                <div className="aspect-[16/9] overflow-hidden bg-secondary relative">
                  {p.image ? (
                    <img src={p.image} alt={`${p.name} interface preview`} loading="lazy" width={1200} height={750}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                      {p.slug === 'asemi' ? <ShieldCheck className="h-12 w-12 text-primary" aria-hidden="true" /> : <Loader2 className="h-12 w-12 text-studio-violet" aria-hidden="true" />}
                      <span className="font-display text-2xl text-foreground">{p.name}</span>
                    </div>
                  )}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-background/80 text-foreground border border-border">In-house</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="text-sm text-primary">{p.category}</p>
                    {p.status === 'in-development' && (
                      <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-studio-violet/50 text-studio-violet">In Development</span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{p.name}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  {p.url && p.cta && (
                    <a href={p.url} {...ext} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {p.cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- MUSEUM ---------------- */
export const MuseumFeature = () => (
  <section id="museum" className="relative overflow-hidden bg-background">
    <div className="relative min-h-[90vh] flex items-center">
      <img src="/image/work/sankofa.jpg" alt="Inside the Sankofa Wing virtual museum gallery hall" loading="lazy" width={1200} height={750}
        className="absolute inset-0 w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-6 py-28">
        <Reveal>
          <Eyebrow>Signature product · Sankofa Wing</Eyebrow>
          <h2 className="font-display text-4xl md:text-7xl font-bold uppercase text-foreground leading-[0.98] max-w-5xl">
            Culture deserves more than a screen. <span className="text-studio-violet">It deserves an experience.</span>
          </h2>
          <p className="mt-8 text-lg text-foreground/80 max-w-xl leading-relaxed">
            Explore Sankofa Wing, an immersive digital museum experience that brings heritage and technology together through interactive 3D exploration.
          </p>
          <Button asChild size="lg" className="mt-10 rounded-full px-9 h-14 text-base font-semibold group">
            <a href={MUSEUM_URL} {...ext}>Enter the Digital Museum <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </Button>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------- WHY + PROCESS ---------------- */
const principles = [
  'Understand the business problem before choosing the technology.',
  'Design around usability and the real customer journey.',
  'Build maintainable, secure, scalable software.',
  'Test, launch, and improve products with a long-term mindset.',
];
const steps = [
  ['Discover', 'Understand the problem and define the solution.'],
  ['Design', 'Map user journeys and craft the interface.'],
  ['Develop', 'Engineer and test the product.'],
  ['Launch & Evolve', 'Deploy, learn, maintain, and improve.'],
];

export const WhyAndProcess = () => (
  <section id="about" className="py-28 bg-card/40 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow>Why Bluewaves</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground leading-[1.02]">
            Engineered with purpose. Designed for people.
          </h2>
        </Reveal>
        <ol className="space-y-0">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <li className="flex gap-6 py-6 border-b border-border">
                <span className="font-mono text-sm text-primary pt-1">0{i + 1}</span>
                <p className="text-lg text-foreground">{p}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="mt-28">
        <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
        <ol className="relative grid md:grid-cols-4 gap-10 mt-6">
          <div className="hidden md:block absolute top-[11px] left-0 right-0 h-px bg-border" aria-hidden="true" />
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <li className="relative">
                <span className="relative z-10 block w-[22px] h-[22px] rounded-full border-2 border-primary bg-background mb-8" aria-hidden="true" />
                <p className="font-mono text-xs text-muted-foreground mb-2">Step 0{i + 1}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{t}</h3>
                <p className="text-muted-foreground">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* ---------------- FINAL CTA + FORM ---------------- */
const WHATSAPP = 'https://wa.me/2347051551543';
const projectTypes = ['Website', 'Mobile App', 'AI Solution', 'Business System', 'Education Tech', 'Hospital Software', 'Custom Platform / SaaS', 'Immersive / 3D', 'Other'];

export const StartProject = () => {
  const [f, setF] = useState({ name: '', email: '', type: '', desc: '' });
  const [err, setErr] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n: Record<string, string> = {};
    if (!f.name.trim()) n.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = 'Please enter a valid email.';
    if (!f.type) n.type = 'Please choose a project type.';
    if (f.desc.trim().length < 10) n.desc = 'Tell us a little more (at least 10 characters).';
    setErr(n);
    if (Object.keys(n).length) return;
    const msg = `Hello Bluewaves! I'm ${f.name} (${f.email}).\nProject type: ${f.type}\n\n${f.desc}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    setOpened(true);
  };

  const field = 'bg-background border-border h-12';
  return (
    <section id="start" className="py-28 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow>Start a project</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground leading-[1]">
            Your next big idea deserves to be built right.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Tell us what you're trying to achieve. Let's explore how the right digital solution can move your business forward.
          </p>
          <div className="mt-10 space-y-2 text-sm text-muted-foreground">
            <p><a className="hover:text-primary" href="mailto:info@bwtng.live">info@bwtng.live</a></p>
            <p><a className="hover:text-primary" href="tel:+2348108510085">0810 851 0085</a></p>
            <p>Ada George, Port Harcourt, Nigeria</p>
          </div>
          <Button asChild variant="outline" className="mt-8 rounded-full bg-transparent">
            <Link to="/contact">Contact Bluewaves</Link>
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="rounded-2xl border border-border bg-card p-8 space-y-5">
            {[
              { k: 'name', label: 'Name', el: <Input id="pf-name" className={field} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} aria-invalid={!!err.name} /> },
              { k: 'email', label: 'Email', el: <Input id="pf-email" type="email" className={field} value={f.email} onChange={e => setF({ ...f, email: e.target.value })} aria-invalid={!!err.email} /> },
            ].map(x => (
              <div key={x.k}>
                <label htmlFor={`pf-${x.k}`} className="block text-sm font-medium text-foreground mb-2">{x.label}</label>
                {x.el}
                {err[x.k] && <p className="text-sm text-destructive mt-1.5">{err[x.k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="pf-type" className="block text-sm font-medium text-foreground mb-2">Project type</label>
              <select id="pf-type" value={f.type} onChange={e => setF({ ...f, type: e.target.value })} aria-invalid={!!err.type}
                className="w-full h-12 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Select one…</option>
                {projectTypes.map(t => <option key={t}>{t}</option>)}
              </select>
              {err.type && <p className="text-sm text-destructive mt-1.5">{err.type}</p>}
            </div>
            <div>
              <label htmlFor="pf-desc" className="block text-sm font-medium text-foreground mb-2">Project description</label>
              <Textarea id="pf-desc" className="bg-background border-border min-h-[130px]" value={f.desc} onChange={e => setF({ ...f, desc: e.target.value })} aria-invalid={!!err.desc} />
              {err.desc && <p className="text-sm text-destructive mt-1.5">{err.desc}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full h-12 font-semibold">Send enquiry via WhatsApp</Button>
            <p className="text-xs text-muted-foreground text-center" role="status">
              {opened ? 'WhatsApp opened with your message — press send there to reach us.' : 'Your details open in WhatsApp so you can send them to our team directly.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
