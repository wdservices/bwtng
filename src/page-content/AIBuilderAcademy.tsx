import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles, Rocket, Brain, Code, Users, Award, GraduationCap,
  CheckCircle2, Clock, CalendarDays, Video, ArrowRight, BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useActiveCohort } from '@/hooks/useActiveCohort';

const WHY = [
  { icon: Rocket, title: 'Build Real Products', desc: 'Build a real software project from idea to launch.' },
  { icon: Brain, title: 'AI-Powered Development', desc: 'Learn modern AI-assisted coding workflows.' },
  { icon: Code, title: 'Full Stack Skills', desc: 'Frontend, backend, databases, APIs, and deployment.' },
  { icon: Users, title: 'Mentorship', desc: 'Get direct guidance throughout the training.' },
  { icon: Award, title: 'Portfolio Project', desc: 'Graduate with a project you can showcase.' },
  { icon: GraduationCap, title: 'Certificate', desc: 'Receive a Certificate of Completion.' },
];

const WHO = ['Beginners', 'Students', 'Entrepreneurs', 'Startup Founders', 'Freelancers', 'Product Builders', 'Developers wanting AI productivity'];

const OUTCOMES = [
  'A completed project',
  'Deployment experience',
  'Full-stack development skills',
  'AI-assisted development skills',
  'Portfolio-ready work',
  'Certificate of Completion',
];

