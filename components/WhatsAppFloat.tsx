"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLeadForm } from "./LeadFormModal";

const WaIconLg = () => (
  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WaIconSm = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WhatsAppFloat() {
  const { openLeadForm } = useLeadForm();
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleOpen = () => {
    setShowPopup(false);
    openLeadForm();
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    setShowPopup(false);
  };

  return (
    /* bottom-[76px] on mobile to clear the MobileCtaBar (~60px tall) */
    <div className="fixed bottom-[76px] right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-3">
      {/* Chat-style popup */}
      {showPopup && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-72 overflow-hidden wa-popup">
          <div className="bg-brand-wa px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <WaIconSm />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Reabilitar Wellness</p>
                <p className="text-green-100 text-xs">● Online agora</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-slate-50 rounded-xl p-3 mb-3">
              <p className="text-slate-700 text-sm leading-relaxed">
                Olá! 👋 Quer agendar sua{" "}
                <strong className="text-slate-800">avaliação gratuita</strong>? Nossa equipe responde em minutos!
              </p>
            </div>
            <button
              onClick={handleOpen}
              className="w-full bg-brand-wa hover:bg-brand-wa-dark text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
            >
              Agendar agora — é grátis!
            </button>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={handleOpen}
        aria-label="Fale conosco no WhatsApp"
        className="w-14 h-14 bg-brand-wa rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform wa-pulse"
      >
        <WaIconLg />
      </button>
    </div>
  );
}
