import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ChefHat, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { logo: "/product-logos/prepverse.png",     name: "PrepVerse",      description: "AI-powered exam preparation with practice tests, study plans, and progress analytics.",           category: "EdTech",      status: "Live",        url: "https://www.prepverse.bwtng.live/" },
  { icon: ChefHat,                             name: "BakeBook",       description: "The ultimate recipe management app for bakers — organize, store, and access your favorites.",    category: "Lifestyle",   status: "Live",        url: "https://bakebook.vercel.app/" },
  { logo: "/product-logos/drafta.png",         name: "Drafta",         description: "AI-assisted writing and publishing workspace for generating and managing article content.",       category: "AI Content",  status: "Live",        url: "https://www.drafta.bwtng.live/" },
  { logo: "/product-logos/herbalstrength.png", name: "HerbalStrength", description: "Wellness platform for discovering herbal solutions and healthy lifestyle products.",             category: "Health",      status: "Live",        url: "https://play.google.com/store/apps/details?id=com.bwtng.herbalstrenght" },
  { icon: MapPin,                              name: "CityTour",       description: "City exploration platform for discovering destinations and local travel experiences.",            category: "Travel",      status: "Coming Soon", url: null },
];

const Products = () => (
  <section id="products" className="py-32 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">Our Products</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 font-display">In-House Innovations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real solutions we've built to address real-world challenges.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.08 }}
            className="glass-card rounded-2xl p-7 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                {product.logo ? (
                  <img src={product.logo} alt={product.name} className="w-10 h-10 object-contain" />
                ) : product.icon ? (
                  <product.icon className="w-6 h-6 text-primary" />
                ) : null}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-base font-bold text-foreground">{product.name}</h3>
                  <Badge className={`text-xs border ${
                    product.status === 'Live'
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : 'bg-muted text-muted-foreground border-border'
                  }`}>
                    {product.status === 'Live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse inline-block" />
                    )}
                    {product.status}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">{product.category}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.description}</p>
            {product.url && (
              <a href={product.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200 group">
                Visit Product <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
