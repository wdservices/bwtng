import type { RouteRecord } from 'vite-react-ssg'
import Layout from './Layout'
import Index from '@/page-content/Index'
import AboutUs from '@/page-content/AboutUs'
import Services from '@/page-content/Services'
import Portfolio from '@/page-content/Portfolio'
import Pricing from '@/page-content/Pricing'
import Testimonials from '@/page-content/Testimonials'
import FAQs from '@/page-content/FAQs'
import ContactPage from '@/page-content/Contact'
import Blog from '@/page-content/Blog'
import BlogDetail from '@/page-content/BlogDetail'
import WebDevelopment from '@/page-content/WebDevelopment'
import MobileAppDevelopment from '@/page-content/MobileAppDevelopment'
import SEOServices from '@/page-content/SEOServices'
import Branding from '@/page-content/Branding'
import UIUXDesign from '@/page-content/UIUXDesign'
import BusinessConsultation from '@/page-content/BusinessConsultation'
import DigitalMarketing from '@/page-content/DigitalMarketing'
import DigitalTools from '@/page-content/DigitalTools'
import AIServices from '@/page-content/AIServices'
import NotFound from '@/page-content/NotFound'
import AIBuilderAcademy from '@/page-content/AIBuilderAcademy'
import AcademyRegister from '@/page-content/AcademyRegister'
import AcademyPayment from '@/page-content/AcademyPayment'
import AcademyPaymentSuccess from '@/page-content/AcademyPaymentSuccess'
import AdminDashboard from '@/page-content/AdminDashboard'
import AdminLogin from '@/admin/pages/Login'
import { Dashboard } from '@/admin/pages/Dashboard'
import BlogAdmin from '@/admin/pages/BlogAdmin'
import ProductAdmin from '@/admin/pages/ProductAdmin'
import { ADMIN_PRODUCTS } from '@/page-content/AdminDashboard'
import AcademyCohorts from '@/admin/pages/AcademyCohorts'
import AcademyRegistrations from '@/admin/pages/AcademyRegistrations'

export const routes: RouteRecord[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/services', element: <Services /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/testimonials', element: <Testimonials /> },
      { path: '/faqs', element: <FAQs /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <BlogDetail /> },
      { path: '/web-development', element: <WebDevelopment /> },
      { path: '/mobile-app-development', element: <MobileAppDevelopment /> },
      { path: '/seo-services', element: <SEOServices /> },
      { path: '/branding', element: <Branding /> },
      { path: '/ui-ux-design', element: <UIUXDesign /> },
      { path: '/business-consultation', element: <BusinessConsultation /> },
      { path: '/digital-marketing', element: <DigitalMarketing /> },
      { path: '/digital-tools', element: <DigitalTools /> },
      { path: '/ai-services', element: <AIServices /> },
      { path: '/ai-builder-academy', element: <AIBuilderAcademy /> },
      { path: '/academy/register', element: <AcademyRegister /> },
      { path: '/academy/payment', element: <AcademyPayment /> },
      { path: '/academy/payment/success', element: <AcademyPaymentSuccess /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/admin', element: <AdminDashboard><Dashboard apps={ADMIN_PRODUCTS} /></AdminDashboard> },
      { path: '/admin/blog', element: <AdminDashboard><BlogAdmin /></AdminDashboard> },
      { path: '/admin/academy', element: <AdminDashboard><AcademyCohorts /></AdminDashboard> },
      { path: '/admin/academy/registrations', element: <AdminDashboard><AcademyRegistrations /></AdminDashboard> },
      { path: '/admin/products/:appId', element: <AdminDashboard><ProductAdmin apps={ADMIN_PRODUCTS} /></AdminDashboard> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
