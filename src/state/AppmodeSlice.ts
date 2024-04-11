import { createSlice } from '@reduxjs/toolkit';
interface Mode {
	mode: string;
}

// const [mode, setMode] = useState(() => {
// 	const storedValue = localStorage.getItem('mode');
// 	return storedValue ? JSON.parse(storedValue) : 'dark';
// });
// useEffect(() => {
// 	localStorage.setItem('mode', JSON.stringify(mode));
// 	document.body.classList.add(`body-${mode}`);
// }, [mode]);

// const initialState: mode = {
// 	modeName: mode,
// };
const storedMode = localStorage.getItem('trello-Appmode');
console.log('stored MOde', storedMode);

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
			localStorage.setItem(
				'trello-Appmode',
				JSON.stringify({ mode: state.mode })
			);
		},
	},
});

export default AppModeSlice.reducer;
export const { toggleMode } = AppModeSlice.actions;
