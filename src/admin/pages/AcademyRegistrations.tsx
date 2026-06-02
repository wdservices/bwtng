import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Search, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { listRegistrations, listCohorts } from '@/services/academyService';
import type { Registration, Cohort } from '@/types/academy';

export default function AcademyRegistrations() {
  const [regs, setRegs] = useState<Registration[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [filter, setFilter] = useState('');
  const [cohortFilter, setCohortFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [r, c] = await Promise.all([listRegistrations(), listCohorts()]);
      setRegs(r); setCohorts(c); setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => regs.filter(r => {
    const q = filter.toLowerCase();
    const matchesQ = !q || r.fullName.toLowerCase().includes(q) || r.email.toLowerCase().includes(q);
    const matchesC = !cohortFilter || r.cohortId === cohortFilter;
    const matchesS = !statusFilter || r.paymentStatus === statusFilter;
    return matchesQ && matchesC && matchesS;
  }), [regs, filter, cohortFilter, statusFilter]);

  const stats = useMemo(() => {
    const total = regs.length;
    const paid = regs.filter(r => r.paymentStatus === 'paid').length;
    const revenue = regs.filter(r => r.paymentStatus === 'paid').reduce((s, r) => s + (r.amount || 0), 0);
    return { total, paid, revenue, pending: total - paid };
  }, [regs]);

  const exportCSV = () => {
    const headers = ['Registration Date', 'Full Name', 'Email', 'WhatsApp Number', 'Country', 'Skill Level', 'Motivation', 'Cohort', 'Payment Status', 'Payment Reference', 'Amount'];
    const rows = filtered.map(r => [
      formatDate(r.createdAt), r.fullName, r.email, r.whatsappNumber, r.country,
      r.skillLevel, r.motivation, r.cohortName, r.paymentStatus,
      r.paymentReference ?? '', r.amount,
    ]);
    const csv = [headers, ...rows].map(row =>
      row.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `academy-registrations-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/academy" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-4 h-4" /></Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground font-display">Registrations</h1>
          <p className="text-sm text-muted-foreground">All cohort registrations</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Total" value={stats.total} />
        <Stat label="Paid" value={stats.paid} accent />
        <Stat label="Pending" value={stats.pending} />
        <Stat label="Revenue" value={`₦${stats.revenue.toLocaleString()}`} accent />
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search name or email..." className="pl-9" />
        </div>
        <select value={cohortFilter} onChange={e => setCohortFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm">
          <option value="">All cohorts</option>
          {cohorts.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm">
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="failed">Failed</option>
        </select>
        <Button onClick={exportCSV} variant="outline"><Download className="w-4 h-4 mr-1.5" /> Export CSV</Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : (
        <div className="rounded-xl border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="p-3">Registration Date</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">WhatsApp Number</th>
                <th className="p-3">Country</th>
                <th className="p-3">Skill Level</th>
                <th className="p-3">Motivation</th>
                <th className="p-3">Cohort</th>
                <th className="p-3">Payment Status</th>
                <th className="p-3">Payment Reference</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={11} className="p-8 text-center text-muted-foreground">No registrations match these filters.</td></tr>
              )}
              {filtered.map(r => (
                <tr key={r.id} className="border-t border-border align-top">
                  <td className="p-3 text-muted-foreground text-xs whitespace-nowrap">{formatDate(r.createdAt)}</td>
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{r.fullName}</td>
                  <td className="p-3 text-muted-foreground">{r.email}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.whatsappNumber}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.country}</td>
                  <td className="p-3 text-muted-foreground capitalize">{r.skillLevel}</td>
                  <td className="p-3 text-muted-foreground max-w-xs">
                    <span className="line-clamp-2" title={r.motivation}>{r.motivation}</span>
                  </td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.cohortName}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs border whitespace-nowrap ${
                      r.paymentStatus === 'paid' ? 'bg-green-500/15 text-green-400 border-green-500/30'
                      : r.paymentStatus === 'failed' ? 'bg-destructive/15 text-destructive border-destructive/30'
                      : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                    }`}>{r.paymentStatus}</span>
                  </td>
                  <td className="p-3 text-muted-foreground font-mono text-xs">{r.paymentReference || '—'}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">₦{r.amount?.toLocaleString() ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${accent ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'}`}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
    </div>
  );
}

function formatDate(ts: any): string {
  if (!ts) return '';
  const d = ts?.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString();
}