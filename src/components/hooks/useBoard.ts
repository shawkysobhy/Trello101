import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

const useBoard = (id:string) => {
	const boards = useSelector((state: RootState) => state.boards.boards);
	const boardWithId = boards.filter((board) => board.id == id)[0];
	return { boards, boardWithId };
};

export default useBoard;
