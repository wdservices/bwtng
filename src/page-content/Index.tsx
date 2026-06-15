import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientShowcase from "@/components/ClientShowcase";
import PopupController from "@/components/PopupController";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Bluewaves Technology — Web, Mobile, AI & Digital Solutions Nigeria</title>
        <meta name="description" content="Bluewaves Technology delivers web development, mobile apps, AI solutions, SEO and branding services for businesses in Nigeria." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bwtng.live/" />
        <meta property="og:url" content="https://www.bwtng.live/" />
      </Helmet>
      <PopupController />
      <Header />
      <Hero />
      <Services />
      <ClientShowcase />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
