import {
  PenTool,
  Share2,
  Megaphone,
  LayoutTemplate,
  Clapperboard,
  Globe,
  Mail,
  Puzzle,
  Target,
  Bot,
} from "lucide-react";

const services = [
  { icon: PenTool, label: "Identidad\nvisual" },
  { icon: Share2, label: "Redes\nsociales" },
  { icon: Megaphone, label: "Campaña\nde ads" },
  { icon: LayoutTemplate, label: "Diseño\ngráfico" },
  { icon: Clapperboard, label: "Edición de\nvideos" },
  { icon: Globe, label: "Sitios web" },
  { icon: Mail, label: "Email\nmarketing" },
  { icon: Puzzle, label: "Asesorías" },
  { icon: Target, label: "Estrategias\ndigitales" },
  { icon: Bot, label: "Automatizar\ncon IA" },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-sand py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-40 rounded-t-full bg-cream/40" />
      <div className="pointer-events-none absolute right-8 top-10 grid grid-cols-3 gap-3 opacity-70">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="block h-3 w-3 rounded-full bg-brand" />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand-foreground sm:text-3xl lg:text-4xl">
          Nuestros servicios
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-foreground/85 sm:text-base">
          Un abanico de soluciones digitales para marcas personales y negocios que desean crecer con
          autenticidad:
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-5">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl bg-background px-2 py-4 shadow-sm"
            >
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <span className="whitespace-pre-line text-[10px] font-extrabold uppercase leading-tight text-cocoa sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
