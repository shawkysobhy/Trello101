import { createPortal } from 'react-dom';
import { TextInput, ModalButton } from '../../../ui';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import FormRow from '../../../ui/FormRow';
import CrossIcon from '../../../assets/icon-cross.svg';
import { addBoard } from '../../../state/BoardsSlilce';
import { Board } from '../../../state/models';
import { Column } from '../../../state/models';
import { setActiveBoardId } from '../../../state/ActiveBoardSlice';
import { createModalBoardId, navigateModalBoardId } from '../../utils/utils';
import useBoard from '../../hooks/useBoard';
export type FormFields = {
	name: string;
	columnNumbers?: { column: string }[];
};
export default function CreateBoardModal() {
	const methods = useForm<FormFields>({
		defaultValues: {
			name: '',
			columnNumbers: [{ column: '' }],
		},
	});
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = methods;
	const dispatch = useDispatch();
	const { fields, append, remove } = useFieldArray({
		name: 'columnNumbers',
		control,
	});
	const { boards } = useBoard();
	const boardId = (boards.length).toString();
	const onSubmit: SubmitHandler<FormFields> = (data) => {
		const columns: Column[] = (data.columnNumbers?.map((column, index) => {
			return {
				id: `${index}`,
				column: column.column,
				tasks: [],
			};
		}) || []) as Column[];
		const board: Board = {
			id: boardId,
			name: data.name,
			columns: columns,
		};
		dispatch(addBoard(board));
		dispatch(setActiveBoardId(boardId));
		reset();
		if (document) {
			(document.getElementById(createModalBoardId) as HTMLFormElement).close();
			(document.getElementById(navigateModalBoardId) as HTMLFormElement).close();
		}
		
	};
	return createPortal(
		<dialog id={createModalBoardId} className=' modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-8 text-base font-semibold'>Add New Board</h3>
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
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text'>Columns</span>
								</div>
							</label>
							{fields?.map((field, index) => {
								return (
									<div
										className='flex-row items-center space-x-4 form-control'
										key={field.id}>
										<FormRow error={errors.columnNumbers?.[index]?.column}>
											<TextInput
												validationRuels={{ required: 'column name required' }}
												name={`columnNumbers.${index}.column` as const}
											/>
										</FormRow>
										{fields.length > 1 && (
											<button onClick={() => remove(index)}>
												<img src={CrossIcon} />
											</button>
										)}
									</div>
								);
							})}
							<div className='flex flex-col space-y-4 font-bold text-[14px] '>
								<ModalButton
									color='secondary'
									type='button'
									onClick={() => append({ column: '' })}>
									{' '}
									Add New Column
								</ModalButton>
								<ModalButton color='primary' type='submit'>
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
