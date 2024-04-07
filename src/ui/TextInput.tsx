import { useFormContext } from 'react-hook-form';
type TextInputProps = {
	name: string;
	type?: string;
};

export default function TextInput({
	name,
	type = 'text',
}: TextInputProps) {
	const x = useFormContext();
	return (
		<input
			{...x?.register(name)}
			type={type}
			placeholder='Type here'
			className='w-full  px-4 py-3 border border-[#635fc7] rounded-md text-base  bg-[#2b2c37]'
		/>
	);
}
