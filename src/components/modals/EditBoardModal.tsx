import { createPortal } from 'react-dom';
import { TextInput, ModalButton } from '../../ui';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import CrossIcon from '../../assets/icon-cross.svg';
import { editBoard } from '../../state/BoardsSlilce';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useEffect } from 'react';
import useBoard from '../hooks/useBoard';
import Column from '../board/Column';

export type FormFields = {
	name: string;
	columnNumbers?: { column: string }[];
};

export default function EditBoardModal() {
	const activeBoardId = useSelector(
		(state: RootState) => state.activeBoardId.activeBoardId
	);
	const { boardWithId } = useBoard(activeBoardId);
	const columns = boardWithId.columns;

	const methods = useForm({
		defaultValues: {
			name: boardWithId.name,
			columnNumbers: columns,
		},
	});
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = methods;
	useEffect(() => {
		reset({ name: boardWithId.name, columnNumbers: columns });
	}, [activeBoardId]);

	const dispatch = useDispatch();
	const { fields, append, remove } = useFieldArray({
		name: 'columnNumbers',
		control,
	});
	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(columns);
		console.log(data.columnNumbers);

		dispatch(
			editBoard({
				boardId: activeBoardId,
				columns: data.columnNumbers,
				name: data.name || boardWithId.name,
			})
		);
		reset();
		if (document) {
			(document.getElementById('edit_board_modal') as HTMLFormElement).close();
		}
	};

	return createPortal(
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
									onClick={() =>
										append({ column: '', id: uuidv4(), tasks: [] })
									}>
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
		</dialog>,
		document.body
	);
}
