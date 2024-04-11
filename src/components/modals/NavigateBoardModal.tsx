import { createPortal } from 'react-dom';
import {BoardList} from '../';
import ToggleModeButton from '../../ui/ToggleModeButton';
export default function NavigateBoardModal() {
	return createPortal(
		<dialog id='navigate_board_modal' className='modal'>
			<div className='py-8 px-0 modal-box max-w-none  w-[80%] sm:w-[480px] bg-background text-text'>
				<div className='flex flex-col space-y-8'>
					<div>
						<p className='mb-8 ml-12 text-xs font-bold tracking-widest'>
							ALL BOARDS (5)
						</p>
						<BoardList />
					</div>
					<div className='ml-8'>
						<ToggleModeButton />
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
