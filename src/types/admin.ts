export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isPremium?: boolean;
  lastActive?: string;
}

export enum ToolStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  demoUrl: string;
  documentationUrl: string;
  imageUrl?: string;
  status: ToolStatus;
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  tags: string[];
  keywords: string[];
  createdAt: unknown;
  updatedAt: unknown;
  createdBy?: string;
  updatedBy?: string;
}

export interface ProductWorkspaceModule {
  title: string;
  description: string;
}

export interface ProductWorkspaceNote {
  label: string;
  value: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  logoPath?: string;
  path: string;
  totalUsers: number;
  premiumUsers: number;
  recentUsers: User[];
  stats: {
    totalRevenue: number;
    monthlyActiveUsers: number;
    retentionRate: number;
  };
  liveUrl?: string;
  liveLabel?: string;
  repositoryPath?: string;
  integrationStatus?: string;
  authStrategy?: string;
  backendStrategy?: string;
  dataSource?: string;
  workspaceModules?: ProductWorkspaceModule[];
  architectureNotes?: ProductWorkspaceNote[];
  nextSteps?: string[];
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  conversionRate: number;
}

export interface Activity {
  id: string;
  type: 'login' | 'signup' | 'purchase' | 'upgrade' | 'downgrade';
  user: {
    id: string;
    name: string;
    email: string;
  };
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export enum BlogStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  excerpt?: string;
  status: BlogStatus;
  tags: string[];
  clicks: number;
  views: number;
  createdDate?: string;
  createdTime?: string;
  createdAt: unknown;
  updatedAt: unknown;
  createdBy?: string;
  updatedBy?: string;
}
