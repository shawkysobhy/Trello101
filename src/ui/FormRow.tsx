import SmallErrorMessage from './ErrorMessage';
type FormRowProps={
	children:React.ReactNode
	error:any;
}
function FormRow({ children, error }:FormRowProps) {
	return (
		<>
				{children}
				{error && <SmallErrorMessage message={error?.message} />}
		</>
	);
}

export default FormRow;
