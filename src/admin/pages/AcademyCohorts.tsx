import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Power, Loader2, Save, X, Image as ImageIcon, Download, Search, Users, CheckCircle2, Clock, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import {
  listCohorts, createCohort, updateCohort, deleteCohort,
  getPopupSettings, setPopupSettings, listRegistrations
} from '@/services/academyService';
import { useActiveCohort } from '@/hooks/useActiveCohort';
import type { Cohort, CohortStatus, Registration } from '@/types/academy';

const empty: Omit<Cohort, 'id'> = {
  name: '', number: 1, startDate: '', endDate: '', registrationDeadline: '',
  earlyBirdPrice: 55000, regularPrice: 55000,
  seatLimit: 20, seatsTaken: 0, whatsappGroupLink: '', status: 'draft', imageUrl: '',
};

export default function AcademyCohorts() {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [regs, setRegs] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Cohort> | null>(null);
  const [popupEnabled, setPopupEnabledState] = useState(true);
  const [saving, setSaving] = useState(false);
  const [regFilter, setRegFilter] = useState('');
  const [regCohortFilter, setRegCohortFilter] = useState('');
  const [regStatusFilter, setRegStatusFilter] = useState('');
  const { cohort: activeCohort } = useActiveCohort();

  const load = async () => {
    setLoading(true);
    const [list, settings, registrations] = await Promise.all([
      listCohorts(), getPopupSettings(), listRegistrations()
    ]);
    // Auto-seed first cohort if empty
    if (list.length === 0) {
      try {
        const id = await createCohort({
          name: 'AI Builder Academy Cohort 1',
          number: 1,
          startDate: new Date().toISOString().slice(0, 10),
          endDate: new Date(Date.now() + 21 * 86400000).toISOString().slice(0, 10),
          registrationDeadline: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
          earlyBirdPrice: 55000,
          regularPrice: 55000,
          seatLimit: 50,
          seatsTaken: 0,
          whatsappGroupLink: 'https://chat.whatsapp.com/',
          status: 'active',
          imageUrl: '',
        });
        const seeded = await listCohorts();
        setCohorts(seeded);
        toast({ title: 'Cohort created', description: 'AI Builder Academy Cohort 1 is now active and in Firestore.' });
      } catch (e) {
        console.error('Auto-seed failed', e);
      }
    } else {
      setCohorts(list);
    }
    setRegs(registrations);
    setPopupEnabledState(settings.enabled);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const togglePopup = async (v: boolean) => {
    setPopupEnabledState(v);
    await setPopupSettings({ enabled: v });
    toast({ title: v ? 'Academy popup enabled' : 'Default popup restored' });
  };

  const startNew = () => setEditing({ ...empty, number: (cohorts[0]?.number ?? 0) + 1 });
  const startEdit = (c: Cohort) => setEditing({ ...c });

  const save = async () => {
    if (!editing) return;
    if (!editing.name || !editing.startDate || !editing.endDate || !editing.registrationDeadline) {
      toast({ title: 'Missing fields', variant: 'destructive' }); return;
    }
    setSaving(true);
    try {
      if (editing.id) {
        const { id, ...data } = editing as Cohort;
        await updateCohort(id, data);
      } else {
        await createCohort(editing as Omit<Cohort, 'id'>);
      }
      toast({ title: 'Saved' });
      setEditing(null);
      load();
    } catch (e) {
      console.error(e);
      toast({ title: 'Save failed', variant: 'destructive' });
    } finally { setSaving(false); }
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this cohort?')) return;
    await deleteCohort(id);
    load();
  };

  const setActive = async (c: Cohort) => {
    await updateCohort(c.id, { status: 'active' });
    toast({ title: `${c.name} is now Active` });
    load();
  };

  const filteredRegs = regs.filter(r => {
    const q = regFilter.toLowerCase();
    const matchesQ = !q || r.fullName.toLowerCase().includes(q) || r.email.toLowerCase().includes(q);
    const matchesC = !regCohortFilter || r.cohortId === regCohortFilter;
    const matchesS = !regStatusFilter || r.paymentStatus === regStatusFilter;
    return matchesQ && matchesC && matchesS;
  });

  const stats = {
    total: regs.length,
    paid: regs.filter(r => r.paymentStatus === 'paid').length,
    pending: regs.filter(r => r.paymentStatus === 'pending').length,
    revenue: regs.filter(r => r.paymentStatus === 'paid').reduce((s, r) => s + (r.amount || 0), 0),
  };

  const exportCSV = () => {
    const headers = ['Date', 'Full Name', 'Email', 'WhatsApp', 'Country', 'Skill Level', 'Motivation', 'Cohort', 'Status', 'Reference', 'Amount'];
    const rows = filteredRegs.map(r => [
      formatDate(r.createdAt), r.fullName, r.email, r.whatsappNumber, r.country,
      r.skillLevel, r.motivation, r.cohortName, r.paymentStatus, r.paymentReference ?? '', r.amount,
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
    <div className="space-y-8">
       {/* Header */}
       <div className="flex flex-wrap items-center justify-between gap-3">
         <div>
           <h1 className="text-2xl font-semibold text-foreground font-display tracking-tight">AI Builder Academy</h1>
           <p className="text-sm text-muted-foreground mt-1">Cohorts, popup, and registrations in one place.</p>
         </div>
         <div className="flex items-center gap-2">
           <Button onClick={startNew} className="rounded-xl">
             <Plus className="w-4 h-4 mr-1.5" /> New Cohort
           </Button>
            <Button 
              onClick={() => {
                const active = cohorts.find(c => c.status === 'active') || activeCohort;
                if (active) {
                  startEdit(active);
                } else {
                  toast({ title: 'No active cohort found', variant: 'destructive' });
                }
              }}
              className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Pencil className="w-4 h-4 mr-1.5" /> Edit Cohort Details
            </Button>
         </div>
       </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard icon={Users} label="Registrations" value={stats.total} />
        <StatCard icon={CheckCircle2} label="Paid" value={stats.paid} accent="text-emerald-400" />
        <StatCard icon={Clock} label="Pending" value={stats.pending} accent="text-amber-400" />
        <StatCard icon={Wallet} label="Revenue" value={`₦${stats.revenue.toLocaleString()}`} />
      </div>

      {/* Popup toggle */}
      <div className="p-5 rounded-2xl bg-card/50 border border-border/60 flex items-center justify-between">
        <div>
          <p className="font-medium text-foreground text-sm">Academy promo popup</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            When on and a cohort is Active, the academy popup replaces the default site popup.
          </p>
        </div>
        <button
          onClick={() => togglePopup(!popupEnabled)}
          className={`relative w-11 h-6 rounded-full transition-colors ${popupEnabled ? 'bg-primary' : 'bg-muted'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${popupEnabled ? 'translate-x-5' : ''}`} />
        </button>
      </div>

      {/* Cohorts */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Cohorts</h2>
        {loading ? (
          <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
        ) : (
          <div className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  <th className="p-4 font-medium">Cohort</th><th className="p-4 font-medium">Dates</th>
                  <th className="p-4 font-medium">Price</th><th className="p-4 font-medium">Seats</th>
                  <th className="p-4 font-medium">Status</th><th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cohorts.length === 0 && (
                  <tr><td colSpan={6} className="p-10 text-center text-muted-foreground text-sm">No cohorts yet. Create one to get started.</td></tr>
                )}
                {cohorts.map(c => (
                  <tr key={c.id} className="border-t border-border/60 hover:bg-muted/20 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {c.imageUrl ? (
                          <img src={c.imageUrl} alt="" className="w-9 h-9 rounded-lg object-cover" />
                        ) : (
                          <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center">
                            <ImageIcon className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-foreground">{c.name}</p>
                          <p className="text-xs text-muted-foreground">Cohort #{c.number}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground text-xs">{c.startDate} → {c.endDate}</td>
                   <td className="p-4 text-muted-foreground text-xs">₦{c.earlyBirdPrice.toLocaleString()} / ₦{c.regularPrice.toLocaleString()}</td>
                   <td className="p-4 text-muted-foreground">
                     {c.seatsTaken} / {c.seatLimit} Seats
                   </td>
                    <td className="p-4"><StatusBadge status={c.status} /></td>
                    <td className="p-4">
                      <div className="flex justify-end gap-1">
                        {c.status !== 'active' && (
                          <Button size="sm" variant="ghost" onClick={() => setActive(c)} title="Activate"><Power className="w-4 h-4" /></Button>
                        )}
                        <Button size="sm" variant="ghost" onClick={() => startEdit(c)}><Pencil className="w-4 h-4" /></Button>
                        <Button size="sm" variant="ghost" onClick={() => remove(c.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Registrations */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Registrations</h2>
          <Button onClick={exportCSV} variant="outline" size="sm" className="rounded-lg">
            <Download className="w-3.5 h-3.5 mr-1.5" /> Export CSV
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={regFilter} onChange={e => setRegFilter(e.target.value)} placeholder="Search name or email..." className="pl-9 rounded-lg" />
          </div>
          <select value={regCohortFilter} onChange={e => setRegCohortFilter(e.target.value)}
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
            <option value="">All cohorts</option>
            {cohorts.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select value={regStatusFilter} onChange={e => setRegStatusFilter(e.target.value)}
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
            <option value="">All statuses</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/30 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">WhatsApp</th>
                <th className="p-3 font-medium">Country</th>
                <th className="p-3 font-medium">Skill</th>
                <th className="p-3 font-medium">Cohort</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegs.length === 0 && (
                <tr><td colSpan={9} className="p-10 text-center text-muted-foreground text-sm">No registrations match these filters.</td></tr>
              )}
              {filteredRegs.map(r => (
                <tr key={r.id} className="border-t border-border/60 hover:bg-muted/20 transition-colors align-top">
                  <td className="p-3 text-muted-foreground text-xs whitespace-nowrap">{formatDate(r.createdAt)}</td>
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{r.fullName}</td>
                  <td className="p-3 text-muted-foreground">{r.email}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.whatsappNumber}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.country}</td>
                  <td className="p-3 text-muted-foreground capitalize">{r.skillLevel}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{r.cohortName}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider border whitespace-nowrap ${
                      r.paymentStatus === 'paid' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                      : r.paymentStatus === 'failed' ? 'bg-destructive/15 text-destructive border-destructive/30'
                      : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                    }`}>{r.paymentStatus}</span>
                  </td>
                  <td className="p-3 text-foreground whitespace-nowrap">₦{r.amount?.toLocaleString() ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Editor Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md" onClick={() => setEditing(null)}>
          <div className="bg-card border border-border/60 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/60 bg-card/95 backdrop-blur">
              <div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">{editing.id ? 'Edit Cohort' : 'New Cohort'}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Set the details below. You can change them later.</p>
              </div>
              <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-7">
              <Section title="Basics">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <FieldLabel>Cohort name</FieldLabel>
                    <Input className="rounded-lg" value={editing.name ?? ''} onChange={e => setEditing({ ...editing, name: e.target.value })} placeholder="AI Builder Academy Cohort 1" />
                  </div>
                  <div>
                    <FieldLabel>Number</FieldLabel>
                    <Input className="rounded-lg" type="number" value={editing.number ?? 1} onChange={e => setEditing({ ...editing, number: +e.target.value })} />
                  </div>
                </div>
              </Section>

              <Section title="Cover image">
                <FieldLabel>Image URL</FieldLabel>
                <Input className="rounded-lg" value={editing.imageUrl ?? ''} onChange={e => setEditing({ ...editing, imageUrl: e.target.value })} placeholder="https://example.com/cover.jpg" />
                {editing.imageUrl && (
                  <div className="mt-3 rounded-xl border border-border/60 overflow-hidden bg-muted/20">
                    <img src={editing.imageUrl} alt="Cover preview" className="w-full h-44 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                )}
              </Section>

              <Section title="Schedule">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div><FieldLabel>Start date</FieldLabel><Input className="rounded-lg" type="date" value={editing.startDate ?? ''} onChange={e => setEditing({ ...editing, startDate: e.target.value })} /></div>
                  <div><FieldLabel>End date</FieldLabel><Input className="rounded-lg" type="date" value={editing.endDate ?? ''} onChange={e => setEditing({ ...editing, endDate: e.target.value })} /></div>
                  <div><FieldLabel>Registration deadline</FieldLabel><Input className="rounded-lg" type="date" value={editing.registrationDeadline ?? ''} onChange={e => setEditing({ ...editing, registrationDeadline: e.target.value })} /></div>
                </div>
              </Section>

               <Section title="Pricing & seats">
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                   <div><FieldLabel>Early bird (₦)</FieldLabel><Input className="rounded-lg" type="number" value={editing.earlyBirdPrice ?? ''} onChange={e => setEditing({ ...editing, earlyBirdPrice: e.target.value === '' ? 0 : +e.target.value })} /></div>
                   <div><FieldLabel>Regular (₦)</FieldLabel><Input className="rounded-lg" type="number" value={editing.regularPrice ?? ''} onChange={e => setEditing({ ...editing, regularPrice: e.target.value === '' ? 0 : +e.target.value })} /></div>
                   <div><FieldLabel>Registration deadline</FieldLabel><Input className="rounded-lg" type="date" value={editing.registrationDeadline ?? ''} onChange={e => setEditing({ ...editing, registrationDeadline: e.target.value })} /></div>
                   <div><FieldLabel>Seat limit</FieldLabel><Input className="rounded-lg" type="number" value={editing.seatLimit ?? 20} onChange={e => setEditing({ ...editing, seatLimit: +e.target.value })} /></div>
                 </div>
               </Section>

              <Section title="Community & status">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <FieldLabel>WhatsApp group link</FieldLabel>
                    <Input className="rounded-lg" value={editing.whatsappGroupLink ?? ''} onChange={e => setEditing({ ...editing, whatsappGroupLink: e.target.value })} placeholder="https://chat.whatsapp.com/..." />
                  </div>
                  <div>
                    <FieldLabel>Status</FieldLabel>
                    <select value={editing.status ?? 'draft'} onChange={e => setEditing({ ...editing, status: e.target.value as CohortStatus })}
                      className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                      <option value="draft">Draft</option><option value="active">Active</option>
                      <option value="closed">Closed</option><option value="archived">Archived</option>
                    </select>
                  </div>
                </div>
              </Section>
            </div>

            <div className="sticky bottom-0 flex justify-end gap-2 p-5 border-t border-border/60 bg-card/95 backdrop-blur">
              <Button variant="outline" onClick={() => setEditing(null)} className="rounded-lg">Cancel</Button>
              <Button onClick={save} disabled={saving} className="rounded-lg">
                {saving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Save className="w-4 h-4 mr-1.5" />} Save cohort
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <Label className="text-[11px] font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">{children}</Label>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">{title}</p>
      {children}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, accent }: { icon: any; label: string; value: string | number; accent?: string }) {
  return (
    <div className="p-4 rounded-2xl bg-card/50 border border-border/60">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <Icon className={`w-3.5 h-3.5 ${accent ?? 'text-muted-foreground'}`} />
      </div>
      <p className={`text-2xl font-semibold tracking-tight text-foreground`}>{value}</p>
    </div>
  );
}

function formatDate(ts: any): string {
  if (!ts) return '';
  const d = ts?.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function StatusBadge({ status }: { status: CohortStatus }) {
  const colors: Record<CohortStatus, string> = {
    active: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    draft: 'bg-muted text-muted-foreground border-border',
    closed: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    archived: 'bg-muted text-muted-foreground border-border opacity-60',
  };
  return <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider border ${colors[status]}`}>{status}</span>;
}