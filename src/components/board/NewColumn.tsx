export default function NewColumn() {
	return (
		<div className='w-[280px] h-screen mt-16  text-2xl flex-shrink-0  rounded-lg  bg-gradient-to-b from-background  to-secondaryBackground flex justify-center items-center space-y-10 text-text  '>
			<button className='flex items-center space-x-2 text-4xl font-bold transition-all duration-150 text-gray hover:text-brand'>
				<span>+</span> <p>New Column</p>
			</button>
		</div>
	);
}
