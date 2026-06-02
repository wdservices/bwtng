import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { App } from '../../types/admin';
import { LayoutDashboard, ChevronLeft, ChevronRight, LogOut, FileText, GraduationCap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AdminLayoutProps {
  apps?: App[];
  children?: React.ReactNode;
}

export const AdminLayout = ({ apps = [], children }: AdminLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { signOut } = useAuth();

  const currentApp = apps.find(app => pathname.startsWith(`/admin/products/${app.id}`));

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <aside className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-card border-r border-border transition-all duration-300 ${
        collapsed ? 'w-[68px]' : 'w-60'
      } ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className={`h-16 flex items-center border-b border-border px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          {!collapsed && <span className="text-sm font-bold text-foreground truncate">Bluewaves Admin</span>}
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          <Link to="/admin" onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive('/admin') && !pathname.includes('/products/') && !pathname.includes('/blog')
                ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            } ${collapsed ? 'justify-center' : ''}`}>
            <LayoutDashboard className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Overview</span>}
          </Link>

          <Link to="/admin/blog" onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive('/admin/blog') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            } ${collapsed ? 'justify-center' : ''}`}>
            <FileText className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Blog</span>}
          </Link>

          <Link to="/admin/academy" onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive('/admin/academy') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            } ${collapsed ? 'justify-center' : ''}`}>
            <GraduationCap className="h-4 w-4 shrink-0" />
            {!collapsed && <span>AI Builder Academy</span>}
          </Link>

          {!collapsed && <p className="px-3 pt-5 pb-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Products</p>}

          {apps.map((app) => (
            <Link key={app.id} to={`/admin/products/${app.id}`} onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(`/admin/products/${app.id}`) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              } ${collapsed ? 'justify-center' : ''}`}>
              {app.logoPath ? (
                <img src={app.logoPath} alt={`${app.name} logo`} className="h-6 w-6 shrink-0 rounded-md object-contain" />
              ) : (
                <span className="text-base shrink-0">{app.icon}</span>
              )}
              {!collapsed && <span className="truncate">{app.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-2 space-y-1">
          <button onClick={() => signOut()}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors ${collapsed ? 'justify-center' : ''}`}>
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
          <button onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex w-full items-center justify-center py-2 text-muted-foreground hover:text-foreground transition-colors">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div className={`flex-1 transition-all duration-300 ${collapsed ? 'md:ml-[68px]' : 'md:ml-60'}`}>
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(true)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-base font-semibold text-foreground">
              {currentApp ? currentApp.name : 'Dashboard'}
            </h1>
          </div>
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to Site</Link>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};
