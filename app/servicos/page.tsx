import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Home,
  Heart,
  Zap,
  Dumbbell,
  Bone,
  RotateCcw,
  HeartPulse,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços de Fisioterapia em Juiz de Fora | Reabilitar",
  description:
    "Conheça todos os serviços de fisioterapia e reabilitação da Reabilitar em Juiz de Fora: fisioterapia avançada, domiciliar, RPG, pilates, quiropraxia, osteopatia, liberação miofascial e saúde da mulher.",
  keywords: [
    "fisioterapia Juiz de Fora",
    "serviços fisioterapia JF",
    "reabilitação fisioterapia MG",
    "fisioterapia especializada JF",
  ],
  openGraph: {
    title: "Serviços de Fisioterapia | Reabilitar – Juiz de Fora",
    description:
      "8 especialidades em fisioterapia e reabilitação. Tratamentos personalizados para dor, postura, performance e qualidade de vida em Juiz de Fora – MG.",
    type: "website",
  },
};

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Reabilitar.";

const services = [
  {
    slug: "fisioterapia-avancada",
    icon: <Activity className="w-8 h-8" />,
    title: "Fisioterapia Avançada",
    subtitle: "Tratamento especializado da dor e reabilitação",
    desc: "Avaliação biomecânica completa com protocolos modernos para dor crônica, lesões esportivas, reabilitação pós-cirúrgica e neurológica.",
    tags: ["Dor crônica", "Lesão esportiva", "Pós-cirúrgico", "Neurológico"],
    color: "from-blue-600 to-blue-700",
    light: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    slug: "fisioterapia-domiciliar",
    icon: <Home className="w-8 h-8" />,
    title: "Fisioterapia Domiciliar",
    subtitle: "Tratamento no conforto da sua casa",
    desc: "Atendimento especializado em domicílio para pacientes acamados, idosos, pós-cirúrgicos e com dificuldade de locomoção.",
    tags: ["Idosos", "Acamados", "Pós-AVC", "Mobilidade reduzida"],
    color: "from-emerald-600 to-emerald-700",
    light: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    slug: "liberacao-miofascial",
    icon: <Zap className="w-8 h-8" />,
    title: "Liberação Miofascial",
    subtitle: "Alívio de pontos gatilho e tensão muscular",
    desc: "Técnica manual avançada para liberar pontos de tensão na fáscia, tratar dor referida, cefaleia tensional e rigidez muscular.",
    tags: ["Pontos gatilho", "Cefaleia", "Tensão muscular", "Dor referida"],
    color: "from-amber-500 to-yellow-600",
    light: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    slug: "osteopatia",
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Osteopatia",
    subtitle: "Tratamento global do corpo",
    desc: "Abordagem holística que avalia e trata o corpo como um todo — sistemas musculoesquelético, visceral e craniossacral — por meio de técnicas manuais.",
    tags: ["Holístico", "Visceral", "Craniossacral", "ATM"],
    color: "from-red-600 to-red-700",
    light: "bg-red-50 text-red-700 border-red-200",
  },
  {
    slug: "pilates",
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Pilates Clínico",
    subtitle: "Método supervisionado por fisioterapeutas",
    desc: "Pilates terapêutico com supervisão de fisioterapeutas para reabilitação, correção postural, fortalecimento e performance.",
    tags: ["Postura", "Core", "Reabilitação", "Performance"],
    color: "from-purple-600 to-purple-700",
    light: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    slug: "quiropraxia",
    icon: <Bone className="w-8 h-8" />,
    title: "Quiropraxia",
    subtitle: "Ajuste vertebral e alívio rápido da dor",
    desc: "Manipulação vertebral e articular segura para tratar dor lombar, cervical, hérnia de disco e disfunções articulares com resultados imediatos.",
    tags: ["Coluna", "Hérnia de disco", "Cervicalgia", "Lombalgia"],
    color: "from-orange-600 to-orange-700",
    light: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    slug: "rpg",
    icon: <RotateCcw className="w-8 h-8" />,
    title: "RPG",
    subtitle: "Reeducação Postural Global",
    desc: "Método de Philippe Souchard que corrige padrões posturais por meio de posturas globais, tratando escoliose, hipercifose e dores crônicas.",
    tags: ["Postura", "Escoliose", "Hipercifose", "Dor crônica"],
    color: "from-teal-600 to-teal-700",
    light: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    slug: "saude-da-mulher",
    icon: <Heart className="w-8 h-8" />,
    title: "Saúde da Mulher",
    subtitle: "Fisioterapia pélvica especializada",
    desc: "Tratamento de incontinência urinária, assoalho pélvico, pré e pós-parto, menopausa, vaginismo e disfunções sexuais femininas.",
    tags: ["Assoalho pélvico", "Pós-parto", "Incontinência", "Vaginismo"],
    color: "from-pink-600 to-rose-600",
    light: "bg-pink-50 text-pink-700 border-pink-200",
  },
];

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary via-blue-700 to-blue-800 text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Nossas Especialidades
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            8 áreas de atuação para cuidar da sua saúde de forma completa e personalizada.
            Fisioterapeutas especialistas prontos para te atender em Juiz de Fora.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
          >
            <WaIcon />
            Agendar consulta gratuita
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`bg-gradient-to-r ${s.color} p-6 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-heading">{s.title}</h2>
                      <p className="text-white/80 text-sm mt-1">{s.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full border font-medium ${s.light}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all group-hover:text-brand-primary-dark"
                  >
                    Saiba mais e agende
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
              Por que escolher a Reabilitar?
            </h2>
            <p className="text-gray-600 mb-6">
              Somos referência em fisioterapia em Juiz de Fora há mais de 15 anos. Nossa equipe
              multidisciplinar combina experiência clínica com as técnicas mais modernas do mercado.
            </p>
            <ul className="space-y-3">
              {[
                "Fisioterapeutas especialistas com pós-graduação",
                "Avaliação completa em todas as especialidades",
                "Protocolos baseados em evidências científicas",
                "Equipamentos de última geração",
                "Atendimento humanizado e personalizado",
                "Mais de 5.000 pacientes atendidos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-brand-health flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-primary-light rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold text-brand-primary font-heading mb-2">4.9★</div>
            <p className="text-gray-700 mb-6">Avaliação média no Google</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-primary font-heading">15+</div>
                <div className="text-gray-600 text-sm">Anos no mercado</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-primary font-heading">5.000+</div>
                <div className="text-gray-600 text-sm">Pacientes</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-primary font-heading">8</div>
                <div className="text-gray-600 text-sm">Especialidades</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-primary font-heading">15+</div>
                <div className="text-gray-600 text-sm">Especialistas</div>
              </div>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <WaIcon />
              Agendar agora
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Não sabe qual especialidade é a ideal para você?
          </h2>
          <p className="text-gray-300 mb-8">
            Fale com nossa equipe pelo WhatsApp ou telefone. Vamos te ajudar a encontrar o
            tratamento certo para a sua condição sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <WaIcon />
              Falar pelo WhatsApp
            </a>
            <a
              href="tel:+5532984772914"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full transition-all"
            >
              <Phone className="w-5 h-5" />
              (32) 98477-2914
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
