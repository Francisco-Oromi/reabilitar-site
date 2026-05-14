import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, Star, Phone, Dumbbell, Heart, TrendingUp, Shield, Users, Clock, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Pilates em Juiz de Fora | Método Integrado · Avaliação Gratuita",
  description:
    "Aulas de pilates em Juiz de Fora com método integrado. Turmas pequenas, professores especializados. Planos semanais flexíveis. Avaliação gratuita: (32) 3214-0522.",
  keywords: ["pilates juiz de fora", "aula de pilates jf", "pilates jf", "pilates clínico juiz de fora", "aula de pilates preço jf"],
  openGraph: { title: "Pilates em Juiz de Fora | Reabilitar Wellness", description: "Método Pilates Integrado. Turmas pequenas, professores especializados. Avaliação gratuita.", type: "website", locale: "pt_BR" },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Pilates.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const benefits = [
  { icon: Heart,       title: "Melhora da Postura",          text: "Fortalece a musculatura profunda que sustenta a coluna vertebral." },
  { icon: Dumbbell,    title: "Força e Resistência",         text: "Exercícios progressivos que desenvolvem força funcional em todo o corpo." },
  { icon: TrendingUp,  title: "Flexibilidade",               text: "Movimentos que aumentam a mobilidade articular e a extensibilidade muscular." },
  { icon: Shield,      title: "Alívio de Dores",             text: "Eficaz no tratamento de dor lombar, cervical e dores musculares crônicas." },
  { icon: Users,       title: "Turmas Pequenas",             text: "Grupos reduzidos para garantir atenção individualizada a cada aluno." },
  { icon: Clock,       title: "Horários Flexíveis",          text: "Turmas matutinas, vespertinas e especial de sábado com valores acessíveis." },
];

const conditions = [
  "Dor lombar crônica", "Escoliose", "Má postura", "Gestantes (pilates para gestantes)",
  "Idosos (manutenção da mobilidade)", "Atletas (fortalecimento e prevenção)",
  "Pós-parto", "Osteoporose", "Hérnia de disco", "Estresse e ansiedade",
  "Sedentarismo", "Reabilitação pós-cirúrgica",
];

const process = [
  { step: "01", title: "Avaliação Postural Gratuita", text: "Avaliação individual com identificação de desvios posturais e objetivos pessoais." },
  { step: "02", title: "Indicação da Turma Ideal",    text: "Encaminhamento para a turma mais adequada ao seu nível e disponibilidade." },
  { step: "03", title: "Aulas Progressivas",          text: "Evolução gradual dos exercícios conforme seu progresso e adaptação." },
  { step: "04", title: "Resultados Visíveis",         text: "Melhora de postura, dor e disposição em poucas semanas de prática regular." },
];

const plans = [
  { freq: "1x por semana",  desc: "Ideal para começar e se familiarizar com o método.", tag: "Iniciante" },
  { freq: "2x por semana",  desc: "Frequência recomendada para melhores resultados.", tag: "Recomendado" },
  { freq: "3x por semana",  desc: "Para resultados mais rápidos e transformação completa.", tag: "Intensivo" },
  { freq: "Sábado",         desc: "Opção mais acessível para quem tem agenda cheia.", tag: "Econômico" },
];

const testimonials = [
  { name: "Ana Paula R.",    condition: "Dor lombar",          stars: 5, text: "Comecei o pilates para resolver minha dor nas costas e hoje me sinto outra pessoa. Mais forte, com menos dor e muito mais disposta!" },
  { name: "Renata Magalhães",condition: "Gestante",            stars: 5, text: "O pilates para gestantes foi incrível! Me senti muito mais preparada para o parto e me recuperei rapidamente no pós-parto." },
  { name: "José Carlos F.",  condition: "Escoliose",           stars: 5, text: "Tenho escoliose há anos e o pilates foi o que mais ajudou na melhora da postura e no alívio das dores. Professores excelentes!" },
];

