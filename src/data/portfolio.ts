import asemiImage from '@/assets/asemi-website.jpg.asset.json';

// Central source of truth for client projects and in-house products.
export type ClientProject = {
  slug: string;
  name: string;
  category: string;
  url: string;
  description: string;
  note?: string;
  image: string;
  tags?: string[];
  metrics?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  url?: string;
  description: string;
  cta?: string;
  status: 'live' | 'in-development';
  image?: string;
  logo?: string;
  featured?: boolean;
  tags?: string[];
  metrics?: string;
};

export const clientProjects: ClientProject[] = [
  {
    slug: 'raffila',
    name: 'Raffila',
    category: 'Raffle Draw & Prize Competitions',
    url: 'https://raffila.com/',
    description:
      'Digital raffle and prize-competition platform designed to make prize discovery, entries, payments, and draw experiences accessible and auditable through an intuitive interface.',
    image: '/image/work/raffila.jpg',
    tags: ['Web Application', 'Fintech / Gaming', 'Paystack API', 'Real-time Draws'],
    metrics: 'Active Draw Engine · 10k+ Tickets Processed',
  },
  {
    slug: 'mega-vantage-apartments',
    name: 'Mega Vantage Apartments',
    category: 'Hospitality & Accommodation',
    url: 'https://megavantagehomes.com/',
    description:
      'A hospitality website for premium short-let and long-stay apartments in Port Harcourt, supporting accommodation discovery, room booking, and automated guest notifications.',
    note: 'Separately, we also engineered a comprehensive food-ordering POS system for the property — unit selection, instant kitchen order dockets, guest tabs, and receipt printing.',
    image: '/image/work/megavantage-homes.jpg',
    tags: ['Hospitality Booking', 'Custom POS Engine', 'Docket Printing', 'Guest Portal'],
    metrics: 'Integrated Room Booking + Food Ordering POS',
  },
  {
    slug: 'mega-vantage-dynamic',
    name: 'Mega Vantage Dynamic',
    category: 'Corporate Energy & Oilfield Logistics',
    url: 'https://megavantagedynamic.com/',
    description:
      'A modern corporate digital presence for an indigenous oil and gas enterprise delivering marine logistics, construction, shipping, international procurement, and oilfield equipment services.',
    image: '/image/work/megavantage-dynamic.jpg',
    tags: ['Corporate Portal', 'Oil & Gas Logistics', 'Fleet Catalog', 'SEO Optimized'],
    metrics: 'Multi-Service Marine & Oilfield Catalog',
  },
  {
    slug: 'peers-alliance',
    name: 'Peers Alliance',
    category: 'Consulting & Professional Services',
    url: 'https://peersallianceng.org/',
    description:
      'A professional platform for an executive consulting firm providing training, risk management, corporate background checks, corporate due diligence, and enterprise advisory services.',
    image: '/image/work/peers-alliance.jpg',
    tags: ['Executive Consulting', 'Due Diligence Portal', 'Training Registry', 'CMS'],
    metrics: 'Enterprise Due Diligence & Training Suite',
  },
  {
    slug: 'rivotels',
    name: 'Rivotels · Golden Tulip Hotels',
    category: 'Hospitality & Hotel Technology',
    url: 'https://rivotels.com/',
    description:
      'A luxury hospitality portal showcasing Golden Tulip accommodation, deluxe suites, dining experiences, executive conference halls, and event reservations in Rivers State.',
    image: '/image/work/rivotels.jpg',
    tags: ['Hotel Booking', 'Luxury Suite Showcase', 'Event Reservation', 'Speed-Optimized'],
    metrics: 'Multi-Room Reservation Engine & Event Showcase',
  },
];

