import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { App } from '../../types';

interface SidebarProps {
  apps: App[];
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ apps, isOpen, onClose }: SidebarProps) => {
  const location = useLocation(); const pathname = location.pathname;
  const linkCls = (active: boolean) =>
    `flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${active ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`;
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className="mt-6 flex flex-col h-[calc(100%-8rem)]">
        <div className="px-4">
          <div className="space-y-1">
            <Link
              to="/admin/ai-marketplace"
              className={linkCls(pathname?.startsWith('/admin/ai-marketplace') ?? false)}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              AI Marketplace
            </Link>
          </div>
        </div>

        <div className="px-4 flex-grow">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mt-4">Applications</h2>
          <div className="mt-2 space-y-1">
            {apps.map((app) => (
              <Link
                key={app.id}
                to={`/admin/apps/${app.id}`}
                className={linkCls(pathname === `/admin/apps/${app.id}`)}
              >
                <span className="w-2 h-2 mr-3 rounded-full bg-green-500"></span>
                {app.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="px-4 mt-auto mb-4">
          <div className="border-t border-gray-800 pt-4">
            <Link
              to="/admin"
              className={linkCls(pathname === '/admin')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Admin Home
            </Link>
          </div>
        </div>


      </nav>
    </div>
  );
};
