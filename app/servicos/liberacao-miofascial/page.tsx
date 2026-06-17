import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ClinicGallery from "@/components/ClinicGallery";
import CtaButton from "@/components/CtaButton";
import { CheckCircle, Star, Zap, Activity, TrendingUp, Shield, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Liberação Miofascial em Juiz de Fora | Alívio da Dor e Performance",
  description:
    "Liberação miofascial em Juiz de Fora para alívio de pontos gatilho, dor muscular e melhora de performance. Avaliação gratuita. Ligue: (32) 3214-0522.",
  keywords: ["liberação miofascial juiz de fora", "pontos gatilho jf", "liberação miofascial jf", "fisioterapia miofascial juiz de fora"],
  openGraph: { title: "Liberação Miofascial em Juiz de Fora | Reabilitar Wellness", description: "Alívio de pontos gatilho e melhora da performance. Avaliação gratuita.", type: "website", locale: "pt_BR" },
};

const benefits = [
  { icon: Zap,         title: "Alívio Imediato da Dor",      text: "Desbloqueio de pontos gatilho que causam dor referida em diferentes regiões do corpo." },
  { icon: TrendingUp,  title: "Melhora da Performance",      text: "Técnica amplamente usada por atletas para maximizar resultado e recuperação muscular." },
  { icon: Activity,    title: "Flexibilidade Aumentada",     text: "Libera restrições na fáscia, melhorando a amplitude de movimento e mobilidade." },
  { icon: Shield,      title: "Prevenção de Lesões",         text: "Tratamento preventivo que reduz o risco de lesões musculares e articulares." },
  { icon: Clock,       title: "Resultados Rápidos",          text: "Muitos pacientes relatam melhora já nas primeiras sessões de tratamento." },
  { icon: CheckCircle, title: "Técnica Baseada em Evidências", text: "Abordagem cientificamente comprovada com protocolos validados internacionalmente." },
];

const conditions = [
  "Fibromialgia", "Tensão muscular crônica", "Dor pós-treino intensa",
  "Cefaleia tensional", "Dor lombar e cervical", "Síndrome do piriforme",
  "Contratura muscular", "Dor miofascial generalizada", "Tendinites",
  "Cicatrizes e aderências", "Estresse e tensão muscular", "Lesões esportivas",
];

const process = [
  { step: "01", title: "Avaliação dos Pontos Gatilho", text: "Mapeamento completo das áreas de tensão e pontos gatilho ativos no seu corpo." },
  { step: "02", title: "Planejamento da Abordagem",    text: "Seleção das técnicas mais adequadas: pressão manual, ventosa, agulhamento seco ou calor." },
  { step: "03", title: "Aplicação das Técnicas",       text: "Tratamento focado nos pontos gatilho com técnicas de liberação progressiva e precisa." },
  { step: "04", title: "Orientações Pós-Sessão",       text: "Instruções de hidratação, alongamentos e cuidados para potencializar os resultados." },
];

const testimonials = [
  { name: "Felipe Araujo",     condition: "Corredor amador",         stars: 5, text: "Após meses com dor na panturrilha, duas sessões de liberação miofascial resolveram o problema. Minha performance melhorou muito!" },
  { name: "Juliana Ferreira",  condition: "Fibromialgia",             stars: 5, text: "A técnica de liberação miofascial foi a única coisa que trouxe alívio real para minha fibromialgia. Recomendo muito!" },
  { name: "André Gonçalves",   condition: "Tensão cervical",          stars: 5, text: "Trabalhava o dia todo no computador com dor no pescoço. Após as sessões, a tensão desapareceu completamente." },
];

