"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Upload,
  X,
  FileText,
  Image as ImageIcon,
  Sheet,
  Loader2,
  Sparkles,
  AlertCircle,
  Download,
  RefreshCw,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Send,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  data: string;
  preview?: string; // object URL for image thumbnails
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileIcon(type: string) {
  if (type.startsWith("image/")) return <ImageIcon size={16} className="text-violet-500" />;
  if (type === "application/pdf") return <FileText size={16} className="text-rose-500" />;
  return <Sheet size={16} className="text-emerald-500" />;
}

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file, "UTF-8");
  });
}

const ACCEPTED = ".pdf,.png,.jpg,.jpeg,.webp,.gif,.csv,.txt,.xlsx,.xls";
const MAX_MB = 10;

// ─── Lightweight markdown renderer ───────────────────────────────────────────

function inlineFmt(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, `<code class="bg-slate-100 px-1 rounded text-xs font-mono">$1</code>`);
}

function TableRow({ line }: { line: string }) {
  const cells = line.split("|").filter((c) => c.trim() !== "").map((c) => c.trim());
  if (cells.every((c) => /^[-:]+$/.test(c))) return null;
  return (
    <div className="flex border-b border-slate-100 text-xs">
      {cells.map((c, i) => (
        <span key={i} className={`flex-1 px-3 py-1.5 ${i === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}>
          <span dangerouslySetInnerHTML={{ __html: inlineFmt(c) }} />
        </span>
      ))}
    </div>
  );
}

function ReportBlock({ md }: { md: string }) {
  return (
    <div className="space-y-0.5">
      {md.split("\n").map((line, i) => {
        if (line.startsWith("## "))
          return (
            <h2 key={i} className="text-base font-bold text-slate-800 mt-6 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 inline-block" />
              {line.replace(/^## /, "")}
            </h2>
          );
        if (line.startsWith("### "))
          return <h3 key={i} className="text-sm font-semibold text-slate-700 mt-4 mb-1">{line.replace(/^### /, "")}</h3>;
        if (line.startsWith("- ") || line.startsWith("* "))
          return (
            <div key={i} className="flex gap-2 my-0.5 ml-2">
              <span className="text-brand-primary mt-0.5 shrink-0">•</span>
              <span className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: inlineFmt(line.replace(/^[-*] /, "")) }} />
            </div>
          );
        if (/^\d+\. /.test(line)) {
          const num = line.match(/^(\d+)\./)?.[1];
          return (
            <div key={i} className="flex gap-2 my-0.5 ml-2">
              <span className="text-brand-primary font-semibold shrink-0 w-4 text-sm">{num}.</span>
              <span className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: inlineFmt(line.replace(/^\d+\. /, "")) }} />
            </div>
          );
        }
        if (line.startsWith("|")) return <TableRow key={i} line={line} />;
        if (line.trim() === "" || line.trim() === "---") return <div key={i} className="h-2" />;
        return <p key={i} className="text-sm text-slate-600 my-1" dangerouslySetInnerHTML={{ __html: inlineFmt(line) }} />;
      })}
    </div>
  );
}

function Collapsible({ title, children, open: defaultOpen = true }: { title: string; children: React.ReactNode; open?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-800 text-sm">{title}</span>
        {open ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TrafficTab() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [message, setMessage] = useState("");
  const [period, setPeriod] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [pasteHint, setPasteHint] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── File processing ─────────────────────────────────────────────────────────

  const processFile = useCallback(async (f: File, nameOverride?: string): Promise<UploadedFile | null> => {
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`"${f.name}" é muito grande (máx ${MAX_MB} MB).`);
      return null;
    }
    const isText = f.type === "text/csv" || f.name.endsWith(".csv") || f.type === "text/plain";
    let data: string;
    let preview: string | undefined;

    if (isText) {
      data = await readAsText(f);
    } else {
      data = await readAsBase64(f);
      if (f.type.startsWith("image/")) preview = URL.createObjectURL(f);
    }

    return {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: nameOverride ?? f.name,
      type: f.type || "application/octet-stream",
      size: f.size,
      data,
      preview,
    };
  }, []);

  const addFiles = useCallback(async (rawFiles: FileList | File[]) => {
    setError(null);
    const results = await Promise.all(Array.from(rawFiles).map((f) => processFile(f)));
    const valid = results.filter((r): r is UploadedFile => r !== null);
    setFiles((prev) => [...prev, ...valid]);
  }, [processFile]);

  function removeFile(id: string) {
    setFiles((prev) => {
      const f = prev.find((x) => x.id === id);
      if (f?.preview) URL.revokeObjectURL(f.preview);
      return prev.filter((x) => x.id !== id);
    });
  }

  // ── Paste handler on the textarea ───────────────────────────────────────────

  const handlePaste = useCallback(async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = Array.from(e.clipboardData.items);
    const imageItems = items.filter((it) => it.type.startsWith("image/"));

    if (imageItems.length === 0) return; // let text paste happen normally

    e.preventDefault();
    setError(null);

    const newFiles: UploadedFile[] = [];
    for (const item of imageItems) {
      const blob = item.getAsFile();
      if (!blob) continue;
      const ext = item.type.split("/")[1] ?? "png";
      const name = `print-${new Date().toISOString().replace(/[:.]/g, "-")}.${ext}`;
      const result = await processFile(
        new File([blob], name, { type: item.type }),
        name,
      );
      if (result) newFiles.push(result);
    }

    setFiles((prev) => [...prev, ...newFiles]);

    // Brief visual confirmation
    setPasteHint(true);
    setTimeout(() => setPasteHint(false), 2000);
  }, [processFile]);

  // Auto-grow textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [message]);

  // ── Generate ────────────────────────────────────────────────────────────────

  const canGenerate = (files.length > 0 || message.trim().length > 0) && !loading;

  async function generate() {
    if (!canGenerate) return;
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
          instructions: message.trim() || undefined,
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

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      generate();
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

  function reset() {
    files.forEach((f) => { if (f.preview) URL.revokeObjectURL(f.preview); });
    setFiles([]);
    setMessage("");
    setPeriod("");
    setReport(null);
    setError(null);
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Main card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp size={18} className="text-brand-primary" />
            Análise de Tráfego com IA
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Envie arquivos ou cole prints e diga como quer o relatório. A IA analisa e devolve insights completos.
          </p>
        </div>

        <div className="p-6 space-y-4">
          {/* Drop zone — compact */}
          <div
            className={`border-2 border-dashed rounded-xl px-5 py-4 flex items-center gap-3 transition-colors cursor-pointer ${dragOver ? "border-brand-primary bg-brand-primary-light" : "border-slate-200 hover:border-brand-primary hover:bg-slate-50"}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
          >
            <Upload size={20} className="text-slate-300 shrink-0" />
            <div>
              <p className="text-sm font-medium text-slate-600">Arraste ou clique para enviar arquivos</p>
              <p className="text-xs text-slate-400">PDF, PNG, JPG, WEBP, CSV · Máx. {MAX_MB} MB</p>
            </div>
            <input ref={fileInputRef} type="file" multiple accept={ACCEPTED} className="hidden"
              onChange={(e) => e.target.files && addFiles(e.target.files)} />
          </div>

          {/* Attached files */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {files.map((f) => (
                <div key={f.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl pl-2 pr-1 py-1.5 max-w-[240px]">
                  {f.preview ? (
                    <img src={f.preview} alt={f.name} className="w-8 h-8 object-cover rounded-lg shrink-0 border border-slate-200" />
                  ) : (
                    <span className="shrink-0">{fileIcon(f.type)}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-700 truncate">{f.name}</p>
                    <p className="text-[10px] text-slate-400">{formatBytes(f.size)}</p>
                  </div>
                  <button onClick={() => removeFile(f.id)} className="text-slate-300 hover:text-slate-600 transition-colors p-0.5 shrink-0">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Period */}
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Período (opcional)</label>
            <input
              type="text"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="Ex: Junho/2025 ou 01/06 a 30/06"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>

          {/* Message / paste area */}
          <div className={`border rounded-2xl transition-all ${pasteHint ? "border-brand-green bg-brand-primary-light" : "border-slate-200 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20"}`}>
            {/* Paste hint banner */}
            {pasteHint && (
              <div className="flex items-center gap-2 px-4 pt-3 text-xs text-brand-primary font-medium">
                <Clipboard size={13} /> Print colado com sucesso!
              </div>
            )}

            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onPaste={handlePaste}
              onKeyDown={handleKey}
              placeholder={"Cole um print aqui (Ctrl+V / ⌘V) ou descreva o que quer no relatório...\n\nEx: \"Foco no CPL do Meta Ads e compare com o mês anterior. Vale aumentar o budget?\""}
              rows={3}
              className="w-full px-4 pt-3 pb-2 text-sm text-slate-700 placeholder-slate-400 resize-none focus:outline-none bg-transparent rounded-2xl"
              style={{ minHeight: 80 }}
            />

            {/* Bottom bar inside the textarea box */}
            <div className="flex items-center justify-between px-3 pb-3 pt-1">
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clipboard size={11} /> Cole prints diretamente · <kbd className="bg-slate-100 px-1 rounded text-[10px]">Ctrl+Enter</kbd> para enviar
              </p>
              <button
                onClick={generate}
                disabled={!canGenerate}
                className="flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors shadow-sm"
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                {loading ? "Analisando..." : "Gerar relatório"}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm flex flex-col items-center gap-4">
          <Loader2 size={36} className="animate-spin text-brand-primary" />
          <div className="text-center">
            <p className="font-semibold text-slate-600">Analisando seus dados...</p>
            <p className="text-sm text-slate-400 mt-1">Isso pode levar 15–30 segundos.</p>
          </div>
        </div>
      )}

      {/* Report */}
      {report && !loading && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-brand-primary" />
              Relatório gerado
              {period && <span className="text-sm font-normal text-slate-400">· {period}</span>}
            </h2>
            <div className="flex gap-2">
              <button onClick={reset} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors">
                <RefreshCw size={13} /> Nova análise
              </button>
              <button onClick={downloadReport} className="flex items-center gap-1.5 text-sm bg-brand-primary hover:bg-brand-primary-dark text-white px-3 py-1.5 rounded-lg transition-colors">
                <Download size={13} /> Baixar .md
              </button>
            </div>
          </div>
          <Collapsible title="Relatório completo">
            <ReportBlock md={report} />
          </Collapsible>
        </div>
      )}
    </div>
  );
}
