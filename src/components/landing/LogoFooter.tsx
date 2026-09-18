import { cn } from "@/lib/utils";
import LOGO from "../../assets/LOGO-footer.png";

export default function Logo({
	className,
	variant = "color",
}: {
	className?: string;
	variant?: "color" | "light";
}) {
	const mark = variant === "light" ? "text-forest-foreground" : "text-brand";
	const raiz = variant === "light" ? "text-forest-foreground" : "text-brand";
	const creativa =
		variant === "light" ? "text-forest-foreground" : "text-forest";

	return (
		<div className={cn("flex items-center gap-3", className)}>
			{/* <svg viewBox="0 0 64 64" className={cn("h-full w-auto", mark)} aria-hidden="true">
        <ellipse cx="32" cy="32" rx="22" ry="29" fill="none" stroke="currentColor" strokeWidth="4" />
        <path
          d="M32 14v36M32 24l-9-7M32 24l9-7M32 34l-11-8M32 34l11-8M32 44l-8-6M32 44l8-6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        <span className={raiz}>Raíz </span>
        <span className={creativa}>Creativa</span>
      </span> */}
			<img className='flex ' src={LOGO} alt='Logo Raiz Creativa' />
		</div>
	);
}
