import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
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
			const currentColumn = current(state.boards[index].columns);
			const newColumns:Column[] =
				columns?.filter(
					(column) =>
						!currentColumn.some((currColumn) => currColumn.id === column.id)
				) || [];
			if (index !== -1) {
				state.boards[index].name = name ?? state.boards[index].name;
				state.boards[index].columns.push(...newColumns);
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
			console.log(boardIndex);
			console.log('columnId', columnId);
			console.log(current(state.boards[boardIndex].columns));
			if (boardIndex !== -1 && columnIndex !== -1) {
				const newTasks =
					state.boards[boardIndex].columns[columnIndex].tasks?.push(task);
				console.log('new tasks', newTasks);
			}
			// state.boards[boardIndex].columns[columnIndex].tasks = newTasks ??state.boards[boardIndex].columns[columnIndex].tasks;

			// 			const tasks = state.boards[boardIndex].columns[columnIndex]?.tasks;
			// 			tasks?.push(task);
			// 			// state.boards[boardIndex].columns[columnIndex]?.tasks = tasks;
			// 			if (tasks !== undefined) {
			// 				state.boards[boardIndex].columns[columnIndex].tasks = tasks;
			// 			}
			// console.log(state.boards[boardIndex])
			// 			// state.boards[boardIndex].columns[columnIndex] =
			// 			// 	tasks ?? state.boards[boardIndex].columns[columnIndex].tasks;
			// 		},
		},
	},
});

export default boardsSlice.reducer;
export const { addBoard, deleteBoard, editBoard, addTask } =
	boardsSlice.actions;
