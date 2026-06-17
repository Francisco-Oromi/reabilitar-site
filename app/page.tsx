import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity, Home, Zap, Heart, Dumbbell, RotateCcw, LayoutGrid, Users,
  Star, CheckCircle, Award, Clock, MapPin, Phone, ArrowRight, ArrowUpRight,
} from "lucide-react";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Reabilitar Wellness | Clínica de Fisioterapia em Juiz de Fora",
  description:
    "Clínica de fisioterapia em Juiz de Fora há mais de 15 anos. Pilates, Osteopatia, RPG, Quiropraxia, Liberação Miofascial e Saúde da Mulher. Avaliação inicial gratuita.",
};

const services = [
  { icon: Activity,   name: "Fisioterapia Avançada",   desc: "Técnicas manuais avançadas para recuperação e alívio da dor.",        href: "/servicos/fisioterapia-avancada",   img: "/images/cover-fisioterapia-avancada.jpg" },
  { icon: Home,       name: "Fisioterapia Domiciliar", desc: "Tratamento especializado no conforto da sua casa.",                   href: "/servicos/fisioterapia-domiciliar", img: "/images/cover-fisioterapia-domiciliar.jpg" },
  { icon: Zap,        name: "Liberação Miofascial",    desc: "Alívio de pontos de tensão e melhora da mobilidade muscular.",        href: "/servicos/liberacao-miofascial",    img: "/images/cover-liberacao-miofascial.jpg" },
  { icon: Heart,      name: "Osteopatia",              desc: "Abordagem global para disfunções musculoesqueléticas.",              href: "/servicos/osteopatia",              img: "/images/cover-osteopatia.jpg" },
  { icon: Dumbbell,   name: "Pilates",                 desc: "Método integrado para força, postura e qualidade de vida.",           href: "/servicos/pilates",                 img: "/images/cover-pilates.jpg" },
  { icon: RotateCcw,  name: "Quiropraxia",             desc: "Ajuste vertebral para aliviar dores e restaurar a postura.",          href: "/servicos/quiropraxia",             img: "/images/cover-quiropraxia.jpg" },
  { icon: LayoutGrid, name: "RPG",                     desc: "Reeducação Postural Global para corrigir padrões da coluna.",         href: "/servicos/rpg",                     img: "/images/cover-rpg.jpg" },
  { icon: Users,      name: "Saúde da Mulher",         desc: "Fisioterapia pélvica especializada em todas as fases da vida.",       href: "/servicos/saude-da-mulher",         img: "/images/cover-saude-da-mulher.jpg" },
];

const whyUs = [
  { icon: Award,       title: "Equipe especializada",        text: "Fisioterapeutas com pós-graduação nas principais técnicas de reabilitação." },
  { icon: Activity,    title: "Tratamento individualizado",  text: "Cada paciente recebe um protocolo próprio, definido a partir de uma avaliação detalhada." },
  { icon: CheckCircle, title: "Foco em resultado",           text: "Tratamos a causa da dor, não apenas o sintoma — para uma recuperação que se sustenta." },
  { icon: Clock,       title: "Horários flexíveis",          text: "De segunda a sábado, manhã e tarde. Atendimento domiciliar quando necessário." },
];

const testimonials = [
  { name: "Maria Fernanda S.", condition: "Hérnia de disco",        text: "Depois de três meses de tratamento, voltei a viver sem a dor que me acompanhava há anos. Atendimento atencioso do começo ao fim." },
  { name: "Carlos Alberto M.", condition: "Pós-cirúrgico de joelho", text: "Me recuperei mais rápido do que eu esperava depois da cirurgia. O acompanhamento foi cuidadoso em cada etapa." },
  { name: "Ana Lúcia P.",      condition: "Pilates e postura",       text: "Comecei o pilates por causa da dor nas costas e hoje me sinto mais forte e disposta. Fez diferença na minha rotina." },
];

