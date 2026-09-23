const STORAGE_KEY = 'adcom_attribution';

function getStoredAttribution() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function captureAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const current = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
    gclid: params.get('gclid') || undefined,
    landing_page: window.location.pathname,
  };

  const previous = getStoredAttribution();
  const merged = { ...previous };

  Object.entries(current).forEach(([key, value]) => {
    if (value && !merged[key]) merged[key] = value;
  });

  if (!merged.first_touch_source) {
    merged.first_touch_source = current.utm_source || document.referrer || 'direct';
  }

  merged.last_touch_source = current.utm_source || document.referrer || merged.last_touch_source || 'direct';
  merged.last_landing_page = window.location.pathname;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // Storage may be unavailable in private browsing or restricted environments.
  }

  return merged;
}

export function getAttribution() {
  if (typeof window === 'undefined') return {};
  return { ...getStoredAttribution(), ...captureAttribution() };
}

export function trackEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...parameters,
    page_path: window.location.pathname,
    page_title: document.title,
    ...getAttribution(),
  });
}

export function trackPageView(location) {
  if (typeof window === 'undefined') return;

  const path = `${location.pathname}${location.search || ''}${location.hash || ''}`;
  const pageLocation = `${window.location.origin}${path}`;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtual_page_view',
    page_path: path,
    page_location: pageLocation,
    page_title: document.title,
    ...getAttribution(),
  });
}

export function trackLinkClick(eventName, label, location) {
  trackEvent(eventName, {
    link_text: label,
    button_location: location,
  });
}

export function markLeadConversion(parameters = {}) {
  trackEvent('generate_lead', parameters);
}
