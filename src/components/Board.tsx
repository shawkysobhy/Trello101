import { Board as BoardProps } from '../models';
import {NewColumn ,Column} from './';

export default function Board({ board }: { board: BoardProps }) {
	return (
		<div className=' absolute  md:left-[300px] flex  min-w-full h-full   bg-secondaryBackground py-10 px-14 space-x-12'>
			{board.columns.map((column) => (
				<Column key={column.id} column={column} />
			))}
			<NewColumn />
		</div>
	);
}
