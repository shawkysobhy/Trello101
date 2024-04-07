import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board } from './models';
export interface BoardsState {
	boards: Board[];
}
const initialState: BoardsState = {
	boards: boardsV1
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		addBoard(state, action: PayloadAction<Board>) {
			console.log(action.payload);
			state?.boards?.push(action.payload);
		},
		deleteBoard(state, action: PayloadAction<string>) {
			state.boards = state?.boards?.filter(
				(board) => board.id !== action.payload
			);
		},
	},
});

export default boardsSlice.reducer;
export const { addBoard, deleteBoard /* other action creators */ } =
	boardsSlice.actions;
