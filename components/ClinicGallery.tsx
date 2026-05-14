const photos = [
  { src: "/images/clinica-01.webp", alt: "Sala de fisioterapia – Reabilitar Wellness Juiz de Fora" },
  { src: "/images/clinica-02.webp", alt: "Equipamentos modernos – Reabilitar Wellness" },
  { src: "/images/clinica-03.webp", alt: "Ambiente clínico – Reabilitar Wellness" },
  { src: "/images/clinica-04.webp", alt: "Estrutura da clínica – Reabilitar Wellness" },
];

export default function ClinicGallery() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-heading mb-2">
            Conheça nossa estrutura
          </h2>
          <p className="text-slate-500 text-sm">Ambiente moderno, equipamentos de última geração e atendimento humanizado em Juiz de Fora</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="rounded-xl object-cover w-full h-44 md:h-60 hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
