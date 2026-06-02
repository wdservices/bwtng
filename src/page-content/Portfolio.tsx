import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ExternalLink, BookOpen, ChefHat, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';


const Portfolio: React.FC = () => {
  const products = [
    {
      logo: "/product-logos/prepverse.png",
      name: "PrepVerse",
      description: "AI-powered exam preparation with practice tests, study plans, and progress analytics.",
      category: "EdTech",
      status: "Live",
      url: "https://www.prepverse.bwtng.live/",
      ctaLabel: "Visit Product",
      color: "text-primary",
    },
    {
      icon: ChefHat,
      name: "BakeBook",
      description: "The ultimate recipe management app for bakers—organize, store, and access your favorites.",
      category: "Lifestyle",
      status: "Live",
      url: "https://bakebook.vercel.app/",
      ctaLabel: "Visit Product",
      color: "text-primary",
    },
    {
      logo: "/product-logos/drafta.png",
      name: "Drafta",
      description: "AI-assisted writing and publishing workspace for generating, organizing, and managing article content.",
      category: "AI Content",
      status: "Live",
      url: "https://www.drafta.bwtng.live/",
      ctaLabel: "Visit Product",
      color: "text-primary",
    },
    {
      logo: "/product-logos/herbalstrength.png",
      name: "HerbalStrength",
      description: "Wellness platform for discovering herbal solutions and healthy lifestyle products.",
      category: "Health",
      status: "Live",
      url: "https://play.google.com/store/apps/details?id=com.bwtng.herbalstrenght",
      ctaLabel: "View on Play Store",
      color: "text-primary",
    },
    {
      icon: MapPin,
      name: "CityTour",
      description: "City exploration platform for discovering destinations and local travel experiences.",
      category: "Travel",
      status: "New",
      ctaLabel: "Visit Product",
      color: "text-primary",
    }
  ];

  const clients = [
    'Anaco Prime Sport',
    'Bakebook',
    'EmergenSee',
    'Golden Tulip Hotel',
    'Oak Park and Gardens',
    'Megavantage Dynamic',
    'Peers Alliance NG',
    'Megavantage Apartments',
    'Megavantage Homes',
    'Bluewaves Ventures',
    'TechHub Nigeria',
    'Port Harcourt Business Hub',
    'Nigerian Tech Solutions',
    'Rivers State Innovation',
    'Digital Africa Co',
    'West African Ventures'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Portfolio | Our Projects & Products | Bluewaves Technology Nigeria</title>
        <meta name="description" content="Browse Bluewaves Technology's portfolio of software products, web development, mobile apps and AI solutions. Explore PrepVerse, BakeBook, Drafta, HerbalStrength and more." />
        <meta name="keywords" content="Bluewaves Technology portfolio, software projects Nigeria, PrepVerse, BakeBook, Drafta, HerbalStrength" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/portfolio" />
        <meta property="og:title" content="Portfolio | Our Projects & Products | Bluewaves Technology Nigeria" />
        <meta property="og:description" content="Browse Bluewaves Technology's portfolio of software products, web development, mobile apps and AI solutions. Explore PrepVerse, BakeBook, Drafta, HerbalStrength and more." />
        <meta property="og:url" content="https://www.bwtng.live/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Our Projects & Products | Bluewaves Technology Nigeria" />
        <meta name="twitter:description" content="Browse Bluewaves Technology's portfolio of software products, web development, mobile apps and AI solutions. Explore PrepVerse, BakeBook, Drafta, HerbalStrength and more." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our products and the amazing clients we've worked with.
            </p>
          </div>

          {/* Products Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="group glass-card rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        {product.logo ? (
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <img src={product.logo} alt={`${product.name} logo`} className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center ${product.color} group-hover:scale-110 transition-transform duration-300`}>
                            <product.icon className="h-6 w-6" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                          <Badge variant="secondary" className="mt-1 text-xs">{product.category}</Badge>
                        </div>
                      </div>
                      <Badge className={`text-xs ${product.status === 'Live' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                        {product.status}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {product.url ? (
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                          {product.ctaLabel || "Visit Product"}
                          <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="rounded-full opacity-50">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clients Section */}
          <div>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Clients</p>
              <h2 className="text-3xl font-bold mb-3">Trusted by Great Companies</h2>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">756+ products</span> delivered to clients worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-5 flex items-center justify-center h-20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <span className="text-muted-foreground group-hover:text-foreground font-medium transition-colors duration-300">
                    {client}
                  </span>
                </div>
              ))}
              <div className="glass-card rounded-xl p-5 flex items-center justify-center h-20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group bg-primary/10 border-primary/30">
                <span className="text-primary font-bold group-hover:text-primary-fixed-dim transition-colors duration-300">
                  + More
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
