import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import ContatoForm from "./ContatoForm";

export const metadata: Metadata = {
  title: "Contato | Reabilitar – Fisioterapia em Juiz de Fora",
  description:
    "Entre em contato com a Reabilitar. Agende sua avaliação gratuita, tire dúvidas ou encontre nossa clínica. Atendemos de segunda a sexta das 7h às 20h e sábados das 8h às 13h em Juiz de Fora – MG.",
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

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Reabilitar.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.529 5.857L.057 23.886a.5.5 0 0 0 .619.633l6.189-1.638A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.735.988.996-3.648-.235-.374A9.849 9.849 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
  </svg>
);

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary via-blue-700 to-blue-900 text-white py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Entre em contato</h1>
          <p className="text-blue-100 text-lg">
            Agende sua avaliação, tire dúvidas ou conheça nossos serviços. Estamos prontos para te
            atender.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                Como nos encontrar
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600 text-sm">
                      Rua Batista de Oliveira, 1050 – Centro
                      <br />
                      Juiz de Fora – MG, CEP 36010-510
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone / WhatsApp</p>
                    <a
                      href="tel:+5532984772914"
                      className="text-brand-primary font-medium text-sm hover:underline"
                    >
                      (32) 98477-2914
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a
                      href="mailto:contato@reabilitarsaude.com"
                      className="text-brand-primary text-sm hover:underline"
                    >
                      contato@reabilitarsaude.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-brand-primary-light text-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horário de atendimento</p>
                    <p className="text-gray-600 text-sm">
                      Segunda a Sexta: 07h às 20h
                      <br />
                      Sábado: 08h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <WaIcon />
                Atendimento mais rápido pelo WhatsApp
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Para agendamentos e dúvidas urgentes, o WhatsApp é a forma mais rápida de falar com
                nossa equipe. Respondemos em minutos!
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <WaIcon />
                Falar pelo WhatsApp agora
              </a>
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
                  Abrir no Google Maps
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
              Envie uma mensagem
            </h2>
            <ContatoForm />
          </div>
        </div>
      </section>
    </>
  );
}
