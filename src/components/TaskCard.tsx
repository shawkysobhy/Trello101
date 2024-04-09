import { useDispatch } from 'react-redux';
import { Task } from '../state/models';
import { editTaskModalId, modalOpenHandler } from './utils/utils';
import { setActiveTask } from '../state/ActiveBoardSlice';
export default function TaskCard({ task }: { task: Task }) {
	const dispatch = useDispatch();
	const checkedTasksCount = task.subtasks.filter(
		(subtask) => subtask.isChecked
	).length;
	const checkedTasksString = `${checkedTasksCount} of ${task.subtasks.length}`;
	return (
		<div
			className=' cursor-pointer flex flex-col px-6 py-10 space-y-4 border rounded-[8px] shadow-custom border-border bg-background'
			onClick={() => {
				modalOpenHandler(editTaskModalId);
				dispatch(
					setActiveTask({ activeTaskId: task.id, activeColumnId: task.columnId })
				);
			}}>
			<p className='text-base font-bold'>{task.title}</p>
			<p className='text-xs font-semibold text-gray'>{checkedTasksString}</p>
		</div>
	);
}
