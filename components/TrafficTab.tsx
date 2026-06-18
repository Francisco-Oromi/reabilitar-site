"use client";

import { useState, useRef, useCallback } from "react";
import {
  Upload,
  X,
  FileText,
  Image,
  Sheet,
  Loader2,
  Sparkles,
  AlertCircle,
  Download,
  RefreshCw,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  data: string; // base64 for images/PDF, plain text for CSV/text
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileIcon(type: string) {
  if (type.startsWith("image/")) return <Image size={18} className="text-violet-500" />;
  if (type === "application/pdf") return <FileText size={18} className="text-rose-500" />;
  return <Sheet size={18} className="text-emerald-500" />;
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix — Claude expects raw base64
      resolve(result.split(",")[1] ?? result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file, "UTF-8");
  });
}

const ACCEPTED = ".pdf,.png,.jpg,.jpeg,.webp,.gif,.csv,.txt,.xlsx,.xls";
const MAX_SIZE_MB = 10;

// ─── Markdown renderer (lightweight) ─────────────────────────────────────────

function ReportBlock({ md }: { md: string }) {
  return (
    <div className="prose prose-slate max-w-none text-sm leading-relaxed">
      {md.split("\n").map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-base font-bold text-slate-800 mt-6 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 inline-block" />
              {line.replace(/^## /, "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return <h3 key={i} className="text-sm font-semibold text-slate-700 mt-4 mb-1">{line.replace(/^### /, "")}</h3>;
        }
        if (line.startsWith("- ") || line.startsWith("* ")) {
          return (
            <div key={i} className="flex gap-2 my-0.5 ml-2">
              <span className="text-brand-primary mt-0.5 shrink-0">•</span>
              <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: inlineFormat(line.replace(/^[-*] /, "")) }} />
            </div>
          );
        }
        if (/^\d+\. /.test(line)) {
          const num = line.match(/^(\d+)\./)?.[1];
          return (
            <div key={i} className="flex gap-2 my-0.5 ml-2">
              <span className="text-brand-primary font-semibold shrink-0 w-4">{num}.</span>
              <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: inlineFormat(line.replace(/^\d+\. /, "")) }} />
            </div>
          );
        }
        if (line.startsWith("|")) {
          return <TableRow key={i} line={line} />;
        }
        if (line.trim() === "" || line.trim() === "---") return <div key={i} className="h-2" />;
        return (
          <p key={i} className="text-slate-600 my-1" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
        );
      })}
    </div>
  );
}

