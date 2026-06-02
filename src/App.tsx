import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// Pages
import Index from '@/page-content/Index';
import AboutUs from '@/page-content/AboutUs';
import Services from '@/page-content/Services';
import Portfolio from '@/page-content/Portfolio';
import Pricing from '@/page-content/Pricing';
import Testimonials from '@/page-content/Testimonials';
import FAQs from '@/page-content/FAQs';
import ContactPage from '@/page-content/Contact';
import Blog from '@/page-content/Blog';
import BlogDetail from '@/page-content/BlogDetail';
import WebDevelopment from '@/page-content/WebDevelopment';
import MobileAppDevelopment from '@/page-content/MobileAppDevelopment';
import SEOServices from '@/page-content/SEOServices';
import Branding from '@/page-content/Branding';
import NotFound from '@/page-content/NotFound';

// Admin
import AdminDashboard from '@/page-content/AdminDashboard';
import AdminLogin from '@/admin/pages/Login';
import { Dashboard } from '@/admin/pages/Dashboard';
import BlogAdmin from '@/admin/pages/BlogAdmin';
import ProductAdmin from '@/admin/pages/ProductAdmin';
import { ADMIN_PRODUCTS } from '@/page-content/AdminDashboard';
import AIBuilderAcademy from '@/page-content/AIBuilderAcademy';
import AcademyRegister from '@/page-content/AcademyRegister';
import AcademyCohorts from '@/admin/pages/AcademyCohorts';
import AcademyRegistrations from '@/admin/pages/AcademyRegistrations';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/seo-services" element={<SEOServices />} />
              <Route path="/branding" element={<Branding />} />
              <Route path="/ai-builder-academy" element={<AIBuilderAcademy />} />
              <Route path="/academy/register" element={<AcademyRegister />} />
              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard><Dashboard apps={ADMIN_PRODUCTS} /></AdminDashboard>} />
              <Route path="/admin/blog" element={<AdminDashboard><BlogAdmin /></AdminDashboard>} />
              <Route path="/admin/academy" element={<AdminDashboard><AcademyCohorts /></AdminDashboard>} />
              <Route path="/admin/academy/registrations" element={<AdminDashboard><AcademyRegistrations /></AdminDashboard>} />
              <Route path="/admin/products/:appId" element={<AdminDashboard><ProductAdmin apps={ADMIN_PRODUCTS} /></AdminDashboard>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingWhatsApp />
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
