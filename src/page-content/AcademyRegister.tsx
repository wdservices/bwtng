import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, Rocket, Brain, Code, Users, Award, GraduationCap,
  CheckCircle2, Clock, CalendarDays, Video, ArrowRight, ArrowLeft,
  ShieldCheck, CreditCard, MessageCircle, Loader2, Star
} from 'lucide-react';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createRegistration } from '@/services/academyService';
import { useActiveCohort } from '@/hooks/useActiveCohort';
import { toast } from '@/hooks/use-toast';
import type { Cohort } from '@/types/academy';

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  whatsappNumber: z.string().trim().min(7).max(20),
  country: z.string().trim().min(2).max(60),
  skillLevel: z.string().min(1),
  motivation: z.string().trim().min(10).max(800),
});

const DEFAULT_COHORT: Cohort = {
  id: 'default',
  name: 'AI Builder Academy',
  number: 1,
  startDate: '',
  endDate: '',
  registrationDeadline: '',
  earlyBirdPrice: 50000,
  regularPrice: 55000,
  seatLimit: 50,
  whatsappGroupLink: 'https://chat.whatsapp.com/',
  status: 'active',
};

const BENEFITS = [
  { icon: Rocket, text: 'Build a real software product from idea to launch' },
  { icon: Brain, text: 'Master modern AI-assisted development workflows' },
  { icon: Code, text: 'Full-stack skills: frontend, backend, APIs, databases' },
  { icon: Users, text: 'Direct mentorship throughout the program' },
  { icon: Award, text: 'Graduate with a portfolio-ready project' },
  { icon: GraduationCap, text: 'Certificate of Completion' },
];

const INCLUDED = [
  '21 days of live virtual training',
  '3 sessions per week · 2 hours each',
  'Recordings of every session',
  'Private community access',
  'Project reviews and feedback',
  'Certificate of Completion',
];