function TableRow({ line }: { line: string }) {
  const cells = line.split("|").filter((c) => c.trim() !== "").map((c) => c.trim());
  if (cells.every((c) => /^[-:]+$/.test(c))) return null;
  const isHeader = line.includes("---") ? false : undefined;
  return (
    <div className="flex gap-0 border-b border-slate-100 text-xs">
      {cells.map((c, i) => (
        <span key={i} className={`flex-1 px-3 py-1.5 ${isHeader === undefined && i === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}>
          {c}
        </span>
      ))}
    </div>
  );
}

function inlineFormat(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, `<code class="bg-slate-100 px-1 rounded text-xs font-mono">$1</code>`);
}

// ─── Section wrapper with collapse ───────────────────────────────────────────

function ReportSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm">{title}</span>
        {open ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TrafficTab() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [period, setPeriod] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(async (rawFiles: FileList | File[]) => {
    const arr = Array.from(rawFiles);
    const newFiles: UploadedFile[] = [];

    for (const f of arr) {
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        setError(`"${f.name}" é muito grande (máx ${MAX_SIZE_MB} MB).`);
        continue;
      }
      const isText = f.type === "text/csv" || f.name.endsWith(".csv") || f.type === "text/plain" || f.name.endsWith(".txt");
      const isXlsx = f.name.endsWith(".xlsx") || f.name.endsWith(".xls");

      let data: string;
      if (isText) {
        data = await readFileAsText(f);
      } else if (isXlsx) {
        // XLSX sent as base64; server will treat as text if it can't parse
        data = await readFileAsText(f).catch(() => "");
      } else {
        data = await readFileAsBase64(f);
      }

      newFiles.push({
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        name: f.name,
        type: f.type || "application/octet-stream",
        size: f.size,
        data,
      });
    }

    setFiles((prev) => [...prev, ...newFiles]);
    setError(null);
  }, []);

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  async function generate() {
    if (!files.length) return;
    setLoading(true);
    setReport(null);
    setError(null);

    try {
      const res = await fetch("/api/traffic-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          files: files.map((f) => ({ name: f.name, type: f.type, data: f.data })),
          period,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || `Erro ${res.status}`);
      setReport(json.report);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erro ao gerar relatório.");
    } finally {
      setLoading(false);
    }
  }

  function downloadReport() {
    if (!report) return;
    const blob = new Blob([report], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relatorio-trafego-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      {/* Upload area */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div>
          <h3 className="font-bold text-slate-800 mb-0.5 flex items-center gap-2">
            <TrendingUp size={18} className="text-brand-primary" />
            Análise de Tráfego com IA
          </h3>
          <p className="text-sm text-slate-500">
            Envie prints, PDFs ou planilhas dos seus relatórios do Google Ads, Meta Ads ou Analytics. A IA gera um relatório completo com insights e recomendações.
          </p>
        </div>

        {/* Drop zone */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${dragOver ? "border-brand-primary bg-brand-primary-light" : "border-slate-200 hover:border-brand-primary hover:bg-slate-50"}`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
        >
          <Upload size={28} className="mx-auto mb-3 text-slate-300" />
          <p className="font-semibold text-slate-700 mb-1">Arraste arquivos aqui ou clique para selecionar</p>
          <p className="text-xs text-slate-400">PDF, PNG, JPG, WEBP, CSV · Máx. {MAX_SIZE_MB} MB por arquivo</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPTED}
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((f) => (
              <div key={f.id} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                {fileIcon(f.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">{f.name}</p>
                  <p className="text-xs text-slate-400">{formatBytes(f.size)}</p>
                </div>
                <button onClick={() => removeFile(f.id)} className="text-slate-300 hover:text-slate-600 transition-colors">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Period input */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-600 block mb-1">Período dos dados (opcional)</label>
            <input
              type="text"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="Ex: Maio/2025 · 01/05 a 31/05/2025"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          <button
            onClick={generate}
            disabled={!files.length || loading}
            className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm shadow-sm shrink-0 mt-4 sm:mt-0 self-end"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Analisando...</>
            ) : (
              <><Sparkles size={16} /> Gerar relatório</>
            )}
          </button>
        </div>

        {error && (
          <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            {error}
          </div>
        )}
      </div>

      {/* Report output */}
      {loading && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm flex flex-col items-center gap-4 text-slate-400">
          <Loader2 size={36} className="animate-spin text-brand-primary" />
          <div className="text-center">
            <p className="font-semibold text-slate-600">Analisando seus dados...</p>
            <p className="text-sm mt-1">Isso pode levar 15–30 segundos dependendo dos arquivos.</p>
          </div>
        </div>
      )}

      {report && !loading && (
        <div className="space-y-4">
          {/* Report header bar */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-brand-primary" />
              Relatório gerado
              {period && <span className="text-sm font-normal text-slate-400">· {period}</span>}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => { setReport(null); setFiles([]); setPeriod(""); }}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                <RefreshCw size={13} /> Nova análise
              </button>
              <button
                onClick={downloadReport}
                className="flex items-center gap-1.5 text-sm bg-brand-primary hover:bg-brand-primary-dark text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <Download size={13} /> Baixar .md
              </button>
            </div>
          </div>

          {/* Sectioned report */}
          <ReportSection title="Relatório completo">
            <ReportBlock md={report} />
          </ReportSection>
        </div>
      )}
    </div>
  );
}
