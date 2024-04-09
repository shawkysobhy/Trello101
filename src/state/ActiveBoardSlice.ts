import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
interface ActiveState {
	activeBoardId: string;
	activeTaskId: string;
	activeColumnId: string;
}
interface ActiveTask {
	activeTaskId: string;
	activeColumnId: string;
}
const initialState: ActiveState = {
	activeBoardId: '0',
	activeTaskId: '',
	activeColumnId: '',
};
const ActiveBoardSlice = createSlice({
	name: 'active',
	initialState,
	reducers: {
		setActiveBoardId: (state, action: PayloadAction<string>) => {
			state.activeBoardId = action.payload;
		},
		setActiveTask: (state, action:PayloadAction<ActiveTask>) => {
			state.activeColumnId=action.payload.activeColumnId;
			state.activeTaskId=action.payload.activeTaskId;
		},
		resetState: () => initialState,
	},
});

export default ActiveBoardSlice.reducer;
export const { setActiveBoardId, resetState, setActiveTask } =
	ActiveBoardSlice.actions;
