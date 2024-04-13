import { configureStore } from '@reduxjs/toolkit';
// ...
import BoardsSlice from './BoardsSlilce'
import AppmodeSlice from './AppmodeSlice';
export const store = configureStore({
	reducer: {
		boards:BoardsSlice,
		mode:AppmodeSlice,
	},
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
