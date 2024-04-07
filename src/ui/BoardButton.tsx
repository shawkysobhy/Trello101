import React from 'react';
import BoardIcon from '../assets/icon-board';
type BoardButtonProps = {
	children: React.ReactNode;
	active?: string;
	id:string;
	onClick?: () => void;
};
export default function BoardButtton({
	id,
	children,
	active,
	onClick,
}: BoardButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`flex items-center w-[90%] py-4 space-x-4 text-base font-bold  rounded-r-full pl-14  ${
				active==id ? 'text-white bg-brand' : 'text-gray'
			}`}>
			<BoardIcon color={`${active ? 'white' : 'gray'}`} />
			<p>{children}</p>
		</button>
	);
}
