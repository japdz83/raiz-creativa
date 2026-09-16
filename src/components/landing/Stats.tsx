const stats = [
  { value: "+10 AÑOS", label: "Experiencia" },
  { value: "+90", label: "Proyectos\ndesarrollados" },
  { value: "+50", label: "Emprendedores\nasesorados" },
];

export default function Stats() {
  return (
    <section className="bg-background pb-14 pt-10 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-lg font-bold leading-snug text-cocoa sm:text-xl">
          Somos tu aliado estratégico para crecer con autenticidad
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          En Raíz Creativa te acompañamos a conectar, crecer y vender con una marca personal
          coherente, auténtica y profesional. Creamos estrategias visuales, digitales y emocionales
          desde el primer contacto.
        </p>
        <a
          href="#contacto"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-[11px] font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-cocoa"
        >
          Pide tu presupuesto
        </a>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={value} className="rounded-xl border-2 border-brand px-4 py-5 text-left">
              <p className="font-display text-2xl font-extrabold text-cocoa">{value}</p>
              <p className="whitespace-pre-line text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Hoy en Raíz Creativa, toda esta trayectoria se convierte en un sistema estratégico y
          personalizado para marcas personales auténticas.
        </p>
      </div>
    </section>
  );
}