const faqs = [
  { question: "O que é a fáscia e por que ela causa dor?", answer: "A fáscia é uma membrana de tecido conjuntivo que envolve todos os músculos, órgãos e estruturas do corpo. Quando sofre restrições por postura inadequada, estresse ou lesões, cria pontos de tensão (pontos gatilho) que causam dor local e referida em outras regiões." },
  { question: "A liberação miofascial dói?", answer: "A técnica pode gerar um desconforto localizado, semelhante a uma pressão intensa no ponto gatilho. Essa sensação é esperada e indica que o profissional está trabalhando a área correta. A dor é passageira e muitos pacientes relatam alívio imediato após a sessão." },
  { question: "Quantas sessões são necessárias?", answer: "O número varia conforme a condição e a gravidade. Casos agudos geralmente respondem em 3 a 5 sessões. Condições crônicas podem requerer um ciclo mais longo, com manutenção periódica para evitar o retorno dos pontos gatilho." },
  { question: "Qual a diferença entre liberação miofascial e massagem?", answer: "A liberação miofascial é uma técnica clínica específica focada em identificar e tratar pontos gatilho e restrições fasciais. É muito mais direcionada e precisa do que uma massagem relaxante, com objetivo terapêutico de restaurar a função muscular e eliminar a dor." },
  { question: "Quem pode fazer liberação miofascial?", answer: "A técnica é indicada para todas as idades, desde atletas de alto rendimento até idosos com dor crônica. Na avaliação inicial, o fisioterapeuta determina a abordagem mais segura para cada perfil." },
  { question: "O que é o agulhamento seco?", answer: "O agulhamento seco é uma variação da técnica que utiliza agulhas de acupuntura (sem medicamento) inseridas nos pontos gatilho para liberar a tensão muscular. É altamente eficaz para casos refratários à liberação manual e é realizado por fisioterapeutas especializados." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: "Liberação Miofascial em Juiz de Fora", description: "Técnica especializada para alívio de pontos gatilho e tensão muscular.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function LiberacaoMiofascialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-ink text-white py-16 md:py-20">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Técnica avançada · Resultados rápidos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Liberação Miofascial em Juiz de Fora
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Alívio de pontos gatilho, dor muscular crônica e melhora da performance. Técnica avançada realizada por fisioterapeutas especializados.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                Agendar Sessão Agora
              </CtaButton>
              <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                Falar pelo WhatsApp
              </CtaButton>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação gratuita", "Alívio já na 1ª sessão", "Para atletas e não-atletas"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-brand-primary-light" /> {t}</span>
              ))}
            </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-liberacao-miofascial.jpg" alt="Liberação Miofascial em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Experiência" },{ v:"5.000+", l:"Pacientes Atendidos" },{ v:"1ª sessão", l:"Melhoras Relatadas" },{ v:"5★", l:"Nota Google" }].map((s) => (
              <div key={s.l}><div className="text-2xl md:text-3xl font-bold text-brand-primary font-heading">{s.v}</div><div className="text-slate-500 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é a Liberação Miofascial?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                A liberação miofascial é uma técnica fisioterapêutica que trabalha diretamente nos pontos gatilho — nódulos de tensão na fáscia muscular que causam dor local e referida em outras regiões do corpo.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Através de pressão manual precisa, ventosas terapêuticas ou agulhamento seco, nossos fisioterapeutas liberam essas tensões, restaurando a função muscular normal e eliminando a dor de forma duradoura.
              </p>
              <CtaButton context="Liberação Miofascial" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Tirar dúvidas
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

      {/* BENEFITS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Benefícios comprovados</h2>
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
            <CtaButton context="Liberação Miofascial"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md">
              Quero esse tratamento
            </CtaButton>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Chega de conviver com dor muscular!</h2>
          <p className="text-white/85 mb-6">Agende sua sessão e descubra o alívio que a liberação miofascial pode trazer.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              Agendar pelo WhatsApp
            </CtaButton>
            <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">
              Falar pelo WhatsApp
            </CtaButton>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona a sessão</h2>
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

      {/* TESTIMONIALS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Resultados reais de pacientes</h2>
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
          <CtaButton context="Liberação Miofascial"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
            Agendar Avaliação Gratuita
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-ink to-brand-ink-light text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Liberte-se da dor muscular hoje</h2>
          <p className="text-white/85 text-lg mb-8">Nossa equipe especializada está pronta para te ajudar a alcançar alívio duradouro.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
              Agendar Sessão
            </CtaButton>
            <CtaButton context="Liberação Miofascial" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">
              Falar pelo WhatsApp
            </CtaButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span><MapPin size={13} className="inline mr-1" />Rua Batista de Oliveira, 1035 · Granbery · JF</span>
            <span className="flex items-center gap-1"><Clock size={13} /> Seg–Qui 7h–20h · Sex 7h–19h · Sáb 8h–12h</span>
          </div>
        </div>
      </section>
    </>
  );
}
