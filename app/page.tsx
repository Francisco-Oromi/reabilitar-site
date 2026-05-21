import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity, Home, Zap, Heart, Dumbbell, RotateCcw, LayoutGrid, Users,
  Star, CheckCircle, Award, Clock, MapPin, Phone, ArrowRight,
} from "lucide-react";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Reabilitar Wellness | Melhor Clínica de Fisioterapia em Juiz de Fora",
  description:
    "A melhor clínica de fisioterapia em Juiz de Fora. Pilates, Osteopatia, RPG, Quiropraxia, Liberação Miofascial e Saúde da Mulher. Mais de 15 anos de experiência. Avaliação gratuita!",
};


const services = [
  { icon: Activity,   name: "Fisioterapia Avançada",   desc: "Técnicas manuais avançadas para recuperação e alívio da dor.", href: "/servicos/fisioterapia-avancada",   img: "/images/cover-fisioterapia-avancada.jpg" },
  { icon: Home,       name: "Fisioterapia Domiciliar", desc: "Tratamento especializado no conforto da sua casa.",             href: "/servicos/fisioterapia-domiciliar", img: "/images/cover-fisioterapia-domiciliar.jpg" },
  { icon: Zap,        name: "Liberação Miofascial",    desc: "Alívio de pontos gatilho e melhora da mobilidade muscular.",   href: "/servicos/liberacao-miofascial",    img: "/images/cover-liberacao-miofascial.jpg" },
  { icon: Heart,      name: "Osteopatia",              desc: "Tratamento holístico para disfunções musculoesqueléticas.",     href: "/servicos/osteopatia",              img: "/images/cover-osteopatia.jpg" },
  { icon: Dumbbell,   name: "Pilates",                 desc: "Método integrado para força, postura e qualidade de vida.",    href: "/servicos/pilates",                 img: "/images/cover-pilates.jpg" },
  { icon: RotateCcw,  name: "Quiropraxia",             desc: "Ajuste vertebral para aliviar dores e restaurar a postura.",   href: "/servicos/quiropraxia",             img: "/images/cover-quiropraxia.jpg" },
  { icon: LayoutGrid, name: "RPG",                     desc: "Reeducação Postural Global para corrigir sua coluna.",         href: "/servicos/rpg",                     img: "/images/cover-rpg.jpg" },
  { icon: Users,      name: "Saúde da Mulher",         desc: "Fisioterapia pélvica especializada em todas as fases da vida.",href: "/servicos/saude-da-mulher",         img: "/images/cover-saude-da-mulher.jpg" },
];

const whyUs = [
  { icon: Award,       title: "Equipe Altamente Qualificada",   text: "Mais de 15 fisioterapeutas com especializações nas melhores técnicas do mercado." },
  { icon: Activity,    title: "Tratamento 100% Personalizado",  text: "Cada paciente recebe um protocolo exclusivo baseado em avaliação detalhada." },
  { icon: CheckCircle, title: "Resultados Comprovados",         text: "Mais de 5.000 pacientes atendidos com alta taxa de satisfação e recuperação." },
  { icon: Clock,       title: "Horários Flexíveis",             text: "Segunda a sábado, manhã e tarde. Atendemos também no domicílio quando necessário." },
];

