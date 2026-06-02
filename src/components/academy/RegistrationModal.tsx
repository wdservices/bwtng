import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { createRegistration } from '@/services/academyService';
import type { Cohort } from '@/types/academy';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  whatsappNumber: z.string().trim().min(7).max(20),
  country: z.string().trim().min(2).max(60),
  skillLevel: z.string().min(1),
  motivation: z.string().trim().min(10).max(800),
  expectations: z.string().trim().min(10).max(800),
});

interface Props {
  open: boolean;
  onClose: () => void;
  cohort: Cohort;
}

export default function RegistrationModal({ open, onClose, cohort }: Props) {
  const [form, setForm] = useState({
    fullName: '', email: '', whatsappNumber: '', country: '',
    skillLevel: '', motivation: '', expectations: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const price = useMemo(() => {
    if (!cohort.earlyBirdDeadline) return cohort.earlyBirdPrice;
    return new Date() <= new Date(cohort.earlyBirdDeadline)
      ? cohort.earlyBirdPrice
      : cohort.regularPrice;
  }, [cohort]);

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
        cohortId: cohort.id,
        cohortName: cohort.name,
        fullName: d.fullName,
        email: d.email,
        whatsappNumber: d.whatsappNumber,
        country: d.country,
        skillLevel: d.skillLevel,
        motivation: d.motivation,
        expectations: d.expectations,
        paymentStatus: 'pending',
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

  const close = () => {
    setSuccess(false);
    setForm({ fullName: '', email: '', whatsappNumber: '', country: '', skillLevel: '', motivation: '', expectations: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close}
          />
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="relative z-[10000] w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
          >
            <button onClick={close} className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>

            {success ? (
              <div className="p-8 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-display">Congratulations!</h3>
                <p className="text-muted-foreground mb-1">
                  You have successfully secured your seat in {cohort.name}.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  You'll receive onboarding instructions via WhatsApp and email.
                </p>
                <div className="rounded-lg bg-muted/40 border border-border p-4 mb-6 text-left">
                  <p className="text-xs text-muted-foreground mb-1">Amount due</p>
                  <p className="text-2xl font-bold text-foreground">₦{price.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Payment instructions will be shared in the WhatsApp group. Your seat is reserved as pending.
                  </p>
                </div>
                {cohort.whatsappGroupLink && (
                  <a href={cohort.whatsappGroupLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" /> Join WhatsApp Group
                    </Button>
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-foreground font-display mb-1">Reserve Your Seat</h3>
                <p className="text-sm text-muted-foreground mb-6">{cohort.name} · ₦{price.toLocaleString()}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="fullName" value={form.fullName} onChange={set} error={errors.fullName} />
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={set} error={errors.email} />
                  <Field label="WhatsApp Number" name="whatsappNumber" value={form.whatsappNumber} onChange={set} error={errors.whatsappNumber} placeholder="+234..." />
                  <Field label="Country" name="country" value={form.country} onChange={set} error={errors.country} />
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Current Skill Level</label>
                    <select
                      value={form.skillLevel}
                      onChange={(e) => set('skillLevel', e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    {errors.skillLevel && <p className="text-xs text-destructive mt-1">{errors.skillLevel}</p>}
                  </div>
                  <TextArea label="Why do you want to join?" name="motivation" value={form.motivation} onChange={set} error={errors.motivation} />
                  <TextArea label="What are your expectations?" name="expectations" value={form.expectations} onChange={set} error={errors.expectations} />
                </div>

                <Button type="submit" disabled={submitting} className="w-full mt-6 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-semibold">
                  {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Reserving seat...</> : 'Reserve My Seat'}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your seat is reserved as <strong>pending payment</strong>. Payment instructions follow.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder }: any) {
  return (
    <div className={name === 'fullName' || name === 'email' ? '' : ''}>
      <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function TextArea({ label, name, value, onChange, error }: any) {
  return (
    <div className="sm:col-span-2">
      <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
      <textarea
        value={value}
        rows={3}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}