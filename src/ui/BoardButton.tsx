import React from 'react';
import BoardIcon from '../assets/icon-board';
import { useDispatch } from 'react-redux';
// import { setActiveBoardId } from '../state/ActiveBoardSlice';
import { modalCloseHandler, navigateModalBoardId } from '../utils';
import useBoard from '../hooks/useBoard';
import { setActiveBoard } from '../state/BoardsSlilce';
type BoardButtonProps = {
	children: React.ReactNode;
	activeBoardId?: string;
	id: string;
};
export default function BoardButtton({
	id,
	children,
	activeBoardId,
}: BoardButtonProps) {
	// const {currentActiveBoard}=useBoard()
	const dispatch = useDispatch();
	return (
		<button
			onClick={() => {
				dispatch(setActiveBoard({id}));
				modalCloseHandler(navigateModalBoardId);
			}}
			className={`flex items-center w-[90%] py-4  hover:bg-[#a8a4ff] hover:text-white space-x-4 text-base font-bold  rounded-r-full pl-14  ${
				activeBoardId == id ? 'text-white bg-brand' : 'text-gray'
			}`}>
			<BoardIcon color={`${activeBoardId == id ? 'white' : 'gray'}`} />
			<p>{children}</p>
		</button>
	);
}
