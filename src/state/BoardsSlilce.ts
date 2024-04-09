import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board, Column, Task } from './models';
import { findIndexById } from '../components/utils/utils';
import useBoard from '../components/hooks/useBoard';
import useActiveState from '../components/hooks/useActiveState';
import { CombinedInterface } from '../components/modals/task/EditTaskModal';
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
			const newColumns: Column[] =
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
			if (boardIndex !== -1 && columnIndex !== -1) {
				const tasks: Task[] =
					state.boards[boardIndex].columns[columnIndex].tasks || [];
				tasks?.push(task);
			}
		},
		editTask(state, action: PayloadAction<CombinedInterface>) {
			const { columnId, boardId, id, newColumnId } = action.payload;
			console.log('oldColumnId', columnId, 'newColumnId', newColumnId);
			const boardIndex = findIndexById(state.boards, boardId);
			const columnIndex = findIndexById(
				state.boards[boardIndex]?.columns,
				columnId
			);
			const NewcolumnIndex = findIndexById(
				state.boards[boardIndex]?.columns,
				newColumnId
			);

			const taskIndex = state.boards[boardIndex].columns[
				columnIndex
			]?.tasks?.findIndex((task) => task.id === id);
			if (taskIndex === undefined) return;
			const board = state?.boards[boardIndex];
			const column:Column = board?.columns[NewcolumnIndex];
			const task = column?.tasks?.[taskIndex];
			if (board && column && task) {
				// tasks[taskIndex] = action.payload;
				// state.boards[boardIndex].columns[columnIndex].tasks = task;
			}
		},
	},
});

export default boardsSlice.reducer;
export const { addBoard, deleteBoard, editBoard, addTask, editTask } =
	boardsSlice.actions;
