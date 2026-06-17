import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ClinicGallery from "@/components/ClinicGallery";
import CtaButton from "@/components/CtaButton";
import { CheckCircle, Star, RotateCcw, Shield, Activity, Zap, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiropraxia em Juiz de Fora | Alívio da Dor na Coluna",
  description:
    "Quiropraxia em Juiz de Fora para dor na coluna, ciática, hérnia de disco e cervicalgia. Ajuste vertebral seguro e eficaz. Avaliação gratuita: (32) 3214-0522.",
  keywords: ["quiropraxia juiz de fora", "quiropraxista jf", "ajuste vertebral jf", "coluna juiz de fora", "dor nas costas jf"],
  openGraph: { title: "Quiropraxia em Juiz de Fora | Reabilitar Wellness", description: "Ajuste vertebral para aliviar dores na coluna. Avaliação gratuita.", type: "website", locale: "pt_BR" },
};

const benefits = [
  { icon: Zap,         title: "Alívio Rápido da Dor",      text: "Muitos pacientes sentem alívio significativo já nas primeiras sessões." },
  { icon: RotateCcw,   title: "Restauração da Mobilidade", text: "O ajuste vertebral restaura a amplitude de movimento e a função articular." },
  { icon: Shield,      title: "Sem Cirurgia ou Remédios",  text: "Tratamento conservador e não invasivo para diversas condições da coluna." },
  { icon: Activity,    title: "Melhora do Sistema Nervoso", text: "A liberação das subluxações melhora a condução nervosa e o bem-estar geral." },
  { icon: CheckCircle, title: "Prevenção e Manutenção",    text: "Sessões de manutenção previnem recidivas e mantêm a saúde da coluna." },
  { icon: Star,        title: "Profissionais Habilitados",  text: "Quiropraxistas registrados no CFQ e com formação reconhecida internacionalmente." },
];

const conditions = [
  "Dor lombar aguda e crônica", "Cervicalgia (dor no pescoço)", "Hérnia de disco",
  "Ciática", "Dores nos ombros", "Cefaleia e enxaqueca tensional",
  "Má postura", "Artrose cervical", "Dores musculares difusas",
  "Fibromialgia", "Escoliose", "Tensão muscular",
];

const process = [
  { step: "01", title: "Anamnese e Exame",     text: "Avaliação completa incluindo histórico, testes ortopédicos e análise postural." },
  { step: "02", title: "Diagnóstico Quiropráxico", text: "Identificação das subluxações vertebrais que comprometem a função e causam dor." },
  { step: "03", title: "Ajuste Vertebral",     text: "Manipulações precisas e seguras para restaurar o alinhamento e a mobilidade vertebral." },
  { step: "04", title: "Plano de Manutenção", text: "Orientações e frequência de manutenção para manter os resultados a longo prazo." },
];

const testimonials = [
  { name: "Marcos Vinícius", condition: "Ciática",            stars: 5, text: "Sofria com ciática há 2 anos. Após 6 sessões de quiropraxia, consegui eliminar a dor sem precisar de cirurgia. Simplesmente incrível!" },
  { name: "Patrícia Alves",  condition: "Dor cervical",       stars: 5, text: "A dor no pescoço atrapalhava meu trabalho no computador. A quiropraxia trouxe alívio imediato e aprendi a manter a postura correta." },
  { name: "Rodrigo Cunha",   condition: "Hérnia de disco L4-L5", stars: 5, text: "Evitei a cirurgia graças ao tratamento quiropráxico. Profissional extremamente competente e cuidadoso. Recomendo muito!" },
];

