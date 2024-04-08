import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
function useActiveBoardId() {
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);

	return { activeBoardId };
}

export default useActiveBoardId;
