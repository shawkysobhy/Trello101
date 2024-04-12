import {BoardList} from './';
import useBoard from '../hooks/useBoard';
import ToggleModeButton from '../ui/ToggleModeButton';
import hideSidebar from '../assets/icon-hide-sidebar.svg';
export default function SideBar() {
	const { boards } = useBoard();
	return (
		<div
			className='overflow-y-auto hidden md:flex fixed flex-col justify-between bg-background  min-w-[300px] z-10  border-r border-border
          h-[calc(100vh-96px)] pt-6 pb-14  left-0 text-gray'>
			<div>
				<p className='mb-8 ml-12 text-xs font-bold tracking-widest '>
					ALL BOARDS ({boards.length})
				</p>
				<BoardList />
			</div>
			<div>
				<div className='ml-12'>
					<ToggleModeButton />
					<div className='flex items-center px-8 py-4 space-x-6'>
						<img src={hideSidebar} />
						<p className='text-base font-bold'>Hide Sidebar</p>
					</div>
				</div>
			</div>
		</div>
	);
}
