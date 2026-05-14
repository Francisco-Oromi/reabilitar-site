import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  TrendingDown,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Building2,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fisioterapia Corporativa para Empresas em Juiz de Fora | Reabilitar",
  description:
    "Programas de saúde corporativa para empresas em Juiz de Fora. Ginástica laboral, prevenção de LER/DORT, fisioterapia no trabalho e gestão de absenteísmo. Solicite proposta.",
  keywords: [
    "fisioterapia corporativa Juiz de Fora",
    "saúde corporativa JF",
    "ginástica laboral Juiz de Fora",
    "prevenção LER DORT empresa",
    "programa saúde empresa JF",
    "fisioterapia empresa Juiz de Fora",
    "absenteísmo fisioterapia",
    "ergonomia empresas JF",
  ],
  openGraph: {
    title: "Saúde Corporativa para Empresas | Reabilitar – Juiz de Fora",
    description:
      "Reduza o absenteísmo e aumente a produtividade com nossos programas de saúde corporativa. Ginástica laboral, ergonomia e fisioterapia preventiva para empresas em JF.",
    type: "website",
  },
};

const WA =
  "https://wa.me/5532984772914?text=Ol%C3%A1!%20Tenho%20interesse%20no%20programa%20de%20sa%C3%BAde%20corporativa%20para%20minha%20empresa.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

const programs = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Ginástica Laboral",
    desc: "Sessões de 15 a 20 minutos no próprio ambiente de trabalho. Reduz tensão muscular, previne LER/DORT e melhora o humor e a produtividade da equipe.",
    detail: "Programa semanal • Presencial ou online • Relatório mensal de adesão",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Análise Ergonômica",
    desc: "Avaliação completa dos postos de trabalho: mobiliário, monitores, teclados, postura e rotinas. Laudo técnico com recomendações para adequação às NRs.",
    detail: "Laudo técnico • NR-17 • Recomendações individuais",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Fisioterapia Preventiva",
    desc: "Atendimentos individuais para colaboradores com queixas musculoesqueléticas antes que evoluam para afastamento. Triagem, avaliação e encaminhamento.",
    detail: "Triagem in-company • Atendimento clínico • Reabilitação",
  },
  {
    icon: <TrendingDown className="w-7 h-7" />,
    title: "Gestão do Absenteísmo",
    desc: "Monitoramento de indicadores de saúde, identificação de colaboradores em risco e ações preventivas para reduzir afastamentos por causas musculoesqueléticas.",
    detail: "Dashboard de saúde • Relatórios • Acompanhamento mensal",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Palestras e Workshops",
    desc: "Educação em saúde para equipes: ergonomia, postura, saúde da coluna, exercícios em casa e gestão do estresse. Formato presencial ou online.",
    detail: "1 a 2 horas • Certificado • Material de apoio",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Plano de Benefícios",
    desc: "Descontos especiais para colaboradores e seus dependentes nos serviços da Reabilitar. Pagamento centralizado pela empresa ou individual por colaborador.",
    detail: "Até 30% de desconto • Faturamento PJ • Flexível",
  },
];

const benefits = [
  { n: "35%", label: "Redução do absenteísmo" },
  { n: "28%", label: "Queda nos afastamentos por LER/DORT" },
  { n: "40%", label: "Melhora no bem-estar relatado" },
  { n: "R$ 4", label: "Retorno por cada R$1 investido em saúde" },
];

const clients = [
  "Comércio e varejo",
  "Indústria e manufatura",
  "Serviços financeiros",
  "Escritórios e coworkings",
  "Condomínios e gestão predial",
  "Saúde e hospitais",
  "Tecnologia e startups",
  "Logística e transporte",
];

export default function ParaEmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-brand-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Soluções em saúde para empresas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Saúde corporativa que{" "}
              <span className="text-blue-300">transforma</span>{" "}
              resultados
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Reduza o absenteísmo, previna LER/DORT e aumente a produtividade com programas
              personalizados de fisioterapia e saúde ocupacional para a sua empresa em Juiz de Fora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
              >
                <WaIcon />
                Solicitar proposta gratuita
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full transition-all"
              >
                <WaIcon />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold font-heading text-blue-300 mb-2">{b.n}</div>
                <div className="text-white/80 text-sm">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-14 bg-red-50 border-b border-red-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-4">
            Você sabia que doenças musculoesqueléticas são a <span className="text-red-600">2ª maior causa de afastamento</span> no Brasil?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            LER, DORT, lombalgia e dores cervicais custam às empresas brasileiras bilhões por ano em afastamentos,
            queda de produtividade e aumento do custo de saúde. A boa notícia: grande parte pode ser prevenida.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Nossos programas corporativos
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Soluções completas e personalizadas para empresas de todos os portes e segmentos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-brand-primary-light text-brand-primary rounded-xl flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <p className="text-brand-primary text-xs font-medium border-t border-gray-200 pt-3">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-14 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Pronto para cuidar da saúde da sua equipe?
          </h2>
          <p className="text-blue-100 mb-8">
            Solicite uma reunião sem compromisso. Analisamos o perfil da sua empresa e montamos um
            programa sob medida com proposta personalizada.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105"
          >
            <WaIcon />
            Solicitar proposta agora
          </a>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Atendemos empresas de todos os segmentos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {clients.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 shadow-sm">
                <CheckCircle className="w-4 h-4 text-brand-health flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Como funciona a parceria
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contato inicial", text: "Fale conosco pelo WhatsApp ou telefone. Agendamos uma reunião presencial ou online sem compromisso." },
              { step: "02", title: "Diagnóstico", text: "Analisamos o perfil da empresa: número de funcionários, setor, principais queixas e objetivos." },
              { step: "03", title: "Proposta", text: "Elaboramos uma proposta personalizada com os programas mais adequados e os investimentos envolvidos." },
              { step: "04", title: "Implementação", text: "Iniciamos o programa, acompanhamos os resultados e ajustamos conforme necessário com relatórios periódicos." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Invista na saúde da sua equipe
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Empresas saudáveis são mais produtivas, têm menos afastamentos e retêm mais talentos.
            Fale com nossa equipe e receba uma proposta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              <WaIcon />
              Solicitar proposta
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full transition-all"
            >
              Outros contatos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
