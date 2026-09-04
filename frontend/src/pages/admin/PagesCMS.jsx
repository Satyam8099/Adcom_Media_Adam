import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Check, Loader2, X, Globe } from 'lucide-react';
import { apiGet, apiPut } from '@/lib/api';

function Field({ label, hint, children }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/40">{label}</div>
        {hint && <div className="text-[10px] text-white/30">{hint}</div>}
      </div>
      {children}
    </label>
  );
}

const inp = 'w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-[#F43F5E] outline-none text-white placeholder:text-white/30 text-sm';

function PageEditor({ page, onClose, onSaved }) {
  const [form, setForm] = useState({
    seo_title: page.seo_title || '',
    meta_description: page.meta_description || '',
    og_image: page.og_image || '',
    canonical: page.canonical || '',
    no_index: !!page.no_index,
  });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const save = async () => {
    setSaving(true); setErr('');
    try {
      const doc = await apiPut(`/admin/pages/${page.key}`, form);
      onSaved({ ...page, ...doc });
    } catch (e) { setErr(e.message || 'Save failed'); }
    finally { setSaving(false); }
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-xl flex items-start md:items-center justify-center overflow-y-auto p-4 md:p-8"
      data-testid="page-seo-editor">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-3xl my-8 overflow-hidden">
        <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="adam-mono text-[10px] uppercase tracking-[0.3em] text-[#F43F5E] mb-1">SEO override</div>
            <div className="font-display text-2xl md:text-3xl tracking-tight truncate">{page.label}</div>
            <a href={page.path} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 adam-mono text-[10px] uppercase tracking-[0.24em] text-white/45 hover:text-white transition-colors">
              {page.path} <ExternalLink size={11} />
            </a>
          </div>
          <button onClick={onClose} data-testid="page-seo-close" className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/10 flex items-center justify-center"><X size={16} /></button>
        </div>
        <div className="p-6 md:p-8 space-y-5">
          <Field label="SEO title" hint={`${(form.seo_title || '').length} / 60`}>
            <input value={form.seo_title} onChange={(e) => upd('seo_title', e.target.value)} data-testid="page-seo-title" placeholder="Overrides <title>. Keep under 60 chars." className={inp} />
          </Field>
          <Field label="Meta description" hint={`${(form.meta_description || '').length} / 160`}>
            <textarea rows={3} value={form.meta_description} onChange={(e) => upd('meta_description', e.target.value)} data-testid="page-seo-meta" placeholder="150-160 char SERP summary." className={inp} />
          </Field>
          <Field label="OG image URL" hint="1200 x 630, JPG or PNG">
            <input value={form.og_image} onChange={(e) => upd('og_image', e.target.value)} data-testid="page-seo-og" placeholder="https://..." className={inp} />
          </Field>
          <Field label="Canonical URL" hint="Only if this content is syndicated">
            <input value={form.canonical} onChange={(e) => upd('canonical', e.target.value)} placeholder="https://www.adcommedia.com/…" className={inp} />
          </Field>
          <label className="inline-flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.no_index} onChange={(e) => upd('no_index', e.target.checked)} data-testid="page-seo-noindex" className="w-4 h-4 accent-[#F43F5E]" />
            <div className="adam-mono text-[10px] uppercase tracking-[0.28em] text-white/60">No-index (hide from search engines)</div>
          </label>

          {/* Preview */}
          <div className="pt-4 border-t border-white/10">
            <div className="adam-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">SERP preview</div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[13px] text-white/50 truncate">adcommedia.com{page.path}</div>
              <div className="text-[18px] leading-snug text-[#8ab4f8] font-medium truncate mt-1">
                {form.seo_title || page.label}
              </div>
              <div className="text-[13px] leading-snug text-white/75 mt-1 line-clamp-2">
                {form.meta_description || 'No meta description set — Google will auto-generate one from the page.'}
              </div>
            </div>
          </div>

          {err && <div className="text-sm text-[#F43F5E]">{err}</div>}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button onClick={onClose} className="px-5 py-2.5 rounded-full border border-white/15 text-sm hover:bg-white/5">Cancel</button>
            <button onClick={save} disabled={saving} data-testid="page-seo-save" className="px-6 py-2.5 rounded-full bg-[#E11D2E] text-white text-sm font-semibold hover:bg-[#ff2f45] disabled:opacity-40">
              {saving ? 'Saving…' : 'Save SEO'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PagesCMS() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);

  const refresh = async () => {
    setLoading(true);
    try { setPages(await apiGet('/admin/pages')); } finally { setLoading(false); }
  };
  useEffect(() => { refresh(); }, []);

  const filtered = pages.filter((p) =>
    !q.trim() ? true : (p.label + ' ' + p.path).toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <div className="space-y-8">
      <div>
        <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-[#F43F5E] mb-3">Pages · SEO</div>
        <h1 className="font-display text-5xl md:text-6xl tracking-tighter leading-[0.95]">Every page.<br /><span className="text-white/40">Every meta tag.</span></h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter pages…" data-testid="page-seo-search"
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-black border border-white/10 focus:border-[#F43F5E] outline-none text-sm placeholder:text-white/30" />
          <Search size={15} className="absolute top-1/2 -translate-y-1/2 left-4 text-white/40" />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="adam-mono text-[11px] uppercase tracking-[0.3em] text-white/50">Pages · {filtered.length}</div>
          {loading && <div className="text-xs text-white/40">Refreshing…</div>}
        </div>
        <ul className="divide-y divide-white/[0.06]">
          {filtered.map((p) => {
            const hasSEO = !!(p.seo_title || p.meta_description || p.og_image);
            return (
              <li key={p.key} data-testid={`page-row-${p.key}`}
                onClick={() => setEditing(p)}
                className="p-5 md:p-6 hover:bg-white/[0.02] cursor-pointer transition-colors flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                  <Globe size={15} className="text-white/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {hasSEO ? (
                      <span className="adam-mono text-[9.5px] uppercase tracking-[0.22em] px-2 py-1 rounded-full border border-emerald-400/40 text-emerald-200 bg-emerald-400/10 inline-flex items-center gap-1"><Check size={10} /> Custom</span>
                    ) : (
                      <span className="adam-mono text-[9.5px] uppercase tracking-[0.22em] px-2 py-1 rounded-full border border-white/15 text-white/50">Default</span>
                    )}
                    {p.no_index && <span className="adam-mono text-[9.5px] uppercase tracking-[0.22em] px-2 py-1 rounded-full border border-[#F43F5E]/40 text-[#F43F5E]">No-index</span>}
                    <span className="adam-mono text-[10px] text-white/40">{p.path}</span>
                  </div>
                  <div className="font-display text-lg md:text-xl tracking-tight truncate">{p.label}</div>
                  {p.seo_title && <div className="text-xs text-white/50 mt-1 truncate">Title: {p.seo_title}</div>}
                </div>
                <div className="adam-mono text-[10px] uppercase tracking-[0.22em] text-white/50 hover:text-white flex items-center gap-1 shrink-0 self-center">
                  Edit SEO →
                </div>
              </li>
            );
          })}
          {!loading && !filtered.length && (
            <li className="p-12 text-center text-white/50">No pages match this filter.</li>
          )}
        </ul>
      </div>

      <AnimatePresence>
        {editing && (
          <PageEditor page={editing} onClose={() => setEditing(null)} onSaved={(p) => {
            setPages((ps) => ps.map((x) => x.key === p.key ? p : x));
            setEditing(null);
          }} />
        )}
      </AnimatePresence>
    </div>
  );
}
