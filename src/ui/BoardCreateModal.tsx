import { createPortal } from 'react-dom';
import TextInput from './TextInput';
import ModalBtton from './ModalBtton';

export default function BoardCreateModal() {
	return createPortal(
		<dialog id='create_board_modal' className=' modal'>
			<div className='modal-box  max-w-none  w-[480px] bg-background text-text p-12  '>
				<h3 className='mb-8 text-base font-semibold'>Add New Board</h3>
				<div className='flex flex-col space-y-6'>
					<label className='flex flex-col w-full space-y-2 max-w-none form-control '>
						<div className='label'>
							<span className='text-xs font-bold text-text '>Name</span>
						</div>
						<TextInput />
					</label>
					<label className='flex flex-col w-full space-y-2 max-w-none form-control '>
						<div className='label'>
							<span className='text-xs font-bold text-text'>Columns</span>
						</div>
						<TextInput />
					</label>
					<div className='flex flex-col space-y-4 font-bold text-[14px] '>
						<ModalBtton color='primary'> Add New Column</ModalBtton>
						<ModalBtton color='secondary'>Save Chagnes</ModalBtton>
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
