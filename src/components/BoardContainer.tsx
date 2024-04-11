import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {Board} from './';
export default function BoardContainer() {
	const boards = useSelector((state: RootState) => state.boards.boards);
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);

	const activeBoard = boards.find((board) => board.id === activeBoardId);
	return <>{activeBoard ? <Board board={activeBoard} /> : <p>not found</p>}</>;
}
