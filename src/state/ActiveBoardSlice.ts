import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface ActiveState {
	activeBoardId: string;
}
const initialState: ActiveState = {
	activeBoardId: '1'
};
const ActiveBoardSlice = createSlice({
	name: 'active',
	initialState,
	reducers: {
		setActiveId: (state, action: PayloadAction<string>) => {
			state.activeBoardId = action.payload;
		},
	},
});

export default ActiveBoardSlice.reducer;
export const { setActiveId } = ActiveBoardSlice.actions;
