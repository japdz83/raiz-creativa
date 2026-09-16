import { MessagesSquare, Bot, Users } from "lucide-react";
import sincronia from "@/assets/sincronia.jpg";

const results = [
	{
		icon: MessagesSquare,
		title: "Comunicación\nUnificada:",
		text: "Gestiona WhatsApp, Instagram y Email desde una sola bandeja de entrada.",
	},
	{
		icon: Bot,
		title: "Asistente\nde IA (24/7):",
		text: "Un empleado virtual entrenado con tu información que califica y agenda prospectos por ti.",
	},
	{
		icon: Users,
		title: "Ecosistema de\nConversión:",
		text: "Landing Page Premium y Agenda Inteligente integrados para maximizar tus ventas.",
	},
];

export default function SincroniaDigital() {
	return (
		<section className='bg-background py-14 lg:py-20'>
			<div className='mx-auto max-w-5xl px-6'>
				<h2 className='text-center font-display text-2xl font-extrabold uppercase tracking-tight text-cocoa sm:text-3xl lg:text-4xl'>
					Sincronía digital
				</h2>

				<div className='mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.8fr_1.2fr]'>
					<img
						src={sincronia}
						alt='Profesional usando tecnología con inteligencia artificial'
						width={912}
						height={1104}
						loading='lazy'
						className='w-full rounded-md object-cover'
					/>

					<div>
						<h3 className='text-lg font-bold leading-snug text-cocoa'>
							Deja de ser el cuello de botella de tu propio
							crecimiento.
						</h3>
						<p className='mt-4 text-justify text-sm leading-relaxed text-muted-foreground'>
							Implementamos una infraestructura "All-in-One"
							impulsada por Inteligencia Artificial y tecnología
							de vanguardia. Unificamos tu marketing y tus ventas
							en un solo sistema automatizado para que tu negocio
							funcione 24/7 sin depender de tu respuesta manual.
						</p>
						<a
							href='https://wa.me/584127513675?text=Hola,%20estoy%20interesado%20en%20saber%20más%20información%20sobre%20sus%20servicios.'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-cocoa'
						>
							Quiero construir mi sistema de ventas
						</a>
					</div>
				</div>

				<h3 className='mt-14 text-center text-base font-bold text-cocoa'>
					Lo que logramos por ti:
				</h3>

				<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-3'>
					{results.map(({ icon: Icon, title, text }) => (
						<div key={title}>
							<Icon
								className='h-9 w-9 text-cocoa'
								strokeWidth={1.4}
								aria-hidden='true'
							/>
							<h4 className='mt-3 whitespace-pre-line text-sm font-extrabold leading-tight text-cocoa'>
								{title}
							</h4>
							<p className='mt-2 text-justify text-sm leading-relaxed text-muted-foreground'>
								{text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
