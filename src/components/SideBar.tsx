import BoardIcon from '../assets/icon-board';
import BoardButton from './BoardButton';
import MoonIcon from '../assets/icon-dark-theme.svg';
import SunIcon from '../assets/icon-light-theme.svg';
import eyeIcon from '../assets/icon-show-sidebar.svg';
import hideSidebar from '../assets/icon-hide-sidebar.svg';
import { useState } from 'react';
export default function SideBar() {
	const [checked, setIsChecked] = useState(false);
	return (
		<div
			className='hidden md:flex fixed flex-col justify-between bg-background  min-w-[300px] z-10  border-r border-border
          h-[calc(100vh-96px)] pt-6 pb-14  left-0 text-gray'>
			<div>
				<p className='mb-8 ml-12 text-xs font-bold tracking-widest border-r border-border'>
					ALL BOARDS (5)
				</p>
				<div className='flex flex-col space-y-2 '>
					{/* <button className='flex items-center w-[90%] py-6 space-x-4 text-2xl font-semibold text-white rounded-r-full pl-14 bg-brand'>
						<BoardIcon color='white' />
						<p>Platform Launch</p>
					</button> */}
					<BoardButton active={true}>Platform Launch</BoardButton>
					<BoardButton>Marketing Plan</BoardButton>
					<BoardButton>Roadmap</BoardButton>
					<BoardButton>Projects Charts</BoardButton>
					<button className='flex items-center w-[90%] py-6 space-x-4 text-base font-bold text-brand  pl-14 hover:opacity-65 transition-all duration-300'>
						<BoardIcon color='#635fc7' />
						<p>+ Create New Board</p>
					</button>{' '}
				</div>
			</div>
			<div>
				<div className='ml-12'>
					<div className=' py-8 px-8 bg-secondaryBackground w-[240px] rounded-lg flex items-center justify-center space-x-6 '>
						<img src={MoonIcon} />
						<input
							type='checkbox'
							role='switch'
							className=' toggle toggle-lg [--tglbg:#635fc7] bg-white hover:bg-white border-secondaryBackground'
							onChange={() => setIsChecked((prev) => !prev)}
							checked={checked}
						/>
						<img src={SunIcon} />
					</div>
					<div className='flex items-center px-8 py-4 space-x-6'>
						<img src={hideSidebar} />
						<p className='text-base font-bold'>Hide Sidebar</p>
					</div>
				</div>
			</div>
		</div>
	);
}
