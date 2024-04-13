import { RootState } from '../state/store';
import { useSelector } from 'react-redux';

const useBoard = (id?: string) => {
	const activeBoard = useSelector(
		(state: RootState) => state.boards.activeBoard
	);
	const activeTask: { taskId: string; columnId: string } = useSelector(
		(state: RootState) => state.boards.activeTask
	);
	const boards = useSelector((state: RootState) => state.boards.boards);
	const boardWithId = boards.filter((board) => board.id == id)[0];
	const currentActiveBoard = boards.filter(
		(board) => board.id == activeBoard.id
	)[0];

	return { boards, boardWithId, currentActiveBoard, activeTask };
};

export default useBoard;