const PHONE_TEL = "+553232140522";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0 hero-grain opacity-70" />
        <div
          className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #2f9488 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-16 md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 mb-7">
                <Star size={14} className="text-brand-star fill-brand-star" />
                Nota 5,0 no Google · Granbery, Juiz de Fora
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] mb-6">
                Recuperar o movimento{" "}
                <span className="italic text-brand-primary-light">sem dor</span>{" "}
                começa com o cuidado certo.
              </h1>
              <p className="text-lg text-white/70 mb-9 max-w-xl leading-relaxed">
                Há mais de 15 anos cuidando da saúde de quem é de Juiz de Fora, com
                fisioterapia personalizada e uma equipe que acompanha cada etapa da sua
                recuperação. A avaliação inicial é gratuita.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <CtaButton className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-semibold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-emerald-900/30">
                  Agendar avaliação gratuita
                </CtaButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-2 py-2 transition-colors"
                >
                  <Phone size={17} /> (32) 3214-0522
                </a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55 border-t border-white/10 pt-6">
                {["15 anos de clínica", "+5.000 pacientes atendidos", "Equipe pós-graduada"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-brand-primary-light" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="/images/clinica-01.webp"
                alt="Clínica de fisioterapia Reabilitar Wellness em Juiz de Fora"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white text-brand-dark rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                <div className="font-heading text-3xl font-semibold text-brand-primary">5,0</div>
                <div className="leading-tight">
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="text-brand-star fill-brand-star" />
                    ))}
                  </div>
                  <div className="text-slate-500 text-xs">avaliações no Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15", suffix: " anos", label: "de clínica em Juiz de Fora" },
              { value: "5.000", suffix: "+", label: "pacientes atendidos" },
              { value: "8", suffix: "", label: "especialidades" },
              { value: "5,0", suffix: "", label: "de nota no Google" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark">
                  {s.value}<span className="text-brand-primary">{s.suffix}</span>
                </div>
                <div className="text-slate-500 text-sm mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary font-semibold text-sm tracking-wide uppercase mb-3">Especialidades</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
              Um tratamento para cada necessidade
            </h2>
            <p className="text-brand-mid text-lg leading-relaxed">
              Da dor aguda à reabilitação completa, reunimos as principais áreas da
              fisioterapia em um só lugar — com a mesma equipe acompanhando você.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-brand-ink/5 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-brand-primary">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-brand-dark text-lg mb-1.5 group-hover:text-brand-primary transition-colors">{s.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-brand-primary text-sm font-semibold inline-flex items-center gap-1">
                      Saiba mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/clinica-02.webp" alt="Estrutura da clínica Reabilitar em Juiz de Fora" className="rounded-2xl h-52 w-full object-cover" />
                <img src="/images/clinica-03.webp" alt="Sala de atendimento da Reabilitar" className="rounded-2xl h-52 w-full object-cover mt-8" />
              </div>
              <img src="/images/clinica-04.webp" alt="Espaço de fisioterapia da Reabilitar em Juiz de Fora" className="rounded-2xl h-44 w-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-brand-primary font-semibold text-sm tracking-wide uppercase mb-3">Por que a Reabilitar</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-5 leading-tight">
                Referência em fisioterapia em Juiz de Fora desde 2009
              </h2>
              <p className="text-brand-mid text-lg mb-8 leading-relaxed">
                Nossa abordagem vai além de aliviar o sintoma do dia. Investigamos a origem da
                sua dor para construir um tratamento que devolve qualidade de vida de verdade.
              </p>
              <div className="space-y-6">
                {whyUs.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 bg-brand-primary-light rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-brand-dark text-lg">{title}</h3>
                      <p className="text-brand-mid text-sm mt-1 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BANNER */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-ink rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 hero-grain opacity-60" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-3">Agende sua avaliação gratuita</h3>
                <p className="text-white/65 mb-7 leading-relaxed">Sem compromisso. Conte o que está sentindo e nossa equipe responde rapidamente pelo WhatsApp.</p>
                <div className="space-y-3.5 text-sm text-white/80">
                  <div className="flex items-start gap-3"><MapPin size={18} className="text-brand-primary-light shrink-0 mt-0.5" /><span>Rua Batista de Oliveira, 1035 · Granbery · Juiz de Fora</span></div>
                  <div className="flex items-center gap-3"><Clock size={18} className="text-brand-primary-light shrink-0" /><span>Seg a Qui 7h–20h · Sex 7h–19h · Sáb 8h–12h</span></div>
                  <div className="flex items-center gap-3"><Phone size={18} className="text-brand-primary-light shrink-0" /><span>(32) 3214-0522 · (32) 98477-2914</span></div>
                </div>
              </div>
              <div className="md:pl-6">
                <CtaButton className="flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-semibold py-4 rounded-xl transition-colors w-full shadow-lg shadow-emerald-900/30">
                  Falar com a clínica no WhatsApp
                </CtaButton>
                <p className="text-center text-white/45 text-xs mt-4">Resposta em poucos minutos no horário de atendimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary font-semibold text-sm tracking-wide uppercase mb-3">Histórias reais</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
              O que dizem nossos pacientes
            </h2>
            <p className="text-brand-mid text-lg">Centenas de avaliações cinco estrelas no Google.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-white rounded-2xl p-7 border border-slate-100 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-brand-star fill-brand-star" />
                  ))}
                </div>
                <blockquote className="font-heading text-brand-dark text-lg leading-relaxed mb-6 flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-xs text-brand-mid mt-0.5">{t.condition}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOR COMPANIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-brand-primary font-semibold text-sm tracking-wide uppercase mb-3">Para empresas</p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-dark mb-3">Saúde corporativa que reduz afastamentos</h2>
              <p className="text-brand-mid max-w-xl leading-relaxed">Ginástica laboral, palestras, ergonomia e SIPAT. Programas sob medida para diminuir o absenteísmo e cuidar da sua equipe.</p>
            </div>
            <Link href="/para-empresa"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-ink-light text-white font-semibold px-7 py-4 rounded-xl transition-colors shrink-0">
              Conhecer programas <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 leading-tight">Comece hoje sua recuperação</h2>
          <p className="text-white/85 text-lg mb-9">Avaliação inicial gratuita, sem compromisso. Conte com uma equipe que cuida de você do diagnóstico à alta.</p>
          <CtaButton className="inline-flex items-center gap-2 bg-white text-brand-primary-dark font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-lg">
            Agendar pelo WhatsApp
          </CtaButton>
        </div>
      </section>
    </>
  );
}
