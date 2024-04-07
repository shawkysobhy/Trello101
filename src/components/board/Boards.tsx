import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Board from './Board';
export default function Boards({ activeBoardId }: { activeBoardId: string }) {
	const boards = useSelector((state: RootState) => state.boards.boards);

	const activeBoard = boards.find((board) => board.id === activeBoardId);
console.log(activeBoard)
	return (
		<>
			{activeBoard ?<Board board={activeBoard} />:<p>not found</p>}
		</>
	);
}
