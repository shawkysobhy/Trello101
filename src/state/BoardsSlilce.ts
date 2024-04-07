import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Board } from './models';
export interface BoardsState {
	boards: Board[];
}
const initialState: BoardsState = {
	boards: [
		{
			id: '19',
			name: 'Board 1',
			columns: [
				{
					id: '1',
					title: 'Column 1',
					tasks: [
						{
							id: 1,
							title: 'Task 1',
							description: 'Description 1',
							status: 'To Do',
							subtasks: [{ title: 'Subtask 1', isChecked: false }],
						},
					],
				},
			],
		},
		{
			id: '10',
			name: 'Board 2',
			columns: [
				{
					id: '1',
					title: 'Column 1',
					tasks: [
						{
							id: 1,
							title: 'Task 1',
							description: 'Description 1',
							status: 'To Do',
							subtasks: [{ title: 'Subtask 1', isChecked: false }],
						},
					],
				},
			],
		},
		{
			id: '11',
			name: 'Board 3',
			columns: [
				{
					id: '1',
					title: 'Column 1',
					tasks: [
						{
							id: 4,
							title: 'Task 1',
							description: 'Description 1',
							status: 'To Do',
							subtasks: [{ title: 'Subtask 1', isChecked: false }],
						},
					],
				},
			],
		},
		{
			id: '12',
			name: 'Board 1',
			columns: [
				{
					id: '1',
					title: 'Column 1',
					tasks: [
						{
							id: 1,
							title: 'Task 1',
							description: 'Description 1',
							status: 'To Do',
							subtasks: [{ title: 'Subtask 1', isChecked: false }],
						},
					],
				},
			],
		},
	],
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
