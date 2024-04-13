import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board, Column } from '../models';
import { findIndexById,updateBoardStorge,getStorge } from '../utils';
import { Task } from '../models';
export interface activeTask {
	taskId: string;
	columnId: string;
}
export interface BoardsState {
	boards: Board[];
	activeBoard: Board;
	activeTask: activeTask;
}

const boardStorge = getStorge('boards');

const initialState: BoardsState = boardStorge
	? JSON.parse(boardStorge)
	: {
			boards: boardsV1,
			activeBoard: boardsV1[0],
			activeTask: {
				taskId: '',
				columnId: '',
			},
	  };
const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		addBoard(state, action: PayloadAction<Board>) {
			state?.boards?.push(action.payload);
			updateBoardStorge('boards', state);
		},
		deleteBoard(state, action: PayloadAction<string>) {
			state.boards = state?.boards?.filter(
				(board) => board.id !== action.payload
			);
			updateBoardStorge('boards', state);
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
			state.activeBoard = state.boards[boardId];
			updateBoardStorge('boards', state);
		},
		setActiveBoard(state, action: PayloadAction<{ id?: string }>) {
			const { id } = action.payload;
			if (!id) {
				state.activeBoard = state.boards[state.boards.length - 1];
			} else {
				const activeBoard = state.boards.find((board) => board.id === id);
				if (activeBoard) state.activeBoard = activeBoard;
			}
			updateBoardStorge('boards', state);
		},
		addTask(state, action: PayloadAction<Task>) {
			const task = action.payload;
			const columnIndex = findIndexById(
				state.activeBoard.columns,
				task.columnId
			);
			const tasks =
				state.boards[state.activeBoard.id].columns[columnIndex].tasks.slice();
			const updatedTasks = [task, ...tasks];
			state.boards[state.activeBoard.id].columns[columnIndex].tasks =
				updatedTasks;
			updateBoardStorge('boards', state);
		},
		editTask(
			state,
			action: PayloadAction<{ task: Task; newColumnId: string }>
		) {
			const { task, newColumnId } = action.payload;
			const boardIndex = findIndexById(state.boards, state.activeBoard.id);
			const columnIndex = findIndexById(
				state.activeBoard.columns,
				state.activeTask.columnId
			);
			const newColumnIndex = findIndexById(
				state.activeBoard.columns,
				newColumnId
			);
			const allTasks = Array.from(
				state.activeBoard.columns[columnIndex].tasks || []
			);
			const filterdTasks =
				allTasks?.filter((task) => task.id !== action.payload.task.id) || [];
			if (newColumnId !== state.activeTask.columnId && newColumnId) {
				const updatedTask = { ...task, columnId: newColumnId };
				const tasks: Task[] = Array.from(
					state.boards[boardIndex].columns[newColumnIndex].tasks || []
				);
				state.boards[boardIndex].columns[newColumnIndex].tasks = [
					updatedTask,
					...tasks,
				];
				state.boards[boardIndex].columns[columnIndex].tasks = filterdTasks;
			} else if (newColumnId == task.columnId) {
				state.boards[boardIndex].columns[columnIndex].tasks = [
					task,
					...filterdTasks,
				];
			}
			updateBoardStorge('boards', state);
		},
		deleteTask(
			state,
			action: PayloadAction<{
				id: string;
				taskIndex: number;
				columnIndex: number;
			}>
		) {
			const { id, columnIndex } = action.payload;
			const filterdTasks =
				state?.activeBoard?.columns[columnIndex]?.tasks?.filter(
					(task) => task.id !== id
				) || [];
			state.boards[state.activeBoard.id].columns[columnIndex].tasks = [
				...filterdTasks,
			];
			state.activeBoard = state.boards[state.activeBoard.id];
			updateBoardStorge('boards', state);
		},
		setActiveTask(state, action: PayloadAction<activeTask>) {
			state.activeTask = action.payload;
			updateBoardStorge('boards', state);
		},
	},
});

export default boardsSlice.reducer;
export const {
	addBoard,
	deleteTask,
	deleteBoard,
	editBoard,
	setActiveBoard,
	addTask,
	editTask,
	setActiveTask,
} = boardsSlice.actions;
