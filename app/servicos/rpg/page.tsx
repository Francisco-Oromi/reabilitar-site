import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ClinicGallery from "@/components/ClinicGallery";
import CtaButton from "@/components/CtaButton";
import { CheckCircle, Star, LayoutGrid, Activity, Shield, TrendingUp, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "RPG em Juiz de Fora | Reeducação Postural Global — Reabilitar",
  description:
    "RPG em Juiz de Fora para corrigir postura, tratar escoliose, hérnia de disco e dores crônicas. Reeducação Postural Global com avaliação gratuita. (32) 3214-0522.",
  keywords: ["rpg juiz de fora", "reeducação postural global jf", "rpg fisioterapia jf", "postura juiz de fora", "escoliose jf"],
  openGraph: { title: "RPG em Juiz de Fora | Reabilitar Wellness", description: "Reeducação Postural Global para corrigir postura e tratar dores crônicas.", type: "website", locale: "pt_BR" },
};

const benefits = [
  { icon: LayoutGrid,  title: "Correção Global da Postura", text: "Trabalha as cadeias musculares do corpo inteiro, não apenas a área sintomática." },
  { icon: Activity,    title: "Alívio da Dor Crônica",      text: "Eficaz para dores que não respondem a tratamentos pontuais convencionais." },
  { icon: Shield,      title: "Prevenção de Lesões",        text: "Reorganiza as estruturas corporais para prevenir sobrecargas e lesões futuras." },
  { icon: TrendingUp,  title: "Resultados Duradouros",      text: "Reeducação muscular e postural com mudanças estruturais progressivas e permanentes." },
  { icon: CheckCircle, title: "Adequado para Todas as Idades", text: "Indicado para crianças, adultos e idosos com adaptações para cada faixa etária." },
  { icon: Star,        title: "Método Reconhecido",         text: "Técnica desenvolvida pelo francês Philippe Souchard, com eficácia comprovada mundialmente." },
];

const conditions = [
  "Escoliose", "Hipercifose (corcunda)", "Hiperlordose lombar",
  "Dor lombar crônica", "Hérnia de disco", "Dores no pescoço",
  "Ombros caídos", "Joelhos valgo/varo", "Pés planos ou cavos",
  "Dores nos quadris", "Cefaleia postural", "Tendinites recorrentes",
];

const process = [
  { step: "01", title: "Avaliação Postural Global", text: "Análise completa das cadeias musculares e padrões posturais em diferentes posições." },
  { step: "02", title: "Identificação das Restrições", text: "Mapeamento das cadeias musculares encurtadas que causam as compensações posturais." },
  { step: "03", title: "Posturas Terapêuticas",    text: "Exercícios específicos que estiram as cadeias musculares de forma progressiva e global." },
  { step: "04", title: "Reeducação Permanente",   text: "Consolidação da postura correta com conscientização corporal para mudança duradoura." },
];

const testimonials = [
  { name: "Camila Souza",    condition: "Escoliose",            stars: 5, text: "Tenho escoliose desde a adolescência. O RPG foi o único tratamento que trouxe melhora real na minha postura e no alívio das dores. Recomendo!" },
  { name: "Thiago Martins",  condition: "Hipercifose",           stars: 5, text: "Minha postura melhorou visivelmente em poucos meses de RPG. Minha autoestima e a dor nas costas melhoraram muito!" },
  { name: "Isabela Fonseca", condition: "Dor lombar crônica",    stars: 5, text: "Depois de anos tentando tratar minha lombalgia com outros métodos, o RPG finalmente resolveu o problema. Excelente equipe!" },
];

