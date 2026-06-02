import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const whatsappUrl = "https://wa.me/2347051551543";
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleWA = () => {
    const msg = formData.name
      ? `Hello! I'm ${formData.name}. ${formData.message || "I'm interested in your services."}`
      : "Hello! I'm interested in your services.";
    window.open(`${whatsappUrl}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: Mail,         label: "Email",     value: "info@bwtng.live",                                href: "mailto:info@bwtng.live" },
    { icon: Phone,        label: "Phone",     value: "08108510085",                                    href: null },
    { icon: MessageCircle,label: "WhatsApp",  value: "07051551543",                                    href: whatsappUrl },
    { icon: MapPin,       label: "Address",   value: "Ada George, Port Harcourt, Nigeria",             href: null },
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 font-display">
            Let's Build Something <span className="text-primary">Great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ready to transform your business? Reach out and let's discuss your vision.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const Wrapper: any = item.href ? 'a' : 'div';
              const props: any = item.href
                ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {};
              return (
                <Wrapper key={i} {...props}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group block">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-colors duration-200 glow-sm">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp Now
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <div className="space-y-4">
              <Input placeholder="Your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="bg-background border-border" />
              <Input type="email" placeholder="Your email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-background border-border" />
              <Textarea placeholder="Tell us about your project..." className="min-h-[130px] bg-background border-border" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
              <Button onClick={handleWA} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 text-base font-semibold group glow-sm">
                {sent ? '✓ Opening WhatsApp...' : <><Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />Send via WhatsApp</>}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
