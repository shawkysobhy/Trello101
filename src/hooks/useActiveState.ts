import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const useActiveState = () => {
	const { activeBoardId, activeColumnId, activeTaskId } = useSelector(
		(state: RootState) => state.activeBoardId
	);
	return { activeBoardId, activeColumnId, activeTaskId };
};

export default useActiveState;
