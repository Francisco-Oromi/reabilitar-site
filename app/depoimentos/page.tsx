import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Depoimentos | Reabilitar – Fisioterapia em Juiz de Fora",
  description:
    "Veja o que nossos pacientes dizem sobre a Reabilitar. Mais de 5.000 pessoas atendidas com avaliação 4.9 estrelas no Google. Resultados reais em fisioterapia e reabilitação em Juiz de Fora.",
  keywords: [
    "depoimentos Reabilitar",
    "avaliações fisioterapia Juiz de Fora",
    "resultados fisioterapia JF",
    "pacientes Reabilitar",
  ],
  openGraph: {
    title: "Depoimentos de Pacientes | Reabilitar",
    description: "O que nossos mais de 5.000 pacientes dizem sobre a Reabilitar. 4.9 estrelas no Google.",
    type: "website",
  },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Reabilitar.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

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
  { n: "4.9★", label: "Avaliação no Google" },
  { n: "98%", label: "Recomendariam a Reabilitar" },
  { n: "15+", label: "Anos de experiência" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Reabilitar – Saúde e Qualidade de Vida",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
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
      <section className="bg-gradient-to-br from-brand-primary via-blue-700 to-blue-900 text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            O que nossos pacientes dizem
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Mais de 5.000 pacientes atendidos. 4.9 estrelas no Google. Veja os relatos reais de
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
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((d) => (
              <div key={d.nome} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-8 h-8 text-brand-primary-light mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: d.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm mb-5 leading-relaxed">"{d.texto}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-gray-900">{d.nome}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{d.condicao}</div>
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
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">
              4.9 estrelas no Google
            </h2>
            <p className="text-gray-600 mb-6">
              Com mais de 247 avaliações verificadas, a Reabilitar é uma das clínicas de fisioterapia
              mais bem avaliadas de Juiz de Fora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <WaIcon />
                Quero ser o próximo paciente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8">
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
              <div key={d} className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-sm text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-brand-health flex-shrink-0" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Faça parte desses resultados
          </h2>
          <p className="text-gray-300 mb-8">
            Agende sua avaliação gratuita e descubra como a Reabilitar pode transformar sua saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              <WaIcon />
              Agendar avaliação gratuita
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full transition-all"
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
