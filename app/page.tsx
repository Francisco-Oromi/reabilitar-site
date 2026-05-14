import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity, Home, Zap, Heart, Dumbbell, RotateCcw, LayoutGrid, Users,
  Star, CheckCircle, Award, Clock, MapPin, Phone, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reabilitar Wellness | Melhor Clínica de Fisioterapia em Juiz de Fora",
  description:
    "A melhor clínica de fisioterapia em Juiz de Fora. Pilates, Osteopatia, RPG, Quiropraxia, Liberação Miofascial e Saúde da Mulher. Mais de 15 anos de experiência. Avaliação gratuita!",
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20na%20Reabilitar%20Wellness.";

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const services = [
  { icon: Activity,   name: "Fisioterapia Avançada",   desc: "Técnicas manuais avançadas para recuperação e alívio da dor.", href: "/servicos/fisioterapia-avancada",   color: "bg-blue-50 text-blue-700" },
  { icon: Home,       name: "Fisioterapia Domiciliar", desc: "Tratamento especializado no conforto da sua casa.",             href: "/servicos/fisioterapia-domiciliar", color: "bg-emerald-50 text-emerald-700" },
  { icon: Zap,        name: "Liberação Miofascial",    desc: "Alívio de pontos gatilho e melhora da mobilidade muscular.",   href: "/servicos/liberacao-miofascial",    color: "bg-yellow-50 text-yellow-700" },
  { icon: Heart,      name: "Osteopatia",              desc: "Tratamento holístico para disfunções musculoesqueléticas.",     href: "/servicos/osteopatia",              color: "bg-red-50 text-red-700" },
  { icon: Dumbbell,   name: "Pilates",                 desc: "Método integrado para força, postura e qualidade de vida.",    href: "/servicos/pilates",                 color: "bg-purple-50 text-purple-700" },
  { icon: RotateCcw,  name: "Quiropraxia",             desc: "Ajuste vertebral para aliviar dores e restaurar a postura.",   href: "/servicos/quiropraxia",             color: "bg-orange-50 text-orange-700" },
  { icon: LayoutGrid, name: "RPG",                     desc: "Reeducação Postural Global para corrigir sua coluna.",         href: "/servicos/rpg",                     color: "bg-teal-50 text-teal-700" },
  { icon: Users,      name: "Saúde da Mulher",         desc: "Fisioterapia pélvica especializada em todas as fases da vida.",href: "/servicos/saude-da-mulher",         color: "bg-pink-50 text-pink-700" },
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
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-16 left-8 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-8 right-8 w-96 h-96 bg-brand-health rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-brand-star fill-brand-star" />
              4.9 no Google · Mais de 500 avaliações
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Fisioterapia de Excelência em{" "}
              <span className="text-brand-star">Juiz de Fora</span>
            </h1>
            <p className="text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              Há mais de 15 anos devolvendo qualidade de vida através de tratamentos personalizados e técnicas avançadas. Avaliação gratuita para novos pacientes.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <WaIcon /> Agendar Avaliação Gratuita
              </a>
              <a href="tel:3232140522"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                <Phone size={20} /> (32) 3214-0522
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/75">
              {["Mais de 15 anos de experiência", "+ 5.000 pacientes atendidos", "15+ fisioterapeutas especializados"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-brand-health" /> {t}
                </span>
              ))}
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
              { value: "4.9 ⭐", label: "Nota no Google" },
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
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1 border border-slate-100">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-brand-dark font-heading mb-2 group-hover:text-brand-primary transition-colors">{s.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-brand-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold font-heading mb-2">Agende sua avaliação gratuita</h3>
              <p className="text-white/75 text-sm mb-6">Sem compromisso. Nossa equipe entra em contato rapidamente.</p>
              <div className="space-y-3 mb-7 text-sm">
                <div className="flex items-start gap-3"><MapPin size={18} className="text-brand-star shrink-0 mt-0.5" /><span>Rua Batista de Oliveira, 1035 · Granbery · Juiz de Fora</span></div>
                <div className="flex items-center gap-3"><Clock size={18} className="text-brand-star shrink-0" /><span>Seg–Qui: 7h–20h · Sex: 7h–19h · Sáb: 8h–12h</span></div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-brand-star shrink-0" /><a href="tel:3232140522" className="hover:text-white/80">(32) 3214-0522</a></div>
              </div>
              <div className="space-y-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark font-bold py-4 rounded-xl transition-all w-full">
                  <WaIcon /> Falar pelo WhatsApp
                </a>
                <a href="tel:3232140522"
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold py-4 rounded-xl transition-all w-full">
                  📞 Ligar: (32) 3214-0522
                </a>
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
            <p className="text-brand-mid text-lg">Mais de 500 avaliações 5 estrelas no Google</p>
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
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-cta font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg">
              <WaIcon /> Agendar pelo WhatsApp
            </a>
            <a href="tel:3232140522"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 font-bold px-8 py-4 rounded-xl transition-all">
              📞 (32) 3214-0522
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
