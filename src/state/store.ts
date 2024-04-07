import { configureStore } from '@reduxjs/toolkit';
// ...
import BoardsSlice from './BoardsSlilce'
import ActiveBoardSlice from './ActiveBoardSlice';
export const store = configureStore({
	reducer: {
		boards:BoardsSlice,
		activeBoardId:ActiveBoardSlice,
	},
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
