import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Anaco Prime Sport', 'BakeBook', 'EmergenSee', 'Golden Tulip Hotel',
  'Oak Park and Gardens', 'Megavantage Dynamic', 'Peers Alliance NG',
  'Megavantage Apartments', 'Megavantage Homes', 'Bluewaves Ventures',
  'TechHub Nigeria', 'Port Harcourt Business Hub', 'Nigerian Tech Solutions',
  'Rivers State Innovation', 'Digital Africa Co', 'West African Ventures',
];

const doubled = [...clients, ...clients];

const ClientShowcase = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6 mb-14">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">Our Clients</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-display">Trusted by Great Companies</h2>
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">756+ products</span> delivered to clients worldwide
        </p>
      </motion.div>
    </div>

    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, hsl(222,47%,9%), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, hsl(222,47%,9%), transparent)' }} />
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((client, i) => (
          <div key={i} className="glass-card rounded-xl px-7 py-4 shrink-0 flex items-center justify-center h-14 hover:border-primary/30 transition-colors duration-300 whitespace-nowrap">
            <span className="text-sm text-muted-foreground font-medium">{client}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientShowcase;
