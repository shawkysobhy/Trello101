import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board, Column, Task } from './models';
export interface BoardsState {
	boards: Board[];
}
const initialState: BoardsState = {
	boards: boardsV1,
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		addBoard(state, action: PayloadAction<Board>) {
			state?.boards?.push(action.payload);
		},
		deleteBoard(state, action: PayloadAction<string>) {
			state.boards = state?.boards?.filter(
				(board) => board.id !== action.payload
			);
		},
		editBoard(
			state,
			action: PayloadAction<{
				boardId: string;
				name: string;
				columns?: Column[];
			}>
		) {
			const { boardId, name, columns } = action.payload;
			const index = state.boards.findIndex((board) => board.id === boardId);
			if (index !== -1) {
				state.boards[index].name = name ?? state.boards[index].name;
				state.boards[index].columns = columns ?? state.boards[index].columns;
			}
		},
		addTask(
			state,
			action: PayloadAction<{
				boardId: string;
				task: Task;
				columnId: string;
			}>
		) {
			const { boardId, task, columnId } = action.payload;
			const boardIndex = state.boards.findIndex((board) => board.id == boardId);
			const columnIndex = state.boards[boardIndex].columns.findIndex(
				(column) => column.id === columnId
			);
			state.boards[boardIndex].columns[columnIndex].tasks?.push(task);
		},
	},
});


export default boardsSlice.reducer;
export const { addBoard, deleteBoard, editBoard, addTask } =
	boardsSlice.actions;
