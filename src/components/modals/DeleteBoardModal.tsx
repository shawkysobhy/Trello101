import { createPortal } from 'react-dom';
import { ModalButton } from '../../ui';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../state/BoardsSlilce';
import useBoard from '../hooks/useBoard';
import { resetState } from '../../state/ActiveBoardSlice';
export default function DeleteBoardModal() {
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);

	const { boardWithId } = useBoard(activeBoardId);
	const dispatch = useDispatch();
	const deleteBoardHandler = () => {
		dispatch(deleteBoard(activeBoardId));
		// dispatch(resetState());
	};
	const boardName = ` ${boardWithId?.name} `;
	return createPortal(
		<dialog id='delete_board_modal' className='modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-4 font-bold text-red-600 text-medium'>
					Delete {boardName} board?
				</h3>
				<div className='flex flex-col space-y-6'>
					<p className='text-[14px] font-semibold text-gray'>
						Are you sure you want to delete the{' '}
						<span className='font-black text-slate-200 text-[14px]'>
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
		</dialog>,
		document.body
	);
}
