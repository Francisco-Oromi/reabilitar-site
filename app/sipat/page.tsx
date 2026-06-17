import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Heart,
  Sparkles,
  Shield,
  TrendingUp,
  Smile,
  Building2,
  Award,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIPAT e Eventos Corporativos de Saúde em Juiz de Fora | Reabilitar Wellness",
  description:
    "Transforme sua SIPAT em uma experiência marcante. Quick Massage, ginástica laboral, palestras, yoga e muito mais. Programas wellness corporativos personalizados para empresas em Juiz de Fora.",
  keywords: [
    "SIPAT Juiz de Fora",
    "SIPAT MG",
    "SIPAT wellness",
    "quick massage empresa",
    "eventos corporativos saúde",
    "ginástica laboral empresa JF",
    "programa qualidade de vida corporativo",
    "wellness day empresa",
    "saúde corporativa Juiz de Fora",
    "palestra SIPAT",
  ],
  openGraph: {
    title: "SIPAT e Eventos Wellness Corporativos | Reabilitar – Juiz de Fora",
    description:
      "Leve saúde, bem-estar e experiências que transformam equipes para dentro da sua empresa. SIPAT, Quick Massage, QV Corporativa e muito mais.",
    type: "website",
  },
};

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    tag: "Principal",
    tagColor: "bg-brand-primary text-white",
    title: "SIPAT",
    subtitle: "Semana Interna de Prevenção de Acidentes",
    desc: "Transformamos sua SIPAT em uma experiência dinâmica e envolvente, com atividades que realmente conectam colaboradores ao tema saúde e prevenção.",
    topics: [
      "Ergonomia no trabalho",
      "Saúde da coluna e postura",
      "Gestão do estresse e ansiedade",
      "Qualidade de vida e hábitos saudáveis",
      "Saúde emocional e bem-estar",
      "Alongamento laboral",
      "Mindfulness e relaxamento",
      "Saúde da mulher e do homem",
    ],
    color: "border-brand-primary",
    bg: "bg-brand-primary-light",
    iconBg: "bg-brand-primary text-white",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    tag: "Destaque",
    tagColor: "bg-brand-primary text-white",
    title: "Quick Massage",
    subtitle: "Massagem expressa para equipes e eventos",
    desc: "Leve momentos de relaxamento e bem-estar imediato para sua equipe ou evento corporativo com nossa técnica de massagem rápida e eficaz.",
    topics: [
      "Reduz tensões musculares",
      "Diminui o estresse",
      "Melhora o foco e a disposição",
      "Bem-estar imediato",
      "Ideal para feiras, convenções e SIPATs",
      "Datas comemorativas",
    ],
    color: "border-brand-primary/20",
    bg: "bg-brand-primary-light",
    iconBg: "bg-brand-primary text-white",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    tag: "",
    tagColor: "",
    title: "Qualidade de Vida Corporativa",
    subtitle: "Programas contínuos de bem-estar",
    desc: "Ações contínuas para fortalecer a cultura de bem-estar dentro da empresa, com programas regulares e acompanhamento de resultados.",
    topics: [
      "Ginástica laboral",
      "Yoga corporativa",
      "Meditação guiada",
      "Sound Healing",
      "Avaliações posturais",
      "Campanhas preventivas",
      "Incentivo à atividade física",
    ],
    color: "border-brand-primary/20",
    bg: "bg-brand-primary-light",
    iconBg: "bg-brand-primary text-white",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    tag: "",
    tagColor: "",
    title: "Eventos Wellness Corporativos",
    subtitle: "Experiências exclusivas e memoráveis",
    desc: "Planejamos e executamos experiências únicas para empresas que desejam proporcionar momentos transformadores aos seus colaboradores.",
    topics: [
      "Wellness Day",
      "Retreats corporativos",
      "Imersões de bem-estar",
      "Trilhas ecológicas",
      "Piqueniques corporativos",
      "Aulas de yoga e meditação",
      "Palestras inspiradoras",
      "Feiras de saúde",
    ],
    color: "border-brand-primary/20",
    bg: "bg-brand-primary-light",
    iconBg: "bg-brand-primary text-white",
  },
];

