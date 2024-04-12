import { useFormContext } from 'react-hook-form';
type TextInputProps = {
	name: string;
	type?: string;
	validationRuels?: {};
	disabled?: boolean;
};

export default function TextInput({
	name,
	type = 'text',
	validationRuels = {},
	disabled,
}: TextInputProps) {
	const x = useFormContext();
	return (
		<input
			disabled={disabled}
			{...x?.register(name, validationRuels)}
			type={type}
			className={`w-full px-4 py-3 text-sm font-semibold border rounded-md border-brand bg-background text-text ${
				disabled ? 'bg-gray font-normal' : ''
			}`}
		/>
	);
}
