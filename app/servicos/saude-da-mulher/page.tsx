import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { Heart, Shield, Star, CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Fisioterapia para Saúde da Mulher em Juiz de Fora | Reabilitar",
  description:
    "Fisioterapia pélvica especializada para saúde da mulher em Juiz de Fora. Tratamento de incontinência urinária, assoalho pélvico, gestação, pós-parto, menopausa e disfunções sexuais. Agende sua avaliação.",
  keywords: [
    "fisioterapia saúde da mulher Juiz de Fora",
    "fisioterapia pélvica JF",
    "assoalho pélvico Juiz de Fora",
    "incontinência urinária tratamento",
    "fisioterapia pós-parto JF",
    "fisioterapia gestante Juiz de Fora",
    "disfunção sexual feminina tratamento",
    "fisioterapia menopausa",
    "prolapso genital fisioterapia",
    "fisioterapia endometriose",
    "Reabilitar saúde da mulher",
  ],
  openGraph: {
    title: "Fisioterapia para Saúde da Mulher em Juiz de Fora | Reabilitar",
    description:
      "Cuide do seu assoalho pélvico com especialistas. Tratamento de incontinência urinária, pós-parto, gestação, menopausa e muito mais. Ambiente exclusivo e acolhedor para mulheres.",
    type: "website",
  },
};

const WA =
  "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20fisioterapia%20para%20sa%C3%BAde%20da%20mulher.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

const benefits = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Incontinência Urinária",
    text: "Recupere o controle da bexiga com técnicas avançadas de reabilitação do assoalho pélvico, sem cirurgia e com resultados comprovados.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Pré e Pós-Parto",
    text: "Preparação muscular durante a gestação e recuperação completa após o parto, prevenindo prolapsos e disfunções de longa duração.",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Disfunções Sexuais",
    text: "Tratamento de vaginismo, dispareunia e anorgasmia com abordagem técnica, humanizada e baseada em evidências científicas.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Prolapso Genital",
    text: "Fortalecimento e reequilíbrio do assoalho pélvico para suporte dos órgãos pélvicos, melhorando conforto e qualidade de vida.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Menopausa e Climatério",
    text: "Manejo das alterações musculares e hormonais do climatério: ressecamento vaginal, dor pélvica e alterações urinárias.",
  },
  {
    icon: <ArrowRight className="w-7 h-7" />,
    title: "Endometriose e Dor Pélvica",
    text: "Protocolos especializados para redução da dor pélvica crônica, tensão muscular e melhora da funcionalidade nas atividades diárias.",
  },
];

const conditions = [
  "Incontinência urinária de esforço",
  "Incontinência urinária de urgência",
  "Bexiga hiperativa",
  "Dor pélvica crônica",
  "Vaginismo",
  "Dispareunia (dor na relação)",
  "Prolapso de órgãos pélvicos",
  "Diastase abdominal pós-parto",
  "Cicatriz de cesárea ou episiotomia",
  "Endometriose",
  "Síndrome do intestino irritável",
  "Constipação intestinal crônica",
];

const process = [
  {
    step: "01",
    title: "Avaliação Funcional Completa",
    text: "Anamnese detalhada, avaliação postural e exame do assoalho pélvico em ambiente reservado, seguro e completamente sigiloso.",
  },
  {
    step: "02",
    title: "Plano de Tratamento Personalizado",
    text: "Protocolo individualizado com base nos achados da avaliação: biofeedback, cinesioterapia, estimulação elétrica e técnicas manuais.",
  },
  {
    step: "03",
    title: "Sessões Focadas e Acolhedoras",
    text: "Atendimento humanizado em sala exclusiva, com foco nos seus objetivos e no seu conforto em cada etapa do tratamento.",
  },
  {
    step: "04",
    title: "Acompanhamento e Manutenção",
    text: "Reavaliações periódicas para mensurar evolução e orientações para manutenção dos resultados em casa com exercícios supervisionados.",
  },
];

const testimonials = [
  {
    name: "Fernanda A.",
    condition: "Incontinência urinária — 32 anos",
    stars: 5,
    text: "Sofria com incontinência há 2 anos e tinha vergonha de procurar ajuda. Na Reabilitar fui acolhida e tratada com muito respeito. Após 2 meses de tratamento, voltei a fazer ginástica sem medo!",
  },
  {
    name: "Camila R.",
    condition: "Recuperação pós-parto — 28 anos",
    stars: 5,
    text: "Fiz fisioterapia pélvica durante a gestação e continuei no pós-parto. A cicatriz da cesárea ficou ótima e voltei a me sentir eu mesma muito mais rápido do que esperava.",
  },
  {
    name: "Mariana L.",
    condition: "Vaginismo — 25 anos",
    stars: 5,
    text: "Passei por anos de tentativas frustradas. A fisioterapeuta foi incrivelmente cuidadosa e profissional. O tratamento mudou minha vida. Não tenho palavras para descrever o quanto sou grata.",
  },
];

