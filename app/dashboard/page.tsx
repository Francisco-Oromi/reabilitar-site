"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, isConfigured } from "@/lib/firebase";
import {
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  Download,
  Search,
  LogOut,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Upload,
  AlertCircle,
  BarChart3,
  Zap,
  Eye,
  EyeOff,
  ExternalLink,
} from "lucide-react";
import { trackMetaEvent } from "@/components/MetaPixel";

// ─── Types ───────────────────────────────────────────────────────────────────

type LeadStatus = "novo" | "em_atendimento" | "convertido" | "perdido";

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  status: LeadStatus;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
  landing_page: string;
  referrer: string;
  page_url: string;
  device: string;
  created_at: string;
  updated_at: string;
  kommo_id?: string;
  kommo_stage?: string;
  conversion_value?: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DASHBOARD_PASSWORD = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || "reabilitar@2025";

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string }> = {
  novo: { label: "Novo", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  em_atendimento: { label: "Em atendimento", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  convertido: { label: "Convertido", color: "text-green-700", bg: "bg-green-50 border-green-200" },
  perdido: { label: "Perdido", color: "text-red-700", bg: "bg-red-50 border-red-200" },
};

// ─── Utilities ───────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function formatDateShort(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function isToday(iso: string) {
  if (!iso) return false;
  const d = new Date(iso);
  const now = new Date();
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

function isThisWeek(iso: string) {
  if (!iso) return false;
  const d = new Date(iso);
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);
  return d >= weekStart;
}

function downloadCSV(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem("rw_dash_authed", "1");
      onLogin();
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BarChart3 size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-teal-100 text-sm mt-1">Reabilitar Wellness</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">Senha de acesso</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="••••••••••"
                className={`w-full border rounded-xl px-4 py-3 text-slate-900 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${error ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                autoFocus
              />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {error && <p className="text-red-600 text-xs mt-1">Senha incorreta. Tente novamente.</p>}
          </div>
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-colors">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ label, value, icon: Icon, color, sub }: { label: string; value: string | number; icon: React.ElementType; color: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4 shadow-sm">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
        <p className="text-sm text-slate-500">{label}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: LeadStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${cfg.bg} ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}

// ─── Status Selector ──────────────────────────────────────────────────────────

function StatusSelector({ lead, onChange }: { lead: Lead; onChange: (id: string, status: LeadStatus) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1">
        <StatusBadge status={lead.status} />
        <ChevronDown size={12} className="text-slate-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-10 overflow-hidden min-w-[160px]">
          {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
            <button
              key={s}
              onClick={() => { onChange(lead.id, s); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50 flex items-center gap-2"
            >
              <StatusBadge status={s} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Lead Row ─────────────────────────────────────────────────────────────────

function LeadRow({ lead, onStatusChange }: { lead: Lead; onStatusChange: (id: string, status: LeadStatus) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <td className="px-4 py-3 text-sm font-medium text-slate-800 whitespace-nowrap">{lead.nome}</td>
        <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">{lead.telefone}</td>
        <td className="px-4 py-3 text-sm text-slate-600 hidden md:table-cell">{lead.email || "—"}</td>
        <td className="px-4 py-3 text-sm text-slate-600 hidden lg:table-cell whitespace-nowrap">{lead.servico || "—"}</td>
        <td className="px-4 py-3 text-sm text-slate-600 hidden xl:table-cell">
          {lead.utm_source ? (
            <span className="inline-flex items-center gap-1">
              <span className="font-medium">{lead.utm_source}</span>
              {lead.utm_medium && <span className="text-slate-400">/ {lead.utm_medium}</span>}
            </span>
          ) : lead.gclid ? (
            <span className="text-blue-600 font-medium text-xs">Google Ads</span>
          ) : lead.fbclid ? (
            <span className="text-indigo-600 font-medium text-xs">Meta Ads</span>
          ) : (
            <span className="text-slate-400">direto</span>
          )}
        </td>
        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
          <StatusSelector lead={lead} onChange={onStatusChange} />
        </td>
        <td className="px-4 py-3 text-xs text-slate-400 hidden sm:table-cell whitespace-nowrap">{formatDate(lead.created_at)}</td>
        <td className="px-4 py-3 text-slate-400">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </td>
      </tr>
      {expanded && (
        <tr className="bg-slate-50">
          <td colSpan={8} className="px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              {[
                { label: "UTM Source", value: lead.utm_source },
                { label: "UTM Medium", value: lead.utm_medium },
                { label: "UTM Campaign", value: lead.utm_campaign },
                { label: "UTM Term", value: lead.utm_term },
                { label: "UTM Content", value: lead.utm_content },
                { label: "GCLID", value: lead.gclid },
                { label: "FBCLID", value: lead.fbclid },
                { label: "MSCLKID", value: lead.msclkid },
                { label: "Dispositivo", value: lead.device },
                { label: "Página", value: lead.page_url },
                { label: "Landing Page", value: lead.landing_page },
                { label: "Referrer", value: lead.referrer },
                { label: "Kommo ID", value: lead.kommo_id },
                { label: "Kommo Stage", value: lead.kommo_stage },
                { label: "Valor (R$)", value: lead.conversion_value?.toString() },
              ].map(({ label, value }) =>
                value ? (
                  <div key={label} className="bg-white rounded-lg border border-slate-200 p-2.5">
                    <p className="text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">{label}</p>
                    <p className="text-slate-700 font-medium truncate" title={value}>{value}</p>
                  </div>
                ) : null
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// ─── Google Ads Section ───────────────────────────────────────────────────────

function GoogleAdsSection({ leads }: { leads: Lead[] }) {
  const convertidosComGclid = leads.filter((l) => l.status === "convertido" && l.gclid);

  function exportConversions() {
    const header = "Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency";
    const rows = convertidosComGclid.map((l) => {
      const date = new Date(l.created_at);
      const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:00`;
      return `${l.gclid},Agendamento,${formatted},${l.conversion_value || 0},BRL`;
    });
    downloadCSV([header, ...rows].join("\n"), "google_ads_conversions.csv");
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-800">Conversões para Google Ads</h3>
            <p className="text-sm text-slate-500 mt-0.5">Leads com GCLID marcados como Convertido</p>
          </div>
          <button
            onClick={exportConversions}
            disabled={convertidosComGclid.length === 0}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            <Download size={15} />
            Exportar CSV ({convertidosComGclid.length})
          </button>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 space-y-1.5">
          <p className="font-semibold">Como usar:</p>
          <ol className="list-decimal list-inside space-y-1 text-blue-700">
            <li>Marque os leads que se tornaram clientes como <strong>Convertido</strong></li>
            <li>Clique em <strong>Exportar CSV</strong> para baixar o arquivo</li>
            <li>No Google Ads, vá em <strong>Metas → Conversões → Fazer upload</strong></li>
            <li>Faça o upload do arquivo CSV gerado</li>
          </ol>
        </div>
        {convertidosComGclid.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wide">
                  <th className="text-left pb-2 font-medium">Nome</th>
                  <th className="text-left pb-2 font-medium">GCLID</th>
                  <th className="text-left pb-2 font-medium">Data</th>
                  <th className="text-left pb-2 font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {convertidosComGclid.map((l) => (
                  <tr key={l.id} className="border-t border-slate-100">
                    <td className="py-2 text-slate-700">{l.nome}</td>
                    <td className="py-2 text-slate-500 font-mono truncate max-w-[200px]">{l.gclid}</td>
                    <td className="py-2 text-slate-500">{formatDateShort(l.created_at)}</td>
                    <td className="py-2 text-slate-500">R$ {l.conversion_value || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-3">Conversões Avançadas (Enhanced Conversions)</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <p className="font-semibold mb-1">Recomendação: ative o envio via GTM</p>
          <p className="text-amber-700">O GTM já está instalado no site (ID: GTM-KF4528K2). Configure a tag de conversão do Google Ads no GTM para capturar o evento <code className="bg-amber-100 px-1 rounded">lead_form_submit</code> que é disparado a cada lead.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-1">API de Conversões Meta (CAPI)</h3>
        <p className="text-sm text-slate-500 mb-4">Eventos enviados diretamente do servidor — sem perda por bloqueador de anúncios ou iOS.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-semibold text-green-800 mb-1">Evento: Lead</p>
            <p className="text-green-700">Disparado automaticamente a cada envio do formulário do site. PII (e-mail e telefone) é hasheada SHA-256 no servidor antes do envio.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-semibold text-blue-800 mb-1">Evento: Purchase</p>
            <p className="text-blue-700">Disparado aqui no dashboard quando você marca um lead como <strong>Convertido</strong>. Usa o FBCLID capturado no momento da visita.</p>
          </div>
        </div>
        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1">
          <p className="font-medium text-slate-700">Para ativar o CAPI:</p>
          <ol className="list-decimal list-inside space-y-0.5">
            <li>No <strong>.env.local</strong>, preencha <code className="bg-slate-100 px-1 rounded">META_PIXEL_ID</code> com o ID do seu Pixel</li>
            <li>Faça o redeploy no Vercel com as variáveis de ambiente configuradas</li>
            <li>O token <code className="bg-slate-100 px-1 rounded">META_CAPI_TOKEN</code> já está configurado</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

// ─── Kommo Section ────────────────────────────────────────────────────────────

function KommoSection({ leads, onUpdate }: { leads: Lead[]; onUpdate: (id: string, data: Partial<Lead>) => void }) {
  const [csvText, setCsvText] = useState("");
  const [result, setResult] = useState<{ matched: number; errors: string[] } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function processKommo() {
    const lines = csvText.trim().split("\n");
    if (lines.length < 2) { setResult({ matched: 0, errors: ["Arquivo vazio ou inválido."] }); return; }

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z_]/g, ""));
    const rows = lines.slice(1).map((line) => {
      const vals = line.split(",");
      return Object.fromEntries(headers.map((h, i) => [h, (vals[i] || "").trim()]));
    });

    let matched = 0;
    const errors: string[] = [];

    rows.forEach((row) => {
      const phone = (row.telefone || row.phone || row.contato || "").replace(/\D/g, "");
      const email = row.email || row.e_mail || "";
      const kommoId = row.id || row.kommo_id || row.lead_id || "";
      const stage = row.etapa || row.estagio || row.funil || row.status || row.stage || "";

      const lead = leads.find((l) => {
        const lPhone = l.telefone.replace(/\D/g, "");
        return (phone && lPhone.includes(phone.slice(-8))) || (email && l.email && l.email.toLowerCase() === email.toLowerCase());
      });

      if (lead) {
        const update: Partial<Lead> = { updated_at: new Date().toISOString() };
        if (kommoId) update.kommo_id = kommoId;
        if (stage) update.kommo_stage = stage;
        if (stage.toLowerCase().includes("ganho") || stage.toLowerCase().includes("fechado") || stage.toLowerCase().includes("convertido")) {
          update.status = "convertido";
        } else if (stage.toLowerCase().includes("perdido") || stage.toLowerCase().includes("cancelado")) {
          update.status = "perdido";
        } else if (stage && stage !== lead.kommo_stage) {
          update.status = "em_atendimento";
        }
        onUpdate(lead.id, update);
        matched++;
      } else if (phone || email) {
        errors.push(`Não encontrado: ${row.nome || email || phone}`);
      }
    });

    setResult({ matched, errors });
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setCsvText(ev.target?.result as string);
    reader.readAsText(file, "UTF-8");
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-1">Importar dados do Kommo</h3>
        <p className="text-sm text-slate-500 mb-4">Exporte o funil do Kommo como CSV, cole ou faça upload abaixo. Os leads serão vinculados pelo telefone ou e-mail.</p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 mb-4 space-y-1">
          <p className="font-semibold text-slate-800 mb-2">Colunas esperadas no CSV do Kommo:</p>
          <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
            {["nome / name", "telefone / phone", "email", "id / kommo_id", "etapa / stage / status", "funil"].map((c) => (
              <span key={c} className="bg-white border border-slate-200 rounded px-2 py-1 font-mono">{c}</span>
            ))}
          </div>
        </div>

        <input ref={fileRef} type="file" accept=".csv" className="hidden" onChange={handleFile} />
        <div className="flex gap-3 mb-3">
          <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors">
            <Upload size={15} />
            Upload CSV
          </button>
        </div>

        <textarea
          value={csvText}
          onChange={(e) => setCsvText(e.target.value)}
          placeholder={"nome,telefone,email,id,etapa\nMaria Silva,(32) 9999-0000,maria@email.com,12345,Reunião"}
          rows={8}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />

        <button
          onClick={processKommo}
          disabled={!csvText.trim()}
          className="mt-3 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
        >
          <Zap size={15} />
          Processar e vincular leads
        </button>

        {result && (
          <div className={`mt-4 rounded-xl p-4 text-sm ${result.matched > 0 ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
            <p className="font-semibold text-slate-800">{result.matched} lead(s) atualizados</p>
            {result.errors.length > 0 && (
              <ul className="mt-2 space-y-0.5 text-slate-600">
                {result.errors.slice(0, 10).map((e, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <AlertCircle size={12} className="text-amber-500 shrink-0" />
                    {e}
                  </li>
                ))}
                {result.errors.length > 10 && <li className="text-slate-400">...e mais {result.errors.length - 10}</li>}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "todos">("todos");
  const [sourceFilter, setSourceFilter] = useState("todos");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [activeTab, setActiveTab] = useState<"leads" | "google-ads" | "kommo">("leads");
  const [syncing, setSyncing] = useState(false);

  // Check auth on mount
  useEffect(() => {
    if (sessionStorage.getItem("rw_dash_authed") === "1") setAuthed(true);
    else setLoading(false);
  }, []);

  // Real-time Firestore listener
  useEffect(() => {
    if (!authed || !db) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const q = query(collection(db, "leads"), orderBy("created_at", "desc"), limit(500));
    const unsub = onSnapshot(q, (snap) => {
      setLeads(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Lead)));
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, [authed]);

  async function fireCAPIConversion(lead: Lead) {
    try {
      await fetch("/api/capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_name: "Purchase",
          event_id: `purchase_${lead.id}`,
          event_source_url: lead.landing_page || lead.page_url,
          user_data: {
            email: lead.email,
            phone: lead.telefone,
            fbclid: lead.fbclid || undefined,
          },
          custom_data: {
            currency: "BRL",
            value: lead.conversion_value ?? 0,
            content_name: lead.servico,
          },
        }),
      });
    } catch {
      // non-blocking
    }
  }

  async function updateStatus(id: string, status: LeadStatus) {
    if (!db) return;
    setSyncing(true);
    try {
      await updateDoc(doc(db, "leads", id), { status, updated_at: new Date().toISOString() });
      // Fire Meta events when a lead is manually marked as converted
      if (status === "convertido") {
        const lead = leads.find((l) => l.id === id);
        if (lead) {
          fireCAPIConversion(lead);
          // Browser-side pixel (mesmo event_id para deduplicação)
          trackMetaEvent("Purchase", { currency: "BRL", value: lead.conversion_value ?? 0, content_name: lead.servico }, `purchase_${lead.id}`);
        }
      }
    } finally {
      setSyncing(false);
    }
  }

  async function updateLead(id: string, data: Partial<Lead>) {
    if (!db) return;
    setSyncing(true);
    try {
      await updateDoc(doc(db, "leads", id), data);
    } finally {
      setSyncing(false);
    }
  }

  // ── Filtered leads ──────────────────────────────────────────────────────────
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      if (search) {
        const s = search.toLowerCase();
        if (!l.nome.toLowerCase().includes(s) && !l.email.toLowerCase().includes(s) && !l.telefone.includes(s)) return false;
      }
      if (statusFilter !== "todos" && l.status !== statusFilter) return false;
      if (sourceFilter !== "todos") {
        if (sourceFilter === "google" && !l.gclid && l.utm_source !== "google") return false;
        if (sourceFilter === "meta" && !l.fbclid && l.utm_source !== "facebook" && l.utm_source !== "instagram") return false;
        if (sourceFilter === "organico" && (l.utm_source || l.gclid || l.fbclid)) return false;
      }
      if (dateFrom && l.created_at < dateFrom) return false;
      if (dateTo && l.created_at > dateTo + "T23:59:59") return false;
      return true;
    });
  }, [leads, search, statusFilter, sourceFilter, dateFrom, dateTo]);

  // ── Stats ───────────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = leads.length;
    const hoje = leads.filter((l) => isToday(l.created_at)).length;
    const semana = leads.filter((l) => isThisWeek(l.created_at)).length;
    const convertidos = leads.filter((l) => l.status === "convertido").length;
    const taxa = total > 0 ? Math.round((convertidos / total) * 100) : 0;
    return { total, hoje, semana, convertidos, taxa };
  }, [leads]);

  // ── Sources for filter ──────────────────────────────────────────────────────
  const sources = useMemo(() => {
    const set = new Set(leads.map((l) => l.utm_source).filter(Boolean));
    return Array.from(set);
  }, [leads]);

  // ── CSV export (all leads) ──────────────────────────────────────────────────
  function exportLeadsCSV() {
    const cols = ["id","nome","email","telefone","servico","status","utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid","fbclid","msclkid","landing_page","page_url","referrer","device","kommo_id","kommo_stage","conversion_value","created_at"];
    const header = cols.join(",");
    const rows = filteredLeads.map((l) => cols.map((c) => `"${(l[c as keyof Lead] ?? "").toString().replace(/"/g, '""')}"`).join(","));
    downloadCSV([header, ...rows].join("\n"), `leads_${new Date().toISOString().slice(0,10)}.csv`);
  }

  if (!authed) return <LoginScreen onLogin={() => { setAuthed(true); setLoading(true); }} />;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <BarChart3 size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-800">Dashboard</span>
            <span className="text-slate-400 text-sm hidden sm:block">Reabilitar Wellness</span>
            {syncing && <RefreshCw size={14} className="text-teal-500 animate-spin" />}
          </div>
          <button
            onClick={() => { sessionStorage.removeItem("rw_dash_authed"); setAuthed(false); }}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <LogOut size={15} />
            <span className="hidden sm:block">Sair</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Firebase setup guide */}
        {!isConfigured && (
          <div className="bg-white border border-amber-300 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-amber-50 px-5 py-4 flex items-center gap-3 border-b border-amber-200">
              <AlertCircle size={20} className="text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-amber-800">Firebase não configurado — leads não estão sendo salvos</p>
                <p className="text-amber-700 text-sm mt-0.5">Configure em 5 minutos seguindo os passos abaixo:</p>
              </div>
            </div>
            <div className="p-5">
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <span>Acesse <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline inline-flex items-center gap-1">console.firebase.google.com <ExternalLink size={12} /></a> → crie um projeto ou use um existente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <span>No projeto, clique em <strong>Adicionar app → Web (&lt;/&gt;)</strong> → dê um nome e copie o <code className="bg-slate-100 px-1 rounded">firebaseConfig</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <span>Vá em <strong>Firestore Database → Criar banco de dados → Modo de produção</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <span>Cole os valores no <code className="bg-slate-100 px-1 rounded">.env.local</code> do projeto e também no <a href="https://vercel.com/francisco-oromi" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline inline-flex items-center gap-1">Vercel → Settings → Environment Variables <ExternalLink size={12} /></a>:</span>
                    <pre className="mt-2 bg-slate-900 text-green-400 text-xs rounded-lg p-3 overflow-x-auto">{`NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=meu-projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=meu-projeto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=meu-projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123`}</pre>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                  <span>Faça um novo deploy no Vercel. O dashboard mostrará os leads em tempo real via Firestore.</span>
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label="Total de leads" value={stats.total} icon={Users} color="bg-teal-500" />
          <StatCard label="Hoje" value={stats.hoje} icon={Calendar} color="bg-blue-500" />
          <StatCard label="Esta semana" value={stats.semana} icon={TrendingUp} color="bg-purple-500" />
          <StatCard label="Convertidos" value={stats.convertidos} icon={CheckCircle} color="bg-green-500" />
          <StatCard label="Taxa conversão" value={`${stats.taxa}%`} icon={TrendingUp} color="bg-rose-500" sub={`${stats.convertidos} de ${stats.total}`} />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
          {([["leads","Leads"], ["google-ads","Google Ads"], ["kommo","Kommo"]] as const).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Leads Tab */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            {/* Filter bar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <div className="flex flex-wrap gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, email ou telefone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "todos")}
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="todos">Todos os status</option>
                  {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
                    <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
                  ))}
                </select>
                <select
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="todos">Todas as fontes</option>
                  <option value="google">Google Ads</option>
                  <option value="meta">Meta Ads</option>
                  <option value="organico">Orgânico / Direto</option>
                  {sources.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <button
                  onClick={exportLeadsCSV}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Download size={14} />
                  Exportar ({filteredLeads.length})
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              {loading ? (
                <div className="flex items-center justify-center py-20 text-slate-400">
                  <RefreshCw size={24} className="animate-spin mr-3" />
                  Carregando leads...
                </div>
              ) : filteredLeads.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Users size={40} className="mb-3 opacity-30" />
                  <p className="font-medium">Nenhum lead encontrado</p>
                  <p className="text-sm mt-1">Os leads aparecerão aqui quando alguém preencher o formulário do site</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Nome</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Telefone</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Email</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Serviço</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden xl:table-cell">Fonte</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">Data</th>
                        <th className="px-4 py-3 w-6" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.map((lead) => (
                        <LeadRow key={lead.id} lead={lead} onStatusChange={updateStatus} />
                      ))}
                    </tbody>
                  </table>
                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400">
                    {filteredLeads.length} lead(s) {leads.length !== filteredLeads.length && `(filtrado de ${leads.length} total)`}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "google-ads" && <GoogleAdsSection leads={leads} />}
        {activeTab === "kommo" && <KommoSection leads={leads} onUpdate={updateLead} />}
      </div>
    </div>
  );
}
