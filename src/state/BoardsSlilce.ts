import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board, Column, Task } from '../models';
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
			state.boards[boardId].columns = columns;
			state.boards[boardId].name = name;
		},

		addTask(state, action: PayloadAction<Task>) {
			const task = action.payload;
			console.log('column id', task);
			const tasks: Task[] =
				state.boards[task.boardId].columns[task.columnId].tasks || [];
			state.boards[task.boardId].columns[task.columnId].tasks = [
				task,
				...tasks,
			];
		},
		editTask(
			state,
			action: PayloadAction<{ task: Task; newColumnId: string | undefined }>
		) {
			const { task, newColumnId } = action.payload;
			const { columnId, boardId } = task;
			const Filterdtasks: Task[] = state.boards[boardId].columns[
				columnId
			].tasks.filter((ele: Task) => ele.id !== task.id);
			//add to new column
			if (newColumnId !== columnId) {
				const tasks: Task[] =
					state.boards[task.boardId].columns[newColumnId].tasks || [];
				state.boards[boardId].columns[newColumnId].tasks = [task, ...tasks];
				state.boards[boardId].columns[columnId].tasks = [...Filterdtasks];
			}
			// const tasks: Task[] = state.boards[boardId].columns[columnId].tasks.filter((ele) => ele.id !== task.id);
			if (newColumnId == columnId) {
				state.boards[boardId].columns[columnId].tasks = [task, ...Filterdtasks];
			}
		},
	},
});

export default boardsSlice.reducer;
export const { addBoard, deleteBoard, editBoard, addTask, editTask } =
	boardsSlice.actions;
