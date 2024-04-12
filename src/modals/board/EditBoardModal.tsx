import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	useFieldArray,
} from 'react-hook-form';
import { FormRow, TextInput, ModalButton } from '../../ui';
import { v4 as uuidv4 } from 'uuid';

import { editBoard } from '../../state/BoardsSlilce';
import CrossIcon from '../../assets/icon-cross.svg';
import useBoard from '../../hooks/useBoard';
import { editModalBoardId, modalCloseHandler } from '../../utils';
export default function EditBoardModal() {
	const dispatch = useDispatch();
	const {
		currentActiveBoard: { id: activeBoardId },
	} = useBoard();
	const { currentActiveBoard } = useBoard();
	const columns = currentActiveBoard.columns;
	const methods = useForm({
		defaultValues: {
			name: currentActiveBoard.name,
			columnNumbers: columns,
		},
	});
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = methods;
	const { fields, append, remove } = useFieldArray({
		name: 'columnNumbers',
		control,
	});
	useEffect(() => {
		reset({
			name: currentActiveBoard.name,
			columnNumbers: currentActiveBoard.columns,
		});
	}, [activeBoardId, currentActiveBoard]);

	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data.columnNumbers);
		dispatch(
			editBoard({
				boardId: activeBoardId,
				columns: data.columnNumbers,
				name: data.name || currentActiveBoard.name,
			})
		);
		reset({
			columnNumbers: data.columnNumbers,
		});
		reset();
		modalCloseHandler(editModalBoardId);
	};

	return (
		<dialog id='edit_board_modal' className='modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-8 text-base font-semibold'>Edit Board</h3>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col space-y-6'>
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text '>Name</span>
								</div>
								<FormRow error={errors.name}>
									<TextInput
										disabled={true}
										name='name'
										validationRuels={{ required: 'board name required' }}
									/>
								</FormRow>
							</label>
							<label className='modal-label'>
								<div className='label'>
									<span className='text-xs font-bold text-text'>Columns</span>
								</div>
							</label>
							{fields?.map((field, index) => {
								const columnTasks =
									field && field.tasks && field.tasks.length > 0;
								return (
									<div
										className='flex-row items-center space-x-4 form-control'
										key={field.id}>
										<FormRow error={''}>
											<TextInput
												validationRuels={{ required: 'column name required' }}
												name={`columnNumbers.${index}.column` as const}
											/>
										</FormRow>
										{fields.length > 1 && (
											<button
												onClick={() => remove(index)}
												className={`${
													columnTasks ? 'opacity-45 cursor-not-allowed	' : ''
												}`}
												disabled={columnTasks}>
												<img src={CrossIcon} />
											</button>
										)}
									</div>
								);
							})}

							<div className='flex flex-col space-y-4 font-bold text-[14px] '>
								<ModalButton
									color='primary'
									type='button'
									onClick={() => {
										append({
											column: '',
											id: uuidv4(),
											tasks: [],
										});
									}}>
									{' '}
									Add New Column
								</ModalButton>
								<ModalButton color='secondary' type='submit'>
									Save Chagnes
								</ModalButton>
							</div>
						</div>
					</form>
				</FormProvider>
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	);
}