const faqs = [
  {
    question: "O que é fisioterapia pélvica e para quem é indicada?",
    answer:
      "A fisioterapia pélvica é uma especialidade que avalia e trata disfunções do assoalho pélvico e da região abdomino-pélvica. É indicada para mulheres em qualquer fase da vida: adolescência, fase reprodutiva, gestação, pós-parto, menopausa e idosas, sempre que houver queixas urinárias, intestinais, sexuais ou de dor pélvica.",
  },
  {
    question: "Como é feita a avaliação do assoalho pélvico?",
    answer:
      "A avaliação inclui anamnese (histórico de saúde), avaliação postural e de movimentos, e pode incluir avaliação interna (vaginal ou retal) com o consentimento da paciente. Tudo é realizado em ambiente privativo, com total respeito e cuidado. A avaliação interna não é obrigatória e pode ser adaptada conforme o caso.",
  },
  {
    question: "Quantas sessões são necessárias para tratar a incontinência urinária?",
    answer:
      "O número de sessões varia conforme o tipo e a gravidade da incontinência. Em média, protocolos de 8 a 16 sessões já apresentam melhoras significativas. Muitas pacientes relatam melhora desde as primeiras semanas. O resultado definitivo depende do tipo de incontinência, tempo de evolução e adesão ao tratamento.",
  },
  {
    question: "Quando devo iniciar a fisioterapia pós-parto?",
    answer:
      "Para parto normal sem intercorrências, é possível iniciar após a liberação médica, geralmente com 30 dias. Para cesárea, normalmente a liberação vem entre 30 e 45 dias. Quanto mais cedo iniciar, melhor a recuperação da musculatura, da cicatriz e a prevenção de incontinência e prolapso.",
  },
  {
    question: "A fisioterapia pélvica trata o vaginismo?",
    answer:
      "Sim. O vaginismo é uma das principais indicações da fisioterapia pélvica. O tratamento inclui técnicas de relaxamento muscular, dessensibilização progressiva, biofeedback e orientações comportamentais. O processo é conduzido com muita sensibilidade e respeito ao ritmo de cada paciente.",
  },
  {
    question: "É possível fazer fisioterapia pélvica durante a gravidez?",
    answer:
      "Sim, e é altamente recomendado. A fisioterapia pré-natal prepara o assoalho pélvico para o parto, alivia dores lombares e pélvicas comuns na gestação, e reduz o risco de complicações no parto normal. O tratamento é adaptado a cada trimestre e sempre orientado em parceria com o obstetra.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Fisioterapia para Saúde da Mulher",
  alternateName: "Fisioterapia Pélvica Feminina",
  description:
    "Fisioterapia especializada em saúde da mulher: assoalho pélvico, incontinência urinária, pré e pós-parto, menopausa, disfunções sexuais e dor pélvica crônica.",
  relevantSpecialty: "PhysicalTherapy",
  recognizingAuthority: { "@type": "Organization", name: "COFFITO" },
  study: {
    "@type": "MedicalStudy",
    studySubject: { "@type": "MedicalCondition", name: "Disfunções do Assoalho Pélvico" },
  },
  provider: {
    "@type": "MedicalOrganization",
    name: "Reabilitar – Saúde e Qualidade de Vida",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juiz de Fora",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    telephone: "+55-32-98477-2914",
    url: "https://www.reabilitarsaude.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function SaudeDaMulherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-700 via-rose-600 to-pink-500 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Especialidade em Fisioterapia Pélvica Feminina
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                Fisioterapia para{" "}
                <span className="text-pink-200">Saúde da Mulher</span>{" "}
                em Juiz de Fora
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8">
                Tratamento especializado do assoalho pélvico para incontinência urinária, pós-parto,
                gestação, menopausa, vaginismo e dor pélvica. Ambiente exclusivo, acolhedor e sigiloso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 hover:bg-pink-50 font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105">
                  <WaIcon />
                  Agendar Avaliação Gratuita
                </a>
                <a href="tel:+5532984772914"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-full transition-all">
                  <Phone className="w-5 h-5" />
                  (32) 98477-2914
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-pink-100">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Ambiente 100% feminino</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Avaliação inicial gratuita</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Total sigilo e privacidade</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Especialistas certificadas</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-saude-da-mulher.jpg" alt="Fisioterapia Saúde da Mulher em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-pink-700 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", label: "Mulheres tratadas" },
            { n: "95%", label: "Taxa de melhora" },
            { n: "8+", label: "Anos de experiência" },
            { n: "4.9★", label: "Avaliação média" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold font-heading">{s.n}</div>
              <div className="text-pink-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* O que é */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              Especialidade reconhecida
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2 mb-4">
              O que é a Fisioterapia para Saúde da Mulher?
            </h2>
            <p className="text-gray-600 mb-4">
              A Fisioterapia para Saúde da Mulher é uma especialidade reconhecida pelo COFFITO que
              avalia e trata disfunções urinárias, intestinais, sexuais e musculoesqueléticas
              relacionadas à pelve feminina.
            </p>
            <p className="text-gray-600 mb-4">
              O assoalho pélvico é um conjunto de músculos e ligamentos que sustenta a bexiga, o
              útero e o intestino. Quando enfraquecido ou hipertônico, pode causar vazamento de
              urina, prolapso, dor pélvica e disfunções sexuais.
            </p>
            <p className="text-gray-600">
              Com técnicas como biofeedback, estimulação elétrica funcional, cinesioterapia e
              terapia manual, restauramos a função pélvica de forma segura, eficaz e sem cirurgia.
            </p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Indicações da especialidade:</h3>
            <ul className="space-y-2">
              {[
                "Perda de urina ao tossir, espirrar ou pular",
                "Vontade urgente e frequente de urinar",
                "Dor nas relações sexuais",
                "Dificuldade para penetração (vaginismo)",
                "Sensação de peso ou prolapso vaginal",
                "Dor pélvica crônica ou cólicas intensas",
                "Recuperação pós-parto normal ou cesárea",
                "Preparação muscular para o parto",
                "Prisão de ventre crônica",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Condições que tratamos
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Nossa equipe especializada atende mulheres em todas as fases da vida, com protocolos
              personalizados para cada condição.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-100"
              >
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Queixas mais comuns que tratamos
            </h2>
            <p className="text-gray-600 mt-3">
              Se você tem algum destes sintomas, a fisioterapia pélvica pode ajudar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {conditions.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 bg-pink-50 rounded-xl px-4 py-3 text-sm text-gray-700"
              >
                <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-14 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Você não precisa conviver com isso
          </h2>
          <p className="text-pink-100 mb-8 text-lg">
            Incontinência, dor pélvica e disfunções sexuais têm tratamento. Agende sua avaliação
            gratuita e descubra como recuperar sua qualidade de vida.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-pink-700 hover:bg-pink-50 font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105"
          >
            <WaIcon />
            Quero minha avaliação gratuita
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Como funciona o tratamento
            </h2>
            <p className="text-gray-600 mt-3">
              Um processo estruturado, respeitoso e totalmente adaptado às suas necessidades.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fases da Vida */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Fisioterapia em todas as fases da vida feminina
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                fase: "Gestação",
                desc: "Preparação do assoalho pélvico, alívio de dores lombares e pélvicas, orientação para o parto.",
                cor: "bg-pink-50 border-pink-200",
                icon: "🤰",
              },
              {
                fase: "Pós-Parto",
                desc: "Recuperação da musculatura, cicatriz de cesárea ou episiotomia, diastase abdominal.",
                cor: "bg-rose-50 border-rose-200",
                icon: "👶",
              },
              {
                fase: "Fase Reprodutiva",
                desc: "Incontinência, disfunções sexuais, endometriose, dor pélvica crônica, SOP.",
                cor: "bg-fuchsia-50 border-fuchsia-200",
                icon: "🌸",
              },
              {
                fase: "Menopausa",
                desc: "Ressecamento vaginal, incontinência, prolapso, dor pélvica e manutenção da qualidade de vida.",
                cor: "bg-purple-50 border-purple-200",
                icon: "🌷",
              },
            ].map((f) => (
              <div key={f.fase} className={`rounded-2xl p-6 border ${f.cor}`}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.fase}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              O que nossas pacientes dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-pink-600 text-xs">{t.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Perguntas frequentes
            </h2>
          </div>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Cuide da sua saúde com quem entende de você
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Sua qualidade de vida importa. Nossa equipe está pronta para te acolher com
            profissionalismo, sigilo e cuidado em todas as fases da sua vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              <WaIcon />
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full transition-all"
            >
              Ver outros serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
