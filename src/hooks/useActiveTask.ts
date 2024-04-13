import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const useActiveTask = () => {
	const activeTask = useSelector((state: RootState) => state.boards.activeTask);
	return activeTask;
};

export default useActiveTask;
