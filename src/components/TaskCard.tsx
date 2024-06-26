import { useDispatch } from 'react-redux';
import { editTaskModalId, modalOpenHandler } from '../utils';
import { Task } from '../models';
import { setActiveTask } from '../state/BoardsSlilce';
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
					setActiveTask({
						taskId: task.id,
						columnId: task.columnId,
					})
				);
			}}>
			<p className='text-base font-bold'>{task.title}</p>
			<p className='text-xs font-semibold text-gray'>{checkedTasksString}</p>
		</div>
	);
}