const testimonials = [
  { name: "Maria Fernanda S.", condition: "Hérnia de disco",        stars: 5, text: "Depois de 3 meses de tratamento, eliminei a dor que tinha há anos. Equipe extremamente profissional e com atendimento personalizado. Recomendo muito!" },
  { name: "Carlos Alberto M.", condition: "Pós-cirúrgico de joelho", stars: 5, text: "Me recuperei muito mais rápido do que o esperado após a cirurgia. Os fisioterapeutas são excelentes e o acompanhamento foi impecável." },
  { name: "Ana Lucia P.",      condition: "Pilates e postura",       stars: 5, text: "Comecei o pilates para dor nas costas e hoje me sinto muito mais forte e disposta. Melhor investimento que fiz na minha saúde!" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-16 left-8 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-8 right-8 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16 md:py-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star size={14} className="text-brand-star fill-brand-star" />
                5★ no Google · Mais de 500 avaliações
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                Fisioterapia de Excelência em{" "}
                <span className="text-brand-star">Juiz de Fora</span>
              </h1>
              <p className="text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
                Há mais de 15 anos devolvendo qualidade de vida através de tratamentos personalizados e técnicas avançadas. Avaliação gratuita para novos pacientes.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <CtaButton className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Agendar Avaliação Gratuita
                </CtaButton>
                <CtaButton className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                  Falar pelo WhatsApp
                </CtaButton>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/75">
                {["Mais de 15 anos de experiência", "+ 5.000 pacientes atendidos", "15+ fisioterapeutas especializados"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={15} className="text-white" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="/images/clinica-01.webp"
                alt="Fisioterapia Reabilitar Wellness – Juiz de Fora"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-brand-primary rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold font-heading">5 ★</div>
                <div className="text-slate-500 text-xs">+500 avaliações Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15+",    label: "Anos de Experiência" },
              { value: "5.000+", label: "Pacientes Atendidos" },
              { value: "15+",    label: "Fisioterapeutas" },
              { value: "5 ★", label: "Nota no Google" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary font-heading">{s.value}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-4">Nossos Serviços</h2>
            <p className="text-brand-mid text-lg max-w-2xl mx-auto">
              Tratamentos especializados para cada necessidade, com equipe altamente qualificada e infraestrutura moderna.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1 border border-slate-100">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center text-white shadow">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-dark font-heading mb-1.5 group-hover:text-brand-primary transition-colors">{s.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-brand-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-6">
                Por que escolher a <span className="text-brand-primary">Reabilitar Wellness?</span>
              </h2>
              <p className="text-brand-mid text-lg mb-8">
                Desde 2007, somos referência em fisioterapia em Juiz de Fora. Nossa abordagem vai além do sintoma — tratamos a causa raiz para resultados duradouros.
              </p>
              <div className="space-y-5">
                {whyUs.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 bg-brand-primary-light rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark font-heading">{title}</h3>
                      <p className="text-brand-mid text-sm mt-0.5 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/clinica-02.webp" alt="Clínica Reabilitar Juiz de Fora" className="rounded-2xl h-48 w-full object-cover shadow-md" />
                <img src="/images/clinica-03.webp" alt="Fisioterapia Reabilitar JF" className="rounded-2xl h-48 w-full object-cover shadow-md" />
              </div>
              <img src="/images/clinica-04.webp" alt="Consultório fisioterapia Juiz de Fora" className="rounded-2xl h-44 w-full object-cover shadow-md" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-3xl p-8 md:p-10 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2">Agende sua avaliação gratuita</h3>
                <p className="text-white/75 text-sm mb-6">Sem compromisso. Nossa equipe entra em contato rapidamente.</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3"><MapPin size={18} className="text-brand-star shrink-0 mt-0.5" /><span>Rua Batista de Oliveira, 1035 · Granbery · Juiz de Fora</span></div>
                  <div className="flex items-center gap-3"><Clock size={18} className="text-brand-star shrink-0" /><span>Seg–Qui: 7h–20h · Sex: 7h–19h · Sáb: 8h–12h</span></div>
                  <div className="flex items-center gap-3"><Phone size={18} className="text-brand-star shrink-0" /><span>(32) 3214-0522 · (32) 98477-2914</span></div>
                </div>
              </div>
              <div className="space-y-3">
                <CtaButton className="flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold py-4 rounded-xl transition-all w-full">
                  Agendar Avaliação Gratuita
                </CtaButton>
                <CtaButton className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold py-4 rounded-xl transition-all w-full">
                  Falar pelo WhatsApp
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading mb-4">O que nossos pacientes dizem</h2>
            <p className="text-brand-mid text-lg">Mais de 500 avaliações 5 estrelas no Google — 100% particular</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={17} className="text-brand-star fill-brand-star" />
                  ))}
                </div>
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

      {/* FOR COMPANIES */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Soluções de saúde para empresas</h2>
              <p className="text-slate-300 max-w-xl">Programas de saúde corporativa com ginástica laboral, palestras, ergonomia e muito mais. Reduza o absenteísmo e aumente a produtividade.</p>
            </div>
            <Link href="/para-empresa"
              className="whitespace-nowrap flex items-center gap-2 bg-brand-cta hover:bg-brand-cta-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shrink-0">
              Saiba mais <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-brand-cta text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Comece hoje mesmo sua recuperação</h2>
          <p className="text-white/90 text-lg mb-8">Avaliação gratuita, sem compromisso. Nossa equipe está pronta para te ajudar a viver sem dor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton className="flex items-center gap-2 bg-white text-brand-cta font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg">
              Agendar pelo WhatsApp
            </CtaButton>
            <CtaButton className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Falar pelo WhatsApp
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