export default function AcademyRegister() {
  const { cohort } = useActiveCohort();
  const navigate = useNavigate();
  const activeCohort = cohort ?? DEFAULT_COHORT;

  const [form, setForm] = useState({
    fullName: '', email: '', whatsappNumber: '', country: '',
    skillLevel: '', motivation: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const price = useMemo(() => {
    if (!activeCohort.earlyBirdDeadline) return activeCohort.earlyBirdPrice;
    return new Date() <= new Date(activeCohort.earlyBirdDeadline)
      ? activeCohort.earlyBirdPrice
      : activeCohort.regularPrice;
  }, [activeCohort]);

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => { errs[i.path.join('.')] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const d = parsed.data;
      await createRegistration({
        cohortId: activeCohort.id,
        cohortName: activeCohort.name,
        fullName: d.fullName,
        email: d.email,
        whatsappNumber: d.whatsappNumber,
        country: d.country,
        skillLevel: d.skillLevel,
        motivation: d.motivation,
        paymentStatus: 'pending',
        paymentReference: '',
        amount: price,
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      toast({ title: 'Registration failed', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Helmet>
        <title>Register — AI Builder Academy</title>
        <meta name="description" content="Reserve your seat in the AI Builder Academy. Build full-stack products with AI in 21 days." />
      </Helmet>

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-500/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <Header />

      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 lg:sticky lg:top-24 space-y-5"
            >
              <div className="rounded-3xl bg-card/60 backdrop-blur-xl border border-border/60 p-6 sm:p-8 shadow-2xl shadow-primary/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                    Cohort {activeCohort.number} · Registration Open
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold font-display leading-[1.1] mb-3">
                  Build Real Software Products with{' '}
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI in 21 Days
                  </span>
                </h1>

                <p className="text-sm text-muted-foreground mb-6">
                  A live 3-week masterclass where you go from idea to deployed product. Frontend, backend, databases, AI workflows, and a real launch.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Pill icon={CalendarDays}>3 Weeks</Pill>
                  <Pill icon={Clock}>3× / week</Pill>
                  <Pill icon={Video}>Live Virtual</Pill>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 p-5 mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">Tuition</p>
                  <div className="flex items-end justify-between gap-3 mb-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Early Bird</p>
                      <p className="text-3xl font-bold font-display text-foreground">
                        ₦{activeCohort.earlyBirdPrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Regular</p>
                      <p className="text-lg font-semibold text-muted-foreground line-through">
                        ₦{activeCohort.regularPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Save ₦{(activeCohort.regularPrice - activeCohort.earlyBirdPrice).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-2">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">What's Included</p>
                  {INCLUDED.map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-card/40 backdrop-blur-xl border border-border/60 p-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">Why Join</p>
                <div className="grid grid-cols-2 gap-3">
                  {BENEFITS.map(b => (
                    <div key={b.text} className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center shrink-0">
                        <b.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] text-foreground/80 leading-snug">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Trust icon={ShieldCheck} label="Secure" />
                <Trust icon={CreditCard} label="Easy Pay" />
                <Trust icon={MessageCircle} label="WhatsApp" />
              </div>
            </motion.aside>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl bg-card/70 backdrop-blur-xl border border-border/60 shadow-2xl shadow-primary/5 overflow-hidden">
                {success ? (
                  <div className="p-8 sm:p-10 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-5 shadow-lg shadow-primary/40">
                      <CheckCircle2 className="w-9 h-9 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display mb-2">You're In!</h2>
                    <p className="text-muted-foreground mb-1">
                      Your seat in <span className="text-foreground font-semibold">{activeCohort.name}</span> is reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Onboarding details will arrive via WhatsApp and email within 24 hours.
                    </p>
                    <div className="rounded-2xl bg-muted/40 border border-border p-5 mb-6 text-left">
                      <p className="text-xs text-muted-foreground mb-1">Amount Due</p>
                      <p className="text-3xl font-bold font-display text-foreground">₦{price.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Payment instructions will be sent to your WhatsApp. Your seat is reserved as <strong className="text-amber-400">pending payment</strong>.
                      </p>
                    </div>
                    {activeCohort.whatsappGroupLink && (
                      <a href={activeCohort.whatsappGroupLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold">
                          <MessageCircle className="w-4 h-4 mr-2" /> Join WhatsApp Group
                        </Button>
                      </a>
                    )}
                    <Link to="/ai-builder-academy" className="block mt-3">
                      <Button variant="ghost" className="w-full rounded-full">Back to Academy</Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={submit} className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-display mb-1">Reserve Your Seat</h2>
                      <p className="text-sm text-muted-foreground">Fill in your details to complete registration</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField label="Full Name" name="fullName" placeholder="Jane Doe" value={form.fullName} onChange={set} error={errors.fullName} required />
                      <FormField label="Email Address" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={set} error={errors.email} required />
                      <FormField label="WhatsApp Number" name="whatsappNumber" placeholder="+234 800 000 0000" value={form.whatsappNumber} onChange={set} error={errors.whatsappNumber} required />
                      <FormField label="Country" name="country" placeholder="Nigeria" value={form.country} onChange={set} error={errors.country} required />

                      <div className="sm:col-span-2">
                        <Label htmlFor="skillLevel" className="text-sm font-medium mb-1.5 block">
                          Skill Level <span className="text-destructive">*</span>
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { v: 'beginner', l: 'Beginner' },
                            { v: 'some-experience', l: 'Some Exp.' },
                            { v: 'intermediate', l: 'Intermediate' },
                            { v: 'advanced', l: 'Advanced' },
                          ].map(o => (
                            <button
                              key={o.v}
                              type="button"
                              onClick={() => set('skillLevel', o.v)}
                              className={`h-11 rounded-xl border text-sm font-medium transition-all ${
                                form.skillLevel === o.v
                                  ? 'border-primary bg-primary/15 text-foreground shadow-[0_0_0_3px_rgba(99,102,241,0.15)]'
                                  : 'border-input bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                              }`}
                            >
                              {o.l}
                            </button>
                          ))}
                        </div>
                        {errors.skillLevel && <p className="text-xs text-destructive mt-1.5">{errors.skillLevel}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="motivation" className="text-sm font-medium mb-1.5 block">
                          Why do you want to join? <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="motivation"
                          rows={4}
                          placeholder="Tell us what you want to build and what you hope to achieve..."
                          value={form.motivation}
                          onChange={(e) => set('motivation', e.target.value)}
                          className="bg-background/50 resize-none"
                        />
                        {errors.motivation && <p className="text-xs text-destructive mt-1.5">{errors.motivation}</p>}
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-muted/30 border border-border p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Total to pay</p>
                        <p className="text-2xl font-bold font-display text-foreground">₦{price.toLocaleString()}</p>
                      </div>
                      <div className="text-right text-[11px] text-muted-foreground">
                        <p>Reserved as pending</p>
                        <p>Payment after registration</p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-5 h-14 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-extrabold text-base uppercase tracking-wide shadow-[0_10px_40px_rgba(244,63,94,0.5)] hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(244,63,94,0.7)] transition-all ring-2 ring-white/20"
                    >
                      {submitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Reserving seat...</>
                      ) : (
                        <>Reserve My Seat · ₦{price.toLocaleString()} <ArrowRight className="w-5 h-5 ml-2" /></>
                      )}
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center mt-3">
                      By registering you agree to be contacted about the program.
                    </p>
                  </form>
                )}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Pill({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/80 border border-border/80 text-xs text-foreground">
      <Icon className="w-3 h-3 text-primary" />
      {children}
    </span>
  );
}

function Trust({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="rounded-xl bg-card/40 backdrop-blur border border-border/60 p-3 flex flex-col items-center text-center gap-1">
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</span>
    </div>
  );
}

function FormField({ label, name, value, onChange, error, type = 'text', placeholder, required }: any) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-medium mb-1.5 block">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="h-11 bg-background/50 border-border focus-visible:ring-primary"
      />
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}
