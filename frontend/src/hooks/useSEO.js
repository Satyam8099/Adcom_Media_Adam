import { useEffect } from 'react';
import { apiGet } from '@/lib/api';

/** Apply SEO overrides from the CMS to the document head.
 *  Usage: `useSEO('home')` inside any page component. Falls back to no-op if not set. */
export default function useSEO(pageKey, fallback = {}) {
  useEffect(() => {
    if (!pageKey) return undefined;
    let alive = true;

    const setMeta = (name, value, attr = 'name') => {
      if (value === undefined || value === null) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!value) { if (el) el.parentNode.removeChild(el); return; }
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!href) { if (el) el.parentNode.removeChild(el); return; }
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const apply = (data) => {
      if (!alive) return;
      const title = data.seo_title || fallback.title;
      const desc = data.meta_description || fallback.description;
      const og = data.og_image || fallback.ogImage;
      if (title) document.title = title;
      setMeta('description', desc);
      setMeta('og:title', title, 'property');
      setMeta('og:description', desc, 'property');
      setMeta('og:image', og, 'property');
      setMeta('og:type', 'website', 'property');
      setMeta('twitter:card', og ? 'summary_large_image' : 'summary');
      setMeta('twitter:title', title);
      setMeta('twitter:description', desc);
      setMeta('twitter:image', og);
      if (data.canonical) setLink('canonical', data.canonical);
      if (data.no_index) setMeta('robots', 'noindex, nofollow');
      else setMeta('robots', 'index, follow');
    };

    // Apply fallback immediately, then overlay CMS data if any
    apply({});
    apiGet(`/page-seo/${encodeURIComponent(pageKey)}`).then(apply).catch(() => {});

    return () => { alive = false; };
  }, [pageKey, fallback.title, fallback.description, fallback.ogImage]);
}
