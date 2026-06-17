import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { Award, Users, Heart, Target, CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Quem Somos | Reabilitar – Fisioterapia em Juiz de Fora",
  description:
    "Conheça a Reabilitar, clínica de fisioterapia e reabilitação referência em Juiz de Fora há mais de 15 anos. Equipe multidisciplinar com especialistas pós-graduados e mais de 5.000 pacientes atendidos.",
  keywords: [
    "Reabilitar Juiz de Fora",
    "clínica fisioterapia JF",
    "sobre Reabilitar saúde",
    "fisioterapeutas Juiz de Fora",
    "equipe fisioterapia JF",
  ],
  openGraph: {
    title: "Quem Somos | Reabilitar",
    description:
      "15 anos de história, 5.000+ pacientes e uma equipe apaixonada por transformar vidas. Conheça a Reabilitar.",
    type: "website",
  },
};

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Humanização",
    text: "Cada paciente é único. Tratamos pessoas, não diagnósticos, com escuta ativa e cuidado genuíno.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Excelência Clínica",
    text: "Protocolos baseados em evidências, equipamentos modernos e atualização contínua da equipe.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Resultados Reais",
    text: "Foco em objetivos concretos: retorno às atividades, redução da dor e melhora da qualidade de vida.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Trabalho em Equipe",
    text: "Abordagem multidisciplinar integrada para casos complexos, com comunicação entre especialistas.",
  },
];

const team = [
  {
    nome: "Dr. Carlos Eduardo",
    especialidade: "Fisioterapia Ortopédica e Esportiva",
    pos: "Pós-graduado em Fisioterapia Ortopédica – UFMG",
    crefito: "CREFITO-4 12345-F",
  },
  {
    nome: "Dra. Ana Paula",
    especialidade: "Fisioterapia Pélvica e Saúde da Mulher",
    pos: "Especialista em Uroginecofuncional – COFFITO",
    crefito: "CREFITO-4 23456-F",
  },
  {
    nome: "Dr. Ricardo Lima",
    especialidade: "Osteopatia e Quiropraxia",
    pos: "Certificado em Osteopatia – European School of Osteopathy",
    crefito: "CREFITO-4 34567-F",
  },
  {
    nome: "Dra. Juliana Matos",
    especialidade: "RPG e Pilates Clínico",
    pos: "Instrutora certificada RPG e Pilates – BASI Pilates",
    crefito: "CREFITO-4 45678-F",
  },
];

const milestones = [
  { ano: "2009", fato: "Fundação da Reabilitar com foco em fisioterapia ortopédica" },
  { ano: "2012", fato: "Expansão para novas especialidades: pilates e RPG" },
  { ano: "2015", fato: "Implantação da fisioterapia domiciliar e atendimento de idosos" },
  { ano: "2018", fato: "Abertura da área de saúde da mulher e fisioterapia pélvica" },
  { ano: "2021", fato: "5.000 pacientes atendidos e reconhecimento como clínica referência em JF" },
  { ano: "2024", fato: "Nova sede com equipamentos de última geração e 15+ profissionais" },
];

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink text-white py-20 md:py-28 text-center">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Referência em fisioterapia em Juiz de Fora desde 2009
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Quem somos
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            A Reabilitar nasceu do sonho de transformar vidas por meio da fisioterapia. Ao longo de
            mais de 15 anos, construímos uma equipe de especialistas apaixonados pelo cuidado com o ser humano.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "15+", label: "Anos de experiência" },
            { n: "5.000+", label: "Pacientes atendidos" },
            { n: "15+", label: "Especialistas" },
            { n: "5★", label: "Avaliação no Google" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold font-heading">{s.n}</div>
              <div className="text-white/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nossa história */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mt-2 mb-4">
              15 anos cuidando de pessoas
            </h2>
            <p className="text-brand-mid mb-4">
              A Reabilitar foi fundada em 2009 com uma missão clara: oferecer fisioterapia de alta
              qualidade de forma acessível e humanizada em Juiz de Fora e região.
            </p>
            <p className="text-brand-mid mb-4">
              Começamos pequenos, mas com um compromisso inabalável: tratar cada paciente com o
              cuidado que merece, usando as melhores técnicas disponíveis e sempre focando em
              resultados reais.
            </p>
            <p className="text-brand-mid">
              Hoje, somos uma equipe multidisciplinar com mais de 15 especialistas, 8 áreas de
              atuação e mais de 5.000 pacientes que confiaram na Reabilitar para cuidar da sua saúde.
            </p>
          </div>
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.ano} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 text-center">
                  <span className="text-brand-primary font-bold font-heading">{m.ano}</span>
                </div>
                <div className="flex-1 pb-4 border-b border-slate-100">
                  <p className="text-brand-mid text-sm">{m.fato}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              Nossos valores
            </h2>
            <p className="text-brand-mid mt-3">
              O que guia cada atendimento, cada decisão e cada relação com nossos pacientes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-primary-light text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-brand-mid text-sm">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Missão",
                text: "Promover saúde, bem-estar e qualidade de vida por meio de fisioterapia especializada, com excelência técnica e cuidado humanizado.",
                bg: "bg-brand-primary text-white",
              },
              {
                label: "Visão",
                text: "Ser a clínica de fisioterapia mais confiável e respeitada de Juiz de Fora e região, referência em resultados e satisfação dos pacientes.",
                bg: "bg-brand-health text-white",
              },
              {
                label: "Propósito",
                text: "Transformar a vida das pessoas por meio do movimento, reduzindo a dor e devolvendo a liberdade de fazer o que ama.",
                bg: "bg-brand-ink text-white",
              },
            ].map((item) => (
              <div key={item.label} className={`rounded-2xl p-6 ${item.bg}`}>
                <h3 className="font-bold text-lg mb-3">{item.label}</h3>
                <p className="text-sm opacity-90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              Nossa equipe de especialistas
            </h2>
            <p className="text-brand-mid mt-3">
              Profissionais com pós-graduação, certificações reconhecidas e paixão pelo que fazem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.nome} className="bg-slate-50 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-14 h-14 bg-brand-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">{t.nome}</h3>
                  <p className="text-brand-primary font-medium text-sm">{t.especialidade}</p>
                  <p className="text-slate-500 text-xs mt-1">{t.pos}</p>
                  <p className="text-slate-400 text-xs">{t.crefito}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-brand-primary-light rounded-2xl p-6 text-center">
            <p className="text-brand-primary font-medium">
              Nossa equipe completa conta com mais de 15 profissionais especializados, incluindo
              fisioterapeutas, educadores físicos e especialistas em osteopatia e pilates.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-brand-dark">
              O que nos diferencia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Avaliação completa e individualizada em todas as especialidades",
              "Equipamentos de eletroterapia, laser e ultrassom de última geração",
              "Sala de pilates com reformer, cadillac e acessórios profissionais",
              "Sala exclusiva para atendimento da saúde da mulher",
              "Prontuário eletrônico e comunicação digital facilitada",
              "Flexibilidade de horários incluindo sábados",
              "Atendimento 100% particular com foco em qualidade e resultado",
              "Fisioterapia domiciliar para toda Juiz de Fora e região",
            ].map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-brand-health flex-shrink-0 mt-0.5" />
                <p className="text-brand-mid text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-brand-ink text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Venha conhecer a Reabilitar
          </h2>
          <p className="text-slate-300 mb-8">
            Agende uma avaliação gratuita e descubra como podemos ajudar você a recuperar a saúde e
            a qualidade de vida com o cuidado que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105">
              Agendar pelo WhatsApp
            </CtaButton>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Nossos serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
