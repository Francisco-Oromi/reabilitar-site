import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de Fisioterapia | Reabilitar – Juiz de Fora",
  description:
    "Artigos sobre fisioterapia, saúde, postura, dor crônica, reabilitação e bem-estar da equipe de especialistas da Reabilitar em Juiz de Fora. Conteúdo baseado em evidências.",
  keywords: [
    "blog fisioterapia",
    "artigos fisioterapia Juiz de Fora",
    "saúde postura dicas",
    "fisioterapia conteúdo",
    "dor crônica tratamento",
    "reabilitação dicas",
  ],
  openGraph: {
    title: "Blog de Fisioterapia | Reabilitar",
    description: "Conteúdo especializado em saúde, fisioterapia e reabilitação da equipe Reabilitar.",
    type: "website",
  },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

const posts = [
  {
    slug: "hernia-de-disco-fisioterapia-ou-cirurgia",
    categoria: "Coluna",
    titulo: "Hérnia de disco: fisioterapia ou cirurgia? O que a ciência diz",
    resumo:
      "Mais de 90% dos casos de hérnia de disco respondem bem ao tratamento conservador. Entenda quando a cirurgia é realmente necessária e como a fisioterapia pode evitá-la.",
    tempo: "8 min",
    data: "12 Mai 2025",
    cor: "bg-blue-100 text-blue-700",
  },
  {
    slug: "incontinencia-urinaria-tratamento-fisioterapia",
    categoria: "Saúde da Mulher",
    titulo: "Incontinência urinária: o tratamento que a maioria das mulheres não conhece",
    resumo:
      "A fisioterapia pélvica tem taxas de sucesso superiores a 80% no tratamento da incontinência urinária. Veja como funciona e quem pode se beneficiar.",
    tempo: "7 min",
    data: "05 Mai 2025",
    cor: "bg-pink-100 text-pink-700",
  },
  {
    slug: "exercicios-para-lombalgia-em-casa",
    categoria: "Coluna",
    titulo: "5 exercícios para dor lombar que você pode fazer em casa",
    resumo:
      "Selecionados por fisioterapeutas especialistas, esses exercícios ajudam a aliviar a dor e fortalecer a musculatura de suporte da coluna lombar.",
    tempo: "5 min",
    data: "28 Abr 2025",
    cor: "bg-blue-100 text-blue-700",
  },
  {
    slug: "pilates-clinico-vs-pilates-comum",
    categoria: "Pilates",
    titulo: "Pilates clínico vs. pilates convencional: qual a diferença?",
    resumo:
      "Entenda por que o pilates supervisionado por fisioterapeuta é mais seguro e eficaz para reabilitação e por que ele não é apenas uma aula de exercícios.",
    tempo: "6 min",
    data: "20 Abr 2025",
    cor: "bg-purple-100 text-purple-700",
  },
  {
    slug: "o-que-e-rpg-como-funciona",
    categoria: "Postura",
    titulo: "O que é RPG e como ele corrige a postura de forma definitiva",
    resumo:
      "O método de Philippe Souchard age nas cadeias musculares e trata as causas — não os sintomas — dos problemas posturais. Veja como funciona na prática.",
    tempo: "7 min",
    data: "14 Abr 2025",
    cor: "bg-teal-100 text-teal-700",
  },
  {
    slug: "fisioterapia-domiciliar-para-idosos",
    categoria: "Domiciliar",
    titulo: "Fisioterapia domiciliar para idosos: benefícios e quando indicar",
    resumo:
      "O atendimento em domicílio traz resultados superiores para idosos com dificuldade de locomoção. Conheça as vantagens e como funciona na Reabilitar.",
    tempo: "6 min",
    data: "08 Abr 2025",
    cor: "bg-emerald-100 text-emerald-700",
  },
];

const categorias = ["Todos", "Coluna", "Saúde da Mulher", "Pilates", "Postura", "Domiciliar", "Osteopatia", "Esporte"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary via-blue-700 to-blue-900 text-white py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Blog Reabilitar</h1>
          <p className="text-blue-100 text-lg">
            Conteúdo especializado em fisioterapia, saúde e bem-estar escrito pela nossa equipe de
            especialistas. Informação baseada em evidências para cuidar melhor de você.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categorias.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-brand-primary text-white"
                    : "bg-white text-gray-600 hover:bg-brand-primary-light hover:text-brand-primary border border-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Placeholder thumbnail */}
                <div className="h-44 bg-gradient-to-br from-brand-primary-light to-blue-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${p.cor} mb-2`}>
                      {p.categoria}
                    </span>
                    <p className="text-brand-primary font-bold text-sm font-heading leading-tight line-clamp-3">
                      {p.titulo}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${p.cor}`}>
                      <Tag className="w-3 h-3" />
                      {p.categoria}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {p.tempo} de leitura
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                    {p.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{p.resumo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{p.data}</span>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium hover:gap-2 transition-all"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more placeholder */}
          <div className="mt-10 text-center">
            <button className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-brand-primary-light">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">
            Receba conteúdo especializado no WhatsApp
          </h2>
          <p className="text-gray-600 mb-6">
            Entre em contato e receba dicas de saúde, fisioterapia e bem-estar diretamente no seu
            WhatsApp, sem spam.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            <WaIcon />
            Seguir no WhatsApp
          </a>
        </div>
      </section>

      {/* CTA Agendamento */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading mb-3">
            Tem uma queixa? Fale com um especialista
          </h2>
          <p className="text-gray-300 mb-6">
            Nossos artigos informam, mas nada substitui uma avaliação presencial. Agende sua consulta
            gratuita agora.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
          >
            <WaIcon />
            Agendar avaliação gratuita
          </a>
        </div>
      </section>
    </>
  );
}
