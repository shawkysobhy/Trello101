import { createPortal } from 'react-dom';
import TextInput from '../../ui/TextInput';
import ModalBtton from '../../ui/ModalBtton';
// import { useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
// import { useState } from 'react';
import CrossIcon from '../../assets/icon-cross.svg'
export type FormFields = {
	name: string;
	columnNumbers?: { column: string }[];
};
export default function CreateBoardModal() {
	// const {
	// 	getValues,
	// 	reset,
	// } = useForm<FormFields>();
	const methods = useForm<FormFields>({
		defaultValues: {
			name: '',
			columnNumbers:[{column:''}]
		},
	});
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = methods;
	// const dispatch = useDispatch();
	// const createBoardHandler = () => {};
	const { fields, append,remove } = useFieldArray({
		name: 'columnNumbers',
		control,
	});
	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return createPortal(
		<dialog id='create_board_modal' className=' modal'>
			<div className='modal-box modal-custom-container'>
				<h3 className='mb-8 text-base font-semibold'>Add New Board</h3>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col space-y-6'>
							<label className='flex flex-col w-full space-y-2 max-w-none form-control '>
								<div className='label'>
									<span className='text-xs font-bold text-text '>Name</span>
								</div>
								<FormRow error={errors.name}>
									<TextInput name='name'  />
								</FormRow>
							</label>
							<label className='flex flex-col w-full space-y-2 max-w-none form-control '>
								<div className='label'>
									<span className='text-xs font-bold text-text'>Columns</span>
								</div>
							</label>
							{fields?.map((field, index) => {
								return (
									<div
										className='flex-row items-center justify-between space-x-4 form-control'
										key={field.id}>
										<TextInput
											name={`columnNumbers.${index}.column` as const}
										/>
										{fields.length>1&& (
											<button onClick={()=>remove(index)}>
												<img src={CrossIcon} />
											</button>
										)}
									</div>
								);
							})}
							<div className='flex flex-col space-y-4 font-bold text-[14px] '>
								<ModalBtton
									color='primary'
									type='button'
									onClick={() => append({ column: '' })}>
									{' '}
									Add New Column
								</ModalBtton>
								<ModalBtton color='secondary' type='submit'>
									Save Chagnes
								</ModalBtton>
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
