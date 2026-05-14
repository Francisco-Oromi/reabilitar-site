import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, Star, Phone, Home, Clock, Heart, Shield, Smile, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Fisioterapia Domiciliar em Juiz de Fora | Atendimento em Casa",
  description:
    "Fisioterapia domiciliar em Juiz de Fora. Equipe preparada para atender no conforto da sua casa. Ideal para idosos e pós-operatório. Agende: (32) 3214-0522.",
  keywords: ["fisioterapia domiciliar juiz de fora", "fisioterapeuta em casa jf", "fisioterapia em domicílio jf", "atendimento domiciliar fisioterapia"],
  openGraph: { title: "Fisioterapia Domiciliar em Juiz de Fora | Reabilitar Wellness", description: "Atendimento especializado no conforto da sua casa.", type: "website", locale: "pt_BR" },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20fisioterapia%20domiciliar.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const benefits = [
  { icon: Home,    title: "Conforto Total",              text: "Tratamento no ambiente que você já conhece, sem estresse de deslocamento." },
  { icon: Shield,  title: "Equipe Equipada",             text: "Fisioterapeutas levam todos os equipamentos necessários para um atendimento completo." },
  { icon: Clock,   title: "Horários Flexíveis",          text: "Agendamento adaptado à sua rotina, inclusive fins de semana conforme disponibilidade." },
  { icon: Heart,   title: "Cuidado Humanizado",          text: "Atendimento personalizado com atenção às suas necessidades específicas no domicílio." },
  { icon: Smile,   title: "Ideal para Idosos",           text: "Maior segurança e comodidade para pacientes com dificuldade de locomoção." },
  { icon: CheckCircle, title: "Continuidade do Tratamento", text: "Manutenção do plano terapêutico sem interrupções por questões de mobilidade." },
];

const conditions = [
  "Pacientes acamados ou com mobilidade reduzida", "Idosos com dificuldade de locomoção",
  "Recuperação pós-operatória", "Pós-AVC (acidente vascular cerebral)",
  "Doenças neurológicas", "Fraturas e imobilizações",
  "Pacientes em home care", "Doenças ortopédicas",
  "Reabilitação cardiorrespiratória", "Cuidados paliativos",
];

const process = [
  { step: "01", title: "Entre em Contato", text: "Ligue ou mande WhatsApp informando sua situação, localização e disponibilidade de horários." },
  { step: "02", title: "Avaliação Domiciliar", text: "O fisioterapeuta vai até sua casa para avaliar o caso e definir o melhor protocolo." },
  { step: "03", title: "Plano de Tratamento", text: "Protocolo personalizado com técnicas e frequência ideal para a sua condição." },
  { step: "04", title: "Sessões em Casa", text: "Atendimentos regulares com acompanhamento de evolução e ajustes conforme necessário." },
];

const testimonials = [
  { name: "Família Costa",     condition: "Idosa pós-AVC",        stars: 5, text: "Nossa mãe não conseguia sair de casa. O atendimento domiciliar da Reabilitar foi essencial para sua recuperação. Cuidadosos e muito competentes!" },
  { name: "Paulo Henrique S.", condition: "Pós-cirurgia de quadril", stars: 5, text: "Após a cirurgia, não tinha como me deslocar à clínica. O fisioterapeuta veio até minha casa e me recuperei com todo conforto e qualidade." },
  { name: "Márcia Oliveira",   condition: "Fratura de tornozelo",  stars: 5, text: "Serviço impecável! O fisioterapeuta é muito atencioso e o tratamento em casa foi muito mais cômodo do que eu esperava." },
];

const faqs = [
  { question: "O que está incluído no atendimento domiciliar?", answer: "O fisioterapeuta leva todos os equipamentos necessários: aparelhos de eletroterapia portáteis, materiais para exercícios, faixas, bolas e demais recursos para um atendimento completo e de qualidade igual à clínica." },
  { question: "Qual é a área de atendimento em Juiz de Fora?", answer: "Atendemos em toda Juiz de Fora e regiões próximas. Entre em contato informando seu bairro para confirmarmos a disponibilidade e o valor do atendimento na sua localidade." },
  { question: "Qual é o valor do atendimento domiciliar?", answer: "O valor pode variar conforme a distância e a frequência do tratamento. Entre em contato para um orçamento personalizado. Também verificamos cobertura dos principais planos de saúde." },
  { question: "Com que frequência são as sessões?", answer: "A frequência é determinada na avaliação inicial e depende da condição clínica. Em geral, são realizadas de 2 a 3 sessões por semana para otimizar os resultados do tratamento." },
  { question: "Vocês atendem pacientes acamados?", answer: "Sim! Nossa equipe está treinada para atender pacientes totalmente acamados, realizando fisioterapia respiratória, motora e preventiva mesmo em situações de imobilidade total." },
  { question: "Precisa ter espaço especial em casa?", answer: "Não é necessário um espaço especial. O fisioterapeuta adapta o atendimento ao ambiente disponível, seja no quarto, sala ou qualquer área confortável da casa." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: "Fisioterapia Domiciliar em Juiz de Fora", description: "Atendimento fisioterapêutico no domicílio em Juiz de Fora.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function FisioterapiaDomiciliarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Atendimento no seu lar · Juiz de Fora
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Fisioterapia Domiciliar em Juiz de Fora
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Tratamento fisioterapêutico especializado no conforto da sua casa. Equipe preparada e equipada para te atender onde você mais precisa.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                <WaIcon /> Solicitar Atendimento em Casa
              </a>
              <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                <Phone size={20} /> (32) 3214-0522
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação no domicílio", "Equipe equipada", "Toda Juiz de Fora"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-300" /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Clínica" },{ v:"5.000+", l:"Pacientes Atendidos" },{ v:"100%", l:"Conforto" },{ v:"4.9⭐", l:"Nota Google" }].map((s) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">Fisioterapia de qualidade sem sair de casa</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                A fisioterapia domiciliar oferece o mesmo padrão de qualidade da clínica, com a comodidade de ser realizada no seu próprio lar. Ideal para quem tem dificuldade de locomoção ou prefere a privacidade do ambiente doméstico.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Nossa equipe de fisioterapeutas vai até você com todos os equipamentos necessários, adaptando o tratamento ao seu espaço e às suas necessidades específicas.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Agendar visita <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-dark font-heading mb-5">Quem pode se beneficiar</h3>
              <div className="space-y-2.5">
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Vantagens do atendimento domiciliar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4"><Icon size={22} className="text-emerald-700" /></div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-12 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Quer receber atendimento em casa?</h2>
          <p className="text-white/85 mb-6">Entre em contato agora e informe seu bairro para verificarmos a disponibilidade.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              <WaIcon /> Solicitar pelo WhatsApp
            </a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">
              📞 (32) 3214-0522
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona o atendimento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading mx-auto mb-4">{p.step}</div>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Tratamento de qualidade onde você estiver</h2>
          <p className="text-white/85 text-lg mb-8">Nossa equipe vai até você com todo o cuidado e profissionalismo que você merece.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
              <WaIcon /> Agendar Atendimento em Casa
            </a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">
              📞 Ligar Agora
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span><MapPin size={13} className="inline mr-1" />Atendemos toda Juiz de Fora - MG</span>
            <span>🕐 Seg–Sáb com agendamento</span>
          </div>
        </div>
      </section>
    </>
  );
}