export default function AIBuilderAcademy() {
  const { cohort, registered } = useActiveCohort();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    if (!cohort?.registrationDeadline) return;
    const tick = () => {
      const diff = new Date(cohort.registrationDeadline).getTime() - Date.now();
      if (diff <= 0) return setCountdown('Registration closed');
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setCountdown(`${d}d ${h}h ${m}m ${s}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [cohort]);

   const price = cohort
     ? (new Date() <= new Date(cohort.registrationDeadline)
         ? cohort.earlyBirdPrice : cohort.regularPrice)
     : 50000;

  const seatsLeft = cohort ? Math.max(cohort.seatLimit - registered, 0) : 50;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Builder Academy — Build Full-Stack Products with AI in 21 Days</title>
        <meta name="description" content="Live 3-week masterclass to build real full-stack software products using AI-assisted development. Frontend, backend, databases, deployment." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bwtng.live/ai-builder-academy" />
        <meta property="og:url" content="https://www.bwtng.live/ai-builder-academy" />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                {cohort ? `Cohort ${cohort.number} — ${cohort.status === 'active' ? 'Registration Open' : cohort.status}` : 'Cohort 1 Coming Soon'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6">
              Build Real Software Products with{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI in 21 Days
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Learn how to build full-stack applications using modern AI-assisted development workflows.
              Master frontend, backend, databases, authentication, deployment, and product launch — while building a real project from start to finish.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground">
              <Chip icon={CalendarDays}>3 Weeks</Chip>
              <Chip icon={Clock}>3× / week · 2 hr sessions</Chip>
              <Chip icon={Video}>Live Virtual Training</Chip>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/academy/register">
                <Button type="button"
                  className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-bold text-base shadow-[0_8px_30px_rgba(99,102,241,0.5)] hover:scale-105 hover:shadow-[0_12px_40px_rgba(99,102,241,0.7)] transition-all">
                  {cohort ? `Join Cohort ${cohort.number}` : 'Join Now'} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            <Link to="/academy/register" className="block">
              <Button type="button"
                className="relative w-full h-16 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-extrabold text-lg uppercase tracking-wide shadow-[0_12px_50px_rgba(244,63,94,0.6)] hover:scale-[1.02] hover:shadow-[0_18px_60px_rgba(244,63,94,0.8)] hover:from-pink-400 hover:via-rose-400 hover:to-orange-400 transition-all ring-2 ring-white/20 hover:ring-white/40">
                {cohort && seatsLeft === 0 ? 'Sold Out' : `Register Now — ₦${price.toLocaleString()}`}
              </Button>
            </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-12">Why Join</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <motion.div key={w.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <w.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-10">Who Should Join</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {WHO.map(w => (
              <span key={w} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-foreground">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-12">Meet Your Instructor</h2>
          <div className="flex flex-col md:flex-row items-center gap-10 p-8 sm:p-10 rounded-3xl bg-card border border-border">
            <div className="shrink-0">
              <img
                src="/image/Gospel-ononwi.png"
                alt="Gospel Ononwi, Founder of Bluewaves Technology and Instructor at AI Builder Academy"
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-primary/30 shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-1">Gospel Ononwi</h3>
              <p className="text-primary font-medium mb-4">Software Engineer · AI Product Builder · Founder, Bluewaves Technology</p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Gospel Ononwi is a Software Engineer, AI Product Builder, and Founder of Bluewaves Technology. He specializes in building modern web applications, AI-powered solutions, business software, and scalable digital products using cutting-edge development tools and AI-assisted workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                With hands-on experience developing real-world applications and working with technologies such as React, Node.js, Firebase, databases, and AI coding assistants, Gospel is passionate about helping aspiring developers and entrepreneurs turn ideas into working products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through AI Builder Academy, his mission is to teach practical, real-world product development by guiding students through the complete journey of planning, building, deploying, and launching software solutions that solve real problems.
              </p>
              <p className="mt-4 text-sm font-semibold text-primary italic">"Learn by building."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">Cohort 1 Schedule</h2>
          <p className="text-center text-muted-foreground mb-12">4 weeks · 10 live sessions · 2 hours each</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { week: 'Week 1', dates: ['Wed, July 1', 'Fri, July 3'], sessions: 2 },
              { week: 'Week 2', dates: ['Mon, July 6', 'Wed, July 8', 'Fri, July 10'], sessions: 3 },
              { week: 'Week 3', dates: ['Mon, July 13', 'Wed, July 15', 'Fri, July 17'], sessions: 3 },
              { week: 'Week 4', dates: ['Mon, July 20', 'Wed, July 22', 'Fri, July 24'], sessions: 3 },
            ].map((w) => (
              <div key={w.week} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-foreground">{w.week}</h3>
                </div>
                <ul className="space-y-2">
                  {w.dates.map(d => (
                    <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Clock className="w-4 h-4 text-primary" />
              2 Hours Per Session
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Video className="w-4 h-4 text-primary" />
              Live Virtual Training
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Award className="w-4 h-4 text-primary" />
              Certificate of Completion
            </span>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-10">What You'll Walk Away With</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {OUTCOMES.map(o => (
              <div key={o} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-3">Pricing</h2>
          <p className="text-center text-muted-foreground mb-10">Only {seatsLeft} Seats Available</p>

          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/30 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-background/60 border border-primary/30">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Early Bird</p>
                <p className="text-4xl font-bold text-foreground">₦{(cohort?.earlyBirdPrice ?? 50000).toLocaleString()}</p>
              </div>
              <div className="p-5 rounded-2xl bg-background/60 border border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Late Registration</p>
                <p className="text-4xl font-bold text-muted-foreground">₦{(cohort?.regularPrice ?? 55000).toLocaleString()}</p>
              </div>
            </div>

            {cohort?.registrationDeadline && (
              <div className="relative mb-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Registration closes in</p>
                <p className="text-2xl font-bold font-display text-foreground tabular-nums">{countdown}</p>
              </div>
            )}

            <Link to="/academy/register" className="block">
              <Button type="button"
                className="relative w-full h-16 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-extrabold text-lg uppercase tracking-wide shadow-[0_12px_50px_rgba(244,63,94,0.6)] hover:scale-[1.02] hover:shadow-[0_18px_60px_rgba(244,63,94,0.8)] hover:from-pink-400 hover:via-rose-400 hover:to-orange-400 transition-all ring-2 ring-white/20 hover:ring-white/40">
                {cohort && seatsLeft === 0 ? 'Sold Out' : `Register Now — ₦${price.toLocaleString()}`}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Chip({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
      <Icon className="w-4 h-4 text-primary" />
      {children}
    </span>
  );
}