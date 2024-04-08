import { editModalBoardId, modalOpenHandler } from '../utils/utils';
export default function NewColumn() {
	return (
		<div
			onClick={() => modalOpenHandler(editModalBoardId)}
			className='w-[280px] h-screen mt-16  text-2xl flex-shrink-0  rounded-lg  bg-gradient-to-b from-background cursor-pointer   to-secondaryBackground flex justify-center items-center space-y-10 text-text group '>
			<button className='flex items-center space-x-2 text-4xl font-bold transition-all duration-150 group-hover:text-brand p-7 text-gray'>
				<span>+</span> <p>New Column</p>
			</button>
		</div>
	);
}
