import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	useFieldArray,
} from 'react-hook-form';
import { addTask } from '../../state/BoardsSlilce';
import { createTaskModalId, modalCloseHandler } from '../../utils';
import CrossIcon from '../../assets/icon-cross.svg';
import { Task, SubTask } from '../../models';
import useBoard from '../../hooks/useBoard';
import { FormRow, TextInput, ModalButton } from '../../ui';
export type FormFields = {
	id: string;
	title: string;
	description: string;
	status: string;
	subtasks?: { title: string }[];
};
export default function CreateTaskdModal() {
	const { currentActiveBoard } = useBoard();
	const dispatch = useDispatch();
	const [selectedStatus, setSelectedStatus] = useState(
		currentActiveBoard.columns[0].id
	);
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedStatus(event.target.value);
	};
	const columns = currentActiveBoard.columns;
	const methods = useForm<FormFields>({
		defaultValues: {
			title: '',
			description: '',
			subtasks: [{ title: 'completed' }],
		},
	});
	const {
		handleSubmit,
		control,
		reset,
		register,
		formState: { errors },
	} = methods;
	const { fields, append, remove } = useFieldArray({
		name: 'subtasks',
		control,
	});
	useEffect(() => {
		setSelectedStatus(currentActiveBoard.columns[0].id);
	}, [currentActiveBoard]);
	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data)
		const subtasks: SubTask[] =
			data.subtasks?.map((subtask) => {
				return {
					title: subtask.title,
					isChecked: false,
				};
			}) || [];
		const task: Task = {
			id: uuidv4(),
			columnId: selectedStatus,
			title: data.title,
			description: data.description,
			boardId: currentActiveBoard.id,
			subtasks,
		};
		dispatch(addTask(task));
		reset();
		modalCloseHandler(createTaskModalId);

	};
	return (
		<dialog id={createTaskModalId} className=' modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-8 text-base font-semibold'>Add New Task</h3>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col space-y-6'>
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text '>Name</span>
								</div>
								<FormRow error={errors.title}>
									<TextInput
										name='title'
										validationRuels={{ required: 'task name required' }}
									/>
								</FormRow>
							</label>
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text '>
										Description
									</span>
								</div>
								<FormRow error={errors.description}>
									<textarea
										className='w-full px-4 py-3 text-base border rounded-md textarea border-brand bg-background'
										{...register('description')}
									/>
								</FormRow>
							</label>
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text'>Sub Tasks</span>
								</div>
							</label>
							{fields?.map((field, index) => {
								return (
									<div
										className='flex-row items-center space-x-4 form-control'
										key={field.id}>
										<FormRow error={errors.subtasks?.[index]?.title}>
											<TextInput
												validationRuels={{ required: 'subtask  required' }}
												name={`subtasks.${index}.title` as const}
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
									onClick={() => append({ title: '' })}>
									+ Add new subtask
								</ModalButton>
								<label className='flex flex-col w-full space-y-2 max-w-none '>
									<div className='label'>
										<span className='text-xs text-text '>Status</span>
									</div>
									<FormRow error={errors.status}>
										<select
											className=' mb-10  text-[14px]   w-full font-semibold   rounded-md   bg-background px-4 py-3 border border-brand '
											onChange={handleSelectChange}>
											{columns.map((column, index) => (
												<option
													key={index}
													value={column.id}
													className='font-medium'>
													{column.column}
												</option>
											))}
										</select>
									</FormRow>
								</label>
								<ModalButton color='primary' type='submit'>
									Create Task
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
