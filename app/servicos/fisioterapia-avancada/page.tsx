import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ClinicGallery from "@/components/ClinicGallery";
import { CheckCircle, Star, Phone, Activity, Clock, Award, MapPin, ArrowRight, Shield, Users, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Fisioterapia Avançada em Juiz de Fora | Avaliação Gratuita",
  description:
    "Fisioterapia avançada e manual em Juiz de Fora. Tratamento individualizado com +15 fisioterapeutas especializados. Avalie seu caso sem compromisso. Ligue: (32) 3214-0522.",
  keywords: ["fisioterapia avançada juiz de fora", "fisioterapia manual jf", "clínica fisioterapia jf", "fisioterapeuta especializado juiz de fora"],
  openGraph: {
    title: "Fisioterapia Avançada em Juiz de Fora | Reabilitar Wellness",
    description: "Técnicas manuais avançadas para eliminar sua dor. +15 fisioterapeutas, avaliação gratuita.",
    type: "website", locale: "pt_BR",
  },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20fisioterapia%20avan%C3%A7ada.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const benefits = [
  { icon: Activity,     title: "Técnicas Manuais Avançadas",    text: "Uso das mais modernas técnicas de terapia manual para resultados duradouros e precisos." },
  { icon: Award,        title: "Equipe Especializada",          text: "Mais de 15 fisioterapeutas com pós-graduação e especializações em diversas áreas." },
  { icon: Target,       title: "Protocolo Exclusivo",           text: "Avaliação detalhada e plano de tratamento criado individualmente para o seu caso." },
  { icon: TrendingUp,   title: "Resultados em Poucas Sessões",  text: "Protocolos eficientes que promovem alívio rápido e recuperação duradoura." },
  { icon: Shield,       title: "+5.000 Pacientes Tratados",     text: "Histórico comprovado de recuperações bem-sucedidas em mais de 15 anos de clínica." },
  { icon: MapPin,       title: "Localização Central em JF",     text: "Fácil acesso no Granbery, Juiz de Fora. Estacionamento disponível aos pacientes." },
];

const conditions = [
  "Dor lombar e cervical crônica", "Hérnia de disco", "Tendinites e bursites",
  "Lesões esportivas", "Recuperação pós-cirúrgica", "Artrose e artrite",
  "Ciática e lombalgias", "Dores musculares crônicas", "Epicondilite (cotovelo de tenista)",
  "Síndrome do manguito rotador", "Fascite plantar", "Síndrome do túnel do carpo",
];

const process = [
  { step: "01", title: "Avaliação Gratuita",    text: "Consulta inicial completa com fisioterapeuta para entender seu histórico e queixas sem compromisso." },
  { step: "02", title: "Diagnóstico Preciso",   text: "Identificação da causa raiz — não apenas os sintomas — para um tratamento realmente eficaz." },
  { step: "03", title: "Protocolo Personalizado", text: "Plano de tratamento individualizado com as técnicas mais adequadas para o seu caso." },
  { step: "04", title: "Acompanhamento Contínuo", text: "Monitoramento do seu progresso e ajuste do protocolo conforme sua evolução." },
];

const testimonials = [
  { name: "Maria Fernanda S.", condition: "Hérnia de disco",      stars: 5, text: "Depois de 3 meses de tratamento, eliminei a dor que tinha há anos. A equipe é extremamente profissional e o atendimento é muito personalizado. Recomendo!" },
  { name: "Roberto Lima",      condition: "Pós-cirúrgico de quadril", stars: 5, text: "Me recuperei muito mais rápido do que o esperado depois da cirurgia. Os fisioterapeutas são excelentes e o acompanhamento foi impecável." },
  { name: "Cláudia Mendes",   condition: "Dor cervical crônica",  stars: 5, text: "Após anos sofrendo com dor no pescoço, finalmente encontrei alívio real. A Reabilitar mudou minha qualidade de vida completamente." },
];

const faqs = [
  { question: "O que é fisioterapia avançada?", answer: "A fisioterapia avançada utiliza técnicas manuais especializadas que vão além da convencional, incluindo terapia manual ortopédica, mobilização articular, técnicas neurodinâmicas e outras abordagens baseadas em evidências para tratar as causas profundas da dor." },
  { question: "Quantas sessões vou precisar?", answer: "O número de sessões varia conforme a condição, sua gravidade e histórico de cada paciente. Na avaliação inicial, o fisioterapeuta traçará uma estimativa personalizada. A maioria dos pacientes nota melhoras significativas nas primeiras 4 a 8 sessões." },
  { question: "A fisioterapia avançada tem contraindicações?", answer: "As técnicas são adaptadas para cada perfil de paciente, incluindo idosos, gestantes e pessoas com comorbidades. Durante a avaliação, nosso especialista identificará o protocolo mais seguro e eficaz para o seu caso." },
  { question: "O atendimento é particular?", answer: "Sim, a Reabilitar é 100% particular. Não trabalhamos com convênios ou planos de saúde. Esse modelo nos permite oferecer atendimento altamente personalizado, sem limitações de sessões ou técnicas impostas por operadoras. Entre em contato para conhecer nossos valores e condições de pagamento." },
  { question: "Como funciona a primeira consulta?", answer: "Na avaliação inicial, o fisioterapeuta realiza anamnese completa (histórico clínico), exame físico detalhado e testes funcionais. Com isso, é elaborado um diagnóstico cinético-funcional e um plano de tratamento personalizado." },
  { question: "O tratamento causa dor?", answer: "As técnicas são aplicadas com precisão e de forma confortável. Pode ocorrer um leve desconforto em algumas manobras, mas nunca dor intensa. O bem-estar do paciente é nossa prioridade em todas as etapas." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Fisioterapia Avançada em Juiz de Fora",
  description: "Fisioterapia avançada com técnicas manuais especializadas para tratamento de dores e reabilitação.",
  provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522", address: { "@type": "PostalAddress", streetAddress: "Rua Batista de Oliveira, 1035", addressLocality: "Juiz de Fora", addressRegion: "MG", addressCountry: "BR" } },
};
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function FisioterapiaAvancadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star size={14} className="text-brand-star fill-brand-star" /> 5★ no Google · Clínica desde 2007
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
                Fisioterapia Avançada em Juiz de Fora
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">
                Tratamento manual e individualizado para eliminar sua dor e recuperar sua qualidade de vida. Mais de 15 fisioterapeutas especializados prontos para te ajudar.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                  <WaIcon /> Agendar Avaliação Gratuita
                </a>
                <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                  <Phone size={20} /> (32) 3214-0522
                </a>
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-white/80">
                {["Avaliação gratuita", "Sem lista de espera", "100% particular"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-white" /> {t}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-fisioterapia-avancada.jpg" alt="Fisioterapia Avançada em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Clínica" },{ v:"5.000+", l:"Pacientes Tratados" },{ v:"15+", l:"Especialistas" },{ v:"5★", l:"Nota Google" }].map((s) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é a Fisioterapia Avançada?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                A fisioterapia avançada vai além das técnicas convencionais, utilizando abordagens manuais especializadas e baseadas em evidências científicas para tratar as causas profundas da dor.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Na Reabilitar Wellness, cada paciente passa por uma avaliação minuciosa antes de iniciar o tratamento. Desenvolvemos um protocolo exclusivo que respeita seu histórico, suas queixas e seus objetivos de vida.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Falar com especialista <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-dark font-heading mb-5">Condições que tratamos</h3>
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Benefícios do nosso tratamento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-primary-light rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-primary" />
                </div>
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

      {/* MID CTA */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Pronto para eliminar sua dor?</h2>
          <p className="text-white/85 mb-6">Agende agora sua avaliação gratuita e dê o primeiro passo rumo à sua recuperação.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              <WaIcon /> Agendar pelo WhatsApp
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

      {/* TESTIMONIALS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Histórias de recuperação</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={17} className="text-brand-star fill-brand-star" />)}</div>
                <p className="text-brand-mid leading-relaxed mb-5 italic text-sm">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-brand-dark font-heading text-sm">{t.name}</div>
                  <div className="text-xs text-brand-health mt-0.5">{t.condition}</div>
                </div>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Sua recuperação começa com uma ligação</h2>
          <p className="text-white/85 text-lg mb-8">Não deixe a dor limitar sua vida. Nossos especialistas estão prontos para te ajudar.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg">
              <WaIcon /> Agendar Avaliação Gratuita
            </a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">
              📞 Ligar Agora
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span>📍 Rua Batista de Oliveira, 1035 · Granbery · JF</span>
            <span>🕐 Seg–Qui: 7h–20h · Sex: 7h–19h · Sáb: 8h–12h</span>
          </div>
        </div>
      </section>
    </>
  );
}
