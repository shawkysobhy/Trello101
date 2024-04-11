import { Column as ColumnProp } from '../models';
import {TaskCard} from './';
export default function Column({ column }: { column: ColumnProp }) {
	const randomColor =
		'#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
	const bgColorStyle = {
		backgroundColor: randomColor,
	};
	return (
		<div className='w-[280px]   flex-shrink-0 flex flex-col space-y-10     '>
			<div className='flex flex-row items-center space-x-4'>
				<div className={` rounded-full w-7 h-7`} style={bgColorStyle}></div>
				<p className='text-xs font-semibold text-gray'>{column.column} (7)</p>
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
