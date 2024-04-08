import iconVEllipsis from '../assets/icon-vertical-ellipsis.svg';
import ChevronDown from '../assets/icon-chevron-down.svg';
import { AddTaskMobileButton, Logo } from '../ui';
import useBoard from './hooks/useBoard';
import {
	deleteModalBoardId,
	editModalBoardId,
	modalOpenHandler,
	createTaskId,
	navigateModalBoardId,
} from './utils/utils';
function Header() {
	const { currentActiveBoard } = useBoard();
	return (
		<header className='flex items-center border-b border-border bg-background '>
			<Logo />
			<div className='flex items-center justify-between flex-grow px-6 md:px-12'>
				<div className='flex items-center space-x-4'>
					<h1 className='text-4xl font-bold text-text'>
						{currentActiveBoard.name}
					</h1>
					<button
						className='flex items-center justify-between md:hidden'
						onClick={() => modalOpenHandler(navigateModalBoardId)}>
						<img src={ChevronDown} />
					</button>
				</div>{' '}
				<div className='flex items-center space-x-4'>
					<button
						onClick={() => modalOpenHandler(createTaskId)}
						className='text-[15px]  hidden md:block bg-brand text-text px-7 py-5 rounded-full font-bold'>
						+Add New Task
					</button>
					<AddTaskMobileButton
						modalOpenHandler={modalOpenHandler}
						createTaskId={createTaskId}
					/>
					<div className='dropdown dropdown-end'>
						<button className='px-4 py-2 rounded-full hover:bg-secondaryBackground'>
							<img src={iconVEllipsis} />
						</button>
						<ul
							tabIndex={0}
							className=' text-base  flex flex-col  w-[200px] menu dropdown-content z-[1]  shadow bg-base-100 rounded-box  mt-4 px-8 py-6'>
							<li>
								<button
									className='p-4'
									onClick={() => modalOpenHandler(editModalBoardId)}>
									Edit Board
								</button>
							</li>
							<li>
								<button
									onClick={() => modalOpenHandler(deleteModalBoardId)}
									className='p-4 text-red-500'>
									Delete Board
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
