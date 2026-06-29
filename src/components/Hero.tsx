import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Smartphone, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const floatingIcons = [
  { Icon: Globe,      top: '22%', left:  '8%', delay: 0,   color: 'text-primary' },
  { Icon: Smartphone, top: '62%', left:  '5%', delay: 0.5, color: 'text-primary' },
  { Icon: Brain,      top: '22%', right: '7%', delay: 1.0, color: 'text-primary' },
  { Icon: Zap,        top: '62%', right: '6%', delay: 1.5, color: 'text-primary' },
];

const Hero = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Subtle dot grid */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(hsl(222,30%,20%) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* Single soft top glow — no gradient text, just atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full"
        style={{ background: 'hsl(217,91%,60%,0.07)', filter: 'blur(100px)' }} />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, top, left, right, delay, color }, i) => (
        <motion.div key={i}
          className={`absolute hidden lg:flex items-center justify-center w-11 h-11 rounded-xl glass-card ${color}`}
          style={{ top, left, right } as React.CSSProperties}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i * 0.6, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-muted-foreground mb-10 border border-border">
              <Sparkles className="h-3 w-3 text-primary" />
              Nigeria's Leading Digital Solutions Company
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Headline — solid white, no gradient */}
          <div className="mb-8">
            {[
              { words: ['Digital', 'Solutions'], delay: 0 },
              { words: ['That', 'Transform'],    delay: 0.25 },
            ].map((line, li) => (
              <div key={li} className="flex flex-wrap justify-center gap-x-5">
                {line.words.map((word, wi) => (
                  <motion.span key={word}
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: line.delay + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] font-display
                      ${li === 1 ? 'text-primary' : 'text-foreground'}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We craft cutting-edge apps, websites, AI tools, and chatbots for businesses worldwide.
            Your trusted digital transformation partner in Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-12 text-base glow-md group font-semibold"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline"
                className="rounded-full px-10 h-12 text-base border-border hover:bg-muted font-semibold w-full sm:w-auto"
              >
                Start a Project
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              { value: '756+', label: 'Projects Completed' },
              { value: '500+', label: 'Happy Clients' },
              { value: '5+',   label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl py-5 px-3 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-foreground font-display">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28"
        style={{ background: 'linear-gradient(to top, hsl(222,47%,6%), transparent)' }} />
    </section>
  );
};

export default Hero;
