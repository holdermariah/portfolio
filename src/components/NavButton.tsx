import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
	to: string;
	children: string;
}

export default function NavButton({ to, children }: NavButtonProps) {
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => navigate(to)}
			size="lg"
			variant="outline"
			className="p-4 text-white rounded-full"
		>
			<div className="text-md font-montserrat font-bold">{children}</div>
		</Button>
	);
}
