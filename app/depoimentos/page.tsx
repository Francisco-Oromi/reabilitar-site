import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Depoimentos | Reabilitar – Fisioterapia em Juiz de Fora",
  description:
    "Veja o que nossos pacientes dizem sobre a Reabilitar. Mais de 5.000 pessoas atendidas com avaliação 5 estrelas no Google. Resultados reais em fisioterapia e reabilitação em Juiz de Fora.",
  keywords: [
    "depoimentos Reabilitar",
    "avaliações fisioterapia Juiz de Fora",
    "resultados fisioterapia JF",
    "pacientes Reabilitar",
  ],
  openGraph: {
    title: "Depoimentos de Pacientes | Reabilitar",
    description: "O que nossos mais de 5.000 pacientes dizem sobre a Reabilitar. 5 estrelas no Google.",
    type: "website",
  },
};

const depoimentos = [
  {
    nome: "João Paulo M.",
    condicao: "Hérnia de disco L4-L5",
    servico: "Fisioterapia Avançada",
    stars: 5,
    texto: "Sofri durante 2 anos com dor lombar intensa por causa de uma hérnia de disco. Fui encaminhado para cirurgia, mas decidi tentar a fisioterapia antes. Na Reabilitar, em 3 meses de tratamento, evitei a cirurgia e voltei a correr. Resultado incrível!",
  },
  {
    nome: "Maria Fernanda S.",
    condicao: "Incontinência urinária pós-parto",
    servico: "Saúde da Mulher",
    stars: 5,
    texto: "Após o parto, comecei a ter perdas de urina e muito desconforto. Fiz fisioterapia pélvica na Reabilitar e em 6 semanas já estava 90% melhor. O tratamento foi conduzido com muito respeito e profissionalismo.",
  },
  {
    nome: "Carlos Roberto A.",
    condicao: "Lesão no joelho — pós-operatório",
    servico: "Fisioterapia Avançada",
    stars: 5,
    texto: "Fiz cirurgia no joelho e a reabilitação na Reabilitar foi excepcional. Voltei a jogar futebol em 4 meses, dentro do prazo previsto. A equipe acompanhou cada etapa com muito cuidado e motivação.",
  },
  {
    nome: "Ana Lucia T.",
    condicao: "Dor cervical crônica",
    servico: "Osteopatia e Liberação Miofascial",
    stars: 5,
    texto: "Tinha dor no pescoço há mais de 3 anos e já havia desistido de melhorar. Na Reabilitar, a combinação de osteopatia e liberação miofascial fez toda a diferença. Hoje vivo sem dor e sem remédio.",
  },
  {
    nome: "Roberto Lima",
    condicao: "Lombalgia crônica — trabalho sedentário",
    servico: "RPG e Pilates",
    stars: 5,
    texto: "Trabalho o dia todo sentado e a dor nas costas estava atrapalhando minha vida. O RPG corrigiu minha postura e o pilates fortaleceu minha musculatura. Hoje não sinto mais dor e ainda me exercito regularmente na clínica.",
  },
  {
    nome: "Beatriz N.",
    condicao: "Vaginismo",
    servico: "Saúde da Mulher",
    stars: 5,
    texto: "Carreguei o vaginismo por anos sem saber que existia tratamento. Na Reabilitar fui atendida com muito respeito e cuidado. O tratamento mudou completamente a minha vida. Não consigo expressar em palavras a gratidão.",
  },
  {
    nome: "Henrique P.",
    condicao: "Recuperação pós-fratura tornozelo",
    servico: "Fisioterapia Avançada",
    stars: 5,
    texto: "Fraturei o tornozelo praticando esporte e a recuperação na Reabilitar foi ótima. Tratamento personalizado, equipamentos modernos e uma equipe muito dedicada. Voltei ao esporte antes do que esperava!",
  },
  {
    nome: "Sônia M.",
    condicao: "Idosa — dor no quadril e queda",
    servico: "Fisioterapia Domiciliar",
    stars: 5,
    texto: "Minha mãe, de 78 anos, não conseguia se locomover após uma queda. A equipe domiciliar da Reabilitar foi até nossa casa e ela melhorou muito. O tratamento em casa foi mais confortável e seguro para ela.",
  },
  {
    nome: "Rafael C.",
    condicao: "Dor lombar e tensão muscular",
    servico: "Quiropraxia",
    stars: 5,
    texto: "Fui à Reabilitar com dor lombar aguda. A quiropraxia trouxe alívio imediato e o tratamento complementar eliminou a causa da dor. Profissionais excelentes e atendimento rápido e eficaz.",
  },
];

const stats = [
  { n: "5.000+", label: "Pacientes atendidos" },
  { n: "5★", label: "Avaliação no Google" },
  { n: "98%", label: "Recomendariam a Reabilitar" },
  { n: "15+", label: "Anos de experiência" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Reabilitar – Saúde e Qualidade de Vida",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "247",
  },
};

export default function DepoimentosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink text-white py-16 md:py-24 text-center">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-brand-star fill-brand-star" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            O que nossos pacientes dizem
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Mais de 5.000 pacientes atendidos. 5 estrelas no Google. Veja os relatos reais de
            quem transformou sua saúde com a Reabilitar.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary text-white py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold font-heading">{s.n}</div>
              <div className="text-white/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((d) => (
              <div key={d.nome} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-8 h-8 text-brand-primary-light mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: d.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-star fill-brand-star" />
                  ))}
                </div>
                <p className="text-brand-mid italic text-sm mb-5 leading-relaxed">"{d.texto}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-brand-dark">{d.nome}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{d.condicao}</div>
                  <div className="inline-block mt-2 text-xs bg-brand-primary-light text-brand-primary px-2 py-0.5 rounded-full font-medium">
                    {d.servico}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-star fill-brand-star" />
              ))}
            </div>
            <h2 className="text-2xl font-bold font-heading text-brand-dark mb-2">
              5 estrelas no Google
            </h2>
            <p className="text-brand-mid mb-6">
              Com mais de 247 avaliações verificadas, a Reabilitar é uma das clínicas de fisioterapia
              mais bem avaliadas de Juiz de Fora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtaButton className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
                Quero ser o próximo paciente
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-heading text-brand-dark mb-8">
            Por que tantos pacientes nos recomendam?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Avaliação completa e individualizada",
              "Fisioterapeutas especialistas e certificados",
              "Técnicas modernas baseadas em evidências",
              "Ambiente acolhedor e humanizado",
              "Resultados mensuráveis e documentados",
              "Comunicação transparente em todo o processo",
            ].map((d) => (
              <div key={d} className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-sm text-sm text-brand-mid">
                <CheckCircle className="w-4 h-4 text-brand-health flex-shrink-0" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-brand-ink text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Faça parte desses resultados
          </h2>
          <p className="text-slate-300 mb-8">
            Agende sua avaliação gratuita e descubra como a Reabilitar pode transformar sua saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105">
              Agendar avaliação gratuita
            </CtaButton>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Ver nossos serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