const faqs = [
  { question: "O que é o RPG (Reeducação Postural Global)?", answer: "O RPG é um método fisioterapêutico criado pelo francês Philippe Souchard que trata o corpo de forma global, trabalhando as cadeias musculares em conjunto. Em vez de tratar apenas o sintoma local, o RPG identifica e corrige as causas posturais que levam à dor e à disfunção." },
  { question: "Qual a diferença entre RPG e fisioterapia convencional?", answer: "Enquanto a fisioterapia convencional geralmente foca na área sintomática, o RPG aborda as cadeias musculares do corpo todo. Um problema no joelho, por exemplo, pode ter origem em uma disfunção da coluna ou quadril — o RPG identifica e trata essa relação global." },
  { question: "Quantas sessões são necessárias?", answer: "O RPG trabalha com mudanças estruturais progressivas, portanto requer um número maior de sessões que tratamentos pontuais. Em geral, são realizadas entre 10 e 20 sessões, com frequência semanal ou quinzenal. O paciente começa a notar melhorias a partir da 3ª ou 4ª sessão." },
  { question: "O RPG é doloroso?", answer: "As posturas do RPG podem gerar sensação de estiramento intenso, mas não dor aguda. O fisioterapeuta regula a intensidade conforme o limite individual de cada paciente. Ao longo das sessões, a amplitude aumenta progressivamente à medida que as cadeias musculares se soltam." },
  { question: "RPG pode tratar escoliose?", answer: "Sim. O RPG é um dos tratamentos mais indicados para escoliose, especialmente em casos funcionais e em adolescentes em fase de crescimento. Reduz compensações, alivia dores e pode impedir o avanço das curvaturas quando detectado precocemente." },
  { question: "Com que idade pode começar o RPG?", answer: "O RPG pode ser realizado em qualquer idade, desde crianças até idosos. Em crianças e adolescentes, é especialmente importante para corrigir desvios posturais durante o crescimento. Em idosos, melhora a mobilidade e previne quedas." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: "RPG - Reeducação Postural Global em Juiz de Fora", description: "Método fisioterapêutico de reeducação postural para correção de desvios e tratamento de dores crônicas.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function RPGPage() {
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
              <Star size={14} className="text-brand-star fill-brand-star" /> Método Philippe Souchard · Desde 2007
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">RPG em Juiz de Fora — Reeducação Postural Global</h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Método global que corrige a postura, alivia dores crônicas e trata escoliose, hipercifose e desvios posturais de forma duradoura. Tratamos a causa, não apenas o sintoma.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CtaButton context="RPG" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                Agendar Avaliação Postural
              </CtaButton>
              <CtaButton context="RPG" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                Falar pelo WhatsApp
              </CtaButton>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação gratuita", "Resultados duradouros", "Para todas as idades"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-brand-primary-light" /> {t}</span>
              ))}
            </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-rpg.jpg" alt="RPG Reeducação Postural Global em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"Global", l:"Abordagem Corporal" },{ v:"15+", l:"Anos Tratando Postura" },{ v:"Duradouro", l:"Resultado" },{ v:"5★", l:"Google" }].map((s) => (
              <div key={s.l}><div className="text-2xl md:text-3xl font-bold text-brand-primary font-heading">{s.v}</div><div className="text-slate-500 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é o RPG?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                O RPG (Reeducação Postural Global) é um método fisioterapêutico criado pelo fisioterapeuta francês Philippe Souchard. Parte do princípio de que músculos, fáscias e articulações formam cadeias musculares interligadas — quando uma parte está em desequilíbrio, todo o sistema é afetado.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Através de posturas terapêuticas mantidas e progressivas, o RPG estica estas cadeias musculares encurtadas, corrigindo a postura de forma global e aliviando dores que têm origem em desequilíbrios posturais.
              </p>
              <CtaButton context="RPG" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Saber mais
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Por que escolher o RPG</h2>
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
            <CtaButton context="RPG"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md">
              Quero esse tratamento
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Corrija sua postura de uma vez por todas</h2>
          <p className="text-white/85 mb-6">Agende sua avaliação postural gratuita e descubra o que o RPG pode fazer por você.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton context="RPG" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg">Agendar pelo WhatsApp</CtaButton>
            <CtaButton context="RPG" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">Falar pelo WhatsApp</CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona o RPG</h2>
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Pacientes que transformaram sua postura</h2>
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
          <CtaButton context="RPG"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
            Agendar Avaliação Gratuita
          </CtaButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes sobre RPG</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-ink to-brand-ink-light text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Sua postura correta começa aqui</h2>
          <p className="text-white/85 text-lg mb-8">Nossa equipe especializada em RPG está pronta para te ajudar.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <CtaButton context="RPG" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">Agendar Avaliação Gratuita</CtaButton>
            <CtaButton context="RPG" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">Falar pelo WhatsApp</CtaButton>
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
