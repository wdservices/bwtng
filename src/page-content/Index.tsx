import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientShowcase from "@/components/ClientShowcase";
import WelcomePopup from "@/components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <WelcomePopup />
      <Header />
      <Hero />
      <Services />
      <ClientShowcase />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
