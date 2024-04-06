type Color = 'primary' | 'secondary';

export default function ModalBtton({
	color,
	children,
	onClick,
}: {
	color: Color;
	children: React.ReactNode;
	onClick?: () => void;
}) {
	const colors = {
		primary: 'bg-brand text-text',
		secondary: 'bg-text text-brand',
	};

	return (
		<button
			onClick={onClick}
			className={`px-4 py-3 rounded-full font-bold text-[13px] ${colors[color]}`}>
			{children}
		</button>
	);
}
