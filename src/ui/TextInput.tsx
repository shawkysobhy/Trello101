import { useFormContext } from 'react-hook-form';
type TextInputProps = {
	name: string;
	type?: string;
	validationRuels?:{}
};

export default function TextInput({ name, type = 'text', validationRuels={} }: TextInputProps) {
	const x = useFormContext();
	return (
		<input
			{...x?.register(name,validationRuels)}
			type={type}
			className='w-full px-4 py-3 text-sm font-semibold border rounded-md border-brand bg-background text-text'
		/>
	);
}
