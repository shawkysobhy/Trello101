import useBoard from '../hooks/useBoard';
import {
	deleteModalBoardId,
	editModalBoardId,
	modalOpenHandler,
	createTaskModalId,
	navigateModalBoardId,
} from '../utils';
import iconVEllipsis from '../assets/icon-vertical-ellipsis.svg';
import ChevronDown from '../assets/icon-chevron-down.svg';
import { AddTaskMobileButton, Logo } from '../ui';
function Header() {
	const { currentActiveBoard } = useBoard();
	return (
		<header className='flex items-center border-b border-border bg-background '>
			<Logo />
			<div className='flex items-center justify-between flex-grow px-6 md:px-12'>
				<div className='flex items-center space-x-4'>
					<h1
						className='text-3xl font-bold cursor-pointer md:text-4xl text-text'
						onClick={() => modalOpenHandler(navigateModalBoardId)}>
						{currentActiveBoard.name}
					</h1>
					<button
						className='flex items-center justify-between px-3 ju md:hidden'
						onClick={() => modalOpenHandler(navigateModalBoardId)}>
						<img src={ChevronDown} />
					</button>
				</div>{' '}
				<div className='flex items-center space-x-4'>
					<button
						onClick={() => modalOpenHandler(createTaskModalId)}
						className='text-[15px]  hidden md:block bg-brand text-white px-7 py-5 rounded-full font-bold'>
						+Add New Task
					</button>
					<AddTaskMobileButton
						modalOpenHandler={modalOpenHandler}
						createTaskModalId={createTaskModalId}
					/>
					<div className='dropdown dropdown-end bg-background'>
						<button className='px-4 py-2 rounded-full hover:bg-secondaryBackground'>
							<img src={iconVEllipsis} />
						</button>
						<ul
							tabIndex={0}
							className=' text-base  flex flex-col  w-[200px] menu dropdown-content z-[1]  shadow  rounded-box  mt-4 px-8 py-6 bg-background font-semibold'>
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
