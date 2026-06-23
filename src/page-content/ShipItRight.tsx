import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const bookCover = '/image/ship-it-right3.png';

const CHAPTERS = [
  {
    num: '01',
    icon: '🔒',
    title: 'Security — Protecting Your App and Your Users',
    desc: "Lock down what AI tools leave wide open.",
    points: [
      'HTTPS setup, password hashing, environment variables',
      'Common attacks: SQL injection, XSS, brute force',
      'Server-side permission checks for admin areas',
    ],
  },
  {
    num: '02',
    icon: '⚡',
    title: 'Performance — Making Sure Your App Is Fast',
    desc: 'Speed is a feature. Users leave slow apps.',
    points: [
      'PageSpeed scoring and Core Web Vitals',
      'Image compression and WebP conversion',
      'Caching, CDNs, and code splitting',
    ],
  },
  {
    num: '03',
    icon: '📈',
    title: 'Scalability — What Happens When More People Show Up',
    desc: "Survive your first viral moment.",
    points: [
      'What breaks at 100 vs 1,000 vs 10,000 users',
      'Database indexing and connection pooling',
      'Choosing the right hosting and rate limiting',
    ],
  },
  {
    num: '04',
    icon: '🔍',
    title: 'SEO — Helping People Find You on Google',
    desc: 'If Google can\'t see you, you don\'t exist.',
    points: [
      'Meta tags, Open Graph, and sitemaps',
      'Robots.txt and Google Search Console',
      'Structured data and rich results',
    ],
  },
  {
    num: '05',
    icon: '🟢',
    title: 'Reliability — Keeping Your App Online and Working',
    desc: 'Know before your users do.',
    points: [
      'Uptime monitoring with UptimeRobot',
      'Error tracking with Sentry',
      'Automated backups and status pages',
    ],
  },
  {
    num: '06',
    icon: '⚖️',
    title: 'Legal & Compliance — Protecting Yourself from Legal Problems',
    desc: 'Sleep at night knowing you\'re covered.',
    points: [
      'Privacy Policy and Terms of Service',
      'Cookie consent and GDPR basics',
      'Using licensed images, icons, and fonts',
    ],
  },
  {
    num: '07',
    icon: '💳',
    title: 'Payments — Taking Money Without Losing It or Getting Banned',
    desc: 'Money in, securely. Every time.',
    points: [
      'Why you should never handle card data yourself',
      'Setting up and testing Stripe/Paystack',
      'Webhooks, failed payments, and fraud prevention',
    ],
  },
  {
    num: '08',
    icon: '📊',
    title: 'Analytics — Understanding What Is Happening in Your App',
    desc: 'Build with data, not guesses.',
    points: [
      'Setting up Google Analytics 4',
      'Event tracking and conversion funnels',
      'Session recording with Microsoft Clarity',
    ],
  },
  {
    num: '09',
    icon: '🚀',
    title: 'DevOps Basics — Updating Your App Without Breaking Things',
    desc: 'Ship updates without the panic.',
    points: [
      'Staging vs production environments',
      'GitHub, automated deployments, and rollbacks',
      'Keeping environment variables separate',
    ],
  },
  {
    num: '10',
    icon: '✅',
    title: 'The Final Launch Checklist — Your Complete Go-Live Scorecard',
    desc: 'One page. One score. Ship with confidence.',
    points: [
      'Every checklist from every chapter in one place',
      'A scoring system: Not Ready / Almost There / Ship It!',
      'Your printable go-live scorecard',
    ],
  },
];

const PROBLEM_CARDS = [
  { icon: '🔓', text: 'Your passwords might be stored in plain text' },
  { icon: '💥', text: 'Your app could crash the moment it gets 1,000 users' },
  { icon: '🚫', text: 'Google might not even be able to find your site' },
  { icon: '⚖️', text: 'You could be breaking GDPR without knowing it' },
  { icon: '💳', text: 'One bad payment setup could get your Stripe account banned' },
];

const TOPIC_BADGES = [
  '🔒 Security', '⚡ Performance', '📈 Scalability', '🔍 SEO',
  '🟢 Reliability', '⚖️ Legal', '💳 Payments', '📊 Analytics', '🚀 DevOps',
];

const QUIZ_QUESTIONS = [
  'Does your site run on HTTPS?',
  'Are user passwords hashed (not stored as plain text)?',
  'Have you tested your PageSpeed score?',
  'Do you have a Privacy Policy on your site?',
  'Have you set up error tracking or uptime monitoring?',
];

