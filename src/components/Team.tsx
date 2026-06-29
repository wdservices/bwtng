import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Gospel Ononwi',
    role: 'CEO & Founder',
    image: '/image/team/Gospel-ononwi.png',
    nationality: 'Nigeria',
  },
  {
    name: 'Aisha Priya',
    role: 'SEO Expert',
    image: '/image/team/Aisha-Priya-SEO.jpg',
    nationality: 'India',
  },
  {
    name: 'Ahmed Bilal',
    role: 'Fullstack Developer',
    image: '/image/team/Ahmed-Bilal-Fullstack.jpg',
    nationality: 'Pakistan',
  },
  {
    name: 'Rahu Karan',
    role: 'Backend Developer',
    image: '/image/team/Rahu-Karan-Backend.jpg',
    nationality: 'India',
  },
  {
    name: 'Adeyinka Joel',
    role: 'Frontend Developer',
    image: '/image/team/Adeyinka-Joel-Frontend.jpg',
    nationality: 'Nigeria',
  },
  {
    name: 'Chika Amos',
    role: 'UI/UX Designer',
    image: '/image/team/Chika-Amos-UIUX.jpg',
    nationality: 'Nigeria',
  },
];

const Team = () => (
  <section id="team" className="py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display leading-tight mb-4">
            Meet the <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A global team of skilled developers, designers, and strategists building innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border-2 border-border group-hover:border-primary/40 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.nationality}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
