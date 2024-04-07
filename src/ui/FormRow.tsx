import SmallErrorMessage from './ErrorMessage';
type FormRowProps={
	children:React.ReactNode
	error:any;
}
function FormRow({ children, error }:FormRowProps) {
	return (
		<div className='flex flex-col w-full space-y-2'>
				{children}
				{error && <SmallErrorMessage message={error?.message} />}
		</div>
	);
}

export default FormRow;
