import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Power, Loader2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import {
  listCohorts, createCohort, updateCohort, deleteCohort,
  getPopupSettings, setPopupSettings
} from '@/services/academyService';
import type { Cohort, CohortStatus } from '@/types/academy';

const empty: Omit<Cohort, 'id'> = {
  name: '', number: 1, startDate: '', endDate: '', registrationDeadline: '',
  earlyBirdPrice: 50000, regularPrice: 55000, earlyBirdDeadline: '',
  seatLimit: 20, whatsappGroupLink: '', status: 'draft',
};

export default function AcademyCohorts() {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Cohort> | null>(null);
  const [popupEnabled, setPopupEnabledState] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const [list, settings] = await Promise.all([listCohorts(), getPopupSettings()]);
    setCohorts(list);
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

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-display">AI Builder Academy</h1>
          <p className="text-sm text-muted-foreground">Manage cohorts and the homepage popup.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin/academy/registrations">
            <Button variant="outline">View Registrations</Button>
          </Link>
          <Button onClick={startNew}><Plus className="w-4 h-4 mr-1.5" /> New Cohort</Button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between">
        <div>
          <p className="font-medium text-foreground">Academy promo popup</p>
          <p className="text-xs text-muted-foreground">
            When ON and an Active cohort exists, the academy popup replaces the default site popup.
          </p>
        </div>
        <button
          onClick={() => togglePopup(!popupEnabled)}
          className={`relative w-12 h-6 rounded-full transition-colors ${popupEnabled ? 'bg-primary' : 'bg-muted'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${popupEnabled ? 'translate-x-6' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="p-3">Cohort</th><th className="p-3">Dates</th><th className="p-3">Price</th>
                <th className="p-3">Seats</th><th className="p-3">Status</th><th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No cohorts yet. Create one to get started.</td></tr>
              )}
              {cohorts.map(c => (
                <tr key={c.id} className="border-t border-border">
                  <td className="p-3 font-medium text-foreground">{c.name} <span className="text-xs text-muted-foreground">#{c.number}</span></td>
                  <td className="p-3 text-muted-foreground">{c.startDate} → {c.endDate}</td>
                  <td className="p-3 text-muted-foreground">₦{c.earlyBirdPrice.toLocaleString()} / ₦{c.regularPrice.toLocaleString()}</td>
                  <td className="p-3 text-muted-foreground">{c.seatLimit}</td>
                  <td className="p-3"><StatusBadge status={c.status} /></td>
                  <td className="p-3">
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

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setEditing(null)}>
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-foreground mb-4">{editing.id ? 'Edit Cohort' : 'New Cohort'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Box label="Cohort Name"><Input value={editing.name ?? ''} onChange={e => setEditing({ ...editing, name: e.target.value })} placeholder="AI Builder Academy Cohort 1" /></Box>
              <Box label="Cohort Number"><Input type="number" value={editing.number ?? 1} onChange={e => setEditing({ ...editing, number: +e.target.value })} /></Box>
              <Box label="Start Date"><Input type="date" value={editing.startDate ?? ''} onChange={e => setEditing({ ...editing, startDate: e.target.value })} /></Box>
              <Box label="End Date"><Input type="date" value={editing.endDate ?? ''} onChange={e => setEditing({ ...editing, endDate: e.target.value })} /></Box>
              <Box label="Registration Deadline"><Input type="date" value={editing.registrationDeadline ?? ''} onChange={e => setEditing({ ...editing, registrationDeadline: e.target.value })} /></Box>
              <Box label="Early Bird Deadline (optional)"><Input type="date" value={editing.earlyBirdDeadline ?? ''} onChange={e => setEditing({ ...editing, earlyBirdDeadline: e.target.value })} /></Box>
              <Box label="Early Bird Price (₦)"><Input type="number" value={editing.earlyBirdPrice ?? 0} onChange={e => setEditing({ ...editing, earlyBirdPrice: +e.target.value })} /></Box>
              <Box label="Regular Price (₦)"><Input type="number" value={editing.regularPrice ?? 0} onChange={e => setEditing({ ...editing, regularPrice: +e.target.value })} /></Box>
              <Box label="Seat Limit"><Input type="number" value={editing.seatLimit ?? 20} onChange={e => setEditing({ ...editing, seatLimit: +e.target.value })} /></Box>
              <Box label="Status">
                <select value={editing.status ?? 'draft'} onChange={e => setEditing({ ...editing, status: e.target.value as CohortStatus })}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option value="draft">Draft</option><option value="active">Active</option>
                  <option value="closed">Closed</option><option value="archived">Archived</option>
                </select>
              </Box>
              <div className="sm:col-span-2">
                <Label>WhatsApp Group Link</Label>
                <Input value={editing.whatsappGroupLink ?? ''} onChange={e => setEditing({ ...editing, whatsappGroupLink: e.target.value })} placeholder="https://chat.whatsapp.com/..." />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button onClick={save} disabled={saving}>
                {saving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Save className="w-4 h-4 mr-1.5" />} Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Box({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label>{label}</Label>{children}</div>;
}

function StatusBadge({ status }: { status: CohortStatus }) {
  const colors: Record<CohortStatus, string> = {
    active: 'bg-green-500/15 text-green-400 border-green-500/30',
    draft: 'bg-muted text-muted-foreground border-border',
    closed: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    archived: 'bg-muted text-muted-foreground border-border opacity-60',
  };
  return <span className={`px-2 py-0.5 rounded-full text-xs border ${colors[status]}`}>{status}</span>;
}