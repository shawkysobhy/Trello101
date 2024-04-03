import Card from './Card';

export default function BoardStack() {
	//outline-gray outline-2 outline-dashed for empty stack
	return (
		<div className='w-[280px]   flex-shrink-0 flex flex-col space-y-10     '>
			<div className='flex flex-row items-center space-x-4'>
				<div className='bg-blue-400 rounded-full w-7 h-7'></div>
				<p className='text-xs font-semibold text-gray'>Todo (7)</p>
			</div>
			<div className='flex flex-col h-screen space-y-10 text-2xl rounded-md text-title '>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
