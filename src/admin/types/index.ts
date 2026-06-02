// App types
export interface App {
  id: string;
  name: string;
  path: string;
  icon: string;
  totalUsers: number;
  recentUsers: User[];
  premiumSubscribers: number;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
  isPremium: boolean;
}

// AI Tool types
export interface AITool {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  demoUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Dashboard stats
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  premiumUsers: number;
  totalRevenue: number;
  recentActivity: Activity[];
}

// Activity types
export interface Activity {
  id: string;
  type: 'login' | 'signup' | 'purchase' | 'update';
  userId: string;
  userName: string;
  timestamp: string;
  details?: string;
}
