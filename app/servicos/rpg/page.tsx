import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, Star, Phone, LayoutGrid, Activity, Shield, TrendingUp, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "RPG em Juiz de Fora | Reeducação Postural Global — Reabilitar",
  description:
    "RPG em Juiz de Fora para corrigir postura, tratar escoliose, hérnia de disco e dores crônicas. Reeducação Postural Global com avaliação gratuita. (32) 3214-0522.",
  keywords: ["rpg juiz de fora", "reeducação postural global jf", "rpg fisioterapia jf", "postura juiz de fora", "escoliose jf"],
  openGraph: { title: "RPG em Juiz de Fora | Reabilitar Wellness", description: "Reeducação Postural Global para corrigir postura e tratar dores crônicas.", type: "website", locale: "pt_BR" },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20RPG.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Método Philippe Souchard · Desde 2007
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">RPG em Juiz de Fora — Reeducação Postural Global</h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Método global que corrige a postura, alivia dores crônicas e trata escoliose, hipercifose e desvios posturais de forma duradoura. Tratamos a causa, não apenas o sintoma.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                <WaIcon /> Agendar Avaliação Postural
              </a>
              <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                <Phone size={20} /> (32) 3214-0522
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação gratuita", "Resultados duradouros", "Para todas as idades"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-teal-300" /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"Global", l:"Abordagem Corporal" },{ v:"15+", l:"Anos Tratando Postura" },{ v:"Duradouro", l:"Resultado" },{ v:"4.9⭐", l:"Google" }].map((s) => (
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
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Saber mais <ArrowRight size={16} />
              </a>
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
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4"><Icon size={22} className="text-teal-700" /></div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Corrija sua postura de uma vez por todas</h2>
          <p className="text-white/85 mb-6">Agende sua avaliação postural gratuita e descubra o que o RPG pode fazer por você.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg"><WaIcon /> Agendar pelo WhatsApp</a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">📞 (32) 3214-0522</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona o RPG</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-teal-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading mx-auto mb-4">{p.step}</div>
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

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes sobre RPG</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Sua postura correta começa aqui</h2>
          <p className="text-white/85 text-lg mb-8">Nossa equipe especializada em RPG está pronta para te ajudar.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg"><WaIcon /> Agendar Avaliação Gratuita</a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">📞 Ligar Agora</a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span><MapPin size={13} className="inline mr-1" />Rua Batista de Oliveira, 1035 · JF</span>
            <span>🕐 Seg–Qui: 7h–20h · Sex: 7h–19h · Sáb: 8h–12h</span>
          </div>
        </div>
      </section>
    </>
  );
}
