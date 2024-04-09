import { createSlice } from '@reduxjs/toolkit';
interface mode {
	modeName: string;
}

const initialState: mode = {
	modeName: 'dark',
};
const AppModeSlice = createSlice({
	name: 'app-mode',
	initialState,
	reducers: {
		toggleMode: (state) => {
			if (state.modeName == 'dark') {
				state.modeName = 'light';
			} else {
				state.modeName = 'dark';
			}
			document.body.className = state.modeName;
		},
	},
});

export default AppModeSlice.reducer;
export const { toggleMode } = AppModeSlice.actions;
