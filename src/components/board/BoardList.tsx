import BoardIcon from '../../assets/icon-board';
import { BoardButton } from '../../ui';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

export default function BoardList() {
	const boards = useSelector((state: RootState) => state.boards.boards);
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);

	return (
		<div className='flex flex-col space-y-2 '>
			{boards?.map((board) => (
				<BoardButton key={board.id} id={board.id} active={activeBoardId}>
					{board.name}
				</BoardButton>
			))}
			<button
				onClick={() => {
					if (document) {
						(
							document.getElementById('create_board_modal') as HTMLFormElement
						).showModal();
					}
				}}
				className='flex items-center w-[90%] py-6 space-x-4 text-base font-bold text-brand  pl-14 hover:opacity-65 transition-all duration-300'>
				<BoardIcon color='#635fc7' />
				<p>+ Create New Board</p>
			</button>{' '}
		</div>
	);
}
