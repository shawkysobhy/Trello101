import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface ActiveState {
	activeBoardId: string;
}
const initialState: ActiveState = {
	activeBoardId: '0'
};
const ActiveBoardSlice = createSlice({
	name: 'active',
	initialState,
	reducers: {
		setActiveId: (state, action: PayloadAction<string>) => {
			state.activeBoardId = action.payload;
		},
		resetState: () => initialState,
	},
});

export default ActiveBoardSlice.reducer;
export const { setActiveId,resetState } = ActiveBoardSlice.actions;
