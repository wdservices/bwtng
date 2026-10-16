import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Bot, Building2, Check, ChevronRight, Code2, GraduationCap, Menu, MessageCircle, Mic2, MoveRight, Send, Smartphone, Sparkles, X, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const clientProjects = [
  { name: 'Raffila', category: 'Raffle Draw & Prize Competition', description: 'A digital raffle and prize-competition platform for prize discovery, entries, payments, and draw experiences.', url: 'https://raffila.com/', theme: 'project-blue', mark: 'R' },
  { name: 'Mega Vantage Apartments', category: 'Hospitality Technology', description: 'A premium short-let and long-stay apartment experience with accommodation discovery and booking-related flows.', url: 'https://megavantagehomes.com/', theme: 'project-sand', mark: 'M' },
  { name: 'Mega Vantage Dynamic', category: 'Corporate Website / Oil & Gas', description: 'A focused corporate digital presence for an oil and gas business.', url: 'https://megavantagedynamic.com/', theme: 'project-violet', mark: 'D' },
  { name: 'Peers Alliance', category: 'Consulting & Professional Services', description: 'A professional website for training, capacity building, credit and risk management, due diligence, and advisory services.', url: 'https://peersallianceng.org/', theme: 'project-olive', mark: 'P' },
  { name: 'Rivotels / Golden Tulip', category: 'Hospitality & Hotel Technology', description: 'A refined hotel website showcasing Golden Tulip accommodation, rooms, suites, amenities, and hospitality experiences in Rivers State.', url: 'https://rivotels.com/', theme: 'project-gold', mark: 'G' },
]

const products = [
  { name: 'Asemi', category: 'Product Authentication', description: 'Helping people identify genuine products and distinguish them from counterfeits using product tags.', url: 'https://asemi.vercel.app/', cta: 'Explore Asemi', icon: Check, accent: 'blue' },
  { name: 'Citivas', category: 'City, Events & Marketplace', description: 'Business discovery, events, marketplace functionality, and wallet features in one city-focused platform.', url: 'https://citivas.vercel.app/', cta: 'Explore Citivas', icon: Building2, accent: 'violet' },
  { name: 'PrepVerse', category: 'AI Exam Preparation', description: 'Past questions, answer explanations, and AI-assisted learning features for better exam preparation.', url: 'https://prepverse.bwtng.live/', cta: 'Explore PrepVerse', icon: GraduationCap, accent: 'orange' },
  { name: 'EventDesk', category: 'In development', description: 'An event-organisation application designed to support the planning and coordination of events.', url: null, cta: 'In Development', icon: Zap, accent: 'slate' },
]

const services = [
  [Code2, 'Website development', 'Digital homes that make complex businesses easy to understand and act on.'],
  [Smartphone, 'Mobile applications', 'Useful, intuitive mobile products designed around the moments that matter.'],
  [Bot, 'AI development & integration', 'Practical intelligence that makes products smarter, faster, and more helpful.'],
  [Building2, 'Business management systems', 'The operational software teams need to move with clarity and confidence.'],
  [GraduationCap, 'Education technology', 'Learning tools that make practice, progress, and access more engaging.'],
  [Sparkles, 'Immersive digital experiences', 'Interactive 3D environments and digital worlds that invite exploration.'],
]

function ProjectCard({ project, index }: { project: typeof clientProjects[number], index: number }) {
  return <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .06 }} className="project-card group">
    <div className={`project-art ${project.theme}`}><span>{project.mark}</span><div className="art-grid" /><div className="art-orb" /></div>
    <div className="project-copy"><div><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div><ArrowUpRight className="project-arrow" /></div>
    <p className="project-description">{project.description}</p>
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link">Visit live project <MoveRight /></a>
  </motion.article>
}

