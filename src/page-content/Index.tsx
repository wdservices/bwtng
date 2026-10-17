import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupController from "@/components/PopupController";
import {
  StudioHero,
  ServicesOverview,
  ClientWork,
  InHouseProducts,
  MuseumFeature,
  WhyAndProcess,
  StartProject,
} from "@/components/home/HomeSections";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Helmet>
        <title>Bluewaves Technology — Digital Innovation Studio in Port Harcourt, Nigeria</title>
        <meta name="description" content="Bluewaves Technology turns ambitious ideas into digital experiences: websites, mobile apps, AI solutions, business platforms and immersive 3D experiences for organisations in Nigeria and beyond." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bwtng.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bluewaves Technology — We Turn Ambitious Ideas Into Digital Experiences" />
        <meta property="og:description" content="Websites, mobile apps, AI solutions, business platforms and immersive experiences, engineered around real problems." />
        <meta property="og:url" content="https://www.bwtng.live/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PopupController />
      <Header />
      <StudioHero />
      <ServicesOverview />
      <ClientWork />
      <InHouseProducts />
      <MuseumFeature />
      <WhyAndProcess />
      <StartProject />
      <Footer />
    </main>
  );
};

export default Index;
