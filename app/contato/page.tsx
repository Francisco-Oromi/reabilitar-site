import type { Metadata } from "next";
import { MapPin, Phone, Clock, ArrowRight, CheckCircle } from "lucide-react";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Contato | Reabilitar – Fisioterapia em Juiz de Fora",
  description:
    "Entre em contato com a Reabilitar. Agende sua avaliação gratuita, tire dúvidas ou encontre nossa clínica. Atendemos de segunda a sexta das 7h às 20h e sábados das 8h às 12h em Juiz de Fora – MG.",
  keywords: [
    "contato Reabilitar Juiz de Fora",
    "agendar fisioterapia JF",
    "telefone Reabilitar",
    "endereço clínica fisioterapia JF",
  ],
  openGraph: {
    title: "Contato | Reabilitar – Fisioterapia Juiz de Fora",
    description: "Agende sua avaliação gratuita. Atendimento de segunda a sábado em Juiz de Fora.",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Fale com a gente</h1>
          <p className="text-white/85 text-lg mb-8">
            A forma mais rápida de agendar sua avaliação gratuita é pelo WhatsApp — respondemos em minutos!
          </p>
          <CtaButton className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mx-auto">
            Agendar avaliação gratuita agora
          </CtaButton>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Como nos encontrar</h2>

            <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Endereço</p>
                <p className="text-slate-600 text-sm">
                  Rua Batista de Oliveira, 1035 – Granbery<br />
                  Juiz de Fora – MG, CEP 36010-540
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Telefone / WhatsApp</p>
                <p className="text-brand-primary font-medium text-sm">(32) 98477-2914</p>
                <p className="text-slate-500 text-xs mt-0.5">(32) 3214-0522</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Horário de atendimento</p>
                <p className="text-slate-600 text-sm">
                  Segunda a Quinta: 7h às 20h<br />
                  Sexta: 7h às 19h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8!2d-43.3485!3d-21.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzU1LjQiUyA0M8KwMjAnNTQuNiJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Reabilitar Juiz de Fora"
              />
              <div className="p-3 text-center">
                <a
                  href="https://maps.google.com/?q=Reabilitar+Fisioterapia+Juiz+de+Fora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Abrir no Google Maps <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA — replaces the old form */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold font-heading text-slate-900">Agende pelo WhatsApp</h2>

            {/* Main CTA card */}
            <div className="bg-gradient-to-br from-brand-wa to-brand-wa-dark rounded-3xl p-8 text-white shadow-xl">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">Resposta em minutos!</h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                Nossa equipe está online agora. Clique abaixo, preencha seus dados e entraremos em contato rapidamente para confirmar sua avaliação gratuita.
              </p>
              <ul className="space-y-2 mb-7">
                {["Avaliação 100% gratuita, sem compromisso", "Respondemos de seg a sáb", "Agenda rápida — sem fila de espera"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                    <CheckCircle size={15} className="text-white shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <CtaButton className="w-full flex items-center justify-center gap-2 bg-white text-brand-wa font-bold py-4 rounded-xl hover:bg-white/90 transition-all text-base shadow-lg">
                Quero agendar agora
              </CtaButton>
            </div>

            {/* Secondary contact options */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold text-slate-800 font-heading mb-4">Outras formas de contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Telefone fixo</p>
                    <p>(32) 3214-0522</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Atendimento presencial</p>
                    <p>Venha nos visitar — sem necessidade de hora marcada para avaliação inicial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-brand-primary text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Pronto para começar sua recuperação?</h2>
          <p className="text-white/80 mb-7">Avaliação gratuita, sem compromisso. Nossa equipe está esperando você.</p>
          <CtaButton className="inline-flex items-center gap-2 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg text-base">
            Agendar minha avaliação gratuita
          </CtaButton>
        </div>
      </section>
    </>
  );
}
