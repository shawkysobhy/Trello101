type Color = 'primary' | 'secondary';

export default function ModalBtton({
	color,
	children,
}: {
	color: Color;
	children: React.ReactNode;
}) {
	const colors = {
		primary: 'bg-brand text-text',
		secondary: 'bg-text text-brand',
	};

	return (
		<button className={`px-4 py-2 rounded-full ${colors[color]}`}>
			{children}
		</button>
	);
}