const benefits = [
  { icon: <TrendingUp className="w-5 h-5" />, text: "Redução do estresse ocupacional" },
  { icon: <Users className="w-5 h-5" />, text: "Aumento do engajamento dos colaboradores" },
  { icon: <Building2 className="w-5 h-5" />, text: "Fortalecimento da cultura organizacional" },
  { icon: <Star className="w-5 h-5" />, text: "Valorização dos profissionais" },
  { icon: <Smile className="w-5 h-5" />, text: "Melhora do clima organizacional" },
  { icon: <Shield className="w-5 h-5" />, text: "Promoção da saúde preventiva" },
  { icon: <Heart className="w-5 h-5" />, text: "Experiência positiva para equipes e lideranças" },
  { icon: <Award className="w-5 h-5" />, text: "Empresa reconhecida como lugar de cuidado" },
];

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Fale conosco pelo WhatsApp. Entendemos o objetivo do seu evento ou programa e o porte da equipe.",
  },
  {
    n: "02",
    title: "Proposta personalizada",
    text: "Desenvolvemos uma proposta sob medida com as atividades mais adequadas ao perfil e objetivos da sua empresa.",
  },
  {
    n: "03",
    title: "Planejamento e aprovação",
    text: "Alinhamos todos os detalhes logísticos, cronograma e materiais necessários para a execução perfeita.",
  },
  {
    n: "04",
    title: "Execução e resultado",
    text: "Nossa equipe vai até você e entrega uma experiência de alto impacto. Simples assim.",
  },
];

