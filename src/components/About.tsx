import React from 'react';
import { Users, Award, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users,  value: "500+",  label: "Clients Served" },
  { icon: Award,  value: "756+",  label: "Projects Done" },
  { icon: Globe,  value: "Global",label: "Reach" },
  { icon: Zap,    value: "AI",    label: "Expertise" },
];

const points = [
  "Innovative AI-powered solutions",
  "Custom development expertise",
  "Comprehensive training programs",
  "End-to-end project delivery",
];

const About = () => (
  <section id="about" className="py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
            Building the Future,<br />
            <span className="text-primary">One Product at a Time</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We're passionate about creating digital solutions that make a real impact. Since our inception,
            we've been at the forefront of technological innovation, helping businesses harness the power of AI,
            mobile apps, and custom software.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team of expert developers, AI specialists, and digital strategists work collaboratively to
            deliver solutions that prepare your business for the future.
          </p>
          <div className="space-y-3 mb-10">
            {points.map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
          <Link to="/about-us"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group">
            Learn more about us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold text-foreground font-display">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
