"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { X, Phone, ShieldCheck } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { readTracking } from "@/lib/tracking";
import type { CAPIEventPayload } from "@/app/api/capi/route";
import { trackMetaEvent } from "@/components/MetaPixel";

const WA_PHONE = "5532984772914";

type LeadFormCtxType = { openLeadForm: (context?: string) => void };
const LeadFormCtx = createContext<LeadFormCtxType>({ openLeadForm: () => {} });

export function useLeadForm() {
  return useContext(LeadFormCtx);
}

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [ctx, setCtx] = useState("");

  const openLeadForm = useCallback((context = "") => {
    setCtx(context);
    setShow(true);
  }, []);

  return (
    <LeadFormCtx.Provider value={{ openLeadForm }}>
      {children}
      {show && <LeadModal context={ctx} onClose={() => setShow(false)} />}
    </LeadFormCtx.Provider>
  );
}

const WaIcon = ({ className = "w-5 h-5 fill-current shrink-0" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/** Fire-and-forget: sends a CAPI event via our server route (no PII in client logs) */
function sendCAPIEvent(payload: CAPIEventPayload) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: controller.signal,
  }).catch(() => {});
}

async function saveLead(data: {
  telefone: string;
  servico: string;
}) {
  const tracking = readTracking();
  const device =
    typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop";

  // Unique event_id for CAPI ↔ browser pixel deduplication
  const event_id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  const lead = {
    ...data,
    nome: "",
    status: "novo",
    event_id,
    utm_source: tracking.utm_source,
    utm_medium: tracking.utm_medium,
    utm_campaign: tracking.utm_campaign,
    utm_term: tracking.utm_term,
    utm_content: tracking.utm_content,
    gclid: tracking.gclid,
    fbclid: tracking.fbclid,
    msclkid: tracking.msclkid,
    landing_page: tracking.landing_page,
    referrer: tracking.referrer,
    page_url: typeof window !== "undefined" ? window.location.href : "",
    device,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Fire-and-forget — nunca bloqueia o fluxo do formulário
  if (db) {
    addDoc(collection(db, "leads"), lead).catch((err) => {
      console.error("Firestore save failed:", err);
    });
  }

  // GTM dataLayer
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "lead_form_submit",
      lead_event_id: event_id,
      lead_service: data.servico,
      lead_source: tracking.utm_source || "direto",
      gclid: tracking.gclid,
    });
  }

  // Meta browser pixel (mesmo event_id para deduplicação com CAPI)
  trackMetaEvent("Lead", { content_name: data.servico }, event_id);

  // Meta Conversions API — fire-and-forget, nunca bloqueia
  sendCAPIEvent({
    event_name: "Lead",
    event_id,
    event_source_url: typeof window !== "undefined" ? window.location.href : "",
    user_data: {
      phone: data.telefone,
      fbclid: tracking.fbclid,
      first_seen_ms: tracking.first_seen ? new Date(tracking.first_seen).getTime() : undefined,
      // fbp cookie (set by browser pixel if active)
      fbp: typeof document !== "undefined"
        ? document.cookie.split("; ").find((c) => c.startsWith("_fbp="))?.split("=")[1]
        : undefined,
    },
    custom_data: {
      content_name: data.servico,
    },
  });
}

function LeadModal({ onClose, context }: { onClose: () => void; context: string }) {
  const [telefone, setTelefone] = useState("");
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    // Salva lead em background (fire-and-forget) — não bloqueia o fluxo
    saveLead({
      telefone,
      servico: context || "Geral",
    });

    const ctxPart = context ? ` Tenho interesse em: ${context}.` : "";
    const msg = `Olá! Gostaria de agendar uma avaliação gratuita na Reabilitar Wellness.${ctxPart}\n\nMeu WhatsApp para contato: ${telefone}`;
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");

    setSaving(false);
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-purple px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <WaIcon className="w-5 h-5 fill-white" />
            </div>
            <div>
              <p className="font-bold text-sm">Reabilitar Wellness</p>
              <p className="text-white/70 text-xs">Respondemos em minutos ✓</p>
            </div>
          </div>
          <h2 className="text-xl font-bold font-heading">
            {sent ? "Tudo pronto!" : "Agende sua avaliação gratuita"}
          </h2>
          {!sent && (
            <p className="text-white/75 text-sm mt-1">
              Deixe seu WhatsApp e a nossa equipe entra em contato com você.
            </p>
          )}
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <WaIcon className="w-8 h-8 fill-brand-wa" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Tudo certo!</h3>
            <p className="text-slate-500 text-sm mb-6">
              O WhatsApp foi aberto com sua mensagem. Confirme o envio e nossa equipe responderá em minutos.
            </p>
            <button
              onClick={onClose}
              className="text-brand-primary font-semibold text-sm hover:underline"
            >
              Fechar janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="lead-telefone" className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-1.5">
                <Phone size={14} /> Seu número de WhatsApp
              </label>
              <input
                id="lead-telefone"
                name="telefone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                autoFocus
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(32) 99999-9999"
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold py-4 rounded-xl transition-colors text-base shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <WaIcon className="w-5 h-5 fill-white" />
              {saving ? "Abrindo o WhatsApp..." : "Quero agendar pelo WhatsApp"}
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
              <ShieldCheck size={13} /> Usamos seu número apenas para entrar em contato. Sem spam.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
