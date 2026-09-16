import { Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
	return (
		<footer
			id='contacto'
			className='bg-forest py-12 text-forest-foreground'
		>
			<div className='mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 text-center sm:grid-cols-2 sm:text-left'>
				<div className='flex justify-center sm:justify-start'>
					<Logo variant='light' className='h-12' />
				</div>

				<div className='flex flex-col items-center gap-3 sm:items-start'>
					<p className='text-base font-bold'>¿Cómo podemos ayudar?</p>
					<a
						href='mailto:raizcreativapro5.0@gmail.com'
						className='inline-flex items-center gap-2 text-xs text-forest-foreground/85 hover:underline'
					>
						<Mail className='h-4 w-4' aria-hidden='true' />
						raizcreativapro5.0@gmail.com
					</a>
					<a
						href='https://wa.me/584127513675?text=Hola,%20estoy%20interesado%20en%20saber%20más%20información%20sobre%20sus%20servicios.'
						target='_blank'
						rel='noopener noreferrer'
						className='mt-2 inline-flex items-center justify-center rounded-full bg-background px-10 py-2 text-xs font-bold uppercase tracking-wide text-cocoa transition-colors hover:bg-cream'
					>
						WhatsApp
					</a>
				</div>
			</div>

			<div className='mx-auto mt-10 max-w-5xl px-6 text-center text-[10px] leading-relaxed text-forest-foreground/70'>
				<p>© 2026 Raíz Creativa. Todos los derechos reservados.</p>
				<p>Consulta nuestras políticas generales y de privacidad.</p>
			</div>
		</footer>
	);
}
