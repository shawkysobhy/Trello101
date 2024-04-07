import { Task } from '../state/models';
export default function TaskCard({ task }: { task: Task }) {
	const checkedTasksCount = task.subtasks.filter(
		(subtask) => subtask.isChecked
	).length;
	const checkedTasksString = `${checkedTasksCount} of ${task.subtasks.length}`;
	return (
		<div className='flex flex-col px-6 py-10 space-y-4 border rounded-[8px] shadow-custom border-border bg-background'>
			<p className='text-base font-bold'>{task.title}</p>
			<p className='text-xs font-semibold text-gray'>{checkedTasksString}</p>
		</div>
	);
}
