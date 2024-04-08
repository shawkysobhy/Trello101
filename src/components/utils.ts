import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
const boards = useSelector((state: RootState) => state.boards.boards);

const getBoard = (boardId: string) => {
	boards.filter((board) => board.id == boardId);
};
