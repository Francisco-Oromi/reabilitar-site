"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Reabilitar.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

export default function ContatoForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
        <p className="text-gray-600 mb-6">
          Nossa equipe entrará em contato em breve. Para resposta mais rápida, fale conosco
          pelo WhatsApp.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-wa text-white font-bold px-6 py-3 rounded-full"
        >
          <WaIcon />
          Continuar pelo WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo *
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone / WhatsApp *
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            value={form.telefone}
            onChange={handleChange}
            placeholder="(32) 99999-9999"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
          Serviço de interesse
        </label>
        <select
          id="servico"
          name="servico"
          value={form.servico}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
        >
          <option value="">Selecione um serviço</option>
          <option>Fisioterapia Avançada</option>
          <option>Fisioterapia Domiciliar</option>
          <option>Liberação Miofascial</option>
          <option>Osteopatia</option>
          <option>Pilates Clínico</option>
          <option>Quiropraxia</option>
          <option>RPG</option>
          <option>Saúde da Mulher</option>
          <option>Não sei — preciso de orientação</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Descreva sua queixa ou dúvida..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold text-lg px-6 py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Seus dados estão seguros. Não compartilhamos com terceiros.
      </p>
    </form>
  );
}
