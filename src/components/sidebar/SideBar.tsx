import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {BoardButton} from '../../ui';
import BoardIcon from '../../assets/icon-board';
import MoonIcon from '../../assets/icon-dark-theme.svg';
import SunIcon from '../../assets/icon-light-theme.svg';
import hideSidebar from '../../assets/icon-hide-sidebar.svg';
type activeBoardProps = {
	activeBoardId: string;
	handleActiveBoard: (id: string) => void;
};
export default function SideBar({
	activeBoardId,
	handleActiveBoard,
}: activeBoardProps) {
	const boards = useSelector((state: RootState) => state.boards.boards);
	const [checked, setIsChecked] = useState(false);
	return (
		<div
			className='overflow-y-auto hidden md:flex fixed flex-col justify-between bg-background  min-w-[300px] z-10  border-r border-border
          h-[calc(100vh-96px)] pt-6 pb-14  left-0 text-gray'>
			<div>
				<p className='mb-8 ml-12 text-xs font-bold tracking-widest border-r border-border'>
					ALL BOARDS (5)
				</p>
				<div className='flex flex-col space-y-2 '>
					{boards?.map((board) => (
						<BoardButton
							key={board.id}
							id={board.id}
							onClick={() => handleActiveBoard(board.id)}
							active={activeBoardId}>
							{board.name}
						</BoardButton>
					))}
					<button
						onClick={() => {
							if (document) {
								(
									document.getElementById(
										'create_board_modal'
									) as HTMLFormElement
								).showModal();
							}
						}}
						className='flex items-center w-[90%] py-6 space-x-4 text-base font-bold text-brand  pl-14 hover:opacity-65 transition-all duration-300'>
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
