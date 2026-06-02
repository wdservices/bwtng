export interface UserType {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  isPremium: boolean;
  lastActive: string;
  avatar?: string;
}

export interface AppStats {
  totalRevenue: number;
  monthlyActiveUsers: number;
  retentionRate: number;
}

export interface AppType {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  totalUsers: number;
  premiumUsers: number;
  stats: AppStats;
  recentUsers: UserType[];
}
