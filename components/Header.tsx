"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MapPin, Clock } from "lucide-react";
import { useLeadForm } from "./LeadFormModal";

const services = [
  { name: "Fisioterapia Avançada",   href: "/servicos/fisioterapia-avancada" },
  { name: "Fisioterapia Domiciliar", href: "/servicos/fisioterapia-domiciliar" },
  { name: "Liberação Miofascial",    href: "/servicos/liberacao-miofascial" },
  { name: "Osteopatia",              href: "/servicos/osteopatia" },
  { name: "Pilates",                 href: "/servicos/pilates" },
  { name: "Quiropraxia",             href: "/servicos/quiropraxia" },
  { name: "RPG",                     href: "/servicos/rpg" },
  { name: "Saúde da Mulher",         href: "/servicos/saude-da-mulher" },
];

const WA = "https://wa.me/5532984772914?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita.";

const WaIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Header() {
  const [open, setOpen]           = useState(false);
  const [servOpen, setServOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const { openLeadForm }          = useLeadForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? "shadow-[0_2px_20px_rgba(17,46,42,0.08)]" : "border-b border-slate-100"}`}>
      {/* Top bar */}
      <div className="bg-brand-ink text-white/75 text-xs py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-brand-primary-light" /> Rua Batista de Oliveira, 1035 · Granbery · Juiz de Fora - MG
          </span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-primary-light" /> Seg–Qui 7h–20h · Sex 7h–19h · Sáb 8h–12h
            </span>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white hover:text-brand-primary-light transition-colors font-medium">
              <WaIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" aria-label="Reabilitar Wellness — página inicial">
            <img src="/images/logo.png" alt="Reabilitar Wellness – Fisioterapia em Juiz de Fora" className="h-11 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <Link href="/" className="text-slate-600 hover:text-brand-primary transition-colors">Início</Link>
            <Link href="/empresa" className="text-slate-600 hover:text-brand-primary transition-colors">Quem Somos</Link>

            <div className="relative" onMouseEnter={() => setServOpen(true)} onMouseLeave={() => setServOpen(false)}>
              <button className="flex items-center gap-1 text-slate-600 hover:text-brand-primary transition-colors">
                Serviços <ChevronDown size={13} className={`transition-transform ${servOpen ? "rotate-180" : ""}`} />
              </button>
              {servOpen && (
                <div className="absolute top-full left-0 w-60 pt-2">
                  <div className="bg-white shadow-xl shadow-slate-200/70 rounded-2xl py-2 border border-slate-100">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-primary-light hover:text-brand-primary transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-slate-600 hover:text-brand-primary transition-colors">Blog</Link>
            <Link href="/para-empresa" className="text-slate-600 hover:text-brand-primary transition-colors">Para Empresas</Link>
            <Link href="/contato" className="text-slate-600 hover:text-brand-primary transition-colors">Contato</Link>
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => openLeadForm()}
            className="hidden lg:flex items-center gap-2 bg-brand-wa hover:bg-brand-wa-dark text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-sm"
          >
            <WaIcon /> Agendar avaliação
          </button>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-slate-700" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {[
            { href: "/", label: "Início" },
            { href: "/empresa", label: "Quem Somos" },
            { href: "/blog", label: "Blog" },
            { href: "/para-empresa", label: "Para Empresas" },
            { href: "/contato", label: "Contato" },
          ].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-slate-700 font-medium border-b border-slate-50">
              {l.label}
            </Link>
          ))}

          <div className="pt-1">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider pb-2 pt-1">Serviços</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                className="block py-2 pl-2 text-sm text-slate-600 hover:text-brand-primary">
                {s.name}
              </Link>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => { setOpen(false); openLeadForm(); }}
              className="flex items-center justify-center gap-2 bg-brand-wa text-white font-semibold py-3.5 rounded-xl w-full text-sm"
            >
              <WaIcon /> Agendar avaliação gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
