import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ClinicGallery from "@/components/ClinicGallery";
import { CheckCircle, Star, Heart, Activity, Shield, Smile, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Osteopatia em Juiz de Fora | Tratamento Holístico para Dores",
  description:
    "Osteopatia em Juiz de Fora para dores na coluna, articulações, cefaleia e muito mais. Tratamento manual holístico com avaliação gratuita. Ligue: (32) 3214-0522.",
  keywords: ["osteopatia juiz de fora", "osteopata jf", "osteopatia jf", "tratamento osteopático juiz de fora"],
  openGraph: { title: "Osteopatia em Juiz de Fora | Reabilitar Wellness", description: "Tratamento holístico para dores e disfunções. Avaliação gratuita.", type: "website", locale: "pt_BR" },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20osteopatia.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const benefits = [
  { icon: Heart,       title: "Abordagem Global do Corpo",  text: "Trata o corpo como um sistema integrado, não apenas o sintoma isolado." },
  { icon: Shield,      title: "Sem Medicamentos",           text: "Tratamento 100% manual, ideal para quem busca alternativas aos remédios." },
  { icon: Activity,    title: "Amplo Espectro de Ação",    text: "Eficaz para dores musculoesqueléticas, viscerais e craniossacrais." },
  { icon: Smile,       title: "Para Todas as Idades",      text: "Indicado desde bebês com cólicas até idosos com dores crônicas." },
  { icon: CheckCircle, title: "Prevenção de Recidivas",    text: "Trata causas estruturais para evitar que o problema retorne." },
  { icon: MapPin,      title: "Localização Central",       text: "Clínica no Granbery com fácil acesso para toda a região de JF." },
];

const conditions = [
  "Dor lombar e cervical", "Hérnia de disco", "Cefaleia e enxaqueca",
  "ATM (disfunção têmporo-mandibular)", "Sinusite e rinite", "Cólica em bebês",
  "Disfunções viscerais", "Dores após acidentes", "Escoliose",
  "Problemas digestivos", "Estresse e tensão", "Lesões esportivas",
];

const process = [
  { step: "01", title: "Anamnese Completa",   text: "Histórico clínico detalhado para entender a origem das suas queixas." },
  { step: "02", title: "Exame Osteopático",   text: "Avaliação manual do sistema musculoesquelético, visceral e craniossacral." },
  { step: "03", title: "Tratamento Manual",   text: "Técnicas osteopáticas específicas para restaurar o equilíbrio estrutural e funcional." },
  { step: "04", title: "Acompanhamento",      text: "Monitoramento da evolução e ajuste do protocolo conforme necessário." },
];

const testimonials = [
  { name: "Beatriz Santos",  condition: "Cefaleia crônica",      stars: 5, text: "Tinha crises de dor de cabeça toda semana há anos. Após 4 sessões de osteopatia, as crises reduziram drasticamente. Vida transformada!" },
  { name: "Lucas Moreira",   condition: "Hérnia de disco",        stars: 5, text: "A osteopatia foi o tratamento que finalmente resolveu minha hérnia de disco sem cirurgia. Profissional excelente e muito atencioso." },
  { name: "Sandra Pereira",  condition: "Disfunção da ATM",       stars: 5, text: "Sofria com dor na mandíbula há 2 anos. O tratamento osteopático resolveu a causa raiz do problema. Recomendo demais!" },
];

const faqs = [
  { question: "O que é osteopatia?", answer: "A osteopatia é um sistema de diagnóstico e tratamento manual que considera o corpo como uma unidade funcional. O osteopata trabalha sobre os tecidos moles, articulações e estruturas viscerais para restaurar o equilíbrio e a função normal do organismo, eliminando a causa raiz das disfunções." },
  { question: "A osteopatia é segura?", answer: "Sim. A osteopatia é uma prática reconhecida internacionalmente e regulamentada pelo Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO) no Brasil. As técnicas são adaptadas para cada paciente, respeitando contraindicações e o estado clínico individual." },
  { question: "Quantas sessões são necessárias?", answer: "O número varia conforme a condição e o tempo de evolução. Casos agudos geralmente respondem em 2 a 4 sessões. Condições crônicas podem requerer entre 6 e 10 sessões com manutenção periódica." },
  { question: "Osteopatia pode substituir a cirurgia?", answer: "Em muitos casos de hérnia de disco, disfunções articulares e outras condições, a osteopatia pode evitar procedimentos cirúrgicos. No entanto, cada caso é único. O osteopata avaliará se a condição é passível de tratamento conservador ou se é necessário encaminhamento médico." },
  { question: "Qual a diferença entre osteopatia e quiropraxia?", answer: "Ambas são terapias manuais, mas diferem em abordagem. A quiropraxia foca principalmente nas subluxações vertebrais e sistema nervoso. A osteopatia tem uma abordagem mais global, incluindo além das articulações, os tecidos moles, órgãos internos e sistema craniossacral." },
  { question: "A osteopatia pode tratar bebês?", answer: "Sim! A osteopatia pediátrica é indicada para cólicas, choro excessivo, dificuldade para amamentar, plagiocefalia e outros problemas do desenvolvimento. As técnicas em bebês são extremamente suaves e seguras." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: "Osteopatia em Juiz de Fora", description: "Tratamento osteopático manual para dores e disfunções musculoesqueléticas.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function OsteopatiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Tratamento holístico · Desde 2007
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">Osteopatia em Juiz de Fora</h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Tratamento manual holístico que considera o corpo como um todo. Eficaz para dores na coluna, cefaleia, ATM, problemas viscerais e muito mais.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                <WaIcon /> Agendar Avaliação Gratuita
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                <WaIcon /> Falar pelo WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação gratuita", "Sem medicamentos", "Para todas as idades"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-red-300" /> {t}</span>
              ))}
            </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-osteopatia.jpg" alt="Osteopatia em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Clínica" },{ v:"5.000+", l:"Pacientes" },{ v:"Global", l:"Abordagem" },{ v:"5★", l:"Google" }].map((s) => (
              <div key={s.l}><div className="text-2xl md:text-3xl font-bold text-brand-primary font-heading">{s.v}</div><div className="text-slate-500 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é a Osteopatia?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                A osteopatia é uma filosofia e sistema de saúde que reconhece a relação entre estrutura e função no corpo humano. O osteopata utiliza técnicas manuais para restaurar a mobilidade e o equilíbrio das estruturas do corpo.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Na Reabilitar Wellness, nossos osteopatas avaliam o sistema musculoesquelético, visceral e craniossacral de forma integrada, identificando restrições que podem estar causando dor, disfunção ou limitação funcional.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Falar com especialista <ArrowRight size={16} />
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Benefícios da osteopatia</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4"><Icon size={22} className="text-red-700" /></div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md">
              <WaIcon /> Quero esse tratamento
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Trate a causa, não só o sintoma</h2>
          <p className="text-white/85 mb-6">Agende sua avaliação osteopática gratuita e descubra como podemos te ajudar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg"><WaIcon /> Agendar pelo WhatsApp</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all"><WaIcon /> Falar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona o tratamento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-red-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{p.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Resultados que transformam vidas</h2>
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
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
            <WaIcon /> Agendar Avaliação Gratuita
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Seu corpo em equilíbrio começa aqui</h2>
          <p className="text-white/85 text-lg mb-8">Dê o primeiro passo para uma vida sem dor com a osteopatia na Reabilitar Wellness.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg"><WaIcon /> Agendar Avaliação Gratuita</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg"><WaIcon /> Falar pelo WhatsApp</a>
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