const faqs = [
  { question: "O que é o Pilates Integrado da Reabilitar?", answer: "O Pilates Integrado é nosso método exclusivo que combina o pilates clássico com exercícios funcionais, fisioterapia e técnicas de educação corporal. Isso proporciona resultados mais completos e adaptados às necessidades individuais de cada aluno." },
  { question: "Preciso ter experiência para começar?", answer: "Não! Recebemos alunos de todos os níveis, desde iniciantes absolutos até praticantes avançados. A avaliação inicial define o ponto de partida ideal para cada aluno, garantindo uma progressão segura e eficaz." },
  { question: "O pilates clínico é diferente do pilates fitness?", answer: "Sim. O pilates clínico é realizado por fisioterapeutas e tem foco terapêutico, sendo indicado para reabilitação e tratamento de condições específicas. O pilates fitness é mais voltado para condicionamento geral. Na Reabilitar, integramos ambas as abordagens para resultados completos." },
  { question: "Com que frequência devo praticar?", answer: "Para resultados consistentes, recomendamos no mínimo 2 sessões por semana. Porém, mesmo 1 vez por semana já traz benefícios mensuráveis. Nossos professores avaliarão e indicarão a frequência ideal para seus objetivos." },
  { question: "O pilates é indicado para idosos?", answer: "Absolutamente sim! O pilates é uma das melhores atividades para idosos, melhorando equilíbrio, força, flexibilidade e prevenindo quedas. Adaptamos todos os exercícios à capacidade individual de cada aluno, tornando a prática segura e eficaz em todas as idades." },
  { question: "Quais são os valores das aulas?", answer: "Oferecemos planos flexíveis para 1x, 2x e 3x por semana, além de turmas de sábado com valores mais acessíveis. Todos os planos incluem desconto para pagamento recorrente no cartão. Entre em contato para receber nossa tabela de preços atualizada." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "SportsActivityLocation", name: "Pilates Reabilitar Wellness", description: "Aulas de Pilates Integrado em Juiz de Fora.", provider: { "@type": "MedicalOrganization", name: "Reabilitar Wellness", telephone: "+553232140522" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function PilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" /> Método Integrado Exclusivo · JF
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Pilates em Juiz de Fora — Pilates Integrado
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Método exclusivo que combina pilates clássico com fisioterapia e exercícios funcionais. Turmas pequenas, professores especializados e resultados reais.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                <WaIcon /> Agendar Aula Experimental
              </a>
              <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                <Phone size={20} /> (32) 3214-0522
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {["Avaliação postural gratuita", "Todos os níveis", "Turmas reduzidas"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-purple-300" /> {t}</span>
              ))}
            </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/cover-pilates.jpg" alt="Pilates em Juiz de Fora – Reabilitar Wellness"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v:"15+", l:"Anos de Clínica" },{ v:"Integrado", l:"Método Exclusivo" },{ v:"Turmas", l:"Pequenas e Personalizadas" },{ v:"5★", l:"Google" }].map((s) => (
              <div key={s.l}><div className="text-2xl md:text-3xl font-bold text-brand-primary font-heading">{s.v}</div><div className="text-slate-500 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-5">O que é o Pilates Integrado?</h2>
              <p className="text-brand-mid text-lg leading-relaxed mb-4">
                O Pilates Integrado da Reabilitar Wellness é um método exclusivo que vai além do pilates convencional. Combinamos o pilates clássico de Joseph Pilates com exercícios funcionais, treinamento cardiovascular e técnicas fisioterapêuticas.
              </p>
              <p className="text-brand-mid leading-relaxed mb-6">
                Cada aluno recebe atenção personalizada e um plano de evolução baseado na avaliação postural inicial. Nossas turmas são intencionalmente pequenas para garantir a qualidade e segurança de todos.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Conhecer as turmas <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-dark font-heading mb-5">Indicado para</h3>
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Benefícios do pilates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4"><Icon size={22} className="text-purple-700" /></div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-4 text-center">Planos e frequências</h2>
          <p className="text-brand-mid text-center mb-10">Escolha a frequência ideal para seu objetivo e rotina.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p) => (
              <div key={p.freq} className="border-2 border-slate-200 hover:border-purple-500 rounded-2xl p-6 text-center transition-all group">
                <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{p.tag}</div>
                <div className="text-xl font-bold text-brand-dark font-heading mb-2">{p.freq}</div>
                <p className="text-brand-mid text-sm mb-4">{p.desc}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="text-purple-700 text-sm font-semibold hover:underline">Ver preço →</a>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-mid text-sm mt-6">Todos os planos com desconto para pagamento recorrente no cartão. Consulte-nos!</p>
        </div>
      </section>

      <section className="py-12 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Experimente o pilates na Reabilitar!</h2>
          <p className="text-white/85 mb-6">Avaliação postural gratuita para novos alunos. Vagas limitadas!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg"><WaIcon /> Garantir Minha Vaga</a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">📞 (32) 3214-0522</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Como funciona</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-purple-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-brand-dark font-heading mb-2">{p.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Alunos que transformaram sua saúde</h2>
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
          <h2 className="text-3xl font-bold text-brand-dark font-heading mb-10 text-center">Perguntas frequentes</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Comece agora sua jornada no pilates</h2>
          <p className="text-white/85 text-lg mb-8">Vagas limitadas. Avaliação gratuita para novos alunos!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg"><WaIcon /> Garantir Minha Vaga</a>
            <a href="tel:3232140522" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 font-bold px-8 py-4 rounded-xl transition-all text-lg">📞 Ligar Agora</a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span><MapPin size={13} className="inline mr-1" />Rua Batista de Oliveira, 1035 · JF</span>
            <span>🕐 Seg–Sex: 7h–20h · Sáb: 8h–12h</span>
          </div>
        </div>
      </section>
    </>
  );
}
