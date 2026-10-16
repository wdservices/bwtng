// Central source of truth for client projects and in-house products.
export type ClientProject = {
  slug: string;
  name: string;
  category: string;
  url: string;
  description: string;
  note?: string;
  image: string;
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
  featured?: boolean;
};

export const clientProjects: ClientProject[] = [
  {
    slug: 'raffila',
    name: 'Raffila',
    category: 'Raffle Draw & Prize Competitions',
    url: 'https://raffila.com/',
    description:
      'Development of a digital raffle and prize-competition platform designed to make prize discovery, entries, payments, and draw experiences accessible through a digital interface.',
    image: '/image/work/raffila.jpg',
  },
  {
    slug: 'mega-vantage-apartments',
    name: 'Mega Vantage Apartments',
    category: 'Hospitality & Accommodation',
    url: 'https://megavantagehomes.com/',
    description:
      'A hospitality website for premium short-let and long-stay apartments, supporting accommodation discovery and booking-related experiences.',
    note: 'Separately, we also built a food-ordering system for the property — unit selection, item ordering and printed dockets for kitchen, reception and guests.',
    image: '/image/work/megavantage-homes.jpg',
  },
  {
    slug: 'mega-vantage-dynamic',
    name: 'Mega Vantage Dynamic',
    category: 'Corporate Website · Oil & Gas',
    url: 'https://megavantagedynamic.com/',
    description:
      'A corporate digital presence for an indigenous oil and gas company delivering marine, construction, shipping, procurement, general contracting and oilfield equipment services.',
    image: '/image/work/megavantage-dynamic.jpg',
  },
  {
    slug: 'peers-alliance',
    name: 'Peers Alliance',
    category: 'Consulting & Professional Services',
    url: 'https://peersallianceng.org/',
    description:
      'A professional website for a consulting firm providing training and capacity building, credit and risk management, background checks, due diligence, and business advisory services.',
    image: '/image/work/peers-alliance.jpg',
  },
  {
    slug: 'rivotels',
    name: 'Rivotels · Golden Tulip Hotels',
    category: 'Hospitality & Hotel Technology',
    url: 'https://rivotels.com/',
    description:
      'A hotel website showcasing Golden Tulip accommodation, rooms, suites, amenities, and hospitality experiences in Rivers State.',
    image: '/image/work/rivotels.jpg',
  },
];

export const products: Product[] = [
  {
    slug: 'sankofa-wing',
    name: 'Sankofa Wing Digital Museum',
    category: 'Immersive Technology · Digital Heritage',
    url: 'https://sankofa-wing.vercel.app/',
    description:
      'An interactive 3D digital museum experience that brings heritage and digital exploration together.',
    cta: 'Enter the Museum',
    status: 'live',
    image: '/image/work/sankofa.jpg',
    featured: true,
  },
  {
    slug: 'prepverse',
    name: 'PrepVerse',
    category: 'AI Exam Preparation',
    url: 'https://prepverse.bwtng.live/',
    description:
      'An exam-preparation product that helps learners practise past questions, receive answer explanations, and use AI-assisted learning features.',
    cta: 'Explore PrepVerse',
    status: 'live',
    image: '/image/work/prepverse.jpg',
  },
  {
    slug: 'citivas',
    name: 'Citivas',
    category: 'City Discovery & Marketplace',
    url: 'https://citivas.vercel.app/',
    description:
      'A city-focused digital platform bringing together business discovery, events, marketplace functionality, and wallet features.',
    cta: 'Explore Citivas',
    status: 'live',
    image: '/image/work/citivas.jpg',
  },
  {
    slug: 'asemi',
    name: 'Asemi',
    category: 'Product Authentication',
    url: 'https://asemi.vercel.app/',
    description:
      'A product-authentication solution designed to help identify genuine products and distinguish them from counterfeits using product tags.',
    cta: 'Explore Asemi',
    status: 'live',
  },
  {
    slug: 'eventdesk',
    name: 'EventDesk',
    category: 'Event Management',
    description:
      'An event-organisation application in development, designed to support the planning and coordination of events.',
    status: 'in-development',
  },
];

export const MUSEUM_URL = 'https://sankofa-wing.vercel.app/';
