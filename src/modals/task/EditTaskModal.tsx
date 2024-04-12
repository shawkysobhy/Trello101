import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalButton } from '../../ui';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	useFieldArray,
} from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { Task, SubTask, Column } from '../../models';
import { editTask } from '../../state/BoardsSlilce';
import useBoard from '../../hooks/useBoard';
import { editTaskModalId } from '../../utils';
import useActiveState from '../../hooks/useActiveState';
function findTask(columns: Column[], columnId: string, taskId: string) {
	const column = columns.find((col) => col.id === columnId);
	const task = column?.tasks?.find((task) => task.id === taskId);
	return task;
}

interface newColumn {
	newColumnId: string;
}
export type CombinedInterface = Task & newColumn;

export default function EditTaskModal() {
	const { currentActiveBoard } = useBoard();
	const { activeTaskId, activeColumnId } = useActiveState();
	const columns = currentActiveBoard.columns;
	const dispatch = useDispatch();
	const methods = useForm<CombinedInterface>({});
	const [newColumn, setNewColumn] = useState<string>();
	const {
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		formState: { errors },
	} = methods;
	const { fields } = useFieldArray({
		name: 'subtasks',
		control,
	});
	useEffect(() => {
		const currentTask = findTask(
			currentActiveBoard.columns,
			activeColumnId,
			activeTaskId
		);
		reset(currentTask);
		setNewColumn(currentTask?.columnId);
	}, [activeTaskId, activeColumnId, currentActiveBoard]);

	const handleCheckboxChange = (index: number) => {
		const updatedSubtTasks: SubTask[] = getValues('subtasks') || [];
		updatedSubtTasks[index].isChecked = !updatedSubtTasks[index].isChecked;
		setValue('subtasks', updatedSubtTasks);
	};

	const onSubmit: SubmitHandler<Task> = (data) => {
		console.log(data);
		console.log(newColumn);
		dispatch(editTask({ task: data, newColumnId: newColumn }));
		reset();
		if (document) {
			(document.getElementById(editTaskModalId) as HTMLFormElement).close();
		}
	};
	const checkedTasksCount = getValues('subtasks')?.filter(
		(subtask) => subtask?.isChecked
	).length;
	const checkedTasksString = `(${checkedTasksCount} of ${
		getValues('subtasks')?.length
	})`;

	return <dialog id={editTaskModalId} className='modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-8 text-base font-bold'>{getValues('title')}</h3>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col space-y-6'>
							<p className='text-sm font-semibold text-gray'>
								{getValues('description')?.length <= 0
									? 'No description'
									: getValues('description')}
							</p>
							<label className='modal-label '>
								<div className='label'>
									<span className='text-xs font-bold text-text'>
										subtasks {checkedTasksString}
									</span>
								</div>
							</label>
							{fields?.map((field, index) => {
								return (
									<div
										className='px-2 py-4 rounded-md form-control bg-secondaryBackground'
										key={index}>
										<label className='space-x-4 cursor-pointer label justify-normal'>
											<input
												type='checkbox'
												checked={field.isChecked}
												onChange={() => handleCheckboxChange(index)}
												className=' checkbox-md checkbox [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] border border-brand'
												name={`subtasks.${index}.title` as const}
											/>
											<p className='text-sm font-semibold text-text'>
												{field.title}
											</p>
										</label>
									</div>
								);
							})}
							<div className='flex flex-col space-y-4 font-bold text-[14px] '>
								<label className='flex flex-col w-full space-y-2 max-w-none '>
									<div className='label'>
										<span className='text-xs text-text '>Status</span>
									</div>
									<FormRow error={errors.status}>
										<select
											onChange={(e) => {
												setNewColumn(e.target.value);
											}}
											className=' mb-10  text-[14px]   w-full font-semibold   rounded-md   bg-background px-4 py-3 border border-border '>
											{columns.map((column, index) => (
												<option key={index} value={column.id}>
													{column.column}
												</option>
											))}
										</select>
									</FormRow>
								</label>
								<ModalButton color='primary' type='submit'>
									Save changes
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
}
