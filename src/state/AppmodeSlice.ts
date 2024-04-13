import { createSlice } from '@reduxjs/toolkit';
interface Mode {
	mode: string;
}


const storedMode = localStorage.getItem('trello-Appmode');
const initialState: Mode = storedMode
	? JSON.parse(storedMode)
	: { mode: 'dark' };

const AppModeSlice = createSlice({
	name: 'app-mode',
	initialState,
	reducers: {
		toggleMode: (state) => {
			if (state.mode == 'dark') {
				state.mode = 'light';
			} else {
				state.mode = 'dark';
			}
			document.body.className = state.mode;
			const val=state.mode;
			localStorage.setItem(
				'trello-Appmode',
				JSON.stringify({ mode: val })
			);
		},
	},
});

export default AppModeSlice.reducer;
export const { toggleMode } = AppModeSlice.actions;
