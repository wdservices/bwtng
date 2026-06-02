import { App } from '../../../../src/types/admin';

interface AppCardProps {
  app: App;
  onClick: () => void;
}

export const AppCard = ({ app, onClick }: AppCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">{app.name}</h3>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
            Active
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{app.totalUsers.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Premium Users</p>
            <p className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">{app.premiumUsers.toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <p className="font-medium text-gray-500 dark:text-gray-400">Recent Users</p>
            <button 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              onClick={(e) => {
                e.stopPropagation();
                // Handle view all users
              }}
            >
              View all
            </button>
          </div>
          <div className="mt-2 flex -space-x-2">
            {app.recentUsers.slice(0, 5).map((user, index) => (
              <div key={index} className="relative">
                {user.avatar ? (
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" 
                    src={user.avatar} 
                    alt={user.name} 
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xs font-medium border-2 border-white dark:border-gray-800">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                {user.isPremium && (
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                )}
              </div>
            ))}
            {app.recentUsers.length > 5 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 text-xs font-medium">
                +{app.recentUsers.length - 5}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button 
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              // Handle manage app
            }}
          >
            Manage App
          </button>
        </div>
      </div>
    </div>
  );
};
