import BoardStack from './BoardStack';
import NewColumn from './NewColumn';

export default function Board() {
	return (
		<div className=' absolute  md:left-[300px] flex  min-w-full   bg-secondaryBackground py-10 px-14 space-x-12'>
			<BoardStack />
			<BoardStack />
			<BoardStack />
			<NewColumn />
		</div>
	);
}
