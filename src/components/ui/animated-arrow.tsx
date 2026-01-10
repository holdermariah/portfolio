import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
	className?: string;
}

export default function AnimatedArrow({ className }: AnimatedArrowProps) {
	return (
		<svg
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('inline-block', className)}
			aria-hidden="true"
		>
			{/* Single continuous stroke with arrowhead */}
			<path
				d="M 12 10 Q 28 14 38 30 L 32 30 L 38 30 L 38 24"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="animate-draw-arrow"
			/>
		</svg>
	);
}
