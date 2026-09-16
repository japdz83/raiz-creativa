import { Star } from "lucide-react";
import ceo from "@/assets/ceo.png";

export default function AboutCEO() {
	return (
		<section className='bg-background py-6 lg:py-10'>
			<div className='mx-auto max-w-5xl px-6'>
				<div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-cocoa via-cocoa to-sand px-6 py-8 sm:px-10'>
					<div className='grid grid-cols-1 items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]'>
						<div className='relative z-10'>
							<span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-background'>
								<Star
									className='h-4 w-4 fill-cocoa text-cocoa'
									aria-hidden='true'
								/>
							</span>
							<h2 className='mt-4 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-brand-foreground sm:text-2xl'>
								Conoce a nuestra CEO
								<br />
								<span className='normal-case'>Meye Mejías</span>
							</h2>
							<a
								href='https://wa.me/584127513675?text=Hola,%20estoy%20interesado%20en%20saber%20más%20información%20sobre%20sus%20servicios.'
								target='_blank'
								rel='noopener noreferrer'
								className='mt-5 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-[11px] font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-background hover:text-cocoa'
							>
								Saber más
							</a>
						</div>
						<img
							src={ceo}
							alt='Meye Mejías junto al equipo de Raíz Creativa'
							width={1024}
							height={768}
							loading='lazy'
							className='w-full object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
