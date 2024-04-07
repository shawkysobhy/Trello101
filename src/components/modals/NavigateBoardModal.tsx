import { createPortal } from 'react-dom';
// import {BoardButton} from '../../ui'
import BoardIcon from '../../assets/icon-board';
export default function NavigateBoardModal() {
	return createPortal(
		<dialog id='navigate_board_modal' className='modal'>
			<div className='py-8 px-0 modal-box max-w-none  w-[80%] sm:w-[480px] bg-background text-text'>
				<div>
					<p className='mb-8 ml-12 text-xs font-bold tracking-widest'>
						ALL BOARDS (5)
					</p>
					<div className='flex flex-col space-y-2 '>
						{/* <BoardButton active={''}>Platform Launch</BoardButton>
						<BoardButton>Marketing Plan</BoardButton>
						<BoardButton>Roadmap</BoardButton>
						<BoardButton>Projects Charts</BoardButton> */}
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
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>,
		document.body
	);
}
