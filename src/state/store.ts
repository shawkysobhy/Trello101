import { configureStore } from '@reduxjs/toolkit';
// ...
import BoardsSlice from './BoardsSlilce'
export const store = configureStore({
	reducer: {
		boards:BoardsSlice
	},
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
