import { Column as ColumnProp } from '../../state/models';
import TaskCard from '../TaskCard';

export default function Column({ column }: { column: ColumnProp }) {
	//outline-gray outline-2 outline-dashed for empty stack
	return (
		<div className='w-[280px]   flex-shrink-0 flex flex-col space-y-10     '>
			<div className='flex flex-row items-center space-x-4'>
				<div className='bg-blue-400 rounded-full w-7 h-7'></div>
				<p className='text-xs font-semibold text-gray'>{column.title} (7)</p>
			</div>
			<div
				className={`flex flex-col h-screen space-y-10 text-2xl rounded-md text-text ${
					column.tasks?.length == 0
						? 'outline-gray outline-2 outline-dashed for empty stack'
						: ''
				}`}>
				{column.tasks?.map((task, index) => {
					return <TaskCard key={index} task={task} />;
				})}
			</div>
		</div>
	);
}
