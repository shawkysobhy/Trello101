import { createModalBoardId, modalOpenHandler } from '../utils';
import { BoardButton } from '../ui';
import BoardIcon from '../assets/icon-board';
import useBoard from '../hooks/useBoard';
export default function BoardList() {
	const {boards,currentActiveBoard:{id :activeBoardId}}=useBoard()
	return (
		<div className='flex flex-col space-y-2 '>
			{boards?.map((board) => (
				<BoardButton key={board.id} id={board.id} activeBoardId={activeBoardId}>
					{board.name}
				</BoardButton>
			))}
			<button
				onClick={() => modalOpenHandler(createModalBoardId)}
				className='flex items-center w-[90%] py-6 space-x-4 text-base font-bold text-brand  pl-14 hover:opacity-65 transition-all duration-300'>
				<BoardIcon color='#635fc7' />
				<p>+ Create New Board</p>
			</button>{' '}
		</div>
	);
}
