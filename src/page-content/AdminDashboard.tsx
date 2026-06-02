
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Dashboard } from '@/admin/pages/Dashboard';
import { App } from '@/types/admin';

const ADMIN_PRODUCTS: App[] = [
  {
    id: 'drafta',
    name: 'Drafta',
    path: '/admin/products/drafta',
    description: 'AI writing and publishing workspace with Firebase-backed users, articles, and admin analytics.',
    icon: '✍️',
    logoPath: '/product-logos/drafta.png',
    liveUrl: 'https://www.drafta.bwtng.live/',
    liveLabel: 'Open Website',
    repositoryPath: 'c:\\Users\\spell\\Documents\\GitHub\\drafta',
    integrationStatus: 'Ready for connector',
    authStrategy: 'Firebase Auth with Google and email sign-in plus admin role by email.',
    backendStrategy: 'Direct Firestore access for users and articles with a lightweight local Node generate endpoint.',
    dataSource: 'Firestore collections for users and articles.',
    workspaceModules: [
      {
        title: 'Users',
        description: 'Reuse the Drafta Firestore users collection and current admin analytics pipeline.'
      },
      {
        title: 'Articles',
        description: 'Manage generated and published article records from the existing articles collection.'
      },
      {
        title: 'Analytics',
        description: 'Mirror Drafta admin KPIs such as recent users, views, plans, and publishing activity.'
      },
      {
        title: 'Generation',
        description: 'Connect the existing content generation flow without rebuilding the full writer app.'
      }
    ],
    architectureNotes: [
      { label: 'Auth', value: 'Firebase Auth with admin gating already exists in useAuth.tsx.' },
      { label: 'Admin UI', value: 'A full admin dashboard already exists in drafta/src/pages/AdminDashboard.tsx.' },
      { label: 'Server', value: 'A local server endpoint exists for generation, so the master admin can call it through a connector.' }
    ],
    nextSteps: [
      'Extract the current Drafta Firestore reads into a shared admin service.',
      'Mirror the existing admin KPIs inside this master dashboard first.',
      'Add article moderation and publishing actions after the metrics are connected.'
    ],
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'herbal-harmony',
    name: 'Herbal Harmony',
    path: '/admin/products/herbal-harmony',
    description: 'Health and marketplace workspace with remedies, users, favorites, testimonials, and admin modules.',
    icon: '🌿',
    logoPath: '/product-logos/herbalstrength.png',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.bwtng.herbalstrenght',
    liveLabel: 'Open Play Store',
    repositoryPath: 'c:\\Users\\spell\\Documents\\GitHub\\herbal-harmony',
    integrationStatus: 'Ready for connector',
    authStrategy: 'Firebase Auth with a dedicated admin login flow.',
    backendStrategy: 'Direct Firestore management plus Cloudinary helpers for marketplace and content assets.',
    dataSource: 'Firestore users, remedies, favorites, testimonials, and marketplace records.',
    workspaceModules: [
      {
        title: 'Remedies',
        description: 'Bring over the current remedies management tools and editorial workflows.'
      },
      {
        title: 'Marketplace',
        description: 'Connect marketplace items and image uploads through the existing Cloudinary utilities.'
      },
      {
        title: 'Users',
        description: 'Reuse the real-time user management already powered by Firestore subscriptions.'
      },
      {
        title: 'Testimonials',
        description: 'Expose moderation and publishing controls for social proof content.'
      }
    ],
    architectureNotes: [
      { label: 'Auth', value: 'Separate admin login and sign-out flow already exists in the Herbal Harmony admin area.' },
      { label: 'Admin UI', value: 'Dedicated admin pages already exist for remedies, marketplace, users, favorites, testimonials, and settings.' },
      { label: 'Storage', value: 'Cloudinary helpers suggest media handling should stay behind a connector instead of being embedded in the shell.' }
    ],
    nextSteps: [
      'Start by exposing users and remedies in the master dashboard.',
      'Move marketplace actions behind a shared service layer so uploads stay secure.',
      'Port testimonial moderation after the shared data layer is stable.'
    ],
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'prepmate',
    name: 'PrepMate',
    path: '/admin/products/prepmate',
    description: 'Exam preparation workspace with users, pricing, scholarships, payments, analytics, and question management.',
    icon: '📚',
    logoPath: '/product-logos/prepverse.png',
    liveUrl: 'https://www.prepverse.bwtng.live/',
    liveLabel: 'Open Website',
    repositoryPath: 'c:\\Users\\spell\\Documents\\GitHub\\prepmate-static-quest',
    integrationStatus: 'Partially connected',
    authStrategy: 'Firebase-backed auth with admin checks and protected admin routes.',
    backendStrategy: 'Existing Express API and Firebase Admin server already handle payments, scholarship status, pricing, and admin checks.',
    dataSource: 'Firestore plus server endpoints under /api for admin and payment flows.',
    workspaceModules: [
      {
        title: 'Users',
        description: 'Reuse the existing admin-service queries for user activity and subscription lookups.'
      },
      {
        title: 'Payments',
        description: 'Connect payment verification, payment history, and access grants through the existing server routes.'
      },
      {
        title: 'Pricing',
        description: 'Adopt the current pricing and scholarship management endpoints instead of rebuilding business logic.'
      },
      {
        title: 'Questions',
        description: 'Bring question and exam management into the master admin after the shared data layer is wired.'
      }
    ],
    architectureNotes: [
      { label: 'API', value: 'Express routes already exist for pricing, scholarship status, admin checks, payments, and image uploads.' },
      { label: 'Admin UI', value: 'PrepMate already has an admin overview, users, pricing, revenue, scholarships, exams, and questions sections.' },
      { label: 'Best Fit', value: 'This is the first product to wire deeply because the server layer is already present.' }
    ],
    nextSteps: [
      'Point the master admin connector at the existing PrepMate Express API.',
      'Surface the current admin overview metrics inside this shell.',
      'Add pricing and scholarship controls before moving to question management.'
    ],
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
];

interface AdminDashboardProps {
  children?: React.ReactNode;
}

const AdminDashboard = ({ children }: AdminDashboardProps) => {
  return (
    <AdminLayout apps={ADMIN_PRODUCTS}>
      {children}
    </AdminLayout>
  );
};

export default AdminDashboard;
export { ADMIN_PRODUCTS };