const FAQS = [
  {
    q: 'What is the best book on vibe coding production readiness?',
    a: 'Ship It Right is written specifically for people who built apps using AI tools like Cursor, Bolt, Lovable, and Replit. It covers the exact gaps — security, performance, SEO, legal, and payments — that these tools don\'t handle automatically.',
  },
  {
    q: 'What should I check before launching a vibe-coded app?',
    a: 'At minimum: HTTPS and password security, page speed, basic SEO setup, a Privacy Policy, and payment testing if you take money. Ship It Right gives you a full checklist covering all of this and more.',
  },
  {
    q: 'How do I make my Bolt, Cursor, or Lovable app secure?',
    a: 'Start with password hashing, environment variables for API keys, and server-side permission checks. Chapter 1 of Ship It Right walks through each of these in plain English.',
  },
  {
    q: 'What happens when my vibe-coded app gets 1,000 users?',
    a: 'Without preparation, databases slow down, servers get overwhelmed, and email delivery can fail. Chapter 3 covers exactly what breaks at different user counts and how to prevent it.',
  },
  {
    q: 'Do I need a Privacy Policy for an app built with AI tools?',
    a: 'Yes — if your app collects any personal data (which almost all apps do), you\'re legally required to have one in most countries. Chapter 6 covers this and other legal essentials.',
  },
  {
    q: 'Is this book for non-technical founders?',
    a: 'Yes. Every chapter is written in plain language with no coding jargon, plus screenshots and step-by-step instructions. If you can use ChatGPT, you can follow this book.',
  },
  {
    q: 'Where can I buy Ship It Right?',
    a: 'Available on Amazon (Kindle and paperback), Gumroad, and Selar. See the Buy Now section above for direct links.',
  },
  {
    q: 'Can a vibe-coded app handle real users, or is it just for demos?',
    a: 'This is one of the most searched anxieties. The gap between a working demo and a production-grade application is where most vibe-coded projects quietly fail — not with a dramatic crash, but with slow page loads that drive users away, unhandled errors that silently eat data, and security holes that invite exploitation. Ship It Right gives you the exact checklist to close that gap before you go live.',
  },
  {
    q: 'What are the most common security mistakes in vibe-coded apps?',
    a: 'The primary risks include hardcoded secrets like API keys in the repository, severe injection vulnerabilities such as SQL/XSS, insecure data storage, and compliance violations due to improper data handling. Ship It Right walks you through how to catch and fix each of these before a single user touches your app.',
  },
  {
    q: 'Does my vibe-coded app need to be GDPR or HIPAA compliant?',
    a: 'Most consumer vibe coding tools run on US-based shared cloud. If your app handles EU citizen data, you may be in GDPR violation the moment the AI deploys it. If you\'re handling healthcare data under HIPAA, financial data under SOX, or personal data under GDPR, you can\'t deploy software that lacks proper access controls, audit trails, and data handling policies — and vibe-coded applications generated without these requirements in mind don\'t become compliant through iteration. They require fundamental architectural changes. The book covers exactly what to do before you hit that wall.',
  },
  {
    q: 'Will my vibe-coded app break when it scales?',
    a: 'At 50 users, no monitoring, no alerting, and no structured logging is fine. At 5,000, it\'s a liability. At 50,000, it\'s an incident. The AI cannot anticipate scale requirements — an app might work fine during testing with 50 records but would not hold up with 10,000+ users in production. Ship It Right shows you how to build for the scale you\'re aiming for, not just the demo you built.',
  },
  {
    q: 'Can I maintain or update my vibe-coded app after launch?',
    a: 'Making a change to one part breaks something in another. The AI doesn\'t know the history — you ask it to add a feature and it introduces a regression elsewhere. Code generated today needs to be understood, modified, and debugged by engineers next month or next year. AI-generated code often lacks comments, uses unfamiliar patterns, or implements logic in ways that aren\'t idiomatic for your team\'s stack. The book addresses how to structure your app so it stays maintainable as it grows.',
  },
  {
    q: 'How do I add SEO to an app built with Lovable or Bolt?',
    a: 'Most AI coding tools generate apps with zero SEO setup — no meta tags, no structured data, no sitemap, no Open Graph tags. Search engines can\'t see your app, and when people share it on social media, there\'s no preview. Chapter 4 of Ship It Right walks you through exactly what to add: meta titles and descriptions, Open Graph and Twitter Card tags, XML sitemaps, robots.txt, canonical URLs, and structured data — all without needing to understand code.',
  },
];

const INITIAL_FAQS = 5;

