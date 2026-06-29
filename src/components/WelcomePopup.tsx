import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsAppClick = (service: string = '') => {
    let message = `Hello! I'm interested in working with Bluewaves Technology.`;
    
    if (service) {
      message = `Hello! I'm interested in building a ${service} with Bluewaves Technology. Can we discuss this further?`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348138292839?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Background Decoration */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[60%] bg-secondary/10 blur-[120px] rounded-full"></div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
            className="relative z-[10000] max-w-lg w-full"
          >
            <div className="bg-background rounded-3xl shadow-2xl overflow-hidden border border-white/10">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant/50 transition-colors z-10"
                aria-label="Close popup"
              >
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </button>

              {/* Main Content */}
              <main className="pt-16 pb-8 px-6">
                {/* Hero Section */}
                <section className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
                    <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-surface-container-high border border-white/10">
                      <img 
                        src="/logo.png" 
                        alt="Bluewaves Technology" 
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-xl font-bold text-primary-fixed-dim mb-2">Good day Boss!</h1>
                  <p className="text-sm text-on-surface-variant max-w-[280px] mx-auto">
                    Welcome to <span className="text-primary-fixed-dim font-semibold">Bluewaves Technology</span>! How may we be of service to you today?
                  </p>
                </section>

                {/* Service Grid */}
                <section className="mb-8">
                  <h2 className="text-xs font-bold tracking-widest text-center text-outline mb-4 uppercase">WHAT WOULD YOU LIKE TO BUILD?</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Website Card */}
                    <button
                      onClick={() => setSelectedService('website')}
                      className={`p-4 rounded-lg flex flex-col items-center gap-3 transition-all hover:border-primary/40 animate-float bouncy-click glass-card ${selectedService === 'website' ? 'inner-glow-blue' : ''}`}
                      style={{ animationDelay: '0s' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shadow-[0_0_20px_rgba(77,142,255,0.3)]">
                        <span className="material-symbols-outlined text-primary text-[28px]">language</span>
                      </div>
                      <span className="text-xs font-bold tracking-widest text-primary uppercase">Website</span>
                    </button>
                    {/* Mobile App Card */}
                    <button
                      onClick={() => setSelectedService('mobile app')}
                      className={`p-4 rounded-lg flex flex-col items-center gap-3 transition-all hover:border-secondary/40 animate-float bouncy-click glass-card ${selectedService === 'mobile app' ? 'inner-glow-mint' : ''}`}
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                        <span className="material-symbols-outlined text-teal-300 text-[28px]">smartphone</span>
                      </div>
                      <span className="text-xs font-bold tracking-widest text-teal-300 uppercase">Mobile App</span>
                    </button>
                    {/* AI Tool Card */}
                    <button
                      onClick={() => setSelectedService('AI tool')}
                      className={`p-4 rounded-lg flex flex-col items-center gap-3 transition-all hover:border-primary/40 animate-float bouncy-click glass-card ${selectedService === 'AI tool' ? 'inner-glow-blue' : ''}`}
                      style={{ animationDelay: '1s' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shadow-[0_0_20px_rgba(77,142,255,0.3)]">
                        <span className="material-symbols-outlined text-primary text-[28px]">memory</span>
                      </div>
                      <span className="text-xs font-bold tracking-widest text-primary uppercase">AI Tool</span>
                    </button>
                    {/* Digital Tool Card */}
                    <button
                      onClick={() => setSelectedService('digital tool')}
                      className={`p-4 rounded-lg flex flex-col items-center gap-3 transition-all hover:border-secondary/40 animate-float bouncy-click glass-card ${selectedService === 'digital tool' ? 'inner-glow-mint' : ''}`}
                      style={{ animationDelay: '1.5s' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                        <span className="material-symbols-outlined text-teal-300 text-[28px]">bolt</span>
                      </div>
                      <span className="text-xs font-bold tracking-widest text-teal-300 uppercase">Digital Tool</span>
                    </button>
                  </div>
                </section>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppClick(selectedService)}
                    className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,180,160,0.4)] bouncy-click"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Let's talk about it on WhatsApp
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </main>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
