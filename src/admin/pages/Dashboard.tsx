import { useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Users, Zap } from 'lucide-react';

interface DashboardProps {
  apps: App[];
}

export const Dashboard = ({ apps = [] }: DashboardProps) => {
  const navigate = useNavigate();
  const mappedProducts = apps.filter((app) => app.integrationStatus).length;
  const liveProducts = apps.filter((app) => app.liveUrl).length;

  const stats = [
    { label: 'Products Listed', value: apps.length, icon: Package, color: 'text-blue-500' },
    { label: 'Mapped Workspaces', value: mappedProducts, icon: Zap, color: 'text-emerald-500' },
    { label: 'Live Products', value: liveProducts, icon: Users, color: 'text-violet-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-br from-primary/90 to-accent/80 p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70 font-medium">Master Admin</p>
          <h1 className="mt-2 text-2xl font-bold">Welcome to Bluewaves Admin</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80 leading-relaxed">
            Central control for all Bluewaves Technology products. Manage, monitor, and connect your entire product ecosystem from one place.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="mt-1.5 text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Products Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Products</h2>
          <p className="text-xs text-muted-foreground">{apps.length} total</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {apps.map((app, i) => (
            <motion.button
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              type="button"
              onClick={() => navigate(`/admin/products/${app.id}`)}
              className="glass-card rounded-2xl p-5 text-left hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
                  {app.integrationStatus && (
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-primary">{app.integrationStatus}</p>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{app.description}</p>
              {app.repositoryPath && (
                <p className="mt-3 text-[11px] text-muted-foreground truncate">{app.repositoryPath}</p>
              )}
              <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Open workspace <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
