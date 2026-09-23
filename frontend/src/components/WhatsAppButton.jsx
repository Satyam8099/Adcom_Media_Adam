import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { trackLinkClick } from '@/lib/analytics';

const WHATSAPP_NUMBER = '918308606641'; // +91 83086 06641
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi Adcom Media, I'd like to talk about a growth engagement."
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const trackWhatsApp = (location) => {
    trackLinkClick('whatsapp_click', 'Open WhatsApp', location);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 right-6 z-[60]"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 right-0 w-[300px] rounded-2xl border border-[rgba(255,255,255,0.12)] bg-black/85 backdrop-blur-xl p-5 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A0A0A0]">Direct line · WhatsApp</div>
                  <div className="font-display text-lg tracking-tight mt-1">Talk to a lead strategist.</div>
                </div>
                <button data-testid="whatsapp-close" onClick={() => setOpen(false)} aria-label="Close" className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition">
                  <X size={14} />
                </button>
              </div>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">We&apos;ll reply within business hours, typically same day.</p>
              <a
                data-testid="whatsapp-cta"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('floating_panel')}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-black font-semibold text-sm transition-colors"
              >
                <MessageCircle size={16} />
                Open WhatsApp
              </a>
              <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.25em] text-[#A0A0A0] text-center">+91 83086 06641</div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          data-testid="whatsapp-bubble"
          onClick={() => {
            setOpen((v) => !v);
            trackWhatsApp('floating_bubble');
          }}
          aria-label={open ? 'Close WhatsApp panel' : 'Chat on WhatsApp'}
          className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-black shadow-[0_10px_40px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
          <MessageCircle size={22} strokeWidth={2.2} />
        </button>
      </motion.div>
    </>
  );
}
