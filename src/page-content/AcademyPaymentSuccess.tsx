import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/K0TNMYiZnDJCysoAP2d7ZE';

export default function AcademyPaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const registrationData = location.state?.registrationData || {};
  const cohort = location.state?.cohort || null;
  const paymentVerified = location.state?.paymentVerified || false;
  const reference = new URLSearchParams(window.location.search).get('reference');

  useEffect(() => {
    if (!paymentVerified) {
      navigate('/academy/register');
      return;
    }

    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, [paymentVerified, navigate]);

  if (!paymentVerified) return null;

  const cohortName = cohort?.name || 'AI Builder Academy';

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Helmet>
        <title>{`Payment Successful — ${cohortName}`}</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.bwtng.live/academy/payment/success" />
      </Helmet>

      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <Header />

      <div className="relative pt-24 pb-12 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md mx-4">
          <div className="rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 overflow-hidden shadow-2xl">
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-primary to-emerald-500" />

            <div className="p-8 sm:p-10 text-center">
              {/* Success icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mx-auto w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </motion.div>

              {/* Content */}
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-2xl sm:text-3xl font-semibold font-display tracking-tight mb-1">
                      Congratulations!
                    </h1>

                    <p className="text-base font-medium text-foreground mb-1">
                      Payment is successful
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
                      {cohortName}
                    </div>

                    {reference && (
                      <p className="text-[11px] text-muted-foreground/60 mb-5">
                        Ref: {reference}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      Click the button below to join the Cohort 1 WhatsApp group for onboarding details.
                    </p>

                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium text-sm shadow-lg shadow-[#25D366]/20 transition-all hover:shadow-[#25D366]/30">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join Cohort 1 WhatsApp Group
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>

                    <button
                      onClick={() => navigate('/ai-builder-academy')}
                      className="mt-5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Back to Academy
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