export default function SipatPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-brand-ink text-white py-20 md:py-28">
        <div className="absolute inset-0 hero-grain opacity-70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Reabilitar Wellness Corporativo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                Transforme sua{" "}
                <span className="text-brand-star">SIPAT</span> em uma
                experiência que{" "}
                <span className="text-brand-primary-light">as pessoas lembrarão</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                Saúde, bem-estar e experiências que transformam equipes. Há quase duas décadas levando qualidade de vida para dentro das empresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <CtaButton
                  context="SIPAT / Eventos Corporativos"
                  className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl transition-all hover:scale-105"
                >
                  Solicitar proposta gratuita
                </CtaButton>
                <CtaButton
                  context="SIPAT / Eventos Corporativos"
                  showIcon={false}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  Falar pelo WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </CtaButton>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
                {[
                  "Quase 20 anos de experiência",
                  "Equipe multidisciplinar",
                  "Atendemos todo Juiz de Fora e região",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-primary-light shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — floating cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4 shrink-0 w-80">
              {[
                { icon: <Shield className="w-6 h-6" />, label: "SIPAT completa", color: "text-brand-primary-light" },
                { icon: <Heart className="w-6 h-6" />, label: "Quick Massage", color: "text-brand-primary-light" },
                { icon: <TrendingUp className="w-6 h-6" />, label: "QV Corporativa", color: "text-brand-primary-light" },
                { icon: <Sparkles className="w-6 h-6" />, label: "Wellness Day", color: "text-brand-primary-light" },
                { icon: <Users className="w-6 h-6" />, label: "Yoga & Meditação", color: "text-brand-primary-light" },
                { icon: <Zap className="w-6 h-6" />, label: "Palestras", color: "text-brand-primary-light" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
                >
                  <span className={c.color}>{c.icon}</span>
                  <span className="text-white/90 text-xs font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND — Sua empresa investe em pessoas ── */}
      <section className="py-10 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            <span className="font-bold">Sua empresa investe em pessoas.</span>{" "}
            Nós ajudamos a transformar esse investimento em mais qualidade de vida,
            engajamento, produtividade e valorização dos colaboradores.
          </p>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="py-20 bg-white" id="servicos">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-2">
              O que oferecemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Nossos serviços corporativos
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Cada ação é desenvolvida de forma personalizada, alinhada à cultura, objetivos e perfil da empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-3xl border-2 ${s.color} ${s.bg} p-8 flex flex-col gap-5`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center shrink-0`}>
                    {s.icon}
                  </div>
                  {s.tag && (
                    <span className={`${s.tagColor} text-xs font-bold px-3 py-1 rounded-full`}>
                      {s.tag}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-0.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mb-3">{s.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Inclui
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-start gap-1.5 text-sm text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-health mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <CtaButton
                  context={`${s.title} Corporativo`}
                  className="mt-auto self-start inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
                >
                  Solicitar proposta
                </CtaButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Calendar className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Sua SIPAT está chegando?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Quanto antes você nos contatar, mais tempo temos para criar uma experiência incrível para sua equipe. Fale conosco agora.
          </p>
          <CtaButton
            context="SIPAT Urgente"
            className="inline-flex items-center gap-2 bg-white text-brand-primary-dark hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-colors"
          >
            Quero planejar minha SIPAT
          </CtaButton>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Por que investir
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                Benefícios reais para a sua empresa
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Empresas que investem em bem-estar colhem resultados concretos: mais produtividade, menos afastamentos e equipes mais motivadas. Nossa missão é tornar isso tangível e mensurável para você.
              </p>
              <CtaButton
                context="SIPAT / Eventos Corporativos"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg"
              >
                Solicitar proposta gratuita
              </CtaButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
                >
                  <div className="w-9 h-9 bg-brand-primary-light text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-snug pt-1.5">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE A REABILITAR ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Nossa história
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
            Por que escolher a Reabilitar?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Há quase duas décadas promovendo saúde, movimento e qualidade de vida, a Reabilitar une conhecimento técnico, experiência prática e uma visão moderna de wellness para criar ações corporativas que geram impacto real nas pessoas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "20",
                unit: "anos",
                label: "Promovendo saúde e qualidade de vida",
                color: "text-brand-primary",
                bg: "bg-brand-primary-light",
              },
              {
                n: "5.000+",
                unit: "",
                label: "Pacientes e colaboradores atendidos",
                color: "text-brand-primary",
                bg: "bg-brand-primary-light",
              },
              {
                n: "15+",
                unit: "",
                label: "Profissionais especializados na equipe",
                color: "text-brand-primary",
                bg: "bg-brand-primary-light",
              },
            ].map((s) => (
              <div key={s.label} className={`${s.bg} rounded-3xl p-8`}>
                <div className={`text-5xl font-bold font-heading ${s.color} mb-1`}>
                  {s.n}
                  {s.unit && <span className="text-2xl ml-1">{s.unit}</span>}
                </div>
                <p className="text-slate-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="py-20 bg-brand-ink text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand-primary-light font-semibold text-sm uppercase tracking-widest mb-2">
              Simples e rápido
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Como funciona
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-white/10" />
                )}
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold font-heading text-lg relative z-10">
                  {s.n}
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDEAL PARA ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900">
              Ideal para qualquer tipo de empresa
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Indústrias e fábricas",
              "Comércio e varejo",
              "Escritórios e coworkings",
              "Serviços financeiros",
              "Saúde e hospitais",
              "Logística e transporte",
              "Tecnologia e startups",
              "Condomínios",
            ].map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm text-slate-700 shadow-sm border border-slate-100"
              >
                <CheckCircle className="w-4 h-4 text-brand-health shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-brand-ink text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Sparkles className="w-10 h-10 text-brand-star mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Sua equipe merece mais do que uma ação pontual.
          </h2>
          <p className="text-white/80 text-lg mb-2">
            Merece uma experiência de transformação.
          </p>
          <p className="text-white/60 mb-10 text-sm">
            Solicite uma proposta personalizada e descubra como levar o universo wellness para dentro da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton
              context="SIPAT / Eventos Corporativos"
              className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-10 py-4 rounded-xl shadow-2xl transition-all hover:scale-105"
            >
              Solicitar proposta gratuita
            </CtaButton>
            <Link
              href="/para-empresa"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Ver saúde corporativa completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-6 text-white/40 text-xs">
            Reabilitar Wellness Corporativo · Saúde, bem-estar e performance para pessoas e organizações.
          </p>
        </div>
      </section>
    </>
  );
}
