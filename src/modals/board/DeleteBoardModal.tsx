import { useDispatch } from 'react-redux';
import useBoard from '../../hooks/useBoard';
import { deleteBoard, setActiveBoard } from '../../state/BoardsSlilce';
// import { resetState } from '../../state/ActiveBoardSlice';
import { ModalButton } from '../../ui';
export default function DeleteBoardModal() {
	const {
		currentActiveBoard: { id: activeBoardId, name: boardName },
	} = useBoard();
	const dispatch = useDispatch();
	const deleteBoardHandler = () => {
		dispatch(deleteBoard(activeBoardId));
		dispatch(setActiveBoard({}));
	};
	return (
		<dialog id='delete_board_modal' className='modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-4 font-bold text-red-600 text-medium'>
					Delete {boardName} board?
				</h3>
				<div className='flex flex-col space-y-6'>
					<p className='text-[14px] font-semibold text-gray'>
						Are you sure you want to delete the{' '}
						<span className='mx-[3px] font-black text-text text-[14px]'>
							{boardName}
						</span>{' '}
						board? This action will remove all columns and tasks and cannot be
						reversed.
					</p>
					<div className='modal-action'>
						<form method='dialog'>
							<div className='flex flex-row space-x-4 text-base font-bold '>
								<ModalButton color='primary' onClick={deleteBoardHandler}>
									Delete
								</ModalButton>
								<ModalButton color='secondary'>Cancel</ModalButton>
							</div>{' '}
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
}
