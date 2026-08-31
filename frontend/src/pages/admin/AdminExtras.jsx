import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Inbox, Mail, Trash2, ChevronRight, TrendingUp, Users } from 'lucide-react';
import { apiGet, apiPut, apiDelete } from '@/lib/api';

/* -------------------- Overview -------------------- */
export function Overview({ goTo }) {
  const [data, setData] = useState(null);
  useEffect(() => { apiGet('/admin/overview').then(setData).catch(() => setData(null)); }, []);
  if (!data) return <div className="text-white/50 py-12 text-center">Loading overview...</div>;
  const stat = (label, value, testid) => (
    <div data-testid={testid} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-2">{label}</div>
      <div className="font-display text-4xl md:text-5xl tracking-tight text-white">{value}</div>
    </div>
  );
  return (
    <div className="space-y-8">
      <div>
        <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-[#F43F5E] mb-3">Overview</div>
        <h1 className="font-display text-5xl md:text-6xl tracking-tighter leading-[0.95]">The signal in one screen.</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stat('Blog views', data.blogs.views.toLocaleString(), 'ov-blog-views')}
        {stat('Live essays', data.blogs.total, 'ov-blogs')}
        {stat('ADAM leads', data.leads.total, 'ov-leads')}
        {stat('Contact enquiries', data.enquiries.total, 'ov-enquiries')}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-[#F43F5E] flex items-center gap-2"><Users size={12} /> Recent leads</div>
            <button onClick={() => goTo('leads')} className="adam-mono text-[10px] uppercase tracking-[0.24em] text-white/50 hover:text-white flex items-center gap-1">All <ChevronRight size={11} /></button>
          </div>
          <ul className="space-y-3">
            {data.recent_leads.map((l) => (
              <li key={l.lead_id} className="flex items-center justify-between gap-2 text-sm">
                <div className="min-w-0 flex-1">
                  <div className="text-white/90 truncate">{l.profile?.company || l.profile?.name || 'Unknown'}</div>
                  <div className="adam-mono text-[10px] text-white/40 uppercase tracking-widest">{l.status.replace('_', ' ')}</div>
                </div>
                <div className="adam-mono text-xs text-[#F43F5E]">{l.lead_score}</div>
              </li>
            ))}
            {!data.recent_leads.length && <li className="text-white/40 text-sm">No leads yet.</li>}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-[#F43F5E] flex items-center gap-2"><Mail size={12} /> Recent enquiries</div>
            <button onClick={() => goTo('enquiries')} className="adam-mono text-[10px] uppercase tracking-[0.24em] text-white/50 hover:text-white flex items-center gap-1">All <ChevronRight size={11} /></button>
          </div>
          <ul className="space-y-3">
            {data.recent_enquiries.map((c) => (
              <li key={c.id} className="text-sm">
                <div className="text-white/90 truncate">{c.name || c.email}</div>
                <div className="adam-mono text-[10px] text-white/40 uppercase tracking-widest">{c.source || 'contact'}</div>
              </li>
            ))}
            {!data.recent_enquiries.length && <li className="text-white/40 text-sm">No enquiries yet.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Enquiries -------------------- */
export function Enquiries() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const refresh = async () => {
    setLoading(true);
    try { setItems(await apiGet('/admin/enquiries?limit=200')); } finally { setLoading(false); }
  };
  useEffect(() => { refresh(); }, []);
  const remove = async (e) => {
    if (!window.confirm(`Delete this enquiry from ${e.name || e.email}?`)) return;
    await apiDelete(`/admin/enquiries/${e.id}`);
    refresh();
    setDetail(null);
  };
  return (
    <div className="space-y-8">
      <div>
        <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-[#F43F5E] mb-3">Enquiries</div>
        <h1 className="font-display text-5xl md:text-6xl tracking-tighter leading-[0.95]">Every hand raised.<br /><span className="text-white/40">Contact + service forms.</span></h1>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-white/50">Total, {items.length}</div>
          {loading && <div className="text-xs text-white/40">Refreshing...</div>}
        </div>
        <ul className="divide-y divide-white/[0.06]">
          {items.map((e) => (
            <li key={e.id} data-testid={`enq-row-${e.id}`} onClick={() => setDetail(e)} className="p-5 md:p-6 hover:bg-white/[0.02] cursor-pointer transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-white/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="adam-mono text-[9.5px] uppercase tracking-[0.22em] px-2 py-1 rounded-full border border-white/15 text-white/70">{e.source || 'contact'}</span>
                    <span className="adam-mono text-[10px] text-white/30">{new Date(e.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="font-display text-lg md:text-xl tracking-tight truncate">{e.name || e.email}</div>
                  <div className="text-xs text-white/50">{e.email}{e.company ? ` , ${e.company}` : ''}</div>
                  {e.message && <div className="mt-2 text-sm text-white/60 line-clamp-2">{e.message}</div>}
                </div>
                <button onClick={(evt) => { evt.stopPropagation(); remove(e); }} className="w-9 h-9 rounded-full border border-white/10 hover:bg-[#E11D2E] hover:border-[#E11D2E] flex items-center justify-center" title="Delete" data-testid={`enq-delete-${e.id}`}><Trash2 size={13} /></button>
              </div>
            </li>
          ))}
          {!loading && !items.length && <li className="p-12 text-center text-white/50">No enquiries yet.</li>}
        </ul>
      </div>
      {detail && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-xl flex items-center justify-center p-4" data-testid="enq-detail">
          <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="adam-mono text-[10px] uppercase tracking-[0.3em] text-[#F43F5E] mb-2">Enquiry, {detail.source || 'contact'}</div>
                <div className="font-display text-2xl">{detail.name || detail.email}</div>
              </div>
              <button onClick={() => setDetail(null)} className="adam-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white">Close</button>
            </div>
            <div className="space-y-3 text-sm">
              <Row label="Email" value={detail.email} />
              <Row label="Company" value={detail.company} />
              <Row label="Website" value={detail.website} />
              <Row label="Phone" value={detail.phone} />
              <Row label="Budget" value={detail.budget} />
              <Row label="Timeline" value={detail.timeline} />
              <div>
                <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">Message</div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-white/85 whitespace-pre-wrap">{detail.message || '-'}</div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => remove(detail)} className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-white/70 hover:bg-[#E11D2E] hover:border-[#E11D2E] hover:text-white">Delete</button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
const Row = ({ label, value }) => value ? (
  <div className="grid grid-cols-3 gap-4 items-start">
    <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/40">{label}</div>
    <div className="col-span-2 text-white/85 text-sm break-words">{value}</div>
  </div>
) : null;

/* -------------------- Settings -------------------- */
const SETTING_FIELDS = [
  { key: 'company_name', label: 'Company name', group: 'Company' },
  { key: 'tagline', label: 'Tagline', group: 'Company' },
  { key: 'email', label: 'Email', group: 'Contact' },
  { key: 'phone', label: 'Phone', group: 'Contact' },
  { key: 'address', label: 'Address', group: 'Contact' },
  { key: 'linkedin', label: 'LinkedIn URL', group: 'Social' },
  { key: 'instagram', label: 'Instagram URL', group: 'Social' },
  { key: 'twitter', label: 'Twitter / X URL', group: 'Social' },
  { key: 'youtube', label: 'YouTube URL', group: 'Social' },
  { key: 'facebook', label: 'Facebook URL', group: 'Social' },
  { key: 'default_seo_title', label: 'Default SEO title', group: 'Basic SEO' },
  { key: 'default_meta_description', label: 'Default meta description', group: 'Basic SEO', textarea: true },
  { key: 'default_og_image', label: 'Default OG image URL', group: 'Basic SEO' },
];

export function Settings() {
  const [values, setValues] = useState({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { apiGet('/admin/settings').then(setValues).catch(() => {}); }, []);
  const upd = (k, v) => setValues((s) => ({ ...s, [k]: v }));
  const save = async () => {
    setSaving(true); setSaved(false);
    try { const d = await apiPut('/admin/settings', values); setValues(d); setSaved(true); setTimeout(() => setSaved(false), 2200); } finally { setSaving(false); }
  };
  const groups = ['Company', 'Contact', 'Social', 'Basic SEO'];
  return (
    <div className="space-y-8">
      <div>
        <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-[#F43F5E] mb-3">Settings</div>
        <h1 className="font-display text-5xl md:text-6xl tracking-tighter leading-[0.95]">The studio's control panel.</h1>
      </div>
      {groups.map((g) => (
        <div key={g} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="adam-mono text-[10px] uppercase tracking-[0.3em] text-[#F43F5E] mb-5">{g}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {SETTING_FIELDS.filter((f) => f.group === g).map((f) => (
              <label key={f.key} className={f.textarea ? 'md:col-span-2 block' : 'block'}>
                <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-2">{f.label}</div>
                {f.textarea ? (
                  <textarea rows={2} value={values[f.key] || ''} onChange={(e) => upd(f.key, e.target.value)} data-testid={`settings-${f.key}`} className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-[#F43F5E] outline-none text-white text-sm" />
                ) : (
                  <input value={values[f.key] || ''} onChange={(e) => upd(f.key, e.target.value)} data-testid={`settings-${f.key}`} className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-[#F43F5E] outline-none text-white text-sm" />
                )}
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3 justify-end">
        {saved && <span className="adam-mono text-[10px] uppercase tracking-widest text-emerald-300">Saved</span>}
        <button onClick={save} disabled={saving} data-testid="settings-save" className="px-6 py-2.5 rounded-full bg-[#E11D2E] text-white text-sm font-semibold hover:bg-[#ff2f45] disabled:opacity-40">
          {saving ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </div>
  );
}
