export default function AddTaskMobileButton({
	modalOpenHandler,
	createTaskId,
}: {
	modalOpenHandler: (id: string) => void;
	createTaskId: string;
}) {
	return (
		<button
			onClick={() => modalOpenHandler(createTaskId)}
			className='flex items-center justify-center w-16 h-10 text-base font-bold rounded-full md:hidden bg-brand text-text'>
			<p>+</p>
			{/* for add new task */}
		</button>
	);
}