const faqs = [
  { question: "O que é a quiropraxia?", answer: "A quiropraxia é uma especialidade de saúde que diagnostica e trata distúrbios do sistema musculoesquelético, especialmente da coluna vertebral. O quiropraxista realiza ajustes manuais para corrigir subluxações vertebrais que comprimem nervos e causam dor e disfunção." },
  { question: "O ajuste quiropráxico é seguro?", answer: "Sim, quando realizado por profissional habilitado. A quiropraxia é reconhecida pelo Conselho Federal de Quiropraxia (CFQ) e pela OMS. Antes do tratamento, realizamos avaliação completa para identificar contraindicações e adaptar as técnicas ao perfil de cada paciente." },
  { question: "Por que há um estalo durante o ajuste?", answer: "O estalo (cavitação) é causado pela liberação de gases nas articulações durante a manipulação. É completamente normal, inofensivo e indica que a articulação foi mobilizada corretamente. Alguns ajustes podem não produzir som algum, o que não interfere na eficácia do tratamento." },
  { question: "Quantas sessões são necessárias?", answer: "O número de sessões varia conforme a condição. Casos agudos geralmente respondem em 4 a 8 sessões. Condições crônicas podem requerer mais tempo, com sessões de manutenção mensal para preservar os resultados." },
  { question: "A quiropraxia tem contraindicações?", answer: "Existem algumas contraindicações, como osteoporose severa, fraturas recentes, instabilidade articular ou tumores na coluna. Por isso, a avaliação inicial é fundamental. Ajustes específicos são adaptados para gestantes, idosos e crianças com técnicas mais suaves." },
  { question: "O atendimento é particular?", answer: "Sim, a Reabilitar é 100% particular. Não trabalhamos com convênios ou planos de saúde. Isso nos permite oferecer quiropraxia sem limitações de sessões ou técnicas. Entre em contato para conhecer os valores e condições de pagamento." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: "Quiropraxia em Juiz de Fora", description: "Ajuste vertebral quiropráxico para alívio de dores na coluna.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function QuiropraxiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-brand-ink text-white py-16 md:py-20">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Profissionais registrados no CFQ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">Quiropraxia em Juiz de Fora</h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Ajuste vertebral preciso e seguro para aliviar dores na coluna, ciática, hérnia de disco e cervicalgia. Tratamento conservador sem cirurgia ou medicamentos.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                Agendar Sessão
              </CtaButton>
              <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                Falar pelo WhatsApp
              </CtaButton>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação gratuita", "Sem medicamentos", "Resultados rápidos"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-brand-primary-light" /> {t}</span>
              ))}
            </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-quiropraxia.jpg" alt="Quiropraxia em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Clínica" },{ v:"Sem Cirurgia", l:"Tratamento Conservador" },{ v:"1ª Sessão", l:"Alívio Relatado" },{ v:"5★", l:"Google" }].map((s) => (
              <div key={s.l}><div className="text-2xl md:text-3xl font-bold text-brand-primary font-heading">{s.v}</div><div className="text-slate-500 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é a Quiropraxia?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                A quiropraxia é uma abordagem terapêutica focada no diagnóstico e tratamento dos distúrbios do sistema musculoesquelético, com ênfase na coluna vertebral. O quiropraxista utiliza técnicas manuais para corrigir subluxações vertebrais.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Quando as vértebras estão desalinhadas, podem comprimir nervos e causar dor, fraqueza e outros sintomas. O ajuste quiropráxico restaura o alinhamento e a função normal da coluna, aliviando a pressão nos nervos e recuperando a mobilidade.
              </p>
              <CtaButton context="Quiropraxia" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Agendar avaliação
              </CtaButton>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-dark font-heading mb-5">Condições tratadas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {conditions.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-brand-mid text-sm">
                    <CheckCircle size={14} className="text-brand-health shrink-0 mt-0.5" /> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Benefícios do tratamento quiropráxico</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-primary-light rounded-xl flex items-center justify-center mb-4"><Icon size={22} className="text-brand-primary" /></div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton context="Quiropraxia"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md">
              Quero esse tratamento
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Sua coluna merece cuidado especializado</h2>
          <p className="text-white/85 mb-6">Agende sua avaliação e descubra se a quiropraxia é indicada para o seu caso.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg">Agendar pelo WhatsApp</CtaButton>
            <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">Falar pelo WhatsApp</CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona o tratamento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{p.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">O que dizem nossos pacientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={17} className="text-brand-star fill-brand-star" />)}</div>
                <p className="text-brand-mid leading-relaxed mb-5 italic text-sm">"{t.text}"</p>
                <div><div className="font-semibold text-brand-dark font-heading text-sm">{t.name}</div><div className="text-xs text-brand-health mt-0.5">{t.condition}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClinicGallery />

      <section className="py-12 bg-brand-primary-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-2">Dê o primeiro passo</p>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-dark mb-6">
            Junte-se a mais de 5.000 pacientes que recuperaram sua saúde
          </h2>
          <CtaButton context="Quiropraxia"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
            Agendar Avaliação Gratuita
          </CtaButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-ink to-brand-ink-light text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Livre-se da dor na coluna sem cirurgia</h2>
          <p className="text-white/85 text-lg mb-8">Nossos quiropraxistas estão prontos para devolver sua qualidade de vida.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">Agendar Avaliação Gratuita</CtaButton>
            <CtaButton context="Quiropraxia" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">Falar pelo WhatsApp</CtaButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span><MapPin size={13} className="inline mr-1" />Rua Batista de Oliveira, 1035 · JF</span>
            <span className="flex items-center gap-1"><Clock size={13} /> Seg–Qui 7h–20h · Sex 7h–19h · Sáb 8h–12h</span>
          </div>
        </div>
      </section>
    </>
  );
}
