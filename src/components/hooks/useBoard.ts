import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

const useBoard = (id?: string) => {
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);
	const boards = useSelector((state: RootState) => state.boards.boards);
	const boardWithId = boards.filter((board) => board.id == id)[0];
	const currentActiveBoard = boards.filter(
		(board) => board.id == activeBoardId
	)[0];
	
	return { boards, boardWithId, currentActiveBoard };
};

export default useBoard;