const ShipItRight: React.FC = () => {
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quiz, setQuiz] = useState<boolean[]>(Array(5).fill(false));
  const [showSticky, setShowSticky] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const score = quiz.filter(Boolean).length;
  const scoreMsg =
    score === 5 ? "🎉 You're ready to ship!" :
    score >= 3 ? `${score}/5 — Almost there!` :
    score >= 1 ? `${score}/5 — You've got work to do.` :
    "0/5 — Let's get started.";

  const coverUrl = bookCover;

  return (
    <>
      <Helmet>
        <title>Ship It Right: Production Readiness Checklist for Vibe-Built Apps | Gospel Ononwi</title>
        <meta name="description" content="Built an app with Cursor, Bolt, Lovable, or Replit? Ship It Right is the complete production readiness checklist covering security, SEO, scalability, legal, and payments — written for non-technical founders and indie hackers." />
        <link rel="canonical" href="https://bwtng.live/ship-it-right" />
        <meta property="og:title" content="Ship It Right — The Production Readiness Checklist for Vibe-Built Apps" />
        <meta property="og:description" content="The book every vibe coder needs before going live. Security, performance, scalability, SEO, legal, payments, analytics, and DevOps — all in plain English." />
        <meta property="og:url" content="https://bwtng.live/ship-it-right" />
        <meta property="og:type" content="book" />
        <meta property="og:image" content={coverUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ship It Right — The Production Readiness Checklist for Vibe-Built Apps" />
        <meta name="twitter:description" content="Security, SEO, payments, legal — the production checklist for AI-built apps." />
        <meta name="twitter:image" content={coverUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Ship It Right: The Production Readiness Checklist for Vibe-Built Apps",
          "author": { "@type": "Person", "name": "Gospel Ononwi" },
          "publisher": { "@type": "Organization", "name": "Bluewaves Technology" },
          "genre": "Technology / Software Development",
          "url": "https://bwtng.live/ship-it-right",
          "image": coverUrl,
          "inLanguage": "en",
          "bookFormat": "https://schema.org/EBook",
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-[#0A1530] text-slate-100 overflow-x-hidden">
        {/* Background grid */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,207,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20">
          <div
            aria-hidden
            className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
            style={{ background: 'radial-gradient(circle, #00CFFF 0%, transparent 70%)' }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)' }}
          />

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6 animate-[fadeUp_0.8s_ease-out]">
              <span className="inline-block text-xs tracking-[0.2em] font-semibold text-[#00CFFF] uppercase border border-[#00CFFF]/30 rounded-full px-4 py-2 bg-[#00CFFF]/5">
                For Vibe Coders, Indie Hackers & Non-Technical Founders
              </span>
              <h1 className="font-bold leading-[0.95] tracking-tight">
                <span className="block text-6xl md:text-7xl lg:text-8xl text-white">Ship It Right</span>
                <span className="block mt-4 text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium leading-tight">
                  The Production Readiness Checklist for Vibe-Built Apps
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">
                You built the app. Now make sure it doesn't break the moment real users show up.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#buy" className="group inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#ffd633] text-[#0A1530] font-bold px-7 py-4 rounded-xl transition-all shadow-[0_10px_40px_-10px_rgba(245,197,24,0.5)] hover:scale-105">
                  Get the Book
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#chapters" className="inline-flex items-center gap-2 border border-[#00CFFF]/40 hover:border-[#00CFFF] text-[#00CFFF] hover:bg-[#00CFFF]/10 font-semibold px-7 py-4 rounded-xl transition-all">
                  See What's Inside
                </a>
              </div>
              <p className="text-sm text-slate-500 pt-2">⭐ Available on Amazon, Gumroad &amp; Selar</p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden
                className="absolute inset-0 blur-[80px] opacity-50"
                style={{ background: 'radial-gradient(circle, #00CFFF 0%, transparent 60%)' }}
              />
              <img
                src={coverUrl}
                alt="Ship It Right book cover — the production readiness checklist for vibe-built apps by Gospel Ononwi"
                className="relative w-full max-w-md rounded-xl shadow-[0_30px_80px_-20px_rgba(0,207,255,0.4)] rotate-[-4deg] hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-3xl">
              The Problem Nobody Talks About
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <p className="text-lg text-slate-300 leading-relaxed">
                AI tools like Cursor, Bolt, Lovable, and Replit let you build a working app in hours. But "working" and "production-ready" are two very different things. The moment real users arrive, the cracks start to show — security holes, crashes under traffic, invisible to Google, legal exposure you didn't know existed.
              </p>
              <div className="space-y-3">
                {PROBLEM_CARDS.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-red-500/20 hover:border-red-500/50 hover:bg-red-500/[0.04] transition-all hover:translate-x-1"
                    style={{ boxShadow: '0 0 0 1px rgba(239,68,68,0.05), 0 4px 24px -8px rgba(239,68,68,0.15)' }}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-slate-200 font-medium">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,207,255,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ship It Right Is the Missing Step
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-12">
              This isn't a coding book. It's the checklist professional software teams run before they launch — translated into plain English for anyone who built their app with AI. No jargon. No assumptions. Just a clear, practical path from "it works on my screen" to "it's ready for the world."
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TOPIC_BADGES.map((b, i) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full bg-white/5 border border-[#00CFFF]/20 text-sm font-medium text-slate-200 hover:border-[#00CFFF]/60 hover:bg-[#00CFFF]/10 transition-all"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTERS */}
        <section id="chapters" className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                10 Chapters. 10 Checklists. Everything You Need.
              </h2>
              <p className="text-slate-400 text-lg">Tap a chapter to see what's inside.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {CHAPTERS.map((ch, i) => {
                const isOpen = openChapter === i;
                return (
                  <button
                    key={ch.num}
                    onClick={() => setOpenChapter(isOpen ? null : i)}
                    className={`text-left p-6 rounded-2xl border transition-all ${
                      isOpen
                        ? 'bg-[#00CFFF]/[0.06] border-[#00CFFF]/50 shadow-[0_0_40px_-10px_rgba(0,207,255,0.3)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-[#F5C518] tabular-nums leading-none">{ch.num}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{ch.icon}</span>
                          <h3 className="text-lg font-semibold text-white">{ch.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400">{ch.desc}</p>
                        <div
                          className="grid transition-all duration-500"
                          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                        >
                          <div className="overflow-hidden">
                            <ul className="mt-4 space-y-2 pt-4 border-t border-white/10">
                              {ch.points.map((p, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                                  <span className="text-[#00CFFF] mt-0.5">✓</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUIZ */}
        <section className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Is Your App Actually Ready to Launch?
            </h2>
            <p className="text-slate-400 text-center mb-10">5 quick questions. Honest answers only.</p>

            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 space-y-3">
              {QUIZ_QUESTIONS.map((q, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] cursor-pointer transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setQuiz(q => q.map((v, idx) => idx === i ? !v : v))}
                    className={`relative w-12 h-6 rounded-full transition-all flex-shrink-0 ${
                      quiz[i] ? 'bg-[#00CFFF]' : 'bg-white/10'
                    }`}
                    aria-pressed={quiz[i]}
                    aria-label={q}
                  >
                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                      quiz[i] ? 'left-6' : 'left-0.5'
                    }`} />
                  </button>
                  <span className="text-slate-200">{q}</span>
                </label>
              ))}

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-300">Your Score</span>
                  <span className="text-sm font-bold text-[#F5C518]">{scoreMsg}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
                    style={{
                      width: `${(score / 5) * 100}%`,
                      background: score === 5 ? '#22c55e' : 'linear-gradient(90deg, #00CFFF, #F5C518)',
                    }}
                  />
                </div>
                <a
                  href="#buy"
                  className="mt-6 block text-center bg-[#F5C518] hover:bg-[#ffd633] text-[#0A1530] font-bold py-3 rounded-xl transition-all"
                >
                  Get the full 60-point checklist in Ship It Right →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-center">
            <div className="relative mx-auto md:mx-0">
              <div
                aria-hidden
                className="absolute inset-0 blur-2xl opacity-50"
                style={{ background: 'radial-gradient(circle, #00CFFF 0%, transparent 70%)' }}
              />
              <div className="relative w-64 h-64 rounded-2xl border-2 border-[#00CFFF]/30 bg-gradient-to-br from-[#0D1B3E] to-[#1a2b5e] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,207,255,0.4)]">
                <img src="/image/Gospel-ononwi.png" alt="Gospel Ononwi — author of Ship It Right" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Written by Someone Who's Shipped Real Products
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Gospel Ononwi is a product builder, AI developer, and entrepreneur — the founder of <strong className="text-white">Bluewaves Technology</strong>, a digital product development company based in Port Harcourt, Nigeria. He's built and shipped multiple real-world products including HerbalStrength, PrepVerse, and CitiTour. As AI-assisted development exploded, Gospel noticed the same pattern everywhere: brilliant ideas, fast execution, but missing the production fundamentals that determine whether a product survives contact with real users. <em className="text-[#00CFFF]">Ship It Right</em> is everything he wishes every vibe coder knew before going live.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React & React Native', 'Node.js, Vue, Vite', 'Firebase & Firestore', 'AI-Assisted Development'].map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm">
                <a href="https://bwtng.live" className="text-[#00CFFF] hover:underline">bwtng.live →</a>
                <Link to="/about-us" className="text-slate-400 hover:text-white">About</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-6 md:px-12 py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.slice(0, showAllFaqs ? FAQS.length : INITIAL_FAQS).map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border transition-all ${
                      isOpen ? 'bg-white/[0.04] border-[#00CFFF]/30' : 'bg-white/[0.02] border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white">{f.q}</h3>
                      <span className={`text-[#00CFFF] text-2xl transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-slate-300 leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {!showAllFaqs && FAQS.length > INITIAL_FAQS && (
              <button
                onClick={() => setShowAllFaqs(true)}
                className="mt-6 w-full text-center py-3 rounded-xl border border-[#00CFFF]/30 text-[#00CFFF] hover:bg-[#00CFFF]/10 font-semibold transition-all"
              >
                Show All {FAQS.length} Questions
              </button>
            )}
          </div>
        </section>

        {/* BUY CTA */}
        <section id="buy" className="relative px-6 md:px-12 py-24 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,207,255,0.15) 0%, rgba(245,197,24,0.15) 100%)',
            }}
          />
          <div className="relative max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Stop Guessing. Start Shipping Right.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
              Get the complete production readiness checklist — security, performance, SEO, legal, payments, and more — in one practical guide.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { name: 'Amazon', sub: 'Kindle & Paperback', primary: true, href: 'https://www.amazon.com/dp/B0H2JNJ7W1/ref=sr_1_1?crid=3DQ68VCYDNXN8&dib=eyJ2IjoiMSJ9.FmJJ4ErAChr4MdZd1xDlHXkG75N-xe4_JZqZrJvy-cMt5D2CwNIq_6z9DgeE-Jz9hFNzrMfPOHuN8U7_z61z6-Cv428xWcV2dx1O8BL35CDgbz0xocBzYgOSHixzo0FGOaER43nnIdwv3qC_SK3AxE0aUbv9izVJjhYA7cWrKJQ8-x_FlQZbSNAjdosFhSynJ1OJiRlS05nvYdvH9w1Z-jVttu_4Qqyy8xdhLlK3smI.p-fz1Ap5yDy3vop94CmtxTnqVOQFfQO5pMCtQwZtzQw&dib_tag=se&keywords=Ship+It+Right%3A+The+Production+Readiness+Checklist+for+Vibe-Built+Apps+%E2%80%94+Security%2C+SEO%2C+Scalability%2C+Legal%2C+Payments%2C+Analytics%2C+and+DevOps+for+Non-Technical+Founders&nsdOptOutParam=true&qid=1781736396&sprefix=ship+it+right+the+production+readiness+checklist+for+vibe-built+apps+security%2C+seo%2C+scalability%2C+legal%2C+payments%2C+analytics%2C+and+devops+for+non-technical+founders%2Caps%2C324&sr=8-1' },
                { name: 'Gumroad', sub: 'Instant PDF Download', href: 'https://spellz49.gumroad.com/l/ship-it-right' },
                { name: 'Selar', sub: 'For Nigerian & African Readers (₦)', href: 'https://selar.com/8py1156847' },
              ].map(b => (
                <a
                  key={b.name}
                  href={b.href}
                  className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                    b.primary
                      ? 'bg-[#F5C518] text-[#0A1530] shadow-[0_15px_50px_-10px_rgba(245,197,24,0.6)]'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-white/10 backdrop-blur'
                  }`}
                >
                  <div className="text-xl font-bold mb-1">{b.name}</div>
                  <div className={`text-sm ${b.primary ? 'text-[#0A1530]/70' : 'text-slate-400'}`}>{b.sub}</div>
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-8">
              Lifetime access. Read on any device. Plain-English explanations with screenshots.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative px-6 md:px-12 py-12 border-t border-white/10 bg-[#070F23]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-slate-400">
            <div className="font-bold text-white">Bluewaves Technology</div>
            <nav className="flex flex-wrap gap-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about-us" className="hover:text-white">About</Link>
              <Link to="/services" className="hover:text-white">Other Products</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500 mt-6">
            © 2026 Bluewaves Technology — bwtng.live
          </div>
        </footer>

        {/* Sticky CTA */}
        {showSticky && (
          <a
            href="#buy"
            className="fixed bottom-6 right-6 z-50 bg-[#F5C518] hover:bg-[#ffd633] text-[#0A1530] font-bold px-5 py-3 rounded-full shadow-[0_10px_40px_-10px_rgba(245,197,24,0.6)] transition-all hover:scale-105"
          >
            Get the Book →
          </a>
        )}

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </main>
    </>
  );
};

export default ShipItRight;