type Color = 'primary' | 'secondary';

export default function ModalButton({
	color,
	children,
	onClick,
	type,
}: {
	color: Color;
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}) {
	const colors = {
		primary: 'bg-brand text-text',
		secondary: 'bg-text text-brand',
	};

	return (
		<button
			onClick={onClick}
			type={type}
			className={`px-4 py-3 hover:opacity-80 rounded-full font-bold text-[13px] ${colors[color]} `}>
			{children}
		</button>
	);
}
