import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, X, ArrowRight, Globe, Smartphone, Brain, Cog, MessageSquare } from 'lucide-react';

const BUILD_OPTIONS = [
  { id: 'website', label: 'Website', icon: Globe, desc: 'Responsive web platform & SaaS' },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone, desc: 'iOS & Android mobile products' },
  { id: 'ai', label: 'AI Tool', icon: Brain, desc: 'Custom AI agent & LLM workflow' },
  { id: 'automation', label: 'Automation', icon: Cog, desc: 'Business process & API pipeline' },
];

const RobotPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [selectedBuild, setSelectedBuild] = useState<string>('website');

  useEffect(() => {
    // Show after gentle dwell
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('wave-popup-dismissed');
      if (!dismissed) {
        setIsOpen(true);
      } else {
        setMinimized(true);
      }
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setMinimized(true);
    sessionStorage.setItem('wave-popup-dismissed', 'true');
  };

  const handleWhatsApp = () => {
    const option = BUILD_OPTIONS.find(o => o.id === selectedBuild) || BUILD_OPTIONS[0];
    const msg = `Hello Bluewaves Technology! 👋\nI am looking to build a *${option.label}* (${option.desc}). Could we discuss scope, timeline and pricing?`;
    window.open(`https://wa.me/2347051551543?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Minimized Trigger Pill */}
      {minimized && !isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setIsOpen(true);
            setMinimized(false);
          }}
          className="fixed bottom-24 right-6 z-[9990] flex items-center gap-3 px-4 py-2.5 rounded-full bg-card/95 border border-primary/50 text-foreground shadow-2xl backdrop-blur-xl group hover:border-primary transition-all duration-300"
          aria-label="Open Wave Assistant"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 absolute -top-0.5 -right-0.5 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-blue-500 absolute -top-0.5 -right-0.5" />
            <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Bot className="w-4 h-4" />
            </div>
          </div>
          <div className="text-left pr-1">
            <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <span>Wave</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <div className="text-[10px] text-muted-foreground font-medium">Online now</div>
          </div>
        </motion.button>
      )}

      {/* Main Holographic Popup Modal - matches user specification */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9998] flex items-end justify-end p-4 sm:p-6 md:p-8 pointer-events-none">
            {/* Subtle soft backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"
              onClick={handleClose}
            />

            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 24 }}
              transition={{ type: 'spring', damping: 26, stiffness: 360 }}
              className="relative z-[9999] w-full sm:w-[380px] pointer-events-auto"
            >
              <div className="relative rounded-3xl bg-[#0c1322]/95 backdrop-blur-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden text-white">
                {/* Subtle top neon ambient glow line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

                {/* Header */}
                <div className="p-5 pb-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/20">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-white tracking-tight">Wave</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span>online now</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Close greetings"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 space-y-5">
                  {/* Greeting Box */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 font-mono text-xs leading-relaxed text-slate-200">
                    <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                      Hello <span>✦</span>
                    </p>
                    <p className="text-slate-300">How are you doing today?</p>
                    <p className="text-slate-300">How may we help you?</p>
                  </div>

                  {/* What would you like to build? */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
                      WHAT WOULD YOU LIKE TO BUILD?
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {BUILD_OPTIONS.map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = selectedBuild === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setSelectedBuild(opt.id)}
                            className={`p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center gap-2 transition-all duration-200 ${
                              isSelected
                                ? 'bg-blue-600/25 border-blue-400 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/50'
                                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-blue-500 text-white' : 'bg-white/5 text-blue-400'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Primary WhatsApp Action CTA */}
                  <button
                    onClick={handleWhatsApp}
                    className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <span>Chat with us on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RobotPopup;
