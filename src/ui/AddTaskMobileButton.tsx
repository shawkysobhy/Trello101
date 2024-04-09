export default function AddTaskMobileButton({
	modalOpenHandler,
	createTaskModalId,
}: {
	modalOpenHandler: (id: string) => void;
	createTaskModalId: string;
}) {
	return (
		<button
			onClick={() => modalOpenHandler(createTaskModalId)}
			className='flex items-center justify-center w-16 h-10 text-base font-bold rounded-full md:hidden bg-brand text-text'>
			<p>+</p>
			{/* for add new task */}
		</button>
	);
}
