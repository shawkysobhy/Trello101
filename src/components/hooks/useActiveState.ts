import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

const useActiveState = () => {
	const { activeBoardId, activeColumnId, activeTaskId } = useSelector(
		(state: RootState) => state.activeBoardId
	);
	return { activeBoardId, activeColumnId, activeTaskId };
};

export default useActiveState;
