import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  title: string;
  image: string;
  nationality: string;
  location: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  twitter?: string;
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gospel Ononwi',
    role: 'Founder & CEO',
    title: 'Lead Software Architect & AI Product Builder',
    image: '/image/team/Gospel-ononwi.png',
    nationality: 'Nigeria',
    location: 'Port Harcourt, Nigeria',
    bio: 'Software engineer, AI product builder, and author of Ship It Right. Leads technology strategy and enterprise engineering at Bluewaves Technology.',
    skills: ['AI Systems', 'Fullstack Architecture', 'WebGL & Spatial UI', 'Product Strategy'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    featured: true,
  },
  {
    name: 'Adeyinka Joel',
    role: 'Frontend Engineer',
    title: 'Client Interfaces & Interactive Design',
    image: '/image/team/Adeyinka-Joel-Frontend.jpg',
    nationality: 'Nigeria',
    location: 'Lagos, Nigeria',
    bio: 'Crafts responsive, accessible, high-performance web frontends with fluid animations and modern React/Vite frameworks.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Ahmed Bilal',
    role: 'Fullstack Developer',
    title: 'End-to-End Application Engineering',
    image: '/image/team/Ahmed-Bilal-Fullstack.jpg',
    nationality: 'Pakistan',
    location: 'Lahore, Pakistan',
    bio: 'Builds robust fullstack web architectures, REST/GraphQL APIs, and resilient serverless microservices.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Cloud Infrastructure'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Rahu Karan',
    role: 'Backend Architect',
    title: 'Distributed Systems & Database Design',
    image: '/image/team/Rahu-Karan-Backend.jpg',
    nationality: 'India',
    location: 'Bengaluru, India',
    bio: 'Specializes in high-throughput backend services, data modeling, secure auth systems, and database optimization.',
    skills: ['Distributed DBs', 'System Security', 'Python', 'Go'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Chika Amos',
    role: 'UI/UX Product Designer',
    title: 'Design Systems & User Experience',
    image: '/image/team/Chika-Amos-UIUX.jpg',
    nationality: 'Nigeria',
    location: 'Port Harcourt, Nigeria',
    bio: 'Translates complex operational requirements into intuitive design systems, prototypes, and user flows that convert.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Motion UI'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Aisha Priya',
    role: 'SEO & Growth Strategist',
    title: 'Search Optimization & Discoverability',
    image: '/image/team/Aisha-Priya-SEO.jpg',
    nationality: 'India',
    location: 'New Delhi, India',
    bio: 'Technical SEO and organic growth specialist optimizing enterprise sites for search engines, rich snippets, and generative AI search.',
    skills: ['Technical SEO', 'Schema.org', 'Search Analytics', 'AI Overviews'],
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
];

const initialsOf = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const MemberPhoto: React.FC<{ name: string; image: string; className?: string }> = ({ name, image, className }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center font-display font-bold text-xl text-white ${className || ''}`}
        style={{ background: 'linear-gradient(135deg, hsl(217,91%,60%), hsl(222,70%,32%))' }}
      >
        {initialsOf(name)}
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${className || ''}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export const Team = () => {
  const founder = teamMembers.find((m) => m.featured);
  const coreMembers = teamMembers.filter((m) => !m.featured);

  return (
    <section id="team" className="relative z-30 py-24 md:py-32 bg-background/95 overflow-hidden">
      {/* Subtle ambient backdrop glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Leadership &amp; Engineering
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-4 sm:mb-5">
            The Team Turning Vision Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-white">Production Reality</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            A distributed collective of fullstack engineers, spatial designers, and AI specialists building high-performance digital products from Port Harcourt to the world.
          </p>
        </motion.div>

        {/* Featured Founder Spotlight Card */}
        {founder && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-12 sm:mb-14 rounded-3xl p-5 sm:p-10 md:p-12 bg-gradient-to-br from-card/90 via-card/70 to-primary/5 border border-primary/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/15 blur-[90px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
              {/* Founder Avatar */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 bg-muted">
                    <MemberPhoto name={founder.name} image={founder.image} />
                  </div>
                  <div className="absolute -bottom-2.5 sm:-bottom-3 -right-2.5 sm:-right-3 bg-primary text-primary-foreground text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    Founder &amp; CEO
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                    Executive Leadership
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    {founder.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-primary font-medium mt-0.5">
                    {founder.title}
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-lg bg-background/70 border border-border/80 text-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Connect */}
                <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl bg-card border border-border/80 hover:border-primary/60 hover:text-primary transition-all text-muted-foreground"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl bg-card border border-border/80 hover:border-primary/60 hover:text-primary transition-all text-muted-foreground"
                    aria-label={`${founder.name} on X`}
                  >
                    <Twitter className="w-3.5 h-3.5" />
                    X / Twitter
                  </a>
                  <a
                    href="/ship-it-right"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all sm:ml-auto"
                  >
                    Read &ldquo;Ship It Right&rdquo; &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {coreMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-card/60 backdrop-blur-md border border-border/70 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.22)] flex flex-col justify-between"
            >
              <div>
                {/* Member Avatar & Origin */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border border-border/90 group-hover:border-primary/60 transition-colors shrink-0 bg-muted shadow-md">
                    <MemberPhoto name={member.name} image={member.image} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-primary">
                      {member.role}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                      <Globe className="w-3 h-3 text-muted-foreground/80" />
                      {member.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div>
                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-muted/60 text-muted-foreground font-medium border border-border/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Connect */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="text-[11px] font-mono text-muted-foreground/70">{member.title}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin || 'https://linkedin.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:text-primary hover:bg-muted/50 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.twitter || 'https://x.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:text-primary hover:bg-muted/50 transition-colors"
                      aria-label={`${member.name} on X`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
