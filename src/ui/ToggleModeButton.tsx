import { useSelector } from 'react-redux';
import MoonIcon from '../assets/icon-dark-theme.svg';
import SunIcon from '../assets/icon-light-theme.svg';
import { RootState } from '../state/store';
import { toggleMode } from '../state/AppmodeSlice';
import { useDispatch } from 'react-redux';
export default function ToggleModeButton() {
  const dispatch=useDispatch()
	const mode = useSelector((state: RootState) => state.mode.modeName);
  console.log(mode)
	return (
		<div className=' py-8 px-8 bg-secondaryBackground w-[240px] rounded-lg flex items-center justify-center space-x-6 '>
			<img src={MoonIcon} />
			<input
				type='checkbox'
				role='switch'
				className=' toggle toggle-lg [--tglbg:#635fc7] bg-white hover:bg-white border-secondaryBackground'
				onChange={() => dispatch(toggleMode())}
			/>
			<img src={SunIcon} />
		</div>
	);
}
