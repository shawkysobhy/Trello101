import React from 'react';
import BoardIcon from '../assets/icon-board';
import { useDispatch } from 'react-redux';
import { setActiveId } from '../state/ActiveBoardSlice';
type BoardButtonProps = {
	children: React.ReactNode;
	active?: string;
	id:string;
};
export default function BoardButtton({
	id,
	children,
	active,
}: BoardButtonProps) {
	const dispatch=useDispatch()
	return (
		<button
			onClick={() => {
				dispatch(setActiveId(id))
				if (document) {
					(
						document?.getElementById('navigate_board_modal') as HTMLFormElement
					)?.close();
				}
			}}
			className={`flex items-center w-[90%] py-4 space-x-4 text-base font-bold  rounded-r-full pl-14  ${
				active == id ? 'text-white bg-brand' : 'text-gray'
			}`}>
			<BoardIcon color={`${active ? 'white' : 'gray'}`} />
			<p>{children}</p>
		</button>
	);
}
