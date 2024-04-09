import { configureStore } from '@reduxjs/toolkit';
// ...
import BoardsSlice from './BoardsSlilce'
import ActiveBoardSlice from './ActiveBoardSlice';
import AppmodeSlice from './AppmodeSlice';
export const store = configureStore({
	reducer: {
		boards:BoardsSlice,
		activeBoardId:ActiveBoardSlice,
		mode:AppmodeSlice,
	},
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
