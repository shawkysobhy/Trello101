import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { boardsV1 } from '../mock/data';
import { Board, Column } from './models';
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
			// const boards = current(state.boards);
			// const board = boards.find((board) => board.id === boardId);
			// console.log(board);
			// if (board) {
			// 	if (name !== undefined) {
			// 		board.name = name;
			// 	}
			// 	if (columns !== undefined) {
			// 		board.columns = columns;
			// 	}
			// }
			// const index = state.boards.findIndex((board) => board.id === boardId);
			// console.log('Index', index);
			// console.log(current(state.boards));
			// const x = current(state?.boards).map((board) => {
			// 	if (board.id === boardId) {
			// 		return { id: boardId, name: name, columns: columns };
			// 	} else {
			// 		return board;
			// 	}
			// });
			// state.boards = x;
			const index = state.boards.findIndex((board) => board.id === boardId);
						if (index !== -1) {
							state.boards[index].name = name ?? state.boards[index].name;
							state.boards[index].columns =
								columns ?? state.boards[index].columns;
						}
console.log(current(state.boards))
		},
	},
});
/**function updateOne(array, obj) {
  return array.map((item) => {
    if (obj.id === item.id) {
    // update whatever you want
    return {...item, title: obj.title };
   } else {
    return item;
   }
 })
}
 */

export default boardsSlice.reducer;
export const { addBoard, deleteBoard, editBoard } = boardsSlice.actions;
