import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Users, FileText, BarChart3, Workflow } from 'lucide-react';

interface AppDashboardProps {
  apps: App[];
}

export const AppDashboard = ({ apps }: AppDashboardProps) => {
  const params = useParams();
  const appId = params.appId as string;
  const navigate = useNavigate();
  const app = apps.find(a => a.id === appId);

  if (!app) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">App Not Found</h2>
          <button onClick={() => navigate('/admin')} className="mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const appUrl = app.liveUrl;
  const appLiveLabel = app.liveLabel ?? 'Open Live';
  const modules = app.workspaceModules ?? [
    { title: 'Users', description: 'Manage accounts, roles, and permissions.' },
    { title: 'Content', description: 'Control product content and settings.' },
    { title: 'Analytics', description: 'Usage, revenue, and metrics.' },
    { title: 'Automation', description: 'Workflows and admin actions.' },
  ];
  const notes = app.architectureNotes ?? [];
  const nextSteps = app.nextSteps ?? [];
  const moduleIcons = [Users, FileText, BarChart3, Workflow];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-7"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{app.icon}</span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Product Workspace</p>
              <h1 className="text-2xl font-bold text-foreground">{app.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-border rounded-xl text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </button>
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                {appLiveLabel} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">{app.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Integration', value: app.integrationStatus || 'Pending setup', sub: app.backendStrategy || 'Connector not mapped yet' },
          { label: 'Auth', value: app.authStrategy || 'Central login', sub: app.dataSource || 'Data source not mapped yet' },
          { label: 'Workspace', value: app.path, sub: app.repositoryPath || `Home for ${app.name} modules` },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{card.label}</p>
            <p className="mt-1.5 text-lg font-semibold text-foreground">{card.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.7fr] gap-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Mapped Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((mod, i) => {
              const Icon = moduleIcons[i % moduleIcons.length];
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center text-primary mb-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{mod.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{mod.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-5"
        >
          <h2 className="text-lg font-semibold text-foreground">Architecture Snapshot</h2>
          <div className="mt-4 space-y-4">
            {notes.map((note) => (
              <div key={note.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{note.label}</p>
                <p className="mt-1 text-sm text-foreground leading-relaxed">{note.value}</p>
              </div>
            ))}
            {notes.length === 0 && (
              <p className="text-sm text-muted-foreground">Architecture details will appear here once the product connector is mapped.</p>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Next Integration Steps</h2>
            <p className="mt-1 text-sm text-muted-foreground">This is the fastest path to bring {app.name} into the master admin.</p>
          </div>
          {app.repositoryPath && (
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Repo: {app.repositoryPath}
            </span>
          )}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {nextSteps.map((step, i) => (
            <div key={step} className="rounded-2xl border border-border bg-background/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{step}</p>
            </div>
          ))}
          {nextSteps.length === 0 && (
            <div className="rounded-2xl border border-border bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">No next steps have been mapped for this product yet.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
