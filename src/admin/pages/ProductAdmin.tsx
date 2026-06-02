import React from 'react';
import { useParams } from 'react-router-dom';
import { App } from '@/types/admin';

interface ProductAdminProps {
  apps: App[];
}

const ProductAdmin: React.FC<ProductAdminProps> = ({ apps }) => {
  const { appId } = useParams<{ appId: string }>();
  const app = apps.find(a => a.id === appId);

  if (!app) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        {app.logoPath ? (
          <img src={app.logoPath} alt={app.name} className="h-12 w-12 rounded-xl object-contain" />
        ) : (
          <span className="text-3xl">{app.icon}</span>
        )}
        <div>
          <h1 className="text-2xl font-bold text-foreground">{app.name}</h1>
          <p className="text-sm text-muted-foreground">{app.description}</p>
        </div>
      </div>
      <div className="glass-card rounded-2xl p-8 text-center">
        <p className="text-muted-foreground">Product management for <strong>{app.name}</strong> coming soon.</p>
      </div>
    </div>
  );
};

export default ProductAdmin;
