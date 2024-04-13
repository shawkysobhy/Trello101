import { useDispatch } from 'react-redux';
import useBoard from '../../hooks/useBoard';
import { deleteTask } from '../../state/BoardsSlilce';
import {
	deleteTaskModalId,
	editTaskModalId,
	modalCloseHandler,
} from '../../utils';
import { ModalButton } from '../../ui';
import { findIndexById } from '../../utils';
import { Column } from '../../models';
export default function DeleteTaskModal() {
	const { activeTask, currentActiveBoard } = useBoard();
	const columnIndex = findIndexById(
		currentActiveBoard.columns,
		activeTask.columnId
	);
	const column: Column = currentActiveBoard.columns[columnIndex];
	const taskIndex =
		column?.tasks?.findIndex((task) => task.id === activeTask.taskId) ?? -1;
	const task =
		taskIndex !== -1 && column.tasks ? column.tasks[taskIndex] : null;

	const dispatch = useDispatch();
	const deleteTaskHandler = () => {
		if (task)
			dispatch(
				deleteTask({
					id: task?.id,
					columnIndex: columnIndex,
					taskIndex: taskIndex,
				})
			);
		modalCloseHandler(deleteTaskModalId);
		modalCloseHandler(editTaskModalId);
	};
	return (
		<dialog id={deleteTaskModalId} className='modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-4 font-bold text-red-600 text-medium'>
					Delete {task?.title} Task?
				</h3>
				<div className='flex flex-col space-y-6'>
					<p className='text-[14px] font-semibold text-gray'>
						Are you sure you want to delete the{' '}
						<span className='mx-[3px] font-black text-text text-[14px]'>
							{task?.title}
						</span>{' '}
						task? This action will remove task and subtask and cannot be
						reversed.
					</p>
					<div className='modal-action'>
						<form method='dialog'>
							<div className='flex flex-row space-x-4 text-base font-bold '>
								<ModalButton color='primary' onClick={deleteTaskHandler}>
									Delete
								</ModalButton>
								<ModalButton color='secondary'>Cancel</ModalButton>
							</div>{' '}
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
}