export default function RedesignHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const whatsapp = 'https://wa.me/2347051551543'
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const sendMessage = () => { const text = `Hello Bluewaves, I'm ${form.name || 'interested in your services'}. ${form.message}`; window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank') }

  return <div className="studio-site">
    <header className={`studio-header ${menuOpen ? 'open' : ''}`}><Link to="/" className="brand" onClick={() => scrollTo('top')}><img src="/logo.png" alt="" /><span>bluewaves<span className="brand-dot">.</span></span></Link>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-open' : ''}>{[['Services','services'],['Our work','work'],['Our products','products'],['Digital museum','museum'],['About','about']].map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}<button className="nav-cta" onClick={() => scrollTo('contact')}>Start a project <ArrowUpRight /></button></nav>
    </header>

    <main id="top">
      <section className="hero dark-section"><div className="hero-copy"><p className="kicker"><span /> Digital innovation studio · Port Harcourt, Nigeria</p><h1>We turn ambitious ideas into <em>digital experiences.</em></h1><p className="hero-lede">From intelligent software and mobile applications to business platforms and immersive digital experiences, we build technology that moves businesses forward.</p><div className="hero-actions"><button className="button button-blue" onClick={() => scrollTo('contact')}>Start a project <ArrowUpRight /></button><button className="button button-ghost" onClick={() => scrollTo('work')}>Explore our work <ChevronRight /></button></div></div><div className="hero-visual" aria-label="Abstract blue wave sculpture"><div className="wave wave-one" /><div className="wave wave-two" /><div className="wave wave-three" /><div className="hero-tag"><span>01</span><strong>Ideas into<br />interfaces</strong></div></div><div className="hero-foot"><span>Scroll to explore</span><span className="line" /><span>01 — 06</span></div></section>

      <section id="services" className="light-section services-section"><div className="section-heading"><p className="eyebrow">What we do</p><h2>Technology designed<br /><span>around real problems.</span></h2><p>We combine strategy, design, and engineering to create digital products people can actually use.</p></div><div className="service-grid">{services.map(([Icon, title, copy], index) => <motion.div key={title as string} className={`service-item ${index === 0 ? 'featured' : ''}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}><div className="service-icon"><Icon /></div><div><h3>{title as string}</h3><p>{copy as string}</p></div><ArrowUpRight className="service-arrow" /></motion.div>)}</div></section>

      <section id="work" className="dark-section work-section"><div className="section-heading heading-row"><div><p className="eyebrow blue">Selected client projects</p><h2>Real businesses.<br /><span>Real solutions.</span></h2></div><p>We partner with organisations to turn complex needs into useful digital experiences.</p></div><div className="project-grid">{clientProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></section>

      <section id="products" className="light-section products-section"><div className="section-heading heading-row"><div><p className="eyebrow">Built in-house</p><h2>Ideas we believe in.<br /><span>Products we are building.</span></h2></div><p>Beyond client work, we develop digital products that explore new ways to solve everyday problems.</p></div><div className="products-grid">{products.map(product => { const Icon = product.icon; return <article key={product.name} className={`product-card product-${product.accent}`}><div className="product-icon"><Icon /></div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p>{product.url ? <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-link">{product.cta} <ArrowUpRight /></a> : <span className="status-pill">In development</span>}</article> })}</div></section>

      <section id="museum" className="museum-section"><div className="museum-art"><div className="museum-arch" /><div className="museum-glow" /><div className="museum-label">SANKOFA<br /><span>WING</span></div></div><div className="museum-copy"><p className="eyebrow violet">Signature experience · 2024</p><h2>Culture deserves more than a screen. It deserves an <em>experience.</em></h2><p>Explore Sankofa Wing, an immersive digital museum experience that brings heritage and technology together through interactive 3D exploration.</p><a href="https://sankofa-wing.vercel.app/" target="_blank" rel="noopener noreferrer" className="button button-light">Enter the digital museum <ArrowUpRight /></a></div></section>

      <section id="about" className="light-section principles-section"><div className="section-heading"><p className="eyebrow">How we think</p><h2>Engineered with purpose.<br /><span>Designed for people.</span></h2></div><div className="principles"><div><span>01</span><h3>Understand first.</h3><p>We understand the business problem before choosing the technology.</p></div><div><span>02</span><h3>Design for reality.</h3><p>We map the real customer journey, not an imaginary perfect one.</p></div><div><span>03</span><h3>Build to last.</h3><p>We engineer maintainable, secure, scalable software.</p></div><div><span>04</span><h3>Keep evolving.</h3><p>We test, launch, learn, and improve with a long-term mindset.</p></div></div><div className="process-row"><div><span>01</span><strong>Discover</strong><small>Understand the problem</small></div><div><span>02</span><strong>Design</strong><small>Map the experience</small></div><div><span>03</span><strong>Develop</strong><small>Engineer the product</small></div><div><span>04</span><strong>Launch & evolve</strong><small>Learn and improve</small></div></div></section>

      <section id="contact" className="contact-section dark-section"><div className="contact-intro"><p className="eyebrow blue">Let&apos;s make something useful</p><h2>Your next big idea deserves to be <em>built right.</em></h2><p>Tell us what you&apos;re trying to achieve. Let&apos;s explore how the right digital solution can move your business forward.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link"><MessageCircle /> Chat on WhatsApp <ArrowUpRight /></a></div><form className="contact-form" onSubmit={e => { e.preventDefault(); sendMessage() }}><label>Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>What are you building?<textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us a little about your project..." /></label><button className="button button-blue" type="submit">Send enquiry <Send /></button></form></section>
    </main>
    <footer className="studio-footer"><div className="footer-brand"><Link to="/" className="brand"><img src="/logo.png" alt="Bluewaves Technology" /><span>bluewaves<span className="brand-dot">.</span></span></Link><p>Serious software for ambitious ideas.</p></div><div><p className="eyebrow">Explore</p><div className="footer-links"><button onClick={() => scrollTo('work')}>Our work</button><button onClick={() => scrollTo('products')}>Our products</button><button onClick={() => scrollTo('contact')}>Contact</button></div></div><div><p className="eyebrow">Contact</p><a href="mailto:info@bwtng.live">info@bwtng.live</a><p>Ada George, Port Harcourt<br />Nigeria</p></div><div className="footer-bottom">© {new Date().getFullYear()} Bluewaves Technology <span>Built in Nigeria · Built for everywhere</span></div></footer>
  </div>
}

