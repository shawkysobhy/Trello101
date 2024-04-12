import { Board } from './';
import useBoard from '../hooks/useBoard';
export default function BoardContainer() {
	const { boards, currentActiveBoard:{id} } = useBoard();
	const activeBoard = boards.find((board) => board.id === id);
	return <>{activeBoard ? <Board board={activeBoard} /> : <p>not found</p>}</>;
}
