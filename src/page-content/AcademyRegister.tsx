import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, CheckCircle2, Clock, CalendarDays, Video,
  ArrowRight, ArrowLeft, MessageCircle, Loader2, Users
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
  earlyBirdPrice: 55000,
  regularPrice: 55000,
  seatLimit: 50,
  seatsTaken: 0,
  whatsappGroupLink: 'https://chat.whatsapp.com/',
  status: 'active',
};

const INCLUDED = [
  '21 days of live virtual training',
  '3 sessions per week · 2 hours each',
  'Recordings of every session',
  'Private community access',
  'Project reviews and feedback',
  'Certificate of Completion',
];

export default function AcademyRegister() {
  const { cohort, loading: cohortLoading } = useActiveCohort();
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
  const now = new Date();
  const deadline = activeCohort.registrationDeadline ? new Date(activeCohort.registrationDeadline) : null;
  
  if (deadline && now <= deadline) {
    return activeCohort.earlyBirdPrice;
  }
  return activeCohort.regularPrice;
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
    // Store registration data in state and redirect to payment page
    navigate(`/academy/payment`, { 
      state: { 
        registrationData: parsed.data,
        cohort: activeCohort,
        price 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Helmet>
        <title>{`AI Builder Cohort ${activeCohort.number} Registration — AI Builder Academy`}</title>
        <meta name="description" content="Reserve your seat in the AI Builder Academy. Build full-stack products with AI in 21 days." />
      </Helmet>

      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <Header />

      {cohortLoading ? (
        <div className="flex items-center justify-center py-32">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 lg:sticky lg:top-24 space-y-5"
            >
              <div className="rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 p-7">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-5">
                  <Sparkles className="w-3 h-3" /> Cohort {activeCohort.number}
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold font-display leading-tight mb-3 tracking-tight">
                  Build Full-Stack Products with AI in 21 Days
                </h1>
                <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                  A live virtual masterclass. Ship a real product from idea to deployment.
                </p>

                 <div className="flex flex-wrap gap-1.5 mb-7">
                   <Pill icon={CalendarDays}>3 weeks</Pill>
                   <Pill icon={Clock}>3× / week</Pill>
                   <Pill icon={Video}>Live</Pill>
                   <Pill icon={Users}>
                     {activeCohort.seatsTaken} / {activeCohort.seatLimit} Seats
                   </Pill>
                   {activeCohort.registrationDeadline && (
                     <Pill icon={CalendarDays}>
                       Register by: {new Date(activeCohort.registrationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                     </Pill>
                   )}
                 </div>

                <div className="py-5 border-y border-border/60 mb-6">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-semibold font-display tracking-tight">
                      ₦{activeCohort.earlyBirdPrice.toLocaleString()}
                    </span>
                    {activeCohort.regularPrice > activeCohort.earlyBirdPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₦{activeCohort.regularPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1.5 uppercase tracking-wider">
                    Early bird tuition
                  </p>
                </div>

                <div className="space-y-2.5">
                  {INCLUDED.map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/85 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 overflow-hidden">
                {success ? (
                  <div className="p-8 sm:p-10 text-center">
                    <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold font-display mb-2 tracking-tight">You're in.</h2>
                    <p className="text-muted-foreground mb-1">
                      Your seat in <span className="text-foreground font-semibold">{activeCohort.name}</span> is reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Onboarding details will arrive via WhatsApp and email within 24 hours.
                    </p>
                    <div className="rounded-xl bg-muted/30 border border-border p-5 mb-6 text-left">
                      <p className="text-xs text-muted-foreground mb-1">Amount Due</p>
                      <p className="text-3xl font-semibold font-display text-foreground tracking-tight">₦{price.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Payment instructions will be sent to your WhatsApp. Your seat is reserved as <strong className="text-amber-400">pending payment</strong>.
                      </p>
                    </div>
                    {activeCohort.whatsappGroupLink && (
                      <a href={activeCohort.whatsappGroupLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium">
                          <MessageCircle className="w-4 h-4 mr-2" /> Join WhatsApp Group
                        </Button>
                      </a>
                    )}
                    <Link to="/ai-builder-academy" className="block mt-2">
                      <Button variant="ghost" className="w-full rounded-xl">Back to Academy</Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={submit} className="p-7 sm:p-10">
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-semibold font-display tracking-tight mb-1.5">
                        AI Builder Cohort {activeCohort.number} Registration
                      </h2>
                      <p className="text-sm text-muted-foreground">Tell us a bit about you to lock in your seat.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Full Name" name="fullName" placeholder="Jane Doe" value={form.fullName} onChange={set} error={errors.fullName} required />
                      <FormField label="Email Address" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={set} error={errors.email} required />
                      <FormField label="WhatsApp Number" name="whatsappNumber" placeholder="+234 800 000 0000" value={form.whatsappNumber} onChange={set} error={errors.whatsappNumber} required />
                      <FormField label="Country" name="country" placeholder="Nigeria" value={form.country} onChange={set} error={errors.country} required />

                      <div className="sm:col-span-2">
                        <Label htmlFor="skillLevel" className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
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
                              className={`h-11 rounded-lg border text-sm font-medium transition-all ${
                                form.skillLevel === o.v
                                  ? 'border-primary bg-primary/10 text-foreground'
                                  : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground'
                              }`}
                            >
                              {o.l}
                            </button>
                          ))}
                        </div>
                        {errors.skillLevel && <p className="text-xs text-destructive mt-1.5">{errors.skillLevel}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="motivation" className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
                          Why do you want to join? <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="motivation"
                          rows={4}
                          placeholder="Tell us what you want to build and what you hope to achieve..."
                          value={form.motivation}
                          onChange={(e) => set('motivation', e.target.value)}
                          className="bg-transparent resize-none rounded-lg"
                        />
                        {errors.motivation && <p className="text-xs text-destructive mt-1.5">{errors.motivation}</p>}
                      </div>
                    </div>

                    <div className="mt-7 rounded-xl bg-muted/20 border border-border/70 p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                          {price < activeCohort.regularPrice ? 'Early Bird' : 'Total'}
                        </p>
                        <p className="text-2xl font-semibold font-display text-foreground tracking-tight">₦{price.toLocaleString()}</p>
                        {price < activeCohort.regularPrice && (
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            Regular: <span className="line-through">₦{activeCohort.regularPrice.toLocaleString()}</span>
                          </p>
                        )}
                      </div>
                      <div className="text-right text-[11px] text-muted-foreground">
                        <p>Reserved as pending</p>
                        <p>Payment after registration</p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-5 h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm"
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Reserving seat...</>
                      ) : (
                        <>Complete registration <ArrowRight className="w-4 h-4 ml-2" /></>
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
          )}

      <Footer />
    </div>
  );
}

function Pill({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60 text-[11px] text-foreground/80">
      <Icon className="w-3 h-3 text-primary" />
      {children}
    </span>
  );
}

function FormField({ label, name, value, onChange, error, type = 'text', placeholder, required }: any) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="h-11 bg-transparent border-border rounded-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
      />
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}
