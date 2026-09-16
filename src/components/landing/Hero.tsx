import heroTeam from "@/assets/hero-team.png";
import Logo from "./Logo";

export default function Hero() {
	return (
		<section className='relative overflow-hidden bg-background'>
			<div className='pointer-events-none absolute right-0 top-0 hidden h-[420px] w-[55%] rounded-bl-[50%] rounded-br-[10%] rounded-tl-[45%] bg-cream lg:block' />
			<div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 pb-0 pt-10 lg:grid-cols-[1fr_0.95fr] lg:gap-4 lg:pt-14'>
				<div className='relative z-10 max-w-xl'>
					<Logo className='h-12 lg:h-14' />
					<h1 className='mt-6 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-cocoa sm:text-4xl lg:text-5xl'>
						Impulsamos tus
						<br />
						comienzos digitales
					</h1>
					<p className='mt-4 max-w-md text-base leading-relaxed text-muted-foreground'>
						Te ayudamos a gestionar tu proyecto digital con
						servicios creativos, estratégicos y personalizados.
					</p>
					<a
						href='https://wa.me/584127513675?text=Hola,%20estoy%20interesado%20en%20saber%20más%20información%20sobre%20sus%20servicios.'
						target='_blank'
						rel='noopener noreferrer'
						className='mt-7 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-xs font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-cocoa'
					>
						Agenda tu asesoría gratuita
					</a>
				</div>

				<div className='relative'>
					<div className='absolute inset-x-0 bottom-0 top-8 rounded-[45%] bg-cream lg:hidden' />
					<img
						src={heroTeam}
						alt='Equipo de profesionales de Raíz Creativa'
						width={1024}
						height={1024}
						className='relative mx-auto w-full max-w-md object-contain'
					/>
				</div>
			</div>
		</section>
	);
}
