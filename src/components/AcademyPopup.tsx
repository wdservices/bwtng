import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Cohort } from '@/types/academy';

interface Props {
  cohort: Cohort;
  registered: number;
  onClose: () => void;
}

export default function AcademyPopup({ cohort, registered, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const seatsLeft = Math.max(cohort.seatLimit - registered, 0);

  const close = () => { setVisible(false); setTimeout(onClose, 250); };
  const go = () => { close(); navigate('/ai-builder-academy'); };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="relative z-[10000] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, hsl(222 47% 9%) 0%, hsl(250 60% 12%) 100%)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/30 blur-3xl rounded-full pointer-events-none" />

            <button onClick={close}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
              <X className="w-4 h-4 text-white/80" />
            </button>

            <div className="relative p-8 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Cohort {cohort.number} Open</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2 leading-tight">
                AI Builder <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Academy</span>
              </h2>
              <p className="text-sm text-white/70 mb-6">
                Build Full-Stack Products with AI in 21 Days
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Early Bird</p>
                  <p className="text-lg font-bold text-primary">₦{cohort.earlyBirdPrice.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Late Registration</p>
                  <p className="text-lg font-bold text-white/90 line-through opacity-60">₦{cohort.regularPrice.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-white/70 mb-6">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {seatsLeft} seats left</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 21 days</span>
              </div>

              <button onClick={go}
                className="w-full h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-semibold shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-transform">
                Register Now →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}