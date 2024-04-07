import { Board as BoardProps } from '../../state/models';
import Column from './Column';
import NewColumn from './NewColumn';

export default function Board({ board }: { board: BoardProps }) {
	console.log(board)
	return (
		<div className=' absolute  md:left-[300px] flex  min-w-full   bg-secondaryBackground py-10 px-14 space-x-12'>
			{board.columns.map((column) => (
				<Column key={column.id} column={column} />
			))}
			<NewColumn />
		</div>
	);
}
