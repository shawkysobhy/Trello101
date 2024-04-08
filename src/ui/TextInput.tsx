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
			placeholder='Type here'
			className='w-full  px-4 py-3 border border-[#635fc7] rounded-md text-sm bg-[#2b2c37]'
		/>
	);
}