export const products: Product[] = [
  {
    slug: 'sankofa-wing',
    name: 'Sankofa Wing Digital Museum',
    category: 'Immersive Technology · Digital Heritage',
    url: 'https://sankofa-wing.vercel.app/',
    description:
      'An interactive 3D WebGL virtual museum experience that brings African historical relics and digital heritage to life through spatial navigation and rich multimedia storytelling.',
    cta: 'Enter 3D Museum',
    status: 'live',
    image: '/image/work/sankofa.jpg',
    featured: true,
    tags: ['Three.js / WebGL', 'Spatial Audio', '3D Photogrammetry', 'Virtual Exhibits'],
    metrics: '50k+ Explorations · 120+ Curated Historical Relics',
  },
  {
    slug: 'prepverse',
    name: 'PrepVerse',
    category: 'AI Exam Preparation & EdTech',
    url: 'https://prepverse.bwtng.live/',
    description:
      'An AI-powered adaptive exam preparation platform helping learners master past questions, receive real-time generative explanations, and track speed and topic mastery analytics.',
    cta: 'Explore PrepVerse',
    status: 'live',
    image: '/image/work/prepverse.jpg',
    logo: '/product-logos/prepverse.png',
    featured: true,
    tags: ['AI Tutor', 'Adaptive Testing', 'Gemini AI', 'Progress Analytics'],
    metrics: '10,000+ Exam Questions · Real-Time AI Explanations',
  },
  {
    slug: 'citivas',
    name: 'Citivas',
    category: 'City Discovery & Local Marketplace',
    url: 'https://citivas.vercel.app/',
    description:
      'A metropolitan lifestyle platform uniting local business discovery, verified merchant directories, event ticketing, and integrated digital wallet payment features.',
    cta: 'Explore Citivas',
    status: 'live',
    image: '/image/work/citivas.jpg',
    logo: '/product-logos/citivas_blue.png',
    tags: ['City Discovery', 'Local Marketplace', 'Event Ticketing', 'Digital Wallet'],
    metrics: '300+ Verified Vendors · Live in Port Harcourt',
  },
  {
    slug: 'herbalstrength',
    name: 'HerbalStrength',
    category: 'Health & Verified Herbal Wellness',
    url: 'https://herbalstrength.bwtng.live/',
    description:
      'A digital health platform and Android mobile app designed to help users discover authentic, verified herbal tea and drink recipes, natural health remedies, and vetted wellness guides.',
    cta: 'Explore HerbalStrength',
    status: 'live',
    image: '/image/work/herbalstrength.png',
    logo: '/product-logos/herbalstrength.png',
    tags: ['Android Mobile App', 'Herbal Medicine', 'Health Directory', 'Offline Catalog'],
    metrics: 'Live Web Companion & Google Play App · 1,000+ Active Users',
  },
  {
    slug: 'asemi',
    name: 'Asemi',
    category: 'Cryptographic Product Authentication',
    url: 'https://asemi.vercel.app/',
    description:
      'A tamper-proof product authentication solution enabling brands to combat counterfeiting and allowing consumers to verify genuine goods in seconds with smart encrypted tags.',
    cta: 'Explore Asemi',
    status: 'live',
    image: new URL(asemiImage.url, 'https://id-preview--d13ef275-8c16-4f27-a914-8cb4797c635a.lovable.app').href,
    tags: ['Anti-Counterfeit', 'Smart Tag Verification', 'Brand Protection', 'QR/NFC Engine'],
    metrics: 'Cryptographic Product Auditing & Brand Protection',
  },
  {
    slug: 'drafta',
    name: 'Drafta',
    category: 'AI Contract & Legal Document Automation',
    url: 'https://drafta.bwtng.live/',
    description:
      'An intelligent document drafting and automated contract assistant for legal teams, founders, and enterprises to draft, analyze, and customize agreements in minutes.',
    cta: 'Join Early Access',
    status: 'in-development',
    logo: '/product-logos/drafta.png',
    tags: ['AI Document Generation', 'Legal Tech', 'Automated Contracts', 'Enterprise Workflows'],
    metrics: 'In Active Beta · 40+ Pre-Configured Legal Templates',
  },
  {
    slug: 'emergensee',
    name: 'EmergenSee',
    category: 'Civic Safety & Emergency Alerting',
    url: 'https://emergensee.bwtng.live/',
    description:
      'A geo-aware incident alerting and rapid emergency communication system that connects citizens with immediate local emergency assistance and real-time situational awareness.',
    cta: 'View System',
    status: 'in-development',
    image: '/emergensee.png',
    tags: ['Emergency Dispatch', 'Real-Time Geo-Alerts', 'Civic Safety', 'WebSockets'],
    metrics: 'Sub-Second Geo-Alert Broadcasts & Responder Dispatch',
  },
  {
    slug: 'eventdesk',
    name: 'EventDesk',
    category: 'Event Operations & Smart Ticketing',
    description:
      'A full-lifecycle event management application supporting ticket sales, seat tier allocation, attendee check-in QR scanning, and automated broadcast updates.',
    cta: 'In Development',
    status: 'in-development',
    tags: ['Event Management', 'QR Ticket Scanner', 'Tiered Pricing', 'Guest Coordination'],
    metrics: 'In Development · Gate QR Verification & Analytics',
  },
];

export const MUSEUM_URL = 'https://sankofa-wing.vercel.app/';
